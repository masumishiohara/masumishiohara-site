import type { Metadata } from "next";
import styles from "./contact.module.css";

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
    <main className={styles.contactPage}>
      <section className={styles.intro} aria-labelledby="contact-title">
        <p className={styles.eyebrow}>CONTACT</p>
        <h1 id="contact-title">Enquiries for works, exhibitions, and projects.</h1>
        <p className={styles.lead}>
          This page is prepared as the contact point for Masumi Shiohara. The
          official contact address can be inserted in the next content pass; the
          page structure is already ready for production use.
        </p>
      </section>

      <section className={styles.contactGrid} aria-label="Contact information">
        <article className={styles.contactCard}>
          <p className={styles.eyebrow}>CONTACT ADDRESS</p>
          <h2>Official email to be added</h2>
          <p>
            Replace this temporary line with the confirmed contact email before
            using this page for public enquiries. No unconfirmed email address is
            being published here.
          </p>
        </article>

        <article className={styles.contactCard}>
          <p className={styles.eyebrow}>ENQUIRIES</p>
          <h2>Recommended message details</h2>
          <ul>
            {enquiryTypes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className={styles.messageTemplate} aria-labelledby="message-template-title">
        <div>
          <p className={styles.eyebrow}>MESSAGE TEMPLATE</p>
          <h2 id="message-template-title">Use a clear project brief.</h2>
        </div>
        <div className={styles.templateBox}>
          <p>Subject: Masumi Shiohara enquiry / exhibition or project</p>
          <p>Name / organization:</p>
          <p>Purpose of enquiry:</p>
          <p>Relevant work or series:</p>
          <p>Timeline:</p>
          <p>Website or reference link:</p>
        </div>
      </section>

      <section className={styles.finalCta} aria-labelledby="contact-cta-title">
        <p className={styles.eyebrow}>PORTFOLIO</p>
        <h2 id="contact-cta-title">Review the works before sending an enquiry.</h2>
        <a className={styles.primaryCta} href="/projects/botanical-portraits">
          View works
        </a>
      </section>
    </main>
  );
}
