const projects = [
  ["Botanical Portraits", "Fruit as portrait, specimen, and still life.", "/images/botanical.jpg"],
  ["Growth Process", "Seasonal transformation through cultivation and time.", "/images/growth.jpg"],
  ["Sculptural Fruit", "Forms shaped by intervention, gravity, and growth.", "/images/sculptural.jpg"],
  ["Parchment on Vellum", "Botanical memory, print, and material presence.", "/images/vellum.jpg"],
  ["Breeding Archive", "Selection, rejection, disappearance, and record.", "/images/archive.jpg"],
];

export default function Home() {
  return (
    <main>
      <section className="hero" style={{ backgroundImage: "url('/images/hero.jpg')" }}>
        <div className="shade" />
        <div className="heroText">
          <p className="label">Official Archive</p>
          <h1>Masumi Shiohara</h1>
          <p className="lead">
            Fruit, cultivation, breeding, and photography.
            <br />
            A photographic practice born from growth, intervention, selection, and time.
          </p>
        </div>
      </section>

      <section className="statement">
        <p className="label">Statement</p>
        <h2>
          Fruit is cultivated as form, observed through time, and preserved as image.
        </h2>
      </section>

      <section className="projects">
        <p className="label">Projects</p>
        <div className="projectGrid">
          {projects.map(([title, subtitle, image]) => (
            <article className="card" key={title}>
              <div className="cardImage" style={{ backgroundImage: `url('${image}')` }} />
              <div className="cardText">
                <h3>{title}</h3>
                <p>{subtitle}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="about">
        <p className="label">About</p>
        <h2>
          Masumi Shiohara is a Japanese fruit grower, grape breeder, and photographer
          working between cultivation and image-making.
        </h2>
        <p>
          His work treats fruit not only as agricultural product, but as form, object,
          archive, and evidence of time.
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
        <a href="mailto:contact@masumishiohara.com">contact@masumishiohara.com</a>
      </section>
    </main>
  );
}
