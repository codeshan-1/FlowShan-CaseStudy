<div align="center">

<!-- Title -->
<img src="https://readme-typing-svg.demolab.com?font=Orbitron&size=30&duration=3000&pause=1000&color=00E5FF&center=true&vCenter=true&width=500&lines=سجل+القرارات+التقنية;Architectural+ADRs" alt="FlowShan ADR"/>

<br/>

> [!NOTE]
> توثق هذه الوثيقة القرارات الهندسية الحاسمة التي تم اتخاذها أثناء تطوير FlowShan.

---

<img src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png" width="600" />

</div>

## 01. المزامنة أولاً محلياً (Local-First Data Synchronization)
- **الحالة**: ✅ مقبول
- **السياق**: متطلبات استجابة فورية (Zero-latency) وتقليل الاحتكاك في وضع الزائر (Guest Mode).
- **القرار**: تنفيذ معمارية **Local-First** باستخدام `localStorage` ومحرك مزامنة مخصص.
- **الدافع**: 
    - **زمن الاستجابة**: أقل من 16 مللي ثانية.
    - **تجربة المستخدم**: بدء فوري للزوار بدون تسجيل دخول.

---

<div align="center">
  <img src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png" width="600" />
</div>

## 02. Tailwind CSS 4 + Glassmorphism
- **الحالة**: ✅ مقبول
- **السياق**: الحاجة إلى نظام تصميم سينمائي ومؤثرات زجاجية (frosted-glass).
- **القرار**: استخدام **Tailwind 4** مع CSS Variables لإدارة التمويه (blur) والشفافية ديناميكياً.
- **الدافع**: دعم المتغيرات الأصلي (Native variable support) والأداء العالي.

---

<div align="center">
  <img src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png" width="600" />
</div>

## 03. Custom Sync vs. TanStack Query
- **الحالة**: ✅ مقبول
- **السياق**: ترحيل البيانات المعقدة من حالة محلية مجهولة (Anonymous local state) إلى حالة موثقة في Postgres.
- **القرار**: استخدام **`sync-service.ts` مخصص**.
- **الدافع**: تحكم دقيق في ترحيل البيانات العلائقية من `localStorage`.

---

<div align="center">
  <img src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png" width="600" />
  <br/>
  <i>"الهندسة المعمارية هي فن اختيار التسويات الصحيحة."</i>
</div>
