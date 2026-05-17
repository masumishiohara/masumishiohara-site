const works = [
  {
    number: "01",
    title: "Botanical Portraits",
    text: "Fruit presented as portrait, object, and presence.",
    image: "/images/botanical.jpg",
  },
  {
    number: "02",
    title: "Growth Process",
    text: "Seasonal transformation shaped by cultivation and time.",
    image: "/images/growth.jpg",
  },
  {
    number: "03",
    title: "Sculptural Fruit",
    text: "Forms guided by gravity, intervention, and growth.",
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
    text: "Selection, disappearance, and record.",
    image: "/images/archive.jpg",
  },
];

export default function Home() {
  return (
    <main>
      <section className="luxuryHero">
        <img src="/images/hero.jpg" alt="Masumi Shiohara" className="heroImage" />
        <div className="heroShade" />
        <div className="mist mistHero" />

        <header className="luxuryHeader">
          <span>Masumi Shiohara</span>
          <span>Official Site</span>
        </header>

        <div className="heroContent">
          <p className="smallLabel">Fruit / Cultivation / Photography</p>
          <h1>
            Rare
            <br />
            Botanical
            <br />
            Works
          </h1>
          <p className="heroLead">
            Fruit cultivated, selected, photographed, and transformed into
            works of quiet luxury.
          </p>
        </div>
      </section>

      <section className="luxuryIntro">
        <div className="mist mistLeft" />
        <p className="smallLabel">Statement</p>
        <h2>
          A practice where fruit is treated not as produce, but as a rare object
          shaped by season, hand, time, and light.
        </h2>
      </section>

      <section className="signaturePanel">
        <div className="mist mistRight" />
        <div>
          <p className="smallLabel">Signature</p>
          <h2>Cultivated Form</h2>
        </div>
        <p>
          Each work begins in the field and reaches completion through selection,
          photography, and material presentation.
        </p>
      </section>

      <section className="worksSection">
        <p className="smallLabel">Collections</p>

        {works.map((work) => (
          <article className="workBlock" key={work.title}>
            <div className="mist workMist" />
            <div className="workImageBox">
              <img src={work.image} alt={work.title} />
            </div>

            <div className="workCopy">
              <span>{work.number}</span>
              <h3>{work.title}</h3>
              <p>{work.text}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="privateSection">
        <div className="mist mistLeft" />
        <p className="smallLabel">Private Viewing</p>
        <h2>
          Works are presented for exhibitions, publications, curatorial review,
          and selected private enquiries.
        </h2>
      </section>

      <footer className="luxuryFooter">
        <p className="smallLabel">Contact</p>
        <h2>Masumi Shiohara</h2>
        <a href="mailto:contact@masumishiohara.com">
          contact@masum
