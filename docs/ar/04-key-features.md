<div align="center" dir="rtl">

# ✨ 04 - الميزات الجوهرية والتجربة السينمائية

![Features](https://readme-typing-svg.demolab.com?font=Fira+Code&size=22&duration=3000&pause=1000&color=00E5FF&center=true&vCenter=true&width=500&lines=The+FlowShan+Experience;Kanban+%7C+Calendar+%7C+Notes)

> **"مبني على فلسفة أن كل نقرة يجب أن تكون ممتعة."**

<br/>

[![Prev Chapter](https://img.shields.io/badge/Prev_Chapter-Architecture-00E5FF?style=for-the-badge)](03-solution-architecture.md)
[![Next Chapter](https://img.shields.io/badge/Next_%D8%A7%D9%84%D8%AA%D8%A7%D9%84%D9%8A-%D8%A7%D9%84%D9%82%D8%B1%D8%A7%D8%B1%D8%A7%D8%AA_%D8%A7%D9%84%D8%AA%D9%82%D9%86%D9%8A%D8%A9-4a45ea?style=for-the-badge)](05-technical-decisions.md)

</div>

<br/>
<div align="center">
<img width="600" src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png"/>
</div>
<br/>

<div dir="rtl">

## 1. 📋 لوحة كانبان السينمائية (Cinematic Kanban)
لم نكن نريد مجرد لوحة؛ كنا نريد **مساحة عمل انسيابية**.
- **الميزات:**
  - سحب وإفلات المهام بين الحالات (Statuses) بنعومة.
  - تحديثات واجهة متفائلة (بدون دوائر تحميل).
  - أشرطة تقدم فورية لاكتمال المشروع.
- **الكود:** `src/components/kanban/kanban-board.tsx`
- **التقنية:** `@dnd-kit/core` + كشف تصادم مخصص (custom collision).

<div align="center">
  <img src="../../assets/screenshots/kanban-board.webp" width="80%" alt="Kanban Board"/>
</div>

<br/>

## 2. 📅 التقويم التفاعلي (Interactive Calendar)
تقويم يعمل كمركز للقيادة، ليس للعرض فقط.
- **الميزات:**
  - تصور المواعيد النهائية وتوزيع المهام.
  - سحب المهام لإعادة جدولتها (Drag to Reschedule).
  - اضغط للتعديل مباشرة من خلية اليوم.
- **الكود:** `src/components/calendar/interactive-calendar.tsx`

<div align="center">
  <img src="../../assets/screenshots/calendar-view.webp" width="80%" alt="Calendar"/>
</div>

<br/>

## 3. 📝 ملاحظات "محلية أولاً" (Local-First Notes)
بيئة كتابة خالية من التشتت.
- **الميزات:**
  - محرر نصوص غني (Rich Text) مبني على ProseMirror.
  - عرض شبكي (Grid View) بتخطيط Masonry للبطاقات.
  - حفظ تلقائي فوري في التخزين المحلي.
- **الكود:** `src/components/notes/editor.tsx`

<div align="center">
  <img src="../../assets/screenshots/notes-editor.png" width="80%" alt="Notes"/>
</div>

<br/>

## 4. 📊 لوحة المعلومات (The Dashboard)
النافذة الواحدة لإنتاجيتك.
- **الميزات:**
  - **نظام الترحيب:** "صباح الخير/مساء الخير" ذكي حسب السياق.
  - **خريطة الحرارة (Activity Heatmap):** تصور لنشاطك على غرار Github.
  - **تنبيهات عاجلة:** ظهور تلقائي للعناصر المتأخرة.
- **الكود:** `src/app/[locale]/(platform)/dashboard/page.tsx`

<div align="center">
  <img src="../../assets/screenshots/dashboard-dark.webp" width="80%" alt="Dashboard"/>
</div>

<br/>

## 5. 🛡️ شبكة الأمان: الحذف المرن والتراجع (Undo)
أخطاء المستخدم واردة، لذا قمنا ببناء تدفق حذف **غير مدمر**.
- **الميزات:**
  - **الحذف المرن (Soft Delete):** لا تُحذف المهام نهائياً فوراً؛ بل يتم ترقيمها في قاعدة البيانات.
  - **نافذة الـ 5 ثواني:** يظهر إشعار (Toast) تفاعلي فور الحذف للتراجع.
  - **استعادة بنقرة واحدة:** الضغط على "تراجع" يفعل منطق `restoreTask` لتعود المهمة فوراً دون تحديث الصفحة.
- **التقنية:** مكتبة `sonner` للإشعارات + `restoreTask` في مخزن الحالة (Store).

<br/>
<br/>

## 8. 🚀 معالج التهيئة الذكي (Smart Onboarding)
لتقليل الاحتكاك وتوجيه المستخدم الجديد، قمنا ببناء معالج تهيئة متكامل.
- **الميزات:**
  - **محدد الدور (Persona Selector):** الاختيار بين مستقل، طالب، مدير، أو مخصص.
  - **الافتراضيات الديناميكية:** تحديد الأقسام والوحدات المفعلة تلقائياً بناءً على الدور المختار.
  - **واجهة زجاجية تفاعلية:** انتقالات انزلاقية ناعمة تعتمد على `framer-motion` لتوفير تجربة ترحيبية بريميوم.
- **الكود:** `src/components/onboarding/onboarding-wizard.tsx`

<br/>

## 9. ⚙️ لوحة معلومات متكيفة ومساحة عمل مخصصة
بدلاً من عرض واجهات فارغة أو جداول ثابتة، أصبحت مساحة العمل قابلة للتخصيص بالكامل.
- **الميزات:**
  - **تبديل الوحدات:** إمكانية تشغيل أو إيقاف الأقسام المختلفة (العملاء، المشاريع، المهام، الملاحظات، التقويم) أثناء وقت التشغيل.
  - **تكييف الواجهة:** يتغير تخطيط الأعمدة والشبكات تلقائياً لتوسيع المكونات المفعلة وإخفاء المعطلة بشكل كامل لتجنب الفراغات.
  - **إعدادات مساحة العمل:** قسم مخصص داخل الإعدادات لتعديل الدور والتحكم في الوحدات المفعلة.
- **الكود:** `src/app/[locale]/(platform)/settings/page.tsx` + `src/app/[locale]/(platform)/dashboard/page.tsx`

<br/>
<div align="center">
<img width="600" src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png"/>
</div>
<br/>

## 🔗 التنقل

<div align="center">

[![Prev](https://img.shields.io/badge/Prev-03_%D8%A7%D9%84%D9%87%D9%86%D8%AF%D8%B3%D8%A9_%D8%A7%D9%84%D9%85%D8%B9%D9%85%D8%A7%D8%B1%D9%8A%D8%A9-00E5FF?style=for-the-badge&logo=readthedocs&logoColor=white)](03-solution-architecture.md)
[![Next](https://img.shields.io/badge/Next-05_%D8%A7%D9%84%D9%82%D8%B1%D8%A7%D8%B1%D8%A7%D8%AA_%D8%A7%D9%84%D8%AA%D9%82%D9%86%D9%8A%D8%A9-4a45ea?style=for-the-badge&logo=readthedocs&logoColor=white)](05-technical-decisions.md)

</div>

</div>