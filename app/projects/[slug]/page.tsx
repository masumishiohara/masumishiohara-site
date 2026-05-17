import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects } from "../../project-data";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = getProject(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <main>
      <section className="projectDetailHero">
        <Link href="/" className="backLink">
          ← Masumi Shiohara
        </Link>

        <p className="smallLabel">Collection {project.number}</p>

        <h1>{project.title}</h1>

        <p className="projectDetailLead">{project.subtitle}</p>
      </section>

      <section className="projectDetailImageSection">
        <div className="projectDetailImageFrame">
          <div className="rembrandtLight" />
          <img src={project.image} alt={project.title} />
        </div>
      </section>

      <section className="projectDetailText">
        <p>{project.body}</p>

        <Link href="/" className="collectionLink">
          Back to Collections
        </Link>
      </section>
    </main>
  );
}
