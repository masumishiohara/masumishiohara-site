import { workSeries } from "../../work-series-data";

export default function WorksPage() {
  return (
    <main className="museumProjectPage room-bp">
      <section className="museumProjectHero">
        <p className="museumEyebrow">
          WORKS
        </p>

        <h1>
          Masumi
          <br />
          Shiohara Works
        </h1>

        <p className="museumProjectLead">
          Twelve bodies of work formed through cultivation, breeding, orchard
          time, photography, object making, and fruit as artistic material.
        </p>
      </section>

      <section className="seriesGrid">
        {workSeries.map((series) => (
          <article
            className="seriesCard"
            key={series.slug}
          >
            <a href={`/works/${series.slug}`}>
              <div className="seriesImage">
                <img
                  src={series.heroImage}
                  alt={series.title}
                />
              </div>

              <div className="seriesMeta">
                <span>
                  {series.code}
                </span>

                <h2>
                  {series.title}
                </h2>

                <p className="seriesJp">
                  {series.jp}
                </p>

                <p>
                  {series.statement}
                </p>
              </div>
            </a>
          </article>
        ))}
      </section>

      <section className="privateGalleryEntrance">
        <p className="museumEyebrow">
          PRIVATE VIEWING
        </p>

        <h2>
          Selected works may be viewed as framed objects in a private gallery
          environment, with frame, mat, brass plate, and room studies.
        </h2>

        <a href="/private-gallery">
          Enter Private Gallery
        </a>
      </section>

      <section className="museumNextRoom">
        <p>
          ABOUT
        </p>

        <a href="/about">
          Masumi Shiohara
        </a>
      </section>
    </main>
  );
}
