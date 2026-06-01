import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";
import { workSeries } from "./work-series-data";

export const metadata: Metadata = {
  title: "Masumi Shiohara | Cultivated Botanical Works",
  description:
    "Masumi Shiohara works with cultivated fruit, botanical forms, orchard time, photography, object making, and print-like surfaces.",
};

type AnyRecord = Record<string, unknown>;

function asRecord(value: unknown): AnyRecord {
  return value && typeof value === "object" ? (value as AnyRecord) : {};
}

function asString(value: unknown): string | undefined {
  return typeof value === "string" && value.trim() ? value : undefined;
}

function arrayFrom(value: unknown): AnyRecord[] {
  return Array.isArray(value) ? value.map(asRecord) : [];
}

function getImages(series: AnyRecord): AnyRecord[] {
  return [
    ...arrayFrom(series.images),
    ...arrayFrom(series.works),
    ...arrayFrom(series.items),
    ...arrayFrom(series.plates),
  ];
}

function getImageSrc(item: AnyRecord): string | undefined {
  return (
    asString(item.src) ??
    asString(item.image) ??
    asString(item.url) ??
    asString(item.href) ??
    asString(item.path)
  );
}

const seriesList = (workSeries as unknown as AnyRecord[]) ?? [];
const blackGround =
  seriesList.find((series) => asString(series.slug)?.includes("black-ground")) ??
  seriesList.find((series) => asString(series.title)?.toLowerCase().includes("black ground")) ??
  seriesList[0] ??
  {};

const blackImages = getImages(blackGround);
const featured =
  blackImages.find((item) => asString(item.code)?.includes("020")) ??
  blackImages.find((item) => asString(item.title)?.includes("020")) ??
  blackImages[0] ??
  {};

const featuredSrc =
  getImageSrc(featured) ??
  "/gallery/black-ground-botanical-works/MS-B-G-020.jpg";

const featuredTitle =
  asString(featured.title) ??
  "Black Ground Botanical Works 020";

const featuredCode =
  asString(featured.code) ??
  "MS-BG-020";

const featuredCaption =
  asString(featured.caption) ??
  "Framed reference from the Black Ground Botanical Works series.";

const blackSlug = asString(blackGround.slug) ?? "black-ground-botanical-works";

const routeCards = [
  {
    number: "01",
    title: "Works",
    href: "/projects/botanical-portraits",
    text: "Browse the public series as works, studies, processes, and archive routes.",
  },
  {
    number: "02",
    title: "Dossier",
    href: "/dossier",
    text: "A concise editorial route for curators, editors, collectors, and maison teams.",
  },
  {
    number: "03",
    title: "Curatorial",
    href: "/curatorial",
    text: "Context for exhibition, institutional review, and critical presentation.",
  },
  {
    number: "04",
    title: "Archive",
    href: "/archive",
    text: "Series map, visual condition, selection, process, and reference structure.",
  },
];

const worldRoutes = [
  ["Cultivation", "Orchard time, seasonal work, and the living material before the photograph."],
  ["Breeding", "Selection, variation, rejected forms, and the long span of agricultural decision."],
  ["Image", "Photographic surfaces that hold botanical evidence rather than decoration."],
];

export default function HomePage() {
  return (
    <main className={styles.homePage}>
      <section className={styles.hero} aria-labelledby="home-title">
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>Masumi Shiohara / Cultivated Botanical Works</p>
          <h1 id="home-title">A cultivated world of fruit, form, time, and image.</h1>
          <p className={styles.lede}>
            The work begins in the orchard: with breeding, cultivation, selection,
            waiting, rejection, and the final photographic surface. The website is
            arranged as a quiet route into that world, not as a decoration around it.
          </p>
          <div className={styles.heroActions}>
            <Link href="/projects/botanical-portraits">View works</Link>
            <Link href="/dossier">Curated dossier</Link>
            <Link href="/curatorial">Curatorial context</Link>
            <Link href="/contact">contact@masumishiohara.com</Link>
          </div>
        </div>

        <div className={styles.heroFrame}>
          <Link href={`/works/${blackSlug}`} className={styles.heroFramedPhotoLink} aria-label="View Black Ground Botanical Works series">
            <img
              src="/home/framed-ms-bg-020-real-v31.jpg"
              alt="Black Ground Botanical Works 020 by Masumi Shiohara, framed and lit on a gallery wall"
              className={styles.heroFramedPhoto}
              draggable={false}
            />
          </Link>
          <p className={styles.heroFrameCaption}>Featured framed work / Black Ground Botanical Works 020</p>
        </div>
      </section>

      <section className={styles.seriesRoutes} aria-label="Primary visitor routes">
        {routeCards.map((card) => (
          <Link href={card.href} className={styles.routeCard} key={card.title}>
            <span>{card.number}</span>
            <h2>{card.title}</h2>
            <p>{card.text}</p>
          </Link>
        ))}
      </section>

      <section className={styles.worldSection} aria-labelledby="world-title">
        <div>
          <p className={styles.eyebrow}>The work is not a single framed object</p>
          <h2 id="world-title">It is an archive of cultivation, choice, and photographic form.</h2>
        </div>
        <div className={styles.worldGrid}>
          {worldRoutes.map(([title, text]) => (
            <article key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.finalRoute} aria-label="Editorial and acquisition routes">
        <Link href="/editorial">Editorial viewing</Link>
        <Link href="/acquisitions">Acquisitions</Link>
        <Link href="/exhibitions">Exhibitions</Link>
        <Link href="/awards">Awards</Link>
      </section>
    </main>
  );
}
