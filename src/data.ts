export type MaterialTile = {
  id: string;
  name: string;
  nameEn: string;
  tag?: string;
  tagEn?: string;
  image: string;
  alt: string;
  simple: string;
  simpleEn: string;
  keyNumber: string;
  keyNumberEn: string;
  extra?: { title: string; titleEn: string; lines: string[]; linesEn: string[] };
  honest: string;
  honestEn: string;
  link: { label: string; labelEn: string; url: string };
};

export const MATERIALS: MaterialTile[] = [
  {
    id: "shotcrete",
    name: "الخرسانة المرشوشة (الشوتكريت)",
    nameEn: "Shotcrete (Sprayed Concrete)",
    tag: "⭐ اختيارنا الأول",
    tagEn: "⭐ Our first choice",
    image: "/media/test-shell-1.jpg",
    alt: "مقاطع قشرة خرسانية مختبرة في الورشة — shotcrete shell test pieces",
    simple:
      "خرسانة تُرشّ بالضغط على شبكة حديد تتبع شكل القبة — مثل الرش بالطلاء، لكن بالخرسانة. لا قوالب خشبية معقدة، والطبقة تلتصق بالحديد مباشرة وتصبح جسم القبة كله.",
    simpleEn:
      "Concrete sprayed under pressure onto a rebar mesh that follows the dome's shape — like spray-painting, but with concrete. No complex timber formwork; the layer bonds straight onto the steel and becomes the entire shell.",
    keyNumber:
      "القشرة بسمك 7.5–15 سم تُنجَز بطبقتين في يوم عمل واحد تقريباً لكل 100 م²، بفريق 6–9 أشخاص.",
    keyNumberEn:
      "A 7.5–15 cm shell is completed in roughly two layers per day per 100 m², with a crew of 6–9.",
    extra: {
      title: "نوعان",
      titleEn: "Two types",
      lines: [
        "الخليط الرطب (Wet-mix): أسرع، غبار أقل، فقد ارتداد 5–15% — الأفضل للقباب الكبيرة.",
        "الخليط الجاف (الجونايت): تحكّم أدقّ في التفاصيل، فقد ارتداد 15–30% — الأفضل للأشكال الصغيرة والإصلاحات.",
      ],
      linesEn: [
        "Wet-mix: faster, less dust, 5–15% rebound loss — best for large domes.",
        "Dry-mix (gunite): finer control on details, 15–30% rebound — best for small shapes and repairs.",
      ],
    },
    honest:
      "يحتاج «رشّاشاً» (nozzleman) ماهراً ومعدات ضغط — ليست طريقة «افعلها بنفسك». لكن النتيجة قشرة متصلة بلا فواصل، عمرها يتجاوز 50 سنة.",
    honestEn:
      "It needs a skilled nozzleman and pressure equipment — not a DIY method. But the result is a seamless monolithic shell with a 50+ year life.",
    link: { label: "دليل ACI 506R للخرسانة المرشوشة + monolithic.org", labelEn: "ACI 506R Guide to Shotcrete + monolithic.org", url: "https://www.monolithic.org" },
  },
  {
    id: "monolithic",
    name: "القبة المونوليثية (الفقاعة الهوائية)",
    nameEn: "Monolithic Dome (Airform)",
    image: "/media/test-shell-2.jpg",
    alt: "اختبار قشرة خرسانية منحنية — monolithic dome shell",
    simple:
      "تُنفخ «بالونة» من قماش PVC بشكل القبة، يُرشّ داخلها عزل بولي يوريثان، ثم يُثبَّت الحديد، ثم تُرشّ الخرسانة من الداخل. البالونة تبقى كغشاء حماية خارجي، والعزل مدمج في الجدار من اليوم الأول.",
    simpleEn:
      "A PVC 'balloon' is inflated in the dome shape; polyurethane foam is sprayed inside it, then rebar fixed, then concrete sprayed from within. The balloon stays as the outer membrane, and insulation is built into the wall from day one.",
    keyNumber: "عزل R-30 إلى R-60 مدمج — الأعلى بين كل الأنظمة، وقشرة تُنجَز في 2–4 أسابيع.",
    keyNumberEn: "Built-in R-30 to R-60 insulation — the highest of all systems; shell done in 2–4 weeks.",
    honest:
      "أعلى تكلفة أولية (القشرة وحدها 165–330 ريال/م² بحسب السوق الأمريكي/الأوروبي)، وتحتاج مقاولاً متخصصاً وكهرباء مستمرة أثناء البناء.",
    honestEn:
      "Highest upfront cost (shell alone OMR 165–330/m² on US/EU benchmarks), and needs a specialist contractor plus continuous power during construction.",
    link: { label: "monolithic.org — المعاهدة الأمريكية، المرجع العالمي", labelEn: "monolithic.org — the Monolithic Dome Institute, world reference", url: "https://www.monolithic.org" },
  },
  {
    id: "brick",
    name: "الطوب التقليدي (طريقتنا في جناح الطوب)",
    nameEn: "Traditional Brick (our Brick Pavilion method)",
    image: "/media/interior-herringbone.jpg",
    alt: "نسيج الطوب المتعرج هيرينغبون داخل القبة — herringbone brick dome interior",
    simple:
      "طوبة فوق طوبة بمسار حلزوني أو متعرّج، وكل صفّ يثبت نفسه فوق سابقه بالانضغاط. أقدم طريقة في العالم — وأثبتنا بأنفسنا أنها تعمل اليوم: 5000 طوبة، 100 م² سطح، فريق 9–16 شخصاً، 4–6 أسابيع للقشرة.",
    simpleEn:
      "Brick over brick in a spiral or herringbone path, each course locking itself onto the last in pure compression. The oldest method on earth — and we proved it still works today: 5,000 bricks, 100 m² of surface, a crew of 9–16, 4–6 weeks for the shell.",
    keyNumber: "كلفة المواد 17–46 ريال/م² (بتحويل تقريبي) — والطوب متوفر محلياً في كل الخليج.",
    keyNumberEn: "Material cost OMR 17–46/m² (converted) — and brick is available locally across the Gulf.",
    honest:
      "الأبطأ والأكثر احتياجاً للحرفيين المهرة، وحدّها العملي 10–15 متراً قطراً. وتحتاج عزلاً خارجياً مستقلاً في مناخنا.",
    honestEn:
      "The slowest and most skill-hungry method, with a practical span limit of 10–15 m. In our climate it needs a separate external insulation layer.",
    link: { label: "block.arch.ethz.ch — مجموعة بلوك، ETH زيورخ", labelEn: "block.arch.ethz.ch — Block Research Group, ETH Zurich", url: "https://block.arch.ethz.ch" },
  },
  {
    id: "ceb",
    name: "الطوب الترابي المضغوط (CEB)",
    nameEn: "Compressed Earth Block (CEB)",
    image: "/media/model-3.jpg",
    alt: "قطع طوب ترابي مضغوط مرقمة — compressed earth block pieces",
    simple:
      "تراب أرضك + 6–10% أسمنت، يُكبس في مكبس ويصبح طوباً بلا فرن ولا حرق. الأقل كلفة والأقل بصمة كربونية — والأفضل حرارياً للصحارى.",
    simpleEn:
      "Your plot's soil + 6–10% cement, pressed in a machine into blocks — no kiln, no firing. The cheapest and lowest-carbon option, and the best thermally for deserts.",
    keyNumber:
      "كلفة المادة قد تنخفض إلى 2–4 ريالات/م² إذا كان التراب من موقع البناء نفسه؛ 1100 طوبة تكفي 100 م² جدار بسماكة 25 سم.",
    keyNumberEn:
      "Material cost can drop to OMR 2–4/m² if the soil comes from the site itself; 1,100 blocks cover 100 m² of 25 cm wall.",
    honest:
      "ممتاز للجدران والأقبية النوبية، لكنه ليس الأفضل لقبة نصف كروية كاملة بلا تسليح. ومقاومته للماء ضعيفة إذا قلّت نسبة الأسمنت — يحتاج لياسة حماية.",
    honestEn:
      "Excellent for walls and Nubian vaults, but not ideal for a full hemispherical unreinforced dome. Water resistance is weak at low cement ratios — it needs protective render.",
    link: { label: "eartharchitecture.org + معهد كال-إيرث", labelEn: "eartharchitecture.org + Cal-Earth Institute", url: "https://www.eartharchitecture.org" },
  },
  {
    id: "precast",
    name: "القطع المسبقة الصبّ (نظامنا التجريبي)",
    nameEn: "Precast Modular Shell (our R&D system)",
    tag: "قيد التطوير",
    tagEn: "In development",
    image: "/media/model-2.jpg",
    alt: "قشرة مجمعة من قطع مرقمة مسبقة الصب — precast modular shell, numbered precast pieces",
    simple:
      "بدل أن نبني الشكل في الموقع، نفكّكه إلى قطعة واحدة مكررة. نطبع القطعة الأم بطابعة ثلاثية الأبعاد، نصنع منها قالباً قابلاً لإعادة الاستعمال، ونصبّ منه مئات القطع المرقّمة — ثم تُركّب في الموقع كالأحجية، وتقف بالانضغاط وحده.",
    simpleEn:
      "Instead of building the shape on site, we break it down into one repeating component. The master piece is 3D-printed, a reusable mold is made from it, and hundreds of numbered pieces are cast — then assembled on site like a puzzle, standing by compression alone.",
    keyNumber: "قالب واحد يُستخدم مئات المرات؛ النفايات تبقى في المصنع لا في الموقع.",
    keyNumberEn: "One mold reused hundreds of times; waste stays in the factory, not on site.",
    honest:
      "نظام قيد التطوير — جرّبناه بنماذج مصغّرة ناجحة (شاهد الفيديو)، ولم يُبنَ به مبنى كامل بعد. نعرضه بصدق كاتجاه بحثي، لا كمنتج جاهز.",
    honestEn:
      "A system in development — proven in successful scale models (see the video), but no full building yet. We present it honestly as research, not a shelf product.",
    link: { label: "أبحاث Striatus للمباني المطبوعة — block.arch.ethz.ch", labelEn: "Striatus 3D-printed masonry research — block.arch.ethz.ch", url: "https://block.arch.ethz.ch" },
  },
  {
    id: "superadobe",
    name: "أكياس التراب (سوبر أدوبي)",
    nameEn: "SuperAdobe (Earthbags)",
    image: "/media/superadobe.jpg",
    alt: "قباب ترابية صحراوية — superadobe earthbag domes",
    simple:
      "أكياس تُملأ بتراب الموقع وتُرصّ بشكل لولبي صاعد، مع سلك شائك بين الصفوف. طريقة طورها معهد كال-إيرث من العمارة الصحراوية الإيرانية — مجربة في أجواء 49°C شبيهة بأجوائنا.",
    simpleEn:
      "Bags filled with site soil and coiled upward in a spiral, with barbed wire between courses. Developed by Cal-Earth from Iranian desert architecture — proven in 49°C climates similar to ours.",
    keyNumber: "الأرخص إجمالاً إذا توفرت الأيدي العاملة؛ مقاومة زلزالية موثقة حتى 7.2 درجات.",
    keyNumberEn: "Cheapest overall where labor is available; documented seismic resistance up to 7.2 magnitude.",
    honest:
      "بطيئة وكثيفة العمالة، وتحتاج لياسة إتقان ضد أمطار الخليج المفاجئة. رائعة للمساكن الريفية والتجريبية.",
    honestEn:
      "Slow and labor-intensive, and needs skilled rendering against the Gulf's sudden rains. Great for rural and experimental housing.",
    link: { label: "calearth.org — معهد كال-إيرث", labelEn: "calearth.org — Cal-Earth Institute", url: "https://www.calearth.org" },
  },
];

