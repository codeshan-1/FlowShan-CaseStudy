<div align="right" dir="rtl">

<!-- Language Switcher -->
<p align="left" dir="ltr">
  <a href="08-Testing-Quality.md">English Version</a>
</p>

<div align="center">
<!-- Typing SVG Header -->
<img src="https://readme-typing-svg.demolab.com?font=Orbitron&size=30&duration=3000&pause=1000&color=00E5FF&center=true&vCenter=true&width=500&lines=08+-+Testing;الجودة+وضمان+الأداء" alt="Testing and Quality"/>
</div>

<br/>

<blockquote align="center">
  <b>"الجودة ليست فعلاً؛ بل هي عادة."</b>
</blockquote>

---

<div align="center">
  <img src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png" width="600" />
</div>

## 🛡️ منظومة التحقق التلقائي
يستخدم **FlowShan** خط إنتاج اختبارات صارم لضمان أن منطق المزامنة المعقد بين التخزين المحلي والسحابي يظل محصناً ضد الأخطاء.

### 1. اختبارات الوحدات والتكامل (Unit & Integration)
- **Jest**: يُستخدم لضبط منطق `sync-service` الجوهري، والتأكد من أن خرائط المعرفات العلائقية تعمل كما هو متوقع في أصعب الحالات.
- **Prisma Mocking**: محاكاة تفاعلات قاعدة البيانات لاختبار المنطق البرمجي بمعزل عن أي تأثيرات خارجية.

### 2. الاختبارات الشاملة (E2E)
- **TestSprite**: تم استخدامه لإجراء اختبارات شاملة على مستوى المتصفح.
- **تغطية السيناريوهات**:
    - **تفاعل الضيف**: التأكد من إمكانية إدارة المهام بدون حساب.
    - **دورة المزامنة**: اختبار تلقائي لرحلة "تسجيل الدخول -> المزامنة -> التحقق".
    - **تحقق RTL**: ضمان اصطفاف عناصر الواجهة بشكل مثالي في الوضع العربي.

## 💎 تدقيق اتساق التصميم
يتم إجراء "تدقيق Glassmorphism" دورياً لضمان أن تأثيرات الزجاج، التغبيش، واللمسات النيون تحافظ على مظهرها الفاخر عبر جميع دقات الشاشات وأوضاعها.

---

<div align="center">
  <img src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png" width="600" />
</div>

<div align="left" dir="ltr">
  <a href="../README.ar.md">🏠 العودة للرئيسية</a>
</div>

</div>
