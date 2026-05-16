"use client";
              the work treats fruit not as produce alone, but as a rare form
              shaped by season, gravity, hand, selection, and light.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="works">
        <p className="sectionLabel">Projects</p>

        {works.map((work) => (
          <Reveal key={work.title}>
            <article className="work">
              <div className="workImageFrame">
                <img src={work.image} alt={work.title} className="workImage" />
              </div>

              <div className="workText">
                <span>{work.number}</span>
                <h3>{work.title}</h3>
                <p>{work.text}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </section>

      <section className="material">
        <Reveal>
          <p className="sectionLabel">Material Archive</p>
          <h2>
            Between orchard, studio, vellum, photographic surface, and archive.
          </h2>
        </Reveal>

        <div className="detailGrid">
          {details.map(([title, text]) => (
            <Reveal key={title}>
              <div className="detailCard">
                <span>{title}</span>
                <p>{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="editorial">
        <Reveal>
          <p className="sectionLabel">Selected Contexts</p>
          <ul>
            <li>Photoville</li>
            <li>Arte Laguna Prize</li>
            <li>KEW Gardens</li>
            <li>Karuizawa Photo Fest</li>
            <li>Fujingaho</li>
          </ul>
        </Reveal>
      </section>

      <section className="contact">
        <Reveal>
          <p className="sectionLabel">Contact</p>
          <h2>
            Botanical
            <br />
            Archive
          </h2>
          <a href="mailto:contact@masumishiohara.com">
            contact@masumishiohara.com
          </a>
        </Reveal>
      </section>
    </main>
  );
}
