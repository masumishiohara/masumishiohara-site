export default function HomePage() {
  return (
    <main className="museumLanding refinedLanding">
      <section className="refinedHero">
        <div className="refinedHeroText">
          <p className="museumLandingEyebrow">
            MASUMI SHIOHARA
          </p>

          <h1>
            Cultivated
            <br />
            Fruit Forms
          </h1>

          <p className="museumLandingLead">
            Masumi Shiohara is a fruit grower, breeder, and artist working with
            cultivated fruit as photographic form, object, archive, and
            exhibition material.
          </p>

          <div className="museumLandingManifesto">
            <p>
              Fruit is treated not as produce, but as a cultivated presence
              shaped by orchard time, selection, weather, and human intervention.
            </p>
          </div>

          <a href="/rooms" className="museumEntranceButton">
            Enter Exhibition Rooms
          </a>
        </div>

        <figure className="refinedHeroImage">
          <img src="/botanical.jpg" alt="Fruit artwork by Masumi Shiohara" />
          <figcaption>
            Maison Botanique Archive / Masumi Shiohara
          </figcaption>
        </figure>
      </section>

      <section className="refinedStatement">
        <p className="museumEditorialLabel">
          ARTIST / ORCHARD / ARCHIVE
        </p>

        <h2>
          A practice where cultivation, breeding, photography, and fruit forms
          become a single artistic language.
        </h2>
      </section>

      <section className="museumLandingDirectory">
        <a href="/rooms">Exhibition Rooms</a>
        <a href="/projects/botanical-portraits">Fruit Portraits</a>
        <a href="/philosophy">Philosophy</a>
        <a href="/exhibitions">Exhibitions</a>
        <a href="/space">Installation Studies</a>
        <a href="/about">About Masumi Shiohara</a>
        <a href="/contact">Institutional Contact</a>
      </section>
    </main>
  );
}
