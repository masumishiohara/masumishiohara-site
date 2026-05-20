export default function HomePage() {
  return (
    <main className="museumLanding">
      <section className="museumLandingHero">
        <p className="museumLandingEyebrow">
          MAISON BOTANIQUE ARCHIVE
        </p>

        <h1>
          A Private Museum
          <br />
          of Cultivated Forms
        </h1>

        <p className="museumLandingLead">
          Cultivation, botanical portrait,
          archive, object, and material presence.
        </p>

        <div className="museumLandingManifesto">
          <p>
            Fruits are not treated here as produce,
            but as cultivated forms shaped by time,
            selection, weather, and human intervention.
          </p>
        </div>

        <a
          href="/rooms"
          className="museumEntranceButton"
        >
          Enter Exhibition Rooms
        </a>
      </section>
    </main>
  );
}
