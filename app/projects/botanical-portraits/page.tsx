import { workSeries } from "../../work-series-data";

export default function WorksPage() {
  return (
    <main className="worksIndexV2">
      <style>{`
        .worksIndexV2{min-height:100vh;padding:150px 0 140px;background:radial-gradient(circle at 72% 14%,rgba(201,168,106,.032),transparent 28%),linear-gradient(180deg,#060504 0%,#020202 100%);color:rgba(239,231,216,.92)}
        .worksIndexHeroV2,.worksSeriesGridV2,.worksIndexFooterV2{width:min(1120px,84%);margin-left:auto;margin-right:auto}.worksIndexHeroV2{margin-bottom:92px}.worksIndexHeroV2 .eyebrow{font-size:10px;letter-spacing:.28em;color:rgba(201,168,106,.64);margin-bottom:34px}.worksIndexHeroV2 h1{margin:0;font-family:"Times New Roman",serif;font-size:clamp(54px,6vw,112px);line-height:.98;letter-spacing:-.058em;font-weight:300;color:rgba(239,231,216,.94)}.worksIndexHeroV2 p:last-child{margin-top:34px;max-width:640px;font-size:14px;line-height:2.05;color:rgba(239,231,216,.52)}
        .worksSeriesGridV2{display:grid;grid-template-columns:repeat(3,1fr);gap:64px 34px;margin-bottom:150px}.worksSeriesCardV2{display:block;color:inherit;text-decoration:none;border:1px solid rgba(201,168,106,.08);background:rgba(255,255,255,.01);overflow:hidden}.worksSeriesCardV2 img{display:block;width:100%;aspect-ratio:4/3;object-fit:cover;background:#050403;filter:brightness(.86) saturate(.9) contrast(1.02)}.worksSeriesCardTextV2{padding:24px}.worksSeriesCardTextV2 span{font-size:10px;letter-spacing:.22em;color:rgba(201,168,106,.62)}.worksSeriesCardTextV2 h2{margin:14px 0 0;font-family:"Times New Roman",serif;font-size:clamp(28px,2.5vw,48px);line-height:1.02;letter-spacing:-.052em;font-weight:300;color:rgba(239,231,216,.88)}.worksSeriesCardTextV2 p{margin-top:14px;font-size:12px;line-height:1.9;color:rgba(239,231,216,.48)}
        .worksIndexFooterV2{padding-top:42px;border-top:1px solid rgba(201,168,106,.08)}.worksIndexFooterV2 a{color:rgba(201,168,106,.72);text-decoration:none;font-size:10px;letter-spacing:.22em}@media(max-width:900px){.worksSeriesGridV2{grid-template-columns:repeat(2,1fr)}}@media(max-width:700px){.worksIndexV2{padding-top:118px}.worksIndexHeroV2,.worksSeriesGridV2,.worksIndexFooterV2{width:calc(100% - 40px)}.worksSeriesGridV2{grid-template-columns:1fr 1fr;gap:28px 14px}.worksSeriesCardTextV2{padding:16px}.worksSeriesCardTextV2 h2{font-size:clamp(22px,6vw,34px)}.worksSeriesCardTextV2 p{display:none}}
      `}</style>

      <section className="worksIndexHeroV2">
        <p className="eyebrow">WORKS</p>
        <h1>Masumi<br />Shiohara Works</h1>
        <p>Twelve bodies of work formed through cultivation, breeding, orchard time, photography, object making, and fruit as artistic material.</p>
      </section>

      <section className="worksSeriesGridV2">
        {workSeries.map((series) => (
          <a className="worksSeriesCardV2" href={`/works/${series.slug}`} key={series.slug}>
            <img src={series.heroImage} alt={series.title} />
            <div className="worksSeriesCardTextV2">
              <span>{series.code}</span>
              <h2>{series.title}</h2>
              <p>{series.statement}</p>
            </div>
          </a>
        ))}
      </section>

      <section className="worksIndexFooterV2">
        <a href="/about">ABOUT MASUMI SHIOHARA</a>
      </section>
    </main>
  );
}
