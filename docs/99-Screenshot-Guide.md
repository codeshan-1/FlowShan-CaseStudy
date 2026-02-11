# 📸 Cinematic Screenshot Guide

This guide ensures that all visual assets in the FlowShan Case Study maintain a consistent, high-end "Cinematic" aesthetic.

## 📐 Window Setup

Before capturing any screenshot, ensure your browser window is set to exactly **1920x1080**.

- **MacOS**: Use `Cmd+Shift+4` then `Space` to capture a specific window, or use a tool like **Cleanshot X**.
- **Windows**: Use **Snip & Sketch** or **ShareX**.
- **Browser**: Chrome DevTools -> Toggle Device Toolbar -> Responsive -> 1920 x 1080.

## 🎨 Theme Configuration

Ensure the application is in:
1. **Dark Mode** (Default).
2. **English Language** (unless specifically capturing RTL layout).
3. **No Red Badge Notifications** (unless highlighting notifications).

## 🖼️ Required Shots

### 1. The Hero Dashboard (Bento Grid)
- **Route**: `/en/dashboard`
- **State**: Populated overviews. Ensure at least:
  - 3 Active Tasks
  - 1 Upcoming Deadline
  - 2 Recent Projects
- **Focus**: The entire Bento Grid layout without scrolling.

### 2. The Kanban Board (Drag Action)
- **Route**: `/en/dashboard/tasks`
- **Action**: Click and hold a task card to trigger the "Lift" animation (glass shadow).
- **Tool**: You may need a delayed timer on your screenshot tool to capture the drag state.

### 3. Interactive Calendar (Heatmap)
- **Route**: `/en/dashboard/calendar`
- **State**: Ensure multiple days have colored dots (Green for low, Red for urgent).
- **Focus**: The monthly grid view.

### 4. Cinematic Notes (Transition)
- **Route**: `/en/dashboard/notes`
- **Action**: Click a note to expand it. Screenshot the *mid-transition* or the final *Editor View*.
- **Focus**: The side-by-side layout of List + Editor.

### 5. Mobile Responsiveness
- **Device**: iPhone 14 Pro / Pixel 7 (390px width).
- **Route**: `/en/dashboard`
- **Focus**: The stacked Bento Grid and the Bottom Navigation Bar.

## 💾 Saving Assets

Save all screenshots in `assets/screenshots/` with the naming convention:
- `dashboard-hero.png`
- `kanban-drag.png`
- `calendar-heatmap.png`
- `notes-editor.png`
- `mobile-dashboard.png`

**Format**: PNG (High Quality).
**Compression**: Run through [TinyPNG](https://tinypng.com) before committing.
