# 03 - هندسة الحل

اللغة: [English](03-Solution-Architecture.md)

## الهدف
شرح كيف يجمع FlowShan بين سرعة التفاعل المحلي والحفظ السحابي.

## الطبقات المعمارية
1. واجهة (Next.js App Router + Components)
2. حالة (Zustand stores)
3. API (`src/app/api/*`)
4. بيانات (Prisma adapter + PostgreSQL)

## أدلة موثقة من الكود
- إعداد قاعدة البيانات: `src/lib/db.ts`, `src/lib/prisma.ts`
- API المشاريع: `src/app/api/projects/route.ts`
- API المهام: `src/app/api/tasks/route.ts`
- API الملاحظات والعملاء: `src/app/api/notes/route.ts`, `src/app/api/clients/route.ts`
- تسلسل المزامنة: `src/lib/sync-service.ts`
- مصادر الرسوم: `../diagrams/01-system-flow.mmd`, `../diagrams/02-data-sync.mmd`, `../diagrams/04-database-schema.mmd`

## المفاضلات
- زيادة أمان المزامنة = زيادة تعقيد التنفيذ.
- آليات self-healing (slugs) تحسن الاعتمادية لكنها تضيف عملًا على السيرفر.

## التالي
`04-Key-Features.ar.md`

عودة: [README](../README.ar.md)
