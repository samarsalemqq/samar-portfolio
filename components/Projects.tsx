import { FolderKanban } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";


export default function Projects() {
  return (
    <section id="projects" className="container-site py-14 lg:py-20">
      <SectionHeading
        eyebrow="Projects"
        title="Selected Projects"
        description="A collection of mobile applications and digital products I’ve built through professional work and personal projects."
        icon={FolderKanban}
        spacing="mb-8"
      />

     <div className="flex flex-col gap-6">
  {projects
    .filter((project) => project.published)
    .map((project) => (
      <ProjectCard key={project.slug} project={project} />
    ))}
</div>
    </section>
  );
}
