export default function RoomsPage() {
  const rooms = [
    {
      title: "Botanical Portraits",
      subtitle: "植物肖像室",
      image: "/images/botanical.jpg",
      href: "/projects/botanical-portraits",
      description:
        "Cultivated fruit presented as botanical portrait, specimen, and archive.",
    },
    {
      title: "Portrait of Fruits",
      subtitle: "果実人物画室",
      image: "/images/portrait-fruits.jpg",
      href: "/projects/portrait-of-fruits",
      description:
        "Human presence represented through cultivated fruits and symbolic forms.",
    },
    {
      title: "Cultivated Forms",
      subtitle: "栽培造形室",
      image: "/images/sculptural.jpg",
      href: "/projects/sculptural-fruit",
      description:
        "Intervened growth forms presented as sculptural botanical objects.",
    },
    {
      title: "Breeding Archive",
      subtitle: "育種収蔵室",
      image: "/images/archive.jpg",
      href: "/projects/breeding-archive",
      description:
        "Selection, disappearance, memory, and cultivated agricultural history.",
    },
    {
      title: "Canvas Sheet Works",
      subtitle: "素材研究室",
      image: "/images/canvas-study.jpg",
      href: "/projects/material-studies",
      description:
        "Surface, print object, canvas texture, and material presence.",
    },
    {
      title: "Tools of Cultivation",
      subtitle: "農具収蔵庫",
      image: "/images/tools.jpg",
      href: "/projects/tools-of-cultivation",
      description:
        "Agricultural memory, tools, labor, and cultivated civilization.",
    },
  ];

  return (
    <main className="roomsPage">
      <section className="roomsHero">
        <div className="roomsHeroInner">
          <p className="smallLabel">
            MAISON BOTANIQUE ARCHIVE
          </p>

          <h1>
            Exhibition Rooms
          </h1>

          <p className="roomsLead">
            A private archive of cultivated forms,
            botanical portraits, agricultural memory,
            and material studies.
          </p>
        </div>
      </section>

      <section className="roomsGridSection">
        <div className="roomsGrid">
          {rooms.map((room) => (
            <a
              key={room.title}
              href={room.href}
              className="roomCard"
            >
              <div className="roomImageWrap">
                <div className="roomLight" />

                <img
                  src={room.image}
                  alt={room.title}
                />
              </div>

              <div className="roomMeta">
                <p className="roomSubtitle">
                  {room.subtitle}
                </p>

                <h2>{room.title}</h2>

                <p className="roomDescription">
                  {room.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
