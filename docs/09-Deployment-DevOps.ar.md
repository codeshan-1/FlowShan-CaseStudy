# 09 - النشر وDevOps

اللغة: [English](09-Deployment-DevOps.md)

## الهدف
تلخيص نموذج النشر والتشغيل.

## نموذج التشغيل
- الاستضافة: Vercel (نسخة حية متاحة)
- التشغيل: Next.js app + API routes
- البيانات: PostgreSQL عبر Prisma adapter
- الإعدادات: بيئية (auth/integrations)

## أدلة موثقة من الكود
- Scripts التشغيل: `package.json`
- OAuth callback: `src/app/api/auth/google/callback/route.ts`
- تكاملات: `src/app/api/integrations/telegram/*`, `src/lib/mailer.ts`
- endpoint حالة النظام: `src/app/api/system/mailer-status/route.ts`

## المفاضلات
سهولة Serverless مقابل حساسية أعلى للقيود الخارجية (مثل الشبكة/الخطوط).

## التالي
`10-Results-Impact.ar.md`

عودة: [README](../README.ar.md)
