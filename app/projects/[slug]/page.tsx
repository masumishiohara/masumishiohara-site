"use client";

import { useState } from "react";
import Link from "next/link";
import { getProject, projects } from "../../project-data";

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

      {project.gallery && (
        <section className="collectionGallery framedGallery">
          <p className="smallLabel">Collection Works</p>

          <div className="framedGalleryGrid">
            {project.gallery.map((image, index) => (
              <article className="framedGalleryWork" key={image}>
                <button
                  className="framedGalleryButton"
                  onClick={() => setSelectedImage(image)}
                  aria-label={`Open ${project.title} ${index + 1}`}
                >
                  <div className="gallerySpotlight" />
                  <div className="galleryOuterFrame">
                    <div className="galleryDarkMat">
                      <div className="galleryGroove" />
                      <div className="galleryInnerMat">
                        <img src={image} alt={`${project.title} ${index + 1}`} />
                      </div>

                      <div className="galleryMetalPlate">
                        {String(index + 1).padStart(2, "0")}
                      </div>
                    </div>
                  </div>
                </button>
              </article>
            ))}
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
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </main>
  );
}
