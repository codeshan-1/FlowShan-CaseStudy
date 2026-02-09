<div align="center">

<!-- Title -->
<img src="https://readme-typing-svg.demolab.com?font=Orbitron&size=30&duration=3000&pause=1000&color=00E5FF&center=true&vCenter=true&width=500&lines=Technical+Decision+Log;Architectural+ADRs" alt="FlowShan ADR"/>

<br/>

> [!NOTE]
> This document records the critical architectural decisions made during the development of FlowShan.

---

<img src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png" width="600" />

</div>

## 01. Local-First Data Synchronization
- **Status**: ✅ Accepted
- **Context**: Zero-latency requirements and Guest Mode friction reduction.
- **Decision**: Implement a **Local-First** architecture using `localStorage` and a custom sync engine.
- **Rationale**: 
    - **Latency**: Sub-16ms response time.
    - **UX**: Instant boarding for visitors.

---

<div align="center">
  <img src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png" width="600" />
</div>

## 02. Tailwind CSS 4 + Glassmorphism
- **Status**: ✅ Accepted
- **Context**: Need for a cinematic, frost-based design system.
- **Decision**: Use **Tailwind 4** with CSS Variables to manage dynamic blur and transparency.
- **Rationale**: Native variable support and performance.

---

<div align="center">
  <img src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png" width="600" />
</div>

## 03. Custom Sync vs. TanStack Query
- **Status**: ✅ Accepted
- **Context**: Complex data migration from anonymous local state to authenticated Postgres state.
- **Decision**: **Custom `sync-service.ts`**.
- **Rationale**: Granular control over the migration of `localStorage` relational data.

---

<div align="center">
  <img src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png" width="600" />
  <br/>
  <i>"Architecture is the art of making the right trade-offs."</i>
</div>
