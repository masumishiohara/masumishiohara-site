const publications = [
  {
    year: "2026",
    title: "Cultivated Forms",
    type: "Artist Publication",
  },

  {
    year: "2025",
    title: "Botanical Archive Studies",
    type: "Editorial Research",
  },

  {
    year: "2025",
    title: "Fujingaho Feature",
    type: "Editorial Publication",
  },

  {
    year: "2025",
    title: "Cultivation & Material Presence",
    type: "Institutional Text",
  },
];

export default function PublicationsPage() {
  return (
    <main className="museumProjectPage room-publications">

      <div className="museumInstitutionBar">

        <div className="museumInstitutionBarLeft">
          <span>
            MAISON BOTANIQUE ARCHIVE
          </span>

          <span className="museumInstitutionDot" />

          <span>
            PUBLICATIONS
          </span>

          <span className="museumInstitutionDot" />

          <span>
            MBA-PB
          </span>
        </div>

        <div className="museumInstitutionBarRight">
          Institutional Publications
        </div>

      </div>

      <section className="museumProjectHero">

        <div className="museumCollectionHeader">
          <p className="museumEyebrow">
            PUBLICATIONS
          </p>

          <span className="museumCollectionCode">
            MBA-PB
          </span>
        </div>

        <h1>
          Publications
          <br />
          & Editorial Works
        </h1>

        <p className="museumProjectLead">
          Artist publications,
          editorial texts,
          curatorial writing,
          and institutional research.
        </p>

      </section>

      <section className="museumExhibitionList">

        {publications.map((item) => (
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

              <p className="museumExhibitionType">
                {item.type}
              </p>

            </div>

          </article>
        ))}

      </section>

    </main>
  );
}
