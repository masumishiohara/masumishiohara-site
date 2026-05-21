export default function AboutPage() {
  return (
    <main className="museumProjectPage room-about">
      <section className="museumProjectHero">
        <div className="museumCollectionHeader">
          <p className="museumEyebrow">ABOUT</p>
          <span className="museumCollectionCode">MS-AB</span>
        </div>

        <h1>
          Masumi
          <br />
          Shiohara
        </h1>

        <p className="museumProjectLead">
          Masumi Shiohara is a fruit grower, breeder, and artist based in Japan.
          His practice transforms cultivated fruit into photographic works,
          objects, archives, and exhibition forms.
        </p>
      </section>

      <section className="museumArchiveStatement">
        <div>
          <h2>
            The work begins in the orchard.
          </h2>
        </div>

        <div>
          <p>
            Shiohara cultivates and breeds fruit while developing a photographic
            practice rooted in agricultural time. Fruit is treated not only as a
            subject, but as a form shaped by weather, selection, growth,
            intervention, and harvest.
          </p>

          <p>
            His work connects fruit growing, breeding, botanical observation,
            sculptural form, and photographic presentation into a single artistic
            language.
          </p>
        </div>
      </section>

      <section className="museumNextRoom">
        <p>VIEW</p>
        <a href="/projects/botanical-portraits">Works</a>
      </section>
    </main>
  );
}
