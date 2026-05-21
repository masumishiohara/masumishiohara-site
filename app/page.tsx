export default function HomePage() {
  return (
    <main className="simpleWorksPage">
      <section className="simpleWorksHero">
        <p className="simpleArtistName">MASUMI SHIOHARA</p>

        <h1>
          Cultivated
          <br />
          Fruit Works
        </h1>

        <p className="museumLandingLead">

  Masumi Shiohara is a Japanese fruit grower,
  breeder,
  and artist whose work transforms cultivated fruit into photographic form,
  sculptural presence,
  and orchard archive.

</p>

<div className="museumArtistRoles">

  <span>
    Fruit Grower
  </span>

  <span>
    Breeder
  </span>

  <span>
    Artist
  </span>

</div>
        
      </section>

      <section className="simpleWorksGrid">

  <a
    href="/projects/botanical-portraits"
    className="heroWorkCard"
  >

    <img
      src="/botanical.jpg"
      alt="Fruit Portraits by Masumi Shiohara"
    />

    <div className="heroWorkOverlay">

      <span>
        MASUMI SHIOHARA
      </span>

      <h2>
        Fruit Portraits
      </h2>

      <p>
        Cultivated fruit transformed into portrait,
        archive, and sculptural form.
      </p>

    </div>

  </a>

</section>
      <section className="simpleFooterLinks">
        <a href="/about">About Masumi Shiohara</a>
        <a href="/exhibitions">Exhibitions</a>
        <a href="/contact">Contact</a>
      </section>
    </main>
  );
}
