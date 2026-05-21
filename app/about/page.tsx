export default function AboutPage() {
  return (
    <main className="museumProjectPage room-about">
      <section className="museumProjectHero">
        <p className="museumEyebrow">ABOUT</p>

        <h1>
          Masumi
          <br />
          Shiohara
        </h1>

        <p className="museumProjectLead">
          Masumi Shiohara is a Japanese fruit grower, breeder, and artist.
          His work begins in the orchard and transforms cultivated fruit into
          photographic form, object, archive, and exhibition.
        </p>
      </section>

      <section className="museumArchiveStatement">
        <div>
          <h2>
            Fruit is not treated as produce, but as cultivated presence.
          </h2>
        </div>

        <div>
          <p>
            Through cultivation, breeding, selection, weather, intervention,
            and harvest, Shiohara works with fruit as both material and subject.
          </p>

          <p>
            The resulting works occupy a space between agriculture, sculpture,
            photographic image, and botanical memory.
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
