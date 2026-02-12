# 05 - Technical Decisions

Language: [العربية](05-Technical-Decisions.ar.md)

## Purpose
Document key technical choices and why they were selected.

## Key Decisions
1. Local-first state updates via Zustand stores.
2. Auth/token persistence with refresh fallback logic.
3. API-layer authorization using bearer tokens + JWT verification.
4. Prisma adapter with PG pool and global singleton in dev.
5. Locale-first routing with EN/AR support.

## Verified Code Evidence
- Stores: `src/store/project-store.ts`, `src/store/task-store.ts`, `src/store/client-store.ts`, `src/store/note-store.ts`
- Auth and refresh: `src/store/auth.ts`, `src/app/api/auth/refresh/route.ts`
- JWT and auth flow: `src/lib/auth.ts`, `src/app/api/auth/google/callback/route.ts`
- DB setup: `src/lib/db.ts`
- i18n runtime: `src/i18n/request.ts`, `src/proxy.ts`

## Trade-offs
- Greater control vs higher implementation/maintenance load.
- Dual-path auth (guest + authenticated) increases complexity.

## Next
`06-Challenges-Solutions.md`

Back: [README](../README.md)
