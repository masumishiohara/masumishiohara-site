import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Masumi Shiohara",
  description:
    "About Masumi Shiohara and a practice centered on cultivated fruit, botanical forms, photography, object making, and material memory.",
};

export default function AboutPage() {
  return (
    <main className="aboutPage">
      <section className="intro" aria-labelledby="about-title">
        <p className="eyebrow">ABOUT / MASUMI SHIOHARA</p>
        <h1 id="about-title">A practice of cultivation, image, and material transformation.</h1>
        <p className="lead">
          Masumi Shiohara works with fruit, botanical forms, orchard time,
          photography, object making, and print-like surfaces. The works hold
          cultivated plants between specimen and image, using botanical material
          as a record of season, labor, care, and transformation.
        </p>
      </section>

      <section className="contentGrid" aria-label="Artist practice overview">
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

      <section className="statement" aria-labelledby="statement-title">
        <p className="eyebrow">ARTIST STATEMENT</p>
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

      <section className="profileBlock" aria-labelledby="profile-title">
        <div>
          <p className="eyebrow">PROFILE</p>
          <h2 id="profile-title">Masumi Shiohara</h2>
        </div>
        <div>
          <p>
            Profile details, selected CV, education, residency, publication, and
            exhibition records will be added in the next content pass. The page
            is structured so the confirmed information can be inserted without
            changing the visual direction.
          </p>
          <a className="primaryCta" href="/projects/botanical-portraits">
            View works
          </a>
        </div>
      </section>

      <style jsx>{`
        .aboutPage {
          min-height: 100vh;
          padding: 120px 5vw 80px;
          color: rgb(239, 231, 216);
          background:
            radial-gradient(circle at 86% 10%, rgba(201, 168, 106, 0.11), transparent 30%),
            linear-gradient(180deg, #050504 0%, #0a0705 100%);
        }

        .intro,
        .contentGrid,
        .statement,
        .profileBlock {
          max-width: 1320px;
          margin: 0 auto;
        }

        .intro {
          padding-bottom: 74px;
        }

        .eyebrow {
          margin: 0 0 18px;
          color: rgb(201, 168, 106);
          font-size: 0.72rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
        }

        h1,
        h2,
        p {
          margin-top: 0;
        }

        h1,
        h2 {
          font-family: "Times New Roman", serif;
          font-weight: 300;
          line-height: 0.98;
          letter-spacing: -0.055em;
        }

        h1 {
          max-width: 1120px;
          margin-bottom: 30px;
          font-size: clamp(56px, 9vw, 126px);
        }

        h2 {
          margin-bottom: 22px;
          font-size: clamp(38px, 5.4vw, 78px);
        }

        .lead,
        article p,
        .statement p,
        .profileBlock p {
          color: rgba(239, 231, 216, 0.72);
          font-size: clamp(15px, 1.25vw, 18px);
          line-height: 1.86;
        }

        .lead {
          max-width: 760px;
        }

        .contentGrid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 1px;
          border: 1px solid rgba(239, 231, 216, 0.12);
          background: rgba(239, 231, 216, 0.12);
        }

        article {
          min-height: 360px;
          padding: clamp(26px, 4vw, 42px);
          background: rgb(8, 7, 5);
        }

        article span {
          display: block;
          margin-bottom: 72px;
          color: rgb(201, 168, 106);
          font-size: 0.72rem;
          letter-spacing: 0.22em;
        }

        .statement {
          margin-top: 86px;
          padding: clamp(36px, 6vw, 78px);
          border: 1px solid rgba(239, 231, 216, 0.14);
          background: rgba(255, 255, 255, 0.025);
        }

        .statement p {
          max-width: 880px;
        }

        .profileBlock {
          display: grid;
          grid-template-columns: minmax(0, 0.8fr) minmax(0, 1.2fr);
          gap: clamp(28px, 6vw, 90px);
          align-items: start;
          padding-top: 86px;
        }

        .primaryCta {
          display: inline-flex;
          min-height: 48px;
          align-items: center;
          justify-content: center;
          margin-top: 18px;
          border: 1px solid rgb(239, 231, 216);
          border-radius: 999px;
          background: rgb(239, 231, 216);
          color: rgb(10, 7, 5);
          padding: 0 22px;
          text-decoration: none;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          font-size: 0.72rem;
        }

        @media (max-width: 900px) {
          .aboutPage {
            padding: 92px 18px 64px;
          }

          .contentGrid,
          .profileBlock {
            grid-template-columns: 1fr;
          }

          article {
            min-height: auto;
          }

          article span {
            margin-bottom: 42px;
          }
        }
      `}</style>
    </main>
  );
}
