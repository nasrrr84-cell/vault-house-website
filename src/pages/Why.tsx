import { Link } from "react-router";
import Reveal from "@/components/Reveal";
import Seo from "@/components/Seo";
import { useT } from "@/providers/lang";
import { AlertTriangle, ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";

const LINKS = [
  { label: "المعاهدة الأمريكية للقباب المونوليثية — monolithic.org", labelEn: "Monolithic Dome Institute — monolithic.org", url: "https://www.monolithic.org" },
  { label: "مجموعة بلوك للأبحاث — ETH زيورخ (هندسة الانضغاط)", labelEn: "Block Research Group, ETH Zurich (compression geometry)", url: "https://block.arch.ethz.ch" },
  { label: "معهد كال-إيرث (القباب الترابية) — calearth.org", labelEn: "Cal-Earth Institute (earth domes) — calearth.org", url: "https://www.calearth.org" },
];

export default function Why() {
  const t = useT();
  const isAr = t("a", "") === "a";

  const REASONS = [
    {
      n: isAr ? "١" : "1",
      t: t("سطح أقل = حرارة أقل", "Less surface = less heat"),
      plain: t(
        "كل سنتيمتر من جدران بيتك وسقفه يمسّه الشمس يسخّن بيتك. الصندوق له 5 أوجه مكشوفة. القبة تغلّف نفس الفراغ بسطح أقل بنسبة 15–30%.",
        "Every centimetre of your walls and roof the sun touches heats your home. A box has 5 exposed faces. A dome wraps the same volume with 15–30% less surface."
      ),
      numbers: t(
        "سطح أقل بنسبة 15–30% يعني حمل تبريد أقل بالنسبة نفسها تقريباً، قبل أي عزل إضافي.",
        "15–30% less surface means roughly the same reduction in cooling load — before any added insulation."
      ),
    },
    {
      n: isAr ? "٢" : "2",
      t: t("الهواء الساخن يصعد — والقبة تستقبله", "Hot air rises — and the dome receives it"),
      plain: t(
        "في بيت صندوقي، تتجمّع الحرارة في زوايا السقف فوق رأسك مباشرة. في القبة، يصعد الهواء الساخن إلى الأعلى — بعيداً عن مستوى جلوسك — ثم يخرج من فتحة علوية أو تهوية طبيعية.",
        "In a box-shaped home, heat pools in the ceiling corners right above your head. In a dome, hot air rises to the crown — far above where you sit — then exits through a top vent or natural ventilation."
      ),
      numbers: t(
        "القبة تعمل مثل المدخنة، لكن بهدوء وبلا مروحة.",
        "A dome works like a chimney — quietly, and with no fan."
      ),
    },
    {
      n: isAr ? "٣" : "3",
      t: t("الكتلة الحرارية — «بطارية الحرارة»", "Thermal mass — the 'heat battery'"),
      plain: t(
        "الطوب والخرسانة والتراب مواد ثقيلة. تخزّن حرارة النهار ببطء، وتطلقها ليلاً — في الوقت الذي يبرد فيه الجو الخارجي.",
        "Brick, concrete and earth are heavy materials. They absorb daytime heat slowly and release it at night — exactly when the outside air cools down."
      ),
      numbers: t(
        "مثل الجرّة الفخارية التي تبقي الماء بارداً — الجدار السميك يفعل الشيء نفسه ببيتك كله.",
        "Like the clay jarra that keeps water cool — a thick wall does the same for your whole house."
      ),
    },
    {
      n: isAr ? "٤" : "4",
      t: t("بلا جسور حرارية", "No thermal bridges"),
      plain: t(
        "الجسر الحراري: كل قطعة معدن تخترق الجدار (هيكل، برغي، إطار) تنقل الحرارة من الخارج إلى الداخل كأنها سلك. الهياكل المعدنية الجيوديسية قد تخفّض كفاءة العزل بنسبة 50–80%.",
        "A thermal bridge: every piece of metal piercing the wall (frame, screw, bracket) conducts heat inward like a wire. Metal geodesic frames can cut insulation performance by 50–80%."
      ),
      numbers: t(
        "القبة الحجرية أو الخرسانية جدار واحد متصل — لا معدن يخترقها.",
        "A masonry or concrete dome is one continuous wall — no metal pierces it."
      ),
    },
    {
      n: isAr ? "٥" : "5",
      t: t("القوة بالشكل", "Strength through form"),
      plain: t(
        "اقفز على علبة كرتون فتنهار. اضغط على بيضة من أطرافها فتقاوم. لماذا؟ لأن الشكل المقبّب يوزّع الضغط على كامل السطح بدل أن يتركّز في نقطة.",
        "Jump on a cardboard box and it collapses. Squeeze an egg end-to-end and it resists. Why? The domed shape spreads pressure over its whole surface instead of letting it concentrate at one point."
      ),
      numbers: t(
        "هذا ما يسميه المهندسون «الانضغاط المحض» — القوة تأتي من الهندسة، لا من كمية الحديد.",
        "Engineers call this 'pure compression' — strength comes from geometry, not from the amount of steel."
      ),
    },
  ];

  return (
    <div className="mx-auto max-w-6xl px-5">
      <Seo titleAr="لماذا القباب؟" titleEn="Why Domes" descAr="لماذا تتفوق القبة حرارياً واقتصادياً في مناخ الخليج: كتلة حرارية، تهوية سلبية، ومساحة سطح أقل بنحو 30% من الفيلا التقليدية." descEn="Why domes outperform in Gulf climates: thermal mass, passive ventilation, and roughly 30% less exposed surface than a conventional villa." />
      <header className="max-w-3xl pb-6 pt-16">
        <p className="eyebrow mb-4">{t("لماذا القبة · Passive Cooling Gulf", "Why Domes · Passive Cooling Gulf")}</p>
        <h1 className="font-display text-4xl font-bold leading-snug sm:text-5xl">
          {t(
            "معظم البيوت في الخليج صناديق خرسانية تحارب الشمس — والشمس تربح كل صيف.",
            "Most homes in the Gulf are concrete boxes fighting the sun — and the sun wins every summer."
          )}
        </h1>
        <p className="mt-6 text-lg leading-9 text-muted-foreground">
          {t(
            "القبة لا تحارب الشمس؛ هندستُها نفسها تجعل الحرارة تعمل لصالحك.",
            "A dome doesn't fight the sun; its very geometry makes the heat work for you."
          )}
        </p>
      </header>

      <div className="grid gap-6 py-10 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <div className="space-y-6">
            {REASONS.map((r, i) => (
              <Reveal key={r.n} delay={i * 60}>
                <article className="card-lift rounded-xl border border-border bg-card p-7">
                  <div className="mb-3 flex items-baseline gap-4">
                    <span className="font-display text-4xl font-bold text-primary/60">{r.n}</span>
                    <h2 className="font-display text-2xl font-bold">{r.t}</h2>
                  </div>
                  <p className="leading-8 text-foreground/85">{r.plain}</p>
                  <p className={`mt-3 border-primary ${isAr ? "border-r-2 pr-4" : "border-l-2 pl-4"} text-sm leading-7 text-muted-foreground`}>
                    {r.numbers}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        <aside className="lg:col-span-5">
          <div className="lg:sticky lg:top-24 space-y-6">
            <Reveal mask>
              <img
                src="/media/hero-alt.jpg"
                alt={t("قبة طوب بين الأشجار — climate-adaptive architecture, البناء المستدام", "Brick dome among trees — climate-adaptive architecture, sustainable building")}
                className="h-96 w-full rounded-xl object-cover"
              />
            </Reveal>
            <Reveal>
              <div className="rounded-xl border-2 border-primary/50 bg-primary/5 p-7">
                <div className="mb-3 flex items-center gap-3 text-primary">
                  <AlertTriangle className="h-6 w-6" />
                  <h3 className="font-display text-xl font-bold">{t("اعرف الحقيقة", "Know the truth")}</h3>
                </div>
                <p className="font-display text-2xl font-bold leading-snug">
                  {t("قبة بلا عزل = فرن حجري.", "An uninsulated dome = a stone oven.")}
                </p>
                <p className="mt-3 text-sm leading-8 text-foreground/80">
                  {t(
                    "الكتلة الحرارية سلاح ذو حدّين: إذا سخنت، تحتاج أياماً لتبرد. في مناخ الخليج، القبة لا تعمل إلا بعزل خارجي مستمر (رشاش بولي يوريثان أو ألواح XPS). كل تصميم نعرضه في هذا الموقع يتضمّن طبقة العزل — وهذا غير قابل للنقاش عندنا.",
                    "Thermal mass cuts both ways: once it heats up, it takes days to cool. In the Gulf climate a dome only works with continuous external insulation (sprayed polyurethane or XPS boards). Every design on this site includes the insulation layer — that is non-negotiable for us."
                  )}
                </p>
              </div>
            </Reveal>
            <Reveal>
              <div className="rounded-xl border border-border bg-card p-7">
                <h3 className="font-display mb-4 text-lg font-bold">{t("روابط خارجية للمهتمّين", "External references")}</h3>
                <ul className="space-y-3 text-sm">
                  {LINKS.map((l) => (
                    <li key={l.url}>
                      <a
                        href={l.url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-primary hover:underline"
                      >
                        <ExternalLink className="h-4 w-4 shrink-0" /> {t(l.label, l.labelEn)}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </aside>
      </div>

      <Reveal className="pb-8 pt-4">
        <Link to="/designs" className="pill-btn">
          {t("اكتشف التصاميم", "Explore the designs")} {isAr ? <ArrowLeft className="h-4 w-4" /> : <ArrowRight className="h-4 w-4" />}
        </Link>
      </Reveal>
    </div>
  );
}
