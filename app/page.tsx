import type { Metadata } from "next";
import { workSeries } from "./work-series-data";
import styles from "./page.module.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://masumishiohara-site.vercel.app";

export const metadata: Metadata = {
  title: "Masumi Shiohara | Cultivated Botanical Works",
  description:
    "Masumi Shiohara creates botanical works shaped by cultivated fruit, orchard time, photography, object making, and material memory.",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Masumi Shiohara | Cultivated Botanical Works",
    description:
      "A portfolio of botanical works organized by series: black-ground studies, canvas studies, vellum-like surfaces, photographs, objects, and cultivated forms.",
    url: siteUrl,
    type: "website",
  },
};

const blackGroundSeries =
  workSeries.find((series) => series.slug === "black-ground-botanical-works") ??
  workSeries[0];

const canvasSeries =
  workSeries.find((series) => series.slug === "canvas-botanical-studies") ??
  workSeries[1] ??
  workSeries[0];

const featuredSeries = workSeries.slice(0, 6);
const secondarySeries = workSeries.slice(6, 12);

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Masumi Shiohara",
  url: siteUrl,
  jobTitle: "Artist",
  description:
    "Artist working with cultivated fruit, botanical forms, photography, object making, and material memory.",
  sameAs: [],
};

export default function Home() {
  return (
    <main className={styles.homePage}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <section className={styles.heroSection} aria-labelledby="home-title">
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>MASUMI SHIOHARA / CULTIVATED FORMS</p>
          <h1 id="home-title">Fruit, botanical memory, and the slow image of cultivation.</h1>
          <p className={styles.lead}>
            Masumi Shiohara works with cultivated fruit, botanical forms, orchard time,
            photography, object making, and print-like surfaces. The portfolio is organized
            by series so each visual condition can be read as a distinct archive of season,
            care, material, and transformation.
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

        {blackGroundSeries ? (
          <a className={styles.heroImageWrap} href={`/works/${blackGroundSeries.slug}`}>
            <img
              src={blackGroundSeries.heroImage}
              alt={`${blackGroundSeries.title} by Masumi Shiohara`}
              className={styles.heroImage}
            />
            <span className={styles.heroImageCaption}>
              Featured series / {blackGroundSeries.title}
            </span>
          </a>
        ) : null}
      </section>

      <section className={styles.indexStrip} aria-label="Portfolio summary">
        <div>
          <span>{workSeries.length}</span>
          <p>Series in the portfolio index</p>
        </div>
        <div>
          <span>01</span>
          <p>Primary pathway: works by series</p>
        </div>
        <div>
          <span>SEO</span>
          <p>Structured for search and mobile browsing</p>
        </div>
      </section>

      <section className={styles.sectionBlock} aria-labelledby="featured-series-title">
        <div className={styles.sectionHeader}>
          <p className={styles.eyebrow}>WORKS INDEX</p>
          <h2 id="featured-series-title">Selected series</h2>
          <p>
            The homepage now leads directly into the strongest portfolio paths rather than
            forcing visitors through a long vertical image list.
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

        {secondarySeries.length > 0 ? (
          <div className={styles.compactSeries} aria-label="Additional series">
            {secondarySeries.map((series) => (
              <a href={`/works/${series.slug}`} key={series.slug}>
                <span>{series.code}</span>
                {series.title}
              </a>
            ))}
          </div>
        ) : null}

        <a className={styles.textLink} href="/projects/botanical-portraits">
          Open complete works index
        </a>
      </section>

      <section className={styles.dualFeature} aria-labelledby="material-title">
        {canvasSeries ? (
          <a className={styles.dualImage} href={`/works/${canvasSeries.slug}`}>
            <img src={canvasSeries.heroImage} alt={`${canvasSeries.title} feature`} />
          </a>
        ) : null}
        <div>
          <p className={styles.eyebrow}>MATERIAL LOGIC</p>
          <h2 id="material-title">Each series gives the botanical form a different surface.</h2>
          <p>
            Black grounds isolate silhouette and presence. Canvas studies connect fruit and
            plant forms to a woven pictorial field. Vellum-like studies soften the image
            toward memory, while photographic and object-based works keep the material close
            to observation, harvest, and handling.
          </p>
          <a className={styles.secondaryCta} href="/about">
            Read about the practice
          </a>
        </div>
      </section>

      <section className={styles.pathwayGrid} aria-label="Site navigation highlights">
        <a href="/projects/botanical-portraits">
          <span>01</span>
          <h2>Works</h2>
          <p>Browse the portfolio by botanical series and visual condition.</p>
        </a>
        <a href="/about">
          <span>02</span>
          <h2>About</h2>
          <p>Read the artist profile, statement, process, and material approach.</p>
        </a>
        <a href="/exhibitions">
          <span>03</span>
          <h2>Exhibitions</h2>
          <p>Use the exhibition page as the CV and project archive entry point.</p>
        </a>
        <a href="/contact">
          <span>04</span>
          <h2>Contact</h2>
          <p>Direct enquiries for exhibitions, projects, publications, and works.</p>
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
