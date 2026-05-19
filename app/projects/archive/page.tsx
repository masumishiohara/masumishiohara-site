export default function ArchivePage() {
  return (
    <main className="museumProjectPage">
      <section className="museumProjectHero">

        <div className="museumCollectionHeader">
          <p className="museumEyebrow">
            ROOM IV
          </p>

          <span className="museumCollectionCode">
            MBA-AR
          </span>
        </div>

        <h1>
          Archive
        </h1>

        <p className="museumProjectLead">
          Breeding records, agricultural memory,
          vanished cultivars, and cultivated time.
        </p>
      </section>

      <section className="museumArchiveStatement">
        <div>
          <h2>
            Cultivated Memory
          </h2>

          <p>
            The archive contains records,
            selections removed from advancement,
            experimental structures,
            and traces of cultivation.
          </p>
        </div>

        <div>
          <p>
            These records are presented
            not as nostalgia,
            but as fragments of cultivated civilization.
          </p>
        </div>
      </section>

      <section className="museumNextRoom">
        <p>
          NEXT ROOM
        </p>

        <a href="/projects/object-works">
          Object Works
        </a>
      </section>
    </main>
  );
}
