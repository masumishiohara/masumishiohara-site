export const projects = [
  {
    slug: "botanical-portraits",
    number: "01",
    title: "Botanical Portraits",
    subtitle: "Fruit presented as portrait, object, and quiet presence.",
    image: "/images/botanical.jpg",
    body: "This series treats cultivated fruit as portrait, specimen, and presence. Each form is photographed not as produce, but as a rare botanical object shaped by season, light, and selection.",
  },
  {
    slug: "growth-process",
    number: "02",
    title: "Growth Process",
    subtitle: "Seasonal transformation shaped by cultivation, climate, and time.",
    image: "/images/growth.jpg",
    body: "This project follows fruit through growth, intervention, weather, and time. The work records transformation before harvest, where agricultural process becomes visual form.",
  },
  {
    slug: "sculptural-fruit",
    number: "03",
    title: "Sculptural Fruit",
    subtitle: "Forms guided by gravity, intervention, accident, and growth.",
    image: "/images/sculptural.jpg",
    body: "These works emerge through deliberate intervention in the growth of fruit. The final image preserves a form suspended between sculpture, botanical specimen, and photographic object.",
  },
  {
    slug: "vellum-prints",
    number: "04",
    title: "Vellum Prints",
    subtitle: "Botanical works printed on calf vellum as material memory.",
    image: "/images/vellum.jpg",
    body: "Printed on calf vellum, these works emphasize surface, materiality, and memory. The image becomes less a reproduction than a physical botanical trace.",
  },
  {
    slug: "breeding-archive",
    number: "05",
    title: "Breeding Archive",
    subtitle: "Selection, disappearance, and record preserved as cultivated history.",
    image: "/images/archive.jpg",
    body: "This archive records breeding selections, rejected lines, disappearance, and cultivated history. It gives visual presence to forms that would otherwise vanish from agricultural memory.",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
