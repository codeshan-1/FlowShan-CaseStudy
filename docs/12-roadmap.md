<div align="center">

# 🛣️ 12 - Roadmap & Lessons Learned

![Roadmap](https://readme-typing-svg.demolab.com?font=Fira+Code&size=22&duration=3000&pause=1000&color=00E5FF&center=true&vCenter=true&width=500&lines=Future+Vision;Next+Steps+%7C+Lessons;Offline+Sync)

> **"Software is never finished, only released. Here is where we go next."**

<br/>

[![Prev Chapter](https://img.shields.io/badge/Prev_Chapter-Scope-00E5FF?style=for-the-badge)](11-product-scope.md)
[![Back to Index](https://img.shields.io/badge/Back_to-Index-4a45ea?style=for-the-badge)](../README.md)

</div>

<br/>
<div align="center">
<img width="600" src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png"/>
</div>
<br/>

## 🗺️ The Roadmap

### Phase 1: Reliability (Q2 2026)
*   **Conflict Resolution UI:** Allow users to choose which version of a task to keep if sync fails.
*   **Service Worker:** True "Offline Mode" via PWA caching for assets.

### Phase 2: Collaboration (Q3 2026)
*   **Workspace Abstraction:** Introduce `Team` entity above `Project`.
*   **Shared Activity Log:** "Ahmed moved Task X to Done."

### Phase 3: Intelligence (Q4 2026)
*   **AI Summary:** "What did I achieve this week?" using user task data.
*   **Smart Scheduling:** Suggets task slots based on calendar open time.

<br/>
<div align="center">
<img width="600" src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png"/>
</div>
<br/>

## 🎓 Lessons Learned

### 1. Local-First is a Mindset Shift
It's not just "caching". You have to design every mutation as if the server doesn't exist.
*   **Mistake:** We initially waited for `await api.post(...)`.
*   **Fix:** We moved `setStart({ ... })` to the top of every handler.

### 2. Bilingual Quality is Architectural
You can't "add Arabic later".
*   **Lesson:** Starting with `dir="auto"` and Tailwind Logical Properties (`ms-2`) from Day 1 saved us 50+ hours of refactoring.

### 3. Visual Ambition requires Strict Governance
Glassmorphism is unforgiving.
*   **Lesson:** If you use backdrop-blur, you cannot have cluttered backgrounds. We had to rewrite our entire background mesh gradient system to ensure readability.

<br/>
<div align="center">
<img width="600" src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png"/>
</div>
<br/>

## 🔗 Navigation

<div align="center">

[![Prev](https://img.shields.io/badge/Prev-11_Scope-00E5FF?style=for-the-badge&logo=readthedocs&logoColor=white)](11-product-scope.md)
[![Index](https://img.shields.io/badge/Back_to-Index-4a45ea?style=for-the-badge&logo=github&logoColor=white)](../README.md)

</div>