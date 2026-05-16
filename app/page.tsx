"use client";
          <h2>Works as botanical jewels.</h2>
        </div>

        <div className="projectList">
          {works.map((work, index) => (
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
          Cultivation, intervention, selection, disappearance, and material
          memory are presented as a continuous photographic practice.
        </h2>
        <div className="archiveGrid">
          <div>
            <span>Material</span>
            <p>Calf vellum, photographic print, fruit surface, orchard light.</p>
          </div>
          <div>
            <span>Practice</span>
            <p>Growing, breeding, shaping, harvesting, photographing, archiving.</p>
          </div>
          <div>
            <span>Language</span>
            <p>Botanical portrait, sculptural fruit, seasonal record, selection.</p>
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
