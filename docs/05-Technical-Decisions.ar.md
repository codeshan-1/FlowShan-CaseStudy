# 05 - القرارات التقنية

اللغة: [English](05-Technical-Decisions.md)

## الهدف
توثيق القرارات التقنية الرئيسية ولماذا تم اختيارها.

## قرارات رئيسية
1. اعتماد المحلية أولًا عبر Zustand.
2. إدارة auth/tokens مع refresh fallback.
3. تفويض API عبر bearer + JWT verification.
4. Prisma + PG pool مع singleton في التطوير.
5. توجيه i18n مركزي للعربية والإنجليزية.

## أدلة موثقة من الكود
- Stores: `src/store/project-store.ts`, `src/store/task-store.ts`, `src/store/client-store.ts`, `src/store/note-store.ts`
- Auth/refresh: `src/store/auth.ts`, `src/app/api/auth/refresh/route.ts`
- OAuth callback: `src/app/api/auth/google/callback/route.ts`
- Data layer: `src/lib/db.ts`
- i18n runtime: `src/i18n/request.ts`, `src/proxy.ts`

## المفاضلات
- تحكم أكبر مقابل عبء صيانة أعلى.
- دعم الضيف + المستخدم الموثق يزيد تعقيد النظام.

## التالي
`06-Challenges-Solutions.ar.md`

عودة: [README](../README.ar.md)
