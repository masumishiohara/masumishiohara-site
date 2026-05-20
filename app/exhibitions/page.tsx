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
    <main className="museumProjectPage">

      <section className="museumProjectHero">

        <div className="museumCollectionHeader">
          <p className="museumEyebrow">
            EXHIBITIONS
          </p>

          <span className="museumCollectionCode">
            MBA-EX
          </span>
        </div>

        <h1>
          Exhibitions
          <br />
          & Publications
        </h1>

        <p className="museumProjectLead">
          Selected exhibitions,
          publications,
          installations,
          and institutional presentations.
        </p>

      </section>

      <section className="museumExhibitionList">

        {exhibitions.map((item) => (
          <article
            key={item.title}
            className="museumExhibitionItem"
          >

            <div className="museumExhibitionYear">
              {item.year}
            </div>

            <div className="museumExhibitionMain">

              <h2>
                {item.title}
              </h2>

              <p>
                {item.type}
              </p>

            </div>

          </article>
        ))}

      </section>

    </main>
  );
}
