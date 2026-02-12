<div align="center" dir="rtl">

# 📦 11 - نطاق المنتج والمتطلبات

![Scope](https://readme-typing-svg.demolab.com?font=Fira+Code&size=22&duration=3000&pause=1000&color=00E5FF&center=true&vCenter=true&width=500&lines=What+We+Built;MVP+Definition;Out+of+Scope)

> **"التعريف الصارم لـ 'ما تم إنجازه' يضمن عدم انزلاق المشروع إلى فوضى الميزات (Scope Creep)."**

<br/>

[![Prev Chapter](https://img.shields.io/badge/Prev_Chapter-Impact-00E5FF?style=for-the-badge)](10-results-impact.md)
[![Next Chapter](https://img.shields.io/badge/Next_%D8%A7%D9%84%D8%AA%D8%A7%D9%84%D9%8A-%D8%A7%D9%84%D8%AF%D8%B1%D9%88%D8%B3-4a45ea?style=for-the-badge)](12-roadmap.md)

</div>

<br/>
<div align="center">
<img width="600" src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png"/>
</div>
<br/>

<div dir="rtl">

## ✅ داخل النطاق (The MVP)

التزمنا بتسليم مجموعة إنتاجية "فردية" (Single-Player) كاملة الوظائف.

### 1. الوحدات الوظيفية
*   **لوحة كانبان:** عمليات CRUD كاملة، سحب وإفلات، إدارة العلامات (Labels).
*   **تقويم تفاعلي:** عروض شهرية/أسبوعية، تراكب المهام.
*   **تطبيق الملاحظات:** محرر نصوص غني، حفظ تلقائي، وسوم (Tags).
*   **إدارة العملاء:** إدارة جهات اتصال بسيطة مرتبطة بالمشاريع.

### 2. البنية التحتية
*   **وضع الضيف:** وصول كامل للميزات دون تسجيل دخول.
*   **التوطين:** دعم أصلي للعربية (RTL) والإنجليزية.
*   **السمات:** وضع فاتح/داكن مع كشف النظام.

<br/>

## ❌ خارج النطاق (حالياً)

لضمان الجودة العالية، استبعدنا عمداً:

*   **متعدد اللاعبين في الوقت الفعلي (Real-Time Multiplayer):** WebSockets للتحرير المتزامن وظهور مؤشرات الآخرين (Cursors).
*   **تطبيقات أصلية (Native Mobile Apps):** نسخ React Native / iOS (نسخة الويب للموبايل مدعومة).
*   **أدوار الفريق (Team RBAC):** أدوار مثل "مسؤول"، "محرر"، "عارض". حالياً، مساحات العمل شخصية فقط.

<br/>
<div align="center">
<img width="600" src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png"/>
</div>
<br/>

## 📋 مصفوفة التحقق من المتطلبات

| المطلب | الحالة | ملف الدليل |
|:---|:---:|:---|
| **الضيف يمكنه إنشاء مهام** | ✅ | `src/store/tasks.ts` (يعالج `guest_id`) |
| **بحث عبر الوحدات** | ✅ | `src/app/api/search/route.ts` (استعلام متعدد الجداول) |
| **ثبات البيانات** | ✅ | `src/lib/prisma.ts` (اتصال PostgreSQL) |
| **توجيه ثنائي اللغة** | ✅ | `src/i18n/routing.ts` (إعداد Next-Intl) |

<br/>
<div align="center">
<img width="600" src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png"/>
</div>
<br/>

## 🔗 التنقل

<div align="center">

[![Prev](https://img.shields.io/badge/Prev-10_%D8%A7%D9%84%D9%86%D8%AA%D8%A7%D8%A6%D8%AC-00E5FF?style=for-the-badge&logo=readthedocs&logoColor=white)](10-results-impact.md)
[![Next](https://img.shields.io/badge/Next-12_%D8%A7%D9%84%D8%AF%D8%B1%D9%88%D8%B3-4a45ea?style=for-the-badge&logo=readthedocs&logoColor=white)](12-roadmap.md)

</div>

</div>