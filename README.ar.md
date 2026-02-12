<div align="right" dir="rtl">

<p align="left" dir="ltr">
  <a href="README.md">
    <img src="https://img.shields.io/badge/Read_in-English-00E5FF?style=for-the-badge&labelColor=0B1020" alt="English"/>
  </a>
</p>

<div align="center">
  <img src="assets/banners/main-hero.png" alt="FlowShan Hero" width="100%"/>

# دراسة حالة FlowShan
### منصة إنتاجية بنهج "المحلية أولاً" وتجربة استخدام سينمائية

<p>
  <a href="https://flowshan.vercel.app" target="_blank"><img src="https://img.shields.io/badge/Live_Demo-00E5FF?style=for-the-badge&logo=vercel&logoColor=white&labelColor=0B1020" alt="Live Demo"/></a>
  <img src="https://img.shields.io/badge/Main_App-Private_Repository-12121A?style=for-the-badge&logo=github&logoColor=white" alt="Main Repo Private"/>
  <a href="https://github.com/codeshan-1/FlowShan-CaseStudy/" target="_blank"><img src="https://img.shields.io/badge/Case_Study-Repository-1A1F3A?style=for-the-badge&logo=bookstack&logoColor=00E5FF" alt="Case Study Repo"/></a>
</p>
</div>

## الملخص التنفيذي
FlowShan منصة إنتاجية مبنية على مبدأ واضح: **التفاعل محليًا أولًا، والحفظ السحابي ثانيًا**.  
هذه الدراسة توضح ما تم بناؤه، ولماذا تم اختيار القرارات، وما المفاضلات التي تم قبولها.

## حقائق موثقة من المشروع
| المؤشر | القيمة |
|---|---|
| التقنية الأساسية | Next.js 16.1.6, React 19, TypeScript, Tailwind 4, Prisma 7 |
| مسارات API | عدد 33 داخل `src/app/api/*` |
| صفحات المنصة | عدد 11 داخل `src/app/[locale]/(platform)` |
| مخازن الحالة | عدد 7 Zustand stores داخل `src/store` |
| مكونات الواجهة | عدد 61 داخل `src/components` |
| الدياجرامز | عدد 4 Mermaid diagrams داخل `diagrams/*.mmd` |

## ملاحظة الوصول للمستودعات
- مستودع التطبيق الأصلي خاص (Private).
- هذه الدراسة مبنية على مراجعة مباشرة للكود مع مراجع ملفات واضحة.

## آخر تحسينات تمت
- توحيد حالات الفراغ في صفحة المشاريع:
  - حالة إضافة أول مشروع.
  - حالة لا توجد نتائج بعد البحث/التصفية.
- إصلاح زر إضافة الملاحظات في حالة الفراغ ليظهر النص مع الأيقونة بثبات.
- توحيد ملفات الدياجرامز بصيغة Mermaid سليمة.

## معرض بصري
<div align="center">
  <img src="assets/screenshots/dashboard-hero.png" width="48%" alt="Dashboard"/>
  <img src="assets/screenshots/kanban-board.png" width="48%" alt="Kanban"/>
  <img src="assets/screenshots/calendar-heatmap.png" width="48%" alt="Calendar"/>
  <img src="assets/screenshots/notes-editor.png" width="48%" alt="Notes"/>
</div>

## نظرة معمارية سريعة
<div align="center">
  <img src="assets/banners/system-diagram.png" width="49%" alt="System Diagram"/>
  <img src="assets/banners/sync-timeline.png" width="49%" alt="Sync Timeline"/>
</div>

## مسارات القراءة حسب الهدف
### مسؤول توظيف (10-15 دقيقة)
1. <a href="docs/00-Case-Study-Map.ar.md"><b>00 - خريطة الدراسة</b></a>
2. <a href="docs/01-Overview.ar.md"><b>01 - نظرة عامة</b></a>
3. <a href="docs/04-Key-Features.ar.md"><b>04 - الميزات الجوهرية</b></a>
4. <a href="docs/10-Results-Impact.ar.md"><b>10 - النتائج والأثر</b></a>

### Tech Lead / Senior Engineer (25-40 دقيقة)
1. <a href="docs/00-Case-Study-Map.ar.md"><b>00 - خريطة الدراسة</b></a>
2. <a href="docs/02-Problem-Statement.ar.md"><b>02 - تحديد المشكلة</b></a>
3. <a href="docs/03-Solution-Architecture.ar.md"><b>03 - هندسة الحل</b></a>
4. <a href="docs/05-Technical-Decisions.ar.md"><b>05 - القرارات التقنية</b></a>
5. <a href="docs/06-Challenges-Solutions.ar.md"><b>06 - التحديات والحلول</b></a>
6. <a href="docs/07-Performance-Optimization.ar.md"><b>07 - تحسين الأداء</b></a>
7. <a href="docs/08-Testing-Quality.ar.md"><b>08 - الاختبار والجودة</b></a>

### صاحب منتج / عميل (15-20 دقيقة)
1. <a href="docs/00-Case-Study-Map.ar.md"><b>00 - خريطة الدراسة</b></a>
2. <a href="docs/11-Product-Scope-Requirements.ar.md"><b>11 - نطاق المنتج والمتطلبات</b></a>
3. <a href="docs/04-Key-Features.ar.md"><b>04 - الميزات الجوهرية</b></a>
4. <a href="docs/10-Results-Impact.ar.md"><b>10 - النتائج والأثر</b></a>
5. <a href="docs/12-Roadmap-Lessons.ar.md"><b>12 - خارطة الطريق والدروس</b></a>

## فهرس المستندات الكامل
| # | المستند |
|---|---|
| 00 | <a href="docs/00-Case-Study-Map.ar.md">خريطة الدراسة</a> |
| 01 | <a href="docs/01-Overview.ar.md">نظرة عامة</a> |
| 02 | <a href="docs/02-Problem-Statement.ar.md">تحديد المشكلة</a> |
| 03 | <a href="docs/03-Solution-Architecture.ar.md">هندسة الحل</a> |
| 04 | <a href="docs/04-Key-Features.ar.md">الميزات الجوهرية</a> |
| 05 | <a href="docs/05-Technical-Decisions.ar.md">القرارات التقنية</a> |
| 06 | <a href="docs/06-Challenges-Solutions.ar.md">التحديات والحلول</a> |
| 07 | <a href="docs/07-Performance-Optimization.ar.md">تحسين الأداء</a> |
| 08 | <a href="docs/08-Testing-Quality.ar.md">الاختبار والجودة</a> |
| 09 | <a href="docs/09-Deployment-DevOps.ar.md">النشر وDevOps</a> |
| 10 | <a href="docs/10-Results-Impact.ar.md">النتائج والأثر</a> |
| 11 | <a href="docs/11-Product-Scope-Requirements.ar.md">نطاق المنتج والمتطلبات</a> |
| 12 | <a href="docs/12-Roadmap-Lessons.ar.md">خارطة الطريق والدروس</a> |

## الرخصة
MIT License - راجع <a href="LICENSE">LICENSE</a>.

</div>
