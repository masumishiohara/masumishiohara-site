import { workSeries } from "../../work-series-data";

export default function WorksPage() {
  return (
    <main className="worksIndexPage">
      <style>{`
        .worksIndexPage{min-height:100vh;padding:150px 0 140px;background:radial-gradient(circle at 72% 14%,rgba(201,168,106,.035),transparent 28%),linear-gradient(180deg,#060504 0%,#020202 100%);color:rgba(239,231,216,.92)}
        .worksIndexHero{width:min(1120px,84%);margin:0 auto 92px}
        .worksIndexHero p{font-size:10px;letter-spacing:.28em;color:rgba(201,168,106,.64);margin-bottom:34px}
        .worksIndexHero h1{max-width:980px;margin:0;font-family:"Times New Roman",serif;font-size:clamp(54px,6vw,112px);line-height:.98;letter-spacing:-.058em;font-weight:300;color:rgba(239,231,216,.94)}
        .worksIndexHero span{display:block;margin-top:34px;max-width:680px;font-size:14px;line-height:2.05;color:rgba(239,231,216,.52)}
        .seriesGrid{width:min(1180px,84%);margin:0 auto 160px;display:grid;grid-template-columns:repeat(3,1fr);gap:42px}
        .seriesCard a{display:block;text-decoration:none;color:inherit;border:1px solid rgba(201,168,106,.08);background:rgba(255,255,255,.012);overflow:hidden}
        .seriesImage img{display:block;width:100%;aspect-ratio:4/3;object-fit:cover;background:#050403;filter:brightness(.86) saturate(.92) contrast(1.02)}
        .seriesMeta{padding:24px}
        .seriesMeta span{display:block;font-size:10px;letter-spacing:.22em;color:rgba(201,168,106,.62)}
        .seriesMeta h2{margin:14px 0 0;font-family:"Times New Roman",serif;font-size:clamp(28px,2.6vw,48px);line-height:1.02;letter-spacing:-.05em;font-weight:300;color:rgba(239,231,216,.88)}
        .seriesJp{margin-top:10px!important;font-size:12px!important;color:rgba(201,168,106,.55)!important}
        .seriesMeta p{margin-top:14px;font-size:12px;line-height:1.9;color:rgba(239,231,216,.48)}
        @media(max-width:1000px){.seriesGrid{grid-template-columns:repeat(2,1fr)}}
        @media(max-width:700px){.worksIndexPage{padding-top:118px}.worksIndexHero,.seriesGrid{width:calc(100% - 40px)}.worksIndexHero h1{font-size:clamp(46px,13vw,82px)}.seriesGrid{grid-template-columns:1fr;gap:34px}}
      `}</style>

      <section className="worksIndexHero">
        <p>WORKS / MASUMI SHIOHARA</p>
        <h1>
          Masumi
          <br />
          Shiohara Works
        </h1>
        <span>
          Twelve bodies of work formed through cultivation, breeding, orchard
          time, photography, object making, and fruit as artistic material.
        </span>
      </section>

      <section className="seriesGrid">
        {workSeries.map((series) => (
          <article className="seriesCard" key={series.slug}>
            <a href={`/works/${series.slug}`}>
              <div className="seriesImage">
                <img src={series.heroImage} alt={series.title} />
              </div>
              <div className="seriesMeta">
                <span>{series.code}</span>
                <h2>{series.title}</h2>
                <p className="seriesJp">{series.jp}</p>
                <p>{series.statement}</p>
              </div>
            </a>
          </article>
        ))}
      </section>
    </main>
  );
}
