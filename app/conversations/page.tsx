const conversations = [
  {
    title: "Botanical Form & Archive",
    category: "Curatorial Research",
  },

  {
    title: "Cultivation as Authorship",
    category: "Institutional Dialogue",
  },

  {
    title: "Material Presence in Botanical Practice",
    category: "Editorial Conversation",
  },

  {
    title: "Private Installation & Spatial Silence",
    category: "Collector Study",
  },
];

export default function ConversationsPage() {
  return (
    <main className="museumProjectPage room-conversations">

      <div className="museumInstitutionBar">

        <div className="museumInstitutionBarLeft">
          <span>
            MAISON BOTANIQUE ARCHIVE
          </span>

          <span className="museumInstitutionDot" />

          <span>
            CONVERSATIONS
          </span>

          <span className="museumInstitutionDot" />

          <span>
            MBA-CV
          </span>
        </div>

        <div className="museumInstitutionBarRight">
          Institutional Dialogue
        </div>

      </div>

      <section className="museumProjectHero">

        <div className="museumCollectionHeader">
          <p className="museumEyebrow">
            CONVERSATIONS
          </p>

          <span className="museumCollectionCode">
            MBA-CV
          </span>
        </div>

        <h1>
          Conversations
          <br />
          & Research
        </h1>

        <p className="museumProjectLead">
          Curatorial dialogue,
          editorial exchange,
          institutional research,
          and spatial studies.
        </p>

      </section>

      <section className="museumExhibitionList">

        {conversations.map((item) => (
          <article
            key={item.title}
            className="museumExhibitionItem"
          >

            <div className="museumExhibitionYear">
              MBA
            </div>

            <div className="museumExhibitionMain">

              <h2>
                {item.title}
              </h2>

              <p className="museumExhibitionType">
                {item.category}
              </p>

            </div>

          </article>
        ))}

      </section>

    </main>
  );
}
