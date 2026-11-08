import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { localizeProject } from "@/data/projects.ar";
import { getDictionary, getLang } from "@/lib/preferences";

export default function Projects() {
  const t = getDictionary();
  const lang = getLang();

  return (
    <section id="projects" className="container-site py-14 lg:py-20">
      <SectionHeading title={t.projects.title} description={t.projects.description} />

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        {projects
          .filter((project) => project.published)
          .map((project) => (
            // The reveal sits on a wrapper so it doesn't fight the card's own transitions.
            <div key={project.slug} data-reveal>
              <ProjectCard project={localizeProject(project, lang)} />
            </div>
          ))}
      </div>
    </section>
  );
}
