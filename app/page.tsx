export default function HomePage() {
  return (
    <main className="museumLanding refinedLanding">

      <section className="refinedHero">

        <div className="refinedHeroText">

          <p className="museumLandingEyebrow">
            MASUMI SHIOHARA
          </p>

          <h1>
            Fruit,
            <br />
            Cultivated
            <br />
            as Form
          </h1>

          <p className="museumLandingLead">
            Masumi Shiohara is a fruit grower,
            breeder,
            and artist whose work transforms cultivated fruit into photographic form,
            object,
            archive,
            and exhibition.
          </p>

          <div className="museumLandingManifesto">

            <p>
              The work begins in the orchard.
              Fruit is not treated as produce,
              but as a cultivated presence shaped by time,
              selection,
              weather,
              and human intervention.
            </p>

          </div>

          <a
            href="/rooms"
            className="museumEntranceButton"
          >
            View Works
          </a>

        </div>

        <figure className="refinedHeroImage">

          <img
            src="/botanical.jpg"
            alt="Fruit artwork by Masumi Shiohara"
          />

          <figcaption>
            Masumi Shiohara / Cultivated Fruit Form
          </figcaption>

        </figure>

      </section>

      <section className="refinedStatement">

        <p className="museumEditorialLabel">
          ARTIST / ORCHARD / ARCHIVE
        </p>

        <h2>
          A practice where cultivation,
          breeding,
          photography,
          and fruit become a single artistic language.
        </h2>

      </section>

      <section className="museumLandingDirectory">

        <a href="/projects/botanical-portraits">
          Works
        </a>

        <a href="/rooms">
          Exhibition Rooms
        </a>

        <a href="/about">
          About Masumi Shiohara
        </a>

        <a href="/exhibitions">
          Exhibitions
        </a>

        <a href="/philosophy">
          Philosophy
        </a>

        <a href="/contact">
          Institutional Contact
        </a>

      </section>

    </main>
  );
}
