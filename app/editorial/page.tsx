import type { Metadata } from "next";
import { workSeries } from "../work-series-data";
import { mailtoHref, siteConfig } from "../site-config";
import styles from "./editorial.module.css";

const siteUrl = siteConfig.siteUrl;
type WorkSeriesItem = (typeof workSeries)[number];

const blackGround = workSeries.find((series) => series.slug === "black-ground-botanical-works") ?? workSeries[0];
const editorialSlugs = [
  "black-ground-botanical-works",
  "canvas-botanical-studies",
  "vellum-fruit-studies",
];
const leadSeries = editorialSlugs
  .map((slug) => workSeries.find((series) => series.slug === slug))
  .filter((series): series is WorkSeriesItem => Boolean(series));
const additionalSeries = workSeries
  .filter((series) => !leadSeries.some((lead) => lead.slug === series.slug))
  .slice(0, Math.max(0, 6 - leadSeries.length));
const selectedSeries = [...leadSeries, ...additionalSeries];

export const metadata: Metadata = {
  title: "Editorial & Maison Viewing | Masumi Shiohara",
  description:
    "A refined route for editors, curators, maison teams, galleries, and cultural partners reviewing Masumi Shiohara's botanical works.",
  alternates: {
    canonical: `${siteUrl}/editorial`,
  },
  openGraph: {
    title: "Editorial & Maison Viewing | Masumi Shiohara",
    description:
      "A refined route for publication, curatorial, maison, and image-use enquiries.",
    url: `${siteUrl}/editorial`,
    type: "website",
    images: blackGround?.heroImage
      ? [
          {
            url: `${siteUrl}${blackGround.heroImage}`,
            width: 1200,
            height: 900,
            alt: "Masumi Shiohara editorial viewing selection",
          },
        ]
      : undefined,
  },
};

const viewingNotes = [
  {
    label: "Editorial clarity",
    text: "Series are organized for quick reference, concise captioning, and a clear visual hierarchy for web or print editorial review.",
  },
  {
    label: "Maison context",
    text: "The presentation emphasizes rarity, material restraint, botanical silhouette, surface, and atmosphere rather than decorative excess.",
  },
  {
    label: "Curatorial use",
    text: "Each work path can be used as a stable reference when preparing exhibition notes, image requests, or institutional proposals.",
  },
];

const requestDetails = [
  "Publication, brand, institution, or project name",
  "Relevant series URL or work URL",
  "Usage context, territory, duration, and deadline",
  "Image size, format, caption, and credit needs",
  "Contact person and preferred response timing",
];

export default function EditorialPage() {
  return (
    <main className={styles.editorialPage}>
      <section className={styles.hero} aria-labelledby="editorial-title">
        <div>
          <p className={styles.eyebrow}>EDITORIAL / MAISON VIEWING</p>
          <h1 id="editorial-title">A quiet route for publication, maison, and curatorial review.</h1>
          <p className={styles.lead}>
            This page is designed for editors, writers, curators, galleries, maisons, and cultural
            partners who need a refined first view of Masumi Shiohara's cultivated botanical works.
          </p>
          <div className={styles.ctaRow}>
            <a className={styles.primaryCta} href="/projects/botanical-portraits">
              View works
            </a>
            <a className={styles.secondaryCta} href={mailtoHref("Editorial or maison enquiry for Masumi Shiohara")}>
              Email enquiry
            </a>
          </div>
        </div>
        {blackGround ? (
          <a className={styles.heroImage} href={`/works/${blackGround.slug}`}>
            <img src={blackGround.heroImage} alt={`${blackGround.title} by Masumi Shiohara`} />
            <span>{blackGround.title}</span>
          </a>
        ) : null}
      </section>

      <section className={styles.noteGrid} aria-label="Editorial viewing notes">
        {viewingNotes.map((note) => (
          <article key={note.label}>
            <span>{note.label}</span>
            <p>{note.text}</p>
          </article>
        ))}
      </section>

      <section className={styles.selection} aria-labelledby="selection-title">
        <div className={styles.sectionHeader}>
          <p className={styles.eyebrow}>SELECTED ENTRY POINTS</p>
          <h2 id="selection-title">Series with strong editorial presence.</h2>
          <p>
            Begin with these series when a request concerns still life, botanical atmosphere,
            image surface, luxury-craft context, or material memory.
          </p>
        </div>
        <div className={styles.seriesGrid}>
          {selectedSeries.map((series) => (
            <a href={`/works/${series.slug}`} key={series.slug}>
              <img src={series.heroImage} alt={`${series.title} thumbnail`} />
              <div>
                <span>{series.code}</span>
                <h3>{series.title}</h3>
                <p>{series.statement}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className={styles.requestBlock} aria-labelledby="request-title">
        <div>
          <p className={styles.eyebrow}>REQUEST FORMAT</p>
          <h2 id="request-title">Send enough detail to make the first reply useful.</h2>
        </div>
        <div className={styles.requestList}>
          {requestDetails.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </section>

      <section className={styles.finalCta} aria-labelledby="editorial-cta-title">
        <div>
          <p className={styles.eyebrow}>DIRECT CONTACT</p>
          <h2 id="editorial-cta-title">For editorial, maison, press, and project enquiries.</h2>
          <p>{siteConfig.contactEmail}</p>
        </div>
        <a className={styles.primaryCta} href={mailtoHref("Editorial or maison enquiry for Masumi Shiohara")}>
          Contact
        </a>
      </section>
    </main>
  );
}
