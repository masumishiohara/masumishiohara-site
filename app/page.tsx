"use client";
import Link from "next/link";
import { projects } from "./project-data";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      {
        threshold: 0.12,
      }
    );

    reveals.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <main>
      {/* ================= HERO ================= */}

      <section className="heroLuxury">
        <img
          src="/images/hero.jpg"
          alt="Masumi Shiohara"
          className="heroImage"
        />

        <div className="heroDarkLayer" />
        <div className="heroGoldMist" />
        <div className="heroGreenMist" />
        <div className="heroLightSweep" />

        <header className="topBar">
          <div className="brandThin">MASUMI SHIOHARA</div>
          <div className="brandThin">BOTANICAL LUXURY</div>
        </header>

        <div className="heroContent reveal">
          <p className="smallLabel">
            OFFICIAL BOTANICAL LUXURY ARCHIVE
          </p>

          <h1>
            Cultivated
            <br />
            Form
          </h1>

          <p className="heroLead">
            Fruit, cultivation, breeding, vellum, and photography —
            botanical forms treated with the atmosphere of
            rare jewels and couture objects.
          </p>
        </div>
      </section>

      {/* ================= INTRO ================= */}

     <section className="worksSection">
  {projects.map((work, index) => (
    <section className="projectSection reveal" key={work.title}>
      <div className={`projectGrid ${index % 2 === 1 ? "reverse" : ""}`}>
        <div className="projectImageFrame">
          <div className="rembrandtLight" />
          <div className="heroGoldMist" />
          <div className="heroGreenMist" />

          <img src={work.image} alt={work.title} />
        </div>

        <div className="projectText">
          <p className="smallLabel">Archive {work.number}</p>

          <h3>{work.title}</h3>

          <p>{work.subtitle}</p>

          <Link
            href={`/projects/${work.slug}`}
            className="collectionLink"
          >
            View Collection
          </Link>
        </div>
      </div>
    </section>
  ))}
</section>

      {/* ================= FOOTER ================= */}

      <footer className="luxuryFooter reveal">
        <div className="footerFrame">
          <p className="smallLabel">Contact</p>

          <h2>Masumi Shiohara</h2>

          <a href="mailto:contact@masumishiohara.com">
            contact@masumishiohara.com
          </a>
        </div>
      </footer>
    </main>
  );
}
