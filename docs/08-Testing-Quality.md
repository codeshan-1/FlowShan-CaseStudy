# 08 - Testing & Quality

Language: [العربية](08-Testing-Quality.ar.md)

## Purpose
Define how quality is validated in a multi-surface product.

## Quality Gates
1. Linting and static checks before release workflows.
2. Behavioral verification for guest/auth flows.
3. UI consistency checks for empty states and bilingual rendering.
4. Diagram/source consistency checks for documentation quality.

## Verified Evidence
- Lint script: `package.json` (`eslint`)
- Critical surfaces: projects/tasks/notes/calendar pages
- Empty-state fixes: `src/app/[locale]/(platform)/projects/page.tsx`, `src/components/notes/note-grid-view.tsx`
- Screenshot validation process: `99-Screenshot-Guide.md`

## Remaining Risk
Lack of full public E2E suite in this repository; current evidence is code-anchored + visual validation.

## Next
`09-Deployment-DevOps.md`

Back: [README](../README.md)
