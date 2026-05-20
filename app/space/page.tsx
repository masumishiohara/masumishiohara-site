export default function SpacePage() {
  const spaces = [
    {
      title: "Museum Installation",
      description:
        "Controlled institutional exhibition environment for curatorial placement studies.",
    },

    {
      title: "Collector Residence",
      description:
        "Architectural placement study within private residential environments.",
    },

    {
      title: "White Cube",
      description:
        "Spatial study for contemporary gallery installation and visual rhythm.",
    },

    {
      title: "Architectural Salon",
      description:
        "Warm spatial study for luxury hospitality and collector interiors.",
    },
  ];

  return (
    <main className="museumProjectPage room-space">
      <section className="museumProjectHero">

        <div className="museumCollectionHeader">
          <p className="museumEyebrow">
            INSTALLATION STUDIES
          </p>

          <span className="museumCollectionCode">
            MBA-SP
          </span>
        </div>

        <h1>
          Installation Studies
        </h1>

        <p className="museumProjectLead">
          Spatial research for exhibition,
          collector placement,
          architectural installation,
          and museum atmosphere.
        </p>
      </section>

      <section className="museumCuratorialText">
        <div>
          <p className="museumCuratorialLabel">
            SPATIAL RESEARCH
          </p>

          <h2>
            The placement of a work changes
            the meaning of the work itself.
          </h2>
        </div>

        <div>
          <p>
            These studies examine distance,
            wall atmosphere,
            lighting temperature,
            architectural scale,
            and spatial silence.
          </p>
        </div>
      </section>

      <section className="museumRoomGrid">
        {spaces.map((space) => (
          <article
            key={space.title}
            className="museumRoomCard"
          >
            <div>
              <p className="museumRoomNumber">
                STUDY
              </p>

              <h2 className="museumRoomTitle">
                {space.title}
              </h2>
            </div>

            <div>
              <p className="museumRoomText">
                {space.description}
              </p>

              <span className="museumRoomArrow">
                Open Study
              </span>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