export const COMPARISON_ROWS = [
  { ar: ["شوتكريت", "متوسطة", "سريع", "فني متخصص", "يُضاف خارجياً", "بيوت دائمة"],
    en: ["Shotcrete", "Medium", "Fast", "Specialist crew", "Added externally", "Permanent homes"] },
  { ar: ["مونوليثي", "الأعلى", "سريع", "مقاول مرخّص", "مدمج (الأفضل)", "مقاومة الكوارث"],
    en: ["Monolithic", "Highest", "Fast", "Licensed contractor", "Built-in (best)", "Disaster resistance"] },
  { ar: ["طوب تقليدي", "متوسطة", "بطيء", "حرفي خبير", "يُضاف خارجياً", "الطابع التراثي"],
    en: ["Traditional brick", "Medium", "Slow", "Master masons", "Added externally", "Heritage character"] },
  { ar: ["CEB", "الأدنى", "متوسط", "فريق مدرب", "بالكتلة", "الميزانية المحدودة"],
    en: ["CEB", "Lowest", "Medium", "Trained team", "Thermal mass", "Tight budgets"] },
  { ar: ["قطع مسبقة", "متوسطة", "سريع بالموقع", "مصنع صغير", "يُضاف", "التكرار والمنتجعات"],
    en: ["Precast pieces", "Medium", "Fast on site", "Small factory", "Added", "Repetition & resorts"] },
  { ar: ["سوبر أدوبي", "الأدنى", "بطيء", "تدريب بسيط", "بالكتلة", "الريف والتجريب"],
    en: ["SuperAdobe", "Lowest", "Slow", "Basic training", "Thermal mass", "Rural & experimental"] },
];

