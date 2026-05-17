"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { projects } from "../../project-data";

type FrameStyle = "elegant" | "modern" | "antique";
type MatMode = "single" | "double";
type GrooveMode = "none" | "single" | "double";

const botanicalWorks = [
  ["01", "Vitis vinifera", "Kerner", "White wine grape cultivar presented as a botanical specimen."],
  ["02", "Pyrus communis", "European Pear", "Fruit, flower, leaf, and stem arranged as cultivated form."],
  ["03", "Prunus persica", "Garden Peach", "Stone fruit with foliage and flowering branch."],
  ["04", "Vitis vinifera", "Chardonnay", "Classic white wine grape with characteristic foliage."],
  ["05", "Malus domestica", "Apple Study", "Cultivated apple form documented as botanical archive."],
  ["06", "Vitis vinifera", "Muscat Form", "Grape composition shaped by seasonal cultivation."],
  ["07", "Prunus domestica", "Plum Structure", "Botanical arrangement focused on fruit and branch balance."],
  ["08", "Pyrus pyrifolia", "Asian Pear", "Japanese pear specimen presented in museum framing."],
  ["09", "Vitis vinifera", "Botanical Grape", "Cultivated grape form preserved as photographic specimen."],
  ["10", "Prunus armeniaca", "Apricot Study", "Stone fruit, leaf, and flowering elements arranged for record."],
  ["11", "Vitis vinifera", "Vine Form", "A grape cultivar studied through fruit, leaf, and structure."],
  ["12", "Pyrus communis", "Pear Form", "Cultivated pear presented as a quiet botanical object."],
  ["13", "Malus domestica", "Apple Branch", "Fruit and foliage arranged as an archival botanical portrait."],
  ["14", "Prunus domestica", "Plum Study", "Fruit, leaf, and seasonal growth recorded as cultivated form."],
  ["15", "Vitis vinifera", "Grape Study", "Botanical grape form photographed with archival restraint."],
  ["16", "Pyrus communis", "Pear Specimen", "A cultivated pear study arranged with botanical clarity."],
  ["17", "Prunus persica", "Peach Form", "A stone fruit study shaped by season, light, and care."],
  ["18", "Vitis vinifera", "Vine Archive", "Grape, leaf, and stem preserved as cultivated memory."],
  ["19", "Malus domestica", "Apple Specimen", "Cultivated fruit arranged as a formal botanical portrait."],
  ["20", "Pyrus pyrifolia", "Pear Archive", "Fruit and foliage documented as a botanical archive object."],
  ["21", "Vitis vinifera", "Cultivated Vine", "A grape form preserved through photographic presentation."],
  ["22", "Botanical Specimen", "Cultivated Form", "A botanical work preserved as photographic archive."],
].map(([id, latin, title, caption]) => ({
  id,
  latin,
  title,
  caption,
  image: `/images/botanical-portraits/${id}.jpg`,
}));

