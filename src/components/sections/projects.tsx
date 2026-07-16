"use client";

import { motion, useInView } from "framer-motion";
import { Project } from "@/types/portfolio";
import { projects } from "@/data/portfolio-data";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ArrowUpRight, Layers3, RotateCw } from "lucide-react";
import Image from "next/image";
import Magnetic from "@/components/ui/magnetic";
import { useState, useRef } from "react";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";

const ProjectCard = ({
  project,
  index,
  handleAction,
}: {
  project: Project;
  index: number;
  handleAction: (p: Project, t: "github" | "live") => void;
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-80px" });

  const hasLiveDemo = project.liveUrl && project.liveUrl !== "#";
  const hasGitHubRepo = project.githubUrl && project.githubUrl !== "#";

  return (
    <motion.article
      ref={cardRef}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ duration: 0.55, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
      className="group relative h-[33rem] cursor-pointer rounded-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_28px_70px_-25px_rgba(13,148,136,0.5)]"
      style={{ perspective: 1400 }}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={() => setIsFlipped((current) => !current)}
    >
      <motion.div
        className="relative h-full w-full"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ type: "spring", stiffness: 180, damping: 22 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front face */}
        <div
          className="absolute inset-0 flex flex-col overflow-hidden rounded-2xl border border-surface-border bg-surface-raised dark:border-dark-border dark:bg-dark-card"
          style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
          aria-hidden={isFlipped}
        >
          <div className="relative aspect-[16/10] overflow-hidden bg-surface-sunken dark:bg-dark-alt">
            {!imageLoaded && (
              <div className="absolute inset-0 animate-pulse bg-surface-border/60 dark:bg-white/5" />
            )}
            <Image
              src={project.image}
              alt={project.title}
              fill
              className={`object-cover transition-transform duration-700 ease-premium group-hover:scale-110 ${
                imageLoaded ? "opacity-100" : "opacity-0"
              }`}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              quality={90}
              priority={index < 2}
              onLoad={() => setImageLoaded(true)}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
            <div className="absolute left-4 top-4">
              <span className="rounded-md bg-primary-500/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
                {project.technologies[0]}
              </span>
            </div>
            <span className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-md transition-transform duration-500 group-hover:rotate-180 group-hover:bg-primary-500">
              <RotateCw className="h-4 w-4" aria-hidden="true" />
            </span>
          </div>

          <div className="flex flex-1 flex-col p-6 sm:p-7">
            <div className="mb-3 flex items-start justify-between gap-3">
              <h3 className="font-display text-xl font-bold tracking-tight text-ink dark:text-white">
                {project.title}
              </h3>
              <span className="shrink-0 font-display text-sm font-medium text-ink-faint dark:text-slate-600">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
            <p className="line-clamp-3 text-sm leading-relaxed text-ink-muted dark:text-slate-400">
              {project.description}
            </p>
            <div className="mt-auto flex items-center justify-between border-t border-surface-border pt-5 dark:border-dark-border">
              <button
                type="button"
                tabIndex={isFlipped ? -1 : 0}
                onClick={(event) => {
                  event.stopPropagation();
                  setIsFlipped(true);
                }}
                className="inline-flex items-center gap-2 rounded-lg text-xs font-bold uppercase tracking-[0.15em] text-primary-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2 dark:text-primary-400"
              >
                <Layers3 className="h-4 w-4" aria-hidden="true" />
                View details
              </button>
              <ArrowUpRight className="h-4 w-4 text-ink-faint transition-transform duration-300 group-hover:rotate-45 dark:text-slate-500" />
            </div>
          </div>
        </div>

        {/* Back face */}
        <div
          className="absolute inset-0 flex flex-col overflow-y-auto rounded-2xl border border-primary-500/30 bg-[#071318] p-6 text-white shadow-[0_24px_70px_-25px_rgba(13,148,136,0.65)] sm:p-7"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
          aria-hidden={!isFlipped}
        >
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary-400/20 blur-[80px]" />
          <div className="pointer-events-none absolute -bottom-24 -left-16 h-60 w-60 rounded-full bg-blue-500/15 blur-[80px]" />
          <div className="color-grid pointer-events-none absolute inset-0 opacity-20" />

          <div className="relative z-10 flex min-h-full flex-col">
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary-300">
                  Project details
                </span>
                <h3 className="mt-2 font-display text-2xl font-bold tracking-tight">
                  {project.title}
                </h3>
              </div>
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/5">
                <RotateCw className="h-4 w-4" aria-hidden="true" />
              </span>
            </div>

            <p className="mt-5 text-sm leading-relaxed text-white/65">
              {project.longDescription}
            </p>

            <div className="mt-6">
              <p className="mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-white/45">
                <Layers3 className="h-4 w-4 text-primary-300" aria-hidden="true" />
                Technology stack
              </p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isFlipped ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ delay: isFlipped ? techIndex * 0.035 + 0.15 : 0 }}
                    className="rounded-lg border border-primary-300/15 bg-primary-300/10 px-2.5 py-1.5 text-xs font-medium text-primary-100"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>

            <div className="mt-auto flex flex-wrap gap-2 border-t border-white/10 pt-5">
              {hasLiveDemo && (
                <Button
                  size="sm"
                  tabIndex={isFlipped ? 0 : -1}
                  onClick={(event) => {
                    event.stopPropagation();
                    handleAction(project, "live");
                  }}
                  className="bg-primary-300 text-ink hover:bg-white dark:bg-primary-300"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  Live preview
                </Button>
              )}
              {hasGitHubRepo && (
                <Button
                  size="sm"
                  variant="outline"
                  tabIndex={isFlipped ? 0 : -1}
                  onClick={(event) => {
                    event.stopPropagation();
                    handleAction(project, "github");
                  }}
                  className="border-white/20 text-white hover:border-white/40 hover:bg-white/10 dark:border-white/20 dark:text-white"
                >
                  <Github className="h-3.5 w-3.5" />
                  Source code
                </Button>
              )}
              {!hasLiveDemo && !hasGitHubRepo && (
                <span className="text-xs text-white/45">Case study coming soon</span>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.article>
  );
};

