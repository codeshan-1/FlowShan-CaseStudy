<div align="center">

# 🧪 08 - Testing & Quality Assurance

![Quality](https://readme-typing-svg.demolab.com?font=Fira+Code&size=22&duration=3000&pause=1000&color=00E5FF&center=true&vCenter=true&width=500&lines=Static+Analysis;Visual+Consistency;Type+Safety)

> **"Code that isn't tested is just a suggestion."**

<br/>

[![Prev Chapter](https://img.shields.io/badge/Prev_Chapter-Performance-00E5FF?style=for-the-badge)](07-performance.md)
[![Next Chapter](https://img.shields.io/badge/Next_Chapter-Deployment-4a45ea?style=for-the-badge)](09-deployment.md)

</div>

<br/>
<div align="center">
<img width="600" src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png"/>
</div>
<br/>

## 1. Safety by Design (Static Analysis)
We rely heavily on **TypeScript** strict mode.
*   **No `any` types allowed.**
*   **Zod Validation:** Every API request body is validated with Zod before it touches the database. If the shape is wrong, it rejects instantly.

```typescript
// src/app/api/tasks/route.ts
const createTaskSchema = z.object({
  title: z.string().min(1),
  projectId: z.string().uuid(),
  priority: z.enum(["LOW", "MEDIUM", "HIGH"])
});
```

<br/>

## 2. Visual Regression Prevention
Since FlowShan relies on exact pixel-perfect aesthetics (glassmorphism overlays), we perform manual **Visual Consistency Checks**:
*   **Empty States:** Do specific icons align when a list is empty?
*   **RTL Layouts:** Does the sidebar toggle flip correctly in Arabic?

<br/>

## 3. The "Guest Flow" Verification
Our most critical test case is the **Onboarding Funnel**:
1.  Open Incognito Window.
2.  Create 3 tasks.
3.  Login with Google.
4.  **Verify:** Do the 3 tasks appear in the new account?

This is tested manually before every major deployment.

<br/>

## 4. ♿ Accessibility (A11y) Standards
FlowShan isn't just about looks; it's about inclusion.
- **Semantic HTML:** We enforce proper heading hierarchy (`h1` → `h2` → `h3`) to ensure screen readers can navigate structured content.
- **Accessible Names:** Every interactive element (like the mobile menu toggle) includes an `aria-label` to provide context for non-visual users.
- **Keyboard Navigation:** High-contrast focus states and logical tab orders are integrated across the dashboard.

<br/>
<div align="center">
<img width="600" src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png"/>
</div>
<br/>

## 🔗 Navigation

<div align="center">

[![Prev](https://img.shields.io/badge/Prev-07_Performance-00E5FF?style=for-the-badge&logo=readthedocs&logoColor=white)](07-performance.md)
[![Next](https://img.shields.io/badge/Next-09_Deployment-4a45ea?style=for-the-badge&logo=readthedocs&logoColor=white)](09-deployment.md)

</div>