# 05 - Technical Decisions

Language: [العربية](05-Technical-Decisions.ar.md)

## Purpose
Capture the key engineering decisions and why they were selected over simpler alternatives.

## Context
FlowShan had to support fast UI interactions, bilingual correctness, and reliable data migration.

## Decisions
- Local-first state updates as the default interaction strategy.
- Sequential relational migration with ID remapping.
- Tailwind 4 + custom glass variables for design control.
- Logical CSS properties to reduce RTL-specific overrides.

## Trade-offs
- Custom architecture gives control but demands stronger conventions.
- Sequential migration favors correctness over shortest code path.
- Custom styling system requires governance to avoid inconsistency.

## Evidence
- ADR baseline: `decisions.md`
- Sync sample implementation: `../code-samples/sync-service.ts`
- Component topology: `../diagrams/03-component-tree.mmd`

## Next
Continue to `06-Challenges-Solutions.md` for failure modes and mitigations.

Back: [README](../README.md)
