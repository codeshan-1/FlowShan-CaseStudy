# 03 - Solution Architecture

Language: [العربية](03-Solution-Architecture.ar.md)

## Purpose
Explain the selected architecture and how local-first interaction is reconciled with cloud persistence.

## Context
FlowShan uses a hybrid model:
- local state for immediate interaction,
- API-backed persistence for authenticated users,
- deterministic sync for migration from guest data.

## Decisions
- Separate system into Frontend, Sync/API, and Database layers.
- Use sequential sync phases to preserve relations (clients -> projects -> tasks -> notes).
- Keep state orchestration explicit through store-driven updates.

## Trade-offs
- Deterministic sync is safer but more verbose to implement.
- State orchestration can become complex if boundaries are not enforced.
- Operational debugging requires clear sync instrumentation.

## Evidence
- System diagram source: `../diagrams/01-system-flow.mmd`
- Sync sequence source: `../diagrams/02-data-sync.mmd`
- Database model source: `../diagrams/04-database-schema.mmd`
- Visual architecture assets: `../assets/banners/system-diagram.png`, `../assets/banners/sync-timeline.png`

## Next
Continue to `04-Key-Features.md` for product-level capabilities.

Back: [README](../README.md)
