# 11 - Product Scope & Requirements

Language: [العربية](11-Product-Scope-Requirements.ar.md)

## Purpose
Make release boundaries explicit.

## In Scope (Current)
- Dashboard, projects, tasks, clients, notes, calendar
- Guest-first usage + authenticated persistence
- EN/AR localization
- API-backed CRUD for core entities

## Out of Scope (Current)
- Full team RBAC matrix
- Multi-device conflict resolution engine
- Native mobile apps
- Advanced BI analytics suite

## Functional Requirements
1. Guest can use core features immediately.
2. Authenticated users persist data through APIs.
3. Task/project operations remain responsive.
4. Search supports multi-entity retrieval.

## Verified Evidence
- APIs: `src/app/api/projects/route.ts`, `src/app/api/tasks/route.ts`, `src/app/api/clients/route.ts`, `src/app/api/notes/route.ts`, `src/app/api/search/route.ts`
- Stores and state: `src/store/*`

## Next
`12-Roadmap-Lessons.md`

Back: [README](../README.md)
