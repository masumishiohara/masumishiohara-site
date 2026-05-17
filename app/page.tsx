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

      <section className="museumSection reveal">
        <div className="museumGrid">
          <div className="museumText">
            <p className="smallLabel">Practice</p>

            <h2>
              Botanical forms shaped through season,
              intervention, light, gravity, and time.
            </h2>

            <p>
              Cultivated fruit becomes sculpture,
              archive, and photographic presence.
            </p>
          </div>

          <div className="museumFrame">
            <div className="rembrandtLight" />
            <img
              src="/images/botanical.jpg"
              alt="Botanical Portrait"
            />
          </div>
        </div>
      </section>

     <section className="works">
  {projects.map((work) => (
    <article className="workBlock reveal" key={work.title}>
      <div className="workImageBox">
        <div className="rembrandtLight" />
        <div className="heroGoldMist" />
        <div className="heroGreenMist" />

        <img
          src={work.image}
          alt={work.title}
        />
      </div>

      <div className="workCopy">
        <span>{work.number}</span>

        <h3>{work.title}</h3>

        <p>{work.subtitle}</p>

        <Link
          href={`/projects/${work.slug}`}
          className="collectionLink"
        >
          View Collection
        </Link>
      </div>
    </article>
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
