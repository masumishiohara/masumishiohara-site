import { notFound } from "next/navigation";
import { workSeries } from "../../work-series-data";

export function generateStaticParams() {
  return workSeries.map((series) => ({ slug: series.slug }));
}

export default function WorkSeriesPage({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const series = workSeries.find((item) => item.slug === params.slug);

  if (!series) {
    notFound();
  }

  const currentIndex = workSeries.findIndex((item) => item.slug === series.slug);
  const previousSeries =
    currentIndex > 0 ? workSeries[currentIndex - 1] : workSeries[workSeries.length - 1];
  const nextSeries =
    currentIndex < workSeries.length - 1 ? workSeries[currentIndex + 1] : workSeries[0];

  const heroWork = series.works[0];
  const otherWorks = series.works.slice(1);

  return (
    <main className="portfolioPage">
      <style>{`
        .portfolioPage{min-height:100vh;padding:150px 0 140px;overflow-x:hidden;background:radial-gradient(circle at 72% 14%,rgba(201,168,106,.032),transparent 28%),linear-gradient(180deg,#060504 0%,#020202 100%);color:rgba(239,231,216,.92)}
        .portfolioHero{width:min(1120px,84%);margin:0 auto 92px}
        .portfolioHero p:first-child{font-size:10px;letter-spacing:.28em;color:rgba(201,168,106,.64);margin-bottom:34px}
        .portfolioHero h1{max-width:980px;margin:0;font-family:"Times New Roman",serif;font-size:clamp(54px,6vw,112px);line-height:.98;letter-spacing:-.058em;font-weight:300;color:rgba(239,231,216,.94)}
        .portfolioHero p:last-child{margin-top:34px;max-width:640px;font-size:14px;line-height:2.05;color:rgba(239,231,216,.52)}
        .featured{width:min(1120px,84%);margin:0 auto 130px;display:grid;grid-template-columns:minmax(0,.68fr) minmax(300px,.32fr);gap:64px;align-items:end}
        .featuredImage{width:100%;max-width:760px;margin:0 auto;background:rgba(255,255,255,.01);border:1px solid rgba(201,168,106,.08);overflow:hidden}
        .featuredImage img{display:block;width:100%;height:auto;max-height:72vh;object-fit:contain;object-position:center;background:#050403;filter:brightness(.91) saturate(.94) contrast(1.02)}
        .featuredText{max-width:420px}
        .featuredText p{font-size:10px;letter-spacing:.22em;color:rgba(201,168,106,.62)}
        .featuredText h2{margin-top:14px;font-family:"Times New Roman",serif;font-size:clamp(34px,3.2vw,62px);line-height:1.02;letter-spacing:-.052em;font-weight:300;color:rgba(239,231,216,.88)}
        .featuredText span{display:block;margin-top:18px;font-size:13px;line-height:2;color:rgba(239,231,216,.5)}
        .featuredText small{display:block;margin-top:22px;font-size:11px;letter-spacing:.14em;color:rgba(201,168,106,.48)}
        .overview{width:min(1120px,84%);margin:0 auto 90px;padding-top:70px;border-top:1px solid rgba(201,168,106,.08)}
        .overviewHead{display:flex;align-items:end;justify-content:space-between;gap:40px;margin-bottom:34px}
        .overviewHead p{font-size:10px;letter-spacing:.28em;color:rgba(201,168,106,.62)}
        .overviewHead h2{max-width:560px;font-family:"Times New Roman",serif;font-size:clamp(28px,3vw,52px);line-height:1.06;letter-spacing:-.05em;font-weight:300;color:rgba(239,231,216,.8)}
        .thumbGrid{display:grid;grid-template-columns:repeat(8,1fr);gap:10px}
        .thumb{position:relative;display:block;overflow:hidden;text-decoration:none;border:1px solid rgba(201,168,106,.08);background:#050403}
        .thumb img{display:block;width:100%;aspect-ratio:1/1;object-fit:cover;filter:brightness(.82) saturate(.88) contrast(1.02)}
        .thumb span{position:absolute;left:6px;bottom:6px;font-size:8px;letter-spacing:.12em;color:rgba(239,231,216,.7);background:rgba(0,0,0,.36);padding:3px 5px}
        .workGrid{width:min(1120px,84%);margin:0 auto 170px;display:grid;grid-template-columns:repeat(3,1fr);gap:90px 42px}
        .workCard img{display:block;width:100%;height:auto;max-height:520px;object-fit:contain;object-position:center;background:#050403;border:1px solid rgba(201,168,106,.08);filter:brightness(.91) saturate(.94) contrast(1.02)}
        .workCard div{margin-top:22px}
        .workCard p{font-size:10px;letter-spacing:.2em;color:rgba(201,168,106,.56)}
        .workCard h2{margin-top:10px;font-family:"Times New Roman",serif;font-size:clamp(26px,2.4vw,44px);line-height:1.02;letter-spacing:-.05em;font-weight:300;color:rgba(239,231,216,.86)}
        .workCard span{display:block;margin-top:14px;font-size:12px;line-height:1.9;color:rgba(239,231,216,.48)}
        .seriesNav{width:min(1120px,84%);margin:0 auto 160px;padding-top:42px;border-top:1px solid rgba(201,168,106,.08);display:grid;grid-template-columns:1fr 1fr 1fr;gap:28px}
        .seriesNav a{text-decoration:none;color:rgba(239,231,216,.68);font-family:"Times New Roman",serif;font-size:clamp(24px,2.4vw,42px);line-height:1.05;letter-spacing:-.045em;transition:color 1.2s ease,opacity 1.2s ease}
        .seriesNav a:hover{color:rgba(201,168,106,.84)}
        .seriesNav span{display:block;margin-bottom:12px;font-size:10px;letter-spacing:.24em;color:rgba(201,168,106,.56)}
        @media(max-width:1000px){.featured{grid-template-columns:1fr;gap:36px}.featuredText{max-width:680px}.thumbGrid{grid-template-columns:repeat(6,1fr)}.workGrid{grid-template-columns:repeat(2,1fr)}}
        @media(max-width:700px){.portfolioPage{padding-top:118px}.portfolioHero,.featured,.overview,.workGrid,.seriesNav{width:calc(100% - 40px)}.portfolioHero h1{font-size:clamp(46px,13vw,82px)}.featuredImage img{max-height:62vh}.overviewHead{display:block}.overviewHead h2{margin-top:16px}.thumbGrid{grid-template-columns:repeat(4,1fr);gap:8px}.workGrid{grid-template-columns:repeat(2,1fr);gap:46px 16px;margin-bottom:110px}.workCard img{max-height:none;aspect-ratio:4/5;object-fit:contain}.workCard div{margin-top:14px}.workCard p{font-size:9px}.workCard h2{font-size:clamp(20px,6vw,32px)}.workCard span{display:none}.seriesNav{grid-template-columns:1fr;gap:34px}}
      `}</style>

      <section className="portfolioHero">
        <p>WORKS / MASUMI SHIOHARA</p>
        <h1>{series.title}</h1>
        <p>{series.statement}</p>
      </section>

      <section className="featured">
        <div className="featuredImage">
          <img src={heroWork.image} alt={heroWork.title} />
        </div>
        <div className="featuredText">
          <p>{series.code}</p>
          <h2>{heroWork.title}</h2>
          <span>{heroWork.statement}</span>
          <small>{series.jp}</small>
        </div>
      </section>

      <section className="overview">
        <div className="overviewHead">
          <p>SERIES INDEX</p>
          <h2>{series.works.length} works in this series.</h2>
        </div>
        <div className="thumbGrid">
          {series.works.map((work) => (
            <a href={`#work-${work.id.toLowerCase()}`} key={work.id} className="thumb">
              <img src={work.image} alt={work.title} loading="lazy" />
              <span>{work.id}</span>
            </a>
          ))}
        </div>
      </section>

      <section className="workGrid">
        {otherWorks.map((work) => (
          <article className="workCard" key={work.id} id={`work-${work.id.toLowerCase()}`}>
            <img src={work.image} alt={work.title} loading="lazy" />
            <div>
              <p>{work.id}</p>
              <h2>{work.title}</h2>
              <span>{work.statement}</span>
            </div>
          </article>
        ))}
      </section>

      <section className="seriesNav">
        <a href={`/works/${previousSeries.slug}`}>
          <span>PREVIOUS</span>
          {previousSeries.title}
        </a>
        <a href="/projects/botanical-portraits">
          <span>INDEX</span>
          Works
        </a>
        <a href={`/works/${nextSeries.slug}`}>
          <span>NEXT</span>
          {nextSeries.title}
        </a>
      </section>
    </main>
  );
}
