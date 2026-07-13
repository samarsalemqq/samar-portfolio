import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import { projects, getProjectBySlug } from "@/data/projects";
import TechBadge from "@/components/TechBadge";

interface ProjectPageProps {
  params: { slug: string };
}

// Pre-render one page per project at build time.
export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

// Per-project SEO metadata (title/description shown in search results and link previews).
export function generateMetadata({ params }: ProjectPageProps): Metadata {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    return { title: "Project not found" };
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

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug);

  // Show Next.js's 404 page for unknown slugs instead of crashing.
  if (!project) {
    notFound();
  }

  // Gallery images used to break up text sections below. Falls back to the
  // cover image if a project has fewer screenshots than we'd like to show.
  const [sideImageOne, sideImageTwo] = project.gallery;
  const imageOne = sideImageOne ?? project.cover;
  const imageTwo = sideImageTwo ?? project.cover;

  return (
    <article>
      {/* Large hero image, full-bleed within the page container */}
      <div className="mx-auto max-w-5xl px-6 pt-10">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm font-medium text-gray-400 transition-colors hover:text-white"
        >
          <ArrowLeft size={16} aria-hidden="true" />
          Back to projects
        </Link>

        <header className="mt-8 max-w-2xl">
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

        <div className="relative mt-10 aspect-[16/9] w-full overflow-hidden rounded-3xl border border-charcoal-border bg-charcoal-light sm:mt-12">
          <Image
            src={project.cover}
            alt={`${project.title} cover`}
            fill
            sizes="(min-width: 1024px) 960px, 100vw"
            className="object-cover"
            priority
          />
        </div>

        {/* CTA buttons + tech stack */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-6">
          <div className="flex flex-wrap gap-3">
            <a
              href={project.links.github}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-full border border-charcoal-border bg-charcoal-light px-5 py-2.5 text-sm font-medium text-white transition-colors hover:border-accent/50 hover:bg-charcoal-lighter"
            >
              <Github size={16} aria-hidden="true" />
              View Code
            </a>
            <a
              href={project.links.live}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-dark"
            >
              <ExternalLink size={16} aria-hidden="true" />
              Live / App Store
            </a>
          </div>

          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <TechBadge key={tech} name={tech} size="md" />
            ))}
          </div>
        </div>
      </div>

      {/* Alternating image/text sections, Apple-product-page style */}
      <div className="mx-auto mt-20 max-w-5xl space-y-20 px-6 sm:mt-28 sm:space-y-28">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Overview
            </h2>
            <p className="mt-4 leading-relaxed text-gray-400">{project.overview}</p>
          </div>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-charcoal-border bg-charcoal-light">
            <Image
              src={imageOne}
              alt={`${project.title} screenshot`}
              fill
              sizes="(min-width: 1024px) 480px, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        {/* Problem + Solution */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              The Problem
            </h2>
            <p className="mt-4 leading-relaxed text-gray-400">{project.problem}</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              The Solution
            </h2>
            <p className="mt-4 leading-relaxed text-gray-400">{project.solution}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-charcoal-border bg-charcoal-light lg:order-1">
            <Image
              src={imageTwo}
              alt={`${project.title} screenshot`}
              fill
              sizes="(min-width: 1024px) 480px, 100vw"
              className="object-cover"
            />
          </div>
          <div className="lg:order-2">
            <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              My Role
            </h2>
            <p className="mt-2 text-sm font-medium text-accent-light">{project.roleTitle}</p>
            <p className="mt-4 leading-relaxed text-gray-400">{project.role}</p>
          </div>
        </div>

        {/* Key Features */}
        <div>
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
        </div>

        {/* Challenges + What I Learned */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Challenges
            </h2>
            <p className="mt-4 leading-relaxed text-gray-400">{project.challenges}</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              What I Learned
            </h2>
            <p className="mt-4 leading-relaxed text-gray-400">{project.learnings}</p>
          </div>
        </div>

        {/* Full screenshot gallery */}
        {project.gallery.length > 0 ? (
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Gallery
            </h2>
            <div className="mt-8 flex flex-wrap justify-center gap-8">
  {project.gallery.map((src, index) => (
    <div
      key={src}
      className="relative w-[280px] aspect-[9/19] overflow-hidden rounded-[32px] border border-charcoal-border bg-charcoal-light shadow-xl transition-transform duration-300 hover:-translate-y-2"
    >
      <Image
        src={src}
        alt={`${project.title} screenshot ${index + 1}`}
        fill
        className="object-cover"
      />
    </div>
  ))}
</div>
          </div>
        ) : null}
      </div>

      <div className="h-24 sm:h-32" />
    </article>
  );
}
