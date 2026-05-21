export default function ContactPage() {
  return (
    <main className="museumProjectPage room-contact">
      <section className="museumProjectHero">
        <p className="museumEyebrow">CONTACT</p>

        <h1>Contact</h1>

        <p className="museumProjectLead">
          For exhibitions, editorial inquiries, gallery correspondence,
          curatorial dialogue, image requests, and institutional presentations.
        </p>
      </section>

      <section className="museumArchiveStatement">
        <div>
          <h2>Masumi Shiohara</h2>
        </div>

        <div>
          <p>
            Please contact for exhibition proposals, editorial features,
            gallery discussions, publication-related matters, and private
            presentations of the work.
          </p>

          <p>
            Email:{" "}
            <a href="mailto:contact@masumishiohara.com">
              contact@masumishiohara.com
            </a>
          </p>
        </div>
      </section>

      <section className="museumNextRoom">
        <p>VIEW</p>
        <a href="/projects/botanical-portraits">Works</a>
      </section>
    </main>
  );
}
