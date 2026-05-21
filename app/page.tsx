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
          Fruit grower, breeder, and artist based in Japan.
        </p>
      </section>

      <section className="simpleWorksGrid">
        <a href="/projects/botanical-portraits" className="heroWorkCard">
          <img src="/botanical.jpg" alt="Fruit artwork by Masumi Shiohara" />

          <div className="heroWorkOverlay">
            <span>MASUMI SHIOHARA</span>
            <h2>Fruit Portraits</h2>
          </div>
        </a>
      </section>

      <section className="simpleFooterLinks">
        <a href="/projects/botanical-portraits">Works</a>
        <a href="/about">About</a>
        <a href="/exhibitions">Exhibitions</a>
        <a href="/contact">Contact</a>
      </section>
    </main>
  );
}
