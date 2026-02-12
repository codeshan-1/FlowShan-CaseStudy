# 06 - التحديات والحلول

اللغة: [English](06-Challenges-Solutions.md)

## الهدف
عرض أكبر المخاطر التنفيذية وكيف تم احتواؤها.

## التحدي 1: ترحيل علائقي من الضيف للسحابة
- الخطر: orphan records بعد تغيير IDs.
- المعالجة: mapping maps واضحة أثناء المزامنة.
- الدليل: `src/lib/sync-service.ts`

## التحدي 2: واجهة كثيفة + سرعة
- الخطر: بطء في board/calendar/notes.
- المعالجة: local-first + memoization + تنظيم rendering.
- الدليل: `src/app/[locale]/(platform)/tasks/page.tsx`, `src/components/calendar/interactive-calendar.tsx`

## التحدي 3: اتساق ثنائي اللغة
- الخطر: اختلاف السلوك بين EN/AR.
- المعالجة: routing + middleware مركزي.
- الدليل: `src/i18n/routing.ts`, `src/proxy.ts`

## التالي
`07-Performance-Optimization.ar.md`

عودة: [README](../README.ar.md)
