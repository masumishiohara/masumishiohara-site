import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Exhibitions | Masumi Shiohara",
  description:
    "Exhibition record and selected project history for Masumi Shiohara. Confirmed CV details can be added chronologically.",
};

const exhibitionSections = [
  {
    label: "Selected exhibitions",
    body:
      "Confirmed solo and group exhibition records will be listed here in reverse chronological order.",
  },
  {
    label: "Projects and publications",
    body:
      "Publication, commission, collaboration, and project records can be added as a separate archive when details are confirmed.",
  },
  {
    label: "CV material",
    body:
      "The structure is prepared for a concise artist CV without interrupting the visual portfolio flow.",
  },
];

export default function ExhibitionsPage() {
  return (
    <main className="exhibitionsPage">
      <section className="intro" aria-labelledby="exhibitions-title">
        <p className="eyebrow">EXHIBITIONS / CV</p>
        <h1 id="exhibitions-title">Exhibition record prepared as a quiet archive.</h1>
        <p className="lead">
          This page is set up for confirmed exhibition history, publication
          notes, project records, and CV material. Until the final records are
          inserted, the page keeps the site structure complete without inventing
          unverified biographical details.
        </p>
      </section>

      <section className="archiveGrid" aria-label="Exhibition archive structure">
        {exhibitionSections.map((section, index) => (
          <article key={section.label}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h2>{section.label}</h2>
            <p>{section.body}</p>
          </article>
        ))}
      </section>

      <section className="timelinePanel" aria-labelledby="timeline-title">
        <div>
          <p className="eyebrow">NEXT CONTENT PASS</p>
          <h2 id="timeline-title">Chronological CV format</h2>
        </div>
        <div className="timelineList">
          <div>
            <span>Year</span>
            <p>Exhibition title / venue / city / country</p>
          </div>
          <div>
            <span>Year</span>
            <p>Publication, project, award, residency, or collaboration record</p>
          </div>
          <div>
            <span>Year</span>
            <p>Additional confirmed record</p>
          </div>
        </div>
      </section>

      <section className="finalCta" aria-labelledby="exhibitions-cta-title">
        <p className="eyebrow">WORKS</p>
        <h2 id="exhibitions-cta-title">View the portfolio while CV details are prepared.</h2>
        <a className="primaryCta" href="/projects/botanical-portraits">
          View works
        </a>
      </section>

      <style jsx>{`
        .exhibitionsPage {
          min-height: 100vh;
          padding: 120px 5vw 80px;
          color: rgb(239, 231, 216);
          background:
            radial-gradient(circle at 16% 12%, rgba(201, 168, 106, 0.1), transparent 28%),
            linear-gradient(180deg, #050504 0%, #0a0705 100%);
        }

        .intro,
        .archiveGrid,
        .timelinePanel,
        .finalCta {
          max-width: 1320px;
          margin: 0 auto;
        }

        .intro {
          padding-bottom: 78px;
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
          font-size: clamp(34px, 4.8vw, 72px);
        }

        .lead,
        article p,
        .timelineList p,
        .finalCta p {
          color: rgba(239, 231, 216, 0.72);
          font-size: clamp(15px, 1.25vw, 18px);
          line-height: 1.86;
        }

        .lead {
          max-width: 790px;
        }

        .archiveGrid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 18px;
        }

        article {
          min-height: 330px;
          border: 1px solid rgba(239, 231, 216, 0.12);
          background: rgba(255, 255, 255, 0.025);
          padding: clamp(26px, 4vw, 40px);
        }

        article span,
        .timelineList span {
          display: block;
          color: rgb(201, 168, 106);
          font-size: 0.72rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
        }

        article span {
          margin-bottom: 76px;
        }

        .timelinePanel {
          display: grid;
          grid-template-columns: minmax(0, 0.8fr) minmax(0, 1.2fr);
          gap: clamp(28px, 6vw, 90px);
          margin-top: 86px;
          padding: clamp(34px, 5vw, 68px);
          border: 1px solid rgba(239, 231, 216, 0.14);
          background: rgba(255, 255, 255, 0.025);
        }

        .timelineList {
          display: grid;
          gap: 1px;
          background: rgba(239, 231, 216, 0.12);
          border: 1px solid rgba(239, 231, 216, 0.12);
        }

        .timelineList div {
          display: grid;
          grid-template-columns: 112px 1fr;
          gap: 24px;
          align-items: baseline;
          padding: 22px;
          background: rgb(8, 7, 5);
        }

        .timelineList p {
          margin-bottom: 0;
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

        .primaryCta {
          display: inline-flex;
          min-height: 48px;
          align-items: center;
          justify-content: center;
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
          .exhibitionsPage {
            padding: 92px 18px 64px;
          }

          .archiveGrid,
          .timelinePanel {
            grid-template-columns: 1fr;
          }

          article {
            min-height: auto;
          }

          article span {
            margin-bottom: 42px;
          }

          .finalCta {
            display: block;
          }

          .finalCta .primaryCta {
            margin-top: 24px;
          }
        }

        @media (max-width: 620px) {
          .timelineList div {
            grid-template-columns: 1fr;
            gap: 10px;
          }
        }
      `}</style>
    </main>
  );
}
