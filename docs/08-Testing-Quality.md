<div align="center">

<!-- Language Switcher -->
<p align="right">
  <a href="08-Testing-Quality.ar.md">العربية</a>
</p>

<!-- Typing SVG Header -->
<img src="https://readme-typing-svg.demolab.com?font=Orbitron&size=30&duration=3000&pause=1000&color=00E5FF&center=true&vCenter=true&width=500&lines=08+-+Testing+%26+Quality;Engineering+Reliability" alt="Testing and Quality"/>

<br/>

> **"Quality is not an act; it is a habit."**

---

<img src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png" width="600" />

</div>

## 🛡️ Automated Verification Suite
FlowShan utilizes a robust testing pipeline to ensure that the complex local-to-cloud migration logic remains bulletproof.

### 1. Unit & Integration Testing
- **Jest**: Used for validating the core `sync-service` logic, ensuring that relational ID mapping behaves as expected under various edge cases.
- **Prisma Mocking**: Isolated testing of database interactions to prevent side-effects during development.

### 2. End-to-End (E2E) Testing
- **TestSprite**: Leveraged for comprehensive browser-level testing.
- **Scenario Coverage**:
    - **Guest Interaction**: Verifying tasks can be created and managed without auth.
    - **Migration Flow**: Automated testing of the "Login -> Sync -> Verify" lifecycle.
    - **RTL Validation**: Ensuring UI elements align correctly in Arabic mode.

## 💎 Design Consistency Audit
A custom "Glassmorphism Audit" is performed regularly to ensure that the frosted effects, blurs, and neon accents maintain their premium look across all device resolutions and orientations.

---

<div align="center">
  <img src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png" width="600" />
</div>

<div align="right">
  <a href="../README.md">🏠 Back to Home</a>
</div>
