import { useState } from "react";
import Reveal from "@/components/Reveal";
import Seo from "@/components/Seo";
import { GatedPdfDialog } from "@/components/LeadForm";
import { PAVILION_GALLERY, TYPOLOGIES, VIDEOS, type Typology } from "@/data";
import { useT } from "@/providers/lang";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Download, ExternalLink, Play } from "lucide-react";

export default function Designs() {
  const [photo, setPhoto] = useState<number | null>(null);
  const [typo, setTypo] = useState<Typology | null>(null);
  const [video, setVideo] = useState<number | null>(null);
  const t = useT();
  const isAr = t("a", "") === "a";

  const METHODOLOGY = [
    t("إيجاد الشكل بالحساب العكسي: نعلّق السلسلة رقمياً (Kangaroo / Grasshopper) — الشكل الذي تأخذه السلسلة المعلّقة هو الشكل الذي يقف بالانضغاط المحض حين نقلبه.",
      "Form-finding in reverse: we hang the chain digitally (Kangaroo / Grasshopper) — the shape a hanging chain takes is the shape that stands in pure compression when flipped."),
    t("التحقق الإنشائي: تحليل أحمال الرياح والزلازل حسب كود البلدية.",
      "Structural verification: wind and seismic load analysis per the municipal code."),
    t("اختيار نظام البناء: حسب الميزانية والمواد المحلية (انظر صفحة المواد).",
      "Construction-system selection: based on budget and local materials (see the Materials page)."),
    t("محاكاة حرارية: حساب الحمل الحراري وفق مناخ المدينة ومتطلبات كود كفاءة الطاقة العُماني (OEESC).",
      "Thermal simulation: cooling-load calculation per the city's climate and Oman's energy-efficiency code (OEESC)."),
    t("نموذج مصغّر قبل البناء: لا نبني بالحجم الكامل ما لم نختبره بالحجم الصغير.",
      "Scale model before construction: we never build full-size what we haven't tested small."),
  ];
  const MNUM = isAr ? ["١","٢","٣","٤","٥"] : ["1","2","3","4","5"];

  return (
    <div className="mx-auto max-w-6xl px-5">
      <Seo titleAr="التصاميم والفيديوهات" titleEn="Designs & Videos" descAr="أربعة نماذج سكنية من بيت القبة وفيديوهات مراحل العمل: من القالب الواحد إلى القشرة المسبقة الصب المرقّمة — من جناح الطوب إلى عُمان." descEn="Four housing typologies by Vault House plus build-process videos: from one reusable mold to numbered precast shells — from the Brick Pavilion to Oman." />
      <header className="max-w-3xl pb-4 pt-16">
        <p className="eyebrow mb-4">{t("التصاميم · Dome Homes", "Designs · Dome Homes")}</p>
        <h1 className="font-display text-4xl font-bold sm:text-5xl">
          {t("ثلاث درجات من العمق", "Three levels of depth")}
        </h1>
        <p className="mt-5 text-lg leading-9 text-muted-foreground">
          {t(
            "مبنى قائم يمكنك زيارته بالصور، وأربعة نماذج سكنية مدروسة، وبحث هندسي لمن يريد التفاصيل. اختر عمقك.",
            "A standing building you can visit in photos, four studied housing typologies, and engineering research for those who want the details. Choose your depth."
          )}
        </p>
      </header>

      {/* Level 1: Brick Pavilion */}
      <section className="py-14">
        <Reveal>
          <p className="eyebrow mb-3">{t("المستوى 1", "Level 1")}</p>
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            {t("جناح الطوب: القبة التي بُنيت فعلاً", "The Brick Pavilion: the dome that was actually built")}
          </h2>
          <p className="mt-4 flex flex-wrap gap-x-6 gap-y-1 text-sm font-semibold text-primary">
            <span>{t("المكان: جبال اللاذقية، سوريا", "Location: Latakya mountains, Syria")}</span>
            <span>{t("المدة: 2018–2020", "Duration: 2018–2020")}</span>
            <span>{t("المساحة: 30 م²", "Area: 30 m²")}</span>
          </p>
          <p className="mt-4 max-w-3xl leading-8 text-foreground/85">
            {t(
              "قبة طوب واحدة، قطرها 6 أمتار، بلا أي تسليح حديد داخل جسمها — بُنيت باليد من طوب الطين المحلي، بحساب هندسي رقمي، وبفريق صغير. ",
              "A single brick dome, 6 metres in diameter, with no steel reinforcement in its body — built by hand from local clay brick, computed digitally, with a small crew. "
            )}
            <strong>{t("لماذا نبدأ بها؟", "Why start here?")}</strong>{" "}
            {t(
              "لأن كل رقم في هذا الموقع خرج من تجربة حقيقية، لا من كتالوج.",
              "Because every number on this site comes from a real build, not a catalogue."
            )}
          </p>
        </Reveal>
        <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">
          {PAVILION_GALLERY.map((g, i) => (
            <Reveal key={g.src + i} delay={i * 60} className={i === 0 ? "col-span-2 row-span-2" : ""}>
              <button
                onClick={() => setPhoto(i)}
                className="group relative block h-full w-full overflow-hidden rounded-lg"
              >
                <img
                  src={g.src}
                  alt={t(g.cap, g.capEn)}
                  className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${
                    i === 0 ? "h-full min-h-80" : "h-40 md:h-44"
                  }`}
                />
                <span className={`absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3 text-xs leading-6 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${isAr ? "text-right" : "text-left"}`}>
                  {t(g.cap, g.capEn)}
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Level 2: typologies */}
      <section className="border-t border-border py-14">
        <Reveal>
          <p className="eyebrow mb-3">{t("المستوى 2 — اضغط على أي بطاقة", "Level 2 — tap any card")}</p>
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            {t("أربعة نماذج سكنية", "Four housing typologies")}
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">
            {t("من دراسة التشكيل — كل بطاقة تفتح نافذة بالصورة والوصف.", "From the configurational study — each card opens a window with image and description.")}
          </p>
        </Reveal>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {TYPOLOGIES.map((ty, i) => (
            <Reveal key={ty.en} delay={i * 90}>
              <button
                onClick={() => setTypo(ty)}
                className={`card-lift w-full overflow-hidden rounded-xl border border-border bg-card ${isAr ? "text-right" : "text-left"}`}
              >
                <img src={ty.image} alt={`${t(ty.name, ty.nameEn)} — ${ty.en}`} className="h-48 w-full object-cover" />
                <div className="p-5">
                  <h3 className="font-display text-xl font-bold">{t(ty.name, ty.nameEn)}</h3>
                  <p className="font-latin mt-1 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    {ty.en}
                  </p>
                  <p className="mt-3 line-clamp-3 text-sm leading-7 text-muted-foreground">{t(ty.desc, ty.descEn)}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-[#25D366]/40 bg-[#25D366]/10 px-3 py-1.5 text-xs font-semibold text-[#128C4B]">
                    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current" aria-hidden><path d="M17.5 14.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.5 0 1.47 1.07 2.9 1.22 3.1.15.2 2.11 3.22 5.1 4.51.71.31 1.27.49 1.7.63.72.23 1.37.2 1.88.12.57-.09 1.76-.72 2-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35M12.05 21.79h-.01a9.82 9.82 0 0 1-5-1.37l-.36-.21-3.72.97.99-3.62-.23-.37a9.8 9.8 0 0 1-1.5-5.24c0-5.42 4.42-9.83 9.85-9.83a9.79 9.79 0 0 1 9.83 9.84c0 5.42-4.41 9.83-9.83 9.83M20.46 3.55A11.8 11.8 0 0 0 12.05 0C5.5 0 .16 5.33.16 11.89c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.9 11.9 0 0 0 5.68 1.45h.01c6.55 0 11.89-5.33 11.89-11.9 0-3.18-1.24-6.16-3.48-8.35"/></svg>
                    {t("استفسر عبر واتساب", "Inquire on WhatsApp")}
                  </span>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <p className="mt-6 rounded-lg bg-secondary p-4 text-sm leading-7 text-foreground/80">
            <strong>{t("ملاحظة شفافية:", "A note of transparency:")}</strong>{" "}
            {t(
              "هذه النماذج دراسات تصميمية جاهزة للتكييف على أرضك ومناخ مدينتك — ليست منتجاً جاهزاً على الرف. كل مشروع يبدأ بدراسة الموقع.",
              "These typologies are design studies ready to be adapted to your plot and your city's climate — not a shelf product. Every project begins with a site study."
            )}
          </p>
        </Reveal>
      </section>

      {/* Videos */}
      <section className="border-t border-border py-14">
        <Reveal>
          <p className="eyebrow mb-3">{t("شاهد العملية", "Watch the process")}</p>
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            {t("فيديوهات من الورشة", "Videos from the workshop")}
          </h2>
        </Reveal>
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {VIDEOS.map((v, i) => (
            <Reveal key={v.id} delay={i * 80}>
              <button
                onClick={() => setVideo(i)}
                className="card-lift group relative block w-full overflow-hidden rounded-xl"
              >
                <img src={v.poster} alt={t(v.title, v.titleEn)} className="h-56 w-full object-cover" />
                <span className="absolute inset-0 flex items-center justify-center bg-black/30 transition-colors group-hover:bg-black/45">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Play className={`h-6 w-6 ${isAr ? "-translate-x-0.5" : "translate-x-0.5"}`} />
                  </span>
                </span>
                <span className={`absolute inset-x-0 bottom-0 bg-black/60 p-3 text-sm font-semibold text-white ${isAr ? "text-right" : "text-left"}`}>
                  {t(v.title, v.titleEn)}
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Level 3: methodology */}
      <section className="border-t border-border py-14">
        <Reveal>
          <p className="eyebrow mb-3">{t("المستوى 3 — للمهندسين والمسؤولين", "Level 3 — for engineers and officials")}</p>
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            {t("المنهجية الهندسية", "The engineering methodology")}
          </h2>
        </Reveal>
        <Reveal className="mt-6">
          <Accordion type="single" collapsible className="rounded-xl border border-border bg-card px-6">
            <AccordionItem value="m">
              <AccordionTrigger className="font-display text-lg font-bold">
                {t(
                  "منهجية التصميم المعماري للقباب القطعية — وثيقة ثنائية اللغة لمشاريع الخليج السكنية",
                  "Architectural Design Methodology for Segmented Domes — a bilingual document for Gulf housing projects"
                )}
              </AccordionTrigger>
              <AccordionContent>
                <p className="mb-4 text-sm font-semibold text-muted-foreground">
                  {t("خلاصة منهجيتنا في 5 خطوات:", "Our methodology in 5 steps:")}
                </p>
                <ol className="space-y-4">
                  {METHODOLOGY.map((m, i) => (
                    <li key={i} className="flex gap-4 leading-8">
                      <span className="font-display shrink-0 text-2xl font-bold text-primary/60">{MNUM[i]}</span>
                      <span>{m}</span>
                    </li>
                  ))}
                </ol>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </Reveal>
        <Reveal className="mt-6 flex flex-wrap gap-4">
          <GatedPdfDialog
            pdf="/media/dome-configurational-study.pdf"
            titleAr="دراسة تشكيل القباب — ثنائية اللغة"
            titleEn="Dome Configurational Study — bilingual"
            blurbAr="الدراسة الكاملة: تكلفة المواد، اختيار المادة، اليد العاملة، العزل والكفاءة الحرارية. اترك اسمك وبريدك ويظهر رابط التحميل فوراً."
            blurbEn="The full study: material costs, material choice, labor, insulation & thermal efficiency. Leave your name and email and the download link appears instantly."
            trigger={<span className="pill-btn inline-flex items-center gap-2"><Download className="h-4 w-4" /> {t("تحميل «دراسة تشكيل القباب» PDF — ثنائية اللغة", "Download the Dome Configurational Study PDF — bilingual")}</span>}
          />
          <GatedPdfDialog
            pdf="/media/construction-data-sheet.pdf"
            titleAr="ورقة بيانات البناء — تكاليف وفرق عمل"
            titleEn="Construction Data Sheet — costs & crews"
            blurbAr="أرقام استرشادية للتكلفة وفرق العمل ومراحل التنفيذ. اترك اسمك وبريدك ويظهر رابط التحميل فوراً."
            blurbEn="Indicative cost figures, work crews and execution stages. Leave your name and email and the download link appears instantly."
            trigger={<span className="pill-btn-ghost inline-flex items-center gap-2"><Download className="h-4 w-4" /> {t("تحميل «ورقة بيانات البناء» — تكاليف وفرق عمل", "Download the Construction Data Sheet — costs & crews")}</span>}
          />
        </Reveal>

        {/* professional references */}
        <Reveal className="mt-10 grid gap-4 md:grid-cols-2">
          <a
            href="https://www.mdpi.com/2079-3197/4/3/31"
            target="_blank"
            rel="noreferrer"
            className="group rounded-xl border border-border bg-card p-5 transition hover:border-primary/50 hover:shadow-md"
          >
            <p className="eyebrow mb-2">{t("للمتخصصين — سلوك حراري", "For professionals — thermal behaviour")}</p>
            <h3 className="font-display text-lg font-bold leading-7 group-hover:text-primary">
              {t(
                "السلوك الحراري داخل بيت القبة البيئي — تحليل CFD للتهوية الطبيعية وتبديد الحرارة",
                "Thermal behaviour inside an eco-dome house — CFD analysis of natural ventilation & heat dissipation"
              )}
            </h3>
            <p className="mt-2 text-sm leading-7 text-muted-foreground">
              {t(
                "دراسة محكّمة (MDPI — Computation): مخططات تقنية لخطوط انسياب الهواء، التهوية بدفع الرياح والطفو، توزيع الحرارة صيفاً وشتاءً، وفتحات التهوية العلوية.",
                "Peer-reviewed study (MDPI — Computation): technical schemes of airflow streamlines, wind- and buoyancy-driven ventilation, summer/winter temperature distribution, and roof-vent strategies."
              )}
            </p>
            <p className="mt-3 flex items-center gap-2 text-xs font-semibold text-primary">
              {t("اقرأ الدراسة كاملة على موقع الناشر", "Read the full study at the publisher")} <ExternalLink className="h-3.5 w-3.5" />
            </p>
          </a>
          <a
            href="https://calearth.org/blogs/superadobe-at-calearth/eco-dome"
            target="_blank"
            rel="noreferrer"
            className="group rounded-xl border border-border bg-card p-5 transition hover:border-primary/50 hover:shadow-md"
          >
            <p className="eyebrow mb-2">{t("للمصممين — عمارة القباب البيئية", "For designers — eco dome architecture")}</p>
            <h3 className="font-display text-lg font-bold leading-7 group-hover:text-primary">
              {t(
                "عمارة الإيكو-دوم السكنية — صور داخلية وتجربة السكن الحقيقية",
                "Eco-Dome house architecture — interior photos & real living experience"
              )}
            </h3>
            <p className="mt-2 text-sm leading-7 text-muted-foreground">
              {t(
                "«إيكو-دوم» من معهد كال-إيرث (مؤسسة نادر خليلي): منزل قبة مبني ومسكون منذ 1998 — صور داخلية، مخططات، التهوية السلبية بماسورة الرياح، وتجربة العيش اليومية تحت قبة.",
                "Cal-Earth Institute's Eco-Dome (Nader Khalili's foundation): a dome home built and lived in since 1998 — interior photos, plans, wind-scoop passive cooling, and the everyday experience of living under a dome."
              )}
            </p>
            <p className="mt-3 flex items-center gap-2 text-xs font-semibold text-primary">
              {t("زر معرض الصور على موقع كال-إيرث", "Visit the photo gallery at Cal-Earth")} <ExternalLink className="h-3.5 w-3.5" />
            </p>
          </a>
        </Reveal>
      </section>

      {/* photo lightbox */}
      <Dialog open={photo !== null} onOpenChange={() => setPhoto(null)}>
        <DialogContent className="max-w-3xl bg-background p-4" dir={isAr ? "rtl" : "ltr"}>
          {photo !== null && (
            <>
              <img
                src={PAVILION_GALLERY[photo].src}
                alt={t(PAVILION_GALLERY[photo].cap, PAVILION_GALLERY[photo].capEn)}
                className="max-h-[65vh] w-full rounded-lg object-contain"
              />
              <p className="p-2 text-sm leading-7 text-muted-foreground">
                {t(PAVILION_GALLERY[photo].cap, PAVILION_GALLERY[photo].capEn)}
              </p>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* typology dialog */}
      <Dialog open={!!typo} onOpenChange={() => setTypo(null)}>
        <DialogContent className="max-w-lg bg-background" dir={isAr ? "rtl" : "ltr"}>
          {typo && (
            <>
              <DialogHeader>
                <DialogTitle className="font-display text-2xl font-bold">{t(typo.name, typo.nameEn)}</DialogTitle>
              </DialogHeader>
              <img src={typo.image} alt={t(typo.name, typo.nameEn)} className="h-64 w-full rounded-lg object-cover" />
              <p className="leading-8 text-foreground/85">{t(typo.desc, typo.descEn)}</p>
              <div className="space-y-2 rounded-lg bg-secondary p-4 text-sm leading-7">
                <p><strong className="text-primary">{t("الإيجابية:", "Advantage:")}</strong> {t(typo.plus, typo.plusEn)}</p>
                <p><strong className="text-primary">{t("التحدّي:", "Challenge:")}</strong> {t(typo.minus, typo.minusEn)}</p>
                <p className="text-muted-foreground">{t("(مرجع المصمّم: ", "(Designer reference: ")}{typo.ref}{t(")", ")")}</p>
              </div>
              <a
                href={`https://wa.me/96891352723?text=${encodeURIComponent(
                  isAr
                    ? `مرحباً، أستفسر عن نموذج «${typo.name}» من بيت القبة.`
                    : `Hello, I'm asking about the "${typo.nameEn}" typology from Vault House.`
                )}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 rounded-lg bg-[#25D366] px-4 py-3 text-sm font-bold text-white transition-opacity hover:opacity-90"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden><path d="M17.5 14.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.5 0 1.47 1.07 2.9 1.22 3.1.15.2 2.11 3.22 5.1 4.51.71.31 1.27.49 1.7.63.72.23 1.37.2 1.88.12.57-.09 1.76-.72 2-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35M12.05 21.79h-.01a9.82 9.82 0 0 1-5-1.37l-.36-.21-3.72.97.99-3.62-.23-.37a9.8 9.8 0 0 1-1.5-5.24c0-5.42 4.42-9.83 9.85-9.83a9.79 9.79 0 0 1 9.83 9.84c0 5.42-4.41 9.83-9.83 9.83M20.46 3.55A11.8 11.8 0 0 0 12.05 0C5.5 0 .16 5.33.16 11.89c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.9 11.9 0 0 0 5.68 1.45h.01c6.55 0 11.89-5.33 11.89-11.9 0-3.18-1.24-6.16-3.48-8.35"/></svg>
                {t("استفسر عن هذا النموذج عبر واتساب", "Ask about this typology on WhatsApp")}
              </a>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* video dialog */}
      <Dialog open={video !== null} onOpenChange={() => setVideo(null)}>
        <DialogContent className="flex max-h-[92vh] max-w-4xl flex-col overflow-hidden bg-background p-4" dir={isAr ? "rtl" : "ltr"}>
          {video !== null && (
            <>
              <DialogHeader className="shrink-0">
                <DialogTitle className="font-display px-2 text-xl font-bold">
                  {t(VIDEOS[video].title, VIDEOS[video].titleEn)}
                </DialogTitle>
              </DialogHeader>
              {VIDEOS[video].youtube ? (
                <div className="shrink-0 overflow-hidden rounded-lg bg-black">
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${VIDEOS[video].youtube}?autoplay=1&rel=0`}
                    title={t(VIDEOS[video].title, VIDEOS[video].titleEn)}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className={`w-full ${VIDEOS[video].youtubeShort ? "mx-auto aspect-[9/16] max-h-[48vh] max-w-[300px]" : "aspect-video max-h-[42vh]"}`}
                  />
                </div>
              ) : (
                <video
                  src={VIDEOS[video].src}
                  controls
                  autoPlay
                  playsInline
                  className="max-h-[42vh] w-full shrink-0 rounded-lg bg-black"
                />
              )}
              <div className="min-h-0 flex-1 overflow-y-auto">
                <p className="p-2 text-sm leading-8 text-foreground/85">
                  {t(VIDEOS[video].caption, VIDEOS[video].captionEn)}
                </p>
                <p className="p-2 text-xs leading-6 text-muted-foreground" dir={isAr ? "ltr" : "rtl"}>
                  {t(VIDEOS[video].captionEn, VIDEOS[video].caption)}
                </p>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
