const projects = [
  {
    slug: "grown-form",
    title: "Grown Form",
    year: "2026",
    coverImage: "/images/grown-form/cover.jpg",
    description: "Works formed through intervention in the growth of fruit."
  },
  {
    slug: "breeding-records",
    title: "Breeding Records",
    year: "2026",
    coverImage: "/images/breeding-records/cover.jpg",
    description: "Selections, eliminations, and archival traces from grape breeding."
  },
  {
    slug: "fruit-still-life",
    title: "Fruit Still Life",
    year: "2026",
    coverImage: "/images/fruit-still-life/cover.jpg",
    description: "Still life works exploring form, texture, and temporality."
  }
];

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen font-sans selection:bg-white selection:text-black">
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="tracking-[0.25em] text-xs uppercase text-white/90">Masumi Shiohara</div>
          <nav className="hidden md:flex gap-10 text-xs uppercase tracking-[0.2em] text-white/50">
            <a href="#projects" className="hover:text-white transition">Projects</a>
            <a href="#about" className="hover:text-white transition">About</a>
            <a href="#news" className="hover:text-white transition">News</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </nav>
        </div>
      </header>

      <section className="relative h-screen flex items-center overflow-hidden bg-black">
        <img src="/images/home/hero-black-grape.jpg" alt="Masumi Shiohara work" className="absolute inset-0 w-full h-full object-cover object-right opacity-95" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-xl pt-24 md:pt-0">
            <p className="text-white/40 uppercase tracking-[0.35em] text-[10px] md:text-xs mb-8">Official Archive</p>
            <h1 className="text-5xl md:text-8xl font-extralight tracking-tight leading-none mb-10">Masumi Shiohara</h1>
            <p className="max-w-md text-sm md:text-base leading-relaxed text-white/60">
              Fruit, Cultivation, Breeding, and Photography.<br />
              An archive of works formed through growth, intervention, and time.
            </p>
            <div className="mt-16">
              <a href="#projects" className="inline-block border border-white/20 px-7 py-3 rounded-full text-xs uppercase tracking-[0.2em] hover:bg-white hover:text-black transition duration-500">Enter Archive</a>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-40 border-t border-white/5">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <p className="text-sm uppercase tracking-[0.25em] text-white/30">Statement</p>
          <p className="text-3xl md:text-5xl leading-tight font-extralight text-white/90">
            Alongside agricultural work and grape breeding, fruit is shaped through processes of growth and intervention, then recorded as photographic works.
          </p>
        </div>
      </section>

      <section id="projects" className="max-w-7xl mx-auto px-6 pb-40">
        <div className="mb-20">
          <p className="text-sm uppercase tracking-[0.25em] text-white/30">Projects</p>
        </div>
        <div className="space-y-36">
          {projects.map((project, index) => (
            <div key={project.slug} className="grid md:grid-cols-2 gap-12 items-center">
              <div className={`${index % 2 === 1 ? "md:order-2" : ""} overflow-hidden rounded-[2rem] bg-white/[0.03] border border-white/5`}>
                <img src={project.coverImage} alt={project.title} className="w-full h-[560px] md:h-[700px] object-cover hover:scale-[1.02] transition duration-[2200ms]" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-white/30 mb-5">{project.year}</p>
                <h2 className="text-5xl md:text-6xl font-extralight mb-10 tracking-tight leading-none">{project.title}</h2>
                <p className="text-white/50 leading-relaxed mb-12 max-w-md text-sm">{project.description}</p>
                <a href={`#${project.slug}`} className="inline-block border border-white/10 px-6 py-3 rounded-full text-xs uppercase tracking-[0.2em] hover:bg-white hover:text-black transition duration-500">View Project</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="bg-white/[0.02] border-y border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-32 grid md:grid-cols-2 gap-20">
          <p className="text-sm uppercase tracking-[0.25em] text-white/30">About</p>
          <div>
            <p className="text-3xl leading-relaxed font-extralight mb-12 text-white/90">
              Masumi Shiohara is a Japanese fruit grower, grape breeder, and photographer whose work explores the relationship between cultivation, intervention, and photographic representation.
            </p>
            <div className="space-y-5 text-white/45 text-sm leading-relaxed uppercase tracking-[0.15em]">
              <p>Photoville</p><p>Arte Laguna Prize</p><p>KEW Gardens</p><p>Karuizawa Photo Fest</p><p>Photo book forthcoming</p>
            </div>
          </div>
        </div>
      </section>

      <section id="news" className="max-w-6xl mx-auto px-6 py-32">
        <div className="mb-20">
          <p className="text-sm uppercase tracking-[0.25em] text-white/30">News / Exhibitions</p>
        </div>
        <div className="space-y-10 border-t border-white/10">
          {[{ title: "Karuizawa Photo Fest 2026", date: "May 2026" }, { title: "Photo Book Forthcoming", date: "2026" }, { title: "International Exhibition Archive", date: "Ongoing" }].map((item) => (
            <div key={item.title} className="flex flex-col md:flex-row md:items-center justify-between py-8 border-b border-white/10">
              <h3 className="text-3xl font-extralight mb-3 md:mb-0 tracking-tight">{item.title}</h3>
              <p className="text-white/35 text-xs uppercase tracking-[0.2em]">{item.date}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="bg-black text-white px-6 py-40 border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-white/30 mb-8">Contact</p>
          <h2 className="text-5xl md:text-7xl font-extralight tracking-tight mb-14 leading-none">For exhibitions,<br />publications, and inquiries.</h2>
          <a href="mailto:contact@masumishiohara.com" className="inline-block border border-white/15 px-8 py-4 rounded-full text-xs uppercase tracking-[0.25em] hover:bg-white hover:text-black transition duration-500">Contact</a>
        </div>
      </section>
    </main>
  );
}
