import type { Metadata } from "next";
import { workSeries } from "./work-series-data";

export const metadata: Metadata = {
  title: "Masumi Shiohara | Botanical Works",
  description:
    "Masumi Shiohara creates botanical works shaped by cultivation, orchard time, photography, object making, and fruit as artistic material.",
  openGraph: {
    title: "Masumi Shiohara | Botanical Works",
    description:
      "Botanical works shaped by cultivation, orchard time, photography, object making, and fruit as artistic material.",
    type: "website",
  },
};

const heroSeries =
  workSeries.find((series) => series.slug === "black-ground-botanical-works") ??
  workSeries[0];

const featuredSeries = workSeries.slice(0, 6);

export default function Home() {
  return (
    <main className="homePage">
      <section className="heroSection" aria-labelledby="home-title">
        <div className="heroCopy">
          <p className="eyebrow">MASUMI SHIOHARA / CULTIVATED FORMS</p>
          <h1 id="home-title">
            Botanical works shaped by cultivation, time, and material memory.
          </h1>
          <p className="lead">
            Masumi Shiohara works with cultivated fruit, botanical forms, orchard
            time, photography, object making, and print-like surfaces. This site
            gathers the works by series, allowing each body of work to be viewed
            as a distinct visual archive.
          </p>
          <div className="ctaRow" aria-label="Primary actions">
            <a className="primaryCta" href="/projects/botanical-portraits">
              View works
            </a>
            <a className="secondaryCta" href="/about">
              About the practice
            </a>
          </div>
        </div>

        {heroSeries ? (
          <a className="heroImageWrap" href={`/works/${heroSeries.slug}`}>
            <img
              src={heroSeries.heroImage}
              alt={`${heroSeries.title} by Masumi Shiohara`}
              className="heroImage"
            />
            <span className="heroImageCaption">
              Featured series / {heroSeries.title}
            </span>
          </a>
        ) : null}
      </section>

      <section className="sectionBlock" aria-labelledby="featured-series-title">
        <div className="sectionHeader">
          <p className="eyebrow">WORKS INDEX</p>
          <h2 id="featured-series-title">Selected series</h2>
          <p>
            The portfolio is organized by series rather than by one long list of
            images, giving each material approach a clear entry point.
          </p>
        </div>

        <div className="seriesGrid">
          {featuredSeries.map((series) => (
            <a className="seriesCard" href={`/works/${series.slug}`} key={series.slug}>
              <img
                src={series.heroImage}
                alt={`${series.title} series thumbnail`}
                className="seriesImage"
              />
              <div className="seriesText">
                <span>{series.code}</span>
                <h3>{series.title}</h3>
                <p>{series.statement}</p>
              </div>
            </a>
          ))}
        </div>

        <a className="textLink" href="/projects/botanical-portraits">
          Open full works index
        </a>
      </section>

      <section className="statementPanel" aria-labelledby="practice-title">
        <p className="eyebrow">PRACTICE</p>
        <h2 id="practice-title">Fruit as record, specimen, image, and object.</h2>
        <p>
          The work treats botanical material as a record of growth and duration:
          cultivated forms, harvested surfaces, orchard memory, and the quiet
          transition from living plant to image. Across the series, the fruit is
          not only a subject but also an index of labor, season, and material
          transformation.
        </p>
        <a className="secondaryCta" href="/about">
          Read about the practice
        </a>
      </section>

      <section className="pathwayGrid" aria-label="Site navigation highlights">
        <a href="/projects/botanical-portraits">
          <span>01</span>
          <h2>Works</h2>
          <p>Browse the portfolio by botanical series.</p>
        </a>
        <a href="/about">
          <span>02</span>
          <h2>About</h2>
          <p>Read the artist profile and working approach.</p>
        </a>
        <a href="/exhibitions">
          <span>03</span>
          <h2>Exhibitions</h2>
          <p>Prepare the exhibition record and selected CV area.</p>
        </a>
        <a href="/contact">
          <span>04</span>
          <h2>Contact</h2>
          <p>Direct enquiries for exhibitions, projects, and publications.</p>
        </a>
      </section>

      <section className="finalCta" aria-labelledby="final-cta-title">
        <p className="eyebrow">PORTFOLIO</p>
        <h2 id="final-cta-title">Start with the complete works index.</h2>
        <a className="primaryCta" href="/projects/botanical-portraits">
          View all series
        </a>
      </section>

      <style jsx>{`
        .homePage {
          min-height: 100vh;
          padding: 120px 5vw 80px;
          color: rgb(239, 231, 216);
          background:
            radial-gradient(circle at 12% 8%, rgba(201, 168, 106, 0.12), transparent 28%),
            linear-gradient(180deg, #050504 0%, #0a0705 100%);
        }

        .heroSection {
          display: grid;
          grid-template-columns: minmax(0, 0.95fr) minmax(320px, 1.05fr);
          gap: clamp(32px, 7vw, 96px);
          align-items: center;
          max-width: 1320px;
          margin: 0 auto;
          min-height: calc(100vh - 220px);
        }

        .heroCopy {
          max-width: 760px;
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
        h3,
        p {
          margin-top: 0;
        }

        h1,
        h2,
        h3 {
          font-family: "Times New Roman", serif;
          font-weight: 300;
          line-height: 0.96;
        }

        h1 {
          margin-bottom: 28px;
          font-size: clamp(54px, 9vw, 128px);
          letter-spacing: -0.06em;
        }

        h2 {
          margin-bottom: 22px;
          font-size: clamp(42px, 6vw, 88px);
          letter-spacing: -0.055em;
        }

        h3 {
          margin-bottom: 12px;
          font-size: clamp(28px, 3vw, 48px);
          letter-spacing: -0.05em;
        }

        .lead,
        .sectionHeader p,
        .statementPanel p,
        .pathwayGrid p,
        .seriesText p,
        .finalCta p {
          color: rgba(239, 231, 216, 0.72);
          font-size: clamp(15px, 1.25vw, 18px);
          line-height: 1.85;
        }

        .lead {
          max-width: 680px;
          margin-bottom: 34px;
        }

        .ctaRow {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
        }

        .primaryCta,
        .secondaryCta {
          display: inline-flex;
          min-height: 48px;
          align-items: center;
          justify-content: center;
          border-radius: 999px;
          padding: 0 22px;
          text-decoration: none;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          font-size: 0.72rem;
        }

        .primaryCta {
          border: 1px solid rgb(239, 231, 216);
          background: rgb(239, 231, 216);
          color: rgb(10, 7, 5);
        }

        .secondaryCta {
          border: 1px solid rgba(239, 231, 216, 0.32);
          color: rgb(239, 231, 216);
        }

        .heroImageWrap,
        .seriesCard,
        .pathwayGrid a {
          color: inherit;
          text-decoration: none;
        }

        .heroImageWrap {
          display: block;
        }

        .heroImage {
          display: block;
          width: 100%;
          aspect-ratio: 1.34 / 1;
          object-fit: cover;
          border: 1px solid rgba(239, 231, 216, 0.12);
          filter: brightness(0.88) contrast(1.02);
        }

        .heroImageCaption {
          display: block;
          margin-top: 12px;
          color: rgba(239, 231, 216, 0.54);
          font-size: 0.78rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        .sectionBlock,
        .statementPanel,
        .pathwayGrid,
        .finalCta {
          max-width: 1320px;
          margin: 0 auto;
        }

        .sectionBlock {
          padding: 90px 0 60px;
        }

        .sectionHeader {
          max-width: 760px;
          margin-bottom: 34px;
        }

        .seriesGrid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 18px;
        }

        .seriesCard {
          display: grid;
          grid-template-rows: auto 1fr;
          border: 1px solid rgba(239, 231, 216, 0.12);
          background: rgba(255, 255, 255, 0.025);
          overflow: hidden;
        }

        .seriesImage {
          display: block;
          width: 100%;
          aspect-ratio: 1.32 / 0.82;
          object-fit: cover;
          filter: brightness(0.9) saturate(0.92);
        }

        .seriesText {
          padding: 24px;
        }

        .seriesText span {
          display: block;
          margin-bottom: 12px;
          color: rgb(201, 168, 106);
          font-size: 0.68rem;
          letter-spacing: 0.22em;
        }


        .textLink {
          display: inline-flex;
          margin-top: 30px;
          color: rgb(239, 231, 216);
          text-decoration: none;
          border-bottom: 1px solid rgba(239, 231, 216, 0.46);
          padding-bottom: 6px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          font-size: 0.72rem;
        }

        .statementPanel {
          margin-top: 70px;
          padding: clamp(36px, 6vw, 78px);
          border: 1px solid rgba(239, 231, 216, 0.14);
          background:
            linear-gradient(120deg, rgba(255, 255, 255, 0.04), rgba(255, 255, 255, 0.01)),
            rgba(255, 255, 255, 0.02);
        }

        .statementPanel p {
          max-width: 880px;
          margin-bottom: 28px;
        }

        .pathwayGrid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 1px;
          margin-top: 100px;
          border: 1px solid rgba(239, 231, 216, 0.12);
          background: rgba(239, 231, 216, 0.12);
        }

        .pathwayGrid a {
          min-height: 260px;
          padding: 28px;
          background: rgb(8, 7, 5);
        }

        .pathwayGrid span {
          display: block;
          margin-bottom: 52px;
          color: rgb(201, 168, 106);
          font-size: 0.72rem;
          letter-spacing: 0.22em;
        }

        .pathwayGrid h2 {
          margin-bottom: 16px;
          font-size: clamp(30px, 3.8vw, 56px);
        }

        .finalCta {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 32px;
          padding-top: 100px;
        }

        .finalCta h2 {
          max-width: 760px;
          margin-bottom: 0;
        }

        @media (max-width: 980px) {
          .homePage {
            padding: 92px 18px 64px;
          }

          .heroSection {
            grid-template-columns: 1fr;
            min-height: auto;
          }

          .seriesGrid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .pathwayGrid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 620px) {
          h1 {
            font-size: clamp(48px, 15vw, 72px);
          }

          .seriesGrid,
          .pathwayGrid {
            grid-template-columns: 1fr;
          }

          .seriesImage {
            aspect-ratio: 1.3 / 0.72;
          }

          .pathwayGrid a {
            min-height: 210px;
          }

          .finalCta {
            display: block;
          }

          .finalCta .primaryCta {
            margin-top: 24px;
          }
        }
      `}</style>
    </main>
  );
}
