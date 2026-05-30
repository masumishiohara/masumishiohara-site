import type { Metadata } from "next";
import styles from "./contact.module.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.masumishiohara.com";

export const metadata: Metadata = {
  title: "Contact | Masumi Shiohara",
  description:
    "Contact page for exhibition, publication, acquisition, and project enquiries related to Masumi Shiohara's botanical works.",
  alternates: {
    canonical: `${siteUrl}/contact`,
  },
  openGraph: {
    title: "Contact | Masumi Shiohara",
    description:
      "Enquiry pathway for exhibitions, publications, acquisitions, collaborations, and project requests.",
    url: `${siteUrl}/contact`,
    type: "website",
  },
};

const enquiryTypes = [
  "Exhibition and curatorial enquiries",
  "Publication, editorial, and interview requests",
  "Artwork, print, and portfolio enquiries",
  "Project, collaboration, and commission enquiries",
];

const messageChecklist = [
  "Name and organization",
  "Purpose of enquiry",
  "Relevant series or work page URL",
  "Timeline, location, and format",
  "Preferred reply method",
];

export default function ContactPage() {
  return (
    <main className={styles.contactPage}>
      <section className={styles.intro} aria-labelledby="contact-title">
        <p className={styles.eyebrow}>CONTACT</p>
        <h1 id="contact-title">Enquiries for exhibitions, projects, publications, and works.</h1>
        <p className={styles.lead}>
          This page is the public enquiry pathway for Masumi Shiohara. The structure is
          prepared for a confirmed email address or form endpoint; until that technical detail
          is added, the page guides visitors toward precise, work-specific enquiries.
        </p>
      </section>

      <section className={styles.contactGrid} aria-label="Enquiry categories">
        <article className={styles.contactCard}>
          <span>ENQUIRIES</span>
          <h2>Contact topics</h2>
          <ul>
            {enquiryTypes.map((type) => (
              <li key={type}>{type}</li>
            ))}
          </ul>
        </article>
        <article className={styles.contactCard}>
          <span>BEFORE WRITING</span>
          <h2>Start with the works.</h2>
          <p>
            For curatorial, editorial, and acquisition enquiries, begin with the series index
            and include the relevant page title or URL in the message. This keeps the enquiry
            specific and reduces back-and-forth.
          </p>
          <a className={styles.secondaryCta} href="/projects/botanical-portraits">
            View works before enquiry
          </a>
        </article>
      </section>

      <section className={styles.messageTemplate} aria-labelledby="message-title">
        <div>
          <p className={styles.eyebrow}>MESSAGE GUIDE</p>
          <h2 id="message-title">Use a precise first message.</h2>
        </div>
        <div className={styles.templateBox}>
          {messageChecklist.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </section>

      <section className={styles.pendingContact} aria-label="Contact destination pending">
        <span>Contact destination</span>
        <p>
          Add the confirmed email address, contact form, gallery representative, or social link
          here in the next content pass. No unverified contact information has been published.
        </p>
      </section>

      <section className={styles.finalCta} aria-labelledby="contact-cta-title">
        <div>
          <p className={styles.eyebrow}>PORTFOLIO FIRST</p>
          <h2 id="contact-cta-title">The clearest enquiry begins with a specific series.</h2>
        </div>
        <a className={styles.primaryCta} href="/projects/botanical-portraits">
          View all series
        </a>
      </section>
    </main>
  );
}
