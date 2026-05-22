import { notFound } from "next/navigation";
import { workSeries } from "../../work-series-data";

export function generateStaticParams() {
  return workSeries.map((series) => ({
    slug: series.slug,
  }));
}

export default function WorkSeriesPage({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const series = workSeries.find((item) => item.slug === params.slug);

  if (!series) {
    notFound();
  }

  const heroWork = series.works[0];
  const otherWorks = series.works.slice(1);

  return (
    <main className="seriesPage">
      <section className="seriesHero">
        <p className="seriesBreadcrumb">
          WORKS / {series.title}
        </p>

        <h1>
          {series.title}
        </h1>

        <p>
          {series.statement}
        </p>
      </section>

      <section className="seriesFeaturedWork">
        <div className="seriesFeaturedImage">
          <img
            src={heroWork.image}
            alt={heroWork.title}
          />
        </div>

        <div className="seriesFeaturedText">
          <p>
            {heroWork.id}
          </p>

          <h2>
            {heroWork.title}
          </h2>

          <span>
            {heroWork.statement}
          </span>

          <label className="seriesPrivateCheck">
            <input type="checkbox" />
            <span>
              Include in Private Viewing
            </span>
          </label>
        </div>
      </section>

      <section className="seriesWorksGrid">
        {otherWorks.map((work) => (
          <article
            className="seriesWorkCard"
            key={work.id}
          >
            <img
              src={work.image}
              alt={work.title}
            />

            <div>
              <p>
                {work.id}
              </p>

              <h2>
                {work.title}
              </h2>

              <span>
                {work.statement}
              </span>

              <label className="seriesPrivateCheck">
                <input type="checkbox" />
                <span>
                  Include in Private Viewing
                </span>
              </label>
            </div>
          </article>
        ))}
      </section>

      <section className="seriesPrivateGalleryLink">
        <p>
          PRIVATE VIEWING
        </p>

        <h2>
          Selected works may be viewed as framed objects in a private gallery
          environment.
        </h2>

        <a href="/private-gallery">
          Open Private Gallery
        </a>
      </section>
    </main>
  );
}
