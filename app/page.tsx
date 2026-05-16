"use client";

import { useEffect, useRef, useState } from "react";

const works = [
  {
    title: "Botanical Portraits",
    text: "Fruit as portrait, specimen, and still life.",
    image: "/images/botanical.jpg",
  },
  {
    title: "Growth Process",
    text: "Seasonal transformation through cultivation and time.",
    image: "/images/growth.jpg",
  },
  {
    title: "Sculptural Fruit",
    text: "Forms shaped by intervention, gravity, and growth.",
    image: "/images/sculptural.jpg",
  },
  {
    title: "Vellum Prints",
    text: "Botanical works printed on calf vellum.",
    image: "/images/vellum.jpg",
  },
  {
    title: "Breeding Archive",
    text: "Selection, rejection, disappearance, and record.",
    image: "/images/archive.jpg",
  },
];

function Reveal({
  children,
}: {
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      {
        threshold: 0.15,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "visible" : ""}`}
    >
      {children}
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <section className="hero">
        <img
          src="/images/hero.jpg"
          alt="Masumi Shiohara"
          className="heroImage"
        />

        <div className="heroOverlay" />

        <Reveal>
          <div className="heroContent">
            <p className="label">
              Official Botanical Archive
            </p>

            <h1>
              Masumi
              <br />
              Shiohara
            </h1>

            <p className="heroLead">
              Fruit, cultivation, breeding,
              and photography.
              <br />
              A botanical maison of cultivated form.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="vision">
        <Reveal>
          <>
            <p className="sectionLabel">
              Maison Vision
            </p>

            <h2>
              A botanical world where fruit
              is cultivated as form,
              observed through time,
              selected at the edge of disappearance,
              and preserved as image.
            </h2>
          </>
        </Reveal>
      </section>

      <section className="works">
        <p className="sectionLabel">Projects</p>

        {works.map((work, index) => (
          <Reveal key={index}>
            <article className="work">
              <div className="workImageFrame">
                <img
                  src={work.image}
                  alt={work.title}
                  className="workImage"
                />
              </div>

              <div className="workText">
                <span>
                  0{index + 1}
                </span>

                <h3>{work.title}</h3>

                <p>{work.text}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </section>

      <section className="contact">
        <Reveal>
          <>
            <p className="sectionLabel">
              Contact
            </p>

            <h2>
              Botanical
              <br />
              Archive
            </h2>

            <a href="mailto:contact@masumishiohara.com">
              contact@masumishiohara.com
            </a>
          </>
        </Reveal>
      </section>
    </main>
  );
}
