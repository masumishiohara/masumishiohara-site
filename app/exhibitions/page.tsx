import type { Metadata } from "next";
import styles from "./exhibitions.module.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://masumishiohara-site.vercel.app";

export const metadata: Metadata = {
  title: "Exhibitions and Archive | Masumi Shiohara",
  description:
    "Exhibitions, project records, selected CV, publications, and archive notes for Masumi Shiohara's botanical works.",
  alternates: {
    canonical: `${siteUrl}/exhibitions`,
  },
  openGraph: {
    title: "Exhibitions and Archive | Masumi Shiohara",
    description:
      "Archive page for exhibitions, projects, publications, and related activity connected to Masumi Shiohara's botanical works.",
    url: `${siteUrl}/exhibitions`,
    type: "website",
  },
};

const archiveSections = [
  {
    label: "Exhibitions",
    title: "Solo and group exhibitions",
    text:
      "A reverse-chronological exhibition list can be placed here after confirmed dates, venues, and titles are collected.",
  },
  {
    label: "Projects",
    title: "Botanical and orchard-based projects",
    text:
      "Project-based works, field records, collaborations, residencies, and research notes can be organized here without changing the design.",
  },
  {
    label: "Publications",
    title: "Books, catalogues, and editorial features",
    text:
      "Publication details, essays, press links, catalogue notes, and interviews can be added as confirmed source information becomes available.",
  },
];

const cvBlocks = [
  {
    period: "Current",
    title: "Portfolio and project archive",
    text:
      "The public portfolio is structured around botanical series, with this page reserved for the verified CV and archive layer.",
  },
  {
    period: "Selected",
    title: "Exhibition history",
    text:
      "Solo exhibitions, group exhibitions, art fairs, and public presentations will be listed with year, title, venue, and location.",
  },
  {
    period: "Related",
    title: "Editorial and publication records",
    text:
      "Catalogue texts, books, magazines, interviews, and online features can be added as separate archive entries.",
  },
  {
    period: "Projects",
    title: "Collaborations and field-based activity",
    text:
      "Orchard-based projects, commissions, residencies, and collaborations can be connected back to the relevant work series.",
  },
];

export default function ExhibitionsPage() {
  return (
    <main className={styles.exhibitionsPage}>
      <section className={styles.intro} aria-labelledby="exhibitions-title">
        <p className={styles.eyebrow}>EXHIBITIONS / ARCHIVE</p>
        <h1 id="exhibitions-title">Exhibition records and project archive.</h1>
        <p className={styles.lead}>
          This page is the public CV and archive area for Masumi Shiohara. It is prepared to
          hold exhibitions, publications, project records, texts, and related activity while
          keeping the primary portfolio path focused on Works.
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
          {cvBlocks.map((item) => (
            <div className={styles.timelineItem} key={item.title}>
              <span>{item.period}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
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
