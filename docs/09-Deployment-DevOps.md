# 09 - Deployment & DevOps

Language: [العربية](09-Deployment-DevOps.ar.md)

## Purpose
Summarize release and operational model.

## Deployment Model
- Hosting target: Vercel (live demo public)
- Build/runtime: Next.js app with API routes
- Data layer: PostgreSQL through Prisma adapter
- Environment-driven configuration for auth and integrations

## Verified Code Evidence
- Runtime scripts: `package.json`
- OAuth callback flow: `src/app/api/auth/google/callback/route.ts`
- Notification integrations: `src/app/api/integrations/telegram/*`, `src/lib/mailer.ts`
- Service health endpoint: `src/app/api/system/mailer-status/route.ts`

## Trade-offs
- Serverless convenience with stricter external dependency behavior (e.g., fonts/network constraints).

## Next
`10-Results-Impact.md`

Back: [README](../README.md)
