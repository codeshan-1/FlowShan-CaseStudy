# 00 - خريطة دراسة الحالة

## الهدف
نقطة الدخول الأساسية للتنقل داخل دراسة حالة FlowShan.

## لقطة موثقة من المشروع
- الإطار: Next.js `16.1.6` (من `package.json`)
- الواجهة: React `19.2.3`
- إدارة الحالة: Zustand داخل `src/store/*`
- طبقة API: `src/app/api/*` (عدد 33)
- صفحات المنصة: `src/app/[locale]/(platform)` (عدد 11)
- i18n: `src/i18n/routing.ts`, `src/i18n/request.ts`

## مسارات قراءة موصى بها
### مراجعة بورتفوليو (10 دقائق)
1. `01-Overview.ar.md`
2. `04-Key-Features.ar.md`
3. `10-Results-Impact.ar.md`

### مراجعة هندسية (30-40 دقيقة)
1. `02-Problem-Statement.ar.md`
2. `03-Solution-Architecture.ar.md`
3. `05-Technical-Decisions.ar.md`
4. `06-Challenges-Solutions.ar.md`
5. `07-Performance-Optimization.ar.md`
6. `08-Testing-Quality.ar.md`

### مراجعة نطاق المنتج (20 دقيقة)
1. `11-Product-Scope-Requirements.ar.md`
2. `04-Key-Features.ar.md`
3. `10-Results-Impact.ar.md`
4. `12-Roadmap-Lessons.ar.md`

## خريطة الأسئلة لكل ملف
- `01`: ما فرضية المنتج؟
- `02`: ما المشكلة والقيود؟
- `03`: كيف تعمل المعمارية فعليًا؟
- `04`: ما الميزات ذات الأولوية؟
- `05`: لماذا هذه القرارات التقنية؟
- `06`: ما التحديات وكيف عولجت؟
- `07`: كيف تم الحفاظ على الأداء؟
- `08`: كيف يتم ضبط الجودة؟
- `09`: كيف تتم عملية النشر والتشغيل؟
- `10`: ما النتائج الملموسة؟
- `11`: ما داخل/خارج النطاق؟
- `12`: ما الخطة القادمة والدروس؟
