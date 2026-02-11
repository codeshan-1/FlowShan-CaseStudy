# 01 - Overview

Language: [العربية](01-Overview.ar.md)

## Purpose
Define what FlowShan is, who it serves, and what design/engineering thesis the project proves.

## Context
FlowShan is a productivity SaaS focused on projects, tasks, clients, notes, and calendar workflows.
The product targets users who need speed and clarity without sacrificing visual quality.

## Decisions
- Build around a local-first interaction model for instant UX.
- Use a cinematic glass-based design language to differentiate from generic dashboards.
- Treat bilingual support (EN/AR) as a core architecture requirement.

## Trade-offs
- Higher implementation complexity versus template-based UI systems.
- More careful state management required to keep local and remote data consistent.
- Additional QA overhead for RTL + responsive + motion-heavy surfaces.

## Evidence
- Hero and product identity: `../assets/banners/main-hero.png`
- Core UI proof: `../assets/screenshots/dashboard-hero.png`
- Architecture map: `03-Solution-Architecture.md`

## Next
Continue to `02-Problem-Statement.md` for constraints and success criteria.

Back: [README](../README.md)
