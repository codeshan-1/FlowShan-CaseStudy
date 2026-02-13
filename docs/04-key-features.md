<div align="center">

# ✨ 04 - Key Features & Cinematic UX

![Features](https://readme-typing-svg.demolab.com?font=Fira+Code&size=22&duration=3000&pause=1000&color=00E5FF&center=true&vCenter=true&width=500&lines=The+FlowShan+Experience;Kanban+%7C+Calendar+%7C+Notes)

> **"Built with the philosophy that every click should be delightful."**

<br/>

[![Prev Chapter](https://img.shields.io/badge/Prev_Chapter-Architecture-00E5FF?style=for-the-badge)](03-solution-architecture.md)
[![Next Chapter](https://img.shields.io/badge/Next_Chapter-Technical_Decisions-4a45ea?style=for-the-badge)](05-technical-decisions.md)

</div>

<br/>
<div align="center">
<img width="600" src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png"/>
</div>
<br/>

## 1. 📋 The Cinematic Kanban
We didn’t just want a board; we wanted a **fluid workspace**.
- **Features:** 
  - Drag-and-drop tasks between statuses.
  - Optimistic UI updates (no loading spinners).
  - Real-time progress bars for project completion.
- **Code:** `src/components/kanban/kanban-board.tsx`
- **Tech:** `@dnd-kit/core` + custom collision detection.

<div align="center">
  <img src="../assets/screenshots/kanban-board.webp" width="80%" alt="Kanban Board"/>
</div>

<br/>

## 2. 📅 Interactive Calendar
A calendar that acts as a command center.
- **Features:**
  - Visualize deadlines and task distribution.
  - Drag tasks to reschedule them.
  - Click-to-edit directly from the day cell.
- **Code:** `src/components/calendar/interactive-calendar.tsx`

<div align="center">
  <img src="../assets/screenshots/calendar-view.webp" width="80%" alt="Calendar"/>
</div>

<br/>

## 3. 📝 Local-First Notes
A distraction-free writing environment.
- **Features:**
  - Rich text editing (prose-mirror based).
  - Grid view with "Masonry" layout for cards.
  - Instant auto-save to local storage.
- **Code:** `src/components/notes/editor.tsx`

<div align="center">
  <img src="../assets/screenshots/notes-editor.webp" width="80%" alt="Notes"/>
</div>

<br/>

## 4. 📊 The Dashboard
The single pane of glass for your productivity.
- **Features:**
  - **Greeting System:** Context-aware "Good Morning/Evening".
  - **Activity Heatmap:** Github-style visualization of your work.
  - **Urgent Task Alerts:** Automatic surfacing of overdue items.
- **Code:** `src/app/[locale]/(platform)/dashboard/page.tsx`

<div align="center">
  <img src="../assets/screenshots/dashboard-dark.webp" width="80%" alt="Dashboard"/>
</div>

<br/>

## 5. 🛡️ Safety Net: Soft Delete & Undo
User errors are inevitable, so we built a **non-destructive** deletion flow.
- **Features:**
  - **Soft Deletion:** Tasks are never hard-deleted instantly; they are flagged in the database.
  - **5-Second Window:** An interactive "Undo" toast appears immediately after deletion.
  - **One-Click Restore:** Clicking "Undo" triggers the `restoreTask` logic, bringing the item back with no page refresh.
- **Tech:** `sonner` for Toasts + `restoreTask` store action.
- **Evidence:**

<div align="center">
  <img src="../assets/banners/soft-delete-timeline.png" width="80%" alt="Soft Delete Flow"/>
</div>

<br/>

## 6. 🔗 Ephemeral Sharing Links
Share progress without forcing clients to create an account.
- **Features:**
  - **Cryptographic Tokens:** Generate unique, expiring links per project.
  - **Scope Enforcement:** Middleware intercepts these requests and enforces `READ-ONLY` access at the edge.
  - **Client View:** A simplified, read-only interface for stakeholders.

<br/>

## 7. 🔔 Distributed Notification System
Alerts that arrive reliably without blocking the UI thread.
- **Features:**
  - **Decoupled Dispatcher:** Notifications are pushed to a background queue, not sent during the HTTP request.
  - **Multi-Channel:** Supports Email (Resend) and Telegram bots simultaneously.
  - **Smart Batching:** Grouping notifications to prevent spamming users.

<div align="center">
  <img src="../assets/screenshots/notifications-settings.webp" width="80%" alt="Notifications"/>
</div>

<br/>
<div align="center">
<img width="600" src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png"/>
</div>
<br/>

## 🔗 Navigation

<div align="center">

[![Prev](https://img.shields.io/badge/Prev-03_Architecture-00E5FF?style=for-the-badge&logo=readthedocs&logoColor=white)](03-solution-architecture.md)
[![Next](https://img.shields.io/badge/Next-05_Tech_Decisions-4a45ea?style=for-the-badge&logo=readthedocs&logoColor=white)](05-technical-decisions.md)

</div>