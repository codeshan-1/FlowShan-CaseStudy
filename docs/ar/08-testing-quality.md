<div align="center" dir="rtl">

# 🧪 08 - الاختبار وضمان الجودة

![Quality](https://readme-typing-svg.demolab.com?font=Fira+Code&size=22&duration=3000&pause=1000&color=00E5FF&center=true&vCenter=true&width=500&lines=Static+Analysis;Visual+Consistency;Type+Safety)

> **"الكود غير المختبر هو مجرد اقتراح."**

<br/>

[![Prev Chapter](https://img.shields.io/badge/Prev_Chapter-Performance-00E5FF?style=for-the-badge)](07-performance.md)
[![Next Chapter](https://img.shields.io/badge/Next_%D8%A7%D9%84%D8%AA%D8%A7%D9%84%D9%8A-%D8%A7%D9%84%D9%86%D8%B4%D8%B1-4a45ea?style=for-the-badge)](09-deployment.md)

</div>

<br/>
<div align="center">
<img width="600" src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png"/>
</div>
<br/>

<div dir="rtl">

## 1. الأمان بالتصميم (Static Analysis)
نعتمد بشكل كبير على **TypeScript** في الوضع الصارم (Strict Mode).
*   **ممنوع استخدام `any`:** غير مسموح به.
*   **التحقق عبر Zod:** كل جسم طلب API يتم التحقق منه بواسطة Zod قبل أن يلمس قاعدة البيانات. إذا كان الشكل خاطئاً، يُرفض فوراً.

```typescript
// src/app/api/tasks/route.ts
const createTaskSchema = z.object({
  title: z.string().min(1),
  projectId: z.string().uuid(),
  priority: z.enum(["LOW", "MEDIUM", "HIGH"])
});
```

<br/>

## 2. منع التراجع البصري (Visual Regression Prevention)
بما أن FlowShan يعتمد على جماليات دقيقة (تراكبات الزجاج)، نقوم بإجراء **فحوصات اتساق بصري يدوية**:
*   **حالات الفراغ (Empty States):** هل تصطف الأيقونات بشكل صحيح عندما تكون القائمة فارغة؟
*   **تخطيطات RTL:** هل ينقلب شريط التبديل الجانبي بشكل صحيح في العربية؟

<br/>

## 3. التحقق من "تدفق الضيف" (The "Guest Flow" Verification)
أهم حالة اختبار لدينا هي **قمع التسجيل (Onboarding Funnel)**:
1.  فتح نافذة تصفح خفي (Incognito).
2.  إنشاء 3 مهام.
3.  تسجيل الدخول باستخدام Google.
4.  **التحقق:** هل ظهرت المهام الثلاث في الحساب الجديد؟

إيتم اختبار هذا يدوياً قبل كل عملية نشر رئيسية.

<br/>

## 4. ♿ معايير الوصول (Accessibility - A11y)
فلو شان ليس مجرد مظهر مبهر؛ بل هو نظام يتسم بالشمولية.
- **HTML الدلالي:** نلتزم بتسلسل هرمي صحيح للعناوين (`h1` ← `h2` ← `h3`) لضمان قدرة قارئات الشاشة على تصفح المحتوى المنظم.
- **الأسماء الوصفية:** يتضمن كل عنصر تفاعلي (مثل زر تبديل القائمة للجوال) سمة `aria-label` لتوفير سياق للمستخدمين الذين يعتمدون على الوسائل السمعية.
- **التنقل عبر لوحة المفاتيح:** تم دمج حالات تركيز (Focus States) عالية التباين وتسلسلات انتقال منطقية عبر لوحة القيادة.

<br/>
<div align="center">
<img width="600" src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png"/>
</div>
<br/>

## 🔗 التنقل

<div align="center">

[![Prev](https://img.shields.io/badge/Prev-07_%D8%A7%D9%84%D8%A3%D8%AF%D8%A7%D8%A1-00E5FF?style=for-the-badge&logo=readthedocs&logoColor=white)](07-performance.md)
[![Next](https://img.shields.io/badge/Next-09_%D8%A7%D9%84%D9%86%D8%B4%D8%B1-4a45ea?style=for-the-badge&logo=readthedocs&logoColor=white)](09-deployment.md)

</div>

</div>