import type { Metadata } from "next";
import { workSeries } from "../work-series-data";
import { siteConfig } from "../site-config";
import styles from "./archive.module.css";

const siteUrl = siteConfig.siteUrl;
const heroSeries = workSeries.find((series) => series.slug === "canvas-botanical-studies") ?? workSeries[0];

export const metadata: Metadata = {
  title: "Series Archive | Masumi Shiohara",
  description:
    "A compact archive index of Masumi Shiohara's botanical work series for fast editorial, curatorial, acquisition, and reference review.",
  alternates: {
    canonical: `${siteUrl}/archive`,
  },
  openGraph: {
    title: "Series Archive | Masumi Shiohara",
    description:
      "A compact series archive for fast editorial, curatorial, acquisition, and reference review.",
    url: `${siteUrl}/archive`,
    type: "website",
    images: heroSeries?.heroImage
      ? [
          {
            url: `${siteUrl}${heroSeries.heroImage}`,
            width: 1200,
            height: 900,
            alt: "Masumi Shiohara series archive image",
          },
        ]
      : undefined,
  },
};

const archiveNotes = [
  "Use the archive when a fast overview is more useful than a large visual browse.",
  "Open an individual series when you need title, atmosphere, and image reference together.",
  "For external requests, include the series title, code, and URL in the first message.",
];

export default function ArchivePage() {
  return (
    <main className={styles.archivePage}>
      <section className={styles.hero} aria-labelledby="archive-title">
        <div>
          <p className={styles.eyebrow}>SERIES ARCHIVE / MASUMI SHIOHARA</p>
          <h1 id="archive-title">A compact index for fast professional review.</h1>
          <p className={styles.lead}>
            The archive collects the public series paths into a more concise format for editors,
            curators, collectors, advisors, and project teams who need a clear overview before
            opening individual portfolio pages.
          </p>
        </div>
        {heroSeries ? (
          <a className={styles.heroImage} href={`/works/${heroSeries.slug}`}>
            <img src={heroSeries.heroImage} alt={`${heroSeries.title} archive reference`} />
            <span>{heroSeries.title}</span>
          </a>
        ) : null}
      </section>

      <section className={styles.archiveIntro} aria-labelledby="archive-intro-title">
        <p className={styles.eyebrow}>REFERENCE USE</p>
        <h2 id="archive-intro-title">The work is organized as a sequence of rooms, not as loose images.</h2>
        <div>
          {archiveNotes.map((note) => (
            <p key={note}>{note}</p>
          ))}
        </div>
      </section>

      <section className={styles.seriesTable} aria-label="Series archive list">
        {workSeries.map((series, index) => (
          <a key={series.slug} href={`/works/${series.slug}`}>
            <span className={styles.index}>{String(index + 1).padStart(2, "0")}</span>
            <span className={styles.code}>{series.code}</span>
            <span className={styles.title}>{series.title}</span>
            <span className={styles.statement}>{series.statement}</span>
          </a>
        ))}
      </section>

      <section className={styles.routeBand} aria-label="Archive route links">
        <a href="/dossier">Curated dossier</a>
        <a href="/curatorial">Curatorial context</a>
        <a href="/projects/botanical-portraits">Visual works index</a>
      </section>
    </main>
  );
}
