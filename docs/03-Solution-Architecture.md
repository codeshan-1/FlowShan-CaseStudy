# 03 - Solution Architecture

Language: [العربية](03-Solution-Architecture.ar.md)

## Purpose
Describe how FlowShan combines local responsiveness with cloud persistence.

## Architecture Layers
1. Frontend layer (Next.js App Router + component system)
2. State layer (Zustand stores)
3. API layer (`src/app/api/*`)
4. Data layer (Prisma adapter + PostgreSQL)

## Verified Code Evidence
- Data client setup: `src/lib/db.ts`, `src/lib/prisma.ts`
- Projects API: `src/app/api/projects/route.ts`
- Tasks API: `src/app/api/tasks/route.ts`
- Notes/Clients APIs: `src/app/api/notes/route.ts`, `src/app/api/clients/route.ts`
- Sync sequencing: `src/lib/sync-service.ts`
- Diagram sources: `../diagrams/01-system-flow.mmd`, `../diagrams/02-data-sync.mmd`, `../diagrams/04-database-schema.mmd`

## Trade-offs
- Safer sync orchestration adds implementation complexity.
- Slug self-healing in APIs improves resilience but adds extra server work.

## Next
`04-Key-Features.md`

Back: [README](../README.md)