export default function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedWork, setSelectedWork] = useState(botanicalWorks[0]);
  const [frameStyle, setFrameStyle] = useState<FrameStyle>("elegant");
  const [matMode, setMatMode] = useState<MatMode>("double");
  const [grooveMode, setGrooveMode] = useState<GrooveMode>("double");
  const [topMat, setTopMat] = useState("#eee8d8");
  const [bottomMat, setBottomMat] = useState("#101827");

  const project = projects.find((item) => item.slug === params.slug);

  const frameClass = useMemo(
    () =>
      `frame-${frameStyle} mat-${matMode} groove-${grooveMode}`,
    [frameStyle, matMode, grooveMode]
  );

  if (!project) {
    return <main>Project not found.</main>;
  }

  return (
    <main
      className="projectLuxuryPage"
      style={
        {
          "--top-mat": topMat,
          "--bottom-mat": bottomMat,
        } as React.CSSProperties
      }
    >
      <section className="projectHero">
        <div className="projectHeroGrid">
          <div className="projectHeroCopy">
            <Link href="/" className="backLink">
              ← MASUMI SHIOHARA
            </Link>

            <p className="smallLabel">BOTANICAL ARCHIVE</p>
            <h1>{project.title}</h1>
            <p className="projectLead">{project.subtitle}</p>
            <div className="projectBody">{project.body}</div>
          </div>

          <div className="projectHeroImageFrame">
            <div className="rembrandtLight" />
            <div className="heroGoldMist" />
            <div className="heroGreenMist" />
            <img src={project.image} alt={project.title} />
          </div>
        </div>
      </section>

      <section className="collectionGallery maisonGallery">
        <div className="collectionIntro">
          <div>
            <p className="smallLabel">COLLECTION WORKS</p>
            <h2>Botanical Portraits 01–22</h2>
          </div>

          <p className="galleryStatement">
            A private botanical archive of cultivated forms, arranged as framed
            specimens under warm museum light.
          </p>
        </div>

        <div className="maisonLayout">
          <div className="maisonGrid">
            {botanicalWorks.map((work) => (
              <article className="maisonWork" key={work.id}>
                <button
                  className={`maisonCard ${frameClass}`}
                  onClick={() => setSelectedImage(work.image)}
                  aria-label={`Open ${work.title}`}
                >
                  <div className="maisonSpotlight" />

                  <div className="maisonOuterFrame">
                    <div className="maisonWoodGrain" />

                    <div className="maisonShadowBox">
                      <div className="maisonBottomMat">
                        <div className="maisonTopMat">
                          <div className="maisonVGroove" />

                          <div className="maisonPrintWindow">
                            <img src={work.image} alt={work.title} />
                          </div>

                          <div className="maisonPlate">
                            <span>
                              {work.title} / {work.latin}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </button>

                <div className="maisonMeta">
                  <span>{work.id}</span>
                  <p className="maisonLatin">{work.latin}</p>
                  <h3>{work.title}</h3>
                  <p>{work.caption}</p>

                  <button
                    className="designButton"
                    onClick={() => setSelectedWork(work)}
                  >
                    Design Frame
                  </button>
                </div>
              </article>
            ))}
          </div>

          <aside className="frameControlPanel">
            <p className="smallLabel">FRAME CONTROL</p>

            <div className={`controlPreview framedPreview ${frameClass}`}>
  <div className="previewFrame">
    <div className="previewBottomMat">
      <div className="previewTopMat">
        <div className="previewGroove" />
        <img src={selectedWork.image} alt={selectedWork.title} />
        <div className="previewPlate" />
      </div>
    </div>
  </div>

  <div>
    <strong>{selectedWork.title}</strong>
    <span>{selectedWork.latin}</span>
  </div>
</div>

            <div className="controlGroup">
              <h4>Frame Style</h4>
              <button onClick={() => setFrameStyle("elegant")}>Elegant</button>
              <button onClick={() => setFrameStyle("modern")}>Modern</button>
              <button onClick={() => setFrameStyle("antique")}>Antique</button>
            </div>

            <div className="controlGroup">
              <h4>Mat Structure</h4>
              <button onClick={() => setMatMode("single")}>Single</button>
              <button onClick={() => setMatMode("double")}>Double</button>
            </div>

            <div className="controlGroup">
              <h4>V-Groove</h4>
              <button onClick={() => setGrooveMode("none")}>None</button>
              <button onClick={() => setGrooveMode("single")}>Single</button>
              <button onClick={() => setGrooveMode("double")}>Double</button>
            </div>

            <div className="controlGroup">
              <h4>Top Mat Color</h4>
              <input
                type="color"
                value={topMat}
                onChange={(e) => setTopMat(e.target.value)}
              />
            </div>

            <div className="controlGroup">
              <h4>Bottom Mat Color</h4>
              <input
                type="color"
                value={bottomMat}
                onChange={(e) => setBottomMat(e.target.value)}
              />
            </div>
          </aside>
        </div>
      </section>

      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <button className="modalClose">×</button>
          <img src={selectedImage} alt="" />
        </div>
      )}
    </main>
  );
}
