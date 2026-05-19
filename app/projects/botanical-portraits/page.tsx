"use client";

import { useState } from "react";

type FrameStyle =
  | "modern"
  | "antique"
  | "elegant";

type Aspect =
  | "portrait"
  | "square"
  | "landscape";

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
  const [frameStyle, setFrameStyle] =
    useState<FrameStyle>("modern");

  return (
    <main className="museumProjectPage">
      <section className="museumProjectHero">
        <div className="museumCollectionHeader">

  <p className="museumEyebrow">
    ROOM II
  </p>

  <span className="museumCollectionCode">
    MBA-BP
  </span>

</div>

        <h1>
          Botanical Portraits
        </h1>

        <p className="museumProjectLead">
          Cultivated fruit presented
          as botanical portrait,
          specimen, and archival form.
        </p>
      </section>

      <section className="frameControlPanel">
        <div className="frameControlInner">
          <p>
            FRAME STUDY
          </p>

          <div className="frameButtons">
            {(
              [
                "modern",
                "antique",
                "elegant",
              ] as FrameStyle[]
            ).map((style) => (
              <button
                key={style}
                onClick={() =>
                  setFrameStyle(style)
                }
                className={
                  frameStyle === style
                    ? "active"
                    : ""
                }
              >
                {style.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="museumArtworkGrid">
        {works.map((work) => (
          <article
            className="museumArtworkCard"
            key={work.id}
          >
            <div
              className={`realFrame ${frameStyle} ${work.aspect}`}
            >
              <div className="realMat">
                <div className="realInnerMat">
                  <div className="realWindow">
                    <img
                      src={work.image}
                      alt={work.title}
                    />
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
              <p className="museumLatin">
                {work.latin}
              </p>

              <h2>
                {work.title}
              </h2>

              <span className="museumMedium">
                {work.medium}
              </span>

              <div className="museumWallLabel">
                {work.id}
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="museumNextRoom">
        <p>
          NEXT ROOM
        </p>

        <a href="/projects/portrait-of-fruits">
          Portrait of Fruits
        </a>
      </section>
    </main>
  );
}