export type Typology = {
  name: string;
  nameEn: string;
  en: string;
  ref: string;
  desc: string;
  descEn: string;
  plus: string;
  plusEn: string;
  minus: string;
  minusEn: string;
  image: string;
};

export const TYPOLOGIES: Typology[] = [
  {
    name: "القبة الواحدة",
    nameEn: "Single Dome",
    en: "Single Dome",
    ref: "George Paul",
    desc: "قبة واحدة فوق مساحة مفتوحة. أبسط الحلول وأسرعها — مثالية لبيت أول أو استوديو أو مجلس.",
    descEn: "One dome over an open plan. The simplest and fastest solution — ideal for a first home, studio, or majlis.",
    plus: "أقل تكلفة وأسرع بناء.",
    plusEn: "Lowest cost and fastest build.",
    minus: "توزيع الغرف داخل فراغ دائري يحتاج أثاثاً مدروساً.",
    minusEn: "Room layout inside a circular space needs considered furniture.",
    image: "/media/typo-single.jpg",
  },
  {
    name: "القباب المتكررة المنتظمة",
    nameEn: "Repeated Uniform Domes",
    en: "Repeated Uniform Domes",
    ref: "Steve Areen",
    desc: "قبة لكل غرفة — كخلايا نحل. كل فرد في العائلة له فضاؤه، والقباب تتشارك الجدران.",
    descEn: "One dome per room — like honeycomb cells. Every family member gets their own space, and domes share walls.",
    plus: "خصوصية كاملة وتوسّع مستقبلي سهل (أضف قبة، تضيف غرفة).",
    plusEn: "Full privacy and easy future expansion (add a dome, add a room).",
    minus: "نقاط التقاء القباب تحتاج تفصيلاً دقيقاً ضد الماء.",
    minusEn: "Dome junctions need careful waterproof detailing.",
    image: "/media/typo-uniform.jpg",
  },
  {
    name: "قباب متكررة بأحجام مختلفة",
    nameEn: "Repeated Varied Domes",
    en: "Repeated Varied Domes",
    ref: "Toresten Kremser",
    desc: "قبة كبيرة للمعيشة، متوسطة للنوم، صغيرة للحمّامات — الحجم يتبع الوظيفة.",
    descEn: "A large dome for living, medium for sleeping, small for bathrooms — size follows function.",
    plus: "أجمل توازن بين الشكل والاستعمال اليومي.",
    plusEn: "The finest balance of form and daily use.",
    minus: "كل حجم يحتاج حسابه الإنشائي الخاص.",
    minusEn: "Each size needs its own structural calculation.",
    image: "/media/typo-varied.jpg",
  },
  {
    name: "عنقود القباب المتصلة",
    nameEn: "Connected Dome Cluster",
    en: "Connected Dome Cluster",
    ref: "Wojciech Sergiel",
    desc: "قباب تتقاطع وتنفتح على بعضها — بيت يتدفق كالمغارة، بلا أروقة مهدورة.",
    descEn: "Domes that intersect and open into each other — a home that flows like a cave, with no wasted corridors.",
    plus: "أغنى تجربة فراغية وأفضل توزيع للمساحات.",
    plusEn: "The richest spatial experience and the best area distribution.",
    minus: "الأعقد تنفيذاً — نوصي به للمشاريع الثانية، لا الأولى.",
    minusEn: "The most complex to build — we recommend it for second projects, not first ones.",
    image: "/media/typo-cluster.jpg",
  },
];

