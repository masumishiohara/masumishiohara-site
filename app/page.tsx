import type { Metadata } from "next";
import { workSeries } from "./work-series-data";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Masumi Shiohara | Botanical Works",
  description:
    "Masumi Shiohara creates botanical works shaped by cultivation, orchard time, photography, object making, and fruit as artistic material.",
  openGraph: {
    title: "Masumi Shiohara | Botanical Works",
    description:
      "Botanical works shaped by cultivation, orchard time, photography, object making, and fruit as artistic material.",
    type: "website",
  },
};

const heroSeries =
  workSeries.find((series) => series.slug === "black-ground-botanical-works") ??
  workSeries[0];

const featuredSeries = workSeries.slice(0, 6);

export default function Home() {
  return (
    <main className={styles.homePage}>
      <section className={styles.heroSection} aria-labelledby="home-title">
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>MASUMI SHIOHARA / CULTIVATED FORMS</p>
          <h1 id="home-title">
            Botanical works shaped by cultivation, time, and material memory.
          </h1>
          <p className={styles.lead}>
            Masumi Shiohara works with cultivated fruit, botanical forms, orchard
            time, photography, object making, and print-like surfaces. This site
            gathers the works by series, allowing each body of work to be viewed
            as a distinct visual archive.
          </p>
          <div className={styles.ctaRow} aria-label="Primary actions">
            <a className={styles.primaryCta} href="/projects/botanical-portraits">
              View works
            </a>
            <a className={styles.secondaryCta} href="/about">
              About the practice
            </a>
          </div>
        </div>

        {heroSeries ? (
          <a className={styles.heroImageWrap} href={`/works/${heroSeries.slug}`}>
            <img
              src={heroSeries.heroImage}
              alt={`${heroSeries.title} by Masumi Shiohara`}
              className={styles.heroImage}
            />
            <span className={styles.heroImageCaption}>
              Featured series / {heroSeries.title}
            </span>
          </a>
        ) : null}
      </section>

      <section className={styles.sectionBlock} aria-labelledby="featured-series-title">
        <div className={styles.sectionHeader}>
          <p className={styles.eyebrow}>WORKS INDEX</p>
          <h2 id="featured-series-title">Selected series</h2>
          <p>
            The portfolio is organized by series rather than by one long list of
            images, giving each material approach a clear entry point.
          </p>
        </div>

        <div className={styles.seriesGrid}>
          {featuredSeries.map((series) => (
            <a className={styles.seriesCard} href={`/works/${series.slug}`} key={series.slug}>
              <img
                src={series.heroImage}
                alt={`${series.title} series thumbnail`}
                className={styles.seriesImage}
              />
              <div className={styles.seriesText}>
                <span>{series.code}</span>
                <h3>{series.title}</h3>
                <p>{series.statement}</p>
              </div>
            </a>
          ))}
        </div>

        <a className={styles.textLink} href="/projects/botanical-portraits">
          Open full works index
        </a>
      </section>

      <section className={styles.statementPanel} aria-labelledby="practice-title">
        <p className={styles.eyebrow}>PRACTICE</p>
        <h2 id="practice-title">Fruit as record, specimen, image, and object.</h2>
        <p>
          The work treats botanical material as a record of growth and duration:
          cultivated forms, harvested surfaces, orchard memory, and the quiet
          transition from living plant to image. Across the series, the fruit is
          not only a subject but also an index of labor, season, and material
          transformation.
        </p>
        <a className={styles.secondaryCta} href="/about">
          Read about the practice
        </a>
      </section>

      <section className={styles.pathwayGrid} aria-label="Site navigation highlights">
        <a href="/projects/botanical-portraits">
          <span>01</span>
          <h2>Works</h2>
          <p>Browse the portfolio by botanical series.</p>
        </a>
        <a href="/about">
          <span>02</span>
          <h2>About</h2>
          <p>Read the artist profile and working approach.</p>
        </a>
        <a href="/exhibitions">
          <span>03</span>
          <h2>Exhibitions</h2>
          <p>Prepare the exhibition record and selected CV area.</p>
        </a>
        <a href="/contact">
          <span>04</span>
          <h2>Contact</h2>
          <p>Direct enquiries for exhibitions, projects, and publications.</p>
        </a>
      </section>

      <section className={styles.finalCta} aria-labelledby="final-cta-title">
        <p className={styles.eyebrow}>PORTFOLIO</p>
        <h2 id="final-cta-title">Start with the complete works index.</h2>
        <a className={styles.primaryCta} href="/projects/botanical-portraits">
          View all series
        </a>
      </section>
    </main>
  );
}
