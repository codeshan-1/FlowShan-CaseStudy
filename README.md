<div align="center">

<!-- Language Switcher -->
<p align="right">
  <a href="README.ar.md">العربية</a>
</p>

<!-- Title Branding -->
<img src="https://readme-typing-svg.demolab.com?font=Orbitron&size=40&duration=3000&pause=1000&color=00E5FF&center=true&vCenter=true&width=600&lines=FLOWSHAN;SaaS+Productivity+Suite" alt="FlowShan Logo"/>

<br/>

> **"Productivity tools should be inspiring. Zero-latency, Glassmorphism, and Local-First sync."**

---

<!-- Live Demo Button -->
<p align="center">
  <a href="https://flowshan.vercel.app" target="_blank">
    <img src="https://img.shields.io/badge/Live_Demo-00E5FF?style=for-the-badge&logo=vercel&logoColor=white" alt="Live Demo" />
  </a>
  <a href="https://github.com/codeshan/FlowShan-CaseStudy" target="_blank">
    <img src="https://img.shields.io/badge/Github_Repo-12121a?style=for-the-badge&logo=github&logoColor=white" alt="Github Repo" />
  </a>
</p>

<img src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png" width="800" />

</div>

## 📸 Visual Gallery (The Proof)

<table align="center">
  <tr>
    <td align="center"><b>Live Dashboard (Bento Grid)</b></td>
    <td align="center"><b>Kanban Flow (Drag & Drop)</b></td>
  </tr>
  <tr>
    <td><img src="assets/screenshots/dashboard-hero.png" width="400" style="border-radius: 10px;"/></td>
    <td><img src="assets/screenshots/kanban-board.png" width="400" style="border-radius: 10px;"/></td>
  </tr>
  <tr>
    <td align="center"><b>Interactive Calendar 3.0</b></td>
    <td align="center"><b>Cinematic Notes Editor</b></td>
  </tr>
  <tr>
    <td><img src="assets/screenshots/calendar-heatmap.png" width="400" style="border-radius: 10px;"/></td>
    <td><img src="assets/screenshots/notes-editor.png" width="400" style="border-radius: 10px;"/></td>
  </tr>
  <tr>
    <td align="center"><b>Full Mobile Responsiveness</b></td>
    <td align="center"><b>Telegram & Real-time Sync</b></td>
  </tr>
  <tr>
    <td><img src="assets/screenshots/mobile-dashboard.png" width="400" style="border-radius: 10px;"/></td>
    <td><img src="assets/banners/visual-telegram-sync.png" width="400" style="border-radius: 10px;"/></td>
  </tr>
</table>

---

## 🏗️ System Architecture

The following diagram illustrates the **Hybrid Sync Engine**, managing state between LocalStorage (Guest) and PostgreSQL (Auth) with optimistic UI updates.

```mermaid
graph TD
    %% Define Styles
    classDef glass stroke:#00e5ff,stroke-width:2px,fill:#12121a,color:#ffffff
    classDef neon stroke:#9c27b0,stroke-width:2px,fill:#1b1b2f,color:#e0e0e0
    classDef action stroke:#22d3ee,stroke-width:1px,fill:#0f172a,stroke-dasharray: 5 5,color:#9ca3af

    %% Nodes
    User(("👤 User")):::glass
    
    subgraph "Frontend (Next.js)"
        UI[Glass UI Interface]:::glass
        DND[Drag & Drop Engine]:::action
        State[Zustand Store]:::action
    end
    
    subgraph "Data Layer"
        LS[LocalStorage (Guest)]:::glass
        API[Next.js API Routes]:::neon
        DB[(PostgreSQL)]:::neon
    end

    %% Flow
    User -->|Interacts| UI
    UI -->|Drag Task| DND
    DND -->|Optimistic Update| State
    State -->|Persist| LS
    
    %% Sync Flow
    User -->|Login| API
    LS -->|Sync Data| API
    API -->|Batch Insert| DB
    DB -->|New UUIDs| API
    API -->|Hydrate| State
    
    %% Real-time
    DB -.->|Cron: Deadlines| User
```