export const PAVILION_GALLERY = [
  { src: "/media/hero-day.jpg", cap: "القبة من الخارج — قشرة واحدة متصلة، بلا كمرة ولا عمود.", capEn: "The dome from outside — one continuous shell, no beams, no columns." },
  { src: "/media/hero-night.jpg", cap: "ليلاً — الشكل نفسه يكفي، لا تحتاج زخرفة.", capEn: "At night — the form itself is enough; no ornament needed." },
  { src: "/media/dome-context.jpg", cap: "من بين الأشجار — القبة تنتمي للمكان لأن مادتها من المكان.", capEn: "Among the trees — the dome belongs to the place because its material is of the place." },
  { src: "/media/interior-herringbone.jpg", cap: "من الداخل — نسيج الطوب المتعرّج (هيرينغبون) هو الهيكل والديكور معاً.", capEn: "Inside — the herringbone brick weave is structure and decoration at once." },
  { src: "/media/construction-1.jpg", cap: "مرحلة البناء — كل صفّ طوب يثبت نفسه فوق الذي قبله.", capEn: "Construction — each brick course locks itself onto the one before." },
  { src: "/media/construction-2.jpg", cap: "فريق صغير — أربعة أيدٍ كافية حين تكون الهندسة صحيحة.", capEn: "A small crew — four hands are enough when the geometry is right." },
  { src: "/media/human-scale.jpg", cap: "المقياس الحقيقي — مساحة تجلس فيها، لا نموذج في فيترينة.", capEn: "The real scale — a space you sit in, not a model in a vitrine." },
  { src: "/media/extra-2.jpg", cap: "الواجهة الأمامية — الأقواس تفتح القشرة على المشهد، فلا تحتاج نافذة واحدة مربعة.", capEn: "The front façade — arches open the shell to the view; not a single square window needed." },
  { src: "/media/pavilion-kid.jpg", cap: "تحت القوس الكبير — مقياس إنسان، لا مقياس خرائط.", capEn: "Under the great arch — measured in people, not in drawings." },
  { src: "/media/pavilion-build-1.jpg", cap: "القشرة ترتفع فوق الشدّة — صفّ فوق صفّ، بلا تسليح.", capEn: "The shell rising over the centering — course upon course, unreinforced." },
  { src: "/media/pavilion-build-2.jpg", cap: "حرفي يضع طوبة عند حافة القوس — الدقة هنا هي الهندسة كلها.", capEn: "A craftsman setting a brick at the arch edge — precision here is the whole engineering." },
  { src: "/media/pavilion-trees.jpg", cap: "القبة من بين الغصون — تُرى كما تُرى الصخر، جزءاً من الجبل.", capEn: "The dome through the branches — seen as the rock is seen, part of the mountain." },
  { src: "/media/construction-3.jpg", cap: "فوق الشدة الخشبية — القالب الذي رسم القوس قبل أن يقف الطوب وحده.", capEn: "On the timber centering — the form that drew the arch before the brick stood alone." },
];

