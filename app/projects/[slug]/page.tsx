import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";

import TechBadge from "@/components/TechBadge";
import { getProjectBySlug, projects } from "@/data/projects";

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export function generateMetadata({
  params,
}: ProjectPageProps): Metadata {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    return {
      title: "Project not found",
    };
  }

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [project.cover],
    },
  };
}

export default function ProjectPage({
  params,
}: ProjectPageProps) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  const heroImage =
    project.overviewImage ?? project.cover;

  const roleImage =
    project.roleImage ?? project.cover;

  const hasGithubLink =
    Boolean(project.links.github) &&
    project.links.github !== "#";

  const hasLiveLink =
    Boolean(project.links.live) &&
    project.links.live !== "#";

  return (
    <article>
      {/* Header */}
      <div className="mx-auto max-w-5xl px-6 pt-10">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm font-medium text-gray-400 transition-colors hover:text-white"
        >
          <ArrowLeft
            size={16}
            aria-hidden="true"
          />
          Back to projects
        </Link>

        <header className="mt-8 max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-widest text-accent-light">
            {project.category}
          </p>

          <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight text-white sm:text-6xl">
            {project.title}
          </h1>

          <span className="mt-5 inline-block rounded-full border border-charcoal-border px-3 py-1 text-xs text-gray-400">
            {project.status}
          </span>
        </header>

        {/* Main project image */}
        <div className="relative mt-10 aspect-[16/9] w-full overflow-hidden rounded-3xl border border-charcoal-border bg-charcoal-light">
          <Image
            src={heroImage}
            alt={`${project.title} project presentation`}
            fill
            priority
            sizes="(min-width: 1024px) 960px, 100vw"
            className="object-cover"
          />
        </div>

        {/* Actions and technology stack */}
        <div className="mt-7 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          {(hasGithubLink || hasLiveLink) && (
            <div className="flex flex-wrap gap-3">
              {hasGithubLink && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 rounded-full border border-charcoal-border bg-charcoal-light px-5 py-2.5 text-sm font-medium text-white transition-colors hover:border-accent/50 hover:bg-charcoal-lighter"
                >
                  <Github
                    size={16}
                    aria-hidden="true"
                  />
                  View Code
                </a>
              )}

              {hasLiveLink && (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-dark"
                >
                  <ExternalLink
                    size={16}
                    aria-hidden="true"
                  />
                   App Store
                </a>
              )}
            </div>
          )}

          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <TechBadge
                key={tech}
                name={tech}
                size="md"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Project content */}
      <div className="mx-auto mt-16 max-w-5xl space-y-20 px-6 sm:mt-20 sm:space-y-24">
        {/* Overview */}
        <section className="max-w-3xl">
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Overview
          </h2>

          <p className="mt-4 leading-relaxed text-gray-400">
            {project.overview}
          </p>
        </section>

    
        {/* My role */}
        <section className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-3xl border border-charcoal-border bg-charcoal-light">
            <Image
              src={roleImage}
              alt={`${project.title} architecture and implementation`}
              fill
              sizes="(min-width: 1024px) 480px, 100vw"
              className="object-contain p-3"
            />
          </div>

          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              My Role
            </h2>

            <p className="mt-2 text-sm font-medium text-accent-light">
              {project.roleTitle}
            </p>

            <p className="mt-4 leading-relaxed text-gray-400">
              {project.role}
            </p>
          </div>
        </section>

        {/* Key features */}
        <section>
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Key Features
          </h2>

          <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {project.features.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-3 rounded-2xl border border-charcoal-border bg-charcoal-light p-4 leading-relaxed text-gray-300"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                {feature}
              </li>
            ))}
          </ul>
        </section>

        {/* Challenges and learnings */}
        <section className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-14">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Challenges
            </h2>

            <p className="mt-4 leading-relaxed text-gray-400">
              {project.challenges}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              What I Learned
            </h2>

            <p className="mt-4 leading-relaxed text-gray-400">
              {project.learnings}
            </p>
          </div>
        </section>

        {/* Gallery */}
        {project.gallery.length > 0 && (
          <section>
            <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Gallery
            </h2>

            <div className="mt-8 flex flex-wrap justify-center gap-8">
              {project.gallery.map(
                (src, index) => (
                  <div
                    key={src}
                    className="relative aspect-[9/19] w-[260px] overflow-hidden rounded-[32px] border border-charcoal-border bg-charcoal-light shadow-xl transition-transform duration-300 hover:-translate-y-2 sm:w-[280px]"
                  >
                    <Image
                      src={src}
                      alt={`${project.title} screenshot ${index + 1}`}
                      fill
                      sizes="280px"
                      className="object-cover"
                    />
                  </div>
                ),
              )}
            </div>
          </section>
        )}
      </div>

      <div className="h-24 sm:h-32" />
    </article>
  );
}