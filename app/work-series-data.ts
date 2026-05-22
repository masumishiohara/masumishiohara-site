export type WorkItem = {
  id: string;
  title: string;
  image: string;
  statement: string;
};

export type WorkSeries = {
  slug: string;
  code: string;
  title: string;
  jp: string;
  heroImage: string;
  statement: string;
  works: WorkItem[];
};

function makeWorks(
  slug: string,
  code: string,
  title: string,
  count: number,
  statement: string
): WorkItem[] {
  return Array.from({ length: count }, (_, index) => {
    const number = String(index + 1).padStart(3, "0");

    return {
      id: `${code}-${number}`,
      title:
        index === 0
          ? title
          : `${title} ${number}`,
      image: `/gallery/${slug}/${number}.jpg`,
      statement,
    };
  });
}

export const workSeries: WorkSeries[] = [
  {
    slug: "canvas-botanical-studies",
    code: "MS-CS",
    title: "Canvas Botanical Studies",
    jp: "キャンバスシート作品",
    heroImage: "/gallery/canvas-botanical-studies/001.jpg",
    statement:
      "Canvas sheet studies of cultivated fruit and botanical form.",
    works: makeWorks(
      "canvas-botanical-studies",
      "MS-CS",
      "Canvas Botanical Studies",
      47,
      "Fruit and botanical forms printed as canvas sheet studies, connecting agricultural material with pictorial surface."
    ),
  },
  {
    slug: "antique-botanical-studies",
    code: "MS-AT",
    title: "Antique Botanical Studies",
    jp: "アンティーク調作品",
    heroImage: "/gallery/antique-botanical-studies/001.jpg",
    statement:
      "Classical fruit and botanical compositions with an antique atmosphere.",
    works: makeWorks(
      "antique-botanical-studies",
      "MS-AT",
      "Antique Botanical Studies",
      7,
      "Classical fruit and botanical compositions recalling archival plates and historical botanical studies."
    ),
  },
  {
    slug: "vellum-fruit-studies",
    code: "MS-VL",
    title: "Vellum Fruit Studies",
    jp: "羊皮紙プリント作品",
    heroImage: "/gallery/vellum-fruit-studies/001.jpg",
    statement:
      "Fruit works printed with a vellum-like sensibility.",
    works: makeWorks(
      "vellum-fruit-studies",
      "MS-VL",
      "Vellum Fruit Studies",
      17,
      "Fruit works with a vellum-like surface, where the print carries memory, ritual, and cultivated time."
    ),
  },
  {
    slug: "black-ground-botanical-works",
    code: "MS-BG",
    title: "Black Ground Botanical Works",
    jp: "黒背景ボタニカル作品",
    heroImage: "/gallery/black-ground-botanical-works/001.jpg",
    statement:
      "Cultivated fruit and plant forms isolated against black ground.",
    works: makeWorks(
      "black-ground-botanical-works",
      "MS-BG",
      "Black Ground Botanical Works",
      28,
      "Cultivated fruit and plant forms isolated against black ground, emphasizing silhouette, structure, and quiet presence."
    ),
  },
  {
    slug: "growth-process",
    code: "MS-GP",
    title: "Growth Process",
    jp: "果物の生育過程",
    heroImage: "/gallery/growth-process/001.jpg",
    statement:
      "Works tracing the agricultural time of fruit.",
    works: makeWorks(
      "growth-process",
      "MS-GP",
      "Growth Process",
      4,
      "Process-based works tracing the agricultural time of fruit: growth, observation, intervention, and harvest."
    ),
  },
  {
    slug: "selection-studies",
    code: "MS-SS",
    title: "Selection Studies",
    jp: "育種と淘汰",
    heroImage: "/gallery/selection-studies/001.jpg",
    statement:
      "Works revealing the selection process of breeding.",
    works: makeWorks(
      "selection-studies",
      "MS-SS",
      "Selection Studies",
      10,
      "Works that reveal the selection process of breeding, including forms that remain, disappear, or are removed from advancement."
    ),
  },
  {
    slug: "cultivated-fruit-compositions",
    code: "MS-CF",
    title: "Cultivated Fruit Compositions",
    jp: "育種果実による作品",
    heroImage: "/gallery/cultivated-fruit-compositions/001.jpg",
    statement:
      "Compositions made from fruit cultivated and selected by Masumi Shiohara.",
    works: makeWorks(
      "cultivated-fruit-compositions",
      "MS-CF",
      "Cultivated Fruit Compositions",
      1,
      "Compositions made from fruit cultivated and selected by Masumi Shiohara, transforming agricultural practice into image."
    ),
  },
  {
    slug: "portraits-single-variety",
    code: "MS-PO",
    title: "Portraits: Single Variety",
    jp: "単一品種ポートレイト",
    heroImage: "/gallery/portraits-single-variety/001.jpg",
    statement:
      "Portraits composed from a single fruit variety.",
    works: makeWorks(
      "portraits-single-variety",
      "MS-PO",
      "Portraits: Single Variety",
      17,
      "Portraits composed from a single fruit variety, treating cultivated form as identity, figure, and presence."
    ),
  },
  {
    slug: "portraits-composite-forms",
    code: "MS-PC",
    title: "Portraits: Composite Forms",
    jp: "組み合わせポートレイト",
    heroImage: "/gallery/portraits-composite-forms/001.jpg",
    statement:
      "Composite fruit portraits where multiple cultivated forms become one presence.",
    works: makeWorks(
      "portraits-composite-forms",
      "MS-PC",
      "Portraits: Composite Forms",
      17,
      "Composite fruit portraits where multiple cultivated forms become one constructed presence."
    ),
  },
  {
    slug: "color-object-works",
    code: "MS-CO",
    title: "Color Object Works",
    jp: "カラーオブジェクト",
    heroImage: "/gallery/color-object-works/001.jpg",
    statement:
      "Color object works made from fruit forms.",
    works: makeWorks(
      "color-object-works",
      "MS-CO",
      "Color Object Works",
      8,
      "Color object works made from fruit forms, moving between photography, sculpture, and cultivated material."
    ),
  },
  {
    slug: "monochrome-object-works",
    code: "MS-MO",
    title: "Monochrome Object Works",
    jp: "モノクロオブジェクト",
    heroImage: "/gallery/monochrome-object-works/001.jpg",
    statement:
      "Monochrome object works emphasizing form, shadow, and density.",
    works: makeWorks(
      "monochrome-object-works",
      "MS-MO",
      "Monochrome Object Works",
      18,
      "Monochrome object works emphasizing form, shadow, density, and the sculptural presence of fruit."
    ),
  },
  {
    slug: "improvisations-of-a-fruit-breeder",
    code: "MS-IF",
    title: "Improvisations of a Fruit Breeder",
    jp: "果物農家の即興",
    heroImage: "/gallery/improvisations-of-a-fruit-breeder/001.jpg",
    statement:
      "Improvised forms arising from breeding, selection, accident, and the eye of a fruit grower.",
    works: makeWorks(
      "improvisations-of-a-fruit-breeder",
      "MS-IF",
      "Improvisations of a Fruit Breeder",
      10,
      "Improvised forms arising from breeding, selection, accident, and the eye of a fruit grower."
    ),
  },
];
