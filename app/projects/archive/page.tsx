export default function ArchivePage() {
  return (
    <main className="museumProjectPage">
      <section className="museumProjectHero">
        <p className="museumEyebrow">
          ROOM IV
        </p>

        <h1>
          Archive
        </h1>

        <p className="museumProjectLead">
          Breeding records, agricultural memory,
          vanished cultivars, tools of cultivation,
          and the archive of time.
        </p>
      </section>

      <section className="museumArchiveStatement">
        <div>
          <h2>
            Cultivated Memory
          </h2>

          <p>
            The archive contains not only successful forms,
            but also selections removed from advancement,
            damaged objects, agricultural tools,
            experimental structures, and traces of labor.
          </p>
        </div>

        <div>
          <p>
            These records are presented not as nostalgia,
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
