<div align="center">

# 🏗️ 03 - Solution Architecture

![Architecture](https://readme-typing-svg.demolab.com?font=Fira+Code&size=22&duration=3000&pause=1000&color=00E5FF&center=true&vCenter=true&width=500&lines=Hybrid+Sync+Engine;Next.js+App+Router+%2B+Zustand)

> **"A bridge between the speed of local memory and the reliability of cloud storage."**

<br/>

[![Prev Chapter](https://img.shields.io/badge/Prev_Chapter-Problem_Statement-00E5FF?style=for-the-badge)](02-problem-statement.md)
[![Next Chapter](https://img.shields.io/badge/Next_Chapter-Key_Features-4a45ea?style=for-the-badge)](04-key-features.md)

</div>

<br/>
<div align="center">
<img width="600" src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png"/>
</div>
<br/>

## 🏛️ The 4-Layer Architecture

FlowShan isn't just a Next.js app; it's a **distributed state system**. We architected it in four distinct layers:

### 1. Presentation Layer (The "Skin")
*   **Tech:** React 19, Framer Motion, Tailwind CSS v4.
*   **Role:** Renders the UI and handles micro-interactions.
*   **Constraint:** Must never block the main thread for >16ms (60fps).

### 2. State Layer (The "Brain")
*   **Tech:** Zustand (7 specific stores).
*   **Role:** Acts as the Single Source of Truth for the UI.
*   **Logic:** Optimistically applies changes before network requests.

### 3. Sync Layer (The "Bridge")
*   **Tech:** Custom `SyncService`, `use-tasks.ts`.
*   **Role:** Debounces user input and orchestrates API calls.
*   **Mechanism:** Handles the critical transition from `guest_id` to `user_id`.

### 4. Persistence Layer (The "Vault")
*   **Tech:** PostgreSQL, Prisma ORM.
*   **Role:** Permanent storage and relational integrity.

<br/>
<div align="center">
<img width="600" src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png"/>
</div>
<br/>

## 🔄 Data Sync Lifecycle

How a single "Task Creation" flows through the system:

```mermaid
sequenceDiagram
    participant User
    participant UI as React UI
    participant Store as Zustand Store
    participant API as Next.js API
    participant DB as PostgreSQL

    User->>UI: Creates "Buy Milk"
    UI->>Store: Dispatch add_task (Optimistic)
    Store-->>UI: Update View (Latency: ~0ms)
    
    Note right of Store: Background Sync Starts
    
    Store->>API: POST /api/tasks
    API->>DB: Prisma.task.create()
    DB-->>API: Returns {id: 123}
    API-->>Store: Confirms Save (Replaces Temp ID)
    
    alt Network Failed?
        Store->>UI: Rollback & Show Toast
    end
```

<br/>
<div align="center">
<img width="600" src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png"/>
</div>
<br/>

## 🛠️ Verified Code Evidence

### The State Stores
We split state to prevent unneccesary re-renders:
*   `src/store/ui-store.ts`: Modal states, sidebar toggle.
*   `src/store/project-store.ts`: Lists, cards, and board logic.
*   `src/store/task-store.ts`: Task details and subtasks.

### The API Surface
*   `src/app/api/projects/route.ts`: CRUD for projects.
*   `src/app/api/tasks/route.ts`: Task management.
*   `src/app/api/notes/route.ts`: Rich text notes.

<br/>
<div align="center">
<img width="600" src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png"/>
</div>
<br/>

## 🔗 Navigation

<div align="center">

[![Prev](https://img.shields.io/badge/Prev-02_Problem_Statement-00E5FF?style=for-the-badge&logo=readthedocs&logoColor=white)](02-problem-statement.md)
[![Next](https://img.shields.io/badge/Next-04_Key_Features-4a45ea?style=for-the-badge&logo=readthedocs&logoColor=white)](04-key-features.md)

</div>