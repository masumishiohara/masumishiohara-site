import type { Metadata } from "next";
import styles from "./information.module.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.masumishiohara.com";

export const metadata: Metadata = {
  title: "Information | Masumi Shiohara",
  description:
    "Viewing, enquiry, image-use, and credit information for Masumi Shiohara's cultivated botanical works and portfolio website.",
  alternates: {
    canonical: `${siteUrl}/information`,
  },
  openGraph: {
    title: "Information | Masumi Shiohara",
    description:
      "Practical information for viewing the portfolio, preparing enquiries, requesting images, and referencing works.",
    url: `${siteUrl}/information`,
    type: "website",
  },
};

const informationSections = [
  {
    number: "01",
    title: "Viewing the works",
    text:
      "The portfolio is organized by series rather than as one uninterrupted image stream. Begin with the works index, then open the series that matches the visual condition or material surface you need to review.",
  },
  {
    number: "02",
    title: "Curatorial and editorial enquiries",
    text:
      "For exhibitions, publications, interviews, and editorial use, include the relevant series title, page URL, intended context, schedule, venue or publication name, and any requested image dimensions.",
  },
  {
    number: "03",
    title: "Artwork and project enquiries",
    text:
      "For acquisition, commission, collaboration, or project enquiries, reference the specific series or work page first. This keeps the conversation tied to a visible body of work rather than a general request.",
  },
  {
    number: "04",
    title: "Image use and credit",
    text:
      "Images on the site should be treated as reference material unless permission has been confirmed. When requesting image use, include purpose, format, territory, duration, and credit requirements.",
  },
];

const quickLinks = [
  { label: "Works index", href: "/projects/botanical-portraits" },
  { label: "About the practice", href: "/about" },
  { label: "Exhibitions and archive", href: "/exhibitions" },
  { label: "Contact guide", href: "/contact" },
];

export default function InformationPage() {
  return (
    <main className={styles.informationPage}>
      <section className={styles.intro} aria-labelledby="information-title">
        <p className={styles.eyebrow}>INFORMATION</p>
        <h1 id="information-title">Viewing, enquiry, and image-use guidance.</h1>
        <p className={styles.lead}>
          This page gives visitors a clear route through the portfolio and sets a consistent
          format for professional enquiries. It is written to support curators, editors,
          collectors, collaborators, and project partners without adding unverified contact
          details.
        </p>
      </section>

      <section className={styles.informationGrid} aria-label="Practical information">
        {informationSections.map((section) => (
          <article key={section.number} className={styles.informationCard}>
            <span>{section.number}</span>
            <h2>{section.title}</h2>
            <p>{section.text}</p>
          </article>
        ))}
      </section>

      <section className={styles.referenceBlock} aria-labelledby="reference-title">
        <div>
          <p className={styles.eyebrow}>REFERENCE FORMAT</p>
          <h2 id="reference-title">Use exact page references when writing.</h2>
        </div>
        <div className={styles.referenceList}>
          <p>Artist name: Masumi Shiohara</p>
          <p>Series title or work page URL</p>
          <p>Purpose of request</p>
          <p>Publication, venue, organization, or project context</p>
          <p>Timeline, location, and preferred response method</p>
        </div>
      </section>

      <section className={styles.linkPanel} aria-labelledby="pathways-title">
        <div>
          <p className={styles.eyebrow}>SITE PATHWAYS</p>
          <h2 id="pathways-title">Move from the whole practice to a specific request.</h2>
        </div>
        <div className={styles.quickLinks}>
          {quickLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
      </section>

      <section className={styles.finalCta} aria-labelledby="information-cta-title">
        <div>
          <p className={styles.eyebrow}>NEXT STEP</p>
          <h2 id="information-cta-title">Begin with the works, then send a precise enquiry.</h2>
        </div>
        <a className={styles.primaryCta} href="/projects/botanical-portraits">
          View works
        </a>
      </section>
    </main>
  );
}
