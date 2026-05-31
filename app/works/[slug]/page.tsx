import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { workSeries } from "../../work-series-data";
import { absoluteUrl, siteConfig } from "../../site-config";
import styles from "./work-series-page.module.css";

type PageProps = {
  params: {
    slug: string;
  };
};

type WorkImage = {
  src: string;
  title: string;
  code: string;
  alt: string;
};

const allSeries = workSeries as unknown as Array<Record<string, any>>;

function findSeries(slug: string) {
  return allSeries.find((series) => series.slug === slug);
}

function normalizePath(value: unknown) {
  if (typeof value !== "string" || !value.trim()) return "";
  const trimmed = value.trim();
  if (trimmed.startsWith("http://") || trimmed.startsWith("https://") || trimmed.startsWith("/")) {
    return trimmed;
  }
  return `/${trimmed}`;
}

function imageFromItem(item: unknown, index: number, series: Record<string, any>): WorkImage | null {
  if (typeof item === "string") {
    const src = normalizePath(item);
    if (!src) return null;
    return {
      src,
      title: `${series.title ?? "Work"} ${String(index + 1).padStart(2, "0")}`,
      code: `${series.code ?? "MS"}-${String(index + 1).padStart(3, "0")}`,
      alt: `${series.title ?? "Masumi Shiohara work"} ${index + 1}`,
    };
  }

  if (!item || typeof item !== "object") return null;
  const record = item as Record<string, any>;
  const src = normalizePath(record.src ?? record.image ?? record.url ?? record.path ?? record.file);
  if (!src) return null;
  const code = String(record.code ?? record.id ?? `${series.code ?? "MS"}-${String(index + 1).padStart(3, "0")}`);
  const title = String(record.title ?? record.name ?? `${series.title ?? "Work"} ${String(index + 1).padStart(2, "0")}`);
  const alt = String(record.alt ?? `${title} by Masumi Shiohara`);
  return { src, title, code, alt };
}

function getWorks(series: Record<string, any>): WorkImage[] {
  const rawWorks =
    (Array.isArray(series.works) && series.works) ||
    (Array.isArray(series.items) && series.items) ||
    (Array.isArray(series.images) && series.images) ||
    (Array.isArray(series.gallery) && series.gallery) ||
    (Array.isArray(series.photos) && series.photos) ||
    [];

  const normalized = rawWorks
    .map((item: unknown, index: number) => imageFromItem(item, index, series))
    .filter(Boolean) as WorkImage[];

  const hero = normalizePath(series.heroImage ?? series.image);
  if (normalized.length > 0) return normalized;
  return hero
    ? [
        {
          src: hero,
          title: String(series.title ?? "Masumi Shiohara work"),
          code: String(series.code ?? "MS"),
          alt: `${String(series.title ?? "Masumi Shiohara work")} by Masumi Shiohara`,
        },
      ]
    : [];
}

export function generateStaticParams() {
  return allSeries.map((series) => ({ slug: String(series.slug) }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const series = findSeries(params.slug);
  if (!series) return {};
  const title = `${series.title} | Masumi Shiohara Works`;
  const description = String(
    series.statement ??
      series.description ??
      "Series-based botanical works by Masumi Shiohara, presented for quiet editorial and curatorial viewing.",
  );
  const heroImage = normalizePath(series.heroImage ?? series.image);
  const url = absoluteUrl(`/works/${series.slug}`);

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: "article",
      images: heroImage
        ? [
            {
              url: heroImage.startsWith("http") ? heroImage : `${siteConfig.siteUrl}${heroImage}`,
              width: 1200,
              height: 900,
              alt: `${series.title} by Masumi Shiohara`,
            },
          ]
        : undefined,
    },
  };
}

export default function WorkSeriesPage({ params }: PageProps) {
  const series = findSeries(params.slug);
  if (!series) notFound();

  const works = getWorks(series);
  const heroSrc = normalizePath(series.heroImage ?? works[0]?.src);
  const title = String(series.title ?? "Works");
  const code = String(series.code ?? "MS");
  const statement = String(series.statement ?? series.description ?? "A quiet body of botanical work by Masumi Shiohara.");

  return (
    <main className={styles.seriesPage}>
      <section className={styles.hero} aria-labelledby="series-title">
        {heroSrc ? (
          <div className={styles.heroImageFrame}>
            <Image
              src={heroSrc}
              alt={`${title} by Masumi Shiohara`}
              width={1320}
              height={920}
              sizes="(max-width: 900px) 100vw, 48vw"
              priority
              quality={68}
              className={styles.heroImage}
            />
          </div>
        ) : null}
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>{code}</p>
          <h1 id="series-title">{title}</h1>
          <p>{statement}</p>
          <span>{works.length} works in this series</span>
        </div>
      </section>

      <section className={styles.indexSection} aria-labelledby="series-index-title">
        <div className={styles.indexHeader}>
          <p className={styles.eyebrow}>SERIES INDEX</p>
          <h2 id="series-index-title">A compact visual index for faster review.</h2>
          <p>
            The index uses smaller optimized images first, then defers larger plates below. This keeps
            the page lighter while preserving the complete series for close viewing.
          </p>
        </div>
        <div className={styles.thumbnailGrid}>
          {works.map((work, index) => (
            <a className={styles.thumbnailCard} href={`#work-${index + 1}`} key={`${work.src}-${index}`}>
              <Image
                src={work.src}
                alt={work.alt}
                fill
                sizes="(max-width: 700px) 22vw, (max-width: 1200px) 10vw, 96px"
                quality={42}
                loading={index < 12 ? "eager" : "lazy"}
                className={styles.thumbnailImage}
              />
              <span>{work.code}</span>
            </a>
          ))}
        </div>
      </section>

      <section className={styles.plateSection} aria-labelledby="plates-title">
        <div className={styles.plateHeader}>
          <p className={styles.eyebrow}>PLATES</p>
          <h2 id="plates-title">Complete series plates, loaded progressively.</h2>
        </div>
        <div className={styles.plateGrid}>
          {works.map((work, index) => (
            <figure className={styles.plate} id={`work-${index + 1}`} key={`${work.src}-plate-${index}`}>
              <Image
                src={work.src}
                alt={work.alt}
                width={900}
                height={1180}
                sizes="(max-width: 700px) 100vw, (max-width: 1200px) 42vw, 520px"
                quality={64}
                loading="lazy"
                className={styles.plateImage}
              />
              <figcaption>
                <span>{work.code}</span>
                {work.title}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </main>
  );
}
