<div align="right" dir="rtl">

<!-- Language Switcher -->
<p align="left" dir="ltr">
  <a href="05-Technical-Decisions.md">English Version</a>
</p>

<div align="center">
<!-- Typing SVG Header -->
<img src="https://readme-typing-svg.demolab.com?font=Orbitron&size=30&duration=3000&pause=1000&color=00E5FF&center=true&vCenter=true&width=500&lines=05+-+Decisions;سجل+القرارات+الهندسية" alt="Technical Decisions"/>
</div>

<br/>

<blockquote align="center">
  <b>"الهندسة المعمارية هي فن اتخاذ التنازلات الصحيحة."</b>
</blockquote>

---

<div align="center">
  <img src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png" width="600" />
</div>

## 01. معمارية "المحلية أولاً" (Local-First)
- **القرار**: إعطاء الأولوية لـ `localStorage` لجميع عمليات CRUD الأساسية.
- **السبب**: القضاء على تأخر الشبكة وتوفير استجابة فورية لسير العمل عالي السرعة.
- **الحالة**: ✅ **تم التنفيذ**

## 02. المهاجرة العلائقية المتسلسلة
- **القرار**: محرك مزامنة مخصص ينقل البيانات في مراحل مرتبة بدقة (العملاء -> المشاريع -> المهام).
- **السبب**: الحفاظ على سلامة العلاقات العميقة عند ربط المعرفات المحلية المؤقتة بالمعرفات الدائمة للسيرفر.
- **الحالة**: ✅ **تم التنفيذ**

## 03. نظام التصميم: Tailwind 4 + Glassmorphism
- **القرار**: تجنب مكتبات UI الضخمة لصالح نظام زجاجي مخصص يعتمد على متغيرات CSS.
- **السبب**: تحكم كامل في الشفافية، التغبيش، واللمسات النيون مع الحفاظ على أقل حجم ممكن للحزمة.
- **الحالة**: ✅ **تم التنفيذ**

## 04. استراتيجية الترجمة: الخصائص المنطقية
- **القرار**: استخدام خصائص CSS المنطقية (`margin-inline`, `padding-inline`, إلخ) بدلاً من المادية (`left`, `right`).
- **السبب**: ضمان انعكاس مثالي للتخطيط لدعم اللغة العربية (RTL) بدون أي تعديلات يدوية.
- **الحالة**: ✅ **تم التنفيذ**

---

<div align="center">
  <img src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png" width="600" />
</div>

<div align="left" dir="ltr">
  <a href="../README.ar.md">🏠 العودة للرئيسية</a>
</div>

</div>
