const works = [
  {
    number: "01",
    title: "Botanical Portraits",
    text: "Fruit observed as portrait, specimen, and still life.",
    image: "/images/botanical.jpg",
  },
  {
    number: "02",
    title: "Growth Process",
    text: "Seasonal transformation through cultivation and time.",
    image: "/images/growth.jpg",
  },
  {
    number: "03",
    title: "Sculptural Fruit",
    text: "Forms shaped by intervention, gravity, and growth.",
    image: "/images/sculptural.jpg",
  },
  {
    number: "04",
    title: "Vellum Prints",
    text: "Botanical works printed on calf vellum.",
    image: "/images/vellum.jpg",
  },
  {
    number: "05",
    title: "Breeding Archive",
    text: "Selection, rejection, disappearance, and record.",
    image: "/images/archive.jpg",
  },
];

export default function Home() {
  return (
    <main>
      <section className="heroLuxury">
        <img src="/images/hero.jpg" alt="Masumi Shiohara" className="heroImage" />
        <div className="heroVeil" />
        <div className="softLight" />

        <div className="topLine">
          <span>Masumi Shiohara</span>
          <span>Botanical Maison</span>
        </div>

        <div className="heroText">
          <p className="eyebrow">Official Botanical Archive</p>
          <h1>
            Cultivated
            <br />
            Form
          </h1>
          <p>
            Fruit, cultivation, breeding, vellum, and photography — a botanical
            archive shaped by season, selection, material, and time.
          </p>
        </div>
      </section>

      <section className="manifesto">
        <p className="eyebrow">Maison Vision</p>
        <h2>
          Fruit is not only grown. It is shaped by climate, gravity, hand,
          selection, and care. At harvest, it becomes presence. Through
          photography, it becomes archive.
        </h2>
      </section>

      <section className="jewelPanel">
        <p className="eyebrow">Botanical High Jewellery</p>
        <h2>
          Inspired by the union of plants and precious objects, this work treats
          fruit as a rare cultivated form rather than produce alone.
        </h2>
      </section>

      <section className="worksLuxury">
        <p className="eyebrow">Selected Works</p>

        {works.map((work) => (
          <article className="luxuryWork" key={work.title}>
            <div className="imageStage">
              <img src={work.image} alt={work.title} />
            </div>

            <div className="workInfo">
              <span>{work.number}</span>
              <h3>{work.title}</h3>
              <p>{work.text}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="archiveLuxury">
        <p className="eyebrow">Material Archive</p>
        <h2>
          Orchard, breeding field, studio, vellum, photographic surface, and
          archive form one continuous practice.
        </h2>

        <div className="archiveGrid">
          <div>
            <span>01 / Cultivation</span>
            <p>Fruit shaped by weather, soil, season, and agricultural care.</p>
          </div>
          <div>
            <span>02 / Intervention</span>
            <p>Forms guided by hand, restraint, chance, and growth.</p>
          </div>
          <div>
            <span>03 / Vellum</span>
            <p>Images transferred onto calf vellum as material memory.</p>
          </div>
          <div>
            <span>04 / Archive</span>
            <p>Selection, disappearance, and record held as botanical history.</p>
          </div>
        </div>
      </section>

      <footer className="footerLuxury">
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
