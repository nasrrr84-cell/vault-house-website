import { Link } from "react-router";
import Reveal from "@/components/Reveal";
import Seo from "@/components/Seo";
import { GatedPdfDialog } from "@/components/LeadForm";
import { useT } from "@/providers/lang";
import { Calculator } from "lucide-react";

export default function Prices() {
  const t = useT();

  const MARKET: [string, string, string][] = [
    [t("بناء فيلا تقليدية (بلوك + خرسانة مسلحة)", "Conventional villa build (block + RC)"), t("80–120 ريال/م²", "OMR 80–120/m²"), t("للهيكل والتشطيب المتوسط", "structure + mid-range finish")],
    [t("فلل جاهزة من مطورين (مثل مشاريع سرح)", "Developer-built villas (e.g. Sarh projects)"), t("تبدأ من نحو 52,000 ريال", "from ~OMR 52,000"), ""],
    [t("كيس أسمنت 20 كغ", "Cement bag 20 kg"), t("~2.4 ريال", "~OMR 2.4"), t("عُمان مصدّرة للأسمنت — ميزة لصالحنا", "Oman exports cement — an advantage for us")],
    [t("حديد التسليح", "Rebar"), t("235–250 ريال/طن", "OMR 235–250/ton"), t("مستورد ومعرّض لتقلبات السوق العالمية", "imported, exposed to global price swings")],
    [t("سوق البناء العُماني", "Oman's construction market"), t("نحو 3.68 مليار ريال (2025)", "~OMR 3.68 bn (2025)"), t("متجهاً إلى 4.4 مليار بحلول 2030", "heading to 4.4 bn by 2030")],
  ];

  const VS: [string, string, string][] = [
    [t("مدة الهيكل", "Structure duration"), t("6–10 أسابيع، فريق 15–30", "6–10 weeks, crew of 15–30"), t("2–4 أسابيع، فريق 4–8", "2–4 weeks, crew of 4–8")],
    [t("مواد الهيكل", "Structure materials"), t("خرسانة + حديد + بلوك + سقف مستقل", "concrete + rebar + block + separate roof"), t("قشرة واحدة = الجدار والسقف معاً", "one shell = wall and roof at once")],
    [t("العزل", "Insulation"), t("يُضاف فوق سقف مستوي", "added over a flat roof"), t("طبقة واحدة مستمرة بلا فواصل", "one continuous seamless layer")],
    [t("التشطيب الداخلي", "Interior finishing"), t("قياسي", "standard"), t("قياسي (تكلفة متقاربة)", "standard (comparable cost)")],
  ];

  const SHELL: [string, string, string][] = [
    [t("شوتكريت (رطب)", "Shotcrete (wet-mix)"), t("13–29 ريال", "OMR 13–29"), t("25–83 ريال", "OMR 25–83")],
    [t("شوتكريت (جاف/جونايت)", "Shotcrete (dry/gunite)"), t("12–25 ريال", "OMR 12–25"), t("23–69 ريال", "OMR 23–69")],
    [t("طوب تقليدي (قبة)", "Traditional brick (dome)"), t("17–46 ريال", "OMR 17–46"), t("58–154 ريال", "OMR 58–154")],
    ["CEB", t("6–17 ريال", "OMR 6–17"), t("31–77 ريال", "OMR 31–77")],
    [t("مونوليثي (قشرة كاملة)", "Monolithic (full shell)"), "—", t("165–331 ريال", "OMR 165–331")],
  ];

  const STATS: [string, string][] = [
    [t("أكثر من 70%", "Over 70%"), t("من كهرباء البيت الخليجي يستهلكها التكييف", "of a Gulf home's electricity goes to air conditioning")],
    ["30–50%", t("خفض حمل التبريد في قبة معزولة صحيحاً", "cooling-load reduction in a properly insulated dome")],
    [t("35–55 ر.ع/شهر", "OMR 35–55/mo"), t("بدل 60–90 ر.ع صيفاً لبيت مماثل", "instead of OMR 60–90 in summer for a similar home")],
    [t("3–6 سنوات", "3–6 years"), t("استرداد كلفة العزل — ثم توفير صافٍ مدى عمر البيت", "payback on the insulation — then pure savings for the life of the home")],
  ];

  return (
    <div className="mx-auto max-w-6xl px-5">
      <Seo titleAr="الأسعار والتكلفة" titleEn="Prices & Cost" descAr="كم يكلف بناء بيت قبة في عُمان؟ أرقام استرشادية للتكلفة، فرق العمل، ومراحل التنفيذ — بشفافية كاملة." descEn="What does a dome home cost in Oman? Indicative figures for cost, work crews, and construction stages — fully transparent." />
      <header className="max-w-3xl pb-4 pt-16">
        <p className="eyebrow mb-4">{t("الأسعار بالريال العُماني · OMR Costs 2026", "Prices in Omani Rial · OMR Costs 2026")}</p>
        <h1 className="font-display text-4xl font-bold sm:text-5xl">
          {t(
            "أسعار البناء في عُمان ليست سراً — لكن من الأفضل الاطلاع عليها.",
            "Construction prices in Oman are no secret — but they're worth reviewing."
          )}
        </h1>
        <p className="mt-5 text-lg leading-9 text-muted-foreground">
          {t("جمعناها في صفحة واحدة، وقارنّاها بطرقنا. ", "We gathered them in one page and compared them with our methods. ")}
          <em className="text-sm">
            {t("كل الأرقام استرشادية لسنة 2026 وتختلف حسب الموقع والتشطيب.", "All figures are indicative for 2026 and vary by site and finish level.")}
          </em>
        </p>
      </header>

      {/* market benchmark */}
      <section className="py-12">
        <Reveal>
          <h2 className="font-display mb-6 text-3xl font-bold">{t("1. معيار السوق العُماني", "1. The Omani market benchmark")}</h2>
          <div className="prose-table overflow-x-auto rounded-xl border border-border bg-card">
            <table>
              <tbody>
                {MARKET.map((r) => (
                  <tr key={r[0]}>
                    <td className="font-bold">{r[0]}</td>
                    <td className="tnum font-bold text-primary">{r[1]}</td>
                    <td className="text-muted-foreground">{r[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </section>

      {/* big comparison */}
      <section className="border-t border-border py-12">
        <Reveal>
          <h2 className="font-display mb-6 text-3xl font-bold">
            {t("2. المقارنة الكبيرة: قبة مقابل فيلا (بيت 150 م²)", "2. The big comparison: dome vs villa (150 m² home)")}
          </h2>
          <div className="prose-table overflow-x-auto rounded-xl border border-border bg-card">
            <table>
              <thead>
                <tr>
                  <th>{t("البند", "Item")}</th>
                  <th>{t("فيلا تقليدية", "Conventional villa")}</th>
                  <th>{t("قبة (شوتكريت/طوب)", "Dome (shotcrete/brick)")}</th>
                </tr>
              </thead>
              <tbody>
                {VS.map((r) => (
                  <tr key={r[0]}>
                    <td className="font-bold">{r[0]}</td>
                    <td>{r[1]}</td>
                    <td className="font-semibold text-primary">{r[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 rounded-lg bg-secondary p-5 leading-8">
            <strong>{t("الخلاصة الصادقة:", "The honest bottom line:")}</strong>{" "}
            {t(
              "التوفير الحقيقي في القبة هو في الهيكل والسقف (قشرة واحدة بدل جدران + كمرات + سقف) وفي فاتورة التبريد لاحقاً. التشطيب الداخلي (أبواب، كهرباء، سباكة، أرضيات) متقارب في الحالتين — من يعدك بغير ذلك يبالغ.",
              "The dome's real savings are in the structure and roof (one shell instead of walls + beams + roof) and in the cooling bill afterwards. Interior finishing (doors, electrical, plumbing, flooring) is comparable either way — anyone who promises otherwise is exaggerating."
            )}
          </p>
        </Reveal>
      </section>

      {/* cooling bill */}
      <section className="border-t border-border py-12">
        <Reveal>
          <h2 className="font-display mb-6 text-3xl font-bold">
            {t("3. فاتورة التبريد — حيث تربح القبة كل شهر", "3. The cooling bill — where the dome wins every month")}
          </h2>
        </Reveal>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal key={s[0]} delay={i * 90}>
              <div className="card-lift h-full rounded-xl border border-border bg-card p-6 text-center">
                <p className="font-display tnum text-3xl font-bold text-primary">{s[0]}</p>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{s[1]}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* shell costs */}
      <section className="border-t border-border py-12">
        <Reveal>
          <h2 className="font-display mb-2 text-3xl font-bold">
            {t("4. كلفة القشرة بالأنظمة المختلفة", "4. Shell cost by system")}
          </h2>
          <p className="mb-6 text-sm text-muted-foreground">
            {t(
              "تحويل استرشادي من ورقة البيانات — الأرقام الأمريكية/الأوروبية محوّلة بسعر تقريبي، والأسعار العُمانية عادة أدنى بسبب كلفة اليد العاملة والأسمنت المحلي.",
              "Indicative conversion from the data sheet — US/EU figures converted approximately; Omani prices are usually lower thanks to labor costs and local cement."
            )}
          </p>
          <div className="prose-table overflow-x-auto rounded-xl border border-border bg-card">
            <table>
              <thead>
                <tr>
                  <th>{t("النظام", "System")}</th>
                  <th>{t("المواد/م²", "Materials/m²")}</th>
                  <th>{t("التنفيذ الكامل/م²", "Installed/m²")}</th>
                </tr>
              </thead>
              <tbody>
                {SHELL.map((r) => (
                  <tr key={r[0]}>
                    <td className="font-bold">{r[0]}</td>
                    <td className="tnum">{r[1]}</td>
                    <td className="tnum font-semibold text-primary">{r[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            {t(
              "اطلب عرض سعر لموقعك — الأرقام تتغير بتغيّر القطر والارتفاع والتربة.",
              "Request a quote for your site — figures shift with diameter, height and soil."
            )}
          </p>
        </Reveal>
      </section>

      {/* financing */}
      <section className="border-t border-border py-12">
        <Reveal>
          <h2 className="font-display mb-6 text-3xl font-bold">{t("5. التمويل في عُمان", "5. Financing in Oman")}</h2>
          <ul className="space-y-4 leading-8">
            <li className="rounded-lg bg-card p-5 border border-border">
              {t(
                "قروض الإسكان عبر برنامج «إسكان» وبنوك التمويل العُمانية تغطي البناء الذاتي.",
                "Housing loans via the Iskan programme and Omani finance banks cover self-build."
              )}
            </li>
            <li className="rounded-lg bg-card p-5 border border-border">
              {t(
                "المناطق الاقتصادية الخاصة (مثل الدقم SEZ) سبق أن اعتمدت أساليب بناء غير تقليدية — باب مفتوح للمشاريع الرائدة.",
                "Special economic zones (like Duqm SEZ) have already approved non-conventional construction methods — an open door for pioneering projects."
              )}
            </li>
            <li className="rounded-lg bg-card p-5 border border-border">
              {t(
                "كود كفاءة الطاقة العُماني (OEESC) وتصنيف «روزنة» الأخضر يكافئان العزل العالي — القبة المعزولة تنطبق بشكل طبيعي.",
                "Oman's energy-efficiency code (OEESC) and the Roznah green rating reward high insulation — the insulated dome qualifies naturally."
              )}
            </li>
          </ul>
          <Link to="/contact" className="pill-btn mt-8">
            <Calculator className="h-4 w-4" />
            {t(
              "احسب تقريبياً — أرسل المساحة والمدينة والنظام المفضل",
              "Estimate roughly — send the area, city and preferred system"
            )}
          </Link>
        </Reveal>
      </section>

      {/* legal disclaimer + sources */}
      <section className="border-t border-border py-12">
        <Reveal>
          <div className="rounded-xl border-2 border-primary/40 bg-card p-6 sm:p-8">
            <h2 className="font-display mb-4 text-2xl font-bold">
              {t("تنبيه قانوني ومصادر الأرقام", "Legal notice & sources")}
            </h2>
            <div className="space-y-4 text-sm leading-8 text-muted-foreground">
              <p>
                {t(
                  "جميع الأرقام الواردة في هذه الصفحة استرشادية بحتة، جُمعت من مصادر سوقية عامة ومنشورات قطاع البناء، ومن «ورقة البيانات الإنشائية» الخاصة بنا. هذه الأرقام لا تُمثّل عرض أسعار من «بيت القبة»، ولا عرضاً من أي طرف ثالث، ولا تُعدّ نصيحة مالية أو استثمارية أو تقديراً ملزماً لأي مشروع.",
                  "All figures on this page are purely indicative, gathered from public market sources, construction-industry publications, and our own Construction Data Sheet. They do not represent a price quotation from Vault House or any third party, and do not constitute financial, investment, or binding estimating advice for any project."
                )}
              </p>
              <p>
                {t(
                  "الأسعار الفعلية تختلف جوهرياً حسب الموقع والتصميم والتربة والتشطيب وتقلبات السوق. قبل أي قرار مالي، يتحمّل القارئ مسؤولية التحقق من الأسعار لدى مقاولين مرخّصين ومكاتب هندسية معتمدة في سلطنة عُمان. لا تتحمّل إدارة هذا الموقع أي مسؤولية قانونية أو مالية عن أي قرار يُتخذ استناداً إلى هذه الأرقام.",
                  "Actual prices vary substantially with site, design, soil, finishes and market fluctuations. Before any financial decision, the reader bears sole responsibility for verifying prices with licensed contractors and accredited engineering offices in the Sultanate of Oman. The management of this website accepts no legal or financial liability for any decision made on the basis of these figures."
                )}
              </p>
              <p className="font-semibold text-foreground">
                {t("مصادر استرشادية:", "Indicative sources:")}
              </p>
              <ul className="list-disc space-y-2 ps-6">
                <li>
                  <GatedPdfDialog
                    pdf="/media/construction-data-sheet.pdf"
                    titleAr="ورقة البيانات الإنشائية — بيت القبة"
                    titleEn="Vault House Construction Data Sheet"
                    blurbAr="اترك اسمك وبريدك ويظهر رابط التحميل فوراً."
                    blurbEn="Leave your name and email and the download link appears instantly."
                    trigger={<span className="text-primary underline underline-offset-4">{t("ورقة البيانات الإنشائية — بيت القبة (PDF)", "Vault House Construction Data Sheet (PDF)")}</span>}
                  />
                </li>
                <li>
                  <a href="https://www.ncsi.gov.om" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4">
                    {t("المركز الوطني للإحصاء والمعلومات — سلطنة عُمان (ncsi.gov.om)", "National Centre for Statistics & Information — Oman (ncsi.gov.om)")}
                  </a>
                </li>
                <li>
                  <a href="https://www.monolithic.org" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4">
                    {t("معهد القباب المونوليثية — أدلة كلفة القشرة (monolithic.org)", "Monolithic Dome Institute — shell cost guides (monolithic.org)")}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
