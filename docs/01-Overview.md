# 01 - Overview

Language: [العربية](01-Overview.ar.md)

## Purpose
Define FlowShan's product and engineering thesis.

## Context
FlowShan is a bilingual productivity app with modules for dashboard, projects, tasks, clients, notes, and calendar.

## Core Thesis
- Immediate UX comes from local-first interaction.
- Data durability comes from authenticated API + PostgreSQL persistence.
- A premium visual system can coexist with practical workflow speed.

## Verified Code Evidence
- Dashboard orchestration: `src/app/[locale]/(platform)/dashboard/page.tsx`
- Feature surfaces: `src/app/[locale]/(platform)/projects/page.tsx`, `src/app/[locale]/(platform)/tasks/page.tsx`, `src/app/[locale]/(platform)/notes/page.tsx`, `src/app/[locale]/(platform)/calendar/page.tsx`
- UI system breadth: `src/components/*` (61 components)

## Trade-offs
- Visual richness requires stronger performance discipline.
- Local-first flows require sync correctness guarantees.

## Next
`02-Problem-Statement.md`

Back: [README](../README.md)
