# 04 - الميزات الجوهرية

اللغة: [English](04-Key-Features.md)

## الهدف
عرض الميزات الأساسية مع ربط كل ميزة بدليل تقني مباشر.

## الميزات الأساسية
1. Dashboard فيه مؤشرات وتنبيهات وملخصات.
2. Projects بنمط Board/List مع تصفية وحالات فراغ واضحة.
3. Tasks مع Drag & Drop وتصفية متعددة.
4. Notes بانتقالات Grid/Editor وربط سياقي.
5. Calendar لإعادة الجدولة بالسحب للمهام/المشاريع/الملاحظات.
6. Clients مرتبطين بالمشاريع والمهام.

## أدلة موثقة من الكود
- Dashboard: `src/app/[locale]/(platform)/dashboard/page.tsx`
- Projects: `src/app/[locale]/(platform)/projects/page.tsx`
- Tasks: `src/app/[locale]/(platform)/tasks/page.tsx`
- Notes: `src/app/[locale]/(platform)/notes/page.tsx`, `src/components/notes/note-grid-view.tsx`
- Calendar: `src/components/calendar/interactive-calendar.tsx`

## تحسينات UX حديثة
- صفحة المشاريع: حالة إضافة أول مشروع + حالة لا توجد نتائج.
- صفحة الملاحظات: تثبيت محاذاة زر الإضافة في حالة الفراغ.

## التالي
`05-Technical-Decisions.ar.md`

عودة: [README](../README.ar.md)