export const STORY_GALLERY = [
  { src: "/media/model-paper.jpg", cap: "قشرة ورقية فوق دعامات خشبية — هكذا تبدأ كل فكرة قبل أن تصبح خرسانة.", capEn: "A paper shell over timber supports — this is how every idea begins before it becomes concrete." },
  { src: "/media/model-4.jpg", cap: "كل شكل مهما تعقّد يتفكّك إلى قطعة واحدة مكررة — هنا بدأ بحث القطع المسبقة.", capEn: "Any shape, however complex, breaks down into one repeating piece — this is where the precast research began." },
  { src: "/media/test-shell-2.jpg", cap: "قشرة الخرسانة التجريبية في الورشة — تقف بعد إزالة الدعامات، بانضغاط محض، بلا مسمار.", capEn: "The test concrete shell in the workshop — standing after the supports come out, in pure compression, not a single nail." },
  { src: "/media/test-shell-3.jpg", cap: "نموذج انكسر في الاختبار — هذه الصورة أثمن من صور النجاح؛ هكذا نعرف الحدود الحقيقية.", capEn: "A model that failed the test — this photo is worth more than the success shots; this is how we learn the real limits." },
  { src: "/media/model-5.jpg", cap: "قبة النموذج المشرّحة — هكذا نشرح الفكرة قبل أن نبنيها.", capEn: "The sectioned model dome — this is how we explain the idea before we build it." },
];

