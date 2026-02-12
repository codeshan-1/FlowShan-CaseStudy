<div align="center">

# ⚠️ 02 - Problem Statement

![The Challenge](https://readme-typing-svg.demolab.com?font=Fira+Code&size=22&duration=3000&pause=1000&color=00E5FF&center=true&vCenter=true&width=500&lines=The+Latency+Problem;Why+Traditional+Apps+Feel+Slow)

> **"Latency is the killer of flow. Waiting 500ms for a task to save breaks your cognitive momentum."**

<br/>

[![Prev Chapter](https://img.shields.io/badge/Prev_Chapter-Overview-00E5FF?style=for-the-badge)](01-overview.md)
[![Next Chapter](https://img.shields.io/badge/Next_Chapter-Solution_Architecture-4a45ea?style=for-the-badge)](03-solution-architecture.md)

</div>

<br/>
<div align="center">
<img width="600" src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png"/>
</div>
<br/>

## 🛑 The Core Problems

When building a productivity app in 2026, we identified three critical friction points in existing solutions:

### 1. The Interaction Latency Gap
Most modern web apps are "Server-First". When you click a checkbox:
1.  Request goes to server (50ms).
2.  Database processes (20ms).
3.  Response comes back (50ms).
4.  UI updates.

**Result:** A perceiving lag of ~120ms. This feels "sluggish" compared to native desktop apps.

### 2. The "Sign-Up Wall" Friction
Users abandon apps that demand an email before showing value.
**Requirement:** Users must be able to create projects, tasks, and notes **immediately** without an account, and migrate that data seamlessly upon sign-up.

### 3. The "Sync Conflict" Nightmare
If a user goes offline in a train tunnel and moves 10 cards, restoring connection usually results in:
*   Lost data.
*   "Version conflict" dialogs.
*   Broken state.

<br/>
<div align="center">
<img width="600" src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png"/>
</div>
<br/>

## 📉 Constraint Triangle

We had to balance three competing architectural constraints:

| Constraint | Why it's hard |
|:---|:---|
| **Local-First Speed** | Requires duplicating DB logic in the frontend storage. |
| **Cloud Reliability** | Requires a robust 2-way sync engine, not just a simple API. |
| **Cinematic UX** | Heavy animations (Framer Motion) can cause main-thread jank if not optimized. |

<br/>
<div align="center">
<img width="600" src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png"/>
</div>
<br/>

## 🔍 Verified Code Evidence

Where these problems are addressed in the codebase:

-   **Guest-First Auth Logic:**
    *   File: `src/store/auth.ts`
    *   Function: `loginGuest()` initializes a local-only session that persists to `localStorage`.

-   **Optimistic Mutations:**
    *   File: `src/hooks/use-tasks.ts`
    *   Pattern: Updates Zustand store *immediately* before sending exact server request. Reverts on failure.

-   **Sync Service:**
    *   File: `src/lib/sync-service.ts`
    *   Logic: Handles the migration of `guest_data` -> `user_data` upon registration.

<br/>
<div align="center">
<img width="600" src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png"/>
</div>
<br/>

## 🔗 Navigation

<div align="center">

[![Prev](https://img.shields.io/badge/Prev-01_Overview-00E5FF?style=for-the-badge&logo=readthedocs&logoColor=white)](01-overview.md)
[![Next](https://img.shields.io/badge/Next-03_Architecture-4a45ea?style=for-the-badge&logo=readthedocs&logoColor=white)](03-solution-architecture.md)

</div>