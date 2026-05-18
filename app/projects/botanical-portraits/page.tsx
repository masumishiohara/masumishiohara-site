export default function BotanicalPortraitsPage() {
 const works = [
  "/botanical.jpg",
  "/vellum.jpg",
  "/sculptural.jpg",
  "/hero.jpg",
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
  <p className="museumLatin">
    Vitis vinifera
  </p>

  <h2>
    Botanical Study {index + 1}
  </h2>

  <span className="museumMedium">
    Archival pigment print
  </span>

  <div className="museumWallLabel">
    Collection of Maison Botanique Archive
  </div>
</div>
          </div>
        ))}
      </section>
    <section className="museumNextRoom">
  <p>
    NEXT ROOM
  </p>

  <a href="/projects/portrait-of-fruits">
    Portrait of Fruits
  </a>
</section>
    </main>
  );
}
