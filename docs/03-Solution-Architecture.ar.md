<div align="right" dir="rtl">

<!-- Language Switcher -->
<p align="left" dir="ltr">
  <a href="03-Solution-Architecture.md">English Version</a>
</p>

<div align="center">
<!-- Typing SVG Header -->
<img src="https://readme-typing-svg.demolab.com?font=Orbitron&size=30&duration=3000&pause=1000&color=00E5FF&center=true&vCenter=true&width=500&lines=03+-+Architecture;هندسة+الحلول+التقنية" alt="Solution Architecture"/>
</div>

<br/>

<blockquote align="center">
  <b>"الهندسة المعمارية تتعلق بإدارة التعقيد مع الحفاظ على السرعة."</b>
</blockquote>

---

<div align="center">
  <img src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png" width="600" />
</div>

## 🏗️ معمارية المزامنة ثلاثية الطبقات
تعتمد معمارية **FlowShan** على نموذج مزامنة **"الضيف أولاً"**. يتيح النظام للمستخدمين التفاعل مع مجموعة أدوات الإنتاجية الكاملة دون الحاجة لإنشاء حساب في البداية.

### 1. الطبقة المحلية (LocalStorage)
- يتم إجراء جميع عمليات (CRUD) على التخزين المحلي للمتصفح.
- لا توجد حاجة لطلبات الشبكة للتفاعلات البرمجية العادية.
- يضمن زمن استجابة صفري ودعم كامل للعمل بدون إنترنت.

### 2. الجسر (محرك المزامنة)
- محرك هجرة بيانات تم بناؤه خصيصاً لربط المعرفات المحلية المؤقتة بمعرفات UUID الدائمة في قاعدة البيانات.
- يعالج المعاملات الذرية (Atomic transactions) لضمان سلامة البيانات أثناء إنشاء الحساب.
- يتم تنظيف الذاكرة المحلية فقط بعد التأكد من نجاح الرفع للسيرفر بنسبة 100%.

### 3. طبقة السحابة (Prisma + PostgreSQL)
- تخزين البيانات العلائقية المنظمة.
- يعالج مزامنة الأجهزة المتعددة للمستخدمين المسجلين.
- يضمن الحماية عبر Jose (JWT) وأنماط التفويض الحديثة.

---

<div align="center">
  <img src="../assets/banners/db-schema.png" width="600" style="border-radius: 20px;"/>
  <br/>
  <b>تمثيل بصري لعلاقات قاعدة البيانات (Prisma)</b>
  <br/>
  <img src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png" width="600" />
</div>

<div align="left" dir="ltr">
  <a href="../README.ar.md">🏠 العودة للرئيسية</a>
</div>

</div>
