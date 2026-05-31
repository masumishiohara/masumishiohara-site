import type { Metadata } from "next";
import { workSeries } from "../work-series-data";
import { mailtoHref, siteConfig } from "../site-config";
import styles from "./curatorial.module.css";

const siteUrl = siteConfig.siteUrl;
const heroSeries = workSeries.find((series) => series.slug === "black-ground-botanical-works") ?? workSeries[0];
const contextSeries = workSeries.slice(0, 6);

export const metadata: Metadata = {
  title: "Curatorial Context | Masumi Shiohara",
  description:
    "Curatorial context for Masumi Shiohara's cultivated botanical works, arranged for exhibitions, institutions, editorial research, and cultural presentation.",
  alternates: {
    canonical: `${siteUrl}/curatorial`,
  },
  openGraph: {
    title: "Curatorial Context | Masumi Shiohara",
    description:
      "A quiet curatorial entry point for exhibitions, institutions, editorial research, and cultural presentation.",
    url: `${siteUrl}/curatorial`,
    type: "website",
    images: heroSeries?.heroImage
      ? [
          {
            url: `${siteUrl}${heroSeries.heroImage}`,
            width: 1200,
            height: 900,
            alt: "Masumi Shiohara curatorial context image",
          },
        ]
      : undefined,
  },
};

const curatorialPoints = [
  {
    number: "01",
    title: "Cultivation as duration",
    text:
      "The work begins before the image: in orchard time, plant care, harvest, handling, weather, and seasonal change. This duration gives the photographs and objects their material gravity.",
  },
  {
    number: "02",
    title: "Botanical form as presence",
    text:
      "Fruit, leaf, branch, blossom, and surface are treated as presences rather than decorative motifs. The restrained compositions make small natural forms feel exact and monumental.",
  },
  {
    number: "03",
    title: "Surface, memory, and archive",
    text:
      "The series move between black ground, canvas texture, vellum-like softness, and photographic record. Each surface changes the distance between specimen, image, and memory.",
  },
];

const exhibitionUses = [
  "Botanical image and contemporary still life",
  "Cultivation, orchard practice, and material memory",
  "Photography, surface, and object-based presentation",
  "Editorial still life, maison visual culture, and quiet luxury context",
];

export default function CuratorialPage() {
  return (
    <main className={styles.curatorialPage}>
      <section className={styles.hero} aria-labelledby="curatorial-title">
        <div>
          <p className={styles.eyebrow}>CURATORIAL CONTEXT / MASUMI SHIOHARA</p>
          <h1 id="curatorial-title">A practice held between cultivation, image, and material memory.</h1>
          <p className={styles.lead}>
            This page gives curators, editors, institutions, and cultural partners a concise
            reading of the work. It frames the series as a practice of cultivated botanical
            attention rather than a general image archive.
          </p>
          <div className={styles.ctaRow}>
            <a className={styles.primaryCta} href="/dossier">Open dossier</a>
            <a className={styles.secondaryCta} href="/projects/botanical-portraits">View works</a>
            <a className={styles.secondaryCta} href={mailtoHref("Curatorial enquiry for Masumi Shiohara")}>Curatorial enquiry</a>
          </div>
        </div>
        {heroSeries ? (
          <a className={styles.heroImage} href={`/works/${heroSeries.slug}`}>
            <img src={heroSeries.heroImage} alt={`${heroSeries.title} by Masumi Shiohara`} />
            <span>{heroSeries.title}</span>
          </a>
        ) : null}
      </section>

      <section className={styles.statement} aria-labelledby="statement-title">
        <p className={styles.eyebrow}>STATEMENT</p>
        <h2 id="statement-title">The botanical subject is not used as ornament. It is treated as evidence of time.</h2>
        <p>
          The work holds fruit and botanical forms at the threshold between specimen, still life,
          portrait, and archive. The images remain quiet, but the quietness is deliberate: it slows
          the viewer enough to see ripening, fragility, surface, care, and disappearance.
        </p>
      </section>

      <section className={styles.pointGrid} aria-label="Curatorial points">
        {curatorialPoints.map((point) => (
          <article key={point.number}>
            <span>{point.number}</span>
            <h2>{point.title}</h2>
            <p>{point.text}</p>
          </article>
        ))}
      </section>

      <section className={styles.seriesContext} aria-labelledby="series-title">
        <div className={styles.sectionHeader}>
          <p className={styles.eyebrow}>SERIES CONTEXT</p>
          <h2 id="series-title">Series that read strongly in exhibition, editorial, and maison contexts.</h2>
        </div>
        <div className={styles.seriesGrid}>
          {contextSeries.map((series) => (
            <a key={series.slug} href={`/works/${series.slug}`}>
              <img src={series.heroImage} alt={`${series.title} curatorial reference`} />
              <div>
                <span>{series.code}</span>
                <h3>{series.title}</h3>
                <p>{series.statement}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className={styles.usePanel} aria-labelledby="uses-title">
        <div>
          <p className={styles.eyebrow}>PRESENTATION USES</p>
          <h2 id="uses-title">A concise framework for exhibition or editorial positioning.</h2>
        </div>
        <ul>
          {exhibitionUses.map((use) => (
            <li key={use}>{use}</li>
          ))}
        </ul>
      </section>

      <section className={styles.finalCta} aria-labelledby="curatorial-cta-title">
        <div>
          <p className={styles.eyebrow}>NEXT STEP</p>
          <h2 id="curatorial-cta-title">Send a curatorial enquiry with the relevant series URL.</h2>
          <p>{siteConfig.contactEmail}</p>
        </div>
        <a className={styles.primaryCta} href={mailtoHref("Curatorial enquiry for Masumi Shiohara")}>Contact</a>
      </section>
    </main>
  );
}
