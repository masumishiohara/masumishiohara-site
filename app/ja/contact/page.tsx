import type { Metadata } from "next";
import { mailtoHref, siteConfig } from "../../site-config";
import styles from "./contact.module.css";

const siteUrl = siteConfig.siteUrl;

export const metadata: Metadata = {
  title: "お問い合わせ | Masumi Shiohara",
  description:
  "編集、キュレーション、展示、出版、作品購入、ブランド、報道、各種プロジェクトに関する塩原真澄へのお問い合わせ。",
  alternates: {
    canonical: `${siteUrl}/ja/contact`,
  },
  openGraph: {
    title: "お問い合わせ | Masumi Shiohara",
    description:
  "展示、出版、作品購入、コラボレーション、編集依頼、画像使用に関するお問い合わせ窓口です。",
    url: `${siteUrl}/ja/contact`,
    type: "website",
  },
};

const enquiryTypes = [
  "編集・出版・取材に関するご依頼",
  "展示・キュレーション・施設関係のお問い合わせ",
  "ブランド・メゾン・文化事業とのコラボレーション",
  "作品・プリント・ポートフォリオ・作品購入に関するお問い合わせ",
  "メゾン・文化事業・コラボレーターからのご相談",
  "報道・画像使用・クレジット表記に関するお問い合わせ",
];

const messageChecklist = [
  "お名前・ご所属",
  "お問い合わせの目的",
  "関連するシリーズ名または作品ページのURL",
  "希望する時期・スケジュール",
  "画像使用の場合は、媒体名・用途・掲載範囲",
];

const routingNotes = [
  {
    label: "編集・出版",
    text: "媒体名、企画内容、使用言語、形式、画像サイズ、掲載予定日、クレジット表記の希望をご記載ください。",
  },
  {
    label: "メゾン・ブランド",
    text: "企画の概要、想定する用途、希望する作品・シリーズ、スケジュールをご記載ください。",
  },
  {
    label: "展示・キュレーション",
    text: "会場名、企画内容、展示時期、希望する作品・シリーズ、借用・購入の別をご記載ください。",
  },
  {
    label: "画像使用",
    text: "媒体名、使用目的、掲載範囲、使用期間、希望画像、クレジット表記をご記載ください。",
  },
];

export default function ContactPage() {
  return (
    <main className={styles.contactPage}>
      <section className={styles.intro} aria-labelledby="contact-title">
        <p className={styles.eyebrow}>お問い合わせ / MASUMI SHIOHARA</p>
        <h1 id="contact-title">編集・展示・出版・プロジェクトに関するお問い合わせ。</h1>
        <p className={styles.lead}>
  展示、出版、コラボレーション、画像使用、作品に関するお問い合わせは、
  関連するシリーズ名または作品ページを添えて、簡潔にご連絡ください。
</p>
        <div className={styles.mailBlock}>
          <span>メールでのお問い合わせ</span>
          <a href={mailtoHref("塩原真澄へのお問い合わせ")}>{siteConfig.contactEmail}</a>
        </div>
      </section>

      <section className={styles.contactGrid} aria-label="お問い合わせ項目">
        <article className={styles.contactCard}>
          <span>お問い合わせ内容</span>
          <h2>お問い合わせ項目</h2>
          <ul>
            {enquiryTypes.map((type) => (
              <li key={type}>{type}</li>
            ))}
          </ul>
        </article>
        <article className={styles.contactCard}>
          <span>お問い合わせ前に</span>
          <h2>関連する作品情報を添えてください。</h2>
          <p>
            編集、ブランド、キュレーション、作品購入に関するお問い合わせでは、
関連する作品名、シリーズ名、または作品ページのURLをご記載ください。
最初のご連絡内容を確認しやすくするためです。
          </p>
          <a className={styles.secondaryCta} href="/ja/works">
  お問い合わせ前に作品を見る
</a>
        </article>
      </section>

      <section className={styles.routingGrid} aria-label="お問い合わせ案内">
        {routingNotes.map((note) => (
          <article key={note.label}>
            <span>{note.label}</span>
            <p>{note.text}</p>
          </article>
        ))}
      </section>

      <section className={styles.editorialContact} aria-labelledby="editorial-contact-title">
        <div>
         <p className={styles.eyebrow}>編集・ブランド関係のお問い合わせ</p>
          <h2 id="editorial-contact-title">まず作品をご覧ください。</h2>
        </div>
        <div>
          <p>
            編集者、キュレーター、ギャラリー、ブランド関係者の方が、
事前に長いやり取りをしなくても作品を確認できるように構成しています。
関連するシリーズを開き、そのURLとあわせて、ご依頼内容、希望時期、
クレジット表記などをご連絡ください
          </p>
          <a className={styles.primaryCta} href={mailtoHref("塩原真澄へのお問い合わせ")}>
  メールで問い合わせる
</a>
        </div>
      </section>

      <section className={styles.messageTemplate} aria-labelledby="message-title">
        <div>
          <p className={styles.eyebrow}>お問い合わせ内容の目安</p>
          <h2 id="message-title">最初のご連絡に必要な情報。</h2>
        </div>
        <div className={styles.templateBox}>
          {messageChecklist.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </section>

      <section className={styles.infoLink} aria-labelledby="information-title">
        <div>
          <p className={styles.eyebrow}>関連資料</p>
          <h2 id="information-title">画像使用やお問い合わせに関する資料。</h2>
        </div>
        <div className={styles.resourceActions}>
          <a className={styles.secondaryCta} href="/dossier">
            作品資料
          </a>
          <a className={styles.secondaryCta} href="/archive">
            シリーズ一覧
          </a>
          <a className={styles.secondaryCta} href="/curatorial">
            キュレーション資料
          </a>
          <a className={styles.secondaryCta} href="/acquisitions">
            作品購入
          </a>
          <a className={styles.secondaryCta} href="/collaborations">
            コラボレーション
          </a>
          <a className={styles.secondaryCta} href="/press">
            報道・画像使用
          </a>
        </div>
      </section>

      <section className={styles.finalCta} aria-labelledby="contact-cta-title">
        <div>
         <p className={styles.eyebrow}>直接のお問い合わせ</p>
         <h2 id="contact-cta-title">関連するシリーズURLとご依頼内容をお送りください。</h2>
          <p>{siteConfig.contactEmail}</p>
        </div>
        <a className={styles.primaryCta} href={mailtoHref("塩原真澄へのお問い合わせ")}>お問い合わせを送る</a>
      </section>
    </main>
  );
}
