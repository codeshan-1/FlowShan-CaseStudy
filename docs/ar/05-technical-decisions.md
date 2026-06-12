<div align="center" dir="rtl">

# 🧠 05 - القرارات التقنية والهندسية

![Decisions](https://readme-typing-svg.demolab.com?font=Fira+Code&size=22&duration=3000&pause=1000&color=00E5FF&center=true&vCenter=true&width=500&lines=Why+Zustand%3F;Why+Prisma%3F;Why+Local-First%3F)

> **"كل مكتبة تم اختيارها لحل مشكلة محددة، وليس لأنها شائعة."**

<br/>

[![Prev Chapter](https://img.shields.io/badge/Prev_Chapter-Key_Features-00E5FF?style=for-the-badge)](04-key-features.md)
[![Next Chapter](https://img.shields.io/badge/Next_%D8%A7%D9%84%D8%AA%D8%A7%D9%84%D9%8A-%D8%A7%D9%84%D8%AA%D8%AD%D8%AF%D9%8A%D8%A7%D8%AA-4a45ea?style=for-the-badge)](06-challenges-solutions.md)

</div>

<br/>
<div align="center">
<img width="600" src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png"/>
</div>
<br/>

<div dir="rtl">

## 1. إدارة الحالة: Zustand ضد Redux ضد Context
**القرار:** اخترنا **Zustand**.

| الخيار | الحكم | السبب؟ |
|:---|:---:|:---|
| **Context API** | ❌ | يسبب إعادة تصيير (Re-renders) ضخمة عند تحديث الكائنات المعقدة (مثل لوحة كانبان). |
| **Redux** | ❌ | يتطلب الكثير من الكود المكرر (Boilerplate: Actions, Reducers) لمشروع سريع التطور. |
| **Zustand** | ✅ | **تحديثات ذرية (Atomic updates).** يمكننا الاشتراك في مكون لتغيير `tasks[0].title`. إذا تغيرت `tasks[1]`، المكون الأول لا يُعاد تصييره. هذا ضروري لـ 60fps أثناء السحب والإفلات. |

<br/>

## 2. قاعدة البيانات (ORM): Prisma ضد Drizzle
**القرار:** اخترنا **Prisma**.

*   **السبب 1: تصميم المخطط أولاً (Schema-First Design).** تعريف ملف `schema.prisma` سمح لنا بتصور علاقة `User -> Projects -> Tasks` قبل كتابة أي سطر SQL.
*   **السبب 2: أمان النوع (Type Safety).** الأنواع المولدة تلقائياً من TypeScript تعني أننا إذا غيرنا اسم عمود، سيفشل بناء الواجهة فوراً، مما يمنع الأخطاء أثناء التشغيل.

<br/>

## 3. التصميم: Tailwind v4 ضد CSS Modules
**القرار:** اخترنا **Tailwind CSS v4 (Alpha/Beta)**.

كنا بحاجة لنظام تصميم يمكنه التعامل مع:
1.  **السمات الديناميكية:** متغيرات CSS للزجاجية (`backdrop-filter`) دون تعقيدات SASS.
2.  **دعم RTL:** الخصائص المنطقية لـ Tailwind (`ms-2`, `me-2`) تقلب الهوامش تلقائياً للتخطيطات العربية/الإنجليزية. وفر علينا هذا أسابيع من قلب CSS يدوياً.

<br/>

## 4. استراتيجية المصادقة: هجينة (ضيف + سحابي)
**القرار:** **Custom JWT + LocalStorage Fallback**.

معظم التطبيقات تجبرك على الدخول. قمنا ببناء نظام **"Guest ID"**:
1.  المستخدم يفتح التطبيق -> يتم توليد `guest_id` في LocalStorage.
2.  المستخدم ينشئ مهام -> تحفظ محلياً مرتبطة بـ `guest_id`.
3.  المستخدم يسجل (Google Auth) -> تصل للباك إند `guest_id` -> **يقوم بترحيل كل البيانات** للمستخدم الجديد `user_id` في معاملة واحدة (Transaction).

**المفاضلة:** تعقيد عالي في Auth API مقابل تجربة تسجيل دخول خالية من الاحتكاك.

<br/>

## 5. مجمع الكود ومترجمه: Webpack ضد Turbopack (Next.js 16)
**القرار:** اخترنا **Turbopack** للتطوير وبناء الإنتاج السريع.

*   **التحدي:** Turbopack المكتوب بلغة Rust سريع للغاية، ولكنه يواجه تاريخيًا مشكلات في حل مسارات الحزم المرتبطة رمزياً (symlinks) داخل مساحات عمل `pnpm` عند وجود مسافات أو إيموجي في مسار المشروع.
*   **الحل:** قمنا بتهيئة `node-linker=hoisted` في `.npmrc` لتسوية شجرة الاعتمادات، وهو ما تجاوز مشاكل الروابط الرمزية لـ Turbopack تماماً، وحقق بناءً وتحديثاً فورياً في التطوير مع إمكانية إنتاج build للإنتاج في أقل من **38 ثانية**!

<br/>
<div align="center">
<img width="600" src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png"/>
</div>
<br/>

## 🔗 التنقل

<div align="center">

[![Prev](https://img.shields.io/badge/Prev-04_%D8%A7%D9%84%D9%85%D9%8A%D8%B2%D8%A7%D8%AA-00E5FF?style=for-the-badge&logo=readthedocs&logoColor=white)](04-key-features.md)
[![Next](https://img.shields.io/badge/Next-06_%D8%A7%D9%84%D8%AA%D8%AD%D8%AF%D9%8A%D8%A7%D8%AA-4a45ea?style=for-the-badge&logo=readthedocs&logoColor=white)](06-challenges-solutions.md)

</div>

</div>