export default function RoomsPage() {
const rooms = [
  {
    label: "ROOM I",
    title: "Farm",
    jp: "農園",
    href: "/projects/farm",
    text:
      "Cultivation, labor, breeding, field memory, and agricultural time.",
  },

  {
    label: "ROOM II",
    title: "Botanical Portraits",
    jp: "植物",
    href: "/projects/botanical-portraits",
    text:
      "Cultivated fruit presented as botanical portrait and archival specimen.",
  },

  {
    label: "ROOM III",
    title: "Portrait of Fruits",
    jp: "人物",
    href: "/projects/portrait-of-fruits",
    text:
      "Human presence represented through cultivated forms and symbolic arrangements.",
  },

  {
    label: "ROOM IV",
    title: "Archive",
    jp: "収蔵",
    href: "/projects/archive",
    text:
      "Breeding records, agricultural tools, vanished selections, and memory.",
  },

  {
    label: "ROOM V",
    title: "Object Works",
    jp: "object",
    href: "/projects/object-works",
    text:
      "Canvas objects, monochrome forms, vellum works, and material studies.",
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
       <Link
  key={room.href}
  href={room.href}
  className="museumRoomCard"
>
  <div>
    <p className="museumRoomNumber">
      {room.label}
    </p>

    <h2 className="museumRoomTitle">
      {room.title}
    </h2>

    <p className="museumRoomJP">
      {room.jp}
    </p>
  </div>

  <div>
    <p className="museumRoomText">
      {room.text}
    </p>

    <span className="museumRoomArrow">
      Enter Room
    </span>
  </div>
</Link>
        ))}
      </section>
    </main>
  );
}
