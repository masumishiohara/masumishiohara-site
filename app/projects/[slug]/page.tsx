"use client";

import { useState } from "react";
import Link from "next/link";
import { projects } from "../../project-data";

const botanicalWorks = [
  {
    id: "01",
    image: "/images/botanical-portraits/01.jpg",
    latin: "Vitis vinifera",
    title: "Kerner",
    caption: "White wine grape cultivar presented as a botanical specimen.",
  },
  {
    id: "02",
    image: "/images/botanical-portraits/02.jpg",
    latin: "Pyrus communis",
    title: "European Pear",
    caption: "Fruit, flower, leaf, and stem arranged as cultivated form.",
  },
  {
    id: "03",
    image: "/images/botanical-portraits/03.jpg",
    latin: "Prunus persica",
    title: "Garden Peach",
    caption: "Stone fruit with foliage and flowering branch.",
  },
  {
    id: "04",
    image: "/images/botanical-portraits/04.jpg",
    latin: "Vitis vinifera",
    title: "Chardonnay",
    caption: "Classic white wine grape with characteristic foliage.",
  },
  {
    id: "05",
    image: "/images/botanical-portraits/05.jpg",
    latin: "Malus domestica",
    title: "Apple Study",
    caption: "Cultivated apple form documented as botanical archive.",
  },
  {
    id: "06",
    image: "/images/botanical-portraits/06.jpg",
    latin: "Vitis vinifera",
    title: "Muscat Form",
    caption: "Grape composition shaped by seasonal cultivation.",
  },
  {
    id: "07",
    image: "/images/botanical-portraits/07.jpg",
    latin: "Prunus domestica",
    title: "Plum Structure",
    caption: "Botanical arrangement focused on fruit and branch balance.",
  },
  {
    id: "08",
    image: "/images/botanical-portraits/08.jpg",
    latin: "Pyrus pyrifolia",
    title: "Asian Pear",
    caption: "Japanese pear specimen presented in museum framing.",
  },
  {
    id: "09",
    image: "/images/botanical-portraits/09.jpg",
    latin: "Vitis vinifera",
    title: "Botanical Grape",
    caption: "Cultivated grape form preserved as photographic specimen.",
  },
  {
    id: "10",
    image: "/images/botanical-portraits/10.jpg",
    latin: "Prunus armeniaca",
    title: "Apricot Study",
    caption: "Stone fruit, leaf, and flowering elements arranged for record.",
  },
  {
    id: "11",
    image: "/images/botanical-portraits/11.jpg",
    latin: "Vitis vinifera",
    title: "Vine Form",
    caption: "A grape cultivar studied through fruit, leaf, and structure.",
  },
  {
    id: "12",
    image: "/images/botanical-portraits/12.jpg",
    latin: "Pyrus communis",
    title: "Pear Form",
    caption: "Cultivated pear presented as a quiet botanical object.",
  },
  {
    id: "13",
    image: "/images/botanical-portraits/13.jpg",
    latin: "Malus domestica",
    title: "Apple Branch",
    caption: "Fruit and foliage arranged as an archival botanical portrait.",
  },
  {
    id: "14",
    image: "/images/botanical-portraits/14.jpg",
    latin: "Prunus domestica",
    title: "Plum Study",
    caption: "Fruit, leaf, and seasonal growth recorded as cultivated form.",
  },
  {
    id: "15",
    image: "/images/botanical-portraits/15.jpg",
    latin: "Vitis vinifera",
    title: "Grape Study",
    caption: "Botanical grape form photographed with archival restraint.",
  },
  {
    id: "16",
    image: "/images/botanical-portraits/16.jpg",
    latin: "Pyrus communis",
    title: "Pear Specimen",
    caption: "A cultivated pear study arranged with botanical clarity.",
  },
  {
    id: "17",
    image: "/images/botanical-portraits/17.jpg",
    latin: "Prunus persica",
    title: "Peach Form",
    caption: "A stone fruit study shaped by season, light, and care.",
  },
  {
    id: "18",
    image: "/images/botanical-portraits/18.jpg",
    latin: "Vitis vinifera",
    title: "Vine Archive",
    caption: "Grape, leaf, and stem preserved as cultivated memory.",
  },
  {
    id: "19",
    image: "/images/botanical-portraits/19.jpg",
    latin: "Malus domestica",
    title: "Apple Specimen",
    caption: "Cultivated fruit arranged as a formal botanical portrait.",
  },
  {
    id: "20",
    image: "/images/botanical-portraits/20.jpg",
    latin: "Pyrus pyrifolia",
    title: "Pear Archive",
    caption: "Fruit and foliage documented as a botanical archive object.",
  },
  {
    id: "21",
    image: "/images/botanical-portraits/21.jpg",
    latin: "Vitis vinifera",
    title: "Cultivated Vine",
    caption: "A grape form preserved through photographic presentation.",
  },
  {
    id: "22",
    image: "/images/botanical-portraits/22.jpg",
    latin: "Botanical Specimen",
    title: "Cultivated Form",
    caption: "A botanical work preserved as photographic archive.",
  },
];

export default function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const project = projects.find((item) => item.slug === params.slug);

  if (!project) {
    return <main>Project not found.</main>;
  }

  const related = projects.filter((item) => item.slug !== project.slug);

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
          <div className="collectionIntroLeft">
            <p className="smallLabel">COLLECTION WORKS</p>

            <h2>Botanical Portraits 01–22</h2>
          </div>

          <div className="collectionIntroRight">
            <p>
              A private botanical archive of cultivated forms, arranged as
              framed specimens under warm museum light.
            </p>
          </div>
        </div>

        <div className="maisonGrid">
          {botanicalWorks.map((work) => (
            <button
              className="maisonCard"
              key={work.id}
              onClick={() => setSelectedImage(work.image)}
            >
              <div className="maisonSpotlight" />

              <div className="maisonFrame">
                <div className="maisonOuterFrame">
                  <div className="maisonInnerShadow">
                    <div className="maisonMat">
                      <div className="maisonMatInset">
                        <div className="maisonArtwork">
                          <img src={work.image} alt={work.title} />
                        </div>
                      </div>
                    </div>

                    <div className="maisonPlate" />
                  </div>
                </div>
              </div>

              <div className="maisonMeta">
                <span className="maisonNumber">{work.id}</span>

                <p className="maisonLatin">{work.latin}</p>

                <h3>{work.title}</h3>

                <p className="maisonCaption">{work.caption}</p>
              </div>
            </button>
          ))}
        </div>
      </section>

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
              <div className="archiveImage">
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
          <img src={selectedImage} alt="" />
        </div>
      )}
    </main>
  );
}
