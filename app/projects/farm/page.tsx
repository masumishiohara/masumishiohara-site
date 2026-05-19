export default function FarmPage() {
  return (
    <main className="museumProjectPage room-farm">
      <section className="museumProjectHero">
        <div className="museumCollectionHeader">
          <p className="museumEyebrow">ROOM I</p>
          <span className="museumCollectionCode">MBA-FM</span>
        </div>

        <h1>Farm</h1>

        <p className="museumProjectLead">
          The origin of cultivation, labor, seasons, breeding, and the field
          from which the works emerge.
        </p>
      </section>

      <section className="museumArchiveStatement">
        <div>
          <h2>Origin of Cultivation</h2>

          <p>
            The field is not background. It is the primary site of formation.
            Cultivation, weather, labor, breeding, and agricultural time are
            inseparable from the works.
          </p>
        </div>

        <div>
          <p>
            Before the photograph, before the object, before the archive, there
            is cultivation.
          </p>
        </div>
      </section>

      <section className="museumNextRoom">
        <p>NEXT ROOM</p>

        <a href="/projects/botanical-portraits">
          Botanical Portraits
        </a>
      </section>
    </main>
  );
}
