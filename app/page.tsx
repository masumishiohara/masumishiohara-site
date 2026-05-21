export default function HomePage() {
  return (
    <main className="museumLanding refinedLanding">
      <section className="refinedHero">
        <div className="refinedHeroText">
          <p className="museumLandingEyebrow">
            MAISON BOTANIQUE ARCHIVE
          </p>

          <h1>
            Cultivated
            <br />
            Fruit Forms
          </h1>

          <p className="museumLandingLead">
            A private archive of fruit portraiture, orchard time,
            pomological form, and exhibition research.
          </p>

          <div className="museumLandingManifesto">
            <p>
              Fruit is treated not as produce, but as a cultivated presence
              shaped by time, selection, weather, and human intervention.
            </p>
          </div>

          <a href="/rooms" className="museumEntranceButton">
            Enter Exhibition Rooms
          </a>
        </div>

       <div className="refinedHeroImage">

  <div className="refinedImageFrame">

    <div className="refinedImageMat">

      <img
        src="/botanical.jpg"
        alt="Cultivated fruit form"
      />

    </div>

  </div>

</div>
      </section>

      <section className="refinedStatement">
        <p className="museumEditorialLabel">
          POMOLOGICAL POETICS
        </p>

        <h2>
          The archive exists between agriculture,
          image, object, and exhibition.
        </h2>
      </section>

      <section className="museumLandingDirectory">
        <a href="/rooms">Exhibition Rooms</a>
        <a href="/projects/botanical-portraits">Fruit Portraits</a>
        <a href="/philosophy">Philosophy</a>
        <a href="/exhibitions">Exhibitions</a>
        <a href="/space">Installation Studies</a>
        <a href="/contact">Institutional Contact</a>
      </section>
    </main>
  );
}
