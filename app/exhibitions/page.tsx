import type { Metadata } from "next";
import { siteConfig } from "../site-config";
import { siteContent } from "../cms-content";
import styles from "./exhibitions.module.css";

const siteUrl = siteConfig.siteUrl;

export const metadata: Metadata = {
  title: "Exhibitions and Installation Views | Masumi Shiohara",
  description:
    "Exhibition history, installation views, venue records, publications, and project archive for Masumi Shiohara's cultivated botanical works.",
  alternates: {
    canonical: `${siteUrl}/exhibitions`,
  },
  openGraph: {
    title: "Exhibitions and Installation Views | Masumi Shiohara",
    description:
      "Exhibition history and installation-view archive for Masumi Shiohara's cultivated botanical works.",
    url: `${siteUrl}/exhibitions`,
    type: "website",
  },
};

const archiveSections = [
  {
    label: "Exhibitions",
    title: "Installation views and venue records",
    text:
      "Each exhibition can hold year, title, venue, location, statement, and one or more installation photographs.",
  },
  {
    label: "Awards",
    title: "Selections and external references",
    text:
      "Awards and external references are separated into their own page so source links remain clear and verifiable.",
  },
  {
    label: "Publications",
    title: "Books, catalogues, and editorial features",
    text:
      "Publication details, essays, press links, catalogue notes, and interviews can be added as confirmed source information becomes available.",
  },
];

export default function ExhibitionsPage() {
  return (
    <main className={styles.exhibitionsPage}>
      <section className={styles.intro} aria-labelledby="exhibitions-title">
        <p className={styles.eyebrow}>EXHIBITIONS / INSTALLATION VIEWS</p>
        <h1 id="exhibitions-title">Exhibition records with room for installation images.</h1>
        <p className={styles.lead}>
          This page is the public exhibition and project record for Masumi Shiohara. It is prepared
          for confirmed dates, venues, installation photographs, publications, and related archive notes.
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

      <section className={styles.installationList} aria-labelledby="installation-title">
        <div className={styles.installationIntro}>
          <p className={styles.eyebrow}>INSTALLATION RECORDS</p>
          <h2 id="installation-title">Exhibition entries can include images, venues, and notes.</h2>
        </div>
        <div className={styles.installationItems}>
          {siteContent.exhibitions.map((exhibition) => (
            <article className={styles.installationItem} key={`${exhibition.year}-${exhibition.title}`}>
              <div className={styles.installationImage}>
                {exhibition.image ? (
                  <img src={exhibition.image} alt={exhibition.imageAlt} />
                ) : (
                  <span>Installation image to be added</span>
                )}
              </div>
              <div>
                <span>{exhibition.year}</span>
                <h3>{exhibition.title}</h3>
                <p className={styles.venue}>{exhibition.venue} / {exhibition.location}</p>
                <p>{exhibition.summary}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.finalCta} aria-labelledby="exhibitions-cta-title">
        <div>
          <p className={styles.eyebrow}>FOR CURATORS / EDITORS</p>
          <h2 id="exhibitions-cta-title">Use Works for visual review and Awards for external source links.</h2>
        </div>
        <div className={styles.ctaRow}>
          <a className={styles.primaryCta} href="/projects/botanical-portraits">
            View works
          </a>
          <a className={styles.secondaryCta} href="/awards">
            Awards
          </a>
          <a className={styles.secondaryCta} href="/contact">
            Contact
          </a>
        </div>
      </section>
    </main>
  );
}