export function ProjectsSection() {
  const featuredProjects = projects.filter((project) => project.featured);

  const handleProjectAction = (project: Project, type: "github" | "live") => {
    if (type === "github" && project.githubUrl && project.githubUrl !== "#") {
      window.open(project.githubUrl, "_blank");
    } else if (type === "live" && project.liveUrl && project.liveUrl !== "#") {
      window.open(project.liveUrl, "_blank");
    }
  };

  return (
    <section id="projects" className="section-padding aurora-wash relative overflow-hidden">
      <div className="color-grid pointer-events-none absolute inset-0 opacity-50" aria-hidden="true" />
      <div className="ambient-drift absolute -right-24 top-1/3 h-72 w-72 rounded-full bg-amber-400/10 blur-[100px]" aria-hidden="true" />
      <div className="container-custom relative z-10">
        <motion.div
          className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          <div className="max-w-2xl">
            <motion.p variants={fadeUp} className="section-label">
              Work
            </motion.p>
            <motion.h2 variants={fadeUp} className="section-header">
              Selected projects
            </motion.h2>
            <motion.p variants={fadeUp} className="section-lead">
              Products and systems where clean architecture meets thoughtful design.
            </motion.p>
          </div>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              handleAction={handleProjectAction}
            />
          ))}
        </div>

        <motion.div
          className="mt-14 text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
        >
          <Magnetic>
            <Button
              variant="outline"
              size="lg"
              onClick={() => window.open("https://github.com/Tebarek-W", "_blank")}
            >
              View more on GitHub
              <Github className="h-4 w-4" />
            </Button>
          </Magnetic>
        </motion.div>
      </div>
    </section>
  );
}