## 💾 Database Schema

A robust, relational schema designed for multi-tenancy and complex project hierarchies.

```mermaid
erDiagram
    %% Core Users & Auth
    USER ||--o{ CLIENT : manages
    USER ||--o{ PROJECT : owns
    USER ||--o{ TASK : created
    USER ||--o{ NOTE : keeps
    
    %% Hierarchy
    CLIENT ||--o{ PROJECT : has
    PROJECT ||--o{ TASK : contains
    TASK ||--o{ SUBTASK : includes
    
    %% Relations
    PROJECT ||--o{ NOTE : linked_to
    CLIENT ||--o{ NOTE : linked_to

    USER {
        string id PK
        string email
        string googleId
        boolean notifyEmail
    }

    PROJECT {
        string id PK
        string name
        enum status
        date deadline
        boolean shareEnabled
    }

    TASK {
        string id PK
        string title
        enum priority
        date deadline
        int duration
    }

    NOTE {
        string id PK
        string title
        boolean isPinned
    }
```

---

## ⚡ Performance Excellence

<div align="center">
  <table align="center">
    <tr>
      <td align="center"><b>Lighthouse Audit (100/100)</b></td>
      <td align="center"><b>Immediate Push Notifications</b></td>
    </tr>
    <tr>
      <td><img src="assets/banners/performance-lighthouse.png" width="400" style="border-radius: 10px;"/></td>
      <td><img src="assets/banners/visual-push-notifs.png" width="400" style="border-radius: 10px;"/></td>
    </tr>
  </table>
</div>

---

## 🛠️ Technology Galaxy

<div align="center">

| **Layer** | **Technologies** |
|:---:|:---|
| **Core** | ![Next.js](https://img.shields.io/badge/Next.js_16-000000?style=flat-square&logo=next.js&logoColor=white) ![React](https://img.shields.io/badge/React_19-61DAFB?style=flat-square&logo=react&logoColor=black) ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white) |
| **Styles** | ![TailwindCSS](https://img.shields.io/badge/Tailwind_4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white) ![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=flat-square&logo=framer&logoColor=white) |
| **Logic** | ![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=flat-square&logo=prisma&logoColor=white) ![Zustand](https://img.shields.io/badge/Zustand-orange?style=flat-square) ![Jose](https://img.shields.io/badge/Jose_JWT-black?style=flat-square) |
| **Infra** | ![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=flat-square&logo=postgresql&logoColor=white) ![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white) |

</div>

---

## 📂 Deep Dive: 10-Part Case Study

For in-depth architectural analysis, explore the documentation suite:

1. [**01-Overview**](docs/01-Overview.md) - Project vision and impact.
2. [**02-Problem Statement**](docs/02-Problem-Statement.md) - Friction and visual fatigue.
3. [**03-Solution Architecture**](docs/03-Solution-Architecture.md) - The 3-tier sync engine.
4. [**04-Key Features**](docs/04-Key-Features.md) - Glassmorphism & local-first.
5. [**05-Technical Decisions**](docs/05-Technical-Decisions.md) - The ADR log.
6. [**06-Challenges & Solutions**](docs/06-Challenges-Solutions.md) - Handling dependency mapping.
7. [**07-Performance Optimization**](docs/07-Performance-Optimization.md) - Bundle size & Hydration.
8. [**08-Testing & Quality**](docs/08-Testing-Quality.md) - Automated verification.
9. [**09-Deployment & DevOps**](docs/09-Deployment-DevOps.md) - Edge functions & CI/CD.
10. [**10-Results & Impact**](docs/10-Results-Impact.md) - Final outcomes.

---

<div align="center">
  <img src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png" width="800" />
  <p>© 2026 <b>CODESHAN</b> | MIT License</p>
</div>
