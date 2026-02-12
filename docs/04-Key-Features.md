# 04 - Key Features

Language: [العربية](04-Key-Features.ar.md)

## Purpose
List user-facing capabilities with direct technical anchors.

## Core Features
1. Dashboard overview with charts, alerts, and summaries.
2. Projects module with board/list views, filters, and empty-state guidance.
3. Tasks module with drag-and-drop and multi-filter operations.
4. Notes module with cinematic grid/editor transitions and contextual linking.
5. Calendar module with drag rescheduling for tasks/projects/notes.
6. Clients module with linked projects/tasks context.

## Verified Code Evidence
- Dashboard: `src/app/[locale]/(platform)/dashboard/page.tsx`
- Projects: `src/app/[locale]/(platform)/projects/page.tsx`
- Tasks: `src/app/[locale]/(platform)/tasks/page.tsx`
- Notes page/grid: `src/app/[locale]/(platform)/notes/page.tsx`, `src/components/notes/note-grid-view.tsx`
- Calendar interaction: `src/components/calendar/interactive-calendar.tsx`

## Recent UX Refinements
- Projects: first-project + no-results empty states.
- Notes: empty-state add button alignment stabilized.

## Next
`05-Technical-Decisions.md`

Back: [README](../README.md)
