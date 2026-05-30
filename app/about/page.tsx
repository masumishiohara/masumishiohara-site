import type { Metadata } from "next";
import styles from "./about.module.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://masumishiohara-site.vercel.app";

export const metadata: Metadata = {
  title: "About | Masumi Shiohara",
  description:
    "Artist statement and profile for Masumi Shiohara, whose practice centers on cultivated fruit, botanical forms, photographic surfaces, objects, and material memory.",
  alternates: {
    canonical: `${siteUrl}/about`,
  },
  openGraph: {
    title: "About | Masumi Shiohara",
    description:
      "A practice centered on cultivated fruit, botanical forms, photography, objects, and material memory.",
    url: `${siteUrl}/about`,
    type: "profile",
  },
};

const practiceBlocks = [
  {
    number: "01",
    title: "Cultivation",
    text:
      "The work begins with cultivated plants and fruit: forms shaped by weather, orchard time, handling, ripening, and disappearance.",
  },
  {
    number: "02",
    title: "Image",
    text:
      "Photography and print-like surfaces are used as quiet containers for botanical structure, color, shadow, and seasonal memory.",
  },
  {
    number: "03",
    title: "Object",
    text:
      "Fruit, branches, leaves, specimens, and arrangements are treated as materials that can move between record, still life, archive, and object.",
  },
];

const profileRows = [
  ["Name", "Masumi Shiohara"],
  ["Practice", "Botanical works, photography, object making, cultivated fruit studies"],
  ["Current focus", "Series-based portfolio of cultivated forms and material memory"],
  ["CV details", "Education, exhibitions, publications, and collections to be added after confirmation"],
];

export default function AboutPage() {
  return (
    <main className={styles.aboutPage}>
      <section className={styles.intro} aria-labelledby="about-title">
        <p className={styles.eyebrow}>ABOUT / MASUMI SHIOHARA</p>
        <h1 id="about-title">A practice of cultivation, image, and material transformation.</h1>
        <p className={styles.lead}>
          Masumi Shiohara works with fruit, botanical forms, orchard time, photography,
          object making, and print-like surfaces. The practice treats cultivated plants
          as records of season, labor, care, and transformation.
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
            touch, growth, ripening, and disappearance. By isolating these materials
            through photography, surface, and arrangement, the work asks how a cultivated
            object can become a visual record.
          </p>
          <p>
            The series structure gives each body of work a specific atmosphere. Black
            grounds emphasize silhouette and quiet presence. Canvas studies connect fruit
            and botanical form to woven pictorial surface. Antique and vellum studies
            soften the image toward archive and memory.
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
          The portfolio is not arranged as a single stream of images. Each series is a
          visual condition: a black field, a canvas surface, a vellum-like image, a
          photographic record, or an object-based arrangement. This structure helps the
          viewer read repetition, difference, and material atmosphere without losing the
          individual work.
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
          {profileRows.map(([label, value]) => (
            <div className={styles.profileRow} key={label}>
              <span>{label}</span>
              <p>{value}</p>
            </div>
          ))}
          <a className={styles.primaryCta} href="/contact">
            Contact
          </a>
        </div>
      </section>
    </main>
  );
}
