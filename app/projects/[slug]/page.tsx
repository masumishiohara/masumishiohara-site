import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects } from "../../project-data";

export default function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = getProject(params.slug);

  if (!project) {
    notFound();
  }

  const related = projects.filter(
    (p) => p.slug !== project.slug
  );

  return (
    <main className="projectLuxuryPage">

      <div className="projectTopBar">
        <Link href="/" className="backLink">
          ← MASUMI SHIOHARA
        </Link>

        <span className="collectionIndex">
          COLLECTION {project.number}
        </span>
      </div>

      <section className="projectHero">
        <div className="projectHeroGrid">

          <div className="projectHeroText">
            <p className="smallLabel">
              BOTANICAL ARCHIVE
            </p>

            <h1>{project.title}</h1>

            <p className="projectLead">
              {project.subtitle}
            </p>

            <div className="projectBody">
              {project.body}
            </div>
          </div>

          <div className="projectHeroImageFrame">
            <div className="rembrandtLight" />
            <div className="heroGoldMist" />
            <div className="heroGreenMist" />

            <img
              src={project.image}
              alt={project.title}
            />
          </div>

        </div>
      </section>

      <section className="relatedArchive reveal">
        <div className="archiveHeader">
          <p className="smallLabel">
            RELATED COLLECTIONS
          </p>
        </div>

        <div className="archiveStrip">
          {related.map((item) => (
            <Link
              href={`/projects/${item.slug}`}
              className="archiveCard"
              key={item.slug}
            >
              <div className="archiveImageFrame">
                <img
                  src={item.image}
                  alt={item.title}
                />
              </div>

              <div className="archiveMeta">
                <span>{item.number}</span>

                <h3>{item.title}</h3>

                <p>{item.subtitle}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

    </main>
  );
}
