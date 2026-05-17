"use client";

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
          <div className="brandThin">BOTANICAL ARCHIVE</div>
        </header>

        <div className="heroContent reveal">
          <p className="smallLabel">OFFICIAL BOTANICAL ARCHIVE</p>

          <h1>
            Cultivated
            <br />
            Form
          </h1>

          <p className="heroLead">
            Fruit, cultivation, breeding, vellum, and photography —
            a botanical world where living forms are treated with
            the gravity of jewels.
          </p>
        </div>
      </section>

      <section className="museumSection reveal">
        <div className="museumGrid">
          <div className="museumText">
            <p className="smallLabel">Practice</p>

            <h2>
              Botanical forms observed through season,
              gravity, light, intervention, and disappearance.
            </h2>

            <p>
              The archive treats cultivated fruit not as agricultural
              produce alone, but as sculptural botanical presence.
            </p>
          </div>

          <div className="museumFrame">
            <img
              src="/images/botanical.jpg"
              alt="Botanical Portrait"
            />
          </div>
        </div>
      </section>

      <section className="projectSection reveal">
        <div className="projectGrid">
          <div className="projectImageFrame">
            <img src="/images/growth.jpg" alt="Growth Process" />
          </div>

          <div className="projectText">
            <p className="smallLabel">Archive I</p>

            <h3>Growth Process</h3>

            <p>
              Seasonal transformation recorded through cultivation,
              pruning, timing, and biological uncertainty.
            </p>
          </div>
        </div>
      </section>

      <section className="projectSection reveal">
        <div className="projectGrid reverse">
          <div className="projectImageFrame">
            <img src="/images/sculptural.jpg" alt="Sculptural Fruit" />
          </div>

          <div className="projectText">
            <p className="smallLabel">Archive II</p>

            <h3>Sculptural Fruit</h3>

            <p>
              Fruit shaped into forms suspended between botanical
              specimen, sculpture, and photographic fiction.
            </p>
          </div>
        </div>
      </section>

      <section className="projectSection reveal">
        <div className="projectGrid">
          <div className="projectImageFrame">
            <img src="/images/vellum.jpg" alt="Vellum Prints" />
          </div>

          <div className="projectText">
            <p className="smallLabel">Archive III</p>

            <h3>Vellum Prints</h3>

            <p>
              Botanical images printed with material depth inspired
              by archival luxury editions and museum collections.
            </p>
          </div>
        </div>
      </section>

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
