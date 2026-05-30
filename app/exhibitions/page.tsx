import type { Metadata } from "next";
import styles from "./exhibitions.module.css";

export const metadata: Metadata = {
  title: "Exhibitions | Masumi Shiohara",
  description:
    "Exhibition record and selected project history for Masumi Shiohara. Confirmed CV details can be added chronologically.",
};

const exhibitionSections = [
  {
    label: "Selected exhibitions",
    body:
      "Confirmed solo and group exhibition records will be listed here in reverse chronological order.",
  },
  {
    label: "Projects and publications",
    body:
      "Publication, commission, collaboration, and project records can be added as a separate archive when details are confirmed.",
  },
  {
    label: "CV material",
    body:
      "The structure is prepared for a concise artist CV without interrupting the visual portfolio flow.",
  },
];

export default function ExhibitionsPage() {
  return (
    <main className={styles.exhibitionsPage}>
      <section className={styles.intro} aria-labelledby="exhibitions-title">
        <p className={styles.eyebrow}>EXHIBITIONS / CV</p>
        <h1 id="exhibitions-title">Exhibition record prepared as a quiet archive.</h1>
        <p className={styles.lead}>
          This page is set up for confirmed exhibition history, publication
          notes, project records, and CV material. Until the final records are
          inserted, the page keeps the site structure complete without inventing
          unverified biographical details.
        </p>
      </section>

      <section className={styles.archiveGrid} aria-label="Exhibition archive structure">
        {exhibitionSections.map((section, index) => (
          <article key={section.label}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h2>{section.label}</h2>
            <p>{section.body}</p>
          </article>
        ))}
      </section>

      <section className={styles.timelinePanel} aria-labelledby="timeline-title">
        <div>
          <p className={styles.eyebrow}>NEXT CONTENT PASS</p>
          <h2 id="timeline-title">Chronological CV format</h2>
        </div>
        <div className={styles.timelineList}>
          <div>
            <span>Year</span>
            <p>Exhibition title / venue / city / country</p>
          </div>
          <div>
            <span>Year</span>
            <p>Publication, project, award, residency, or collaboration record</p>
          </div>
          <div>
            <span>Year</span>
            <p>Additional confirmed record</p>
          </div>
        </div>
      </section>

      <section className={styles.finalCta} aria-labelledby="exhibitions-cta-title">
        <p className={styles.eyebrow}>WORKS</p>
        <h2 id="exhibitions-cta-title">View the portfolio while CV details are prepared.</h2>
        <a className={styles.primaryCta} href="/projects/botanical-portraits">
          View works
        </a>
      </section>
    </main>
  );
}
