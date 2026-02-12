<div align="center" dir="rtl">

# ⚠️ 02 - تحديد المشكلة والتحديات

![The Challenge](https://readme-typing-svg.demolab.com?font=Fira+Code&size=22&duration=3000&pause=1000&color=00E5FF&center=true&vCenter=true&width=500&lines=The+Latency+Problem;Why+Traditional+Apps+Feel+Slow)

> **"زمن الاستجابة هو قاتل الانسيابية (Flow). الانتظار 500ms لحفظ مهمة يكسر تركيزك الذهني."**

<br/>

[![Prev Chapter](https://img.shields.io/badge/Prev_Chapter-Overview-00E5FF?style=for-the-badge)](01-overview.md)
[![Next Chapter](https://img.shields.io/badge/Next_Chapter-Solution_Architecture-4a45ea?style=for-the-badge)](03-solution-architecture.md)

</div>

<br/>
<div align="center">
<img width="600" src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png"/>
</div>
<br/>

<div dir="rtl">

## 🛑 المشاكل الجوهرية (The Core Problems)

عند بناء تطبيق إنتاجية جديد في 2026، حددنا ثلاث نقاط احتكاك قاتلة في الحلول الموجودة:

### 1. فجوة زمن التفاعل (The Interaction Latency Gap)
معظم تطبيقات الويب الحديثة تعتمد نهج "الخادم أولاً" (Server-First). عند الضغط على مربع اختيار:
1.  يذهب الطلب للخادم (50ms).
2.  تقوم قاعدة البيانات بالمعالجة (20ms).
3.  يعود الرد (50ms).
4.  يتم تحديث الواجهة.

**النتيجة:** تأخر ملحوظ حوالي ~120ms. هذا يشعرك بالثقل مقارنة بالتطبيقات الأصلية (Desktop Apps).

### 2. جدار التسجيل (The "Sign-Up Wall" Friction)
المستخدمون يغادرون التطبيقات التي تطلب بريداً إلكترونياً قبل عرض القيمة.
**المطلب:** يجب أن يتمكن المستخدم من إنشاء مشاريع، مهام، وملاحظات **فوراً** دون حساب، وترحيل هذه البيانات بسلاسة عند التسجيل.

### 3. كابوس تعارض المزامنة (The "Sync Conflict" Nightmare)
إذا انقطع الإنترنت عن المستخدم في نفق قطار وقام بنقل 10 بطاقات، عودة الاتصال غالباً ما تؤدي إلى:
*   فقدان البيانات.
*   رسائل خطأ "تعارض النسخ".
*   حالة غير مستقرة (Broken State).

<br/>
<div align="center">
<img width="600" src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png"/>
</div>
<br/>

## 📉 مثلث القيود (Constraint Triangle)

كان علينا الموازنة بين ثلاثة قيود معمارية متضاربة:

| القيد | سبب الصعوبة |
|:---|:---|
| **السرعة المحلية (Local-First Speed)** | يتطلب تكرار منطق قاعدة البيانات في تخزين المتصفح (Frontend Storage). |
| **موثوقية السحابة (Cloud Reliability)** | يتطلب محرك مزامنة ثنائي الاتجاه (2-way sync)، وليس مجرد API بسيط. |
| **تجربة سينمائية (Cinematic UX)** | الرسوم المتحركة الثقيلة (Framer Motion) قد تسبب بطء في خيط المعالجة الرئيسي (Main Thread) إذا لم تحسن. |

<br/>
<div align="center">
<img width="600" src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png"/>
</div>
<br/>

## 🔍 أدلة موثقة من الكود (Verified Code Evidence)

أين تم معالجة هذه المشاكل في الكود المصدري:

-   **منطق مصادقة الضيف (Guest-First Auth Logic):**
    *   الملف: `src/store/auth.ts`
    *   الوظيفة: `loginGuest()` تهيئ جلسة محلية فقط تستمر في `localStorage`.

-   **الطفرات المتفائلة (Optimistic Mutations):**
    *   الملف: `src/hooks/use-tasks.ts`
    *   النمط: تحديث مخزن Zustand **فوراً** قبل إرسال طلب الخادم. التراجع في حالة الفشل.

-   **خدمة المزامنة (Sync Service):**
    *   الملف: `src/lib/sync-service.ts`
    *   المنطق: يعالج ترحيل `guest_data` -> `user_data` عند التسجيل.

<br/>
<div align="center">
<img width="600" src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png"/>
</div>
<br/>

## 🔗 التنقل

<div align="center">

[![Prev](https://img.shields.io/badge/Prev-01_Overview-00E5FF?style=for-the-badge&logo=readthedocs&logoColor=white)](01-overview.md)
[![Next](https://img.shields.io/badge/Next-03_Architecture-4a45ea?style=for-the-badge&logo=readthedocs&logoColor=white)](03-solution-architecture.md)

</div>

</div>