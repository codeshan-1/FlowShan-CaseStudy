# 02 - Problem Statement

Language: [العربية](02-Problem-Statement.ar.md)

## Purpose
Capture the concrete problems that justified the architecture.

## Problem Constraints
1. Users need immediate task/project interaction (especially board operations).
2. Guest usage must be possible before signup.
3. Data created as guest must survive migration to authenticated storage.
4. EN/AR layout parity is required.

## Verified Code Evidence
- Guest-first auth behavior: `src/store/auth.ts` (`loginGuest`, persisted auth state)
- Local data sync: `src/lib/sync-service.ts` (clients -> projects -> tasks)
- Bilingual routing: `src/i18n/routing.ts` and `src/proxy.ts`
- Search/command behavior across entities: `src/app/api/search/route.ts`

## Risks
- ID mapping mistakes can break relational consistency.
- Dual-mode (guest/auth) increases QA surface.

## Next
`03-Solution-Architecture.md`

Back: [README](../README.md)
