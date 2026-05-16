"use client";

import { useState } from "react";

const works = [
  {
    number: "01",
    title: "Botanical Portraits",
    subtitle: "Fruit as portrait, specimen, and still life.",
    image: "botanical.jpg",
    fallback: "botanical.jpg.jpg",
  },
  {
    number: "02",
    title: "Growth Process",
    subtitle: "Seasonal transformation through cultivation and time.",
    image: "growth.jpg",
    fallback: "growth.jpg.jpg",
  },
  {
    number: "03",
    title: "Sculptural Fruit",
    subtitle: "Forms shaped by intervention, gravity, and growth.",
    image: "sculptural.jpg",
    fallback: "sculptural.jpg.jpg",
  },
  {
    number: "04",
    title: "Vellum Prints",
    subtitle: "Botanical works printed on calf vellum.",
    image: "vellum.jpg",
    fallback: "vellum.jpg.jpg",
  },
  {
    number: "05",
    title: "Breeding Archive",
    subtitle: "Selection, rejection, disappearance, and record.",
    image: "archive.jpg",
    fallback: "archive.jpg.jpg",
  },
];

function SmartImage({
  file,
  fallback,
  alt,
  className,
}: {
  file: string;
  fallback?: string;
  alt: string;
  className?: string;
}) {
  const candidates = [
    `/images/${file}`,
    fallback ? `/images/${fallback}` : "",
    `/${file}`,
    fallback ? `/${fallback}` : "",
  ].filter(Boolean);

  const [index, setIndex] = useState(0);

  if (index >= candidates.length) {
    return (
      <div className={`${className ?? ""} imageFallback`}>
        <span>{alt}</span>
      </div>
    );
  }

  return (
    <img
      src={candidates[index]}
      alt={alt}
      className={className}
      onError={() => setIndex((current) => current + 1)}
    />
  );
}

export default function Home() {
  return (
    <main className="siteShell">
      <header className="siteHeader">
        <a href="#top" className="brandMark">
          Masumi Shiohara
        </a>

        <nav className="siteNav">
          <a href="#vision">Vision</a>
          <a href="#projects">Projects</a>
          <a href="#archive">Archive</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section id="top" className="heroMaison">
        <SmartImage
          file="hero.jpg"
          fallback="hero.jpg.jpg"
          alt="Masumi Shiohara"
          className="heroImage"
        />

        <div className="heroVeil" />
        <div className="heroGrain" />

        <div className="heroCopy">
          <p className="eyebrow">Official Botanical Archive</p>

          <h1>
            Masumi
            <br />
            Shiohara
          </h1>

          <p className="heroLead">
            Fruit, cultivation, breeding, and photography.
            <br />
            A botanical maison of cultivated form.
          </p>
        </div>
      </section>

      <section id="vision" className="visionSection">
        <p className="eyebrow">Vision</p>

        <h2>
          Fruit is not only cultivated. It is shaped by season,
          gravity, climate, selection, and care.
          At the moment of harvest, it becomes form.
          Through photography, it becomes archive.
        </h2>
      </section>

      <section id="projects" className="projectSection">
        <div className="sectionIntro">
          <p className="eyebrow">Projects</p>
          <h2>Works as botanical jewels.</h2>
        </div>

        <div className="projectList">
          {works.map((work) => (
            <article className="projectPanel" key={work.title}>
              <div className="projectImageStage">
                <SmartImage
                  file={work.image}
                  fallback={work.fallback}
                  alt={work.title}
                  className="projectImage"
                />
              </div>

              <div className="projectText">
                <span>{work.number}</span>

                <h3>{work.title}</h3>

                <p>{work.subtitle}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="archive" className="archiveSection">
        <p className="eyebrow">Archive</p>

        <h2>
          Cultivation, intervention, selection,
          disappearance, and material memory
          are presented as a continuous
          photographic practice.
        </h2>

        <div className="archiveGrid">
          <div>
            <span>Material</span>

            <p>
              Calf vellum, photographic print,
              fruit surface, orchard light.
            </p>
          </div>

          <div>
            <span>Practice</span>

            <p>
              Growing, breeding, shaping,
              harvesting, photographing,
              archiving.
            </p>
          </div>

          <div>
            <span>Language</span>

            <p>
              Botanical portrait,
              sculptural fruit,
              seasonal record,
              selection.
            </p>
          </div>
        </div>
      </section>

      <section className="contextSection">
        <p className="eyebrow">Selected Contexts</p>

        <ul>
          <li>Photoville</li>
          <li>Arte Laguna Prize</li>
          <li>KEW Gardens</li>
          <li>Karuizawa Photo Fest</li>
          <li>Fujingaho</li>
        </ul>
      </section>

      <footer id="contact" className="footerMaison">
        <p className="eyebrow">Contact</p>

        <h2>
          Botanical
          <br />
          Archive
        </h2>

        <a href="mailto:contact@masumishiohara.com">
          contact@masumishiohara.com
        </a>
      </footer>
    </main>
  );
}
