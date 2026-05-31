import type { Metadata } from "next";
import { workSeries } from "./work-series-data";
import { mailtoHref, siteConfig } from "./site-config";
import styles from "./page.module.css";

const siteUrl = siteConfig.siteUrl;

const primarySeries =
  workSeries.find((series) => series.slug === "black-ground-botanical-works") ?? workSeries[0];

const canvasSeries =
  workSeries.find((series) => series.slug === "canvas-botanical-studies") ??
  workSeries[1] ??
  workSeries[0];

const vellumSeries =
  workSeries.find((series) => series.slug === "vellum-fruit-studies") ?? workSeries[2] ?? workSeries[0];

const featuredSeries = workSeries.slice(0, 6);
const quietSeries = workSeries.slice(6, 12);
const heroImage = primarySeries?.heroImage ? `${siteUrl}${primarySeries.heroImage}` : undefined;

export const metadata: Metadata = {
  title: "Masumi Shiohara | Cultivated Botanical Works",
  description:
    "An elegant series-based portfolio of botanical works by Masumi Shiohara, made for curatorial, editorial, acquisition, publication, and maison-level review.",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Masumi Shiohara | Cultivated Botanical Works",
    description:
      "Cultivated botanical works organized for refined editorial, curatorial, and material-led viewing.",
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
    "Portfolio website for Masumi Shiohara's cultivated botanical works, organized by series for editorial and curatorial review.",
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
          <h1 id="home-title">Botanical forms held in silence, precision, and light.</h1>
          <p className={styles.lead}>
            Masumi Shiohara works with cultivated fruit, botanical forms, orchard time,
            photography, object making, and print-like surfaces. The site is shaped as a quiet
            editorial portfolio: precise enough for curators, refined enough for publication, and
            calm enough for close looking.
          </p>
          <div className={styles.ctaRow} aria-label="Primary actions">
            <a className={styles.primaryCta} href="/projects/botanical-portraits">
              View works
            </a>
            <a className={styles.secondaryCta} href="/dossier">
              Curated dossier
            </a>
            <a className={styles.secondaryCta} href="/curatorial">
              Curatorial context
            </a>
            <a className={styles.tertiaryCta} href={mailtoHref("Editorial enquiry for Masumi Shiohara")}>
              {siteConfig.contactEmail}
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

      <section className={styles.maisonPanel} aria-labelledby="maison-title">
        <div>
          <p className={styles.eyebrow}>EDITORIAL / MAISON VIEWING</p>
          <h2 id="maison-title">A restrained visual system for editorial and maison-level viewing.</h2>
        </div>
        <p>
          The presentation avoids decorative excess and emphasizes atmosphere, surface, rarity,
          botanical structure, and material memory. It is intended to feel closer to an art object,
          an editorial still life, and a maison archive than to a general image gallery.
        </p>
      </section>

      <section className={styles.routePanel} aria-labelledby="route-panel-title">
        <div>
          <p className={styles.eyebrow}>HIGH-LEVEL ROUTES</p>
          <h2 id="route-panel-title">Quiet paths for editorial, curatorial, and acquisition review.</h2>
        </div>
        <div className={styles.routePanelLinks}>
          <a href="/dossier">Curated dossier</a>
          <a href="/acquisitions">Acquisitions</a>
          <a href="/curatorial">Curatorial context</a>
          <a href="/collaborations">Collaborations</a>
        </div>
      </section>

      <section className={styles.portfolioMetrics} aria-label="Portfolio overview">
        <div>
          <span>{workSeries.length}</span>
          <p>public series paths</p>
        </div>
        <div>
          <span>Editorial</span>
          <p>built for publication and curatorial review</p>
        </div>
        <div>
          <span>Mobile</span>
          <p>compact viewing without a long single-image scroll</p>
        </div>
      </section>

      <section className={styles.sectionBlock} aria-labelledby="featured-series-title">
        <div className={styles.sectionHeader}>
          <p className={styles.eyebrow}>WORKS INDEX</p>
          <h2 id="featured-series-title">Enter through a body of work.</h2>
          <p>
            Each series functions as a separate room: black-ground studies, canvas surfaces,
            vellum-like images, photographic records, and object-based arrangements. The structure
            lets editors, curators, and collectors move from atmosphere to exact reference.
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
          A fruit, leaf, blossom, or branch carries duration: weather, growth, harvest, handling,
          ripening, and disappearance. Photography and surface are used not only to record these
          materials, but to make their quiet changes visible.
        </p>
      </section>

      <section className={styles.dualFeature} aria-labelledby="material-title">
        {canvasSeries ? (
          <a className={styles.dualImage} href={`/works/${canvasSeries.slug}`}>
            <img src={canvasSeries.heroImage} alt={`${canvasSeries.title} feature`} />
          </a>
        ) : null}
        <div>
          <p className={styles.eyebrow}>SURFACE AND MATERIAL</p>
          <h2 id="material-title">The botanical form is treated with the restraint of a jewel setting.</h2>
          <p>
            Black grounds isolate silhouette and presence. Canvas studies connect cultivated
            forms to a woven pictorial field. Vellum-like surfaces soften the image toward memory,
            while photographic and object-based works keep the material close to observation and
            handling.
          </p>
          <a className={styles.secondaryCta} href="/about">
            Read about the practice
          </a>
        </div>
      </section>

      <section className={styles.signatureFeature} aria-labelledby="signature-title">
        {vellumSeries ? (
          <a href={`/works/${vellumSeries.slug}`}>
            <img src={vellumSeries.heroImage} alt={`${vellumSeries.title} detail`} />
          </a>
        ) : null}
        <div>
          <p className={styles.eyebrow}>FOR EDITORS AND MAISONS</p>
          <h2 id="signature-title">A portfolio intended to remain after one quiet image.</h2>
          <p>
            The visual direction now places fewer elements on each screen, increases the sense of
            negative space, and lets the botanical work carry the luxury signal through discipline,
            not ornament.
          </p>
          <a className={styles.secondaryCta} href="/editorial">
            Open editorial viewing route
          </a>
        </div>
      </section>

      <section className={styles.pathwayGrid} aria-label="Main site pathways">
        <a href="/dossier">
          <span>01</span>
          <h2>Dossier</h2>
          <p>A short curated route for editors, curators, collectors, and maison teams.</p>
        </a>
        <a href="/projects/botanical-portraits">
          <span>02</span>
          <h2>Works</h2>
          <p>Browse the public portfolio by botanical series and visual condition.</p>
        </a>
        <a href="/acquisitions">
          <span>03</span>
          <h2>Acquisitions</h2>
          <p>Collector, gallery, advisor, and artwork-related enquiry route.</p>
        </a>
        <a href="/curatorial">
          <span>04</span>
          <h2>Curatorial</h2>
          <p>Institutional, exhibition, cultural, and critical context route.</p>
        </a>
      </section>

      <section className={styles.resourceStrip} aria-labelledby="resource-title">
        <div>
          <p className={styles.eyebrow}>VISITOR ROUTES</p>
          <h2 id="resource-title">Context for editors, curators, collectors, and project teams.</h2>
        </div>
        <div className={styles.resourceLinks}>
          <a href="/dossier">Curated dossier</a>
          <a href="/archive">Series archive</a>
          <a href="/process">Process</a>
          <a href="/curatorial">Curatorial</a>
          <a href="/acquisitions">Acquisitions</a>
          <a href="/collaborations">Collaborations</a>
          <a href="/press">Press / image requests</a>
        </div>
      </section>

      <section className={styles.finalCta} aria-labelledby="final-cta-title">
        <div>
          <p className={styles.eyebrow}>CONTACT</p>
          <h2 id="final-cta-title">For editorial, curatorial, acquisition, maison, and project enquiries.</h2>
          <p>{siteConfig.contactEmail}</p>
        </div>
        <a className={styles.primaryCta} href={mailtoHref("Masumi Shiohara enquiry")}>
          Send enquiry
        </a>
      </section>
    </main>
  );
}
