import type { Metadata } from "next";
import { workSeries } from "../../work-series-data";
import styles from "./about.module.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.masumishiohara.com";
const imageSeries =
  workSeries.find((series) => series.slug === "canvas-botanical-studies") ?? workSeries[0];
const ogImage = imageSeries?.heroImage ? `${siteUrl}${imageSeries.heroImage}` : undefined;

export const metadata: Metadata = {
  title: "プロフィール | Masumi Shiohara",
  description:
  "果実栽培、植物の造形、写真表現を軸に活動する塩原真澄のプロフィールとステートメント。",
  alternates: {
    canonical: `${siteUrl}/ja/about`,
  },
  openGraph: {
    title: "プロフィール | Masumi Shiohara",
    description:
  "果実栽培、植物の造形、写真表現を軸に活動する塩原真澄のプロフィールとステートメント。",
    url: `${siteUrl}/ja/about`,
    type: "profile",
    images: ogImage
      ? [
          {
            url: ogImage,
            width: 1200,
            height: 900,
            alt: "塩原真澄の植物作品",
          },
        ]
      : undefined,
  },
};

const practiceBlocks = [
  {
    number: "01",
    title: "栽培",
    text:
  "果実、葉、花、枝を、天候や園地で過ごす時間、手入れ、扱い、成熟、そして失われていく過程によって形づくられるものとして捉えています。",
  },
  {
    number: "02",
    title: "写真",
    text:
  "写真とプリントのような平面を、植物の構造、色、影、質感、季節の記憶を受け止める場として捉えています。",
  },
  {
    number: "03",
    title: "記録",
    text:
  "作品はシリーズごとに構成し、反復や違い、表面、空気感を、それぞれの形を単なる記録に還元することなく見られるようにしています。",
  },
];

const processRows = [
  ["素材", "栽培された果実、植物の造形、園地の断片、葉、枝、花、静物構成"],
  ["方法", "写真撮影、オブジェ制作、プリントのような画像表現、表面の研究、シリーズ編集"],
  ["主題", "栽培、時間の経過、成熟、季節、手入れ、変化、植物素材の静かな存在感"],
  ["ポートフォリオ構成", "作品はシリーズごとに整理し、単なる記録ではなく、イメージの強さ、明瞭さ、検索性を重視しています"],
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Masumi Shiohara",
  url: siteUrl,
  jobTitle: "Artist",
  description:
  "栽培された果実、植物の造形、写真表現、オブジェ制作、素材の記憶を軸に活動する作家。",
};

export default function AboutPage() {
  return (
    <main className={styles.aboutPage}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className={styles.intro} aria-labelledby="about-title">
        <p className={styles.eyebrow}>プロフィール / MASUMI SHIOHARA</p>
       <h1 id="about-title">栽培、写真、素材の変化を見つめる。</h1>
        <p className={styles.lead}>
  塩原真澄は、植物の造形、園地で過ごす時間、写真、オブジェ制作、
プリントのような平面表現に取り組んでいます。栽培植物を、季節、労働、
手入れ、変化の記録として捉えています。
</p>
      </section>

      <section className={styles.statement} aria-labelledby="statement-title">
        <div>
          <p className={styles.eyebrow}>アーティスト・ステートメント</p>
          <h2 id="statement-title">植物素材に刻まれる時間。</h2>
        </div>
        <div>
          <p>
            梨、すもも、ぶどう、枝、葉、花には、天候、手入れ、生長、成熟、
そして失われていく過程が刻まれています。これらの素材を写真、表面、
構成によって切り離して見つめることで、栽培されたものがどのように
視覚的な記録となり得るかを考えています。
          </p>
          <p>
            各シリーズでは、素材の見え方を異なる条件で捉えています。黒背景では輪郭と静かな存在感を強調し、
キャンバス作品では果実や植物の形を織物のような画面へつなげています。
アンティーク調やヴェラムの作品では、イメージを記録や記憶へ近づけています。
          </p>
        </div>
      </section>

      <section className={styles.contentGrid} aria-label="作家活動の概要">
        {practiceBlocks.map((block) => (
          <article key={block.number}>
            <span>{block.number}</span>
            <h2>{block.title}</h2>
            <p>{block.text}</p>
          </article>
        ))}
      </section>

      <section className={styles.methodBlock} aria-labelledby="method-title">
        <p className={styles.eyebrow}>制作方法</p>
        <h2 id="method-title">シリーズで、作品をじっくり見る。</h2>
        <p>
          作品はシリーズごとに分けて掲載しています。
  同じテーマや素材の作品をまとめることで、
  作品同士の共通点や違いを比較しながら見られるようにしています。
        </p>
        <a className={styles.secondaryCta} href="/ja/works">
  すべての作品を見る
</a>
      </section>



      <section className={styles.contextBlock} aria-labelledby="context-title">
        <div>
          <p className={styles.eyebrow}>掲載・展示の文脈</p>
          <h2 id="context-title">洗練された文化・ブランドの文脈に向けた植物作品。</h2>
        </div>
        <p>
          公開サイトは、暗い空間、アイボリーの文字、控えめな金色のアクセント、
シリーズごとの作品空間で構成しています。編集者やキュレーターによる閲覧、
作品資料としての参照、そして装飾性よりも空気感、精度、素材の存在感を重視する
場に向けた構成です。
        </p>
      </section>

      <section className={styles.profileBlock} aria-labelledby="profile-title">
        <div>
          <p className={styles.eyebrow}>プロフィール</p>
          <h2 id="profile-title">塩原 真澄</h2>
        </div>
        <div className={styles.profileTable}>
          {processRows.map(([label, value]) => (
            <div className={styles.profileRow} key={label}>
              <span>{label}</span>
              <p>{value}</p>
            </div>
          ))}
          <div className={styles.profileActions}>
            <a className={styles.primaryCta} href="/ja/works">
  作品を見る
</a>
            <a className={styles.secondaryCta} href="/ja/contact">
  お問い合わせ
</a>
          </div>
        </div>
      </section>
    </main>
  );
}
