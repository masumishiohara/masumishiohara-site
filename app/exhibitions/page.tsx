const exhibitions = [
  {
    year: "2026",
    title: "Karuizawa Photo Fest",
    type: "Exhibition",
    note:
      "Installation of cultivated botanical works and archival studies.",
  },

  {
    year: "2025",
    title: "Photoville",
    type: "Exhibition",
    note:
      "Botanical portrait installation and public presentation.",
  },

  {
    year: "2025",
    title: "Arte Laguna Prize",
    type: "Exhibition",
    note:
      "Cultivated form and object-oriented botanical studies.",
  },

  {
    year: "2025",
    title: "KEW Gardens",
    type: "Outdoor Installation",
    note:
      "Botanical installation research within institutional garden space.",
  },

  {
    year: "2025",
    title: "Fujingaho",
    type: "Publication",
    note:
      "Editorial feature on cultivation and botanical archive practice.",
  },
];

export default function ExhibitionsPage() {
  return (
    <main className="museumProjectPage room-exhibitions">

      <div className="museumInstitutionBar">

        <div className="museumInstitutionBarLeft">
          <span>
            MAISON BOTANIQUE ARCHIVE
          </span>

          <span className="museumInstitutionDot" />

          <span>
            EXHIBITIONS
          </span>

          <span className="museumInstitutionDot" />

          <span>
            MBA-EX
          </span>
        </div>

        <div className="museumInstitutionBarRight">
          Institutional Activity
        </div>

      </div>

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

              <p className="museumExhibitionType">
                {item.type}
              </p>

              <p className="museumExhibitionNote">
                {item.note}
              </p>

            </div>

          </article>
        ))}

      </section>

    </main>
  );
}
