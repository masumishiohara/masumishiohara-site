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

        <p className="simpleArtistText">
          Fruit grower, breeder, and artist. Masumi Shiohara creates photographic
          works from cultivated fruit, shaped through orchard time, selection,
          weather, and human intervention.
        </p>
      </section>

      <section className="simpleWorksGrid">
        <a href="/projects/botanical-portraits" className="simpleWorkCard">
          <img src="/botanical.jpg" alt="Fruit Portraits by Masumi Shiohara" />
          <div className="simpleWorkMeta">
            <span>Works</span>
            <h2>Fruit Portraits</h2>
          </div>
        </a>

        <a href="/projects/portrait-of-fruits" className="simpleWorkCard">
          <img src="/hero.jpg" alt="Portrait of Fruits by Masumi Shiohara" />
          <div className="simpleWorkMeta">
            <span>Works</span>
            <h2>Portrait of Fruits</h2>
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
