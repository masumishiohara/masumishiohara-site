import type { Metadata } from "next";
import { workSeries } from "../work-series-data";
import { mailtoHref, siteConfig } from "../site-config";
import styles from "./dossier.module.css";

const siteUrl = siteConfig.siteUrl;
type WorkSeriesItem = (typeof workSeries)[number];

const prioritySlugs = [
  "black-ground-botanical-works",
  "canvas-botanical-studies",
  "vellum-fruit-studies",
  "antique-botanical-studies",
  "single-botanical-portraits",
  "orchard-and-fruit-studies",
];

const prioritySeries = prioritySlugs
  .map((slug) => workSeries.find((series) => series.slug === slug))
  .filter((series): series is WorkSeriesItem => Boolean(series));

const fallbackSeries = workSeries
  .filter((series) => !prioritySeries.some((item) => item.slug === series.slug))
  .slice(0, Math.max(0, 9 - prioritySeries.length));

const dossierSeries = [...prioritySeries, ...fallbackSeries].slice(0, 9);
const heroSeries = dossierSeries[0] ?? workSeries[0];

export const metadata: Metadata = {
  title: "Curated Dossier | Masumi Shiohara",
  description:
    "A concise editorial dossier of Masumi Shiohara's cultivated botanical works for curators, editors, galleries, collectors, and maison teams.",
  alternates: {
    canonical: `${siteUrl}/dossier`,
  },
  openGraph: {
    title: "Curated Dossier | Masumi Shiohara",
    description:
      "A concise selection of cultivated botanical works arranged for high-level editorial and curatorial review.",
    url: `${siteUrl}/dossier`,
    type: "website",
    images: heroSeries?.heroImage
      ? [
          {
            url: `${siteUrl}${heroSeries.heroImage}`,
            width: 1200,
            height: 900,
            alt: "Masumi Shiohara curated dossier image",
          },
        ]
      : undefined,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  name: "Curated Dossier | Masumi Shiohara",
  url: `${siteUrl}/dossier`,
  creator: {
    "@type": "Person",
    name: "Masumi Shiohara",
  },
  about: "Cultivated botanical works arranged for editorial, curatorial, acquisition, and maison review.",
};

export default function DossierPage() {
  return (
    <main className={styles.dossierPage}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className={styles.hero} aria-labelledby="dossier-title">
        <div>
          <p className={styles.eyebrow}>CURATED DOSSIER / MASUMI SHIOHARA</p>
          <h1 id="dossier-title">A short route for editors, curators, collectors, and maison teams.</h1>
          <p className={styles.lead}>
            This dossier reduces the site to a refined first selection. It is meant for quick
            high-level review before a publication, exhibition, acquisition, image request, or
            cultural collaboration enquiry.
          </p>
          <div className={styles.ctaRow}>
            <a className={styles.primaryCta} href="/projects/botanical-portraits">View complete works</a>
            <a className={styles.secondaryCta} href={mailtoHref("Dossier enquiry for Masumi Shiohara")}>Email enquiry</a>
          </div>
        </div>
        {heroSeries ? (
          <a className={styles.heroImage} href={`/works/${heroSeries.slug}`}>
            <img src={heroSeries.heroImage} alt={`${heroSeries.title} by Masumi Shiohara`} />
            <span>{heroSeries.title}</span>
          </a>
        ) : null}
      </section>

      <section className={styles.editorialNote} aria-labelledby="note-title">
        <p className={styles.eyebrow}>VIEWING NOTE</p>
        <h2 id="note-title">Designed to read as a quiet visual dossier, not a large archive.</h2>
        <p>
          The selection favors negative space, botanical silhouette, material surface, and a
          measured sense of rarity. It is intentionally restrained so the work can be assessed
          for editorial placement, curatorial context, acquisition interest, or maison-level
          visual alignment without visual noise.
        </p>
      </section>

      <section className={styles.selection} aria-labelledby="selection-title">
        <div className={styles.sectionHeader}>
          <p className={styles.eyebrow}>SELECTED SERIES</p>
          <h2 id="selection-title">Nine entry points with strong visual identity.</h2>
        </div>
        <div className={styles.selectionGrid}>
          {dossierSeries.map((series, index) => (
            <a href={`/works/${series.slug}`} key={series.slug} className={index === 0 ? styles.featureCard : undefined}>
              <img src={series.heroImage} alt={`${series.title} portfolio selection`} />
              <div>
                <span>{series.code}</span>
                <h3>{series.title}</h3>
                <p>{series.statement}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className={styles.routes} aria-label="Dossier routes">
        <a href="/editorial">
          <span>Editorial</span>
          <p>Publication, image direction, interview, and feature review.</p>
        </a>
        <a href="/acquisitions">
          <span>Acquisitions</span>
          <p>Collector, gallery, and artwork availability enquiries.</p>
        </a>
        <a href="/collaborations">
          <span>Collaborations</span>
          <p>Maison, cultural partner, installation, and project conversations.</p>
        </a>
      </section>

      <section className={styles.finalCta} aria-labelledby="dossier-cta-title">
        <div>
          <p className={styles.eyebrow}>DIRECT CONTACT</p>
          <h2 id="dossier-cta-title">Send a precise enquiry with the page or series URL.</h2>
          <p>{siteConfig.contactEmail}</p>
        </div>
        <a className={styles.primaryCta} href={mailtoHref("Curated dossier enquiry for Masumi Shiohara")}>Contact</a>
      </section>
    </main>
  );
}
