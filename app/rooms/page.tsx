import Image from 'next/image'
import Link from 'next/link'

type Room = {
  title: string
  subtitle: string
  image: string
  imageAlt: string
  href: string
  description: string
}

const rooms: Room[] = [
  {
    title: 'Botanical Portraits',
    subtitle: '植物肖像室',
    image: '/images/botanical.jpg',
    imageAlt: 'A cultivated fruit presented as a botanical portrait against a dark background.',
    href: '/projects/botanical-portraits',
    description:
      'Cultivated fruit presented as botanical portrait, specimen, and archive.',
  },
  {
    title: 'Portrait of Fruits',
    subtitle: '果実人物画室',
    image: '/images/portrait-fruits.jpg',
    imageAlt: 'Cultivated fruits arranged to suggest a human presence and portrait-like symbolism.',
    href: '/projects/portrait-of-fruits',
    description:
      'Human presence represented through cultivated fruits and symbolic forms.',
  },
  {
    title: 'Cultivated Forms',
    subtitle: '栽培造形室',
    image: '/images/sculptural.jpg',
    imageAlt: 'Intervened fruit forms shown as sculptural botanical objects.',
    href: '/projects/sculptural-fruit',
    description:
      'Intervened growth forms presented as sculptural botanical objects.',
  },
  {
    title: 'Breeding Archive',
    subtitle: '育種収蔵室',
    image: '/images/archive.jpg',
    imageAlt: 'Archive-like documentation of selection, disappearance, and agricultural memory.',
    href: '/projects/breeding-archive',
    description:
      'Selection, disappearance, memory, and cultivated agricultural history.',
  },
  {
    title: 'Canvas Sheet Works',
    subtitle: '素材研究室',
    image: '/images/canvas-study.jpg',
    imageAlt: 'A canvas-based print work emphasizing surface texture and material presence.',
    href: '/projects/material-studies',
    description:
      'Surface, print object, canvas texture, and material presence.',
  },
  {
    title: 'Tools of Cultivation',
    subtitle: '農具収蔵庫',
    image: '/images/tools.jpg',
    imageAlt: 'Agricultural tools presented as a record of labor, memory, and cultivation.',
    href: '/projects/tools-of-cultivation',
    description:
      'Agricultural memory, tools, labor, and cultivated civilization.',
  },
]

export default function RoomsPage() {
  return (
    <main className="roomsPage">
      <section className="roomsHero" aria-labelledby="rooms-title">
        <div className="roomsHeroInner">
          <p className="roomsLabel">MAISON BOTANIQUE ARCHIVE</p>

          <h1 id="rooms-title">Exhibition Rooms</h1>

          <p className="roomsLead">
            A private archive of cultivated forms, botanical portraits,
            agricultural memory, and material studies.
          </p>
        </div>
      </section>

      <section className="roomsGridSection" aria-label="Exhibition room list">
        <div className="roomsGrid">
          {rooms.map((room) => (
            <Link key={room.href} href={room.href} className="roomCard">
              <div className="roomImageWrap">
                <div className="roomLight" aria-hidden="true" />

                <Image
                  src={room.image}
                  alt={room.imageAlt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 33vw"
                  className="roomImage"
                />
              </div>

              <div className="roomMeta">
                <p className="roomSubtitle">{room.subtitle}</p>
                <h2>{room.title}</h2>
                <p className="roomDescription">{room.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
