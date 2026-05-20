export default function AboutPage() {
  return (
    <main className="museumProjectPage">
      <section className="museumProjectHero">
        <div className="museumCollectionHeader">
          <p className="museumEyebrow">ABOUT</p>
          <span className="museumCollectionCode">MBA-AB</span>
        </div>

        <h1>About the Archive</h1>

        <p className="museumProjectLead">
          Maison Botanique Archive is a private institution of cultivated forms,
          developed through agriculture, breeding, photography, object making,
          and exhibition research.
        </p>
      </section>

      <section className="museumArchiveStatement">
        <div>
          <h2>
            Cultivation is treated as a form of authorship.
          </h2>
        </div>

        <div>
          <p>
            The works emerge from the field before they enter the image.
            Fruit, branch, surface, weather, selection, and time are treated as
            materials within a single artistic practice.
          </p>

          <p>
            The archive brings together botanical portraiture, cultivated
            objects, material studies, and installation research.
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
