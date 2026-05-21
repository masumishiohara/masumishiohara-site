const exhibitions = [
  {
    year: "2026",
    title: "Karuizawa Photo Fest",
    type: "Exhibition",
    note: "Presentation of cultivated fruit works by Masumi Shiohara.",
  },
  {
    year: "2025",
    title: "Photoville",
    type: "Exhibition",
    note: "International presentation of fruit-based photographic works.",
  },
  {
    year: "2025",
    title: "Arte Laguna Prize",
    type: "Exhibition",
    note: "Exhibited at the Arsenale as part of an international art context.",
  },
  {
    year: "2025",
    title: "KEW Gardens",
    type: "Outdoor Installation",
    note: "Botanical and fruit-form work presented in an institutional garden setting.",
  },
  {
    year: "2025",
    title: "Fujingaho",
    type: "Publication",
    note: "Editorial feature introducing the relationship between cultivation and art practice.",
  },
];

export default function ExhibitionsPage() {
  return (
    <main className="museumProjectPage room-exhibitions">
      <section className="museumProjectHero">
        <div className="museumCollectionHeader">
          <p className="museumEyebrow">EXHIBITIONS</p>
          <span className="museumCollectionCode">MS-EX</span>
        </div>

        <h1>
          Exhibitions
          <br />
          & Publications
        </h1>

        <p className="museumProjectLead">
          Selected exhibitions, publications, and institutional presentations
          related to the work of Masumi Shiohara.
        </p>
      </section>

      <section className="museumExhibitionList">
        {exhibitions.map((item) => (
          <article key={item.title} className="museumExhibitionItem">
            <div className="museumExhibitionYear">{item.year}</div>

            <div className="museumExhibitionMain">
              <h2>{item.title}</h2>
              <p className="museumExhibitionType">{item.type}</p>
              <p className="museumExhibitionNote">{item.note}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="museumNextRoom">
        <p>VIEW</p>
        <a href="/projects/botanical-portraits">Works</a>
      </section>
    </main>
  );
}
