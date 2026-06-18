<div align="center">

# 🌧️ 06 - Challenges & Solutions

![Challenges](https://readme-typing-svg.demolab.com?font=Fira+Code&size=22&duration=3000&pause=1000&color=00E5FF&center=true&vCenter=true&width=500&lines=The+Hard+Parts;Sync+Conflicts+%7C+Hydration+%7C+RTL)

> **"Building a local-first app means solving distributed systems problems in the browser."**

<br/>

[![Prev Chapter](https://img.shields.io/badge/Prev_Chapter-Tech_Decisions-00E5FF?style=for-the-badge)](05-technical-decisions.md)
[![Next Chapter](https://img.shields.io/badge/Next_Chapter-Performance-4a45ea?style=for-the-badge)](07-performance.md)

</div>

<br/>
<div align="center">
<img width="600" src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png"/>
</div>
<br/>

## 1. The ID Migration Problem
**Challenge:** When a user is a Guest, their tasks have IDs like `guest-123`. When they sign up, the DB assigns `550e8400-e29b`. How do we update the UI without refreshing?

**Solution: The ID Map Pattern**
We created a `SyncService` that maintains a temporary dictionary:
```typescript
// Conceptual Logic
const idMap = {
  "guest-task-1": "db-uuid-888",
  "guest-task-2": "db-uuid-999"
};

// When Frontend receives this map from the sync API:
useTaskStore.setState(state => ({
  tasks: state.tasks.map(t => ({
    ...t,
    id: idMap[t.id] || t.id // Swaps ID in-place
  }))
}));
```
**Result:** The user sees zero flicker. The task ID changes in memory while they look at it.

<br/>

## 2. Arabic RTL Flipping
**Challenge:** Simply adding `dir="rtl"` broke all our absolute positioned elements (popovers, dropdowns) and drag-and-drop calculations.

**Solution: Logical Properties & Radix UI**
1.  Replaced all `left/right` CSS with `start/end`.
2.  Used `Radix UI` primitives which have built-in RTL awareness for popover positioning.
3.  **Advanced Matrix Inversion:** For drag-and-drop (`dnd-kit`), we wrote a modifier that intercepts the transform matrix `x = isRTL ? -x : x` at runtime.

<div align="center">
  <img src="../assets/screenshots/rtl-projects.webp" width="80%" alt="RTL Support"/>
</div>

<br/>

## 3. Hydration Mismatches (Date/Time)
**Challenge:** The server renders "Today", but the client (in a different timezone) thinks it's "Yesterday". This causes React Hydration Errors.

**Solution: Client-Only Components**
We wrapped date-sensitive parts in a `<ClientOnly>` component that delays rendering until the browser mount is confirmed.
```tsx
// src/components/client-only.tsx
if (!hasMounted) return <Skeleton className="h-4 w-20" />;
return children;
```

<br/>

## 4. Theme Hydration (The Anti-Flash)
**Challenge:** SSR sends HTML. Browser paints white background. JavaScript loads, checks `localStorage`, sees "Dark Mode", and paints black. Result: A blinding white flash.

**Solution: Blocking Script Injection**
We inject a tiny script into the `<head>` that runs *before* the body paints. It reads storage and adds the `dark` class to `<html>` synchronously.

```tsx
<script
  dangerouslySetInnerHTML={{
    __html: `
      try {
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
          document.documentElement.classList.add('dark')
        }
      } catch (_) {}
    `,
  }}
/>
```

<br/>

## 5. Mobile Touch DnD & Scrolling Conflicts
**Challenge:** On touch screens, dragging cards inside the Kanban board or sorting lists intercepted the default vertical scroll gesture of mobile browsers. Swiping down on a card dragged it instead of scrolling the page, resulting in frustrating UX and trapped mobile views.

**Solution: Activation Constraints (Touch Sensor)**
We implemented `@dnd-kit/core`'s `TouchSensor` with precise constraints to differentiate between scrolling and dragging:
- **Delay:** 250ms press-and-hold activation constraint.
- **Tolerance:** 5px move tolerance before activation.
```typescript
const sensors = useSensors(
  useSensor(PointerSensor),
  useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates }),
  useSensor(TouchSensor, {
    activationConstraint: { delay: 250, tolerance: 5 }
  })
);
```
**Result:** Dragging only triggers if a user deliberately presses and holds a card for 250ms without moving more than 5px. Normal quick swipes scroll the page cleanly.

<br/>

## 6. Browser Autoplay Audio Constraints (iOS)
**Challenge:** Modern browsers (specifically Safari on iOS) block Web Audio API's `AudioContext` from playing sounds automatically without a direct user interaction. If a user completes a task, no sound plays, and warnings clutter the console.

**Solution: Global Interaction Listener**
We built a lazy initialization routine that resumes the blocked audio context upon the very first click or touch on the document:
```typescript
export const initAudioOnInteraction = () => {
  if (typeof window === "undefined") return;
  const resumeAudio = () => {
    if (!audioContext) {
      audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
    if (audioContext && audioContext.state === "suspended") {
      audioContext.resume();
    }
    // Remove listeners once successfully initialized
    document.removeEventListener("touchstart", resumeAudio);
    document.removeEventListener("click", resumeAudio);
  };
  document.addEventListener("touchstart", resumeAudio, { passive: true });
  document.addEventListener("click", resumeAudio, { passive: true });
};
```
**Result:** The audio context is transparently unlocked on the user's first click, enabling immediate, lag-free C6-E6 chime playbacks when checking off tasks.

<br/>

## 7. CSS Grid Cell Offsets with AnimatePresence
**Challenge:** When modules were dynamically toggled on/off, rendering card components inside a single CSS Grid (`grid-cols-2`) wrapped by `AnimatePresence mode="popLayout"` caused auto-placement issues. Exiting components remained in the DOM for exit animations, occupying hidden slots and shifting other elements to incorrect row cells, leaving large empty spaces.

**Solution: Independent Column Stacks**
We refactored the layout grid into two separate column containers. Each column contains its own layout stack wrapped in `AnimatePresence`.
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  {/* Column 1 */}
  <div className="space-y-6 flex flex-col">
    <AnimatePresence mode="popLayout">
      {modules.tasks && <TasksWidget />}
      {modules.calendar && <CalendarWidget />}
    </AnimatePresence>
  </div>
  {/* Column 2 */}
  <div className="space-y-6 flex flex-col">
    <AnimatePresence mode="popLayout">
      {modules.projects && <ProjectsWidget />}
      {modules.notes && <NotesWidget />}
    </AnimatePresence>
  </div>
</div>
```
**Result:** Toggling any module adjusts only its local column stack height, allowing remaining items to smoothly slide up within their column via Framer Motion layouts, eliminating grid layout bugs.

<br/>
<div align="center">
<img width="600" src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png"/>
</div>
<br/>

## 🔗 Navigation

<div align="center">

[![Prev](https://img.shields.io/badge/Prev-05_Decisions-00E5FF?style=for-the-badge&logo=readthedocs&logoColor=white)](05-technical-decisions.md)
[![Next](https://img.shields.io/badge/Next-07_Performance-4a45ea?style=for-the-badge&logo=readthedocs&logoColor=white)](07-performance.md)

</div>