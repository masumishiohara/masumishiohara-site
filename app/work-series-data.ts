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

const publicImages = {
  archive: "/archive.jpg",
  botanical: "/botanical.jpg",
  growth: "/growth.jpg",
  hero: "/hero.jpg",
  sculptural: "/sculptural.jpg",
  vellum: "/vellum.jpg",
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
    heroImage: publicImages.botanical,
    statement: "Canvas sheet studies of cultivated fruit and botanical form.",
    works: makeWorks("MS-CS", "Canvas Botanical Studies", [
      publicImages.botanical,
      publicImages.vellum,
      publicImages.growth,
      publicImages.hero,
      publicImages.sculptural,
      publicImages.archive,
    ], "Fruit and botanical forms printed as canvas sheet studies, connecting agricultural material with pictorial surface."),
  },
  {
    slug: "antique-botanical-studies",
    code: "MS-AT",
    title: "Antique Botanical Studies",
    jp: "アンティーク調作品",
    heroImage: publicImages.archive,
    statement: "Classical fruit and botanical compositions with an antique atmosphere.",
    works: makeWorks("MS-AT", "Antique Botanical Studies", [
      publicImages.archive,
      publicImages.botanical,
      publicImages.vellum,
      publicImages.growth,
      publicImages.sculptural,
      publicImages.hero,
    ], "Classical fruit and botanical compositions recalling archival plates and historical botanical studies."),
  },
  {
    slug: "vellum-fruit-studies",
    code: "MS-VL",
    title: "Vellum Fruit Studies",
    jp: "羊皮紙プリント作品",
    heroImage: publicImages.vellum,
    statement: "Fruit works printed with a vellum-like sensibility.",
    works: makeWorks("MS-VL", "Vellum Fruit Studies", [
      publicImages.vellum,
      publicImages.archive,
      publicImages.botanical,
      publicImages.growth,
      publicImages.hero,
      publicImages.sculptural,
    ], "Fruit works with a vellum-like surface, where the print carries memory, ritual, and cultivated time."),
  },
  {
    slug: "black-ground-botanical-works",
    code: "MS-BG",
    title: "Black Ground Botanical Works",
    jp: "黒背景ボタニカル作品",
    heroImage: publicImages.sculptural,
    statement: "Cultivated fruit and plant forms isolated against black ground.",
    works: makeWorks("MS-BG", "Black Ground Botanical Works", [
      publicImages.sculptural,
      publicImages.hero,
      publicImages.botanical,
      publicImages.growth,
      publicImages.archive,
      publicImages.vellum,
    ], "Cultivated fruit and plant forms isolated against black ground, emphasizing silhouette, structure, and quiet presence."),
  },
  {
    slug: "growth-process",
    code: "MS-GP",
    title: "Growth Process",
    jp: "果物の生育過程",
    heroImage: publicImages.growth,
    statement: "Works tracing the agricultural time of fruit.",
    works: makeWorks("MS-GP", "Growth Process", [
      publicImages.growth,
      publicImages.botanical,
      publicImages.vellum,
      publicImages.archive,
      publicImages.hero,
      publicImages.sculptural,
    ], "Process-based works tracing the agricultural time of fruit: growth, observation, intervention, and harvest."),
  },
  {
    slug: "selection-studies",
    code: "MS-SS",
    title: "Selection Studies",
    jp: "育種と淘汰",
    heroImage: publicImages.hero,
    statement: "Works revealing the selection process of breeding.",
    works: makeWorks("MS-SS", "Selection Studies", [
      publicImages.hero,
      publicImages.sculptural,
      publicImages.botanical,
      publicImages.archive,
      publicImages.vellum,
      publicImages.growth,
    ], "Works that reveal the selection process of breeding, including forms that remain, disappear, or are removed from advancement."),
  },
  {
    slug: "cultivated-fruit-compositions",
    code: "MS-CF",
    title: "Cultivated Fruit Compositions",
    jp: "育種果実による作品",
    heroImage: publicImages.botanical,
    statement: "Compositions made from fruit cultivated and selected by Masumi Shiohara.",
    works: makeWorks("MS-CF", "Cultivated Fruit Compositions", [
      publicImages.botanical,
      publicImages.hero,
      publicImages.sculptural,
      publicImages.vellum,
      publicImages.archive,
      publicImages.growth,
    ], "Compositions made from fruit cultivated and selected by Masumi Shiohara, transforming agricultural practice into image."),
  },
  {
    slug: "portraits-single-variety",
    code: "MS-PO",
    title: "Portraits: Single Variety",
    jp: "単一品種ポートレイト",
    heroImage: publicImages.hero,
    statement: "Portraits composed from a single fruit variety.",
    works: makeWorks("MS-PO", "Portraits: Single Variety", [
      publicImages.hero,
      publicImages.botanical,
      publicImages.vellum,
      publicImages.growth,
      publicImages.archive,
      publicImages.sculptural,
    ], "Portraits composed from a single fruit variety, treating cultivated form as identity, figure, and presence."),
  },
  {
    slug: "portraits-composite-forms",
    code: "MS-PC",
    title: "Portraits: Composite Forms",
    jp: "組み合わせポートレイト",
    heroImage: publicImages.sculptural,
    statement: "Composite fruit portraits where multiple cultivated forms become one presence.",
    works: makeWorks("MS-PC", "Portraits: Composite Forms", [
      publicImages.sculptural,
      publicImages.hero,
      publicImages.growth,
      publicImages.botanical,
      publicImages.archive,
      publicImages.vellum,
    ], "Composite fruit portraits where multiple cultivated forms become one constructed presence."),
  },
  {
    slug: "color-object-works",
    code: "MS-CO",
    title: "Color Object Works",
    jp: "カラーオブジェクト",
    heroImage: publicImages.vellum,
    statement: "Color object works made from fruit forms.",
    works: makeWorks("MS-CO", "Color Object Works", [
      publicImages.vellum,
      publicImages.hero,
      publicImages.botanical,
      publicImages.growth,
      publicImages.archive,
      publicImages.sculptural,
    ], "Color object works made from fruit forms, moving between photography, sculpture, and cultivated material."),
  },
  {
    slug: "monochrome-object-works",
    code: "MS-MO",
    title: "Monochrome Object Works",
    jp: "モノクロオブジェクト",
    heroImage: publicImages.archive,
    statement: "Monochrome object works emphasizing form, shadow, and density.",
    works: makeWorks("MS-MO", "Monochrome Object Works", [
      publicImages.archive,
      publicImages.sculptural,
      publicImages.hero,
      publicImages.botanical,
      publicImages.growth,
      publicImages.vellum,
    ], "Monochrome object works emphasizing form, shadow, density, and the sculptural presence of fruit."),
  },
  {
    slug: "improvisations-of-a-fruit-breeder",
    code: "MS-IF",
    title: "Improvisations of a Fruit Breeder",
    jp: "果物農家の即興",
    heroImage: publicImages.growth,
    statement: "Improvised forms arising from breeding, selection, accident, and the eye of a fruit grower.",
    works: makeWorks("MS-IF", "Improvisations of a Fruit Breeder", [
      publicImages.growth,
      publicImages.hero,
      publicImages.sculptural,
      publicImages.botanical,
      publicImages.vellum,
      publicImages.archive,
    ], "Improvised forms arising from breeding, selection, accident, and the eye of a fruit grower."),
  },
];
