const exhibitions = [
  {
    year: "2026",
    title: "Karuizawa Photo Fest",
    type: "Exhibition",
  },
  {
    year: "2025",
    title: "Photoville",
    type: "Exhibition",
  },
  {
    year: "2025",
    title: "Arte Laguna Prize",
    type: "Exhibition",
  },
  {
    year: "2025",
    title: "KEW Gardens",
    type: "Outdoor Installation",
  },
  {
    year: "2025",
    title: "Fujingaho",
    type: "Publication",
  },
];

export default function ExhibitionsPage() {
  return (
    <main className="museumProjectPage room-exhibitions">
      <section className="museumProjectHero">
        <p className="museumEyebrow">EXHIBITIONS</p>

        <h1>
          Exhibitions
          <br />
          & Publications
        </h1>

        <p className="museumProjectLead">
          Selected exhibitions, publications, and presentations related to
          Masumi Shiohara’s cultivated fruit works.
        </p>
      </section>

      <section className="museumExhibitionList">
        {exhibitions.map((item) => (
          <article key={item.title} className="museumExhibitionItem">
            <div className="museumExhibitionYear">{item.year}</div>

            <div className="museumExhibitionMain">
              <h2>{item.title}</h2>
              <p className="museumExhibitionType">{item.type}</p>
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
