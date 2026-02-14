<div align="center" dir="rtl">

# ⚡ 07 - هندسة الأداء العالي

![Performance](https://readme-typing-svg.demolab.com?font=Fira+Code&size=22&duration=3000&pause=1000&color=00E5FF&center=true&vCenter=true&width=500&lines=Optimistic+UI;Zero+Loading+States;Memoized+Filtering)

> **"السرعة ليست ميزة إضافية. إنها الأساس."**

<br/>

[![Prev Chapter](https://img.shields.io/badge/Prev_Chapter-Challenges-00E5FF?style=for-the-badge)](06-challenges-solutions.md)
[![Next Chapter](https://img.shields.io/badge/Next_%D8%A7%D9%84%D8%AA%D8%A7%D9%84%D9%8A-%D8%A7%D9%84%D8%A7%D8%AE%D8%AA%D8%A8%D8%A7%D8%B1-4a45ea?style=for-the-badge)](08-testing-quality.md)

</div>

<br/>
<div align="center">
<img width="600" src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png"/>
</div>
<br/>

<div dir="rtl">

## 1. استراتيجية "صفر تحميل" (The "Zero-Loading" Strategy)

في تطبيقات الصفحة الواحدة (SPA) التقليدية، كل إجراء يشغل دائرة تحميل (Spinner). في FlowShan، نستخدم **التحديثات المتفائلة (Optimistic Updates)**.

**السيناريو:** المستخدم يرشف مهمة.
*   **الطريقة القديمة:** أظهر تحميل داخل الزر -> انتظر الرد -> احذف المهمة.
*   **طريقة FlowShan:** احذف المهمة فوراً من مخزن الواجهة (Store). أرسل طلب API. أظهر خطأ فقط في حالة الفشل النادرة.

<br/>

## 2. العمليات الحسابية ومذكرة التخزين (Memoization)

تحتاج لوحة كانبان إلى تصفية 500+ مهمة وتوزيعها على 3 أعمدة (Todo, In Progress, Done) في كل مرة يتم فيها التصيير.
لمنع هبوط الإطارات (FPS Drop) أثناء السحب، نستخدم `useMemo`:

```typescript
// src/app/[locale]/(platform)/tasks/page.tsx
const groupedTasks = useMemo(() => {
  return query.result.reduce((acc, task) => {
    // منطق تجميع ثقيل
  }, {});
}, [query.result]); // إعادة التشغيل فقط إذا تغيرت البيانات، ليس عند التحويم
```

<br/>

## 3. انضباط حجم الحزمة (Bundle Size Discipline)

نحن نراقب تكلفة الاستيراد (Import Cost) بصرامة.
*   بدلاً من `moment.js` (ضخمة)، نستخدم `date-fns` (قابلة للإزالة الجزئية Tree-shakeable).
*   بدلاً من `lodash` (كبيرة)، كتبنا دوال مساعدة مخصصة للعمليات البسيطة.

<br/>
<div align="center">
<img width="600" src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png"/>
</div>
<br/>

## 🏆 دليل النقاط في Lighthouse

حققنا درجات مثالية من خلال تحسين LCP (عرض العناصر) و CLS (تغيرات التخطيط).

<div align="center">
  <img src="../../assets/screenshots/performance-lighthouse.png" width="45%" alt="Lighthouse Score"/>
  <img src="../../assets/screenshots/performance-lighthouse-mobile.png" width="45%" alt="Lighthouse Score Mobile"/>
</div>

<br/>
<div align="center">
<img width="600" src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png"/>
</div>
<br/>

## 🔗 التنقل

<div align="center">

[![Prev](https://img.shields.io/badge/Prev-06_%D8%A7%D9%84%D8%AA%D8%AD%D8%AF%D9%8A%D8%A7%D8%AA-00E5FF?style=for-the-badge&logo=readthedocs&logoColor=white)](06-challenges-solutions.md)
[![Next](https://img.shields.io/badge/Next-08_%D8%A7%D9%84%D8%A7%D8%AE%D8%AA%D8%A8%D8%A7%D8%B1-4a45ea?style=for-the-badge&logo=readthedocs&logoColor=white)](08-testing-quality.md)

</div>

</div>