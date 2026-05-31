import type { Metadata } from "next";
import Image from "next/image";
import { workSeries } from "../../work-series-data";
import { absoluteUrl, siteConfig } from "../../site-config";
import styles from "./portfolio-index.module.css";

const allSeries = workSeries as unknown as Array<Record<string, any>>;
const heroSeries =
  allSeries.find((series) => series.slug === "black-ground-botanical-works") ?? allSeries[0];

function normalizePath(value: unknown) {
  if (typeof value !== "string" || !value.trim()) return "";
  const trimmed = value.trim();
  if (trimmed.startsWith("http://") || trimmed.startsWith("https://") || trimmed.startsWith("/")) return trimmed;
  return `/${trimmed}`;
}

function itemCount(series: Record<string, any>) {
  const source = series.works ?? series.items ?? series.images ?? series.gallery ?? series.photos;
  return Array.isArray(source) ? source.length : undefined;
}

const pageTitle = "Works | Masumi Shiohara";
const description =
  "A quiet series index for Masumi Shiohara's cultivated botanical works, organized for editorial, curatorial, acquisition, and maison-level viewing.";

export const metadata: Metadata = {
  title: pageTitle,
  description,
  alternates: { canonical: absoluteUrl("/projects/botanical-portraits") },
  openGraph: {
    title: pageTitle,
    description,
    url: absoluteUrl("/projects/botanical-portraits"),
    type: "website",
    images: heroSeries?.heroImage
      ? [
          {
            url: normalizePath(heroSeries.heroImage).startsWith("http")
              ? normalizePath(heroSeries.heroImage)
              : `${siteConfig.siteUrl}${normalizePath(heroSeries.heroImage)}`,
            width: 1200,
            height: 900,
            alt: "Masumi Shiohara works index",
          },
        ]
      : undefined,
  },
};

export default function BotanicalPortraitsPage() {
  return (
    <main className={styles.indexPage}>
      <section className={styles.hero} aria-labelledby="works-title">
        <div>
          <p className={styles.eyebrow}>WORKS / MASUMI SHIOHARA</p>
          <h1 id="works-title">Series held with space, sequence, and restraint.</h1>
        </div>
        <p>
          The works index is designed as a quiet archive rather than a crowded image wall. Each
          body of work opens into a compact visual index first, then progressive plates for closer
          review.
        </p>
      </section>

      <section className={styles.seriesList} aria-label="Work series">
        {allSeries.map((series, index) => {
          const image = normalizePath(series.heroImage ?? series.image);
          const count = itemCount(series);
          return (
            <a className={styles.seriesRow} href={`/works/${series.slug}`} key={String(series.slug)}>
              <span className={styles.number}>{String(index + 1).padStart(2, "0")}</span>
              <div className={styles.thumb}>
                {image ? (
                  <Image
                    src={image}
                    alt={`${series.title} by Masumi Shiohara`}
                    fill
                    sizes="(max-width: 720px) 28vw, 180px"
                    quality={52}
                    loading={index < 3 ? "eager" : "lazy"}
                  />
                ) : null}
              </div>
              <div className={styles.seriesText}>
                <span>{String(series.code ?? "MS")}</span>
                <h2>{String(series.title)}</h2>
                <p>{String(series.statement ?? series.description ?? "Cultivated botanical work series.")}</p>
              </div>
              <div className={styles.meta}>
                <span>{count ? `${count} works` : "series"}</span>
                <em>Open</em>
              </div>
            </a>
          );
        })}
      </section>
    </main>
  );
}
