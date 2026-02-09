<div align="center">

<!-- Language Switcher -->
<p align="right">
  <a href="03-Solution-Architecture.ar.md">العربية</a>
</p>

<!-- Typing SVG Header -->
<img src="https://readme-typing-svg.demolab.com?font=Orbitron&size=30&duration=3000&pause=1000&color=00E5FF&center=true&vCenter=true&width=500&lines=03+-+Solution+Architecture;The+Local-First+Engine" alt="Solution Architecture"/>

<br/>

> **"Architecture is about managing complexity while preserving speed."**

---

<img src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png" width="600" />

</div>

## 🏗️ 3-Tier Sync Architecture
FlowShan's architecture is built on a **Guest-First** synchronization model. The system allows users to interact with the full suite of productivity tools without ever creating an account initially.

### 1. The Local Layer (LocalStorage)
- All CRUD operations are performed on `localStorage`.
- No network request is required for standard UI interactions.
- Ensures zero latency and full offline support.

### 2. The Bridge (Sync Service)
- A custom-built migration engine that maps temporary local IDs to permanent database UUIDs.
- Handles atomic transactions to ensure data integrity during account creation.
- Cleans up local state only after 100% server verification.

### 3. The Cloud Layer (Prisma + PostgreSQL)
- Structured relational data storage.
- Handles multi-device synchronization for authenticated users.
- Ensures security via Jose (JWT) and modern auth patterns.

---

<div align="center">
  <img src="../assets/banners/db-schema.png" width="600" style="border-radius: 20px;"/>
  <br/>
  <b>Visual Representation of Database Relations (Prisma)</b>
  <br/>
  <img src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png" width="600" />
</div>

<div align="right">
  <a href="../README.md">🏠 Back to Home</a>
</div>
