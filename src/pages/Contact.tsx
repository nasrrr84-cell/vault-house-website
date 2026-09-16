import Reveal from "@/components/Reveal";
import Seo from "@/components/Seo";
import { LeadForm } from "@/components/LeadForm";
import { useT } from "@/providers/lang";
import { Mail, Phone, Youtube, MapPin } from "lucide-react";

export default function Contact() {
  const t = useT();

  return (
    <div className="mx-auto max-w-6xl px-5">
      <Seo titleAr="تواصل معنا" titleEn="Contact" descAr="تواصل مع بيت القبة في مسقط: استشارة أولية مجانية عن بيت قبة أو مشروع سياحي بيئي في عُمان." descEn="Contact Vault House in Muscat: a free first consultation about a dome home or eco-tourism project in Oman." />
      <header className="max-w-3xl pb-4 pt-16">
        <p className="eyebrow mb-4">{t("تواصل · Contact", "Contact")}</p>
        <h1 className="font-display text-4xl font-bold sm:text-5xl">
          {t("الحديث يبدأ من هنا.", "The conversation starts here.")}
        </h1>
        <p className="mt-5 text-lg leading-9 text-muted-foreground">
          {t(
            "سواء كنت صاحب أرض يفكر في بيته، أو مطوراً يدرس مشروعاً سياحياً بيئياً، أو مؤسسة تبحث عن حلول بناء مستدامة ضمن رؤية عُمان 2030.",
            "Whether you are a landowner thinking about your home, a developer studying an eco-tourism project, or an institution looking for sustainable construction solutions within Oman Vision 2030."
          )}
        </p>
      </header>

      <div className="grid gap-10 py-10 lg:grid-cols-12 lg:gap-6">
        <section className="lg:col-span-7">
          <Reveal>
            <div className="rounded-xl border border-border bg-card p-7">
              <h2 className="font-display mb-6 text-2xl font-bold">
                {t("نموذج التواصل وتحميل الكتيّب", "Contact form & booklet download")}
              </h2>
              <p className="mb-6 text-sm leading-7 text-muted-foreground">
                {t(
                  "«بيت القبة — الفكرة، الأرقام، والتجربة» — 20 صفحة مجانية تلخّص كل ما في الموقع + 8 صفحات من كتاب المشروع الأصلي. اختر «تحميل الكتيّب المجاني» في خانة الاهتمام ويظهر لك الرابط فور الإرسال.",
                  "'Vault House — the idea, the numbers, the experience' — 20 free pages summarising everything on this site plus 8 pages from the original project book. Choose 'Free booklet download' in the interest field and the link appears right after you submit."
                )}
              </p>
              <LeadForm defaultInterest="booklet" />
            </div>
          </Reveal>
        </section>

        <aside className="lg:col-span-5">
          <div className="space-y-5 lg:sticky lg:top-24">
            <Reveal>
              <div className="rounded-xl border border-border bg-card p-7">
                <h3 className="font-display mb-5 text-xl font-bold">{t("التواصل المباشر", "Direct contact")}</h3>
                <ul className="space-y-4 text-sm">
                  <li className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <a href="mailto:info@vaulthouse.om" className="hover:text-primary" dir="ltr">
                      info@vaulthouse.om
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <a href="https://wa.me/96891352723" target="_blank" rel="noreferrer" className="hover:text-primary" dir="ltr">
                      +968 9135 2723
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <Youtube className="h-5 w-5 text-primary" />
                    <a
                      href="https://www.youtube.com/@refaatnassif"
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-primary"
                    >
                      {t("قناة رفعت ناصيف — فيديوهات البناء والنماذج", "Refaat Nassif's channel — build & model videos")}
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    {t("مسقط، سلطنة عُمان", "Muscat, Sultanate of Oman")}
                  </li>
                </ul>
              </div>
            </Reveal>
            <Reveal>
              <div className="rounded-xl bg-secondary p-7">
                <h3 className="font-display mb-3 text-xl font-bold">
                  {t("للمؤسسات والجهات الحكومية", "For institutions & government bodies")}
                </h3>
                <p className="text-sm leading-8 text-foreground/80">
                  {t(
                    "نقدّم دراسات جدوى تصميمية، وورش عمل للمهندسين والحرفيين، ونماذج أولية (Pilot) بمقاييس صغيرة قابلة للقياس — من جناح حديقة إلى مجمع قباب سياحي.",
                    "We offer design feasibility studies, workshops for engineers and craftsmen, and measurable small-scale pilot projects — from a garden pavilion to a tourist dome resort."
                  )}
                </p>
              </div>
            </Reveal>
            <Reveal mask>
              <img
                src="/media/extra-2.jpg"
                alt={t("قبة بيت القبة — البناء المستدام في سلطنة عُمان", "Vault House dome — sustainable building in the Sultanate of Oman")}
                className="h-52 w-full rounded-xl object-cover"
              />
            </Reveal>
          </div>
        </aside>
      </div>
    </div>
  );
}
