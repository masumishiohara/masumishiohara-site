"use client";

import { useState } from "react";

type FrameStyle = "modern" | "antique" | "elegant";
type Aspect = "portrait" | "square" | "landscape";

const works = [
  {
    id: "MBA-BP-0001",
    image: "/botanical.jpg",
    title: "Botanical Study I",
    latin: "Pyrus communis",
    medium: "Archival pigment print",
    aspect: "portrait" as Aspect,
  },

  {
    id: "MBA-BP-0002",
    image: "/vellum.jpg",
    title: "Botanical Study II",
    latin: "Prunus persica",
    medium: "Archival pigment print",
    aspect: "portrait" as Aspect,
  },

  {
    id: "MBA-BP-0003",
    image: "/hero.jpg",
    title: "Cultivated Form",
    latin: "Vitis vinifera",
    medium: "Archival pigment print",
    aspect: "landscape" as Aspect,
  },

  {
    id: "MBA-BP-0004",
    image: "/sculptural.jpg",
    title: "Object Form",
    latin: "Malus domestica",
    medium: "Canvas print object",
    aspect: "square" as Aspect,
  },
];
export default function BotanicalPortraitsPage() {
  const [frameStyle, setFrameStyle] = useState<FrameStyle>("modern");

  return (
    <main className="museumProjectPage">
      <section className="museumProjectHero">
        <p className="museumEyebrow">ROOM II</p>
        <h1>Botanical Portraits</h1>
        <p className="museumProjectLead">
          Cultivated fruit presented as botanical portrait, specimen, and archival form.
        </p>
      </section>

      <section className="frameControlPanel">
        <div className="frameControlInner">
          <p>FRAME STUDY</p>
          <div className="frameButtons">
            {(["modern", "antique", "elegant"] as FrameStyle[]).map((style) => (
              <button
                key={style}
                onClick={() => setFrameStyle(style)}
                className={frameStyle === style ? "active" : ""}
              >
                {style.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="museumArtworkGrid">
        {works.map((work) => (
          <article className="museumArtworkCard" key={work.title}>
            <div className={`realFrame ${frameStyle} ${work.aspect}`}>
              <img className="realCorner tl" src={`/frame-assets/${frameStyle}/corner-tl.png`} alt="" />
              <img className="realCorner tr" src={`/frame-assets/${frameStyle}/corner-tl.png`} alt="" />
              <img className="realCorner bl" src={`/frame-assets/${frameStyle}/corner-tl.png`} alt="" />
              <img className="realCorner br" src={`/frame-assets/${frameStyle}/corner-tl.png`} alt="" />

              <img className="realEdge top" src={`/frame-assets/${frameStyle}/edge-horizontal.png`} alt="" />
              <img className="realEdge bottom" src={`/frame-assets/${frameStyle}/edge-horizontal.png`} alt="" />
              <img className="realEdge left" src={`/frame-assets/${frameStyle}/edge-vertical.png`} alt="" />
              <img className="realEdge right" src={`/frame-assets/${frameStyle}/edge-vertical.png`} alt="" />

              <div className="realMat">
                <div className="realInnerMat">
                  <div className="realWindow">
                    <img src={work.image} alt={work.title} />
                  </div>
                </div>
              </div>

              <img
                className="realPlate"
                src={`/frame-assets/${frameStyle}/plate.png`}
                alt=""
              />
            </div>

            <div className="museumArtworkMeta">
              <p className="museumLatin">{work.latin}</p>
              <h2>{work.title}</h2>
              <span className="museumMedium">{work.medium}</span>
              <div className="museumWallLabel">
                Collection of Maison Botanique Archive
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="museumNextRoom">
        <p>NEXT ROOM</p>
        <a href="/projects/portrait-of-fruits">Portrait of Fruits</a>
      </section>
    </main>
  );
}
