export default function HomePage() {
  return (
    <main className="simpleWorksPage">

      <section className="simpleWorksIntro">

        <p>
          MASUMI SHIOHARA
        </p>

        <h1>
          Cultivated Fruit Works
        </h1>

        <p>
          Fruit grower, breeder, and artist.
          Works formed through cultivation,
          time, selection, and photography.
        </p>

      </section>

      <section className="simpleWorksGrid">

        <a
          href="/projects/botanical-portraits"
          className="simpleWorkCard"
        >
          <img
            src="/botanical.jpg"
            alt="Fruit artwork"
          />

          <div className="simpleWorkMeta">

            <span>
              MBA-FP
            </span>

            <h2>
              Fruit Portraits
            </h2>

          </div>

        </a>

        <a
          href="/projects/portrait-of-fruits"
          className="simpleWorkCard"
        >
          <img
            src="/hero.jpg"
            alt="Fruit artwork"
          />

          <div className="simpleWorkMeta">

            <span>
              MBA-PF
            </span>

            <h2>
              Portrait of Fruits
            </h2>

          </div>

        </a>

      </section>

    </main>
  );
}
