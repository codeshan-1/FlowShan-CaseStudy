# 07 - تحسين الأداء

اللغة: [English](07-Performance-Optimization.md)

## الهدف
توضيح قرارات الأداء في مسارات التفاعل الأساسية.

## استراتيجية التحسين
1. التحديثات الحرجة تتم محليًا أولًا.
2. استخدام memoization في التصفية والتجميع.
3. فصل مسارات board/list لخفض الحمل.
4. استخدام motion في نقاط ذات قيمة فقط.

## أدلة موثقة من الكود
- Memoized task filtering: `src/app/[locale]/(platform)/tasks/page.tsx`
- Calendar drag computations: `src/components/calendar/interactive-calendar.tsx`
- Notes transitions: `src/app/[locale]/(platform)/notes/page.tsx`, `src/components/notes/note-grid-view.tsx`
- دليل بصري: `../assets/banners/performance-lighthouse.png`

## ملاحظة قيد بيئة
فشل build في بعض البيئات المقيدة بسبب Google Fonts (مشكلة بيئة، ليست منطق تطبيق).

## التالي
`08-Testing-Quality.ar.md`

عودة: [README](../README.ar.md)
