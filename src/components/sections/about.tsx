"use client";

import { motion, useInView } from "framer-motion";
import { personalInfo } from "@/data/portfolio-data";
import { Coffee, GraduationCap, Calendar, Github, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { calculateYearsSince } from "@/lib/utils";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";

const AnimatedCounter = ({ value, duration = 2 }: { value: string; duration?: number }) => {
  const [count, setCount] = useState(0);
  const nodeRef = useRef(null);
  const inView = useInView(nodeRef, { once: true, margin: "-50px" });

  const numericValue = value.match(/\d+/)?.[0];
  const isNumber = Boolean(numericValue);
  const numValue = numericValue ? parseInt(numericValue, 10) : 0;
  const suffix = value.replace(/[0-9]/g, "");

  useEffect(() => {
    if (inView && isNumber) {
      let start = 0;
      const end = numValue;
      if (start === end) return;

      const totalMiliseconds = duration * 1000;
      const incrementTime = (totalMiliseconds / end) * 2;

      const timer = setInterval(() => {
        start += Math.ceil(end / 20);
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [inView, numValue, isNumber, duration]);

  return <span ref={nodeRef}>{isNumber ? `${count}${suffix}` : value}</span>;
};

const funFacts = [
  {
    icon: Calendar,
    title: "Experience",
    value: `${calculateYearsSince(2022)}+ yrs`,
    description: "Professional development",
  },
  {
    icon: Github,
    title: "My Repositories",
    value: "—",
    description: "Repos I own or contribute to",
  },
  {
    icon: Coffee,
    title: "Coffee Cups",
    value: "∞",
    description: "Fueling dev sessions",
  },
  {
    icon: GraduationCap,
    title: "Degree",
    value: "BSc CS",
    description: "Haramaya University",
  },
];

const milestones = [
  {
    year: "2026",
    title: "Engineering Excellence",
    desc: "Currently delivering high-impact solutions at GLYME TECH, where I architect high-performance web applications and robust ERP systems with 99.9% uptime for enterprise clients.",
  },
  {
    year: "2025",
    title: "The Culmination Project",
    desc: "Graduated with honors from Haramaya University, delivering a Real-time Facial Recognition Attendance System as my Final Year Project. Joined GLYME TECH full-time.",
  },
  {
    year: "2024",
    title: "Strategic Development",
    desc: "Achieved significant milestones during intensive internships, delivering community platforms and mastering full-stack workflows while maintaining peak academic performance.",
  },
  {
    year: "2023",
    title: "Academic Project Proliferation",
    desc: "Developed a diverse array of over 15+ specialized projects for university assessments, mastering various tech stacks and software engineering methodologies.",
  },
  {
    year: "2022",
    title: "The Genesis",
    desc: "Wrote my first line of code and discovered a profound passion for digital creation, setting the foundation for my engineering journey.",
  },
];

export function AboutSection({
  githubRepoCount,
}: {
  githubRepoCount: number | null;
}) {
  const displayedFacts = funFacts.map((fact) =>
    fact.title === "My Repositories" && githubRepoCount !== null
      ? { ...fact, value: `${githubRepoCount}+` }
      : fact
  );

  return (
    <section id="about" className="section-padding aurora-wash color-grid relative overflow-hidden">
      <div className="ambient-drift absolute -right-28 top-24 h-72 w-72 rounded-full bg-blue-500/10 blur-[100px]" aria-hidden="true" />
      <div className="container-custom">
        <motion.div
          className="mb-14 max-w-2xl"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          <motion.p variants={fadeUp} className="section-label">
            About
          </motion.p>
          <motion.h2 variants={fadeUp} className="section-header">
            Engineer. Builder. Problem solver.
          </motion.h2>
          <motion.p variants={fadeUp} className="section-lead">
            A Computer Science graduate passionate about crafting reliable products and
            thoughtful user experiences.
          </motion.p>
        </motion.div>

        <div className="mb-20 grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="space-y-5 text-base leading-relaxed text-ink-muted dark:text-slate-400 sm:text-lg">
              <p>
                Hello! I&apos;m{" "}
                <span className="font-semibold text-ink dark:text-white">
                  {personalInfo.name}
                </span>
                , a software engineer and full-stack developer with a Bachelor&apos;s degree
                in Computer Science from Haramaya University. My academic path built a
                strong foundation in software engineering fundamentals.
              </p>
              <p>
                I specialize in{" "}
                <span className="font-medium text-ink dark:text-slate-200">
                  React, Next.js, TypeScript, and Tailwind CSS
                </span>{" "}
                on the frontend, and{" "}
                <span className="font-medium text-ink dark:text-slate-200">
                  NestJS, Node.js, and PostgreSQL
                </span>{" "}
                for robust, scalable backends.
              </p>
              <p>
                Whether architecting complex systems or refining subtle UI details, I
                approach every challenge with curiosity and a commitment to engineering
                excellence.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 gap-4 lg:col-span-5"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {displayedFacts.map((fact) => (
              <motion.div
                key={fact.title}
                variants={fadeUp}
                className="surface-card hover-lift group relative overflow-hidden p-5 sm:p-6"
              >
                <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-primary-500 via-blue-500 to-amber-400 transition-transform duration-500 ease-premium group-hover:scale-x-100" />
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-primary-50 text-primary-700 transition-all duration-300 group-hover:rotate-3 group-hover:scale-110 group-hover:bg-primary-600 group-hover:text-white dark:bg-primary-500/10 dark:text-primary-300 dark:group-hover:bg-primary-400 dark:group-hover:text-ink">
                  <fact.icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <p className="font-display text-2xl font-bold text-ink dark:text-white sm:text-3xl">
                  <AnimatedCounter value={fact.value} />
                </p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-primary-700 dark:text-primary-400">
                  {fact.title}
                </p>
                <p className="mt-1 text-xs text-ink-faint dark:text-slate-500">
                  {fact.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="relative py-6 sm:py-8">
          <motion.div
            className="mx-auto mb-10 max-w-2xl text-center"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
          >
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary-600/20 bg-primary-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-primary-800 dark:border-primary-400/20 dark:bg-primary-500/10 dark:text-primary-300">
              <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
              The journey so far
            </span>
            <h3 className="font-display text-3xl font-bold tracking-tight text-ink dark:text-white sm:text-4xl">
              Milestones along a winding path
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-muted dark:text-slate-400 sm:text-base">
              Every turn added a new skill, a harder challenge, and a clearer sense of
              the engineer I want to become.
            </p>
          </motion.div>

          {/* Animated winding path */}
          <svg
            className="pointer-events-none absolute left-1/2 top-56 hidden h-[calc(100%_-_17rem)] w-[26rem] -translate-x-1/2 overflow-visible md:block"
            viewBox="0 0 440 1000"
            preserveAspectRatio="none"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M220 0 C410 80 410 180 220 245 C30 310 30 430 220 500 C410 570 410 690 220 755 C30 820 30 920 220 1000"
              stroke="currentColor"
              className="text-surface-border dark:text-white/10"
              strokeWidth="18"
              strokeLinecap="round"
              opacity="0.65"
            />
            <motion.path
              d="M220 0 C410 80 410 180 220 245 C30 310 30 430 220 500 C410 570 410 690 220 755 C30 820 30 920 220 1000"
              stroke="url(#milestone-gradient)"
              strokeWidth="4"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
            />
            <defs>
              <linearGradient id="milestone-gradient" x1="220" y1="0" x2="220" y2="1000">
                <stop stopColor="#14b8a6" />
                <stop offset="0.5" stopColor="#2563eb" />
                <stop offset="1" stopColor="#f59e0b" />
              </linearGradient>
            </defs>
          </svg>

          {/* Mobile path */}
          <div
            className="absolute bottom-10 left-5 top-56 w-px bg-gradient-to-b from-primary-500 via-blue-500 to-amber-400 md:hidden"
            aria-hidden="true"
          />

          <ol className="relative space-y-8 md:space-y-10 lg:space-y-12">
            {milestones.map((item, index) => {
              const isLeft = index % 2 === 0;

              return (
                <motion.li
                  key={item.year}
                  className={`group relative flex pl-12 md:pl-0 ${
                    isLeft ? "md:justify-start" : "md:justify-end"
                  }`}
                  initial={{ opacity: 0, x: isLeft ? -35 : 35, y: 20 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{
                    duration: 0.65,
                    delay: index * 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  {/* Path node */}
                  <motion.span
                    className="absolute left-5 top-8 z-20 flex h-5 w-5 -translate-x-1/2 items-center justify-center rounded-full border-4 border-surface bg-primary-600 shadow-[0_0_0_6px_rgba(13,148,136,0.12)] transition-all duration-500 group-hover:scale-150 group-hover:bg-amber-400 group-hover:shadow-[0_0_0_10px_rgba(245,158,11,0.16)] dark:border-dark dark:bg-primary-400 md:left-1/2 md:h-6 md:w-6"
                    whileHover={{ rotate: 180 }}
                    aria-hidden="true"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-white dark:bg-ink" />
                  </motion.span>

                  {/* Connector */}
                  <span
                    className={`absolute top-[2.45rem] hidden h-px w-[7%] origin-center bg-gradient-to-r from-primary-500 to-blue-500 transition-all duration-500 group-hover:w-[10%] md:block ${
                      isLeft ? "left-[43%]" : "right-[43%]"
                    }`}
                    aria-hidden="true"
                  />

                  <motion.article
                    whileHover={{
                      y: -10,
                      rotate: isLeft ? -1.2 : 1.2,
                      scale: 1.015,
                    }}
                    transition={{ type: "spring", stiffness: 280, damping: 20 }}
                    className="relative w-full overflow-hidden rounded-2xl border border-surface-border bg-surface-raised p-6 shadow-soft transition-colors duration-500 group-hover:border-primary-600/40 group-hover:shadow-[0_24px_55px_-24px_rgba(13,148,136,0.45)] dark:border-dark-border dark:bg-dark-card dark:group-hover:border-primary-400/40 sm:p-7 md:w-[43%]"
                  >
                    <div
                      className={`absolute inset-y-0 w-1 bg-gradient-to-b ${
                        index % 3 === 0
                          ? "from-primary-400 to-primary-700"
                          : index % 3 === 1
                            ? "from-blue-400 to-blue-700"
                            : "from-amber-400 to-orange-600"
                      } ${isLeft ? "right-0" : "left-0"}`}
                    />
                    <div className="absolute -right-12 -top-12 h-28 w-28 rounded-full bg-primary-500/5 blur-2xl transition-all duration-500 group-hover:scale-150 group-hover:bg-primary-500/15" />

                    <div className="relative flex items-start justify-between gap-4">
                      <div>
                        <span className="inline-block font-display text-4xl font-bold leading-none text-primary-600/20 transition-all duration-500 group-hover:translate-x-1 group-hover:text-primary-600 dark:text-primary-400/20 dark:group-hover:text-primary-300">
                          {item.year}
                        </span>
                        <h4 className="mt-3 font-display text-lg font-bold text-ink transition-colors duration-300 group-hover:text-primary-700 dark:text-white dark:group-hover:text-primary-300 sm:text-xl">
                          {item.title}
                        </h4>
                      </div>
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-surface-sunken text-xs font-bold text-ink-faint transition-all duration-500 group-hover:rotate-[360deg] group-hover:bg-primary-600 group-hover:text-white dark:bg-white/5 dark:text-slate-500 dark:group-hover:bg-primary-400 dark:group-hover:text-ink">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <p className="relative mt-4 text-sm leading-relaxed text-ink-muted dark:text-slate-400 sm:text-base">
                      {item.desc}
                    </p>
                    <div className="relative mt-5 h-0.5 w-10 bg-primary-600 transition-all duration-500 group-hover:w-full dark:bg-primary-400" />
                  </motion.article>
                </motion.li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
