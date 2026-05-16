"use client";

const projects = [
  ["Botanical Portraits", "Fruit as portrait, specimen, and still life.", ["botanical.jpg", "botanical.jpg.jpg"]],
  ["Growth Process", "Seasonal transformation through cultivation and time.", ["growth.jpg", "growth.jpg.jpg"]],
  ["Sculptural Fruit", "Forms shaped by intervention, gravity, and growth.", ["sculptural.jpg", "sculptural.jpg.jpg"]],
 ["Vellum Prints", "Botanical works printed on calf vellum.", ["vellum.jpg", "vellum.jpg.jpg"]],
  ["Breeding Archive", "Selection, rejection, disappearance, and record.", ["archive.jpg", "archive.jpg.jpg"]],
];

function SmartImage({ names, alt }: { names: string[]; alt: string }) {
  const candidates = names.flatMap((n) => [`/images/${n}`, `/${n}`]);
  const [index, setIndex] = React.useState(0);

  if (index >= candidates.length) return <div className="imageFallback" />;

  return (
    <img
      src={candidates[index]}
      alt={alt}
      onError={() => setIndex(index + 1)}
    />
  );
}

import React from "react";

export default function Home() {
  return (
    <main>
      <section className="hero">
        <SmartImage names={["hero.jpg", "hero.jpg.jpg"]} alt="Masumi Shiohara" />
        <div className="shade" />
        <div className="heroText">
          <p className="label">Official Archive</p>
          <h1>Masumi Shiohara</h1>
          <p className="lead">
            Fruit, cultivation, breeding, and photography.
            <br />
            A photographic practice born from growth, intervention, selection, and time.
          </p>
        </div>
      </section>

      <section className="statement">
        <p className="label">Statement</p>
        <h2>
          Fruit is cultivated as form, observed through time, and preserved as image.
        </h2>
      </section>

      <section className="projects">
        <p className="label">Projects</p>
        <div className="projectGrid">
          {projects.map(([title, subtitle, names]) => (
            <article className="card" key={title as string}>
              <div className="cardImage">
                <SmartImage names={names as string[]} alt={title as string} />
              </div>
              <div className="cardText">
                <h3>{title}</h3>
                <p>{subtitle}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="about">
        <p className="label">About</p>
        <h2>
          Masumi Shiohara is a Japanese fruit grower, grape breeder, and photographer
          working between cultivation and image-making.
        </h2>
        <p>
          His work treats fruit not only as agricultural product, but as form, object,
          archive, and evidence of time.
        </p>
      </section>

      <section className="contact">
        <p className="label">Contact</p>
        <h2>For exhibitions, publications, and inquiries.</h2>
        <a href="mailto:contact@masumishiohara.com">contact@masumishiohara.com</a>
      </section>
    </main>
  );
}
