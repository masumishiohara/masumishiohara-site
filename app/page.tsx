export default function HomePage() {
  return (
    <main className="simpleWorksPage">
      <section className="simpleWorksHero">
        <p className="simpleArtistName">MASUMI SHIOHARA</p>

        <h1>
          Fruit,
          <br />
          Cultivated
          <br />
          as Form
        </h1>

        <p className="simpleArtistText">
          Masumi Shiohara is a Japanese fruit grower, breeder, and artist whose
          work transforms cultivated fruit into photographic form, sculptural
          presence, and orchard archive.
        </p>

        <div className="museumArtistRoles">
          <span>Fruit Grower</span>
          <span>Breeder</span>
          <span>Artist</span>
        </div>
      </section>

      <section className="simpleWorksGrid">
        <a href="/projects/botanical-portraits" className="heroWorkCard">
          <img src="/botanical.jpg" alt="Fruit artwork by Masumi Shiohara" />

          <div className="heroWorkOverlay">

  <span>
    MASUMI SHIOHARA
  </span>

  <h2>
    Fruit Portraits
  </h2>

</div>
        </a>
      </section>


<section className="silentStatement">

  <p className="museumEditorialLabel">
    ORCHARD TIME
  </p>

  <h2>
    The orchard is not background.
    It is where the work begins.
  </h2>

</section>
      <section className="artistSignature">

  <p className="museumEditorialLabel">
    MASUMI SHIOHARA
  </p>

  <blockquote>
    “Cultivation is not preparation for the work.
    Cultivation itself is already part of the work.”
  </blockquote>

</section>
      <section className="simpleFooterLinks">
        <a href="/projects/botanical-portraits">Works</a>
        <a href="/about">About Masumi Shiohara</a>
        <a href="/exhibitions">Exhibitions</a>
        <a href="/contact">Contact</a>
      </section>
    </main>
  );
}
