import type { Metadata } from "next";
import styles from "./press.module.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.masumishiohara.com";

export const metadata: Metadata = {
  title: "Press & Image Requests | Masumi Shiohara",
  description:
    "Press, publication, image-use, credit, and reference guidance for Masumi Shiohara's cultivated botanical works.",
  alternates: {
    canonical: `${siteUrl}/press`,
  },
  openGraph: {
    title: "Press & Image Requests | Masumi Shiohara",
    description:
      "Guidance for editors, writers, curators, and institutions preparing press or image-use enquiries.",
    url: `${siteUrl}/press`,
    type: "website",
  },
};

const pressSections = [
  {
    label: "Image requests",
    text:
      "State the target work or series URL, requested file size, publication context, usage period, territory, and deadline. Images should not be treated as cleared for use until permission is confirmed.",
  },
  {
    label: "Credit line",
    text:
      "Use the artist name, series or work title when confirmed, year if supplied, and any required courtesy or photographer credit. Final credit details should be checked before publication.",
  },
  {
    label: "Editorial context",
    text:
      "Include publication name, article theme, language, format, publication date, and whether the request is for web, print, social, broadcast, exhibition wall text, or archive use.",
  },
  {
    label: "Curatorial packets",
    text:
      "For exhibition proposals or institutional review, begin from the works index and reference the specific series pages that are relevant to the proposal.",
  },
];

const requestChecklist = [
  "Name, role, organization, and contact route",
  "Series URL or work page URL",
  "Usage context and publication or exhibition title",
  "Image size, format, deadline, and publication date",
  "Credit line, language, territory, and duration",
];

export default function PressPage() {
  return (
    <main className={styles.pressPage}>
      <section className={styles.intro} aria-labelledby="press-title">
        <p className={styles.eyebrow}>PRESS / IMAGE REQUESTS</p>
        <h1 id="press-title">Use exact references before requesting images or publication material.</h1>
        <p className={styles.lead}>
          This page gives editors, writers, curators, and institutions a clean route for image,
          press, and publication requests. It keeps permissions, credit, and work references
          explicit before production deadlines begin.
        </p>
        <div className={styles.ctaRow}>
          <a className={styles.primaryCta} href="/projects/botanical-portraits">
            View works
          </a>
          <a className={styles.secondaryCta} href="/contact">
            Contact guide
          </a>
        </div>
      </section>

      <section className={styles.pressGrid} aria-label="Press request guidance">
        {pressSections.map((section) => (
          <article key={section.label}>
            <span>{section.label}</span>
            <p>{section.text}</p>
          </article>
        ))}
      </section>

      <section className={styles.checklistBlock} aria-labelledby="request-checklist-title">
        <div>
          <p className={styles.eyebrow}>REQUEST FORMAT</p>
          <h2 id="request-checklist-title">Include these details in the first message.</h2>
        </div>
        <div className={styles.checklist}>
          {requestChecklist.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </section>

      <section className={styles.finalCta} aria-labelledby="press-cta-title">
        <div>
          <p className={styles.eyebrow}>REFERENCE FIRST</p>
          <h2 id="press-cta-title">Open the relevant series, then prepare the request.</h2>
        </div>
        <a className={styles.primaryCta} href="/projects/botanical-portraits">
          Open works index
        </a>
      </section>
    </main>
  );
}
