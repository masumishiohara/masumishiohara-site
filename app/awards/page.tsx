import type { Metadata } from "next";
import { siteConfig } from "../site-config";
import { siteContent } from "../cms-content";
import styles from "./awards.module.css";

const siteUrl = siteConfig.siteUrl;

export const metadata: Metadata = {
  title: "Awards and External References | Masumi Shiohara",
  description:
    "Awards, selections, grants, residencies, and external reference links for Masumi Shiohara's cultivated botanical works.",
  alternates: { canonical: `${siteUrl}/awards` },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Awards and External References | Masumi Shiohara",
    description: "Verified awards and external references connected to Masumi Shiohara.",
    url: `${siteUrl}/awards`,
    type: "website",
  },
};

export default function AwardsPage() {
  return (
    <main className={styles.awardsPage}>
      <section className={styles.hero} aria-labelledby="awards-title">
        <p className={styles.eyebrow}>AWARDS / REFERENCES</p>
        <h1 id="awards-title">Awards, selections, and external records.</h1>
        <p>
          This page is prepared for verified awards, selections, grants, residencies, and external
          source links. Each item can point to an official page so editors, collectors, and curators
          can check the source directly.
        </p>
      </section>

      <section className={styles.awardList} aria-label="Awards and references">
        {siteContent.awards.map((award) => {
          const content = (
            <article className={styles.awardItem} key={`${award.year}-${award.title}`}>
              <span>{award.year}</span>
              <div>
                <h2>{award.title}</h2>
                <p className={styles.organization}>{award.organization}</p>
                <p>{award.summary}</p>
                {award.href ? <em>Open official reference</em> : <em>Official link to be added</em>}
              </div>
            </article>
          );

          if (!award.href) return content;
          return (
            <a className={styles.awardLink} href={award.href} target="_blank" rel="noreferrer" key={`${award.year}-${award.title}`}>
              {content}
            </a>
          );
        })}
      </section>

      <section className={styles.finalCta} aria-labelledby="awards-cta-title">
        <div>
          <p className={styles.eyebrow}>SOURCE-LED RECORD</p>
          <h2 id="awards-cta-title">External recognition should remain verifiable and quiet.</h2>
        </div>
        <a href="/contact">Contact for updates</a>
      </section>
    </main>
  );
}
