"use client";
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

        <div className="heroContent">
          <p className="heroLabel">Official Archive</p>

          <h1>
            Masumi
            <br />
            Shiohara
          </h1>

          <p className="heroLead">
            Fruit, cultivation, breeding, and photography.
            <br />
            A photographic practice born from growth,
            intervention, selection, and time.
          </p>
        </div>
      </section>

      <section className="intro">
        <p className="sectionLabel">Practice</p>

        <h2>
          Fruit is cultivated as form, observed through time,
          selected at the edge of disappearance,
          and preserved as image.
        </h2>
      </section>

      <section className="works">
        <p className="sectionLabel">Projects</p>

        <div className="worksGrid">
          {works.map((work) => (
            <article className="workCard" key={work.title}>
              <div className="workImageWrap">
                <img
                  src={work.image}
                  alt={work.title}
                  className="workImage"
                />
              </div>

              <div className="workText">
                <h3>{work.title}</h3>
                <p>{work.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
