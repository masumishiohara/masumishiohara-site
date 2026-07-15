import { workSeries } from "../../work-series-data";

const japaneseSeriesText: Record<
  string,
  { title: string; description: string }
> = {
  "canvas-botanical-studies": {
    title: "キャンバス上の植物作品",
    description:
      "果実や植物を布地の質感とともに構成した作品群。標本ではなく、絵画的な面として植物の形を見せています。",
  },
  "antique-botanical-studies": {
    title: "古典的植物作品",
    description:
      "古い植物図譜や静物画の雰囲気を参照しながら、栽培された果実と枝葉を静かに構成したシリーズです。",
  },
  "vellum-fruit-studies": {
    title: "羊皮紙調の果実作品",
    description:
      "柔らかな地の上に果実や花を配置し、記録と絵画の中間にあるような質感を持たせた作品群です。",
  },
  "black-ground-botanical-works": {
    title: "黒背景の植物作品",
    description:
      "黒い背景に果実、花、葉、枝を配置し、栽培された植物の形を明確に見せる代表的なシリーズです。",
  },
  "growth-process": {
    title: "生育過程",
    description:
      "開花、結実、肥大、成熟までの時間を記録するシリーズ。栽培の中でしか見られない変化を扱います。",
  },
  "selection-studies": {
    title: "選抜研究",
    description:
      "育種や栽培の過程で現れる個体差、形質、選抜の判断に関わる要素を写真として記録した作品群です。",
  },
  "cultivated-fruit-compositions": {
    title: "栽培果実の構成",
    description:
      "複数の果実や植物を組み合わせ、品種、色、形、大きさの違いを一つの画面の中で見せるシリーズです。",
  },
  "portraits-single-variety": {
    title: "単一品種の肖像",
    description:
      "一つの品種や同系統の果実を主役にして、形や成熟の違いを静かに見せる作品群です。",
  },
  "portraits-composite-forms": {
    title: "複合的な果実の肖像",
    description:
      "複数の果実や形を組み合わせ、単体では見えにくい造形や品種間の違いを構成するシリーズです。",
  },
  "color-object-works": {
    title: "色彩と果実の作品",
    description:
      "果実の色、表面、質感を中心に構成した作品群。品種や成熟段階による色の違いを扱います。",
  },
  "monochrome-object-works": {
    title: "モノクローム作品",
    description:
      "色の情報を抑え、果実や植物の形、陰影、量感を中心に見せるモノクロームの作品群です。",
  },
  "improvisations-of-a-fruit-breeder": {
    title: "果樹育種家の即興",
    description:
      "栽培、交配、選抜の現場から生まれる偶然の形や組み合わせを、即興的に構成した作品群です。",
  },
};

