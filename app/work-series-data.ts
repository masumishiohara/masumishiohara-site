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

const rootImages = {
  c01: "/01%20(1).jpg",
  c02: "/01%20(6).jpg",
  c03: "/01%20(19).jpg",
  c04: "/01%20(25).jpg",
  c05: "/02%20(2).jpg",
  c06: "/02%20(7).jpg",
  c07: "/02%20(20).jpg",
  c08: "/02%20(26).jpg",
  c09: "/03%20(3).jpg",
  c10: "/03%20(8).jpg",
  c11: "/03%20(21).jpg",
  c12: "/03%20(27).jpg",
  c13: "/04%20(4).jpg",
  c14: "/04%20(9).jpg",
  c15: "/04%20(22).jpg",
  c16: "/04%20(28).jpg",
  c17: "/05%20(10).jpg",
  c18: "/05%20(23).jpg",
  c19: "/06%20(11).jpg",
  c20: "/07%20(13).jpg",
  c21: "/08%20(14).jpg",
  c22: "/08.jpg",
  c23: "/09%20(15).jpg",
  c24: "/09.jpg",
  c25: "/10%20(16).jpg",
  c26: "/10.jpg",
  c27: "/11%20(17).jpg",
  c28: "/11.jpg",
  c29: "/12%20(18).jpg",
  c30: "/12.jpg",
  c31: "/13.jpg",
  c32: "/14.jpg",
  c33: "/15.jpg",
  coverA: "/cover%20(5).jpg",
  coverB: "/cover%20(12).jpg",
  coverC: "/cover%20(24).jpg",
  coverD: "/cover%20(29).jpg",
};

