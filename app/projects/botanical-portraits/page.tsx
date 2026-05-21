const works = [
  {
    id: "MS-FP-001",
    image: "/botanical.jpg",
    title: "Fruit Portrait I",
    latin: "Pyrus communis",
    medium: "Archival pigment print",
    year: "2026",
  },
  {
    id: "MS-FP-002",
    image: "/vellum.jpg",
    title: "Fruit Portrait II",
    latin: "Prunus persica",
    medium: "Archival pigment print",
    year: "2026",
  },
  {
    id: "MS-FP-003",
    image: "/hero.jpg",
    title: "Cultivated Form",
    latin: "Vitis vinifera",
    medium: "Archival pigment print",
    year: "2026",
  },
  {
    id: "MS-FP-004",
    image: "/sculptural.jpg",
    title: "Object Form",
    latin: "Malus domestica",
    medium: "Canvas print object",
    year: "2026",
  },
];

export default function WorksPage() {
  return (
    <main className="museumProjectPage room-bp">
      <section className="museumProjectHero">
        <p className="museumEyebrow">WORKS</p>

        <h1>
          Fruit
          <br />
          Portraits
        </h1>

        <p className="museumProjectLead">
          Works by Masumi Shiohara. Cultivated fruit presented as photographic
          form, object, archive, and evidence of orchard time.
        </p>
      </section>

      <section className="museumArtworkGrid">
        {works.map((work) => (
          <article className="museumArtworkCard" key={work.id}>
            <div className="workImageFrame">
              <img src={work.image} alt={work.title} />
            </div>

            <div className="museumArtworkMeta">
              <p className="museumLatin">{work.latin}</p>

              <h2>{work.title}</h2>

              <div className="workMetaLine">
                <span>{work.id}</span>
                <span>{work.year}</span>
                <span>{work.medium}</span>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="museumNextRoom">
        <p>ABOUT</p>
        <a href="/about">Masumi Shiohara</a>
      </section>
    </main>
  );
}
