# 01 - نظرة عامة

اللغة: [English](01-Overview.md)

## الهدف
تحديد فرضية المنتج والهندسة في FlowShan.

## السياق
FlowShan منصة إنتاجية ثنائية اللغة تضم: Dashboard, Projects, Tasks, Clients, Notes, Calendar.

## الفرضية الأساسية
- سرعة التجربة تأتي من التفاعل المحلي أولًا.
- ديمومة البيانات تأتي من API + PostgreSQL بعد التوثيق.
- ممكن الجمع بين واجهة بصرية قوية وسير عمل عملي سريع.

## أدلة موثقة من الكود
- تنسيق لوحة التحكم: `src/app/[locale]/(platform)/dashboard/page.tsx`
- أسطح المنتج الأساسية: `src/app/[locale]/(platform)/projects/page.tsx`, `src/app/[locale]/(platform)/tasks/page.tsx`, `src/app/[locale]/(platform)/notes/page.tsx`, `src/app/[locale]/(platform)/calendar/page.tsx`
- اتساع نظام المكونات: `src/components/*` (61 مكون)

## المفاضلات
- الطموح البصري يفرض انضباطًا أعلى في الأداء.
- نمط المحلية أولًا يتطلب ضمان صحة المزامنة.

## التالي
`02-Problem-Statement.ar.md`

عودة: [README](../README.ar.md)
