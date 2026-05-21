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
          Fruit grower, breeder, and artist based in Japan.
        </p>
      </section>

      <section className="museumArchiveStatement">
        <div>
          <h2>
            His work begins in the orchard.
          </h2>
        </div>

        <div>
          <p>
            Shiohara works with cultivated fruit as photographic form, object,
            archive, and exhibition material.
          </p>

          <p>
            Fruit is shaped by time, weather, selection, breeding,
            intervention, and harvest before it enters the image.
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
