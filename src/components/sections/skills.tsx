"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/portfolio-data";

const skillCategories = {
  frontend: "Frontend Development",
  backend: "Backend & Cloud",
  tools: "Design & Tools"
};

export function SkillsSection() {
  const getSkillsByCategory = (category: string) => {
    return skills.filter(skill => skill.category === category);
  };

  return (
    <section id="skills" className="section-padding bg-white dark:bg-[#050505] relative overflow-hidden">
      <div className="container-custom relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
            Technical <span className="gradient-text">Mastery</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-sans">
            A comprehensive overview of my technical expertise and proficiency across the stack.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {Object.entries(skillCategories).map(([key, title], index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-8 rounded-[2rem] border border-white/10 transition-all duration-500"
            >
              <h3 className="text-2xl font-bold mb-8 font-display bg-gradient-to-br from-white to-white/60 bg-clip-text text-transparent dark:from-white dark:to-white/20">
                {title}
              </h3>
              <div className="space-y-6">
                {getSkillsByCategory(key).map((skill, sIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: sIndex * 0.05 }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-700 dark:text-gray-300 font-sans text-sm">
                        {skill.name}
                      </span>
                      <span className="text-xs font-bold text-primary-500 bg-primary-500/10 px-2 py-0.5 rounded-full">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-100 dark:bg-white/5 rounded-full h-1.5 overflow-hidden">
                      <motion.div
                        className="bg-gradient-to-r from-primary-600 to-accent-violet h-1.5 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeOut", delay: sIndex * 0.05 + 0.2 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating Icons decoration */}
        <div className="mt-24 grid grid-cols-3 md:grid-cols-6 gap-6 grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all duration-700 cursor-default">
           {skills.slice(0, 12).map((skill, index) => (
             <motion.div 
              key={`tech-${index}`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="flex flex-col items-center gap-2 group"
             >
                <div className="w-12 h-12 rounded-xl bg-white dark:bg-white/5 border border-white/10 flex items-center justify-center text-xl font-bold group-hover:scale-110 transition-transform">
                  {skill.name.charAt(0)}
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest">{skill.name}</span>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
}