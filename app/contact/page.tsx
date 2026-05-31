import type { Metadata } from "next";
import { mailtoHref, siteConfig } from "../site-config";
import styles from "./contact.module.css";

const siteUrl = siteConfig.siteUrl;

export const metadata: Metadata = {
  title: "Contact | Masumi Shiohara",
  description:
    "Contact Masumi Shiohara for editorial, curatorial, exhibition, publication, acquisition, maison, press, and project enquiries.",
  alternates: {
    canonical: `${siteUrl}/contact`,
  },
  openGraph: {
    title: "Contact | Masumi Shiohara",
    description:
      "Direct enquiry route for exhibitions, publications, acquisitions, collaborations, editorial requests, and image-use guidance.",
    url: `${siteUrl}/contact`,
    type: "website",
  },
};

const enquiryTypes = [
  "Editorial, publication, and interview requests",
  "Exhibition, curatorial, and institutional enquiries",
  "Maison, brand, and cultural collaboration enquiries",
  "Artwork, print, and portfolio enquiries",
  "Press, image-use, and credit requests",
];

const messageChecklist = [
  "Name, role, and organization",
  "Purpose of enquiry",
  "Relevant series or work page URL",
  "Timeline, location, and publication or project context",
  "Image size, credit, and deadline if applicable",
];

const routingNotes = [
  {
    label: "Editorial",
    text: "Include publication name, article direction, language, format, image size requirements, publication date, and credit line needs.",
  },
  {
    label: "Maison",
    text: "Include the project context, desired atmosphere, reference series, usage scope, schedule, and whether the enquiry concerns image, object, installation, or collaboration.",
  },
  {
    label: "Curatorial",
    text: "Include the series title, venue or institutional context, target date, requested work references, and presentation format.",
  },
  {
    label: "Works",
    text: "Begin with the exact series or work URL so the enquiry is attached to a visible body of work.",
  },
];

export default function ContactPage() {
  return (
    <main className={styles.contactPage}>
      <section className={styles.intro} aria-labelledby="contact-title">
        <p className={styles.eyebrow}>CONTACT / MASUMI SHIOHARA</p>
        <h1 id="contact-title">Editorial, curatorial, maison, and project enquiries.</h1>
        <p className={styles.lead}>
          For exhibitions, publications, collaborations, image requests, and artwork-related
          enquiries, please send a concise message with the relevant series or work page.
        </p>
        <div className={styles.mailBlock}>
          <span>Direct email</span>
          <a href={mailtoHref("Masumi Shiohara enquiry")}>{siteConfig.contactEmail}</a>
        </div>
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
          <h2>Start with a precise reference.</h2>
          <p>
            For editorial, maison, curatorial, and acquisition enquiries, begin with the works
            index and include the relevant page title or URL. This keeps the first message clear
            and professional.
          </p>
          <a className={styles.secondaryCta} href="/projects/botanical-portraits">
            View works before enquiry
          </a>
        </article>
      </section>

      <section className={styles.routingGrid} aria-label="Enquiry routing guidance">
        {routingNotes.map((note) => (
          <article key={note.label}>
            <span>{note.label}</span>
            <p>{note.text}</p>
          </article>
        ))}
      </section>

      <section className={styles.editorialContact} aria-labelledby="editorial-contact-title">
        <div>
          <p className={styles.eyebrow}>EDITORIAL / MAISON CONTACT</p>
          <h2 id="editorial-contact-title">Use the portfolio as the first visual brief.</h2>
        </div>
        <div>
          <p>
            The site is arranged so an editor, curator, gallery, or maison team can review the
            work without a long exchange first. Open the relevant series, copy the URL, then send
            the request with scope, deadline, and credit requirements.
          </p>
          <a className={styles.primaryCta} href={mailtoHref("Editorial or maison enquiry for Masumi Shiohara")}>
            Email {siteConfig.contactEmail}
          </a>
        </div>
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

      <section className={styles.infoLink} aria-labelledby="information-title">
        <div>
          <p className={styles.eyebrow}>REFERENCE</p>
          <h2 id="information-title">Need image-use or enquiry details?</h2>
        </div>
        <div className={styles.resourceActions}>
          <a className={styles.secondaryCta} href="/editorial">
            Editorial route
          </a>
          <a className={styles.secondaryCta} href="/press">
            Press and image requests
          </a>
        </div>
      </section>

      <section className={styles.finalCta} aria-labelledby="contact-cta-title">
        <div>
          <p className={styles.eyebrow}>DIRECT CONTACT</p>
          <h2 id="contact-cta-title">Send the enquiry with a series URL and clear context.</h2>
          <p>{siteConfig.contactEmail}</p>
        </div>
        <a className={styles.primaryCta} href={mailtoHref("Masumi Shiohara enquiry")}>Send enquiry</a>
      </section>
    </main>
  );
}
