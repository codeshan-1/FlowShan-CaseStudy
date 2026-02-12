# 📸 Cinematic Screenshot Guide

This guide defines the required visual assets to complete the FlowShan "Premium" Case Study.
We need a full matrix of screenshots to support **Bilingual (EN/AR)** and **Themed (Dark/Light)** documentation.

## 📂 File Naming Convention

Please save all assets in `assets/screenshots/` using this strict pattern:
`[component-name].[lang].[theme].png`

### 1. English (Default) - Dark Mode
*Used in standard English READMEs.*
- `dashboard-hero.png`
- `kanban-board.png`
- `calendar-heatmap.png`
- `notes-editor.png`

### 2. Arabic (RTL) - Dark Mode
*Used in Arabic READMEs.*
- `dashboard-hero.ar.png`
- `kanban-board.ar.png`
- `calendar-heatmap.ar.png`
- `notes-editor.ar.png`

### 3. Light Mode Variants (Optional but Recommended)
*Used for specific "Theme Toggle" showcases.*
- `dashboard-hero.light.png`
- `dashboard-hero.ar.light.png`

---

## 🖼️ The Shot List (Required)

### 1. Dashboard Hero (`dashboard-hero`)
**Goal:** Show the "Command Center" feel.
- **Route:** `/dashboard`
- **Data:**
  - "Good Morning, [Name]" greeting.
  - 3-4 active tasks in the Bento Grid.
  - Activity Heatmap populated.
- **Arabic Nuance:** Ensure the layout is flipped (Sidebar on right).

### 2. Kanban Board (`kanban-board`)
**Goal:** Show "Fluidity".
- **Route:** `/dashboard/tasks`
- **Action:** **Drag a card** halfway between "Todo" and "In Progress".
- **Visual:** The card should be slightly rotated or lifted (if using dnd-kit overlay style).
- **Arabic Nuance:** Columns should be ordered Right-to-Left (Todo -> In Progress -> Done).

### 3. Interactive Calendar (`calendar-heatmap`)
**Goal:** Show "Density".
- **Route:** `/dashboard/calendar`
- **Data:** A month view with multiple colored dots (priorities).
- **Action:** Hover over a specific day to show the task summary popover.

### 4. Notes Editor (`notes-editor`)
**Goal:** Show "Focus".
- **Route:** `/dashboard/notes`
- **Visual:** Split view (List | Editor).
- **Content:** A note with **Bold**, *Italic*, and a Checklist.

### 5. Performance Score (`performance-lighthouse`)
**Goal:** Show "Speed".
- **Tool:** Chrome DevTools -> Lighthouse.
- **Result:** Four "100" green circles.
- **Filename:** `performance-lighthouse.png` (Universal, no language variant needed).

---

## 📐 Technical Specs

1.  **Resolution:** `1920x1080` (Standard Full HD).
2.  **Browser:** Chrome (Hide Bookmarks Bar).
3.  **Zoom:** 100% (or 110% if text looks too small).
4.  **Compression:** Run all PNGs through [TinyPNG](https://tinypng.com) before committing.

## 💡 Pro Tip for "Dummy" Data
If you don't have real data:
1.  Open **Redux Javascript Console** (or just edit DOM).
2.  Change "Task ID 123" to "Deploy Production Server".
3.  Change "Task ID 124" to "Review Q3 Roadmap".
4.  Make it look **professional**, not "test task 1".