export default function JapaneseWorksPage() {
  return (
    <main className="jaWorksPage">
      <style>{`
        .jaWorksPage {
          min-height: 100vh;
          background:
            radial-gradient(circle at 72% 14%, rgba(201, 168, 106, 0.08), transparent 28%),
            linear-gradient(180deg, #050504, #0b0a08 42%, #050504);
          color: rgb(239, 231, 216);
          padding: 96px 7vw 120px;
          font-family:
            "Hiragino Mincho ProN",
            "Yu Mincho",
            "YuMincho",
            "Noto Serif JP",
            serif;
        }

        .jaWorksWrap {
          max-width: 1120px;
          margin: 0 auto;
        }

        .jaWorksHeader {
          display: flex;
          justify-content: space-between;
          gap: 24px;
          align-items: center;
          margin-bottom: 96px;
          font-size: 12px;
          letter-spacing: 0.18em;
          color: rgba(239, 231, 216, 0.72);
        }

        .jaWorksHeader a {
          color: rgba(239, 231, 216, 0.72);
          text-decoration: none;
          margin-left: 22px;
        }

        .jaKicker {
          color: rgb(201, 168, 106);
          font-size: 12px;
          letter-spacing: 0.22em;
          margin-bottom: 24px;
        }

        .jaWorksTitle {
          max-width: 900px;
          font-size: clamp(44px, 7vw, 96px);
          line-height: 1.08;
          font-weight: 400;
          letter-spacing: -0.05em;
          margin: 0 0 34px;
        }

        .jaWorksLead {
          max-width: 760px;
          font-size: 16px;
          line-height: 2.05;
          color: rgba(239, 231, 216, 0.78);
          margin-bottom: 72px;
        }

        .jaWorksGrid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 24px;
        }

        .jaWorkCard {
          display: block;
          border: 1px solid rgba(239, 231, 216, 0.14);
          background: rgba(255, 255, 255, 0.02);
          color: rgb(239, 231, 216);
          text-decoration: none;
          transition: transform 0.2s ease, border-color 0.2s ease;
        }

        .jaWorkCard:hover {
          transform: translateY(-3px);
          border-color: rgba(201, 168, 106, 0.45);
        }

        .jaWorkImage {
          display: block;
          width: 100%;
          aspect-ratio: 4 / 3;
          object-fit: cover;
          background: #050504;
          filter: brightness(0.92) saturate(0.94);
        }

        .jaWorkBody {
          padding: 22px;
        }

        .jaWorkCode {
          color: rgb(201, 168, 106);
          font-size: 11px;
          letter-spacing: 0.18em;
          margin-bottom: 12px;
        }

        .jaWorkBody h2 {
          margin: 0 0 14px;
          font-size: clamp(22px, 2.2vw, 34px);
          line-height: 1.18;
          font-weight: 400;
          letter-spacing: -0.04em;
        }

        .jaWorkBody p {
          margin: 0;
          font-size: 13px;
          line-height: 1.9;
          color: rgba(239, 231, 216, 0.72);
        }

        .jaWorksNote {
          margin-top: 48px;
          padding-top: 32px;
          border-top: 1px solid rgba(239, 231, 216, 0.16);
          color: rgba(239, 231, 216, 0.7);
          font-size: 13px;
          line-height: 1.9;
        }

        @media (max-width: 980px) {
          .jaWorksGrid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 680px) {
          .jaWorksPage {
            padding: 72px 24px 90px;
          }

          .jaWorksHeader {
            flex-direction: column;
            align-items: flex-start;
            margin-bottom: 64px;
          }

          .jaWorksHeader a {
            margin-left: 0;
            margin-right: 16px;
          }

          .jaWorksGrid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="jaWorksWrap">
        <header className="jaWorksHeader">
          <div>MASUMI SHIOHARA</div>
          <nav>
            <a href="/ja">日本語トップ</a>
            <a href="/">English</a>
            <a href="/contact">Contact</a>
          </nav>
        </header>

        <section>
          <div className="jaKicker">作品一覧</div>
          <h1 className="jaWorksTitle">果実と植物をめぐる作品シリーズ。</h1>
          <p className="jaWorksLead">
            塩原真澄の作品は、果樹栽培、育種、生育過程、選抜、果実の形を基盤にしています。
            ここでは公開中の主な作品シリーズを日本語で整理しています。各項目を開くと、
            既存の作品詳細ページへ移動します。
          </p>
        </section>

        <section className="jaWorksGrid">
          {workSeries.map((series) => {
            const japanese = japaneseSeriesText[series.slug] ?? {
              title: series.title,
              description: series.statement,
            };

            const image = series.works[0]?.image;

            return (
              <a
                className="jaWorkCard"
                href={`/works/${series.slug}`}
                key={series.slug}
              >
                {image ? (
                  <img
                    className="jaWorkImage"
                    src={image}
                    alt={japanese.title}
                    loading="lazy"
                  />
                ) : null}

                <div className="jaWorkBody">
                  <div className="jaWorkCode">{series.code}</div>
                  <h2>{japanese.title}</h2>
                  <p>{japanese.description}</p>
                </div>
              </a>
            );
          })}
        </section>

        <p className="jaWorksNote">
          作品詳細ページは現在英語版を基準に表示しています。日本語の詳細解説は順次追加予定です。
        </p>
      </div>
    </main>
  );
}
