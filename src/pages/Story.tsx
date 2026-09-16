import { useState } from "react";
import { Link } from "react-router";
import Reveal from "@/components/Reveal";
import Seo from "@/components/Seo";
import { STORY_GALLERY } from "@/data";
import { useT } from "@/providers/lang";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Play } from "lucide-react";

export default function Story() {
  const [photo, setPhoto] = useState<number | null>(null);
  const t = useT();
  const isAr = t("a", "") === "a";

  const PRINCIPLES: [string, string][] = [
    [t("التراث إجابة، لا زخرفة", "Heritage is an answer, not an ornament"), t("القبة في ثقافتنا حلّ مناخي قبل أن تكون شكلاً.", "In our culture the dome is a climate solution before it is a shape.")],
    [t("الهندسة هي الهيكل", "Geometry is the structure"), t("الشكل الصحيح يقلّل المادة، لا يجمّلها فقط.", "The right form reduces material — it doesn't just decorate it.")],
    [t("المعماري يبني بيديه", "The architect builds with their own hands"), t("لا نصمّم ما لا نعرف تنفيذه.", "We don't design what we don't know how to build.")],
    [t("النموذج الصغير قبل الكبير", "The small model before the big one"), t("نكسر الجبس في الورشة كي لا تنكسر الخرسانة في الموقع.", "We break plaster in the workshop so concrete doesn't break on site.")],
    [t("حرفة محلية + أدوات رقمية", "Local craft + digital tools"), t("طابعة ثلاثية الأبعاد بجانب مكبس طين.", "A 3D printer next to a clay press.")],
    [t("صدق المواد", "Honesty of materials"), t("الطوب يظهر كطوب، والخرسانة كخرسانة.", "Brick shows as brick, and concrete as concrete.")],
    [t("البيوت تُبنى بالتسلسل", "Homes are built in sequence"), t("قبة تلو قبة، كما تنمو القرية.", "Dome after dome, the way a village grows.")],
  ];
  const NUMS = isAr ? ["١","٢","٣","٤","٥","٦","٧"] : ["1","2","3","4","5","6","7"];

  return (
    <div className="mx-auto max-w-6xl px-5">
      <Seo titleAr="القصة والحرفة" titleEn="Story & Craft" descAr="قصة رفعت ناصيف: من جناح طوب بُني يدوياً في جبال اللاذقية إلى بيت القبة في مسقط — سبعة مبادئ للبناء الذي يدوم." descEn="Refaat Nassif's story: from a hand-built brick pavilion in the Latakya mountains to Vault House in Muscat — seven principles for durable building." />
      <header className="max-w-3xl pb-4 pt-16">
        <p className="eyebrow mb-4">{t("القصة والحرفة · Story & Craft", "Story & Craft")}</p>
        <h1 className="font-display text-4xl font-bold sm:text-5xl">
          {t("قبل أن أتحدث عن القباب — بنيت واحدة بيديّ.", "Before I talked about domes — I built one with my own hands.")}
        </h1>
        <p className="mt-6 text-lg leading-9 text-muted-foreground">
          {t(
            "أنا رفعت ناصيف — شغوف بالتقاليد والثقافة، يهمني بناء بيوت تدوم. درستُ العمارة في باريس، وأعيش اليوم في مسقط.",
            "I am Refaat Nassif — passionate about tradition and culture, interested in building durable homes. I studied architecture in Paris, and I live in Muscat today."
          )}
        </p>
      </header>

      <section className="grid gap-10 py-12 lg:grid-cols-12 lg:gap-6">
        <div className="lg:col-span-7">
          <Reveal>
            <h2 className="font-display mb-5 text-2xl font-bold">{t("القصة", "The story")}</h2>
            <div className="space-y-5 leading-9 text-foreground/85">
              <p>
                {t(
                  "سنة 2018، في جبل في اللاذقية، بدأت تجربة استغرقت سنتين: قبة طوب بقطر 6 أمتار، بلا حديد في جسمها، بفريق صغير وتمويل شخصي.",
                  "In 2018, on a mountain in Latakya, I began a two-year experiment: a 6-metre brick dome with no steel in its body, built by a small crew with personal funding."
                )}
              </p>
              <p>
                {t(
                  "جرّبت طريقتين: الأولى بقوالب خشبية منحنية — بطيئة ومكلفة. والثانية بأعمدة وحلقات توجيه معدنية — أسرع وأرخص وأدق. درستُ الفارق بالأرقام: يد عاملة أقل، وقتاً أقل، خطأ أقل.",
                  "I tried two methods: curved timber formwork — slow and costly. Then guide posts and metal rings — faster, cheaper, more precise. I measured the difference: less labor, less time, less error."
                )}
              </p>
              <p>
                {t(
                  "ثم عدت إلى الحاسوب: محاكاة الشكل المعلّق (Catenary) بأدوات بارامترية، فنماذج جبسية مصبوبة، فاختبارات قشرة خرسانية في الورشة — بعضها نجح، وبعضها انكسر ليعلّمني أين ينكسر.",
                  "Then back to the computer: catenary form-finding with parametric tools, then cast plaster models, then concrete shell tests in the workshop — some succeeded, and some broke to teach me where things break."
                )}
              </p>
            </div>
          </Reveal>

          <Reveal className="mt-12">
            <h2 className="font-display mb-6 text-2xl font-bold">{t("سبعة مبادئ نعمل بها", "Seven principles we work by")}</h2>
            <ol className="space-y-4">
              {PRINCIPLES.map((p, i) => (
                <li key={p[0]} className="flex gap-4 rounded-lg border border-border bg-card p-4">
                  <span className="font-display shrink-0 text-2xl font-bold text-primary/60">{NUMS[i]}</span>
                  <div>
                    <strong className="font-display">{p[0]}</strong>
                    <span className="text-muted-foreground"> — {p[1]}</span>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>

        <aside className="lg:col-span-5">
          <div className="lg:sticky lg:top-24 space-y-5">
            <Reveal mask>
              <img
                src="/media/extra-1.jpg"
                alt={t("رفعت ناصيف في موقع جناح الطوب — المعماري يبني بيديه", "Refaat Nassif on the Brick Pavilion site — the architect builds with his own hands")}
                className="h-96 w-full rounded-xl object-cover"
              />
            </Reveal>
            <Reveal>
              <img
                src="/media/test-shell-1.jpg"
                alt={t("اختبار قشرة خرسانية مرشوشة في الورشة — shotcrete shell test", "Sprayed concrete shell test in the workshop — shotcrete shell test")}
                className="h-44 w-full rounded-xl object-cover"
              />
            </Reveal>
          </div>
        </aside>
      </section>

      {/* gallery */}
      <section className="border-t border-border py-12">
        <Reveal>
          <h2 className="font-display mb-8 text-3xl font-bold">{t("شهادة التجربة بالصور", "The experiment, in pictures")}</h2>
        </Reveal>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-5">
          {STORY_GALLERY.map((g, i) => (
            <Reveal key={g.src + i} delay={i * 60}>
              <button
                onClick={() => setPhoto(i)}
                className="group block w-full overflow-hidden rounded-lg"
              >
                <img
                  src={g.src}
                  alt={t(g.cap, g.capEn)}
                  className="h-44 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </button>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-10">
          <Link to="/designs" className="pill-btn">
            <Play className="h-4 w-4" /> {t("شاهد فيديوهات العملية في صفحة التصاميم", "Watch the process videos on the Designs page")}
          </Link>
        </Reveal>
      </section>

      <Dialog open={photo !== null} onOpenChange={() => setPhoto(null)}>
        <DialogContent className="max-w-3xl bg-background p-4" dir={isAr ? "rtl" : "ltr"}>
          {photo !== null && (
            <>
              <img
                src={STORY_GALLERY[photo].src}
                alt={t(STORY_GALLERY[photo].cap, STORY_GALLERY[photo].capEn)}
                className="max-h-[65vh] w-full rounded-lg object-contain"
              />
              <p className="p-2 text-sm leading-7 text-muted-foreground">
                {t(STORY_GALLERY[photo].cap, STORY_GALLERY[photo].capEn)}
              </p>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
