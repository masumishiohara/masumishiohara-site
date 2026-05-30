import type { Metadata } from "next";
import styles from "./about.module.css";

export const metadata: Metadata = {
  title: "About | Masumi Shiohara",
  description:
    "About Masumi Shiohara and a practice centered on cultivated fruit, botanical forms, photography, object making, and material memory.",
};

export default function AboutPage() {
  return (
    <main className={styles.aboutPage}>
      <section className={styles.intro} aria-labelledby="about-title">
        <p className={styles.eyebrow}>ABOUT / MASUMI SHIOHARA</p>
        <h1 id="about-title">A practice of cultivation, image, and material transformation.</h1>
        <p className={styles.lead}>
          Masumi Shiohara works with fruit, botanical forms, orchard time,
          photography, object making, and print-like surfaces. The works hold
          cultivated plants between specimen and image, using botanical material
          as a record of season, labor, care, and transformation.
        </p>
      </section>

      <section className={styles.contentGrid} aria-label="Artist practice overview">
        <article>
          <span>01</span>
          <h2>Practice</h2>
          <p>
            The practice begins with close attention to cultivated forms: the
            surface of fruit, the structure of stems and leaves, and the quiet
            evidence of time held by botanical material. Each series approaches
            these forms through a distinct visual condition, from black-ground
            compositions to canvas studies and vellum-like surfaces.
          </p>
        </article>
        <article>
          <span>02</span>
          <h2>Process</h2>
          <p>
            The works are organized as series rather than isolated images. This
            structure emphasizes repetition, difference, and the changing
            presence of botanical subjects across materials, supports, and
            photographic conditions.
          </p>
        </article>
        <article>
          <span>03</span>
          <h2>Materials</h2>
          <p>
            Fruit, branches, leaves, photographic records, printed surfaces, and
            object-based arrangements are treated as interconnected materials.
            The image becomes an archive of growth, harvest, and observation.
          </p>
        </article>
      </section>

      <section className={styles.statement} aria-labelledby="statement-title">
        <p className={styles.eyebrow}>ARTIST STATEMENT</p>
        <h2 id="statement-title">Botanical material as an index of duration.</h2>
        <p>
          These works look at fruit not only as a botanical subject, but as a
          temporary form shaped by cultivation and time. A pear, plum, grape, or
          branch carries a history of weather, touch, growth, ripening, and
          disappearance. By isolating these materials through photography,
          surface, and arrangement, the work asks how a cultivated object can
          become a visual record.
        </p>
        <p>
          The series structure gives each group of images a specific atmosphere:
          black grounds emphasize silhouette and quiet presence; canvas studies
          connect botanical form to woven surface; antique and vellum studies
          soften the image into something closer to memory or archive.
        </p>
      </section>

      <section className={styles.profileBlock} aria-labelledby="profile-title">
        <div>
          <p className={styles.eyebrow}>PROFILE</p>
          <h2 id="profile-title">Masumi Shiohara</h2>
        </div>
        <div>
          <p>
            Profile details, selected CV, education, residency, publication, and
            exhibition records will be added in the next content pass. The page
            is structured so the confirmed information can be inserted without
            changing the visual direction.
          </p>
          <a className={styles.primaryCta} href="/projects/botanical-portraits">
            View works
          </a>
        </div>
      </section>
    </main>
  );
}
