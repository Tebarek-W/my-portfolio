"use client";

import { motion } from "framer-motion";
import { experiences } from "@/data/portfolio-data";

export function ExperienceSection() {
  return (
    <section id="experience" className="section-padding bg-slate-50 dark:bg-[#08080a] relative overflow-hidden">
      <div className="container-custom relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
            Professional <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-sans">
            My career highlights and the places I&apos;ve contributed my skills.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card group overflow-hidden rounded-[2rem] border border-white/10"
              >
                <div className="p-8 md:p-10 flex flex-col md:flex-row gap-8 items-start">
                  {/* Left: Company Logo/Initials */}
                  <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-primary-500 to-accent-violet rounded-3xl flex items-center justify-center shadow-xl shadow-primary-500/20 group-hover:rotate-6 transition-transform duration-500">
                    <span className="text-white font-bold text-2xl font-display">
                      {experience.company.charAt(0)}
                    </span>
                  </div>

                  {/* Right: Content */}
                  <div className="flex-1 space-y-4">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                       <div>
                          <h3 className="text-2xl font-bold font-display text-gray-900 dark:text-white group-hover:text-primary-500 transition-colors">
                            {experience.company}
                          </h3>
                          <p className="text-primary-600 dark:text-primary-400 font-bold font-sans">
                            {experience.position}
                          </p>
                       </div>
                       <span className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs font-bold font-sans text-gray-500 dark:text-gray-400">
                          {experience.duration}
                       </span>
                    </div>

                    <ul className="space-y-3 mt-4">
                      {experience.description.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start text-gray-600 dark:text-gray-300 text-sm font-sans leading-relaxed">
                          <span className="mr-3 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary-500 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>

                    {/* Technologies Tag Cloud */}
                    <div className="flex flex-wrap gap-2 pt-4">
                      {experience.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-primary-500/5 text-primary-600 dark:text-primary-400 text-xs font-bold rounded-full border border-primary-500/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
