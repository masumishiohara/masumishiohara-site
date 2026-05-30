import type { Metadata } from "next";
import { workSeries } from "../work-series-data";
import styles from "./about.module.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://masumishiohara-site.vercel.app";
const imageSeries =
  workSeries.find((series) => series.slug === "canvas-botanical-studies") ?? workSeries[0];
const ogImage = imageSeries?.heroImage ? `${siteUrl}${imageSeries.heroImage}` : undefined;

export const metadata: Metadata = {
  title: "About | Masumi Shiohara",
  description:
    "Artist statement and profile for Masumi Shiohara, whose practice centers on cultivated fruit, botanical forms, photography, object making, and material memory.",
  alternates: {
    canonical: `${siteUrl}/about`,
  },
  openGraph: {
    title: "About | Masumi Shiohara",
    description:
      "A practice centered on cultivated fruit, botanical forms, orchard time, photography, objects, and material memory.",
    url: `${siteUrl}/about`,
    type: "profile",
    images: ogImage
      ? [
          {
            url: ogImage,
            width: 1200,
            height: 900,
            alt: "Masumi Shiohara botanical work detail",
          },
        ]
      : undefined,
  },
};

const practiceBlocks = [
  {
    number: "01",
    title: "Cultivation",
    text:
      "Fruit, leaves, blossoms, and branches are approached as forms shaped by weather, orchard time, care, handling, ripening, and disappearance.",
  },
  {
    number: "02",
    title: "Image",
    text:
      "Photography and print-like surfaces become quiet containers for botanical structure, color, shadow, texture, and seasonal memory.",
  },
  {
    number: "03",
    title: "Archive",
    text:
      "The works are organized by series so repetition, difference, surface, and atmosphere can be read without reducing each form to documentation.",
  },
];

const processRows = [
  ["Material", "Cultivated fruit, botanical forms, orchard fragments, leaves, branches, blossoms, and still-life arrangements"],
  ["Methods", "Photography, object making, print-like image treatment, surface studies, and series-based editing"],
  ["Primary themes", "Cultivation, duration, memory, season, care, transformation, and the quiet presence of botanical material"],
  ["Portfolio structure", "Works are organized as series rather than a single image stream, improving both viewing and search clarity"],
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Masumi Shiohara",
  url: siteUrl,
  jobTitle: "Artist",
  description:
    "Artist working with cultivated fruit, botanical forms, photography, object making, and material memory.",
};

export default function AboutPage() {
  return (
    <main className={styles.aboutPage}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className={styles.intro} aria-labelledby="about-title">
        <p className={styles.eyebrow}>ABOUT / MASUMI SHIOHARA</p>
        <h1 id="about-title">A practice of cultivation, image, and material transformation.</h1>
        <p className={styles.lead}>
          Masumi Shiohara works with fruit, botanical forms, orchard time, photography,
          object making, and print-like surfaces. The practice treats cultivated plants as
          records of season, labor, care, and transformation.
        </p>
      </section>

      <section className={styles.statement} aria-labelledby="statement-title">
        <div>
          <p className={styles.eyebrow}>ARTIST STATEMENT</p>
          <h2 id="statement-title">Botanical material as an index of duration.</h2>
        </div>
        <div>
          <p>
            A pear, plum, grape, branch, leaf, or blossom carries a history of weather,
            touch, growth, ripening, and disappearance. By isolating these materials through
            photography, surface, and arrangement, the work asks how a cultivated object can
            become a visual record.
          </p>
          <p>
            Each series gives the material a different condition of visibility. Black grounds
            emphasize silhouette and quiet presence. Canvas studies connect fruit and plant
            forms to woven pictorial surface. Antique and vellum studies soften the image
            toward archive and memory.
          </p>
        </div>
      </section>

      <section className={styles.contentGrid} aria-label="Artist practice overview">
        {practiceBlocks.map((block) => (
          <article key={block.number}>
            <span>{block.number}</span>
            <h2>{block.title}</h2>
            <p>{block.text}</p>
          </article>
        ))}
      </section>

      <section className={styles.methodBlock} aria-labelledby="method-title">
        <p className={styles.eyebrow}>METHOD</p>
        <h2 id="method-title">Series are used as a way to slow down looking.</h2>
        <p>
          The portfolio is intentionally not arranged as a single stream of images. Each
          series is a visual condition: a black field, a canvas surface, a vellum-like image,
          a photographic record, or an object-based arrangement. This structure helps the
          viewer read repetition, difference, and material atmosphere while keeping individual
          works accessible.
        </p>
        <a className={styles.secondaryCta} href="/projects/botanical-portraits">
          View all series
        </a>
      </section>

      <section className={styles.profileBlock} aria-labelledby="profile-title">
        <div>
          <p className={styles.eyebrow}>PROFILE</p>
          <h2 id="profile-title">Masumi Shiohara</h2>
        </div>
        <div className={styles.profileTable}>
          {processRows.map(([label, value]) => (
            <div className={styles.profileRow} key={label}>
              <span>{label}</span>
              <p>{value}</p>
            </div>
          ))}
          <div className={styles.profileActions}>
            <a className={styles.primaryCta} href="/projects/botanical-portraits">
              View works
            </a>
            <a className={styles.secondaryCta} href="/contact">
              Contact
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
