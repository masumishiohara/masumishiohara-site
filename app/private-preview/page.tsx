export default function PrivatePreviewPage() {
  return (
    <main className="museumProjectPage room-private">
      <section className="museumProjectHero">
        <div className="museumCollectionHeader">
          <p className="museumEyebrow">
            PRIVATE PREVIEW
          </p>

          <span className="museumCollectionCode">
            MBA-PR
          </span>
        </div>

        <h1>
          Private
          <br />
          Preview
        </h1>

        <p className="museumProjectLead">
          Selected studies, installation materials,
          archival works, and curatorial presentations
          may be shared privately with galleries,
          editors, institutions, and collectors.
        </p>
      </section>

      <section className="museumArchiveStatement">
        <div>
          <h2>
            Access is treated as part of the work’s context.
          </h2>
        </div>

        <div>
          <p>
            Some materials are not presented as public content,
            but as private institutional correspondence,
            installation dossiers, and curatorial previews.
          </p>
        </div>
      </section>

      <section className="museumNextRoom">
        <p>
          RETURN
        </p>

        <a href="/">
          Maison Botanique Archive
        </a>
      </section>
    </main>
  );
}
