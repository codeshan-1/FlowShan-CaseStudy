<div align="center">

# 📦 11 - Product Scope & Requirements

![Scope](https://readme-typing-svg.demolab.com?font=Fira+Code&size=22&duration=3000&pause=1000&color=00E5FF&center=true&vCenter=true&width=500&lines=What+We+Built;MVP+Definition;Out+of+Scope)

> **"A rigorous definition of what is 'Done' ensures we don't succumb to scope creep."**

<br/>

[![Prev Chapter](https://img.shields.io/badge/Prev_Chapter-Impact-00E5FF?style=for-the-badge)](10-results-impact.md)
[![Next Chapter](https://img.shields.io/badge/Next_Chapter-Roadmap-4a45ea?style=for-the-badge)](12-roadmap.md)

</div>

<br/>
<div align="center">
<img width="600" src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png"/>
</div>
<br/>

## ✅ In Scope (The MVP)

We committed to delivering a fully functional single-player productivity suite.

### 1. Functional Modules
*   **Kanban Board:** Full CRUD, drag-and-drop, label management.
*   **Interactive Calendar:** Month/Week views, task overlay.
*   **Notes App:** Rich text editor, autosave, tagging.
*   **Client CRM:** Simple contact management linked to projects.

### 2. Infrastructure
*   **Guest Mode:** Full feature access without login.
*   **Localization:** Native Arabic (RTL) & English support.
*   **Theme:** Light/Dark mode with system detection.

<br/>

## ❌ Out of Scope (For Now)

To ensure high quality, we explicitly excluded:

*   **Real-Time Multiplayer:** Websockets for concurrent editing (e.g., seeing other cursors).
*   **Native Mobile Apps:** React Native / iOS builds (Web Mobile is supported).
*   **Team RBAC:** Roles like "Admin", "Editor", "Viewer". Currently, it's personal workspaces only.

<br/>
<div align="center">
<img width="600" src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png"/>
</div>
<br/>

## 📋 Requirement Verification Matrix

| Requirement | Status | Evidence File |
|:---|:---:|:---|
| **Guest can create tasks** | ✅ | `src/store/tasks.ts` (Handles `guest_id`) |
| **Search across modules** | ✅ | `src/app/api/search/route.ts` (Multi-table query) |
| **Data Persistence** | ✅ | `src/lib/prisma.ts` (PostgreSQL connection) |
| **Bilingual Routing** | ✅ | `src/i18n/routing.ts` (Next-Intl setup) |

<br/>
<div align="center">
<img width="600" src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png"/>
</div>
<br/>

## 🔗 Navigation

<div align="center">

[![Prev](https://img.shields.io/badge/Prev-10_Impact-00E5FF?style=for-the-badge&logo=readthedocs&logoColor=white)](10-results-impact.md)
[![Next](https://img.shields.io/badge/Next-12_Roadmap-4a45ea?style=for-the-badge&logo=readthedocs&logoColor=white)](12-roadmap.md)

</div>