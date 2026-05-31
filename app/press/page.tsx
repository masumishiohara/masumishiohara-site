import type { Metadata } from "next";
import { mailtoHref, siteConfig } from "../site-config";
import styles from "./press.module.css";

const siteUrl = siteConfig.siteUrl;

export const metadata: Metadata = {
  title: "Press & Image Requests | Masumi Shiohara",
  description:
    "Press, publication, image-use, editorial, maison, credit, and reference guidance for Masumi Shiohara's cultivated botanical works.",
  alternates: {
    canonical: `${siteUrl}/press`,
  },
  openGraph: {
    title: "Press & Image Requests | Masumi Shiohara",
    description:
      "Guidance for editors, writers, curators, maisons, and institutions preparing press or image-use enquiries.",
    url: `${siteUrl}/press`,
    type: "website",
  },
};

const pressSections = [
  {
    label: "Editorial requests",
    text:
      "State the publication, article direction, format, language, deadline, target images, and whether the request is for web, print, social, film, or archive use.",
  },
  {
    label: "Maison requests",
    text:
      "Include the project context, desired atmosphere, usage scope, duration, image dimensions, presentation format, and whether the request relates to an image, object, installation, or collaboration.",
  },
  {
    label: "Image use",
    text:
      "Images should not be treated as cleared for use until permission is confirmed. Include target work or series URL, file size, territory, usage period, and deadline.",
  },
  {
    label: "Credit line",
    text:
      "Use the artist name, series or work title when confirmed, year if supplied, and any required courtesy or photographer credit. Final credit details should be checked before publication.",
  },
];

const requestChecklist = [
  "Name, role, organization, and contact route",
  "Series URL or work page URL",
  "Editorial, exhibition, brand, or project context",
  "Image size, format, deadline, and publication date",
  "Credit line, language, territory, duration, and approval timing",
];

export default function PressPage() {
  return (
    <main className={styles.pressPage}>
      <section className={styles.intro} aria-labelledby="press-title">
        <p className={styles.eyebrow}>PRESS / IMAGE REQUESTS</p>
        <h1 id="press-title">Editorial and image-use requests with precise references.</h1>
        <p className={styles.lead}>
          This page gives editors, writers, curators, maisons, and institutions a refined route for
          image, press, and publication requests. It keeps permissions, credit, and work references
          explicit before production deadlines begin.
        </p>
        <div className={styles.ctaRow}>
          <a className={styles.primaryCta} href={mailtoHref("Press or image request for Masumi Shiohara")}>
            Email {siteConfig.contactEmail}
          </a>
          <a className={styles.secondaryCta} href="/editorial">
            Editorial route
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

      <section className={styles.emailPanel} aria-labelledby="press-email-title">
        <div>
          <p className={styles.eyebrow}>DIRECT CONTACT</p>
          <h2 id="press-email-title">Send press and image-use requests directly.</h2>
          <p>{siteConfig.contactEmail}</p>
        </div>
        <a className={styles.primaryCta} href={mailtoHref("Press and image-use request for Masumi Shiohara")}>
          Send request
        </a>
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
