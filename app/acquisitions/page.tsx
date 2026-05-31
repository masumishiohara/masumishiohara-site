import type { Metadata } from "next";
import { workSeries } from "../work-series-data";
import { mailtoHref, siteConfig } from "../site-config";
import styles from "./acquisitions.module.css";

const siteUrl = siteConfig.siteUrl;
const heroSeries = workSeries.find((series) => series.slug === "canvas-botanical-studies") ?? workSeries[0];

export const metadata: Metadata = {
  title: "Acquisitions & Collector Enquiries | Masumi Shiohara",
  description:
    "Collector, gallery, and artwork enquiry route for Masumi Shiohara's cultivated botanical works, including acquisition, availability, and presentation questions.",
  alternates: {
    canonical: `${siteUrl}/acquisitions`,
  },
  openGraph: {
    title: "Acquisitions & Collector Enquiries | Masumi Shiohara",
    description:
      "A refined route for collector, gallery, and acquisition enquiries related to Masumi Shiohara's botanical works.",
    url: `${siteUrl}/acquisitions`,
    type: "website",
    images: heroSeries?.heroImage
      ? [
          {
            url: `${siteUrl}${heroSeries.heroImage}`,
            width: 1200,
            height: 900,
            alt: "Masumi Shiohara acquisition enquiry image",
          },
        ]
      : undefined,
  },
};

const enquiryNotes = [
  {
    title: "Artwork and series reference",
    text: "Begin with the exact series or work URL. This keeps the first exchange connected to a visible body of work rather than a general request.",
  },
  {
    title: "Private and gallery enquiries",
    text: "Collector, gallery, and advisor enquiries can include intended context, location, presentation format, and timing.",
  },
  {
    title: "Image, object, and edition questions",
    text: "The work may be discussed by series, image, object, surface, or presentation context. Availability and format should be confirmed directly.",
  },
];

const messageItems = [
  "Name, role, and organization if applicable",
  "Relevant series or work URL",
  "Acquisition, exhibition, private collection, or advisory context",
  "Preferred timeline and location",
  "Any presentation, framing, publication, or installation needs",
];

export default function AcquisitionsPage() {
  return (
    <main className={styles.acquisitionsPage}>
      <section className={styles.hero} aria-labelledby="acquisitions-title">
        <div>
          <p className={styles.eyebrow}>ACQUISITIONS / COLLECTOR ENQUIRIES</p>
          <h1 id="acquisitions-title">A discreet route for artwork and portfolio enquiries.</h1>
          <p className={styles.lead}>
            For collector, gallery, advisor, and acquisition-related conversations, begin with a
            specific work series and a concise description of the intended context.
          </p>
          <div className={styles.ctaRow}>
            <a className={styles.primaryCta} href="/dossier">Open curated dossier</a>
            <a className={styles.secondaryCta} href={mailtoHref("Acquisition enquiry for Masumi Shiohara")}>Email enquiry</a>
          </div>
        </div>
        {heroSeries ? (
          <a className={styles.heroImage} href={`/works/${heroSeries.slug}`}>
            <img src={heroSeries.heroImage} alt={`${heroSeries.title} acquisition reference`} />
            <span>{heroSeries.title}</span>
          </a>
        ) : null}
      </section>

      <section className={styles.noteGrid} aria-label="Acquisition enquiry guidance">
        {enquiryNotes.map((note) => (
          <article key={note.title}>
            <span>{note.title}</span>
            <p>{note.text}</p>
          </article>
        ))}
      </section>

      <section className={styles.requestBlock} aria-labelledby="request-title">
        <div>
          <p className={styles.eyebrow}>FIRST MESSAGE</p>
          <h2 id="request-title">Send enough context for a precise reply.</h2>
        </div>
        <div className={styles.requestList}>
          {messageItems.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </section>

      <section className={styles.relatedRoutes} aria-label="Related routes">
        <a href="/projects/botanical-portraits">
          <span>Works</span>
          <p>Browse all public series before writing.</p>
        </a>
        <a href="/dossier">
          <span>Dossier</span>
          <p>Use the short selection for a high-level first view.</p>
        </a>
        <a href="/contact">
          <span>Contact</span>
          <p>Send the request to {siteConfig.contactEmail}.</p>
        </a>
      </section>

      <section className={styles.finalCta} aria-labelledby="acquisitions-cta-title">
        <div>
          <p className={styles.eyebrow}>DIRECT CONTACT</p>
          <h2 id="acquisitions-cta-title">For acquisition, gallery, and collector enquiries.</h2>
          <p>{siteConfig.contactEmail}</p>
        </div>
        <a className={styles.primaryCta} href={mailtoHref("Acquisition enquiry for Masumi Shiohara")}>Send enquiry</a>
      </section>
    </main>
  );
}
