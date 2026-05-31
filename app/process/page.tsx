import type { Metadata } from "next";
import { workSeries } from "../work-series-data";
import styles from "./process.module.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.masumishiohara.com";
const canvasSeries =
  workSeries.find((series) => series.slug === "canvas-botanical-studies") ?? workSeries[0];
const blackGroundSeries =
  workSeries.find((series) => series.slug === "black-ground-botanical-works") ?? workSeries[1] ?? workSeries[0];
const ogImage = canvasSeries?.heroImage ? `${siteUrl}${canvasSeries.heroImage}` : undefined;

export const metadata: Metadata = {
  title: "Process | Masumi Shiohara",
  description:
    "A process overview for Masumi Shiohara's cultivated botanical works: cultivation, observation, photography, surface, object, archive, and series editing.",
  alternates: {
    canonical: `${siteUrl}/process`,
  },
  openGraph: {
    title: "Process | Masumi Shiohara",
    description:
      "Cultivation, observation, photography, print-like surface, object making, and series editing in Masumi Shiohara's botanical practice.",
    url: `${siteUrl}/process`,
    type: "article",
    images: ogImage
      ? [
          {
            url: ogImage,
            width: 1200,
            height: 900,
            alt: "Botanical process image by Masumi Shiohara",
          },
        ]
      : undefined,
  },
};

const processSteps = [
  {
    number: "01",
    title: "Cultivation and selection",
    text:
      "Fruit, leaves, branches, blossoms, and orchard forms are selected for structure, season, surface, and the evidence of care carried by the material.",
  },
  {
    number: "02",
    title: "Observation and arrangement",
    text:
      "The form is held long enough to read weight, direction, color, silhouette, bruising, ripening, and disappearance before it becomes an image.",
  },
  {
    number: "03",
    title: "Image and surface",
    text:
      "Photography, print-like surfaces, canvas fields, black grounds, and vellum-like atmospheres each change the way the botanical form is perceived.",
  },
  {
    number: "04",
    title: "Series editing",
    text:
      "Works are grouped into series so viewers can compare repeated forms across ground, scale, texture, and material condition without losing orientation.",
  },
];

const materialNotes = [
  "Black grounds isolate silhouette, contrast, and quiet presence.",
  "Canvas studies connect fruit and botanical form to a woven pictorial field.",
  "Vellum-like surfaces soften the image toward memory and suspended time.",
  "Objects and photographs keep the practice close to handling, record, and material evidence.",
];

export default function ProcessPage() {
  return (
    <main className={styles.processPage}>
      <section className={styles.hero} aria-labelledby="process-title">
        <div>
          <p className={styles.eyebrow}>PROCESS</p>
          <h1 id="process-title">From cultivation to image, the work keeps the trace of handling.</h1>
          <p className={styles.lead}>
            This page acts as the process bridge between the public works index and the artist
            statement. It explains how cultivated botanical material becomes an image, a surface,
            an object, and finally a series.
          </p>
          <div className={styles.ctaRow}>
            <a className={styles.primaryCta} href="/projects/botanical-portraits">
              View works
            </a>
            <a className={styles.secondaryCta} href="/about">
              About the practice
            </a>
          </div>
        </div>
        {canvasSeries ? (
          <a className={styles.heroImage} href={`/works/${canvasSeries.slug}`}>
            <img src={canvasSeries.heroImage} alt={`${canvasSeries.title} process reference`} />
            <span>{canvasSeries.title}</span>
          </a>
        ) : null}
      </section>

      <section className={styles.stepGrid} aria-label="Process steps">
        {processSteps.map((step) => (
          <article key={step.number}>
            <span>{step.number}</span>
            <h2>{step.title}</h2>
            <p>{step.text}</p>
          </article>
        ))}
      </section>

      <section className={styles.materialBlock} aria-labelledby="surface-title">
        {blackGroundSeries ? (
          <a className={styles.surfaceImage} href={`/works/${blackGroundSeries.slug}`}>
            <img src={blackGroundSeries.heroImage} alt={`${blackGroundSeries.title} surface reference`} />
          </a>
        ) : null}
        <div>
          <p className={styles.eyebrow}>SURFACE</p>
          <h2 id="surface-title">The same botanical form changes when the ground changes.</h2>
          <div className={styles.noteList}>
            {materialNotes.map((note) => (
              <p key={note}>{note}</p>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.finalCta} aria-labelledby="process-cta-title">
        <div>
          <p className={styles.eyebrow}>NEXT STEP</p>
          <h2 id="process-cta-title">Move from process into the series index.</h2>
        </div>
        <a className={styles.primaryCta} href="/projects/botanical-portraits">
          Open works index
        </a>
      </section>
    </main>
  );
}
