<div align="center">

# 📋 01 - Overview & Project Vision

![FlowShan Vision](https://readme-typing-svg.demolab.com?font=Fira+Code&size=22&duration=3000&pause=1000&color=00E5FF&center=true&vCenter=true&width=500&lines=FlowShan%3A+Cinematic+Productivity;Local-First.+Instant.+Seamless.)

> **"Productivity shouldn't just be functional. It should be cinematic."**

<br/>

[![Next Chapter](https://img.shields.io/badge/Next_Chapter-Problem_Statement-4a45ea?style=for-the-badge)](02-problem-statement.md)

</div>

<br/>
<div align="center">
<img width="600" src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png"/>
</div>
<br/>

## 🎯 The Vision
FlowShan reimagines the productivity dashboard not as a static table of tasks, but as a rigid, high-performance command center. 

Most productivity apps suffer from two extremes:
1.  **Ugly Utility:** Fast but looks like a spreadsheet (e.g., Trello, Jira).
2.  **Slow Beauty:** Good looking but riddled with loaders and lag (e.g., Notion, Monday).

**FlowShan aims for the sweet spot: Sub-100ms interaction speed with a Netflix-grade visual experience.**

<div align="center">
  <img src="../assets/banners/main-hero.webp" width="80%" alt="Landing Page"/>
</div>

<br/>

## 💡 Core Philosophy

### 1. Local-First Architecture
We don't wait for the server. Every interaction—creating a task, moving a card, writing a note—happens **instantly** in the local state. The server syncs in the background. If the internet cuts out, you keep working.

### 2. Cinematic UX
User experience isn't just about usability; it's about *feeling*.
- **Glassmorphism:** Real-time background blurs.
- **Micro-interactions:** Smooth Framer Motion transitions.
- **Sound Design:** 900ms toast notifications that feel snappy.

<div align="center">
  <img src="../assets/screenshots/dashboard-dark.webp" width="45%" alt="Dashboard Dark"/>
  <img src="../assets/screenshots/dashboard-light.webp" width="45%" alt="Dashboard Light"/>
  <br/>
  <em>Dual Mode: System-preference detection with zero hydration mismatch.</em>
</div>

### 3. Data Ownership
Your data lives on your device first. We use a hybrid sync engine that respects user privacy and data sovereignty.

<br/>
<div align="center">
<img width="600" src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png"/>
</div>
<br/>

## 🌍 Product Scope

### ✅ Core Modules

<div align="center">

| Module | Status | Description |
|:---|:---:|:---|
| **📊 Dashboard** | ✅ | Real-time analytics, greeting system, and activity heatmap. |
| **📋 Kanban Board** | ✅ | Drag-and-drop task management with optimistic updates. |
| **📅 Calendar** | ✅ | Interactive monthly/weekly views with task integration. |
| **📝 Notes** | ✅ | Rich-text editor with auto-save and local persistence. |
| **👥 Clients** | ✅ | CRM-lite features for managing client relationships. |

</div>

### 🏗️ Technical Scope

<div align="center">

| Aspect | Details |
|:---|:---|
| **Lines of Code** | ~12,500+ (TypeScript) |
| **Components** | 61+ React Server/Client Components |
| **State Management** | 7 Zustand Stores (Tasks, Projects, UI, Settings...) |
| **Database** | PostgreSQL + Prisma ORM (Schema-driven) |
| **API** | 33 Serverless Endpoints (Next.js API Routes) |

</div>

<br/>
<div align="center">
<img width="600" src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png"/>
</div>
<br/>

## 🚀 Development Timeline

| Phase | Duration | Focus |
|:---|:---|:---|
| **Phase 1: Foundation** | Weeks 1-2 | Next.js 16 Setup, Prisma Schema, Auth (Clerk/NextAuth). |
| **Phase 2: Core UX** | Weeks 3-4 | Kanban Board (Dnd-Kit), Framer Motion implementation. |
| **Phase 3: Local-First** | Weeks 5-6 | Optimistic UI patterns, Guest Mode (localStorage). |
| **Phase 4: Sync Engine** | Weeks 7-8 | Background sync, conflict resolution, offline support. |
| **Phase 5: Polish** | Weeks 9-10 | Glassmorphism, Sound Design, Performance Tuning. |

<br/>
<div align="center">
<img width="600" src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png"/>
</div>
<br/>

## 🔗 Navigation

<div align="center">

[![Next](https://img.shields.io/badge/Next_Chapter-02_Problem_Statement-4a45ea?style=for-the-badge&logo=readthedocs&logoColor=white)](02-problem-statement.md)

</div>