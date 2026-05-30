import type { Metadata } from "next";
import { workSeries } from "./work-series-data";
import styles from "./page.module.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.masumishiohara.com";

const primarySeries =
  workSeries.find((series) => series.slug === "black-ground-botanical-works") ?? workSeries[0];

const canvasSeries =
  workSeries.find((series) => series.slug === "canvas-botanical-studies") ??
  workSeries[1] ??
  workSeries[0];

const featuredSeries = workSeries.slice(0, 6);
const quietSeries = workSeries.slice(6, 12);
const heroImage = primarySeries?.heroImage ? `${siteUrl}${primarySeries.heroImage}` : undefined;

export const metadata: Metadata = {
  title: "Masumi Shiohara | Cultivated Botanical Works",
  description:
    "Series-based portfolio of botanical works by Masumi Shiohara, shaped by cultivated fruit, orchard time, photography, object making, and material memory.",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Masumi Shiohara | Cultivated Botanical Works",
    description:
      "Browse botanical works by series: black-ground studies, canvas botanical studies, vellum-like surfaces, photographs, objects, and cultivated forms.",
    url: siteUrl,
    type: "website",
    images: heroImage
      ? [
          {
            url: heroImage,
            width: 1200,
            height: 900,
            alt: "Masumi Shiohara botanical work",
          },
        ]
      : undefined,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Masumi Shiohara",
  url: siteUrl,
  description:
    "Portfolio website for Masumi Shiohara's cultivated botanical works, organized by series.",
  author: {
    "@type": "Person",
    name: "Masumi Shiohara",
    jobTitle: "Artist",
    description:
      "Artist working with cultivated fruit, botanical forms, photography, object making, and material memory.",
  },
};

export default function Home() {
  return (
    <main className={styles.homePage}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className={styles.heroSection} aria-labelledby="home-title">
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>MASUMI SHIOHARA / CULTIVATED BOTANICAL WORKS</p>
          <h1 id="home-title">Botanical forms held between cultivation, image, and time.</h1>
          <p className={styles.lead}>
            Masumi Shiohara works with cultivated fruit, botanical forms, orchard time,
            photography, object making, and print-like surfaces. The portfolio is arranged by
            series so visitors can move quickly from the whole practice into focused bodies of
            work.
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

        {primarySeries ? (
          <a className={styles.heroImageWrap} href={`/works/${primarySeries.slug}`}>
            <img
              src={primarySeries.heroImage}
              alt={`${primarySeries.title} by Masumi Shiohara`}
              className={styles.heroImage}
            />
            <span className={styles.heroImageCaption}>
              Featured series / {primarySeries.title}
            </span>
          </a>
        ) : null}
      </section>

      <section className={styles.portfolioMetrics} aria-label="Portfolio overview">
        <div>
          <span>{workSeries.length}</span>
          <p>public series paths</p>
        </div>
        <div>
          <span>Works</span>
          <p>organized as a series index</p>
        </div>
        <div>
          <span>Mobile</span>
          <p>built for compact browsing</p>
        </div>
      </section>

      <section className={styles.sectionBlock} aria-labelledby="featured-series-title">
        <div className={styles.sectionHeader}>
          <p className={styles.eyebrow}>WORKS INDEX</p>
          <h2 id="featured-series-title">Start from a series, not a long scroll.</h2>
          <p>
            The site now treats each body of work as a distinct room in the portfolio. Visitors
            can read the visual logic of a series first, then enter the individual works.
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

        {quietSeries.length > 0 ? (
          <div className={styles.compactSeries} aria-label="Additional work series">
            {quietSeries.map((series) => (
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

      <section className={styles.editorialBand} aria-labelledby="practice-summary-title">
        <div>
          <p className={styles.eyebrow}>PRACTICE</p>
          <h2 id="practice-summary-title">Cultivated materials become records of season and care.</h2>
        </div>
        <p>
          The works begin with fruit, leaves, branches, blossoms, and orchard forms that carry
          duration: weather, growth, harvest, handling, ripening, and disappearance. Photography
          and surface are used not only to record these materials, but to make their quiet
          changes visible.
        </p>
      </section>

      <section className={styles.dualFeature} aria-labelledby="material-title">
        {canvasSeries ? (
          <a className={styles.dualImage} href={`/works/${canvasSeries.slug}`}>
            <img src={canvasSeries.heroImage} alt={`${canvasSeries.title} feature`} />
          </a>
        ) : null}
        <div>
          <p className={styles.eyebrow}>MATERIAL LOGIC</p>
          <h2 id="material-title">Each surface changes how the botanical form is read.</h2>
          <p>
            Black grounds isolate silhouette and presence. Canvas studies connect cultivated
            forms to a woven pictorial field. Vellum-like surfaces soften the image toward
            memory, while photographic and object-based works keep the material close to
            observation and handling.
          </p>
          <a className={styles.secondaryCta} href="/about">
            Read about the practice
          </a>
        </div>
      </section>

      <section className={styles.pathwayGrid} aria-label="Main site pathways">
        <a href="/projects/botanical-portraits">
          <span>01</span>
          <h2>Works</h2>
          <p>Browse the public portfolio by botanical series and visual condition.</p>
        </a>
        <a href="/about">
          <span>02</span>
          <h2>About</h2>
          <p>Read the profile, statement, process, and material approach.</p>
        </a>
        <a href="/exhibitions">
          <span>03</span>
          <h2>Exhibitions</h2>
          <p>Use the archive page for exhibitions, publications, and project records.</p>
        </a>
        <a href="/contact">
          <span>04</span>
          <h2>Contact</h2>
          <p>Direct enquiries after reviewing the relevant series or work page.</p>
        </a>
      </section>


<section className={styles.resourceStrip} aria-labelledby="resource-title">
  <div>
    <p className={styles.eyebrow}>VISITOR ROUTES</p>
    <h2 id="resource-title">Clear routes for process, information, and image requests.</h2>
  </div>
  <div className={styles.resourceLinks}>
    <a href="/process">Process</a>
    <a href="/information">Information</a>
    <a href="/press">Press / image requests</a>
  </div>
</section>

      <section className={styles.finalCta} aria-labelledby="final-cta-title">
        <div>
          <p className={styles.eyebrow}>PORTFOLIO</p>
          <h2 id="final-cta-title">Begin with the complete works index.</h2>
        </div>
        <a className={styles.primaryCta} href="/projects/botanical-portraits">
          View all series
        </a>
      </section>
    </main>
  );
}
