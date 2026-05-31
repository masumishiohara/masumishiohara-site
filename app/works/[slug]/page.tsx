import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { workSeries } from "../../work-series-data";
import { absoluteUrl, siteConfig } from "../../site-config";
import WorkSeriesViewer from "./WorkSeriesViewer";

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
  caption?: string;
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
      caption: `Full composition from ${series.title ?? "this series"}. Reference ${series.code ?? "MS"}-${String(index + 1).padStart(3, "0")}.`,
    };
  }

  if (!item || typeof item !== "object") return null;
  const record = item as Record<string, any>;
  const src = normalizePath(record.src ?? record.image ?? record.url ?? record.path ?? record.file);
  if (!src) return null;
  const code = String(record.code ?? record.id ?? `${series.code ?? "MS"}-${String(index + 1).padStart(3, "0")}`);
  const title = String(record.title ?? record.name ?? `${series.title ?? "Work"} ${String(index + 1).padStart(2, "0")}`);
  const alt = String(record.alt ?? `${title} by Masumi Shiohara`);
  const caption = record.caption ? String(record.caption) : `Full composition from ${series.title ?? "this series"}. Reference ${code}.`;
  return { src, title, code, alt, caption };
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
          caption: `Hero composition from ${String(series.title ?? "this series")}.`,
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

  return <WorkSeriesViewer title={title} code={code} statement={statement} heroSrc={heroSrc} works={works} />;
}
