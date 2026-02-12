<div align="center" dir="rtl">

# 🚀 09 - النشر وعمليات المطورين (DevOps)

![Deployment](https://readme-typing-svg.demolab.com?font=Fira+Code&size=22&duration=3000&pause=1000&color=00E5FF&center=true&vCenter=true&width=500&lines=Vercel+Pipeline;PostgreSQL+Neon;Serverless+Functions)

> **"انشر صغيراً، انشر كثيراً. من الـ Localhost إلى خوادم الحافة (Edge) العالمية في دقيقتين."**

<br/>

[![Prev Chapter](https://img.shields.io/badge/Prev_Chapter-Testing-00E5FF?style=for-the-badge)](08-testing-quality.md)
[![Next Chapter](https://img.shields.io/badge/Next_%D8%A7%D9%84%D8%AA%D8%A7%D9%84%D9%8A-%D8%A7%D9%84%D9%86%D8%AA%D8%A7%D8%A6%D8%AC-4a45ea?style=for-the-badge)](10-results-impact.md)

</div>

<br/>
<div align="center">
<img width="600" src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png"/>
</div>
<br/>

<div dir="rtl">

## 🌐 مكدس البنية التحتية (Infrastructure Stack)

| المكون | التقنية | لماذا؟ |
|:---|:---|:---|
| **الواجهة والـ API** | **Vercel** | نشر بدون إعدادات (Zero-config) لـ Next.js مع CDN عالمي. |
| **قاعدة البيانات** | **Neon (PostgreSQL)** | قاعدة بيانات Postgres بدون خادم (Serverless) تتوسع حسب الترافيك. |
| **تخزين الملفات** | **Cloudinary** | تحسين تلقائي لصور المستخدمين (Avatars). |
| **المصادقة** | **Google OAuth** | مزود هوية مُدار لضمان الأمان. |

<br/>

## 🛠️ خط أنابيب النشر المستمر (The CI/CD Pipeline)

استراتيجية النشر لدينا مؤتمتة بالكامل عبر Git hooks على Vercel.

1.  **دفع الكود (Push)** إلى الفرع الرئيسي `main`.
2.  **بدء بناء Vercel:**
    *   تثبيت التبعيات (`pnpm install`).
    *   توليد عميل Prisma Client.
    *   تشغيل فحص الأنواع (`tsc --noEmit`).
    *   بناء تطبيق Next.js (`next build`).
3.  **فحص الترحيل (Migration Check):** إذا تغير مخطط قاعدة البيانات، يتم تشغيل `prisma migrate deploy` تلقائياً.
4.  **النشر (Deployment):** يتم توزيع الكود على مواقع الحافة (Edge Locations) حول العالم.

<br/>

## 🩺 فحوصات الصحة والمراقبة (Health Checks)

نقوم بتضمين نقاط نهاية محددة للتحقق من صحة النظام في الإنتاج:
*   **حالة البريد:** `src/app/api/system/mailer-status/route.ts` - يتحقق من اتصال SMTP.
*   **فحص قاعدة البيانات:** الصفحة الجذرية `page.tsx` تقوم بجلب بيانات المستخدم مسبقاً، وتفشل بأمان (مع تنبيه) إذا تعذر الوصول لقاعدة البيانات.

<br/>
<div align="center">
<img width="600" src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png"/>
</div>
<br/>

## 🔗 التنقل

<div align="center">

[![Prev](https://img.shields.io/badge/Prev-08_%D8%A7%D9%84%D8%A7%D8%AE%D8%AA%D8%A8%D8%A7%D8%B1-00E5FF?style=for-the-badge&logo=readthedocs&logoColor=white)](08-testing-quality.md)
[![Next](https://img.shields.io/badge/Next-10_%D8%A7%D9%84%D9%86%D8%AA%D8%A7%D8%A6%D8%AC-4a45ea?style=for-the-badge&logo=readthedocs&logoColor=white)](10-results-impact.md)

</div>

</div>