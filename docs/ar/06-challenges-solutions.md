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
## 4. تروية السمة ومنع الوميض (Theme Hydration - The Anti-Flash)
**التحدي:** يرسل السيرفر ملف HTML وتظهر خلفية بيضاء لثوانٍ معدودة، ثم يعمل ملف الجافا سكريبت ويقرأ الـ `localStorage` ويحوّل الخلفية لسوداء (مما يسبب وميضاً أبيض مزعجاً للعين).
**الحل: حقن كود حظر Paint**
قمنا بحقن سكربت صغير جداً في وسم الـ `<head>` يعمل قبل قيام المتصفح برسم الواجهة (Paint)، ليقرأ إعداد المظهر من الـ storage مباشرة ويضيف كلاس `dark` للـ `<html>` تزامناً.
```tsx
<script
  dangerouslySetInnerHTML={{
    __html: `
      try {
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
          document.documentElement.classList.add('dark')
        }
      } catch (_) {}
    `,
  }}
/>
```

<br/>

## 5. تعارض السحب والإفلات مع سكرول الموبايل (Touch DnD & Scrolling Conflicts)
**التحدي:** على شاشات اللمس، كان سحب كروت المهام في لوحة الـ Kanban أو إعادة ترتيب العناصر يعترض إيماءات التمرير العمودي للمتصفح، مما جعل عملية التنقل والسكرول مستحيلة على الموبايل لعدم تفريق المتصفح بين السكرول والسحب.
**الحل: قيود التفعيل لـ Touch Sensor**
قمنا بتطبيق مستشعر اللمس `TouchSensor` من حزمة `@dnd-kit/core` مع قيود تفعيل دقيقة تفرّق بدقة بين السكرول والسحب:
- **المهلة (Delay):** مهلة ضغط مستمر قدرها 250 ملي ثانية لتفعيل السحب.
- **التسامح (Tolerance):** نسبة حركة لا تتعدى 5 بكسل قبل انتهاء المهلة.
```typescript
const sensors = useSensors(
  useSensor(PointerSensor),
  useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates }),
  useSensor(TouchSensor, {
    activationConstraint: { delay: 250, tolerance: 5 }
  })
);
```
**النتيجة:** لا يتفعل السحب إلا عندما يضغط المستخدم عمداً على الكارت لمدة 250 ملي ثانية ثابتة، بينما الضربات السريعة العادية تسمح بالسكرول بمنتهى السلاسة.

<br/>

## 6. قيود التشغيل التلقائي للصوت (iOS Autoplay Block)
**التحدي:** تمنع المتصفحات الحديثة (خاصة Safari على iOS) الـ Web Audio API من تشغيل أي نغمات صوتية بدون تفاعل مباشر من المستخدم، مما تسبب في صمت نغمة الإنجاز وظهور تحذيرات في الكونسول.
**الحل: مستمع تفاعلي عام لمرة واحدة**
قمنا ببناء روتين تهيئة يقوم باستئناف عمل الـ `AudioContext` تلقائياً فور أول تفاعل نقر أو لمس للمستند من قبل المستخدم:
```typescript
export const initAudioOnInteraction = () => {
  if (typeof window === "undefined") return;
  const resumeAudio = () => {
    if (!audioContext) {
      audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
    if (audioContext && audioContext.state === "suspended") {
      audioContext.resume();
    }
    document.removeEventListener("touchstart", resumeAudio);
    document.removeEventListener("click", resumeAudio);
  };
  document.addEventListener("touchstart", resumeAudio, { passive: true });
  document.addEventListener("click", resumeAudio, { passive: true });
};
```
**النتيجة:** يتم فتح قفل الصوت للمتصفح بشكل شفاف تماماً مع أول نقرة، مما يسمح بتشغيل نغمة الإنجاز C6-E6 فوراً ودون تأخير بمجرد إكمال أي مهمة.

<br/>

## 7. تضارب شبكة CSS Grid والـ AnimatePresence
**التحدي:** عند تخصيص وتفعيل الوحدات ديناميكياً، تسبب إخفاء أو إظهار الكروت داخل شبكة CSS واحدة (`grid-cols-2`) مغلفة بـ `AnimatePresence mode="popLayout"` في مشاكل بمواقع الخلايا التلقائية. المكونات المغادرة تظل في ال DOM لتشغيل حركتها، مما يتسبب في حجز مكان وهمي وانتقال الكروت النشطة لأعمدة غير صحيحة مسبباً فراغات عملاقة.
**الحل: أعمدة مستقلة مكدسة**
قمنا بإعادة هيكلة الشبكة إلى عمودين مستقلين تماماً، كل عمود يضم عناصر مكدسة رأسياً ومغلفة بـ `AnimatePresence` الخاصة به:
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  {/* العمود الأول */}
  <div className="space-y-6 flex flex-col">
    <AnimatePresence mode="popLayout">
      {modules.tasks && <TasksWidget />}
      {modules.calendar && <CalendarWidget />}
    </AnimatePresence>
  </div>
  {/* العمود الثاني */}
  <div className="space-y-6 flex flex-col">
    <AnimatePresence mode="popLayout">
      {modules.projects && <ProjectsWidget />}
      {modules.notes && <NotesWidget />}
    </AnimatePresence>
  </div>
</div>
```
**النتيجة:** عند تبديل أي موديول، تتأثر فقط عناصر عموده المحلي مما يسمح للمكونات بالانزلاق لأعلى بسلاسة دون التسبب في أي فراغات أو خلايا مشوهة.

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