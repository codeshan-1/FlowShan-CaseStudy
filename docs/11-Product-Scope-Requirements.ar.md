# 11 - نطاق المنتج والمتطلبات

اللغة: [English](11-Product-Scope-Requirements.md)

## الهدف
تحديد حدود الإصدار الحالي بشكل صريح.

## داخل النطاق (حاليًا)
- Dashboard + Projects + Tasks + Clients + Notes + Calendar
- تجربة ضيف كاملة + حفظ بعد التوثيق
- دعم عربي/إنجليزي
- CRUD عبر API للكيانات الأساسية

## خارج النطاق (حاليًا)
- RBAC مؤسسي كامل
- محرك conflict resolution متعدد الأجهزة
- تطبيقات Native
- BI analytics متقدمة

## متطلبات وظيفية
1. الضيف يبدأ فورًا بدون تسجيل إلزامي.
2. المستخدم الموثق يحفظ البيانات عبر API.
3. عمليات المهام/المشاريع تبقى سريعة.
4. البحث يدعم أكثر من كيان.

## أدلة موثقة
- APIs: `src/app/api/projects/route.ts`, `src/app/api/tasks/route.ts`, `src/app/api/clients/route.ts`, `src/app/api/notes/route.ts`, `src/app/api/search/route.ts`
- Stores: `src/store/*`

## التالي
`12-Roadmap-Lessons.ar.md`

عودة: [README](../README.ar.md)
