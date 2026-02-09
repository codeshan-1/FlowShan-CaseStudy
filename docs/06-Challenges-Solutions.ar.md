<div align="right" dir="rtl">

<!-- Language Switcher -->
<p align="left" dir="ltr">
  <a href="06-Challenges-Solutions.md">English Version</a>
</p>

<div align="center">
<!-- Typing SVG Header -->
<img src="https://readme-typing-svg.demolab.com?font=Orbitron&size=30&duration=3000&pause=1000&color=00E5FF&center=true&vCenter=true&width=500&lines=06+-+Challenges;التحديات+والحلول+الهندسية" alt="Challenges and Solutions"/>
</div>

<br/>

<blockquote align="center">
  <b>"كل تحدٍ تقني هو فرصة معمارية."</b>
</blockquote>

---

<div align="center">
  <img src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png" width="600" />
</div>

## 🧩 التحدي 1: المزامنة العلائقية أثناء المهاجرة
- **المشكلة**: نقل البيانات من تخزين محلي مجهول (حيث المعرفات نصوص بسيطة) إلى قاعدة بيانات PostgreSQL علائقية (حيث المعرفات UUIDs) مع الحفاظ على الروابط بين المشاريع والمهام.
- **الحل**: تنفيذ **رابط تبعيات ثلاثي المراحل**. يقوم محرك المزامنة أولاً بنقل العملاء، ويخزن معرفاتهم الجديدة في "خريطة" مؤقتة، ثم يستخدم تلك المعرفات لربط المشاريع، ويكرر الأمر للمهام.

## 🧩 التحدي 2: الـ Glassmorphism مقابل الأداء
- **المشكلة**: الاستخدام المفرط لخاصية `backdrop-filter: blur()` يمكن أن يسبب بطئاً في معالج الرسوميات (GPU) على الأجهزة الضعيفة.
- **الحل**: **الصيرورة المشروطة والتغبيش الساكن**. استخدمت محرك Tailwind 4 المحسن لتطبيق التغبيش فقط على اللوحات التفاعلية النشطة، مع الحفاظ على بطاقات الخلفية الساكنة باستخدام طبقات شفافة محسنة.

## 🧩 التحدي 3: تخطيطات متعددة اللغات فورية (RTL)
- **المشكلة**: التبديل بين الإنجليزية (LTR) والعربية (RTL) غالباً ما يكسر تخطيطات Kanban المعقدة.
- **الحل**: استخدام **Next-Intl** مدمجاً مع خواص CSS المنطقية الديناميكية (`margin-inline-start`, `inset-inline-start`) بدلاً من `left/right`. يضمن هذا انعكاس التخطيط بشكل مثالي دون أي تعديلات يدوية.

---

<div align="center">
  <img src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png" width="600" />
</div>

<div align="left" dir="ltr">
  <a href="../README.ar.md">🏠 العودة للرئيسية</a>
</div>

</div>
