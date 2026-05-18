export default function RoomsPage() {
  const rooms = [
    {
      label: "I",
      title: "Farm",
      jp: "農園",
      href: "/projects/farm",
      text: "The origin of cultivation, labor, seasons, and the field.",
    },
    {
      label: "II",
      title: "Botanical Portraits",
      jp: "植物",
      href: "/projects/botanical-portraits",
      text: "Cultivated fruit presented as botanical portraits and specimens.",
    },
    {
      label: "III",
      title: "Portrait of Fruits",
      jp: "人物",
      href: "/projects/portrait-of-fruits",
      text: "Human presence expressed through fruit, form, and composition.",
    },
    {
      label: "IV",
      title: "Archive",
      jp: "収蔵",
      href: "/projects/archive",
      text: "Breeding records, vanished lines, tools, memory, and agricultural time.",
    },
    {
      label: "V",
      title: "Object Works",
      jp: "object",
      href: "/projects/object-works",
      text: "Color, monochrome, canvas, vellum, and material object studies.",
    },
    {
      label: "VI",
      title: "Framing Study",
      jp: "額装研究室",
      href: "/framing-study",
      text: "A study room for frames, mats, lighting, surfaces, and exhibition presence.",
    },
  ];

  return (
    <main className="museumRoomsPage">
      <section className="museumRoomsHero">
        <p className="museumEyebrow">MAISON BOTANIQUE ARCHIVE</p>

        <h1>
          A Private Museum of
          <br />
          Cultivated Forms
        </h1>

        <p className="museumLead">
          From farm to plant, from plant to portrait, from portrait to archive,
          and from archive to object.
        </p>
      </section>

      <section className="museumSequence">
        <div className="museumSequenceLine">
          農園 <span /> 植物 <span /> 人物 <span /> 収蔵 <span /> object
        </div>
      </section>

      <section className="museumRoomGrid">
        {rooms.map((room) => (
          <a href={room.href} className="museumRoomCard" key={room.title}>
            <div className="museumRoomNumber">{room.label}</div>

            <div>
              <p className="museumRoomJp">{room.jp}</p>
              <h2>{room.title}</h2>
              <p>{room.text}</p>
            </div>
          </a>
        ))}
      </section>
    </main>
  );
}
