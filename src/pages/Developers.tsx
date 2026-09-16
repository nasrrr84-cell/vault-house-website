import { useState } from "react";
import { Link } from "react-router";
import Reveal from "@/components/Reveal";
import Seo from "@/components/Seo";
import { GatedPdfDialog } from "@/components/LeadForm";
import { useT } from "@/providers/lang";
import { LeadForm } from "@/components/LeadForm";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Building2, ClipboardCheck, Download, ExternalLink, Home, Mountain, Palmtree } from "lucide-react";

export default function Developers() {
  const t = useT();
  const isAr = t("a", "") === "a";
  const [assessOpen, setAssessOpen] = useState(false);
  const [privateOpen, setPrivateOpen] = useState(false);

  const INITIATIVES = [
    {
      icon: Palmtree,
      title: t("نُزُل بيئية (Eco-lodges)", "Eco-lodges"),
      body: t(
        "وحدات إقامة صغيرة منخفضة الأثر تُبنى ضمن الطبيعة لا على حسابها — النوع الأسرع نمواً في السياحة البيئية الخليجية. القبة هنا تجيب مباشرة: بصمة أرضية صغيرة، تبريد سلبي يخفض استهلاك التكييف، وقصة مواد محلية ترويها لضيوفك. مرجع النوع: تجربة «إيكو-دوم» في كال-إيرث — منزل قبة مسكون منذ 1998.",
        "Small low-impact accommodation units built within nature, not at its expense — the fastest-growing eco-tourism format in the Gulf. The dome answers directly: a small ground footprint, passive cooling that cuts AC demand, and a local-materials story you can tell your guests. Reference for the type: Cal-Earth's Eco-Dome — a dome home lived in since 1998."
      ),
      srcLabel: t("المصدر: معهد كال-إيرث — calearth.org", "Source: Cal-Earth Institute — calearth.org"),
      srcUrl: "https://calearth.org/blogs/superadobe-at-calearth/eco-dome",
    },
    {
      icon: Building2,
      title: t("مراكز زوار ومواقع تراثية", "Heritage & visitor centres"),
      body: t(
        "مباني استقبال صغيرة عند المواقع الأثرية والطبيعية تحتاج قاعة مفتوحة بلا أعمدة، تحملاً عالياً للتشغيل اليومي، ولغة معمارية تليق بالمكان. القبة الانضغاطية تعطي قاعة كاملة بلا أي عمود، وتُقرأ كامتداد لعمارة القباب المحلية لا كجسم غريب عليها. مرجع النوع: دراسات التهوية الطبيعية للقباب الجيوديسية في المناخات الحارة (MDPI).",
        "Small reception buildings at archaeological and natural sites need a column-free hall, high durability for daily operation, and an architectural language worthy of the place. A compression dome gives a complete hall with zero columns, and reads as an extension of local dome architecture rather than an alien object. Reference for the type: MDPI's natural-ventilation study of geodesic domes in hot climates."
      ),
      srcLabel: t("المصدر: دراسة MDPI عن التهوية في القباب", "Source: MDPI study on dome ventilation"),
      srcUrl: "https://www.mdpi.com/2079-3197/4/3/31",
    },
    {
      icon: Mountain,
      title: t("منتجعات جبلية", "Mountain retreats"),
      body: t(
        "على ارتفاعات الجبل الأخضر وفروع الحجر، الفرق الحراري بين النهار والليل كبير — وهنا تتفوق الكتلة الحرارية للقشرة: تخزّن برودة الليل وتؤجّل ذروة حر النهار نحو ست ساعات. والقطع المرقّمة مسبقة الصب تُنقل بشاحنات صغيرة وتركّب بسرعة في مواقع يصعب إيصال الشدّات إليها. مرجع النوع: منطق القباب المونوليثية في العزل والمتانة (Monolithic Dome Institute).",
        "At Jabal Akhdar and Hajar altitudes, the day-night temperature swing is large — exactly where the shell's thermal mass excels: it stores the night's coolth and delays the day's heat peak by about six hours. Numbered precast pieces travel in small trucks and assemble fast on sites where formwork can hardly reach. Reference for the type: Monolithic Dome Institute on insulation and durability."
      ),
      srcLabel: t("المصدر: المعهد الأمريكي للقباب المونوليثية", "Source: Monolithic Dome Institute"),
      srcUrl: "https://www.monolithic.org",
    },
    {
      icon: Home,
      title: t("بيوت خاصة وضيافة عائلية", "Private homes & guest houses"),
      body: t(
        "ليست القبة حكراً على المشاريع الكبيرة: بيت قبة واحد على أرض عائلية، أو ملحق ضيافة صغير، أو استراحة مزرعة — الميزانيات هنا أصغر لكن المنطق نفسه: بناء أسرع بقطع مرقّمة، فواتير تبريد أقل، وبيت لا يشبه أي بيت آخر. مرجع النوع: «إيكو-دوم» في كال-إيرث — منزل عائلي قائم منذ 1998.",
        "Domes aren't only for large projects: a single dome home on family land, a small guest annex, or a farm retreat — budgets are smaller here but the logic is the same: faster build with numbered pieces, lower cooling bills, and a home unlike any other. Reference for the type: Cal-Earth's Eco-Dome — a family home standing since 1998."
      ),
      srcLabel: t("المصدر: معهد كال-إيرث — calearth.org", "Source: Cal-Earth Institute — calearth.org"),
      srcUrl: "https://calearth.org/blogs/superadobe-at-calearth/eco-dome",
    },
  ];

  const DIAGRAMS = [
    {
      img: "/media/diag-stack.png",
      title: t("التنفيس بالشحن الحراري (Stack effect)", "Stack-effect ventilation"),
      body: t(
        "الهواء الساخن يصعد بالطفو ويخرج من فتحة التاج، فيسحب هواءً بارداً من الفتحات السفلية — تهوية مستمرة بلا مراوح ولا كهرباء. القبة تشكّل هذا المسار طبيعياً لأن سقفها كله «قمة».",
        "Hot air rises by buoyancy and exits the crown vent, pulling cool air in through low openings — continuous ventilation with no fans and no electricity. A dome forms this path naturally because its entire roof is a peak."
      ),
    },
    {
      img: "/media/diag-mass.png",
      title: t("الكتلة الحرارية — تأخير الذروة", "Thermal mass — peak shifting"),
      body: t(
        "القشرة السميكة تمتص حرارة النهار وتبطئ وصولها: تقلبات ±9°م في الخارج تصبح نحو ±2°م في الداخل، والذروة تتأخر نحو ست ساعات — تصل الحرارة بعد الغروب، حين يكون الهواء الخارجي قد برد أصلاً.",
        "The thick shell absorbs daytime heat and slows it down: ±9°C outdoor swings become about ±2°C indoors, and the peak is delayed roughly six hours — arriving after sunset, when outside air has already cooled."
      ),
    },
    {
      img: "/media/diag-ratio.png",
      title: t("نسبة السطح إلى الحجم", "Surface-to-volume ratio"),
      body: t(
        "لنفس المساحة الأرضية، غلاف القبة المعرّض للشمس أقل بنحو 30% من فيلا بسقف مسطح — مساحة أقل تعني تبادلاً حرارياً أقل صيفاً وشتاءً. إنها الهندسة نفسها التي جعلت القباب تسكن المناخات الحارة لقرون.",
        "For the same floor area, a dome's sun-exposed envelope is roughly 30% smaller than a flat-roofed villa's — less surface means less heat exchange, summer and winter. It's the same geometry that kept domes in hot climates for centuries."
      ),
    },
  ];

  const GULF = [
    {
      scale: t("حكومي · مطوّر سيادي", "Governmental · sovereign developer"),
      title: t(
        "منتجع مسك مون — مليحة، الشارقة (16 وحدة)",
        "Mysk Moon Retreat — Mleiha, Sharjah (16 units)"
      ),
      body: t(
        "أول وجهة «غلامبينغ» فاخرة في الإمارة، من تطوير هيئة الشارقة للاستثمار والتطوير (شروق): 10 قباب بغرفة واحدة مع مسابح خاصة + خيام عائلية، في كثبان مليحة بعيداً عن التلوث الضوئي. وحدات صغيرة مستقلة ذاتياً تُقام في بيئة صحراوية حساسة — النموذج نفسه الذي نقترحه للنُزل البيئية.",
        "The emirate's first luxury glamping destination, developed by Shurooq: 10 one-bedroom domes with private pools plus family tents, set in the Mleiha dunes away from noise and light pollution. Small self-sufficient units in a sensitive desert environment — the exact model we propose for eco-lodges."
      ),
      srcLabel: t("المصدر: شروق — shurooq.gov.ae", "Source: Shurooq — shurooq.gov.ae"),
      srcUrl: "https://shurooq.gov.ae/news/shurooq-announces-mysk-moon-retreat-welcomes-guests-unveils-4-new-hospitality-projects-sharjah",
    },
    {
      scale: t("خاص · نُزل صغير", "Private · small lodge"),
      title: t(
        "ستاري دومز — رمال الشرقية، عُمان (16 قبة)",
        "Starry Domes Desert Camp — Sharqiya Sands, Oman (16 domes)"
      ),
      body: t(
        "المثال العُماني المباشر: مخيم «غلامبينغ» يعمل منذ 2021 على قمم كثبان رمال الشرقية قرب بدية — 16 قبة فاخرة بأسماء النجوم، بحمامات خاصة وتكييف وإطلالات صافية للسماء، بعيداً عن أي تلوث ضوئي. دليل محلي قائم على أن قبة الإقامة الصحراوية في عُمان سوق موجود فعلاً ومحجوز باستمرار.",
        "The direct Omani example: a glamping camp operating since 2021 atop the Sharqiya Sands dunes near Bidiyah — 16 luxury domes named after stars, with private bathrooms, AC and clear sky views, far from any light pollution. Local standing proof that desert dome accommodation in Oman is an existing, consistently booked market."
      ),
      srcLabel: t("المصدر: Wander With Wonder — تقرير سياحي", "Source: Wander With Wonder — travel feature"),
      srcUrl: "https://www.wanderwithwonder.com/what-to-do-when-you-visit-oman/",
    },
    {
      scale: t("خاص · بيت عائلي", "Private · family home"),
      title: t(
        "«إيكو-دوم» — معهد كال-إيرث، كاليفورنيا",
        "“Eco-Dome” — Cal-Earth Institute, California"
      ),
      body: t(
        "بيت قبة عائلي من أكياس الأرض (سوبرأدوب) مأهول منذ 1998 — المرجع العالمي الأشهر لبيت القبة الصغير: غرف نوم ومعيشة تحت قباب مترابطة، بُني بأيدٍ غير متخصصة ومواد من الموقع. الدليل الأطول عمراً على أن بيت القبة الخاص يعيش ويُسكن، لا يبقى رسمًا.",
        "A family dome home built from earthbags (superadobe), inhabited since 1998 — the world's best-known reference for the small dome house: bedrooms and living under linked domes, built by non-specialist hands with site materials. The longest-lived proof that a private dome home gets lived in, not just drawn."
      ),
      srcLabel: t("المصدر: معهد كال-إيرث — calearth.org", "Source: Cal-Earth Institute — calearth.org"),
      srcUrl: "https://calearth.org/blogs/superadobe-at-calearth/eco-dome",
    },
    {
      scale: t("خاص · بيوت سكنية", "Private · residences"),
      title: t(
        "بيوت القباب المونوليثية — الولايات المتحدة",
        "Monolithic dome homes — United States"
      ),
      body: t(
        "مئات البيوت الخاصة المبنية بنظام القبة المونوليثية الخرسانية المعزولة منذ سبعينيات القرن الماضي — يوثّق المعهد الأمريكي للقباب المونوليثية بيوتاً سكنية قائمة بفواتير طاقة أقل بكثير ومتانة استثنائية أمام الأعاصير والحرائق. مرجع مفتوح لمن يريد التعمق في بيت القبة كسكن دائم.",
        "Hundreds of private homes built with the insulated monolithic concrete dome system since the 1970s — the Monolithic Dome Institute documents lived-in residences with far lower energy bills and exceptional durability against hurricanes and fire. An open reference for anyone studying the dome house as a permanent home."
      ),
      srcLabel: t("المصدر: المعهد الأمريكي للقباب المونوليثية", "Source: Monolithic Dome Institute"),
      srcUrl: "https://www.monolithic.org",
    },
  ];

  const FITS = [
    t("بصمة صغيرة: أقل تسوية وأقل تشويه للموقع", "Low footprint: minimal grading, minimal site scarring"),
    t("تبريد سلبي: تهوية بالشحن الحراري + كتلة حرارية تؤخر الذروة", "Passive cooling: stack ventilation + thermal-mass peak shift"),
    t("تركيب سريع: قطع مرقّمة مسبقة الصب تُجمّع في أيام لا أسابيع", "Fast erection: numbered precast pieces assemble in days, not weeks"),
    t("قصة مواد محلية: طين، طوب، رمل — سلسلة توريد محلية قابلة للرواية", "Local-materials story: earth, brick, sand — a narratable local supply chain"),
  ];

  return (
    <div className="mx-auto max-w-6xl px-5">
      <Seo titleAr="شراكات ومشاريع" titleEn="Partners & Projects" descAr="للمطورين والجهات الحكومية والملاك: أين تخدم القبة في السياحة البيئية الخليجية، سوابق موثقة، ورسوم حرارية — واطلب تقييم ملاءمة لموقعك." descEn="For developers, government & private owners: where domes serve Gulf eco-tourism, documented precedents, thermal schematics — request a site assessment." />
      {/* hero */}
      <section className="py-16">
        <Reveal>
          <p className="eyebrow mb-3">{t("صفحة مخصصة", "A dedicated page")}</p>
          <h1 className="font-display text-4xl font-bold sm:text-5xl">
            {t("للمطوّرين والجهات الحكومية والملّاك", "For developers, government & private owners")}
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-9 text-muted-foreground">
            {t(
              "سواء كنتم جهة حكومية تخطط لمشاريع سياحة بيئية ضمن رؤية عُمان 2030، أو مطوّراً يبني نُزلاً أو فندقاً بوتيكياً، أو مالك أرض يفكّر في بيت قبة خاص — هذه الصفحة تشرح باختصار أين تخدم القبة، ولماذا تتفوق حرارياً، وما الخطوة العملية التالية.",
              "Whether you're a government body planning eco-tourism under Oman Vision 2030, a developer building an eco-lodge or boutique hotel, or a landowner considering a private dome home — this page explains briefly where domes serve, why they outperform thermally, and what the practical next step is."
            )}
          </p>
        </Reveal>
      </section>

      {/* initiative types */}
      <section className="border-t border-border py-14">
        <Reveal>
          <p className="eyebrow mb-3">{t("أين تخدم القبة", "Where domes serve")}</p>
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            {t("أربعة أنماط مبادرات — لا وعود، بل ملاءمة", "Four initiative types — no claims, just fit")}
          </h2>
        </Reveal>
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {INITIATIVES.map((it, i) => (
            <Reveal key={i} delay={i * 90}>
              <div className="flex h-full flex-col rounded-xl border border-border bg-card p-6">
                <it.icon className="h-8 w-8 text-primary" />
                <h3 className="font-display mt-4 text-xl font-bold">{it.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-7 text-foreground/85">{it.body}</p>
                <a href={it.srcUrl} target="_blank" rel="noreferrer" className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline">
                  {it.srcLabel} <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* thermal schematics */}
      <section className="border-t border-border py-14">
        <Reveal>
          <p className="eyebrow mb-3">{t("بالرسوم — لماذا تتفوق حرارياً", "In schematics — why it outperforms")}</p>
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            {t("ثلاث آليات فيزيائية، بلا تكييف إضافي", "Three physical mechanisms, no extra AC")}
          </h2>
        </Reveal>
        <div className="mt-8 space-y-6">
          {DIAGRAMS.map((d, i) => (
            <Reveal key={i} delay={i * 60}>
              <div className={`grid items-center gap-6 rounded-xl border border-border bg-card p-6 md:grid-cols-2 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
                <img src={d.img} alt={t(d.title, d.title)} className="w-full rounded-lg border border-border/60" />
                <div>
                  <h3 className="font-display text-xl font-bold">{d.title}</h3>
                  <p className="mt-3 text-sm leading-8 text-foreground/85">{d.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-6">
          <p className="text-xs leading-6 text-muted-foreground">
            {t(
              "الرسوم أصلية من إعداد بيت القبة. المراجع التقنية: دراسة MDPI للتهوية الطبيعية في القباب الجيوديسية (mdpi.com) — المعهد الأمريكية للقباب المونوليثية (monolithic.org).",
              "Diagrams are original work by Vault House. Technical references: MDPI natural-ventilation study of geodesic domes (mdpi.com) — Monolithic Dome Institute (monolithic.org)."
            )}
          </p>
        </Reveal>
      </section>

      {/* Gulf precedents */}
      <section className="border-t border-border py-14">
        <Reveal>
          <p className="eyebrow mb-3">{t("قراءة السوق — أين تقع القبة في الخليج", "Market reading — where the dome fits in the Gulf")}</p>
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            {t("الطلب الحقيقي: بيوت خاصة ونُزل صغيرة", "The real demand: private homes & small lodges")}
          </h2>
          <p className="mt-4 max-w-3xl leading-8 text-muted-foreground">
            {t(
              "قراءتنا للسوق الخليجي: مشاريع الضيافة العملاقة المدمجة بالجبال والمدن الجديدة ملفٌّ مخصص للمطوّرين السياديين وفرقهم العالمية — وليس ميدان منتج حرفي بمقياس جناح الطوب. أما الطلب الفعلي الذي ينمو ويُحجز فهو في مقياس الغرفة والبيت: نُزل بيئية صغيرة، بيوت ضيافة، وبيوت خاصة على أراضٍ عائلية. لذلك ترتكز سوابقنا على هذا المقياس — مع مرجع حكومي واحد يثبت أن حتى الجهات السيادية تبني القباب الصغيرة حين تريد غرفة صحراوية.",
              "Our reading of the Gulf market: mega hospitality carved into mountains and new cities is the domain of sovereign developers and their global teams — not the field for an artisanal product at the Brick Pavilion's scale. The demand that is actually growing and getting booked sits at the scale of the room and the house: small eco-lodges, guest houses, and private homes on family land. So our precedents focus on that scale — with one governmental reference proving that even sovereign bodies build small domes when they want a desert room."
            )}
          </p>
        </Reveal>
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {GULF.map((g, i) => (
            <Reveal key={i} delay={i * 90}>
              <div className="flex h-full flex-col rounded-xl border border-border bg-card p-6">
                <span className="w-fit rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-[11px] font-bold text-primary">{g.scale}</span>
                <h3 className="font-display mt-3 text-lg font-bold leading-8">{g.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-7 text-foreground/85">{g.body}</p>
                <a href={g.srcUrl} target="_blank" rel="noreferrer" className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline">
                  {g.srcLabel} <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* why a dome fits */}
      <section className="border-t border-border py-14">
        <Reveal>
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            {t("بجملة واحدة: لماذا القبة؟", "In one line: why a dome?")}
          </h2>
        </Reveal>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {FITS.map((f, i) => (
            <Reveal key={i} delay={i * 70}>
              <div className="flex items-start gap-3 rounded-xl border border-border bg-card p-5">
                <span className="font-display text-2xl font-bold text-primary/60">{isAr ? ["١","٢","٣","٤"][i] : i + 1}</span>
                <p className="leading-8">{f}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* next step */}
      <section className="border-t border-border py-14">
        <Reveal>
          <p className="eyebrow mb-3">{t("الخطوة التالية", "The next step")}</p>
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            {t("من الفكرة إلى الموقع — خطوتان", "From idea to site — two moves")}
          </h2>
        </Reveal>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <Reveal>
            <div className="flex h-full flex-col rounded-xl border-2 border-primary/40 bg-card p-6">
              <Download className="h-8 w-8 text-primary" />
              <h3 className="font-display mt-4 text-xl font-bold">
                {t("حمّل موجز الجدوى", "Download the feasibility brief")}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-8 text-foreground/85">
                {t(
                  "ورقة بيانات البناء: أرقام التكلفة الاسترشادية، فرق العمل، مراحل التنفيذ — الوثيقة التي تضعها أمام مدير المشروع في أول اجتماع.",
                  "The construction data sheet: indicative cost figures, work crews, execution stages — the document you put in front of a project manager at the first meeting."
                )}
              </p>
              <div className="mt-5 w-fit">
                <GatedPdfDialog
                  pdf="/media/construction-data-sheet.pdf"
                  titleAr="موجز الجدوى — بيت القبة"
                  titleEn="Feasibility Brief — Vault House"
                  blurbAr="الوثيقة التي تضعها أمام مدير المشروع في أول اجتماع. اترك اسمك وبريدك ويظهر رابط التحميل فوراً."
                  blurbEn="The document you put in front of a project manager at the first meeting. Leave your name and email and the download link appears instantly."
                  trigger={<span className="pill-btn inline-flex items-center gap-2"><Download className="h-4 w-4" /> {t("تحميل الموجز PDF", "Download the brief PDF")}</span>}
                />
              </div>
            </div>
          </Reveal>
          <Reveal delay={90}>
            <div className="flex h-full flex-col rounded-xl border-2 border-primary/40 bg-card p-6">
              <ClipboardCheck className="h-8 w-8 text-primary" />
              <h3 className="font-display mt-4 text-xl font-bold">
                {t("اطلب تقييم ملاءمة لموقعك", "Request a site-specific dome-fit assessment")}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-8 text-foreground/85">
                {t(
                  "أرسل لنا إحداثيات الموقع أو مخطط الأرض — نرد عليك بقراءة أولية: هل تلائم القبة موقعك، أي نموذج، وأي نظام بناء. اختر «مشروع سياحي» في خانة الاهتمام.",
                  "Send us your site coordinates or plot plan — we reply with a first reading: whether a dome fits your site, which typology, and which construction system. Choose 'Tourism project' in the interest field."
                )}
              </p>
              <div className="mt-5">
                <button onClick={() => setAssessOpen(true)} className="pill-btn">
                  {t("اطلب التقييم — مجاناً", "Request the assessment — free")}
                </button>
              </div>
            </div>
          </Reveal>
          <Reveal delay={180}>
            <div className="flex h-full flex-col rounded-xl border-2 border-primary/40 bg-card p-6">
              <Home className="h-8 w-8 text-primary" />
              <h3 className="font-display mt-4 text-xl font-bold">
                {t("مالك أرض خاصة؟ اطلب تقييم بيتك", "Private landowner? Request your home assessment")}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-8 text-foreground/85">
                {t(
                  "عندك أرض عائلية أو مزرعة وتفكّر في بيت قبة أو بيت ضيافة صغير؟ أرسل الموقع — نرد بقراءة أولية: أي نموذج قبة يلائم أرضك وميزانيتك. خانة الاهتمام جاهزة على «بيت خاص».",
                  "Have family land or a farm and thinking of a dome home or small guest house? Send the location — we reply with a first reading: which dome typology fits your land and budget. The interest field is pre-set to 'Private home'."
                )}
              </p>
              <div className="mt-5">
                <button onClick={() => setPrivateOpen(true)} className="pill-btn">
                  {t("اطلب تقييم بيت خاص — مجاناً", "Request a private-home assessment — free")}
                </button>
              </div>
            </div>
          </Reveal>
        </div>
        <Reveal className="mt-8">
          <p className="text-sm leading-7 text-muted-foreground">
            {t("أسئلة مباشرة؟ ", "Direct questions? ")}
            <Link to="/contact" className="font-semibold text-primary hover:underline">
              {t("صفحة التواصل", "Contact page")}
            </Link>
          </p>
        </Reveal>
      </section>

      {/* assessment dialog */}
      <Dialog open={assessOpen} onOpenChange={setAssessOpen}>
        <DialogContent className="max-w-lg bg-background" dir={isAr ? "rtl" : "ltr"}>
          <DialogHeader>
            <DialogTitle className="font-display text-2xl font-bold">
              {t("تقييم ملاءمة القبة لموقعك", "Dome-fit assessment for your site")}
            </DialogTitle>
          </DialogHeader>
          <p className="text-sm leading-7 text-muted-foreground">
            {t(
              "أخبرنا عن المشروع والموقع — نرد بقراءة أولية خلال أيام، سواء كان مشروعاً عاماً أو سياحياً أو بيتاً خاصاً.",
              "Tell us about the project and the site — we reply with a first reading within days, whether it's a public, tourism, or private home project."
            )}
          </p>
          <LeadForm defaultInterest="tourism" />
        </DialogContent>
      </Dialog>

      {/* private home dialog */}
      <Dialog open={privateOpen} onOpenChange={setPrivateOpen}>
        <DialogContent className="max-w-lg bg-background" dir={isAr ? "rtl" : "ltr"}>
          <DialogHeader>
            <DialogTitle className="font-display text-2xl font-bold">
              {t("تقييم بيت القبة لأرضك", "Dome-home assessment for your land")}
            </DialogTitle>
          </DialogHeader>
          <p className="text-sm leading-7 text-muted-foreground">
            {t(
              "أخبرنا عن الأرض (المنطقة، المساحة التقريبية) وما تتمناه — نرد بقراءة أولية خلال أيام.",
              "Tell us about the land (area, approximate size) and what you have in mind — we reply with a first reading within days."
            )}
          </p>
          <LeadForm defaultInterest="private-home" />
        </DialogContent>
      </Dialog>
    </div>
  );
}
