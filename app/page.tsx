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

        <section className="museumEditorialQuote">
          <p className="museumEditorialLabel">
            CURATORIAL POSITION
          </p>

          <blockquote>
            “The archive does not document agriculture.
            It transforms cultivation into cultural form.”
          </blockquote>
        </section>

        <a
          href="/rooms"
          className="museumEntranceButton"
        >
          Enter Exhibition Rooms
        </a>

        <div className="museumPrivateViewing">
          <span>
            Private Viewing Available
          </span>
        </div>

        <div className="museumAppointmentNote">
          <p>
            Private appointments, curatorial presentations,
            and installation studies may be arranged upon request.
          </p>
        </div>
      </section>

      <section className="museumInstitutionalEvidence">
        <div>
          <p className="museumEditorialLabel">
            INSTITUTIONAL PRESENCE
          </p>

          <h2>
            Exhibition, publication,
            cultivation, and archive
            are treated here
            as a single practice.
          </h2>
        </div>

        <div>
          <p>
            The archive is developed through agricultural production,
            breeding, botanical study, object construction,
            and exhibition research.
          </p>
        </div>
      </section>
    </main>
  );
}
