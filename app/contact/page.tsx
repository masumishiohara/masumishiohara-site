import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Masumi Shiohara",
  description:
    "Contact page for exhibition, publication, acquisition, and project enquiries related to Masumi Shiohara's botanical works.",
};

const enquiryTypes = [
  "Exhibition and curatorial enquiries",
  "Publication and image-use enquiries",
  "Collection, acquisition, and portfolio requests",
  "Project, commission, and collaboration discussions",
];

export default function ContactPage() {
  return (
    <main className="contactPage">
      <section className="intro" aria-labelledby="contact-title">
        <p className="eyebrow">CONTACT</p>
        <h1 id="contact-title">Enquiries for works, exhibitions, and projects.</h1>
        <p className="lead">
          This page is prepared as the contact point for Masumi Shiohara. The
          official contact address can be inserted in the next content pass; the
          page structure is already ready for production use.
        </p>
      </section>

      <section className="contactGrid" aria-label="Contact information">
        <article className="contactCard">
          <p className="eyebrow">CONTACT ADDRESS</p>
          <h2>Official email to be added</h2>
          <p>
            Replace this temporary line with the confirmed contact email before
            using this page for public enquiries. No unconfirmed email address is
            being published here.
          </p>
        </article>

        <article className="contactCard">
          <p className="eyebrow">ENQUIRIES</p>
          <h2>Recommended message details</h2>
          <ul>
            {enquiryTypes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="messageTemplate" aria-labelledby="message-template-title">
        <div>
          <p className="eyebrow">MESSAGE TEMPLATE</p>
          <h2 id="message-template-title">Use a clear project brief.</h2>
        </div>
        <div className="templateBox">
          <p>Subject: Masumi Shiohara enquiry / exhibition or project</p>
          <p>Name / organization:</p>
          <p>Purpose of enquiry:</p>
          <p>Relevant work or series:</p>
          <p>Timeline:</p>
          <p>Website or reference link:</p>
        </div>
      </section>

      <section className="finalCta" aria-labelledby="contact-cta-title">
        <p className="eyebrow">PORTFOLIO</p>
        <h2 id="contact-cta-title">Review the works before sending an enquiry.</h2>
        <a className="primaryCta" href="/projects/botanical-portraits">
          View works
        </a>
      </section>

      <style jsx>{`
        .contactPage {
          min-height: 100vh;
          padding: 120px 5vw 80px;
          color: rgb(239, 231, 216);
          background:
            radial-gradient(circle at 78% 12%, rgba(201, 168, 106, 0.1), transparent 28%),
            linear-gradient(180deg, #050504 0%, #0a0705 100%);
        }

        .intro,
        .contactGrid,
        .messageTemplate,
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
        p,
        ul {
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
        .contactCard p,
        li,
        .templateBox p,
        .finalCta p {
          color: rgba(239, 231, 216, 0.72);
          font-size: clamp(15px, 1.25vw, 18px);
          line-height: 1.86;
        }

        .lead {
          max-width: 790px;
        }

        .contactGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 18px;
        }

        .contactCard {
          min-height: 360px;
          border: 1px solid rgba(239, 231, 216, 0.12);
          background: rgba(255, 255, 255, 0.025);
          padding: clamp(28px, 4vw, 46px);
        }

        ul {
          margin-bottom: 0;
          padding-left: 20px;
        }

        li + li {
          margin-top: 12px;
        }

        .messageTemplate {
          display: grid;
          grid-template-columns: minmax(0, 0.8fr) minmax(0, 1.2fr);
          gap: clamp(28px, 6vw, 90px);
          margin-top: 86px;
          padding: clamp(34px, 5vw, 68px);
          border: 1px solid rgba(239, 231, 216, 0.14);
          background: rgba(255, 255, 255, 0.025);
        }

        .templateBox {
          border: 1px solid rgba(239, 231, 216, 0.12);
          background: rgb(8, 7, 5);
          padding: clamp(22px, 3vw, 34px);
        }

        .templateBox p {
          margin-bottom: 10px;
        }

        .templateBox p:last-child {
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
          .contactPage {
            padding: 92px 18px 64px;
          }

          .contactGrid,
          .messageTemplate {
            grid-template-columns: 1fr;
          }

          .contactCard {
            min-height: auto;
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
