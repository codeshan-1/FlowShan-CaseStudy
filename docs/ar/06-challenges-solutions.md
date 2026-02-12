<div align="center" dir="rtl">

# 🌧️ 06 - التحديات وحلولها المبتكرة

![Challenges](https://readme-typing-svg.demolab.com?font=Fira+Code&size=22&duration=3000&pause=1000&color=00E5FF&center=true&vCenter=true&width=500&lines=The+Hard+Parts;Sync+Conflicts+%7C+Hydration+%7C+RTL)

> **"بناء تطبيق 'محلي أولاً' يعني حل مشاكل الأنظمة الموزعة داخل المتصفح."**

<br/>

[![Prev Chapter](https://img.shields.io/badge/Prev_Chapter-Tech_Decisions-00E5FF?style=for-the-badge)](05-technical-decisions.md)
[![Next Chapter](https://img.shields.io/badge/Next_%D8%A7%D9%84%D8%AA%D8%A7%D9%84%D9%8A-%D8%A7%D9%84%D8%A3%D8%AF%D8%A7%D8%A1-4a45ea?style=for-the-badge)](07-performance.md)

</div>

<br/>
<div align="center">
<img width="600" src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png"/>
</div>
<br/>

<div dir="rtl">

## 1. مشكلة ترحيل الهويات (The ID Migration Problem)
**التحدي:** عندما يكون المستخدم ضيفاً، تكون معرفات المهام مثل `guest-123`. عند التسجيل، قاعدة البيانات تعين معرفات جديدة `550e8400-e29b`. كيف نحدث الواجهة دون إعادة تحميل الصفحة؟

**الحل: نمط خريطة المعرفات (The ID Map Pattern)**
أنشأنا خدمة `SyncService` تحتفظ بقاموس مؤقت:
```typescript
// Conceptual Logic
const idMap = {
  "guest-task-1": "db-uuid-888",
  "guest-task-2": "db-uuid-999"
};

// عندما يستلم الـ Frontend هذه الخريطة من API:
useTaskStore.setState(state => ({
  tasks: state.tasks.map(t => ({
    ...t,
    id: idMap[t.id] || t.id // Swaps ID in-place
  }))
}));
```
**النتيجة:** المستخدم لا يرى أي وميض. تتغير معرفات المهام في الذاكرة بينما ينظر إليها.

<br/>

## 2. قلب الواجهة العربية (Arabic RTL Flipping)
**التحدي:** مجرد إضافة `dir="rtl"` تسبب في كسر كل العناصر ذات التموضع المطلق (Popovers, Dropdowns) وحسابات السحب والإفلات.

**الحل: الخصائص المنطقية و Radix UI**
1.  استبدلنا كل CSS `left/right` بـ `start/end`.
2.  استخدمنا أساسيات `Radix UI` التي تحتوي على وعي مدمج باتجاه RTL لتموضع القوائم المنبثقة.
3.  **دليل الكود:** `src/components/ui/dialog.tsx` يستخدم `DialogPrimitive.Content` الذي يعالج قلب التخطيط تلقائياً.

<br/>

## 3. عدم تطابق التروية (Hydration Mismatches)
**التحدي:** السيرفر (في منطقة زمنية UTC) يصيّر "اليوم"، بينما العميل (في القاهرة) يرى أنه "أمس". هذا يسبب أخطاء React Hydration Errors.

**الحل: مكونات للعميل فقط (Client-Only Components)**
قمنا بتغليف الأجزاء الحساسة للتاريخ في مكون `<ClientOnly>` يؤخر عرضها حتى يتأكد من جاهزية المتصفح.
```tsx
// src/components/client-only.tsx
if (!hasMounted) return <Skeleton className="h-4 w-20" />;
return children;
```

<br/>
<div align="center">
<img width="600" src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/aqua.png"/>
</div>
<br/>

## 🔗 التنقل

<div align="center">

[![Prev](https://img.shields.io/badge/Prev-05_%D8%A7%D9%84%D9%82%D8%B1%D8%A7%D8%B1%D8%A7%D8%AA-00E5FF?style=for-the-badge&logo=readthedocs&logoColor=white)](05-technical-decisions.md)
[![Next](https://img.shields.io/badge/Next-07_%D8%A7%D9%84%D8%A3%D8%AF%D8%A7%D8%A1-4a45ea?style=for-the-badge&logo=readthedocs&logoColor=white)](07-performance.md)

</div>

</div>