"use client";

import { useState } from "react";
import Link from "next/link";
import { getProject, projects } from "../../project-data";

type GalleryItem =
  | string
  | {
      image: string;
      scientific?: string;
      cultivar?: string;
      caption?: string;
    };

const provisionalNames = [
  ["Pyrus communis", "European Pear", "Fruit, flower, leaf, and stem arranged as cultivated form."],
  ["Vitis vinifera", "Kerner", "White wine grape cultivar presented as a botanical specimen."],
  ["Vitis vinifera", "Chardonnay", "Classic white grape with foliage and botanical details."],
  ["Pyrus communis", "Pear Study", "A cultivated fruit study observed through form and light."],
  ["Prunus persica", "Garden Peach", "Stone fruit with foliage, flower, and seasonal presence."],
  ["Malus domestica", "Apple", "Fruit, leaf, flower, and branch preserved as botanical record."],
  ["Prunus armeniaca", "Apricot", "Stone fruit study with leaves, flower, and kernel."],
  ["Vitis vinifera", "Riesling", "Aromatic white wine grape with refined structure."],
  ["Vitis vinifera", "Sémillon", "White grape cultivar recorded as botanical archive."],
  ["Citrus limon", "Lemon", "Citrus fruit with leaf, flower, and cross-section."],
  ["Punica granatum", "Pomegranate", "Fruit, flower, and branch displayed for study."],
  ["Morus alba", "White Mulberry", "Leaf, fruit, and twig shown in cultivated state."],
  ["Olea europaea", "Olive", "Leaf, fruit, and flower of cultivated olive."],
  ["Prunus avium", "Sweet Cherry", "Berries with leaf and flowering twig."],
  ["Pyrus communis", "Bartlett", "Widely grown pear variety with smooth texture."],
  ["Cydonia oblonga", "Quince", "Fruit, leaf, flower, and botanical details."],
  ["Citrus paradisi", "Grapefruit", "Citrus fruit with leaf, flower, and section."],
  ["Prunus domestica", "Plum", "Stone fruit with leaf, flower, and pit."],
  ["Sambucus nigra", "Elderflower", "Flowering branch with leaf and inflorescence."],
  ["Vaccinium corymbosum", "Blueberry", "Berry cluster with leaf and botanical elements."],
  ["Actinidia deliciosa", "Kiwi", "Foliage, flower, and fruit displayed as specimen."],
  ["Botanical Specimen", "Cultivated Form", "A botanical work preserved as photographic archive."],
];

export default function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const project = getProject(params.slug);

  if (!project) {
    return null;
  }

  const related = projects.filter((p) => p.slug !== project.slug);
  const gallery = (project.gallery || []) as GalleryItem[];

  return (
    <main className="projectLuxuryPage">
      <div className="projectTopBar">
        <Link href="/" className="backLink">
          ← MASUMI SHIOHARA
        </Link>

        <span className="collectionIndex">COLLECTION {project.number}</span>
      </div>

      <section className="projectHero">
        <div className="projectHeroGrid">
          <div className="projectHeroText">
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

      {gallery.length > 0 && (
        <section className="collectionGallery maisonGallery">
          <div className="collectionGalleryHeader">
            <div>
              <p className="smallLabel">Collection Works</p>
              <h2>{project.title} 01–22</h2>
            </div>

            <p className="galleryStatement">
              A private botanical archive of cultivated forms, arranged as
              framed specimens under warm museum light.
            </p>
          </div>

          <div className="maisonGalleryGrid">
            {gallery.map((entry, index) => {
              const image = typeof entry === "string" ? entry : entry.image;
              const fallback = provisionalNames[index] || provisionalNames[21];

              const scientific =
                typeof entry === "string" ? fallback[0] : entry.scientific || fallback[0];
              const cultivar =
                typeof entry === "string" ? fallback[1] : entry.cultivar || fallback[1];
              const caption =
                typeof entry === "string" ? fallback[2] : entry.caption || fallback[2];

              return (
                <article className="maisonWork" key={image}>
                  <button
                    className="maisonFrameButton"
                    onClick={() => setSelectedImage(image)}
                    aria-label={`Open ${cultivar}`}
                  >
                    <div className="wallSpotlight" />

                    <div className="maisonFrame">
                      <div className="outerGoldLine" />

                      <div className="doubleMat">
                        <div className="darkTexturedMat">
                          <div className="matGroove" />

                          <div className="warmInnerMat">
                            <div className="printWindow">
                              <img src={image} alt={cultivar} />
                            </div>
                          </div>

                          <div className="flatMetalPlate" />
                        </div>
                      </div>
                    </div>
                  </button>

                  <div className="maisonCaption">
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <p className="latinName">{scientific}</p>
                    <h3>{cultivar}</h3>
                    <p>{caption}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      )}

      <section className="relatedArchive">
        <div className="archiveHeader">
          <p className="smallLabel">RELATED COLLECTIONS</p>
        </div>

        <div className="archiveStrip">
          {related.map((item) => (
            <Link
              href={`/projects/${item.slug}`}
              className="archiveCard"
              key={item.slug}
            >
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
        <div className="imageModal" onClick={() => setSelectedImage(null)}>
          <button className="modalClose" onClick={() => setSelectedImage(null)}>
            ×
          </button>

          <img
            src={selectedImage}
            alt="Selected botanical work"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </main>
  );
}
