"use client";
        <div className="heroShade" />
        <div className="grain" />

        <Reveal>
          <div className="heroContent">
            <p className="label">Official Archive</p>
            <h1>
              Masumi
              <br />
              Shiohara
            </h1>
            <p className="heroLead">
              Fruit, cultivation, breeding, and photography.
              <br />A photographic practice born from growth, intervention,
              selection, and time.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="intro">
        <p className="label">Practice</p>
        <h2>
          Fruit is cultivated as form, observed through time, selected at the
          edge of disappearance, and preserved as image.
        </h2>
      </section>

      <section className="works">
        <p className="label sectionLabel">Projects</p>

        {works.map((work, index) => (
          <article className="work" key={work.title}>
            <div className="workImageFrame">
              <SmartImage
                file={work.image}
                fallback={work.fallback}
                alt={work.title}
                className="workImage"
              />
            </div>

            <div className="workText">
              <span className="workNumber">0{index + 1}</span>
              <h3>{work.title}</h3>
              <p>{work.description}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="atelier">
        <p className="label">Atelier</p>
        <h2>
          Between orchard, breeding field, studio, archive, and print surface.
        </h2>
        <p>
          The work treats fruit not as agricultural product alone, but as an
          object shaped by time, climate, intervention, selection, and material
          transformation.
        </p>
      </section>

      <section className="exhibitions">
        <p className="label">Selected Contexts</p>
        <ul>
          <li>Photoville</li>
          <li>Arte Laguna Prize</li>
          <li>KEW Gardens</li>
          <li>Karuizawa Photo Fest</li>
          <li>Fujingaho</li>
        </ul>
      </section>

      <footer className="footer">
        <p className="label">Contact</p>
        <h2>
          Botanical
          <br />
          Archive
        </h2>
        <a href="mailto:minoriphoto@icloud.com">minoriphoto@icloud.com</a>
      </footer>
    </main>
  );
}
