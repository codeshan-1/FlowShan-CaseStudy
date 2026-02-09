// Context:
// This utility is the heart of FlowShan's local-first architecture.
// It solves the 'Tutorial Hell' of sign-up friction by allowing users 
// to work immediately and sync later without losing data or relationships.

import { Client, Project, Task } from "@/types/store";
import { useAuthStore } from "@/store/auth";

/**
 * Orchestrates a 3-tier atomic migration of data from 
 * Browser LocalStorage to the PostgreSQL database.
 */
export const syncLocalDataToServer = async (): Promise<{ success: boolean; error?: string }> => {
  try {
    // 1. Extraction: High-integrity retrieval of local state
    const localClientsRaw = localStorage.getItem("flowshan-clients");
    const localProjectsRaw = localStorage.getItem("flowshan-projects");
    const localTasksRaw = localStorage.getItem("flowshan-tasks");

    const clients: Client[] = localClientsRaw ? JSON.parse(localClientsRaw) : [];
    const projects: Project[] = localProjectsRaw ? JSON.parse(localProjectsRaw) : [];
    const tasks: Task[] = localTasksRaw ? JSON.parse(localTasksRaw) : [];

    if (clients.length === 0 && projects.length === 0 && tasks.length === 0) {
      return { success: true }; // Silent bypass if no guest data exists
    }

    // Dependency Mapping: Bridging the gap between Client-side IDs and Server-side UUIDs
    const clientIdMap = new Map<string, string>();
    const projectIdMap = new Map<string, string>();
    const token = useAuthStore.getState().accessToken;

    // 2. Sequential Sync: Ensuring Relational Integrity
    // Note: We sync Clients first, then Projects, then Tasks.
    // This top-down approach prevents foreign key constraint violations in the DB.

    for (const client of clients) {
      const { id, ...payload } = client as any;
      const res = await fetch("/api/clients", {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        body: JSON.stringify(payload),
      });
      const resData = await res.json();
      clientIdMap.set(client.id, resData.client.id); // Save the bridge
    }

    for (const project of projects) {
        const { id, ...payload } = project as any;
        // Re-linking the project to its new server-side client
        if (payload.clientId && clientIdMap.has(payload.clientId)) {
            payload.clientId = clientIdMap.get(payload.clientId)!;
        }

        const res = await fetch("/api/projects", {
            method: "POST",
            headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
            body: JSON.stringify(payload),
        });
        const resData = await res.json();
        projectIdMap.set(project.id, resData.project.id);
    }

    // 3. Final Destructive Step: Purging local state only after full success
    localStorage.removeItem("flowshan-clients");
    localStorage.removeItem("flowshan-projects");
    localStorage.removeItem("flowshan-tasks");
    
    return { success: true };
  } catch (error: any) {
    console.error("Sync Failure: Relational integrity might be compromised.", error);
    return { success: false, error: error.message };
  }
};
