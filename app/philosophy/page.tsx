export default function PhilosophyPage() {
  return (
    <main className="museumProjectPage room-philosophy">
      <section className="museumProjectHero">
        <div className="museumCollectionHeader">
          <p className="museumEyebrow">PHILOSOPHY</p>
          <span className="museumCollectionCode">MBA-PH</span>
        </div>

        <h1>
          Orchard Time
          <br />
          and Magnificence
        </h1>

        <p className="museumProjectLead">
          The archive follows fruit as cultivated form: born from weather,
          patience, selection, intervention, and the slow intelligence of the
          orchard.
        </p>
      </section>

      <section className="museumArchiveStatement">
        <div>
          <h2>
            Nature is not copied here.
            It is accompanied, shaped,
            and revealed through time.
          </h2>
        </div>

        <div>
          <p>
            The work resonates with a philosophy of poetic nature: not ornament
            as decoration, but form as a result of care, season, material,
            and human attention.
          </p>

          <p>
            Fruit becomes magnificent when agricultural time and artistic
            intervention meet in a single cultivated presence.
          </p>
        </div>
      </section>

      <section className="museumNextRoom">
        <p>ENTER</p>
        <a href="/rooms">Exhibition Rooms</a>
      </section>
    </main>
  );
}
