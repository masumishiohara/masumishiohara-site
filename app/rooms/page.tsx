import Link from "next/link";

const rooms = [
  {
    label: "ROOM I",
    code: "MBA-FM",
    title: "Farm",
    jp: "農園",
    href: "/projects/farm",
    text: "Cultivation, breeding, orchard time, field memory, and the origin of the works.",
  },
  {
    label: "ROOM II",
    code: "MBA-FP",
    title: "Fruit Portraits",
    jp: "果実",
    href: "/projects/botanical-portraits",
    text: "Cultivated fruit presented as portrait, specimen, and pomological form.",
  },
  {
    label: "ROOM III",
    code: "MBA-PF",
    title: "Portrait of Fruits",
    jp: "人物",
    href: "/projects/portrait-of-fruits",
    text: "Human presence represented through cultivated fruit forms and symbolic arrangements.",
  },
  {
    label: "ROOM IV",
    code: "MBA-AR",
    title: "Archive",
    jp: "収蔵",
    href: "/projects/archive",
    text: "Breeding records, cultivated memory, selected forms, and agricultural time.",
  },
  {
    label: "ROOM V",
    code: "MBA-OW",
    title: "Object Works",
    jp: "object",
    href: "/projects/object-works",
    text: "Canvas objects, monochrome forms, vellum works, and material studies.",
  },
  {
    label: "CABINET",
    code: "MBA-CB",
    title: "Cabinet",
    jp: "別室",
    href: "/projects/cabinet",
    text: "Reserved works, future series, material studies, and works outside the main sequence.",
  },
  {
    label: "RESEARCH",
    code: "MBA-RW",
    title: "Research Wing",
    jp: "研究棟",
    href: "/space",
    text: "Framing studies, installation studies, spatial research, and curatorial visualization.",
  },
];

export default function RoomsPage() {
  return (
    <main className="museumProjectPage">
      <section className="museumHero">
        <p className="museumEyebrow">MAISON BOTANIQUE ARCHIVE</p>

        <h1>Exhibition Rooms</h1>

        <p className="museumLead">
          From orchard to fruit, from fruit to portrait, from portrait to archive,
          and from archive to object.
        </p>
      </section>

      <section className="museumSequence">
        <div className="museumSequenceLine">
          農園 <span /> 果実 <span /> 人物 <span /> 収蔵 <span /> object
        </div>
      </section>

      <section className="museumRoomGrid">
        {rooms.map((room) => (
          <Link key={room.href} href={room.href} className="museumRoomCard">
            <div>
              <div className="museumRoomTopline">
                <p className="museumRoomNumber">{room.label}</p>
                <span className="museumCollectionCode">{room.code}</span>
              </div>

              <h2 className="museumRoomTitle">{room.title}</h2>
              <p className="museumRoomJP">{room.jp}</p>
            </div>

            <div>
              <p className="museumRoomText">{room.text}</p>
              <span className="museumRoomArrow">Enter Room</span>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}
