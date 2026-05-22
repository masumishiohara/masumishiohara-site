import { notFound } from "next/navigation";
import { getWorkSeries, workSeries } from "../../work-series-data";

export function generateStaticParams() {
  return workSeries.map((series) => ({
    slug: series.slug,
  }));
}

export default function SeriesGalleryPage({
  params,
}: {
  params: { slug: string };
}) {
  const series = getWorkSeries(params.slug);

  if (!series) {
    notFound();
  }

  const heroWork = series.works[0];
  const remainingWorks = series.works.slice(1);

  return (
    <main className="seriesGalleryPage">
      <section className="seriesGalleryHero">
        <p className="museumEyebrow">{series.code}</p>

        <h1>{series.title}</h1>

        <p>{series.statement}</p>
      </section>

      {heroWork ? (
        <section className="seriesHeroWork">
          <div className="seriesHeroImage">
            <img src={heroWork.image} alt={heroWork.title} />
          </div>

          <div className="seriesHeroText">
            <p>{heroWork.id}</p>
            <h2>{heroWork.title}</h2>
            <span>{heroWork.statement}</span>

            <label className="privateSelectBox">
              <input type="checkbox" />
              <span>Mark for Private Gallery</span>
            </label>
          </div>
        </section>
      ) : null}

      <section className="seriesWorksGrid">
        {remainingWorks.map((work) => (
          <article className="seriesWorkCard" key={work.id}>
            <img src={work.image} alt={work.title} />

            <div>
              <p>{work.id}</p>
              <h2>{work.title}</h2>
              <span>{work.statement}</span>

              <label className="privateSelectBox small">
                <input type="checkbox" />
                <span>Private Gallery</span>
              </label>
            </div>
          </article>
        ))}
      </section>

      <section className="seriesPrivateEntry">
        <p className="museumEyebrow">PRIVATE VIEWING</p>
        <h2>Selected works may be carried into the private gallery for framing, mat, plate, and room studies.</h2>
        <a href="/private-gallery">Enter Private Gallery</a>
      </section>
    </main>
  );
}
