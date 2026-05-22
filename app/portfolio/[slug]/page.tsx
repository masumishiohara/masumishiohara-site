import { notFound } from "next/navigation";
import { getPortfolioSeries, portfolioSeries } from "../portfolio-data";

type PageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return portfolioSeries.map((series) => ({
    slug: series.slug,
  }));
}

export function generateMetadata({ params }: PageProps) {
  const series = getPortfolioSeries(params.slug);

  if (!series) {
    return {
      title: "Masumi Shiohara | Works",
    };
  }

  return {
    title: `${series.title} | Masumi Shiohara`,
    description: series.lead,
    openGraph: {
      title: `${series.title} | Masumi Shiohara`,
      description: series.lead,
      images: [series.coverImage],
    },
  };
}

export default function PortfolioSeriesPage({ params }: PageProps) {
  const series = getPortfolioSeries(params.slug);

  if (!series) {
    notFound();
  }

  const [heroWork, ...otherWorks] = series.works;

  return (
    <main className="portfolioPage">
      <section className="portfolioHero">
        <p className="museumEyebrow">{series.code}</p>

        <h1>{series.title}</h1>

        <p>{series.lead}</p>
      </section>

      {heroWork ? (
        <section className="portfolioFeaturedWork">
          <img src={heroWork.image} alt={heroWork.title} />

          <div className="portfolioFeaturedText">
            <p>{heroWork.id}</p>
            <h2>{heroWork.title}</h2>
            <span>{series.statement}</span>
          </div>
        </section>
      ) : null}

      <section className="portfolioGrid">
        {otherWorks.map((work) => (
          <article className="portfolioWorkCard" key={work.id}>
            <img src={work.image} alt={work.title} />

            <div>
              <p>{work.id}</p>
              <h2>{work.title}</h2>
              <span>{work.statement}</span>

              <label className="portfolioViewingCheck">
                <input type="checkbox" />
                <span>Include in Private Viewing</span>
              </label>
            </div>
          </article>
        ))}
      </section>

      <section className="portfolioPrivateEntry">
        <p className="museumEyebrow">PRIVATE GALLERY</p>

        <h2>
          Selected works may be brought into a private framing and installation
          room for viewing studies.
        </h2>

        <a href="/private-gallery">Open Private Gallery</a>
      </section>
    </main>
  );
}

