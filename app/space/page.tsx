export default function SpacePage() {
  const spaces = [
    {
      title: "Private Museum",
      description:
        "Dark institutional gallery with controlled museum lighting.",
    },

    {
      title: "Collector Residence",
      description:
        "Architectural residential installation with quiet natural light.",
    },

    {
      title: "White Cube",
      description:
        "Contemporary exhibition room for curatorial installation studies.",
    },

    {
      title: "Luxury Salon",
      description:
        "Private salon environment with warm architectural atmosphere.",
    },
  ];

  return (
    <main className="museumProjectPage room-space">
      <section className="museumProjectHero">

        <div className="museumCollectionHeader">
          <p className="museumEyebrow">
            SPACE VISUALIZER
          </p>

          <span className="museumCollectionCode">
            MBA-SP
          </span>
        </div>

        <h1>
          Exhibition Spaces
        </h1>

        <p className="museumProjectLead">
          Visualization studies for exhibition,
          collector placement,
          architectural installation,
          and museum environments.
        </p>
      </section>

      <section className="museumRoomGrid">
        {spaces.map((space) => (
          <article
            key={space.title}
            className="museumRoomCard"
          >
            <div>
              <p className="museumRoomNumber">
                SPACE
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
                Visualization Study
              </span>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
