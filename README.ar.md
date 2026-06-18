<div align="center" dir="rtl">

![FlowShan](https://readme-typing-svg.demolab.com?font=Fira+Code&size=28&duration=3000&pause=1000&color=00E5FF&center=true&vCenter=true&width=600&lines=FlowShan+Case+Study;Local-First+Productivity+Platform;Next.js+16+%7C+Prisma+%7C+Zustand)

<br/>

### ⚡ الإنتاجية المحلية أولاً (Local-First) بتجربة استخدام سينمائية

> **تفاعل فوري، مزامنة سلسة، وتجربة مطور متميزة.**

<p>
  <a href="https://flowshan.vercel.app">
    <img src="https://img.shields.io/badge/Live_Demo-FlowShan_App-00E5FF?style=for-the-badge&logo=vercel&logoColor=white&labelColor=0B1020"/>
  </a>
  <a href="docs/ar/01-overview.md">
    <img src="https://img.shields.io/badge/Read_Docs-Start_Here-4a45ea?style=for-the-badge&logo=readthedocs&logoColor=white"/>
  </a>
  <a href="README.md">
    <img src="https://img.shields.io/badge/Language-English-0B1020?style=for-the-badge"/>
  </a>
</p>

<br/>

![FlowShan Banner](assets/banners/main-hero.webp)

<br/>

[![Tech Stack](https://img.shields.io/badge/Stack-Next.js%2016%20%7C%20React%2019%20%7C%20Tailwind%20v4%20%7C%20Prisma-4a45ea?style=flat-square)]()

</div>

<br/>

<div dir="rtl">

## 📋 الملخص التنفيذي
**FlowShan** هي منصة إنتاجية صممت حول مبدأ **"المحلية أولاً" (Local-First)**. تعطي الأولوية للتفاعل الفوري للمستخدم باستخدام تحديثات واجهة المستخدم المتفائلة (Optimistic UI) وإدارة الحالة المحلية، مع مزامنة البيانات مع السحابة في الخلفية.

تحلل دراسة الحالة هذه المعمارية، التحديات، والقرارات التقنية وراء بناء أداة إنتاجية عالية الأداء بتجربة سينمائية.

<br/>
<div align="center">
<img width="600" src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png"/>
</div>
<br/>

## 📊 إحصائيات المشروع

| المؤشر | التفاصيل |
|:---|:---|
| **التقنية الأساسية** | Next.js 16.2 (App Router / Turbopack), React 19, TypeScript |
| **التصميم** | Tailwind CSS v4, Framer Motion (تأثيرات سينمائية) |
| **إدارة الحالة** | Zustand (7 Stores), Local-First Architecture |
| **الخلفية** | Server Actions, Prisma ORM, PostgreSQL |
| **المكونات** | 70+ مكون واجهة قابل لإعادة الاستخدام |
| **التفاعل** | نظام صوت Web Audio (نغمة إنجاز C6-E6)، تأثيرات جسيمات تفاعلية، مستشعرات اللمس |
| **الأداء** | زمن استجابة أقل من 100ms، بناء مجمّع Turbopack خلال ~30 ثانية |

<br/>
<div align="center">
<img width="600" src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png"/>
</div>
<br/>

## 📸 معرض الصور

<div align="center">
  <img src="assets/screenshots/dashboard-hero.webp" width="48%" alt="Dashboard"/>
  <img src="assets/screenshots/kanban-board.webp" width="48%" alt="Kanban Board"/>
  <img src="assets/screenshots/dashboard-dark.webp" width="48%" alt="Calendar"/>
  <img src="assets/screenshots/notes-editor.webp" width="48%" alt="Notes Editor"/>
</div>

<br/>
<div align="center">
<img width="600" src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png"/>
</div>
<br/>

## 🏗️ معمارية النظام

يستخدم النظام **محرك مزامنة هجين (Hybrid Sync Engine)**:
1.  **وضع الزائر:** وظائف كاملة باستخدام `localStorage`.
2.  **وضع المصادقة:** مزامنة في الخلفية مع PostgreSQL/Prisma.
3.  **حل التعارض:** (Last-write-wins) مع واجهة متفائلة.

<div align="center">
  <img src="assets/banners/system-diagram.png" width="80%" alt="System Architecture"/>
</div>

<br/>
<div align="center">
<img width="600" src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png"/>
</div>
<br/>

## 📚 فهرس الوثائق

استكشف التفاصيل التقنية الكاملة:

| # | الوثيقة | الوصف |
|:--:|:---|:---|
| **01** | [![Overview](https://img.shields.io/badge/Read-Overview-4a45ea?style=flat-square)](docs/ar/01-overview.md) | الرؤية، الفلسفة الجوهرية، ونطاق المشروع. |
| **02** | [![Problem](https://img.shields.io/badge/Read-Problem_Statement-4a45ea?style=flat-square)](docs/ar/02-problem-statement.md) | تحدي بناء تطبيقات Local-First حديثة. |
| **03** | [![Architecture](https://img.shields.io/badge/Read-Solution_Architecture-4a45ea?style=flat-square)](docs/ar/03-solution-architecture.md) | تصميم النظام، تدفق البيانات، ومنطق المزامنة. |
| **04** | [![Features](https://img.shields.io/badge/Read-Key_Features-4a45ea?style=flat-square)](docs/ar/04-key-features.md) | كانبان، التقويم، الملاحظات، تصميم الصوت، واللوحة التفاعلية بصفحة الهبوط. |
| **05** | [![Decisions](https://img.shields.io/badge/Read-Technical_Decisions-4a45ea?style=flat-square)](docs/ar/05-technical-decisions.md) | لماذا Next.js 16؟ لماذا Zustand بدلاً من Redux؟ |
| **06** | [![Challenges](https://img.shields.io/badge/Read-Challenges_&_Solutions-4a45ea?style=flat-square)](docs/ar/06-challenges-solutions.md) | حل مشاكل الـ Hydration، تضارب السحب على الموبايل، والتشغيل التلقائي للصوت. |
| **07** | [![Performance](https://img.shields.io/badge/Read-Performance-4a45ea?style=flat-square)](docs/ar/07-performance.md) | تقنيات تحسين الأداء ومقاييس بناء مجمّع Turbopack الفائقة. |
| **08** | [![Testing](https://img.shields.io/badge/Read-Testing-4a45ea?style=flat-square)](docs/ar/08-testing-quality.md) | استراتيجية ضمان الجودة ومنهجيات الاختبار. |
| **09** | [![Deployment](https://img.shields.io/badge/Read-Deployment-4a45ea?style=flat-square)](docs/ar/09-deployment.md) | خط أنابيب النشر على Vercel و CI/CD. |
| **10** | [![Impact](https://img.shields.io/badge/Read-Results_&_Impact-4a45ea?style=flat-square)](docs/ar/10-results-impact.md) | المقاييس النهائية ونتائج الأعمال. |

<br/>
<div align="center">
<img width="600" src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png"/>
</div>
<br/>

<div align="center">

### جاهز للبدء؟
[![Start Reading](https://img.shields.io/badge/Start_Reading-01_Overview-00E5FF?style=for-the-badge&labelColor=0B1020)](docs/ar/01-overview.md)

</div>

</div>
