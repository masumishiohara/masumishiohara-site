export default function CabinetPage() {
  return (
    <main className="museumProjectPage">
      <section className="museumProjectHero">

        <div className="museumCollectionHeader">
          <p className="museumEyebrow">
            CABINET
          </p>

          <span className="museumCollectionCode">
            MBA-CB
          </span>
        </div>

        <h1>
          Cabinet
        </h1>

        <p className="museumProjectLead">
          Reserved works, future series,
          material studies, and works
          outside the main sequence.
        </p>
      </section>

      <section className="museumArchiveStatement">
        <div>
          <h2>
            Reserved Works
          </h2>

          <p>
            The cabinet contains works
            positioned outside the primary exhibition sequence.
          </p>
        </div>

        <div>
          <p>
            These rooms preserve
            experimental structures,
            future directions,
            and material investigations.
          </p>
        </div>
      </section>

      <section className="museumNextRoom">
        <p>
          RETURN
        </p>

        <a href="/rooms">
          Exhibition Rooms
        </a>
      </section>
    </main>
  );
}
