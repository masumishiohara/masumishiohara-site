export default function HomePage() {
  return (
    <main className="museumLanding">
      <section className="museumLandingHero">
        <p className="museumLandingEyebrow">MAISON BOTANIQUE ARCHIVE</p>

        <h1>
          A Private Museum
          <br />
          of Cultivated Forms
        </h1>

        <p className="museumLandingLead">
          Cultivation, botanical portrait, archive, object, and material presence.
        </p>

        <div className="museumLandingManifesto">
          <p>
            Fruits are not treated here as produce, but as cultivated forms
            shaped by time, selection, weather, and human intervention.
          </p>
        </div>

        <section className="museumEditorialQuote">
          <p className="museumEditorialLabel">POETIC BOTANY</p>

          <blockquote>
            “A botanical homage becomes magnificent when cultivation, form,
            patience, and light are held in a single image.”
          </blockquote>
        </section>

        <a href="/rooms" className="museumEntranceButton">
          Enter Exhibition Rooms
        </a>
      </section>

      <section className="museumInstitutionalEvidence">
        <div>
          <p className="museumEditorialLabel">INSTITUTIONAL PRESENCE</p>

          <h2>
            Exhibition, publication, cultivation, and archive are treated here as
            a single practice.
          </h2>
        </div>

        <div>
          <p>
            The archive develops a visual language where nature is not merely
            observed, but cultivated, selected, composed, and transformed into
            cultural form.
          </p>
        </div>
      </section>

      <section className="museumLandingDirectory">
        <a href="/rooms">Exhibition Rooms</a>
        <a href="/space">Installation Studies</a>
        <a href="/exhibitions">Exhibitions & Publications</a>
        <a href="/publications">Publications</a>
        <a href="/conversations">Conversations</a>
        <a href="/about">About the Archive</a>
        <a href="/private-preview">Private Preview</a>
        <a href="/contact">Institutional Contact</a>
      </section>

      <section className="museumEditorialFooter">
        <p className="museumEditorialLabel">
          CULTIVATED FORM / BOTANICAL HOMAGE / MATERIAL / OBJECT
        </p>

        <p className="museumEditorialStatement">
          The archive exists between agriculture, image, object, poetry, and
          exhibition.
        </p>
      </section>
    </main>
  );
}
