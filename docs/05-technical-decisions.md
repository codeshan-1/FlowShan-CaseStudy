<div align="center">

# 🧠 05 - Technical Decisions

![Decisions](https://readme-typing-svg.demolab.com?font=Fira+Code&size=22&duration=3000&pause=1000&color=00E5FF&center=true&vCenter=true&width=500&lines=Why+Zustand%3F;Why+Prisma%3F;Why+Local-First%3F)

> **"Every library was chosen to solve a specific problem, not just because it's popular."**

<br/>

[![Prev Chapter](https://img.shields.io/badge/Prev_Chapter-Key_Features-00E5FF?style=for-the-badge)](04-key-features.md)
[![Next Chapter](https://img.shields.io/badge/Next_Chapter-Challenges-4a45ea?style=for-the-badge)](06-challenges-solutions.md)

</div>

<br/>
<div align="center">
<img width="600" src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png"/>
</div>
<br/>

## 1. State Management: Zustand vs. Redux vs. Context
**Decision:** We chose **Zustand**.

| Option | Verdict | Why? |
|:---|:---:|:---|
| **Context API** | ❌ | Causes massive re-renders when updating complex objects (like a Kanban board). |
| **Redux** | ❌ | Too much boilerplate (Actions, Reducers, Thunks) for a fast-paced project. |
| **Zustand** | ✅ | **Atomic updates.** We can subscribe a component to *just* `tasks[0].title`. If `tasks[1]` changes, the first component doesn’t re-render. Essential for 60fps drag-and-drop. |

<br/>

## 2. Database ORM: Prisma vs. Drizzle
**Decision:** We chose **Prisma**.

*   **Reason 1: Schema-First Design.** Defining the `schema.prisma` file allowed us to visualize the `User -> Projects -> Tasks` relationship before writing any SQL.
*   **Reason 2: Type Safety.** Auto-generated TypeScript types meant that if we changed a column name, the frontend build would fail immediately, preventing runtime bugs.

<br/>

## 3. Styling: Tailwind v4 vs. CSS Modules
**Decision:** We chose **Tailwind CSS v4 (Alpha/Beta features)**.

We needed a design system that could handle:
1.  **Dynamic Theming:** CSS variables for Glassmorphism (`backdrop-filter`) without complex SASS mixins.
2.  **RTL Support:** Tailwind's logical properties (`ms-2`, `me-2`) automatically flip margins for Arabic/English layouts. This saved us weeks of manual CSS flipping.

<br/>

## 4. Auth Strategy: Hybrid (Guest + Cloud)
**Decision:** **Custom JWT + LocalStorage Fallback**.

Most apps force sign-in. We built a **"Guest ID"** system:
1.  User opens app -> `guest_id` generated in LocalStorage.
2.  User creates tasks -> Saved locally associated with `guest_id`.
3.  User signs up (Google Auth) -> Backend receives `guest_id` -> **Migrates all data** to the new `user_id` in a transaction.

**Trade-off:** High complexity in the Auth API (`src/app/api/auth/...`) in exchange for zero-friction onboarding.

<br/>

## 5. Bundler/Compiler: Webpack vs. Turbopack (Next.js 16)
**Decision:** We chose **Turbopack** for rapid development and production builds.

*   **The Challenge:** Turbopack (written in Rust) is extremely fast, but it historically had issues resolving symlinked packages inside `pnpm` workspace structures, especially when project paths contained spaces or emojis (e.g. `/01_DEV_CORE 🚀/Projects 📁/`).
*   **The Resolution:** Instead of falling back to Webpack, we configured `node-linker=hoisted` in `.npmrc` to flatten the dependency tree. This resolved Turbopack's native resolver issues, allowing us to leverage **instant hot-module reloading** in development and compile production builds under Turbopack in under **38 seconds**!

<br/>
<div align="center">
<img width="600" src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png"/>
</div>
<br/>

## 🔗 Navigation

<div align="center">

[![Prev](https://img.shields.io/badge/Prev-04_Features-00E5FF?style=for-the-badge&logo=readthedocs&logoColor=white)](04-key-features.md)
[![Next](https://img.shields.io/badge/Next-06_Challenges-4a45ea?style=for-the-badge&logo=readthedocs&logoColor=white)](06-challenges-solutions.md)

</div>