const series = [
  {
    id: "MS-CS",
    title: "Canvas Botanical Studies",
    jp: "キャンバスシート作品",
    image: "/series/canvas-sheet.jpg",
    statement:
      "Fruit and botanical forms printed as canvas sheet studies, connecting agricultural material with pictorial surface.",
  },
  {
    id: "MS-AT",
    title: "Antique Botanical Studies",
    jp: "アンティーク調作品",
    image: "/series/antique-botanical.jpg",
    statement:
      "Classical fruit and botanical compositions with an antique atmosphere, recalling archival plates and historical botanical studies.",
  },
  {
    id: "MS-VL",
    title: "Vellum Fruit Studies",
    jp: "羊皮紙プリント作品",
    image: "/series/parchment-vellum.jpg",
    statement:
      "Fruit works printed with a vellum-like sensibility, where the surface carries memory, ritual, and cultivated time.",
  },
  {
    id: "MS-BG",
    title: "Black Ground Botanical Works",
    jp: "黒背景ボタニカル作品",
    image: "/series/black-ground-botanical.jpg",
    statement:
      "Cultivated fruit and plant forms isolated against black ground, emphasizing silhouette, structure, and quiet presence.",
  },
  {
    id: "MS-GP",
    title: "Growth Process",
    jp: "果物の生育過程",
    image: "/series/growth-process.jpg",
    statement:
      "Process-based works tracing the agricultural time of fruit: growth, observation, intervention, and harvest.",
  },
  {
    id: "MS-SS",
    title: "Selection Studies",
    jp: "育種と淘汰",
    image: "/series/selection-study.jpg",
    statement:
      "Works that reveal the selection process of breeding, including forms that remain, disappear, or are removed from advancement.",
  },
  {
    id: "MS-CF",
    title: "Cultivated Fruit Compositions",
    jp: "育種果実による作品",
    image: "/series/cultivated-fruit-composition.jpg",
    statement:
      "Compositions made from fruit cultivated and selected by Masumi Shiohara, transforming agricultural practice into image.",
  },
  {
    id: "MS-PO",
    title: "Portraits: Single Variety",
    jp: "単一品種ポートレイト",
    image: "/series/portrait-single-variety.jpg",
    statement:
      "Portraits composed from a single fruit variety, treating cultivated form as identity, figure, and presence.",
  },
  {
    id: "MS-PC",
    title: "Portraits: Composite Forms",
    jp: "組み合わせポートレイト",
    image: "/series/portrait-composition.jpg",
    statement:
      "Composite fruit portraits where multiple cultivated forms become one constructed presence.",
  },
  {
    id: "MS-CO",
    title: "Color Object Works",
    jp: "カラーオブジェクト",
    image: "/series/color-object.jpg",
    statement:
      "Color object works made from fruit forms, moving between photography, sculpture, and cultivated material.",
  },
  {
    id: "MS-MO",
    title: "Monochrome Object Works",
    jp: "モノクロオブジェクト",
    image: "/series/monochrome-object.jpg",
    statement:
      "Monochrome object works emphasizing form, shadow, density, and the sculptural presence of fruit.",
  },
  {
    id: "MS-IF",
    title: "Improvisations of a Fruit Breeder",
    jp: "果物農家の即興",
    image: "/series/improvisation-object-series.jpg",
    statement:
      "Improvised forms arising from breeding, selection, accident, and the eye of a fruit grower.",
  },
];

export default function WorksPage() {
  return (
    <main className="museumProjectPage room-bp">
      <section className="museumProjectHero">
        <p className="museumEyebrow">WORKS</p>

        <h1>
          Masumi
          <br />
          Shiohara Works
        </h1>

        <p className="museumProjectLead">
          Twelve bodies of work formed through cultivation, breeding, orchard
          time, photography, object making, and fruit as artistic material.
        </p>
      </section>

      <section className="seriesGrid">
        {series.map((item) => (
          <article className="seriesCard" key={item.id}>
            <a href="/private-gallery">
              <div className="seriesImage">
                <img src={item.image} alt={item.title} />
              </div>

              <div className="seriesMeta">
                <span>{item.id}</span>
                <h2>{item.title}</h2>
                <p className="seriesJp">{item.jp}</p>
                <p>{item.statement}</p>
              </div>
            </a>
          </article>
        ))}
      </section>

      <section className="privateGalleryEntrance">
        <p className="museumEyebrow">PRIVATE VIEWING</p>

        <h2>
          Selected works may be viewed as framed objects in a private gallery
          environment, with frame, mat, brass plate, and room studies.
        </h2>

        <a href="/private-gallery">Enter Private Gallery</a>
      </section>

      <section className="museumNextRoom">
        <p>ABOUT</p>
        <a href="/about">Masumi Shiohara</a>
      </section>
    </main>
  );
}
