<div align="center">

<!-- Language Switcher -->
<p align="right">
  <a href="05-Technical-Decisions.ar.md">العربية</a>
</p>

<!-- Typing SVG Header -->
<img src="https://readme-typing-svg.demolab.com?font=Orbitron&size=30&duration=3000&pause=1000&color=00E5FF&center=true&vCenter=true&width=500&lines=05+-+Technical+Decisions;Architectural+Integrity" alt="Technical Decisions"/>

<br/>

> **"Architecture is the art of making the right trade-offs."**

---

<img src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png" width="600" />

</div>

## 01. Local-First Architecture
- **Decision**: Prioritize `localStorage` for all core CRUD operations.
- **Rationale**: To eliminate network latency and provide instant feedback for high-velocity productivity workflows.
- **Status**: ✅ **Implemented**

## 02. Sequential Relational Migration
- **Decision**: Custom sync engine migrating data in strictly ordered phases (Clients -> Projects -> Tasks).
- **Rationale**: To preserve deep relational integrity when mapping temporary local IDs to permanent server UUIDs.
- **Status**: ✅ **Implemented**

## 03. Design System: Tailwind 4 + Glassmorphism
- **Decision**: Avoid monolithic UI libraries in favor of a custom CSS-variable-driven glass system.
- **Rationale**: Total control over opacity, blurs, and neon accents while maintaining a minimal bundle size.
- **Status**: ✅ **Implemented**

## 04. I18n Strategy: Logical Properties
- **Decision**: Use CSS Logical Properties (`margin-inline`, `padding-inline`, etc.) instead of physical (`left`, `right`).
- **Rationale**: To ensure flawless layout mirroring for Arabic (RTL) support with zero manual CSS overrides.
- **Status**: ✅ **Implemented**

---

<div align="center">
  <img src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png" width="600" />
</div>

<div align="right">
  <a href="../README.md">🏠 Back to Home</a>
</div>
