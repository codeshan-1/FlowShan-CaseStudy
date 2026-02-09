<div align="center">

<!-- Language Switcher -->
<p align="right">
  <a href="README.ar.md">العربية</a>
</p>

<!-- Animated Title -->
<img src="https://readme-typing-svg.demolab.com?font=Orbitron&size=36&duration=3000&pause=1000&color=00E5FF&center=true&vCenter=true&width=600&lines=FlowShan+Case+Study;Glassmorphism+SaaS;Local-First+Architecture" alt="FlowShan"/>

<br/>

### 💎 The Ultimate Productivity Flow
> **A high-performance Kanban & Management system with a signature Glassmorphism aesthetic and local-first data integrity.**

<p>
  <a href="https://github.com/codeshan/flowshan">
    <img src="https://img.shields.io/badge/🌐_Live_Demo-Coming_Soon-00E5FF?style=for-the-badge"/>
  </a>
  <a href="#-technical-decision-log">
    <img src="https://img.shields.io/badge/📖_Read_ADRs-Explore-9C27B0?style=for-the-badge"/>
  </a>
</p>

![FlowShan Hero](assets/banners/main-hero.png)

<br/>

<!-- Professional Badge Layout -->
<table align="center" style="border: none; background: transparent;">
  <tr style="border: none; background: transparent;">
    <td style="border: none; padding: 5px;">
      <a href="#"><img src="https://img.shields.io/badge/Next.js_16-101020?style=flat-square&logo=next.js" height="20" /></a>
    </td>
    <td style="border: none; padding: 5px;">
      <a href="#"><img src="https://img.shields.io/badge/Prisma_7-12121a?style=flat-square&logo=prisma" height="20" /></a>
    </td>
    <td style="border: none; padding: 5px;">
      <a href="#"><img src="https://img.shields.io/badge/Tailwind_4-00e5ff?style=flat-square&logo=tailwind-css" height="20" /></a>
    </td>
    <td style="border: none; padding: 5px;">
      <a href="#"><img src="https://img.shields.io/badge/Sync-Local_First-9c27b0?style=flat-square" height="20" /></a>
    </td>
  </tr>
</table>

</div>

---

<div align="center">
  <img src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png" width="600" />
</div>

## ⚠️ Repository Note
> [!IMPORTANT]
> **This is a technical case study repository for the FlowShan project.**
> The purpose of this repository is to document the engineering journey, architectural patterns, and design philosophy behind the application. The full source code is private.

---

## 📽️ Project Overview

**FlowShan** was born from a simple observation: productivity tools often feel like spreadsheets or complicated databases. I wanted to build something that feels **organic, lightweight, and cinematic**. 

By combining **Glassmorphism** (frost, blur, and transparency) with a **Local-First sync strategy**, FlowShan provides a zero-latency experience that feels premium on any device.

### 🎯 Why This Architecture?
When building FlowShan, I faced a choice: A standard SPA with a remote database, or a more resilient local-first approach. I chose the latter.

| Feature | Standard Approach | FlowShan (Local-First) |
|:---:|:---:|:---:|
| **Latency** | Network-dependent | **Zero (Local Reads)** |
| **Offline** | Reload errors | **Full Support** |
| **User Onboarding** | Required Login | **Guest-to-Cloud Sync** |

---

<div align="center">
  <img src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png" width="600" />
</div>

## 🏗️ Technical Architecture

<div align="center">
  <img src="assets/banners/system-diagram.png" width="600" style="border-radius: 20px;"/>
</div>

### 🌌 Technology Galaxy

<div align="center">

**🌟 Core Universe**
<p>
<img src="https://img.shields.io/badge/Next.js_16-101020?style=for-the-badge&logo=next.js&logoColor=white"/>
<img src="https://img.shields.io/badge/React_19-00e5ff?style=for-the-badge&logo=react&logoColor=white"/>
<img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white"/>
<img src="https://img.shields.io/badge/Tailwind_4-00e5ff?style=for-the-badge&logo=tailwind-css&logoColor=white"/>
</p>

**🌀 Data & Backend Nebula**
<p>
<img src="https://img.shields.io/badge/PostgreSQL-101020?style=for-the-badge&logo=postgresql&logoColor=white"/>
<img src="https://img.shields.io/badge/Prisma_7-12121a?style=for-the-badge&logo=prisma"/>
<img src="https://img.shields.io/badge/Jose_JWT-00e5ff?style=for-the-badge&logo=json-web-tokens"/>
<img src="https://img.shields.io/badge/Zustand-9c27b0?style=for-the-badge"/>
</p>

**🎬 UX & Animations**
<p>
<img src="https://img.shields.io/badge/Framer_Motion-af4fda?style=for-the-badge&logo=framer&logoColor=white"/>
<img src="https://img.shields.io/badge/Lucide_Icons-00e5ff?style=for-the-badge"/>
<img src="https://img.shields.io/badge/Next_Intl-9c27b0?style=for-the-badge"/>
</p>

</div>

---

<div align="center">
  <img src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png" width="600" />
</div>

### 🔄 Local-to-Cloud Sync Logic
FlowShan uses a non-blocking synchronization engine. Users can start managing tasks immediately as "Guests". Upon login, a 4-channel sync process triggers:
1. **Client Mapping**: Legacy local IDs are mapped to DB UUIDs.
2. **Project Inheritance**: Local projects are migrated with relation preservation.
3. **Task Atomic Push**: Tasks are pushed to the server using atomic transactions.
4. **Cleanup**: Local storage is purged only after successful verification.

<br/>

<div align="center">
  <img src="assets/banners/sync-timeline.png" width="600" style="border-radius: 20px;"/>
</div>

---

<div align="center">
  <img src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png" width="600" />
</div>

## 💡 Trade-offs & Rejected Alternatives

### 1. Why not TanStack Query for everything?
While TanStack Query is amazing for caching, FlowShan's "Guest First" requirement meant I needed a layer that lived *outside* the application's lifecycle. Building a custom `sync-service` allowed for granular control over the migration of `localStorage` data during the first-time authentication flow.

### 2. Why Tailwind 4 + Glassmorphism?
Tailwind 4's improved performance and CSS-variable-first approach made it perfect for a design system built on dynamic opacity and blur filters. I rejected standard UI libraries because they often come with "opaque" defaults that break the glass aesthetic.

---

<div align="center">
  <img src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png" width="600" />
</div>

## 📊 Results & Impact
- **Zero-Latency**: Interaction response time is <16ms (local-first).
- **Onboarding**: 100% feature access for anonymous users.
- **Design**: Achieved a 100% unified glass design system across 20+ components.

---

## 📖 Explore Further

- [Technical Decisions (ADR)](docs/05-Technical-Decisions.md)
- [Bilingual (Arabic) README](README.ar.md)
- [System Flow Diagrams](diagrams/01-system-flow.mmd)
- [Visual: Component Hierarchy](assets/banners/component-hierarchy.png)
- [Visual: Database Schema](assets/banners/db-schema.png)

---

<div align="center">
  Built with 💜 by <b>CodeShan</b>
  <br/>
  <img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=12,14,16,18,20&height=100&section=footer"/>
</div>
