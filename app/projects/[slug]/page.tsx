"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { projects } from "../../project-data";

type FrameStyle = "modern" | "antique" | "elegant";
type MatMode = "single" | "double";
type GrooveMode = "none" | "single" | "double";
type LightingMode = "museum" | "evening" | "soft";

type FrameSetting = {
  frameStyle: FrameStyle;
  matMode: MatMode;
  grooveMode: GrooveMode;
  topMat: string;
  bottomMat: string;
  lighting: LightingMode;
  glass: boolean;
  plate: boolean;
};

const defaultSetting: FrameSetting = {
  frameStyle: "modern",
  matMode: "double",
  grooveMode: "double",
  topMat: "#eee8da",
  bottomMat: "#17140f",
  lighting: "museum",
  glass: true,
  plate: true,
};

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
  const project = projects.find((item) => item.slug === params.slug);

  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedWork, setSelectedWork] = useState(botanicalWorks[0]);
  const [savedSettings, setSavedSettings] = useState<Record<string, FrameSetting>>({});
  const [draftSetting, setDraftSetting] = useState<FrameSetting>(defaultSetting);

  const related = useMemo(
    () => projects.filter((item) => item.slug !== params.slug),
    [params.slug]
  );

  if (!project) {
    return <main className="projectLuxuryPage">Project not found.</main>;
  }

  const classNameFor = (setting: FrameSetting) =>
    `frame-${setting.frameStyle} mat-${setting.matMode} groove-${setting.grooveMode} light-${setting.lighting} ${
      setting.glass ? "glass-on" : "glass-off"
    } ${setting.plate ? "plate-on" : "plate-off"}`;

  const openDesignPanel = (work: (typeof botanicalWorks)[number]) => {
    setSelectedWork(work);
    setDraftSetting(savedSettings[work.id] || defaultSetting);
  };

  const saveDesign = () => {
    setSavedSettings((prev) => ({
      ...prev,
      [selectedWork.id]: draftSetting,
    }));
  };

  return (
    <main className="projectLuxuryPage">
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
            {botanicalWorks.map((work) => {
              const setting = savedSettings[work.id] || defaultSetting;

              return (
                <article
                  className="maisonWork"
                  key={work.id}
                  style={
                    {
                      "--top-mat": setting.topMat,
                      "--bottom-mat": setting.bottomMat,
                    } as React.CSSProperties
                  }
                >
                  <button
                    className={`maisonCard ${classNameFor(setting)}`}
                    onClick={() => setSelectedImage(work.image)}
                    aria-label={`Open ${work.title}`}
                  >
                    <div className="galleryLight" />
                    <div className="realFrame">
                      <div className="frameTexture" />
                      <div className="shadowBox">
                        <div className="bottomMat">
                          <div className="topMat">
                            <div className="vGroove" />
                            <div className="printWindow">
                              <img src={work.image} alt={work.title} />
                              <div className="glassReflection" />
                            </div>

                            {setting.plate && (
                              <div className="brassPlate">
                                <span>
                                  {work.title} / {work.latin}
                                </span>
                              </div>
                            )}
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

                    <button className="designButton" onClick={() => openDesignPanel(work)}>
                      DESIGN FRAME
                    </button>
                  </div>
                </article>
              );
            })}
          </div>

          <aside
            className="frameControlPanel"
            style={
              {
                "--top-mat": draftSetting.topMat,
                "--bottom-mat": draftSetting.bottomMat,
              } as React.CSSProperties
            }
          >
            <p className="smallLabel">FRAME CONTROL</p>

            <div className="controlPreview">
              <div className={`controlLargeFrame ${classNameFor(draftSetting)}`}>
                <div className="galleryLight" />
                <div className="realFrame">
                  <div className="frameTexture" />
                  <div className="shadowBox">
                    <div className="bottomMat">
                      <div className="topMat">
                        <div className="vGroove" />
                        <div className="printWindow">
                          <img src={selectedWork.image} alt={selectedWork.title} />
                          <div className="glassReflection" />
                        </div>

                        {draftSetting.plate && (
                          <div className="brassPlate">
                            <span>
                              {selectedWork.title} / {selectedWork.latin}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <strong>{selectedWork.title}</strong>
              <span>{selectedWork.latin}</span>
            </div>

            <div className="controlGroup">
              <h4>Frame Style</h4>
              <button onClick={() => setDraftSetting({ ...draftSetting, frameStyle: "modern" })}>
                Modern
              </button>
              <button onClick={() => setDraftSetting({ ...draftSetting, frameStyle: "antique" })}>
                Antique
              </button>
              <button onClick={() => setDraftSetting({ ...draftSetting, frameStyle: "elegant" })}>
                Elegant
              </button>
            </div>

            <div className="controlGroup">
              <h4>Mat Structure</h4>
              <button onClick={() => setDraftSetting({ ...draftSetting, matMode: "single" })}>
                Single
              </button>
              <button onClick={() => setDraftSetting({ ...draftSetting, matMode: "double" })}>
                Double
              </button>
            </div>

            <div className="controlGroup">
              <h4>V-Groove</h4>
              <button onClick={() => setDraftSetting({ ...draftSetting, grooveMode: "none" })}>
                None
              </button>
              <button onClick={() => setDraftSetting({ ...draftSetting, grooveMode: "single" })}>
                Single
              </button>
              <button onClick={() => setDraftSetting({ ...draftSetting, grooveMode: "double" })}>
                Double
              </button>
            </div>

            <div className="controlGroup">
              <h4>Lighting</h4>
              <button onClick={() => setDraftSetting({ ...draftSetting, lighting: "museum" })}>
                Museum
              </button>
              <button onClick={() => setDraftSetting({ ...draftSetting, lighting: "evening" })}>
                Evening
              </button>
              <button onClick={() => setDraftSetting({ ...draftSetting, lighting: "soft" })}>
                Soft
              </button>
            </div>

            <div className="controlGroup">
              <h4>Top Mat Color</h4>
              <input
                type="color"
                value={draftSetting.topMat}
                onChange={(e) =>
                  setDraftSetting({ ...draftSetting, topMat: e.target.value })
                }
              />
            </div>

            <div className="controlGroup">
              <h4>Bottom Mat Color</h4>
              <input
                type="color"
                value={draftSetting.bottomMat}
                onChange={(e) =>
                  setDraftSetting({ ...draftSetting, bottomMat: e.target.value })
                }
              />
            </div>

            <div className="controlGroup">
              <h4>Glass / Plate</h4>
              <button onClick={() => setDraftSetting({ ...draftSetting, glass: !draftSetting.glass })}>
                Glass {draftSetting.glass ? "On" : "Off"}
              </button>
              <button onClick={() => setDraftSetting({ ...draftSetting, plate: !draftSetting.plate })}>
                Plate {draftSetting.plate ? "On" : "Off"}
              </button>
            </div>

            <div className="controlActions">
              <button onClick={() => setDraftSetting(defaultSetting)}>Reset</button>
              <button className="saveDesignButton" onClick={saveDesign}>
                Save Design
              </button>
            </div>
          </aside>
        </div>
      </section>

      <section className="relatedArchive">
        <div className="archiveHeader">
          <p className="smallLabel">RELATED COLLECTIONS</p>
        </div>

        <div className="archiveStrip">
          {related.map((item) => (
            <Link href={`/projects/${item.slug}`} className="archiveCard" key={item.slug}>
              <div className="archiveImageFrame">
                <img src={item.image} alt={item.title} />
              </div>

              <div className="archiveMeta">
                <span>{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.subtitle}</p>
              </div>
            </Link>
          ))}
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
