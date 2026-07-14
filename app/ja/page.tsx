export default function JapaneseHomePage() {
  return (
    <main className="jaPage">
      <style>{`
        .jaPage {
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

        .jaWrap {
          max-width: 1120px;
          margin: 0 auto;
        }

        .jaHeader {
          display: flex;
          justify-content: space-between;
          gap: 24px;
          align-items: center;
          margin-bottom: 120px;
          font-size: 12px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(239, 231, 216, 0.72);
        }

        .jaHeader a {
          color: rgba(239, 231, 216, 0.72);
          text-decoration: none;
          margin-left: 22px;
        }

        .jaKicker {
          color: rgb(201, 168, 106);
          font-size: 12px;
          letter-spacing: 0.22em;
          margin-bottom: 28px;
        }

        .jaTitle {
          max-width: 900px;
          font-size: clamp(44px, 8vw, 112px);
          line-height: 1.05;
          font-weight: 400;
          letter-spacing: -0.05em;
          margin: 0 0 36px;
        }

        .jaLead {
          max-width: 760px;
          font-size: clamp(16px, 1.7vw, 21px);
          line-height: 2.1;
          color: rgba(239, 231, 216, 0.84);
          margin-bottom: 56px;
        }

        .jaButtons {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-bottom: 120px;
        }

        .jaButtons a {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 42px;
          padding: 0 22px;
          border: 1px solid rgba(239, 231, 216, 0.24);
          border-radius: 999px;
          color: rgb(239, 231, 216);
          text-decoration: none;
          font-size: 12px;
          letter-spacing: 0.12em;
        }

        .jaSection {
          border-top: 1px solid rgba(239, 231, 216, 0.16);
          padding-top: 48px;
          margin-top: 48px;
          display: grid;
          grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
          gap: 64px;
        }

        .jaSection h2 {
          margin: 0;
          font-size: clamp(28px, 4vw, 56px);
          line-height: 1.15;
          font-weight: 400;
          letter-spacing: -0.04em;
        }

        .jaSection p {
          margin: 0 0 22px;
          color: rgba(239, 231, 216, 0.78);
          font-size: 15px;
          line-height: 2.05;
        }

        .jaList {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 16px;
          margin-top: 28px;
        }

        .jaCard {
          border: 1px solid rgba(239, 231, 216, 0.14);
          padding: 22px;
          background: rgba(255, 255, 255, 0.02);
        }

        .jaCard strong {
          display: block;
          font-weight: 400;
          color: rgb(239, 231, 216);
          margin-bottom: 10px;
          font-size: 17px;
        }

        .jaCard span {
          color: rgba(239, 231, 216, 0.68);
          font-size: 13px;
          line-height: 1.8;
        }

        .jaContact {
          margin-top: 90px;
          padding-top: 48px;
          border-top: 1px solid rgba(239, 231, 216, 0.16);
        }

        .jaContact h2 {
          margin: 0 0 24px;
          font-size: clamp(34px, 5vw, 72px);
          line-height: 1.12;
          font-weight: 400;
          letter-spacing: -0.05em;
        }

        .jaContact a {
          color: rgb(201, 168, 106);
          text-decoration: none;
        }

        @media (max-width: 760px) {
          .jaPage {
            padding: 72px 24px 90px;
          }

          .jaHeader {
            align-items: flex-start;
            flex-direction: column;
            margin-bottom: 72px;
          }

          .jaHeader a {
            margin-left: 0;
            margin-right: 16px;
          }

          .jaSection {
            grid-template-columns: 1fr;
            gap: 28px;
          }

          .jaList {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="jaWrap">
        <header className="jaHeader">
          <div>MASUMI SHIOHARA</div>
          <nav>
            <a href="/">English</a>
            <a href="/works">Works</a>
            <a href="/contact">Contact</a>
          </nav>
        </header>

        <section>
          <div className="jaKicker">日本語ページ</div>
          <h1 className="jaTitle">
            栽培の現場から生まれる、果実と植物の写真作品。
          </h1>
          <p className="jaLead">
            塩原真澄は、果樹栽培と育種に携わりながら、自園で育てた果実や植物を撮影している写真家です。
            果実の形、生育過程、選抜から外れた個体、栽培の中で生まれる偶然の造形を、
            農業の現場に近い視点から記録しています。
          </p>

          <div className="jaButtons">
            <a href="/works">作品を見る</a>
            <a href="/about">プロフィール</a>
            <a href="/exhibitions">展示・掲載</a>
            <a href="/contact">問い合わせ</a>
          </div>
        </section>

        <section className="jaSection">
          <h2>農家、育種家、写真家として。</h2>
          <div>
            <p>
              日中は果樹園で作業を行い、夜や冬の時間を使って撮影と編集を続けています。
              被写体の多くは、自ら栽培した果実や、育種の過程で生まれた個体です。
            </p>
            <p>
              完成した品種だけでなく、市場に出る前に選抜から外れる果実、栽培の途中で変化する形、
              人の管理と植物の成長が交差する場面も、重要な記録として扱っています。
            </p>
          </div>
        </section>

        <section className="jaSection">
          <h2>主な作品領域</h2>
          <div className="jaList">
            <div className="jaCard">
              <strong>果実の肖像</strong>
              <span>黒背景や白背景で、果実と植物の形を静かに見せる作品群。</span>
            </div>
            <div className="jaCard">
              <strong>生育過程</strong>
              <span>開花、結実、肥大、成熟までの時間を記録するシリーズ。</span>
            </div>
            <div className="jaCard">
              <strong>選抜淘汰</strong>
              <span>育種の過程で市場に出ない個体を、一つの存在として撮影する作品群。</span>
            </div>
            <div className="jaCard">
              <strong>自家育種</strong>
              <span>交配、実生、選抜を通して生まれた果実の形と記録。</span>
            </div>
          </div>
        </section>

        <section className="jaContact">
          <h2>展示、出版、取材、画像使用について。</h2>
          <p className="jaLead">
            作品、展示、出版、取材、画像使用、その他の問い合わせは下記メールアドレスよりご連絡ください。
          </p>
          <p>
            <a href="mailto:contact@masumishiohara.com">
              contact@masumishiohara.com
            </a>
          </p>
        </section>
      </div>
    </main>
  );
}
