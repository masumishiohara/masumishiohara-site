export default function FramingStudyPage() {
  return (
    <main className="museumProjectPage room-framing">
      <section className="museumProjectHero">
        <div className="museumCollectionHeader">
          <p className="museumEyebrow">FRAMING ATELIER</p>
          <span className="museumCollectionCode">MBA-FA</span>
        </div>

        <h1>
          Framing
          <br />
          Atelier
        </h1>

        <p className="museumProjectLead">
          A study of frames, mats, scale, material presence, and exhibition
          atmosphere for cultivated fruit works.
        </p>
      </section>

      <section className="museumArchiveStatement">
        <div>
          <h2>
            Framing is treated not as decoration,
            but as an extension of the work’s presence.
          </h2>
        </div>

        <div>
          <p>
            Each frame study considers scale, margin, material, light,
            architectural distance, and the quiet dignity of the object.
          </p>
        </div>
      </section>

      <section className="museumNextRoom">
        <p>RETURN</p>
        <a href="/rooms">Exhibition Rooms</a>
      </section>
    </main>
  );
}
