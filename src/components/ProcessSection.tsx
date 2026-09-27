import { useEffect, useState, useCallback } from "react";
import Reveal from "@/components/Reveal";
import { useT } from "@/providers/lang";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

type Stage = {
  img: string;
  num: string;
  titleAr: string;
  titleEn: string;
  descAr: string;
  descEn: string;
};

const STAGES: Stage[] = [
  {
    img: "/media/process-concept-geometry.webp",
    num: "01",
    titleAr: "دراسات الشكل الأولية",
    titleEn: "Form-finding studies",
    descAr: "استكشاف هندسي للسطح المقوّى بأربع زوايا عرض — إيجاد الشكل الذي ينتقل بالضغط من الحواف إلى الأرض دون أي أعمدة داخلية.",
    descEn: "Geometric exploration of the four-cornered shell surface — finding the form that transfers compression from the edges to the ground with no internal columns.",
  },
  {
    img: "/media/process-elevation-drawing.webp",
    num: "02",
    titleAr: "الارتفاع الهندسي 1:50",
    titleEn: "Technical elevation — 1:50",
    descAr: "المخطط الانضغاطي للقبة: ارتفاع 3.2 م وعرض 6.4 م. الأضلاع السفلية تنحني لتصبح أرجلاً، والشكل كله يعمل كقوس واحد.",
    descEn: "The compression diagram of the dome: 3.2 m high, 6.4 m wide. The lower edges bend down to become legs — the whole form works as a single arch.",
  },
  {
    img: "/media/process-stage1-columns.webp",
    num: "03",
    titleAr: "المرحلة 1: الأرجل الأربع",
    titleEn: "Stage 1: the four legs",
    descAr: "أربعة عناصر خرسانية مسبقة الصب تميل للداخل — كل رجل تحمل حافة من حواف القبة وتنقل حملها إلى القاعدة.",
    descEn: "Four precast concrete elements leaning inward — each leg carries one edge of the dome and transfers its load to the footing.",
  },
  {
    img: "/media/process-stage3-shell-a.webp",
    num: "04",
    titleAr: "المرحلة 3: أول طبقة قشرة",
    titleEn: "Stage 3: first shell layer",
    descAr: "تنمو القشرة من أسفل إلى أعلى على شكل شرائح — كل لوح يرتكز على ما تحته، والقالب هو القبة نفسها بلا شدة خشبية.",
    descEn: "The shell grows bottom-up in strips — each panel rests on the one below, and the dome is its own formwork: no wooden shuttering.",
  },
  {
    img: "/media/process-stage3-shell-b.webp",
    num: "05",
    titleAr: "تتابع النمو — منظور ثانٍ",
    titleEn: "Growth sequence — second view",
    descAr: "منظور آخر لتتابع الطبقات الأولى — تُركّب الشرائح حلقة فوق حلقة حتى يكتمل الجسم قبل إغلاق فتحة التاج.",
    descEn: "Another angle of the early layers — the strips are assembled ring over ring until the body is complete before the crown opening is closed.",
  },
  {
    img: "/media/process-crown-gap-model.webp",
    num: "06",
    titleAr: "النموذج الحقيقي: فجوة التاج",
    titleEn: "Physical model: the crown gap",
    descAr: "نموذج مادي للقبة عند اكتمال الجسم مع بقاء فتحة التاج مفتوحة — منفذ الضوء والتهوية الطبيعية في قلب الشكل.",
    descEn: "A physical model of the dome with the crown opening still open — the source of daylight and natural ventilation at the heart of the form.",
  },
  {
    img: "/media/process-panel-schedule.webp",
    num: "07",
    titleAr: "جدول الألواح",
    titleEn: "Panel schedule",
    descAr: "كل لوح له اسم: حرف المنطقة + رقمه. هذا الجدول هو لغة الموقع — يقرأه البنّاء كما يقرأ النجّار مخططه.",
    descEn: "Every panel has a name: zone letter + index number. This schedule is the site language — the builder reads it like a carpenter reads his plan.",
  },
  {
    img: "/media/process-structural-details.webp",
    num: "08",
    titleAr: "تفاصيل الربط الإنشائي",
    titleEn: "Structural connection details",
    descAr: "ثلاث وصلات تحمل كل شيء: سطح القشرة المستمر، وصلة الأضلاع بالقشرة، ونقطة تثبيت الرجل في القاعدة.",
    descEn: "Three joints carry everything: the continuous shell surface, the rib-to-shell connection, and the leg anchor at the footing.",
  },
];

