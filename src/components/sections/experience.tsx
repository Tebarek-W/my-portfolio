"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { experiences } from "@/data/portfolio-data";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { useRef } from "react";
import { cn } from "@/lib/utils";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";

export function ExperienceSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      id="experience"
      className="section-padding relative overflow-hidden border-y border-surface-border bg-surface-sunken/60 dark:border-dark-border dark:bg-dark-alt/40"
    >
      <div className="absolute -left-24 top-1/4 h-72 w-72 rounded-full bg-blue-500/10 blur-[110px]" aria-hidden="true" />
      <div className="ambient-drift absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-primary-500/10 blur-[110px]" aria-hidden="true" />
      <div className="container-custom" ref={containerRef}>
        <motion.div
          className="mb-16 max-w-2xl"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          <motion.p variants={fadeUp} className="section-label">
            Experience
          </motion.p>
          <motion.h2 variants={fadeUp} className="section-header">
            Where I&apos;ve built
          </motion.h2>
          <motion.p variants={fadeUp} className="section-lead">
            Roles focused on shipping reliable systems and elevating product quality.
          </motion.p>
        </motion.div>

        <div className="relative mx-auto max-w-3xl">
          <div className="absolute bottom-0 left-4 top-0 w-px bg-surface-border dark:bg-dark-border sm:left-6">
            <motion.div
              className="absolute left-0 top-0 w-full origin-top bg-primary-600 dark:bg-primary-400"
              style={{ height: lineHeight }}
            />
          </div>

          <div className="space-y-10">
            {experiences.map((job, index) => (
              <ExperienceCard key={`${job.company}-${index}`} job={job} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const ExperienceCard = ({
  job,
  index,
}: {
  job: (typeof experiences)[0];
  index: number;
}) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="relative pl-12 sm:pl-16"
    >
      <div className="absolute left-0 top-6 flex h-8 w-8 items-center justify-center rounded-full border border-surface-border bg-surface-raised text-primary-700 shadow-soft dark:border-dark-border dark:bg-dark-card dark:text-primary-300 sm:left-2 sm:h-9 sm:w-9">
        <Briefcase className="h-3.5 w-3.5" aria-hidden="true" />
      </div>

      <div className="surface-card hover-lift group relative overflow-hidden p-6 sm:p-8">
        <div className="absolute bottom-0 left-0 top-0 w-1 origin-top scale-y-0 bg-gradient-to-b from-primary-500 to-blue-500 transition-transform duration-500 group-hover:scale-y-100" />
        <div className="mb-4 flex flex-wrap gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-lg bg-primary-50 px-2.5 py-1 text-xs font-medium text-primary-800 dark:bg-primary-500/10 dark:text-primary-300">
            <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
            {job.duration}
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-lg bg-surface-sunken px-2.5 py-1 text-xs font-medium text-ink-muted dark:bg-white/5 dark:text-slate-400">
            <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
            {job.location}
          </span>
        </div>

        <h3 className="font-display text-xl font-bold tracking-tight text-ink transition-colors group-hover:text-primary-700 dark:text-white dark:group-hover:text-primary-300 sm:text-2xl">
          {job.title}
        </h3>
        <p className="mt-1 text-base font-medium text-ink-muted dark:text-slate-400">
          {job.company}
        </p>

        <ul className="mt-6 space-y-3">
          {job.description.map((desc, i) => (
            <li
              key={i}
              className={cn(
                "relative pl-4 text-sm leading-relaxed text-ink-muted dark:text-slate-400",
                "before:absolute before:left-0 before:top-[0.55em] before:h-1 before:w-1 before:rounded-full before:bg-primary-600 dark:before:bg-primary-400"
              )}
            >
              {desc}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-1.5 border-t border-surface-border pt-5 dark:border-dark-border">
          {job.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-md bg-surface-sunken px-2 py-1 text-[11px] font-medium text-ink-muted dark:bg-white/5 dark:text-slate-400"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
};
