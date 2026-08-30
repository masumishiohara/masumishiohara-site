import type { Metadata } from "next";
import styles from "./exhibitions.module.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.masumishiohara.com";

export const metadata: Metadata = {
  title: "展示・アーカイブ | Masumi Shiohara",
  description:
    "塩原真澄の植物作品に関する展示、プロジェクト、出版・掲載、活動記録をまとめたアーカイブです。",
  alternates: {
    canonical: `${siteUrl}/ja/exhibitions`,
  },
  openGraph: {
    title: "展示・アーカイブ | Masumi Shiohara",
    description:
      "塩原真澄の展示、プロジェクト、出版・掲載などの活動記録をまとめたアーカイブページです。",
    url: `${siteUrl}/ja/exhibitions`,
    type: "website",
  },
};

const archiveSections = [
  {
    label: "展示",
    title: "個展・グループ展",
    text:
      "開催年、展覧会名、会場、開催地など、確認済みの展示情報を新しい順に掲載します。",
  },
  {
    label: "プロジェクト",
    title: "植物・果樹園を基盤としたプロジェクト",
    text:
      "プロジェクト作品、園地での記録、コラボレーション、滞在制作、調査記録などを掲載します。",
  },
  {
    label: "出版・掲載",
    title: "書籍・カタログ・掲載記事",
    text:
      "出版物、寄稿文、報道記事、カタログ、インタビューなど、確認済みの情報を掲載します。",
  },
];

const cvBlocks = [
  {
    period: "現在",
    title: "ポートフォリオとプロジェクトの記録",
    text:
      "公開ポートフォリオは植物を中心としたシリーズで構成し、このページでは確認済みの略歴と活動記録をまとめます。",
  },
  {
    period: "主な展示",
    title: "展示歴",
    text:
      "個展、グループ展、アートフェア、公開展示などを、年・展覧会名・会場・開催地とともに掲載します。",
  },
  {
    period: "出版・掲載",
    title: "出版・掲載記録",
    text:
      "カタログ、書籍、雑誌、インタビュー、オンライン掲載などを活動記録としてまとめます。",
  },
  {
    period: "プロジェクト",
    title: "コラボレーションと園地での活動",
    text:
      "園地を基盤としたプロジェクト、依頼制作、滞在制作、コラボレーションなどを、関連する作品シリーズとともに記録します。",
  },
];

export default function ExhibitionsPage() {
  return (
    <main className={styles.exhibitionsPage}>
      <section className={styles.intro} aria-labelledby="exhibitions-title">
        <p className={styles.eyebrow}>
          展示・アーカイブ / MASUMI SHIOHARA
        </p>
        <h1 id="exhibitions-title">
          展示・出版・プロジェクトの記録。
        </h1>
        <p className={styles.lead}>
          このページは、塩原真澄の展示、出版、プロジェクトなどの
          活動記録をまとめる公開アーカイブです。
          作品そのものは「作品」ページでご覧いただけます。
        </p>
      </section>

      <section
        className={styles.archiveGrid}
        aria-label="展示・活動記録"
      >
        {archiveSections.map((section) => (
          <article key={section.label}>
            <span>{section.label}</span>
            <h2>{section.title}</h2>
            <p>{section.text}</p>
          </article>
        ))}
      </section>

      <section
        className={styles.timelineBlock}
        aria-labelledby="timeline-title"
      >
        <div>
          <p className={styles.eyebrow}>略歴・活動記録</p>
          <h2 id="timeline-title">
            確認済みの情報を整理して掲載します。
          </h2>
        </div>

        <div className={styles.timelineList}>
          {cvBlocks.map((item) => (
            <div className={styles.timelineItem} key={item.title}>
              <span>{item.period}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section
        className={styles.finalCta}
        aria-labelledby="exhibitions-cta-title"
      >
        <div>
          <p className={styles.eyebrow}>
            キュレーター・編集者の方へ
          </p>
          <h2 id="exhibitions-cta-title">
            まず作品をご覧いただき、お問い合わせページからご連絡ください。
          </h2>
        </div>

        <div className={styles.ctaRow}>
          <a className={styles.primaryCta} href="/ja/works">
            作品を見る
          </a>
          <a className={styles.secondaryCta} href="/ja/contact">
            お問い合わせ
          </a>
        </div>
      </section>
    </main>
  );
}