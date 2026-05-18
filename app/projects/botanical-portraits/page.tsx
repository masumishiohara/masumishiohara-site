"use client";

import { useState } from "react";

type FrameStyle =
  | "modern"
  | "antique"
  | "elegant";

type Artwork = {
  image: string;
  title: string;
  latin: string;
  medium: string;
  aspect: "portrait" | "square" | "landscape";
};

export default function BotanicalPortraitsPage() {
  const [frameStyle, setFrameStyle] =
    useState<FrameStyle>("modern");

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

  return (
    <main className="museumProjectPage">
      <section className="museumProjectHero">
        <p className="museumEyebrow">
          ROOM II
        </p>

        <h1>
          Botanical Portraits
        </h1>

        <p className="museumProjectLead">
          Cultivated fruit presented as
          botanical portrait, specimen,
          and archival form.
        </p>
      </section>

      <section className="frameControlPanel">
        <div className="frameControlInner">
          <p>
            FRAME STUDY
          </p>

          <div className="frameButtons">
            <button
              onClick={() =>
                setFrameStyle("modern")
              }
              className={
                frameStyle === "modern"
                  ? "active"
                  : ""
              }
            >
              Modern
            </button>

            <button
              onClick={() =>
                setFrameStyle("antique")
              }
              className={
                frameStyle === "antique"
                  ? "active"
                  : ""
              }
            >
              Antique
            </button>

            <button
              onClick={() =>
                setFrameStyle("elegant")
              }
              className={
                frameStyle === "elegant"
                  ? "active"
                  : ""
              }
            >
              Elegant
            </button>
          </div>
        </div>
      </section>

      <section className="museumArtworkGrid">
        {works.map((work) => (
          <article
            key={work.title}
            className="museumArtworkCard"
          >
            <div
              className={`
                museumFrameShell
                ${frameStyle}
                ${work.aspect}
              `}
            >
              <div className="museumOuterFrame">
                <div className="museumInnerFrame">
                  <div className="museumTopMat">
                    <div className="museumBottomMat">
                      <div className="museumArtworkWindow">
                        <img
                          src={work.image}
                          alt={work.title}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="museumPlate">
                    <span>
                      {work.latin}
                    </span>
                  </div>
                </div>
              </div>
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
                Collection of Maison
                Botanique Archive
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
