export default function CabinetPage() {
  return (
    <main className="museumProjectPage">
      <section className="museumProjectHero">
        <p className="museumEyebrow">CABINET</p>

        <h1>Cabinet</h1>

        <p className="museumProjectLead">
          Agricultural tools, failed selections, damaged forms, process records,
          and objects held between cultivation and memory.
        </p>
      </section>

      <section className="museumArchiveStatement">
        <div>
          <h2>Reserved Objects</h2>

          <p>
            The cabinet is not a storage room. It is a quiet chamber for things
            that remain beside the works: tools, records, traces, and forms that
            did not become final images.
          </p>
        </div>

        <div>
          <p>
            These objects reveal the structure behind the image — labor,
            selection, disappearance, repetition, and time.
          </p>
        </div>
      </section>

      <section className="museumNextRoom">
        <p>RETURN</p>

        <a href="/rooms">
          Exhibition Rooms
        </a>
      </section>
    </main>
  );
}