export default function ProcessSection() {
  const t = useT();
  const isAr = t("a", "") === "a";
  const [open, setOpen] = useState<number | null>(null);

  const close = useCallback(() => setOpen(null), []);
  const step = useCallback(
    (d: number) => setOpen((i) => (i === null ? null : (i + d + STAGES.length) % STAGES.length)),
    []
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(isAr ? -1 : 1);
      if (e.key === "ArrowLeft") step(isAr ? 1 : -1);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close, step, isAr]);

  return (
    <section className="mx-auto max-w-6xl px-5 py-20">
      <Reveal>
        <p className="eyebrow mb-3">{t("من الفكرة إلى الهيكل", "From concept to structure")}</p>
        <h2 className="font-display mb-4 text-3xl font-bold sm:text-4xl">
          {t("كيف تولد القبة؟ خطوة بخطوة", "How is a dome born? Step by step")}
        </h2>
        <p className="mb-12 max-w-2xl text-muted-foreground">
          {t(
            "ثماني لقطات من رحلة التصميم: من خطوط الشكل الأولى إلى النموذج الحقيقي. اضغط على أي مرحلة لتكبيرها وقراءة قصتها.",
            "Eight moments from the design journey: from the first wireframe lines to the physical model. Tap any stage to enlarge it and read its story."
          )}
        </p>
      </Reveal>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {STAGES.map((s, i) => (
          <Reveal key={s.img} delay={i * 70}>
            <button
              onClick={() => setOpen(i)}
              className="card-lift group block w-full overflow-hidden rounded-xl border border-border bg-card text-start"
              aria-label={t(s.titleAr, s.titleEn)}
            >
              <div className="relative h-36 overflow-hidden sm:h-44">
                <img
                  src={s.img}
                  alt={t(s.titleAr, s.titleEn)}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute start-3 top-3 rounded-full bg-black/55 px-2.5 py-1 text-xs font-bold text-white">
                  {s.num}
                </span>
              </div>
              <div className="p-4">
                <h3 className="font-display text-base font-bold leading-6">{t(s.titleAr, s.titleEn)}</h3>
                <p className="mt-1 text-xs text-muted-foreground">
                  {t("اضغط للتكبير", "Tap to enlarge")}
                </p>
              </div>
            </button>
          </Reveal>
        ))}
      </div>

      {/* Lightbox */}
      {open !== null && (
        <div
          className="fixed inset-0 z-[90] flex items-center justify-center bg-black/80 p-4"
          onClick={close}
          role="dialog"
          aria-modal="true"
        >
          <button
            onClick={close}
            aria-label={t("إغلاق", "Close")}
            className="absolute end-4 top-4 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/25"
          >
            <X className="h-6 w-6" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); step(-1); }}
            aria-label={t("السابق", "Previous")}
            className="absolute start-3 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/25"
          >
            {isAr ? <ChevronRight className="h-6 w-6" /> : <ChevronLeft className="h-6 w-6" />}
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); step(1); }}
            aria-label={t("التالي", "Next")}
            className="absolute end-3 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/25"
          >
            {isAr ? <ChevronLeft className="h-6 w-6" /> : <ChevronRight className="h-6 w-6" />}
          </button>

          <div
            className="w-full max-w-3xl overflow-hidden rounded-xl bg-card"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={STAGES[open].img}
              alt={t(STAGES[open].titleAr, STAGES[open].titleEn)}
              className="max-h-[62vh] w-full bg-white object-contain"
            />
            <div className="p-6">
              <p className="eyebrow mb-2">
                {STAGES[open].num} / 08
              </p>
              <h3 className="font-display mb-3 text-2xl font-bold">
                {t(STAGES[open].titleAr, STAGES[open].titleEn)}
              </h3>
              <p className="leading-8 text-muted-foreground">
                {t(STAGES[open].descAr, STAGES[open].descEn)}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
