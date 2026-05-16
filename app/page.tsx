"use client";
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
        <nav className="siteNav" aria-label="Primary navigation">
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
          alt="Masumi Shiohara botanical work"
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
          Fruit is not only cultivated. It is shaped by season, gravity,
          climate, selection, and care. At the moment of harvest, it becomes
          form. Through photography, it becomes archive.
        </h2>
      </section>

      <section id="projects" className="projectSection">
        <div className="sectionIntro">
          <p className="eyebrow">Projects</p>
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
}
