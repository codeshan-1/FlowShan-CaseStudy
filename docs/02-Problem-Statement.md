# 02 - Problem Statement

Language: [العربية](02-Problem-Statement.ar.md)

## Purpose
Document the user and technical pain points that justified building FlowShan.

## Context
Common productivity tools frequently fail in at least one of these dimensions:
- visual quality,
- interaction speed,
- bilingual correctness,
- simple onboarding for guest users.

## Decisions
- Define local responsiveness as a first-order requirement.
- Keep guest mode fully usable before authentication.
- Preserve relational integrity when syncing local guest data to cloud accounts.

## Trade-offs
- Sync complexity increases because relational IDs must be remapped safely.
- Maintaining both guest and authenticated flows increases test scope.
- More product logic is required around migration and fallback behavior.

## Evidence
- Sync flow logic: `../diagrams/02-data-sync.mmd`
- Guest-to-cloud architecture: `03-Solution-Architecture.md`
- UX validation: `../assets/screenshots/kanban-board.png`

## Next
Continue to `03-Solution-Architecture.md` for the chosen system design.

Back: [README](../README.md)
