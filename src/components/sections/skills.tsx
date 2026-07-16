"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/portfolio-data";
import { MonitorSmartphone, Database, Wrench } from "lucide-react";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";

const skillCategories = {
  frontend: {
    title: "Frontend",
    description: "Interfaces that feel fast and intentional",
    icon: MonitorSmartphone,
    accent: "from-primary-500 to-cyan-400",
    iconStyle: "bg-primary-50 text-primary-700 dark:bg-primary-500/10 dark:text-primary-300",
  },
  backend: {
    title: "Backend & Data",
    description: "APIs and systems built to scale",
    icon: Database,
    accent: "from-blue-600 to-cyan-400",
    iconStyle: "bg-blue-50 text-blue-700 dark:bg-blue-500/10 dark:text-blue-300",
  },
  tools: {
    title: "Tools & DevOps",
    description: "Shipping with confidence and speed",
    icon: Wrench,
    accent: "from-amber-500 to-orange-400",
    iconStyle: "bg-amber-50 text-amber-700 dark:bg-amber-500/10 dark:text-amber-300",
  },
} as const;

export function SkillsSection() {
  const getSkillsByCategory = (category: string) =>
    skills.filter((skill) => skill.category === category);

  return (
    <section
      id="skills"
      className="section-padding relative overflow-hidden border-y border-surface-border bg-surface-sunken/60 dark:border-dark-border dark:bg-dark-alt/40"
    >
      <div className="absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-primary-500/10 blur-[110px]" aria-hidden="true" />
      <div className="ambient-drift absolute -right-32 top-0 h-80 w-80 rounded-full bg-blue-500/10 blur-[110px]" aria-hidden="true" />
      <div className="container-custom">
        <motion.div
          className="mb-14 max-w-2xl"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          <motion.p variants={fadeUp} className="section-label">
            Skills
          </motion.p>
          <motion.h2 variants={fadeUp} className="section-header">
            Technical toolkit
          </motion.h2>
          <motion.p variants={fadeUp} className="section-lead">
            A focused set of tools I use to design, build, and ship production-ready
            software.
          </motion.p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-3">
          {(Object.keys(skillCategories) as Array<keyof typeof skillCategories>).map(
            (key, index) => {
              const category = skillCategories[key];
              const CategoryIcon = category.icon;

              return (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewportOnce}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="surface-card hover-lift group relative overflow-hidden p-6 sm:p-8"
                >
                  <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${category.accent}`} />
                  <div className="mb-6 flex items-start gap-4">
                    <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-transform duration-300 group-hover:-rotate-3 group-hover:scale-110 ${category.iconStyle}`}>
                      <CategoryIcon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold text-ink dark:text-white">
                        {category.title}
                      </h3>
                      <p className="mt-1 text-sm text-ink-faint dark:text-slate-500">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  <ul className="space-y-5">
                    {getSkillsByCategory(key).map((skill, sIndex) => (
                      <li key={skill.name}>
                        <div className="mb-2 flex items-center justify-between gap-3">
                          <span className="text-sm font-medium text-ink dark:text-slate-200">
                            {skill.name}
                          </span>
                          <span className="text-xs tabular-nums text-ink-faint dark:text-slate-500">
                            {skill.level}%
                          </span>
                        </div>
                        <div
                          className="h-1.5 overflow-hidden rounded-full bg-surface-border dark:bg-white/10"
                          role="progressbar"
                          aria-valuenow={skill.level}
                          aria-valuemin={0}
                          aria-valuemax={100}
                          aria-label={`${skill.name} proficiency`}
                        >
                          <motion.div
                            className={`h-full rounded-full bg-gradient-to-r ${category.accent}`}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 1,
                              ease: [0.16, 1, 0.3, 1],
                              delay: sIndex * 0.06 + 0.15,
                            }}
                          />
                        </div>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            }
          )}
        </div>

        <motion.div
          className="mt-12 flex flex-wrap gap-2"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {skills.map((skill) => (
            <span
              key={skill.name}
              className="rounded-lg border border-surface-border bg-surface-raised px-3 py-1.5 text-xs font-medium text-ink-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-primary-600/40 hover:bg-primary-50 hover:text-primary-800 hover:shadow-soft dark:border-dark-border dark:bg-dark-card dark:text-slate-400 dark:hover:border-primary-400/40 dark:hover:bg-primary-500/10 dark:hover:text-primary-200"
            >
              {skill.name}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
