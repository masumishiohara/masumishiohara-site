import type { Metadata } from "next";
import styles from "./exhibitions.module.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://masumishiohara-site.vercel.app";

export const metadata: Metadata = {
  title: "Exhibitions | Masumi Shiohara",
  description:
    "Exhibitions, project records, selected CV, and archive notes for Masumi Shiohara's botanical works.",
  alternates: {
    canonical: `${siteUrl}/exhibitions`,
  },
  openGraph: {
    title: "Exhibitions | Masumi Shiohara",
    description:
      "Exhibition and project archive page for Masumi Shiohara's botanical works.",
    url: `${siteUrl}/exhibitions`,
    type: "website",
  },
};

const archiveSections = [
  {
    label: "Exhibitions",
    title: "Solo and group exhibitions",
    text:
      "Confirmed exhibition records will be listed here in reverse chronological order after the content pass.",
  },
  {
    label: "Projects",
    title: "Botanical and orchard-based projects",
    text:
      "Project-based works, collaborations, residencies, and field records can be organized here without changing the page structure.",
  },
  {
    label: "Publications",
    title: "Books, catalogues, and editorial features",
    text:
      "Publication details, essays, press links, and catalogue notes can be added once the source information is confirmed.",
  },
];

const timelinePlaceholders = [
  "Upcoming / current exhibitions",
  "Selected recent exhibitions",
  "Selected earlier exhibitions",
  "Publications and related projects",
];

export default function ExhibitionsPage() {
  return (
    <main className={styles.exhibitionsPage}>
      <section className={styles.intro} aria-labelledby="exhibitions-title">
        <p className={styles.eyebrow}>EXHIBITIONS / ARCHIVE</p>
        <h1 id="exhibitions-title">Exhibition records and project archive.</h1>
        <p className={styles.lead}>
          This page is structured as the public CV area for Masumi Shiohara. It can hold
          exhibitions, publications, project records, texts, and related activity without
          interrupting the primary Works pathway.
        </p>
      </section>

      <section className={styles.archiveGrid} aria-label="Archive sections">
        {archiveSections.map((section) => (
          <article key={section.label}>
            <span>{section.label}</span>
            <h2>{section.title}</h2>
            <p>{section.text}</p>
          </article>
        ))}
      </section>

      <section className={styles.timelineBlock} aria-labelledby="timeline-title">
        <div>
          <p className={styles.eyebrow}>CV STRUCTURE</p>
          <h2 id="timeline-title">A clean record area ready for confirmed dates.</h2>
        </div>
        <div className={styles.timelineList}>
          {timelinePlaceholders.map((item) => (
            <div className={styles.timelineItem} key={item}>
              <span>To be confirmed</span>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.finalCta} aria-labelledby="exhibitions-cta-title">
        <div>
          <p className={styles.eyebrow}>FOR CURATORS / EDITORS</p>
          <h2 id="exhibitions-cta-title">Begin with the works, then use the contact page for enquiries.</h2>
        </div>
        <div className={styles.ctaRow}>
          <a className={styles.primaryCta} href="/projects/botanical-portraits">
            View works
          </a>
          <a className={styles.secondaryCta} href="/contact">
            Contact
          </a>
        </div>
      </section>
    </main>
  );
}
