export default function FarmPage() {
  return (
    <main className="museumProjectPage">
      <section className="museumProjectHero">
        <p className="museumEyebrow">ROOM I</p>

        <h1>Farm</h1>

        <p className="museumProjectLead">
          The origin of cultivation, labor, seasons, soil, breeding, and the
          field from which the works emerge.
        </p>
      </section>

      <section className="museumArchiveStatement">
        <div>
          <h2>Origin of Cultivation</h2>

          <p>
            This room presents the farm not as background, but as the primary
            site of formation. The field, the seasons, the tools, and the act of
            cultivation are inseparable from the works.
          </p>
        </div>

        <div>
          <p>
            The archive begins here: before the photograph, before the object,
            before the frame.
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
