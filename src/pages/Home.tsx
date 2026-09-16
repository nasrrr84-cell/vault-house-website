import { Link } from "react-router";
import Reveal from "@/components/Reveal";
import Seo from "@/components/Seo";
import { BookletDialog } from "@/components/LeadForm";
import { useT } from "@/providers/lang";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function Home() {
  const t = useT();
  const isAr = t("a", "") === "a";
  const HERO_WORDS = t(
    "بيوت تُبنى بالهندسة القديمة، وتُحسب بالأدوات الحديثة، وتُشيَّد بأيدٍ محلية.",
    "Homes built with ancient geometry, computed with modern tools, raised by local hands."
  ).split(" ");

  const PROOF = [
    t("قبة طوب 30 م² بُنيت يدوياً — اللاذقية، سوريا 2018–2020", "30 m² brick dome built by hand — Latakya, Syria 2018–2020"),
    t("بلا تسليح حديد داخل القبة — القوة في الشكل، لا في الكمية", "No steel reinforcement inside the dome — strength is in the form, not the mass"),
    t("دراسة 4 نماذج سكنية بالقباب + مقارنة 6 أنظمة بناء", "4 dome housing typologies studied + 6 construction systems compared"),
    t("مقرّنا: مسقط، سلطنة عُمان", "Based in Muscat, Sultanate of Oman"),
  ];

  const CARDS = [
    {
      to: "/why",
      title: t("لماذا القبة؟", "Why domes?"),
      body: t(
        "سطح أقل، حرارة أقل، فاتورة تكييف أقل. اعرف لماذا يوفّر الشكل المقبّب ما بين 30% و50% من طاقة التبريد.",
        "Less surface, less heat, a smaller AC bill. Learn why the dome shape saves 30–50% of cooling energy."
      ),
      cta: t("اقرأ الفكرة", "Read the idea"),
      img: "/media/hero-night.jpg",
    },
    {
      to: "/materials",
      title: t("كيف تُبنى؟", "How are they built?"),
      body: t(
        "ست طرق مختلفة لبناء قبة — من الطوب التقليدي إلى الخرسانة المرشوشة. اضغط على أي طريقة وشاهد صورتها وقصتها في دقيقة.",
        "Six real ways to build a dome — from traditional brick to shotcrete. Tap any method and see its photo and story in a minute."
      ),
      cta: t("استكشف الطرق", "Explore the systems"),
      img: "/media/interior-herringbone.jpg",
    },
    {
      to: "/prices",
      title: t("كم تكلّف؟", "What does it cost?"),
      body: t(
        "أرقام حقيقية بالريال العُماني: مواد، أيدٍ عاملة، مدة تنفيذ، وكم توفّر في التبريد كل سنة.",
        "Real numbers in Omani Rials: materials, labor, build time, and how much you save on cooling every year."
      ),
      cta: t("شاهد الأرقام", "See the numbers"),
      img: "/media/construction-1.jpg",
    },
  ];

  return (
    <div
      >
      <Seo titleAr="الرئيسية" titleEn="Home" descAr="بيت القبة — بيوت إيكو-دوم في سلطنة عُمان: قباب انضغاطية بلا أعمدة، تصميم وبناء مستدام للسياحة البيئية ضمن رؤية عُمان 2030." descEn="Vault House — eco dome homes in Oman: column-free compression domes, sustainable design & build for eco tourism under Oman Vision 2030." />
      {/* Hero — full-width pavilion photo */}
      <section className="relative overflow-hidden">
        <img
          src="/media/hero-day.jpg"
          alt={t(
            "قبة طوب انضغاطية بُنيت يدوياً في جبال اللاذقية — compression-only brick dome, no formwork construction",
            "Hand-built compression-only brick dome in the Latakya mountains — no formwork construction"
          )}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/10 to-background" />
        <div className="relative mx-auto max-w-6xl px-5 pb-24 pt-32 lg:pt-44">
          <div className="max-w-2xl">
            <p className="eyebrow mb-6 !text-white/90" style={{ textShadow: "0 1px 10px rgba(0,0,0,0.5)" }}>
              {t("بيت القبة · مسقط · Eco-Dome Design + Build", "Vault House · Muscat · Eco-Dome Design + Build")}
            </p>
            <h1 className="hero-line font-display text-4xl font-bold leading-[1.5] text-white sm:text-5xl sm:leading-[1.45]" style={{ textShadow: "0 2px 18px rgba(0,0,0,0.55)" }}>
              {HERO_WORDS.map((w, i) => (
                <span key={`${w}-${i}`} style={{ animationDelay: `${i * 70}ms` }} className={isAr ? "ml-2" : "mr-2"}>
                  {w}
                </span>
              ))}
            </h1>
            <Reveal delay={300}>
              <p className="mt-8 max-w-xl text-lg leading-9 text-white/95" style={{ textShadow: "0 1px 12px rgba(0,0,0,0.5)" }}>
                {t(
                  "قبة من الطوب، بلا أعمدة ولا كمرات، تقف منذ سنوات في جبال اللاذقية — بُنيت باليد، طوبة فوق طوبة، بقوة الشكل وحده. من هذه التجربة وُلد «بيت القبة».",
                  "A brick dome with no columns and no beams has stood for years in the Latakya mountains — built by hand, brick over brick, by the strength of form alone. From that experiment Vault House was born."
                )}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* The question */}
      <section className="mx-auto max-w-6xl px-5 py-14">
        <Reveal>
          <p className="max-w-xl text-lg leading-9 text-muted-foreground">
            {t(
              "منصة تجيب عن سؤال بسيط يطرحه كل من يفكر في بناء بيت في عُمان والخليج:",
              "A platform answering one simple question everyone building a home in Oman and the Gulf asks:"
            )}
          </p>
          <p className="font-display mt-6 text-2xl font-bold text-primary">
            {t(
              "هل توجد طريقة أذكى — وأبرد — وأرخص — لبناء بيت؟",
              "Is there a smarter — cooler — cheaper way to build a home?"
            )}
          </p>
          <p className="mt-4 text-muted-foreground">
            {t("الجواب المختصر: نعم. والتفاصيل في هذا الموقع.", "The short answer: yes. The details are on this site.")}
          </p>
        </Reveal>
      </section>

      {/* Proof strip */}
      <section className="border-y border-border bg-secondary py-5 overflow-hidden">
        <div className="marquee-track gap-14 text-sm font-semibold text-foreground/70">
          {[...PROOF, ...PROOF].map((p, i) => (
            <span key={i} className="flex items-center gap-3 whitespace-nowrap">
              <svg viewBox="0 0 32 32" className="h-4 w-4 text-primary"><path d="M4 28 A12 12 0 0 1 28 28 Z" fill="currentColor"/></svg>
              {p}
            </span>
          ))}
        </div>
      </section>

      {/* Three cards */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <Reveal>
          <p className="eyebrow mb-3">{t("ابدأ من هنا", "Start here")}</p>
          <h2 className="font-display mb-12 text-3xl font-bold sm:text-4xl">
            {t("ثلاثة أسئلة، ثلاث إجابات", "Three questions, three answers")}
          </h2>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-3">
          {CARDS.map((c, i) => (
            <Reveal key={c.to} delay={i * 120}>
              <Link
                to={c.to}
                className="card-lift group block overflow-hidden rounded-xl border border-border bg-card"
              >
                <div className="h-52 overflow-hidden">
                  <img
                    src={c.img}
                    alt={c.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display mb-3 text-2xl font-bold">{c.title}</h3>
                  <p className="mb-5 text-sm leading-7 text-muted-foreground">{c.body}</p>
                  <span className="inline-flex items-center gap-2 text-sm font-bold text-primary">
                    {c.cta} {isAr ? <ArrowLeft className="h-4 w-4" /> : <ArrowRight className="h-4 w-4" />}
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Slogan banner */}
      <section className="relative overflow-hidden">
        <img
          src="/media/hero-night.jpg"
          alt={t("قبة بيت القبة ليلاً — نبني تراث الغد", "Vault House dome at night — we build tomorrow's heritage")}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/25" />
        <div className="relative mx-auto max-w-6xl px-5 py-24 text-center sm:py-32">
          <Reveal>
            <p
              className="font-display text-4xl font-bold text-white sm:text-5xl"
              style={{ textShadow: "0 1px 14px rgba(0,0,0,0.45)" }}
            >
              {t("نبني تراث الغد", "We build tomorrow's heritage")}
            </p>
            <p
              className="mx-auto mt-5 max-w-xl text-base leading-8 text-white/90"
              style={{ textShadow: "0 1px 10px rgba(0,0,0,0.4)" }}
            >
              {t(
                "قباب اليوم… حرفة الأمس… بيوت تبقى لأحفادنا.",
                "Today's domes, yesterday's craft — homes that remain for our grandchildren."
              )}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Closing + booklet */}
      <section className="bg-secondary/60">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-20 lg:grid-cols-12 lg:gap-6">
          <div className="lg:col-span-5">
            <Reveal mask>
              <img
                src="/media/human-scale.jpg"
                alt={t("مقياس إنساني داخل القبة — durable architecture, eco construction", "Human scale inside the dome — durable architecture, eco construction")}
                className="h-72 w-full rounded-xl object-cover"
              />
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <Reveal>
              <h2 className="font-display mb-5 text-3xl font-bold">
                {t("لسنا شركة مقاولات.", "We are not a contracting company.")}
              </h2>
              <p className="max-w-2xl text-lg leading-9 text-muted-foreground">
                {t(
                  "نحن ورشة معمارية تدرس وتصمّم وتشرف — ونضع كل ما تعلّمناه بين يديك: المنهجية، المقارنات، الأرقام، والأخطاء أيضاً.",
                  "We are an architecture workshop that researches, designs and supervises — and we put everything we learned in your hands: the methodology, the comparisons, the numbers, and the mistakes too."
                )}
              </p>
              <p className="font-display mt-5 text-xl font-bold">
                {t("حمّل الكتيّب المجاني وابدأ من هناك.", "Download the free booklet and start there.")}
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <BookletDialog
                  trigger={<span className="pill-btn">{t("تحميل كتيّب «بيت القبة» — مجاناً", "Download the Vault House booklet — free")}</span>}
                />
                <Link to="/story" className="pill-btn-ghost">
                  {t("اقرأ القصة أولاً", "Read the story first")}
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