export const VIDEOS = [
  {
    id: "precast",
    src: "/media/video-precast.mp4",
    youtube: "pbnw3y6A7FI",
    youtubeShort: true,
    title: "قالب واحد، بناء لا نهائي",
    titleEn: "One Mold, Infinite Structure",
    poster: "/media/poster-visit.jpg",
    caption:
      "من قالب واحد، بناء لا نهائي. بدل أن نبني الشكل بقوالب مستمرة، فكّكنا القشرة إلى قطعة واحدة مكررة. كل قطعة تبدأ كأصل مطبوع ثلاثي الأبعاد، يُصبّ منه قالب يُعاد استعماله عشرات المرات. القطع تُرقَّم وتُصبّ خارج الموقع في ظروف مضبوطة، ثم تُركّب على دعامات مؤقتة وتثبت بقوتها الذاتية. حين تكتمل الهندسة، تُنزع الدعامات — ويقف البناء وحده، بانضغاط محض. لا نقل قوالب إلى الموقع. لا فريق إضافي للشدّات. النفايات تبقى في المصنع. والمعالجة في بيئة مضبوطة تعني قوة كاملة للمادة — فيتحوّل الشكل المنحني المعقّد إلى بناء أسرع وأقل كلفة وأدقّ تكراراً.",
    captionEn:
      "One mold, endless construction. Instead of building the shape with continuous formwork, we broke the shell down into one repeating component. Each piece begins as a 3D-printed master; from it a mold is cast and reused dozens of times. The pieces are numbered and cast off-site in controlled conditions, then assembled on temporary supports where they hold by their own strength. When the geometry closes, the supports come away — and the structure stands alone, in pure compression. No formwork hauled to site. No extra shuttering crew. Waste stays in the factory. And controlled-environment curing means full material strength — turning a complex curved shape into faster, cheaper, more precisely repeatable construction.",
  },
  {
    id: "v2",
    src: "/media/video-2.mp4",
    youtube: "aE9y8uuGDyA",
    youtubeShort: true,
    title: "قطعة قطعة: بناء قبو ذاتي الاستناد",
    titleEn: "Piece by Piece: Building a Self-Standing Vault",
    poster: "/media/poster-v2.jpg",
    caption: "مرحلة من مراحل العمل على النماذج المصغّرة في الورشة — نختبر بالحجم الصغير قبل أن نبني بالحجم الكامل.",
    captionEn: "One stage of our workshop scale-model work — we test small before we build full size.",
  },
  {
    id: "v3",
    src: "/media/video-3.mp4",
    youtube: "B2SqJwmAMqE",
    youtubeShort: true,
    title: "تجميع القطع المرقّمة",
    titleEn: "Assembling the numbered pieces",
    poster: "/media/poster-v3.jpg",
    caption: "القطع المرقّمة تُركّب قطعة فوق قطعة — الهندسة تحوّل البناء إلى تجميع.",
    captionEn: "Numbered precast pieces assembled one by one — geometry turns building into assembly.",
  },
  {
    id: "v4",
    src: "/media/video-4.mp4",
    youtube: "NYZPTKi_KQg",
    youtubeShort: true,
    title: "لقطة من الموقع",
    titleEn: "A moment from the site",
    poster: "/media/construction-3.jpg",
    caption: "من أرشيف موقع جناح الطوب — البناء اليدوي طوبة فوق طوبة.",
    captionEn: "From the Brick Pavilion site archive — hand-built, brick over brick.",
  },
  {
    id: "v6",
    src: "/media/video-site.mp4",
    youtube: "7U4rPe0J04Y",
    title: "كل بيت يبدأ كفكرة",
    titleEn: "Every Home Starts as an Idea",
    poster: "/media/poster-precast.jpg",
    caption: "دقيقة واحدة تختصر رحلة جناح الطوب: الشدّة الخشبية، صفوف الطوب، ثم القشرة تقف وحدها.",
    captionEn: "One minute condensing the Brick Pavilion's journey: timber centering, brick courses, then the shell stands alone.",
  },
];