function makeWorks(
  code: string,
  title: string,
  images: string[],
  statement: string
): WorkItem[] {
  return images.map((image, index) => {
    const number = String(index + 1).padStart(2, "0");

    return {
      id: `${code}-${number}`,
      title: index === 0 ? title : `${title} ${number}`,
      image,
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
    heroImage: rootImages.coverD,
    statement:
      "Canvas sheet studies of cultivated fruit and botanical form.",
    works: makeWorks(
      "MS-CS",
      "Canvas Botanical Studies",
      [
        rootImages.coverD,
        rootImages.c01,
        rootImages.c02,
        rootImages.c03,
        rootImages.c04,
        rootImages.c05,
        rootImages.c06,
        rootImages.c07,
        rootImages.c08,
        rootImages.c09,
        rootImages.c10,
        rootImages.c11,
        rootImages.c12,
        rootImages.c13,
        rootImages.c14,
        rootImages.c15,
        rootImages.c16,
        rootImages.c17,
        rootImages.c18,
        rootImages.c19,
        rootImages.c20,
        rootImages.c21,
        rootImages.c22,
        rootImages.c23,
      ],
      "Fruit and botanical forms printed as canvas sheet studies, connecting agricultural material with pictorial surface."
    ),
  },
  {
    slug: "antique-botanical-studies",
    code: "MS-AT",
    title: "Antique Botanical Studies",
    jp: "アンティーク調作品",
    heroImage: rootImages.coverD,
    statement:
      "Classical fruit and botanical compositions with an antique atmosphere.",
    works: makeWorks(
      "MS-AT",
      "Antique Botanical Studies",
      [
        rootImages.coverD,
        rootImages.c12,
        rootImages.c24,
        rootImages.c30,
        rootImages.c33,
        rootImages.c04,
      ],
      "Classical fruit and botanical compositions recalling archival plates and historical botanical studies."
    ),
  },
  {
    slug: "vellum-fruit-studies",
    code: "MS-VL",
    title: "Vellum Fruit Studies",
    jp: "羊皮紙プリント作品",
    heroImage: rootImages.coverB,
    statement:
      "Fruit works printed with a vellum-like sensibility.",
    works: makeWorks(
      "MS-VL",
      "Vellum Fruit Studies",
      [
        rootImages.coverB,
        rootImages.c01,
        rootImages.c05,
        rootImages.c09,
        rootImages.c13,
        rootImages.c21,
        rootImages.c22,
        rootImages.c23,
        rootImages.c24,
      ],
      "Fruit works with a vellum-like surface, where the print carries memory, ritual, and cultivated time."
    ),
  },
  {
    slug: "black-ground-botanical-works",
    code: "MS-BG",
    title: "Black Ground Botanical Works",
    jp: "黒背景ボタニカル作品",
    heroImage: rootImages.c17,
    statement:
      "Cultivated fruit and plant forms isolated against black ground.",
    works: makeWorks(
      "MS-BG",
      "Black Ground Botanical Works",
      [
        rootImages.c17,
        rootImages.c18,
        rootImages.c19,
        rootImages.c20,
        rootImages.c23,
        rootImages.c25,
        rootImages.c27,
        rootImages.coverC,
      ],
      "Cultivated fruit and plant forms isolated against black ground, emphasizing silhouette, structure, and quiet presence."
    ),
  },
  {
    slug: "growth-process",
    code: "MS-GP",
    title: "Growth Process",
    jp: "果物の生育過程",
    heroImage: rootImages.c31,
    statement:
      "Works tracing the agricultural time of fruit.",
    works: makeWorks(
      "MS-GP",
      "Growth Process",
      [
        rootImages.c31,
        rootImages.c32,
        rootImages.c15,
        rootImages.c16,
      ],
      "Process-based works tracing the agricultural time of fruit: growth, observation, intervention, and harvest."
    ),
  },
  {
    slug: "selection-studies",
    code: "MS-SS",
    title: "Selection Studies",
    jp: "育種と淘汰",
    heroImage: rootImages.c25,
    statement:
      "Works revealing the selection process of breeding.",
    works: makeWorks(
      "MS-SS",
      "Selection Studies",
      [
        rootImages.c25,
        rootImages.c26,
        rootImages.c27,
        rootImages.c28,
        rootImages.c29,
        rootImages.c30,
      ],
      "Works that reveal the selection process of breeding, including forms that remain, disappear, or are removed from advancement."
    ),
  },
  {
    slug: "cultivated-fruit-compositions",
    code: "MS-CF",
    title: "Cultivated Fruit Compositions",
    jp: "育種果実による作品",
    heroImage: rootImages.c11,
    statement:
      "Compositions made from fruit cultivated and selected by Masumi Shiohara.",
    works: makeWorks(
      "MS-CF",
      "Cultivated Fruit Compositions",
      [
        rootImages.c11,
        rootImages.c12,
        rootImages.c13,
        rootImages.c14,
        rootImages.c15,
      ],
      "Compositions made from fruit cultivated and selected by Masumi Shiohara, transforming agricultural practice into image."
    ),
  },
  {
    slug: "portraits-single-variety",
    code: "MS-PO",
    title: "Portraits: Single Variety",
    jp: "単一品種ポートレイト",
    heroImage: rootImages.coverA,
    statement:
      "Portraits composed from a single fruit variety.",
    works: makeWorks(
      "MS-PO",
      "Portraits: Single Variety",
      [
        rootImages.coverA,
        rootImages.c08,
        rootImages.c21,
        rootImages.c22,
        rootImages.c23,
      ],
      "Portraits composed from a single fruit variety, treating cultivated form as identity, figure, and presence."
    ),
  },
  {
    slug: "portraits-composite-forms",
    code: "MS-PC",
    title: "Portraits: Composite Forms",
    jp: "組み合わせポートレイト",
    heroImage: rootImages.coverC,
    statement:
      "Composite fruit portraits where multiple cultivated forms become one presence.",
    works: makeWorks(
      "MS-PC",
      "Portraits: Composite Forms",
      [
        rootImages.coverC,
        rootImages.c33,
        rootImages.c31,
        rootImages.c32,
      ],
      "Composite fruit portraits where multiple cultivated forms become one constructed presence."
    ),
  },
  {
    slug: "color-object-works",
    code: "MS-CO",
    title: "Color Object Works",
    jp: "カラーオブジェクト",
    heroImage: rootImages.c24,
    statement:
      "Color object works made from fruit forms.",
    works: makeWorks(
      "MS-CO",
      "Color Object Works",
      [
        rootImages.c24,
        rootImages.c26,
        rootImages.c28,
        rootImages.c30,
        rootImages.c31,
      ],
      "Color object works made from fruit forms, moving between photography, sculpture, and cultivated material."
    ),
  },
  {
    slug: "monochrome-object-works",
    code: "MS-MO",
    title: "Monochrome Object Works",
    jp: "モノクロオブジェクト",
    heroImage: rootImages.c04,
    statement:
      "Monochrome object works emphasizing form, shadow, and density.",
    works: makeWorks(
      "MS-MO",
      "Monochrome Object Works",
      [
        rootImages.c04,
        rootImages.c08,
        rootImages.c18,
        rootImages.coverC,
      ],
      "Monochrome object works emphasizing form, shadow, density, and the sculptural presence of fruit."
    ),
  },
  {
    slug: "improvisations-of-a-fruit-breeder",
    code: "MS-IF",
    title: "Improvisations of a Fruit Breeder",
    jp: "果物農家の即興",
    heroImage: rootImages.c33,
    statement:
      "Improvised forms arising from breeding, selection, accident, and the eye of a fruit grower.",
    works: makeWorks(
      "MS-IF",
      "Improvisations of a Fruit Breeder",
      [
        rootImages.c33,
        rootImages.c19,
        rootImages.c20,
        rootImages.c25,
        rootImages.c27,
        rootImages.c31,
      ],
      "Improvised forms arising from breeding, selection, accident, and the eye of a fruit grower."
    ),
  },
];
