<div align="center">

<!-- Language Switcher -->
<p align="right">
  <a href="06-Challenges-Solutions.ar.md">العربية</a>
</p>

<!-- Typing SVG Header -->
<img src="https://readme-typing-svg.demolab.com?font=Orbitron&size=30&duration=3000&pause=1000&color=00E5FF&center=true&vCenter=true&width=500&lines=06+-+Challenges+%26+Solutions;Engineering+Through+Complexity" alt="Challenges and Solutions"/>

<br/>

> **"Every technical challenge is an architectural opportunity."**

---

<img src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png" width="600" />

</div>

## 🧩 Challenge 1: Relational Sync during Migration
- **Problem**: Moving data from an anonymous `localStorage` (where IDs are simple strings) to a relational PostgreSQL DB (where IDs are UUIDs) while preserving links between Projects and Tasks.
- **Solution**: Implemented a **3-Phase Dependency Mapper**. The sync engine first migrates Clients, stores the new UUIDs in a temporary Map, then uses those UUIDs to link Projects, and repeats for Tasks.

## 🧩 Challenge 2: Glassmorphism vs. Performance
- **Problem**: Excessive use of `backdrop-filter: blur()` can cause GPU lag and "jank" on low-end devices.
- **Solution**: **Conditional Rendering & Static Blurs**. I utilized Tailwind 4's optimized jit-engine to apply blurs only to active interaction panels, while keeping static background cards using optimized low-opacity overlays.

## 🧩 Challenge 3: Real-time Multi-language Layouts (RTL)
- **Problem**: Switching between English (LTR) and Arabic (RTL) often breaks complex Kanban layouts.
- **Solution**: Used **Next-Intl** combined with dynamic CSS logical properties (`margin-inline-start`, `inset-inline-start`) instead of `left/right`. This ensures the layout mirrors perfectly with zero manual CSS overrides.

---

<div align="center">
  <img src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png" width="600" />
</div>

<div align="right">
  <a href="../README.md">🏠 Back to Home</a>
</div>
