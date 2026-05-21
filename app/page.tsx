export default function HomePage() {
  return (
    <main className="simpleWorksPage">

      <section className="simpleWorksHero">

        <p className="simpleArtistName">
          MASUMI SHIOHARA
        </p>

        <h1>
          Fruit,
          <br />
          Cultivated
          <br />
          as Form
        </h1>

        <p className="simpleArtistText">
          Masumi Shiohara is a Japanese fruit grower,
          breeder,
          and artist.
        </p>

      </section>

      <section className="simpleWorksGrid">

        <a
          href="/projects/botanical-portraits"
          className="heroWorkCard"
        >

          <img
            src="/botanical.jpg"
            alt="Fruit artwork by Masumi Shiohara"
          />

          <div className="heroWorkOverlay">

            <span>
              MASUMI SHIOHARA
            </span>

            <h2>
              Fruit Portraits
            </h2>

            <div className="heroWorkSignature">

              Orchard Time /
              Cultivated Form /
              Pomological Archive

            </div>

          </div>

        </a>

      </section>

      <section className="simpleFooterLinks">

        <a href="/projects/botanical-portraits">
          Works
        </a>

        <a href="/about">
          About
        </a>

        <a href="/exhibitions">
          Exhibitions
        </a>

        <a href="/contact">
          Contact
        </a>

      </section>

    </main>
  );
}
