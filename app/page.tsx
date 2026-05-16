"use client";

const works = [
  {
    title: "Botanical Portraits",
    text: "Fruit observed as portrait and specimen.",
    image: "/images/botanical.jpg",
  },
  {
    title: "Growth Process",
    text: "Seasonal transformation through cultivation and time.",
    image: "/images/growth.jpg",
  },
  {
    title: "Sculptural Fruit",
    text: "Forms shaped by intervention and gravity.",
    image: "/images/sculptural.jpg",
  },
];

export default function Home() {
  return (
    <main>
      <section className="heroLuxury">
        <img
          src="/images/hero.jpg"
          alt="Masumi Shiohara"
          className="heroImage"
        />

        <div className="heroBlackVeil" />

        <div className="heroInner">
          <p className="eyebrow">Official Botanical Archive</p>

          <h1>
            Cultivated
            <br />
            Form
          </h1>

          <p className="heroSub">
            Fruit, breeding, cultivation, and photography treated as
            botanical luxury archive.
          </p>
        </div>
      </section>

      <section className="manifesto">
        <p className="eyebrow">Maison Vision</p>

        <h2>
          Fruit becomes archive through cultivation, selection,
          photography, and time.
        </h2>
      </section>

      <section className="worksLuxury">
        {works.map((work) => (
          <article className="luxuryWork" key={work.title}>
            <div className="imageStage">
              <img src={work.image} alt={work.title} />
            </div>

            <div className="workInfo">
              <h3>{work.title}</h3>
              <p>{work.text}</p>
            </div>
          </article>
        ))}
      </section>

      <footer className="luxuryFooter">
        <p className="eyebrow">Contact</p>

        <h2>
          Botanical
          <br />
          Archive
        </h2>
      </footer>
    </main>
  );
}
