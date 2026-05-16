const projects = [
  {
    title: "Botanical Portraits",
    subtitle: "Fruit as portrait, specimen, and still life.",
    image: "/hero.jpg",
  },
  {
    title: "Growth Process",
    subtitle: "Seasonal transformation through cultivation and time.",
    image: "/01 (1).jpg",
  },
  {
    title: "Sculptural Fruit",
    subtitle: "Forms shaped by intervention, gravity, and growth.",
    image: "/02 (2).jpg",
  },
  {
    title: "Parchment on Vellum",
    subtitle: "Botanical memory, print, and material presence.",
    image: "/cover (12).jpg",
  },
  {
    title: "Breeding Archive",
    subtitle: "Selection, rejection, disappearance, and record.",
    image: "/03 (3).jpg",
  },
];

export default function Home() {
  return (
    <main>
      <section className="hero">
        <img src="/hero.jpg" alt="Masumi Shiohara" />
        <div className="shade" />
        <div className="heroText">
          <p className="label">Official Archive</p>
          <h1>Masumi Shiohara</h1>
          <p className="lead">
            Fruit, cultivation, breeding, and photography.
            <br />
            A photographic practice born from growth, intervention, selection,
            and time.
          </p>
        </div>
      </section>

      <section className="statement">
        <p className="label">Statement</p>
        <h2>
          Fruit is not photographed after the fact. It is cultivated, observed,
          selected, shaped, and finally preserved as an image.
        </h2>
      </section>

      <section className="projects">
        <p className="label">Projects</p>
        <div className="projectGrid">
          {projects.map((p) => (
            <article className="card" key={p.title}>
              <img src={p.image} alt={p.title} />
              <div>
                <h3>{p.title}</h3>
                <p>{p.subtitle}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="about">
        <p className="label">About</p>
        <h2>
          Masumi Shiohara is a Japanese fruit grower, grape breeder, and
          photographer working between cultivation and image-making.
        </h2>
        <p>
          His work treats fruit not only as agricultural product, but as form,
          object, archive, and evidence of time. The practice connects botanical
          portraiture, growth process, sculptural fruit, vellum-like print
          works, and breeding records.
        </p>
      </section>

      <section className="exhibitions">
        <p className="label">Selected Exhibitions / Publications</p>
        <ul>
          <li>Photoville</li>
          <li>Arte Laguna Prize</li>
          <li>KEW Gardens</li>
          <li>Karuizawa Photo Fest</li>
          <li>Fujingaho</li>
          <li>Photo Book Forthcoming</li>
        </ul>
      </section>

      <section className="contact">
        <p className="label">Contact</p>
        <h2>For exhibitions, publications, and inquiries.</h2>
        <a href="mailto:contact@masumishiohara.com">
          contact@masumishiohara.com
        </a>
      </section>
    </main>
  );
}
