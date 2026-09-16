import { useState } from "react";
import Reveal from "@/components/Reveal";
import Seo from "@/components/Seo";
import { GatedPdfDialog } from "@/components/LeadForm";
import { MATERIALS, COMPARISON_ROWS, type MaterialTile } from "@/data";
import { useT } from "@/providers/lang";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { BadgeCheck, ExternalLink, Hand, XCircle } from "lucide-react";

export default function Materials() {
  const [tile, setTile] = useState<MaterialTile | null>(null);
  const t = useT();
  const isAr = t("a", "") === "a";

  const KILLERS = [
    { t: t("الجسور الحرارية المعدنية", "Metal thermal bridges"), d: t("هيكل معدني يخترق الجدار يقطع كفاءة العزل 50–80%.", "A metal frame piercing the wall cuts insulation performance by 50–80%.") },
    { t: t("فواصل الألواح", "Board joints"), d: t("ألواح العزل المركّبة بفجوات تسرّب الحرارة كالنافذة المفتوحة.", "Insulation boards fitted with gaps leak heat like an open window.") },
    { t: t("القبة العارية", "The bare dome"), d: t("أي قبة بلا طبقة عزل خارجية مستمرة في الخليج = فرن. القاعدة عندنا: العزل خارج القشرة، دائماً، وبلا انقطاع.", "Any dome without continuous external insulation in the Gulf = an oven. Our rule: insulation outside the shell, always, without interruption.") },
  ];

  return (
    <div className="mx-auto max-w-6xl px-5">
      <Seo titleAr="المواد" titleEn="Materials" descAr="مواد البناء في بيوت القبة: الطوب، الخرسانة، التربة — مقارنة بالخصائص الحرارية والكلفة والتوفر المحلي في عُمان." descEn="Dome home materials: brick, concrete, earth — compared by thermal performance, cost, and local availability in Oman." />
      <header className="max-w-3xl pb-4 pt-16">
        <p className="eyebrow mb-4">{t("المواد وطرق البناء · Materials & Systems", "Materials & Construction Systems")}</p>
        <h1 className="font-display text-4xl font-bold sm:text-5xl">
          {t(
            "لا توجد «أفضل مادة» — توجد أفضل مادة لمشروعك، وميزانيتك، ومهارة فريقك.",
            "There is no 'best material' — only the best material for your project, your budget, and your crew's skill."
          )}
        </h1>
        <p className="mt-5 text-lg leading-9 text-muted-foreground">
          {t(
            "إليك ست طرق حقيقية لبناء قبة، بأرقامها وعيوبها، واختيارنا الشخصي في النهاية.",
            "Here are six real ways to build a dome, with their numbers and drawbacks — and our personal pick at the end."
          )}
        </p>
      </header>

      {/* interactive grid */}
      <section className="py-10">
        <Reveal>
          <p className="mb-6 flex items-center gap-2 text-sm font-bold text-primary">
            <Hand className="h-4 w-4" /> {t("اضغط على أي بلاطة وتعلّم في دقيقة", "Tap any tile and learn in a minute")}
          </p>
        </Reveal>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {MATERIALS.map((m, i) => (
            <Reveal key={m.id} delay={i * 70}>
              <button
                onClick={() => setTile(m)}
                className={`card-lift relative block w-full overflow-hidden rounded-xl border ${isAr ? "text-right" : "text-left"} ${
                  m.id === "shotcrete" ? "border-primary/60 bg-primary/5" : "border-border bg-card"
                }`}
              >
                <div className="relative">
                  <img src={m.image} alt={m.alt} className="h-48 w-full object-cover" />
                  {m.tag && (
                    <span className={`absolute top-3 ${isAr ? "right-3" : "left-3"} rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground`}>
                      {t(m.tag, m.tagEn ?? m.tag)}
                    </span>
                  )}
                </div>
                <div className="p-5">
                  <h3 className="font-display text-xl font-bold leading-snug">{t(m.name, m.nameEn)}</h3>
                  <p className="mt-2 line-clamp-2 text-sm leading-7 text-muted-foreground">{t(m.simple, m.simpleEn)}</p>
                  <span className="mt-3 inline-block text-xs font-bold text-primary">
                    {t("اضغط للتفاصيل ←", "Tap for details →")}
                  </span>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </section>

      {/* comparison table */}
      <section className="border-t border-border py-14">
        <Reveal>
          <h2 className="font-display mb-8 text-3xl font-bold">{t("جدول المقارنة السريع", "Quick comparison table")}</h2>
          <div className="prose-table overflow-x-auto rounded-xl border border-border bg-card">
            <table>
              <thead>
                <tr>
                  {(isAr
                    ? ["الطريقة", "كلفة القشرة/م²", "السرعة", "المهارة المطلوبة", "العزل المدمج", "الأنسب لـ"]
                    : ["System", "Shell cost/m²", "Speed", "Skill required", "Insulation", "Best for"]
                  ).map((h) => (
                    <th key={h}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {COMPARISON_ROWS.map((r) => {
                  const row = isAr ? r.ar : r.en;
                  return (
                    <tr key={row[0]}>
                      {row.map((c, j) => (
                        <td key={j} className={j === 0 ? "font-bold" : ""}>{c}</td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </Reveal>
      </section>

      {/* insulation killers */}
      <section className="border-t border-border py-14">
        <Reveal>
          <h2 className="font-display mb-3 text-3xl font-bold">{t("ما الذي قد يفسد العزل؟", "What can ruin the insulation?")}</h2>
          <p className="mb-8 text-muted-foreground">{t("ثلاثة أخطاء شائعة يجب تفاديها — رأيناها في السوق:", "Three common mistakes to avoid — ones we have seen in the market:")}</p>
        </Reveal>
        <div className="grid gap-5 md:grid-cols-3">
          {KILLERS.map((k, i) => (
            <Reveal key={k.t} delay={i * 100}>
              <div className="card-lift h-full rounded-xl border border-border bg-card p-6">
                <div className="mb-3 flex items-center gap-3">
                  <XCircle className="h-6 w-6 text-primary" />
                  <h3 className="font-display text-lg font-bold">{k.t}</h3>
                </div>
                <p className="text-sm leading-8 text-foreground/80">{k.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-8">
          <GatedPdfDialog
            pdf="/media/construction-data-sheet.pdf"
            titleAr="ورقة مقارنة المواد والتكاليف"
            titleEn="Materials & Cost Comparison Sheet"
            blurbAr="مقارنة المواد بالأرقام: الخصائص الحرارية والكلفة والتوفر المحلي. اترك اسمك وبريدك ويظهر رابط التحميل فوراً."
            blurbEn="Materials compared in numbers: thermal performance, cost and local availability. Leave your name and email and the download link appears instantly."
            trigger={<span className="pill-btn inline-flex items-center gap-2">{t("تحميل «ورقة مقارنة المواد والتكاليف» PDF", "Download the Materials & Cost Comparison Sheet PDF")}</span>}
          />
        </Reveal>
      </section>

      {/* tile dialog */}
      <Dialog open={!!tile} onOpenChange={() => setTile(null)}>
        <DialogContent className="max-w-xl bg-background" dir={isAr ? "rtl" : "ltr"}>
          {tile && (
            <>
              <DialogHeader>
                <DialogTitle className="font-display text-2xl font-bold leading-snug">
                  {t(tile.name, tile.nameEn)}
                  {tile.tag && (
                    <span className={`${isAr ? "mr-3" : "ml-3"} rounded-full bg-primary px-3 py-1 align-middle text-xs font-bold text-primary-foreground`}>
                      {t(tile.tag, tile.tagEn ?? tile.tag)}
                    </span>
                  )}
                </DialogTitle>
              </DialogHeader>
              <img src={tile.image} alt={tile.alt} className="h-60 w-full rounded-lg object-cover" />
              <div className="space-y-4 text-sm leading-8">
                <p className="text-foreground/85">{t(tile.simple, tile.simpleEn)}</p>
                <p className="rounded-lg bg-secondary p-4">
                  <strong className="text-primary">{t("رقم رئيسي: ", "Key number: ")}</strong>
                  {t(tile.keyNumber, tile.keyNumberEn)}
                </p>
                {tile.extra && (
                  <div className="rounded-lg border border-border p-4">
                    <strong>{t(tile.extra.title, tile.extra.titleEn)}:</strong>
                    <ul className={`mt-2 list-disc space-y-2 ${isAr ? "pr-5" : "pl-5"}`}>
                      {(isAr ? tile.extra.lines : tile.extra.linesEn).map((l, i) => (
                        <li key={i}>{l}</li>
                      ))}
                    </ul>
                  </div>
                )}
                <p className={`border-primary ${isAr ? "border-r-2 pr-4" : "border-l-2 pl-4"} text-foreground/75`}>
                  <strong>{t("نقطة صدق: ", "An honest point: ")}</strong>
                  {t(tile.honest, tile.honestEn)}
                </p>
                <a
                  href={tile.link.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 font-bold text-primary hover:underline"
                >
                  <ExternalLink className="h-4 w-4" /> {t("للتعمّق:", "Go deeper:")} {t(tile.link.label, tile.link.labelEn)}
                </a>
                {tile.id === "shotcrete" && (
                  <p className="flex items-start gap-2 rounded-lg bg-primary/10 p-4 text-foreground/85">
                    <BadgeCheck className="mt-1 h-5 w-5 shrink-0 text-primary" />
                    {t(
                      "لماذا اخترناها أولاً؟ لأنها الوحيدة التي تجمع السرعة، والقشرة المتصلة بلا فواصل، وتوفر المقاولين في الخليج — وقد اختبرنا قشرتها بأيدينا في الورشة.",
                      "Why is it our first choice? Because it alone combines speed, a seamless monolithic shell, and available contractors in the Gulf — and we have tested its shell with our own hands in the workshop."
                    )}
                  </p>
                )}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
