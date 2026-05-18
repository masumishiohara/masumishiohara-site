"use client";

import { useState } from "react";

type FrameStyle = "modern" | "antique" | "elegant";
type Aspect = "portrait" | "square" | "landscape";

type Artwork = {
  image: string;
  title: string;
  latin: string;
  medium: string;
  aspect: Aspect;
};

const works: Artwork[] = [
  {
    image: "/botanical.jpg",
    title: "Botanical Study I",
    latin: "Pyrus communis",
    medium: "Archival pigment print",
    aspect: "portrait",
  },
  {
    image: "/vellum.jpg",
    title: "Botanical Study II",
    latin: "Prunus persica",
    medium: "Archival pigment print",
    aspect: "portrait",
  },
  {
    image: "/hero.jpg",
    title: "Cultivated Form",
    latin: "Vitis vinifera",
    medium: "Archival pigment print",
    aspect: "landscape",
  },
  {
    image: "/sculptural.jpg",
    title: "Object Form",
    latin: "Malus domestica",
    medium: "Canvas print object",
    aspect: "square",
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
            <div className={`assetFrame ${frameStyle} ${work.aspect}`}>
              <div className="frameCorner tl" />
              <div className="frameCorner tr" />
              <div className="frameCorner bl" />
              <div className="frameCorner br" />

              <div className="frameEdge top" />
              <div className="frameEdge bottom" />
              <div className="frameEdge left" />
              <div className="frameEdge right" />

              <div className="frameMat">
                <div className="frameInnerMat">
                  <div className="frameWindow">
                    <img src={work.image} alt={work.title} />
                  </div>
                </div>
              </div>

              <div className="framePlate">
                <span>{work.latin}</span>
              </div>
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
