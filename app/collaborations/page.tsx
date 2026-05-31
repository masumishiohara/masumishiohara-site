import type { Metadata } from "next";
import { workSeries } from "../work-series-data";
import { mailtoHref, siteConfig } from "../site-config";
import styles from "./collaborations.module.css";

const siteUrl = siteConfig.siteUrl;
const heroSeries = workSeries.find((series) => series.slug === "black-ground-botanical-works") ?? workSeries[0];

export const metadata: Metadata = {
  title: "Maison & Cultural Collaborations | Masumi Shiohara",
  description:
    "Collaboration route for maison, editorial, cultural, installation, and material-led projects involving Masumi Shiohara's cultivated botanical works.",
  alternates: {
    canonical: `${siteUrl}/collaborations`,
  },
  openGraph: {
    title: "Maison & Cultural Collaborations | Masumi Shiohara",
    description:
      "A quiet route for maison, editorial, cultural, installation, and material-led project conversations.",
    url: `${siteUrl}/collaborations`,
    type: "website",
    images: heroSeries?.heroImage
      ? [
          {
            url: `${siteUrl}${heroSeries.heroImage}`,
            width: 1200,
            height: 900,
            alt: "Masumi Shiohara maison collaboration reference",
          },
        ]
      : undefined,
  },
};

const projectModes = [
  {
    label: "Editorial still life",
    text: "Image direction, feature visuals, botanical still-life studies, and publication contexts where restraint and atmosphere are central.",
  },
  {
    label: "Maison and craft context",
    text: "Material-led visual research, seasonal botanical language, refined image environments, and cultural projects requiring quiet precision.",
  },
  {
    label: "Exhibition and installation",
    text: "Series presentation, object and image pairing, botanical archive concepts, and spatial contexts related to cultivation and memory.",
  },
];

const briefItems = [
  "Project name and organization",
  "Intended context: editorial, maison, exhibition, publication, installation, or cultural project",
  "Relevant visual references from the portfolio",
  "Timeline, usage scope, territory, and deliverable format",
  "Credit, budget stage, and decision timeline if available",
];

export default function CollaborationsPage() {
  return (
    <main className={styles.collaborationsPage}>
      <section className={styles.hero} aria-labelledby="collaborations-title">
        <div>
          <p className={styles.eyebrow}>MAISON / CULTURAL COLLABORATIONS</p>
          <h1 id="collaborations-title">Botanical work for refined project and cultural contexts.</h1>
          <p className={styles.lead}>
            This route is for maison, editorial, cultural, exhibition, and installation enquiries
            where Masumi Shiohara's botanical work may function as image, material reference,
            object language, or visual atmosphere.
          </p>
          <div className={styles.ctaRow}>
            <a className={styles.primaryCta} href="/dossier">Open curated dossier</a>
            <a className={styles.secondaryCta} href={mailtoHref("Maison or collaboration enquiry for Masumi Shiohara")}>Email enquiry</a>
          </div>
        </div>
        {heroSeries ? (
          <a className={styles.heroImage} href={`/works/${heroSeries.slug}`}>
            <img src={heroSeries.heroImage} alt={`${heroSeries.title} collaboration reference`} />
            <span>{heroSeries.title}</span>
          </a>
        ) : null}
      </section>

      <section className={styles.modes} aria-label="Collaboration modes">
        {projectModes.map((mode) => (
          <article key={mode.label}>
            <span>{mode.label}</span>
            <p>{mode.text}</p>
          </article>
        ))}
      </section>

      <section className={styles.briefBlock} aria-labelledby="brief-title">
        <div>
          <p className={styles.eyebrow}>PROJECT BRIEF</p>
          <h2 id="brief-title">A refined enquiry starts with context and restraint.</h2>
        </div>
        <div className={styles.briefList}>
          {briefItems.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </section>

      <section className={styles.linkGrid} aria-label="Related pathways">
        <a href="/editorial">
          <span>Editorial route</span>
          <p>For publication, feature, and image direction requests.</p>
        </a>
        <a href="/press">
          <span>Press route</span>
          <p>For image-use, caption, and credit requirements.</p>
        </a>
        <a href="/contact">
          <span>Contact</span>
          <p>Send the project brief to {siteConfig.contactEmail}.</p>
        </a>
      </section>

      <section className={styles.finalCta} aria-labelledby="collaborations-cta-title">
        <div>
          <p className={styles.eyebrow}>DIRECT CONTACT</p>
          <h2 id="collaborations-cta-title">For maison, editorial, cultural, and installation projects.</h2>
          <p>{siteConfig.contactEmail}</p>
        </div>
        <a className={styles.primaryCta} href={mailtoHref("Maison or collaboration enquiry for Masumi Shiohara")}>Send brief</a>
      </section>
    </main>
  );
}
