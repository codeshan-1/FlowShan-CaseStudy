<div align="center" dir="rtl">

# 🏗️ 03 - هندسة الحل والمعمارية

![Architecture](https://readme-typing-svg.demolab.com?font=Fira+Code&size=22&duration=3000&pause=1000&color=00E5FF&center=true&vCenter=true&width=500&lines=Hybrid+Sync+Engine;Next.js+App+Router+%2B+Zustand)

> **"جسر بين سرعة الذاكرة المحلية وموثوقية التخزين السحابي."**

<br/>

[![Prev Chapter](https://img.shields.io/badge/Prev_Chapter-Problem_Statement-00E5FF?style=for-the-badge)](02-problem-statement.md)
[![Next Chapter](https://img.shields.io/badge/Next_%D8%A7%D9%84%D8%AA%D8%A7%D9%84%D9%8A-%D8%A7%D9%84%D9%85%D9%8A%D8%B2%D8%A7%D8%AA_%D8%A7%D9%84%D8%AC%D9%88%D9%87%D8%B1%D9%8A%D8%A9-4a45ea?style=for-the-badge)](04-key-features.md)

</div>

<br/>
<div align="center">
<img width="600" src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png"/>
</div>
<br/>

<div dir="rtl">

## 🏛️ العمارة رباعية الطبقات (The 4-Layer Architecture)

FlowShan ليس مجرد تطبيق Next.js؛ إنه **نظام حالة موزع**. قمنا بتصميمه في أربع طبقات متميزة:

### 1. طبقة العرض (The "Skin")
*   **التقنية:** React 19, Framer Motion, Tailwind CSS v4.
*   **الدور:** عرض واجهة المستخدم ومعالجة التفاعلات الدقيقة.
*   **القيد:** يجب ألا يتم حظر الخيط الرئيسي (Main Thread) لأكثر من 16ms (للحفاظ على 60fps).

### 2. طبقة الحالة (The "Brain")
*   **التقنية:** Zustand (7 مخازن محددة).
*   **الدور:** تعمل كمصدر وحيد للحقيقة (Single Source of Truth) لواجهة المستخدم.
*   **المنطق:** تطبيق التغييرات بشكل متفائل (Optimistically) قبل طلبات الشبكة.

### 3. طبقة المزامنة (The "Bridge")
*   **التقنية:** خدمة `SyncService` مخصصة، `use-tasks.ts`.
*   **الدور:** تخفيف واستقبال مدخلات المستخدم وتنظيم اتصالات API.
*   **الآلية:** تعالج الانتقال الحرج من `guest_id` إلى `user_id` عند التسجيل.

### 4. طبقة الثبات (The "Vault")
*   **التقنية:** PostgreSQL, Prisma ORM.
*   **الدور:** التخزين الدائم والتكامل العلائقي للبيانات.

<br/>
<div align="center">
<img width="600" src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png"/>
</div>
<br/>

## 🔄 دورة حياة مزامنة البيانات (Data Sync Lifecycle)

كيف تتدفق عملية "إنشاء مهمة" واحدة عبر النظام:

```mermaid
sequenceDiagram
    participant User
    participant UI as React UI
    participant Store as Zustand Store
    participant API as Next.js API
    participant DB as PostgreSQL

    User->>UI: Creates "Buy Milk"
    UI->>Store: Dispatch add_task (Optimistic)
    Store-->>UI: Update View (Latency: ~0ms)
    
    Note right of Store: Background Sync Starts
    
    Store->>API: POST /api/tasks
    API->>DB: Prisma.task.create()
    DB-->>API: Returns {id: 123}
    API-->>Store: Confirms Save (Replaces Temp ID)
    
    alt Network Failed?
        Store->>UI: Rollback & Show Toast
    end
```

<br/>
<div align="center">
<img width="600" src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png"/>
</div>
<br/>

## 🛠️ أدلة موثقة من الكود (Verified Code Evidence)

### مخازن الحالة (State Stores)
قمنا بفصل الحالة لمنع إعادة التصيير غير الضرورية:
*   `src/store/ui-store.ts`: حالات النوافذ المنبثقة، تبديل الشريط الجانبي.
*   `src/store/project-store.ts`: القوائم، البطاقات، ومنطق اللوحة.
*   `src/store/task-store.ts`: تفاصيل المهام والمهام الفرعية.

### سطح واجهة البرمجة (The API Surface)
*   `src/app/api/projects/route.ts`: عمليات CRUD للمشاريع.
*   `src/app/api/tasks/route.ts`: إدارة المهام.
*   `src/app/api/notes/route.ts`: ملاحظات النصوص الغنية.

<br/>
<div align="center">
<img width="600" src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png"/>
</div>
<br/>

## 🔗 التنقل

<div align="center">

[![Prev](https://img.shields.io/badge/Prev-02_%D8%AA%D8%AD%D8%AF%D9%8A%D8%AF_%D8%A7%D9%84%D9%85%D8%B4%D9%83%D9%84%D8%A9-00E5FF?style=for-the-badge&logo=readthedocs&logoColor=white)](02-problem-statement.md)
[![Next](https://img.shields.io/badge/Next-04_%D8%A7%D9%84%D9%85%D9%8A%D8%B2%D8%A7%D8%AA_%D8%A7%D9%84%D8%AC%D9%88%D9%87%D8%B1%D9%8A%D8%A9-4a45ea?style=for-the-badge&logo=readthedocs&logoColor=white)](04-key-features.md)

</div>

</div>