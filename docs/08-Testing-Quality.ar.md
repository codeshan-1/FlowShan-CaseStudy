# 08 - الاختبار وضمان الجودة

اللغة: [English](08-Testing-Quality.md)

## الهدف
تحديد كيف يتم التحقق من الجودة ومنع التراجعات.

## بوابات الجودة
1. Linting وفحوصات ثابتة قبل النشر.
2. التحقق من مسارات الضيف والمستخدم الموثق.
3. مراجعة اتساق الواجهة (خاصة حالات الفراغ وRTL).
4. مراجعة اتساق الدياجرامز ومصادر التوثيق.

## أدلة موثقة
- lint script: `package.json` (`eslint`)
- إصلاحات empty state: `src/app/[locale]/(platform)/projects/page.tsx`, `src/components/notes/note-grid-view.tsx`
- دليل اللقطات: `99-Screenshot-Guide.md`

## خطر قائم
لا توجد suite E2E عامة كاملة في هذا الريبو؛ الأدلة الحالية تعتمد على مراجعة الكود + التحقق البصري.

## التالي
`09-Deployment-DevOps.ar.md`

عودة: [README](../README.ar.md)
