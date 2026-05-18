export default function BotanicalPortraitsPage() {
  const works = [
    "/images/botanical/01.jpg",
    "/images/botanical/02.jpg",
    "/images/botanical/03.jpg",
    "/images/botanical/04.jpg",
    "/images/botanical/05.jpg",
    "/images/botanical/06.jpg",
  ];

  return (
    <main className="museumProjectPage">
      <section className="museumProjectHero">
        <p className="museumEyebrow">
          ROOM II
        </p>

        <h1>
          Botanical Portraits
        </h1>

        <p className="museumProjectLead">
          Cultivated fruit presented as botanical
          portraits, specimens, and archival forms.
        </p>
      </section>

      <section className="museumArtworkGrid">
        {works.map((image, index) => (
          <div
            className="museumArtworkCard"
            key={image}
          >
            <div className="museumArtworkFrame">
              <img
                src={image}
                alt=""
              />
            </div>

            <div className="museumArtworkMeta">
              <p>
                Vitis vinifera
              </p>

              <h2>
                Botanical Study {index + 1}
              </h2>

              <span>
                Archival pigment print
              </span>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
