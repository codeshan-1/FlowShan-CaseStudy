<div align="center">

# ⚡ 07 - Performance Optimization

![Performance](https://readme-typing-svg.demolab.com?font=Fira+Code&size=22&duration=3000&pause=1000&color=00E5FF&center=true&vCenter=true&width=500&lines=Optimistic+UI;Zero+Loading+States;Memoized+Filtering)

> **"Speed isn't a feature. It's the foundation."**

<br/>

[![Prev Chapter](https://img.shields.io/badge/Prev_Chapter-Challenges-00E5FF?style=for-the-badge)](06-challenges-solutions.md)
[![Next Chapter](https://img.shields.io/badge/Next_Chapter-Testing-4a45ea?style=for-the-badge)](08-testing-quality.md)

</div>

<br/>
<div align="center">
<img width="600" src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png"/>
</div>
<br/>

## 1. The "Zero-Loading" Strategy
In traditional SPAs, every action triggers a spinner. In FlowShan, we use **Optimistic Updates**.

**Scenario:** User archives a task.
*   **Old Way:** Show spinner inside button -> Wait for API -> Remove task.
*   **FlowShan Way:** Remove task instantly from UI store. Send API request. Only show error if it fails.

<br/>

## 2. Expensive Calculations & Memoization
The Kanban board has to filter 500+ tasks into 3 columns (Todo, In Progress, Done) on every render.
To prevent 60fps drops during dragging, we use `useMemo`:

```typescript
// src/app/[locale]/(platform)/tasks/page.tsx
const groupedTasks = useMemo(() => {
  return query.result.reduce((acc, task) => {
    // heavy grouping logic
  }, {});
}, [query.result]); // Only re-run if tasks change, not on hover interactions
```

<br/>

## 3. Bundle Size Discipline
We rigorously monitor our import cost.
*   Instead of `moment.js` (large), we use `date-fns` (tree-shakeable).
*   Instead of `lodash` (huge), we wrote custom utility functions for simple array operations.

<br/>
<div align="center">
<img width="600" src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png"/>
</div>
<br/>

## 🏆 Lighthouse Score Evidence

We achieved perfect scores by optimizing LCP (element paints) and CLS (layout shifts).

<div align="center">
  <img src="../../assets/banners/performance-lighthouse.png" width="80%" alt="Lighthouse Score"/>
</div>

<br/>
<div align="center">
<img width="600" src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png"/>
</div>
<br/>

## 🔗 Navigation

<div align="center">

[![Prev](https://img.shields.io/badge/Prev-06_Challenges-00E5FF?style=for-the-badge&logo=readthedocs&logoColor=white)](06-challenges-solutions.md)
[![Next](https://img.shields.io/badge/Next-08_Testing-4a45ea?style=for-the-badge&logo=readthedocs&logoColor=white)](08-testing-quality.md)

</div>