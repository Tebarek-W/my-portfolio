"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/portfolio-data";
import { MonitorSmartphone, Database, Wrench } from "lucide-react";

const skillCategories = {
  frontend: {
    title: "Frontend Development",
    icon: MonitorSmartphone,
    color: "primary",
    gradient: "from-primary-500 to-primary-700",
    bgLight: "bg-primary-50",
    bgDark: "dark:bg-primary-500/10",
    borderLight: "border-primary-100",
    borderDark: "dark:border-primary-500/20"
  },
  backend: {
    title: "Backend & Cloud",
    icon: Database,
    color: "accent-violet",
    gradient: "from-accent-violet to-purple-700",
    bgLight: "bg-purple-50",
    bgDark: "dark:bg-purple-500/10",
    borderLight: "border-purple-100",
    borderDark: "dark:border-purple-500/20"
  },
  tools: {
    title: "DevOps & Tools",
    icon: Wrench,
    color: "accent-cyan",
    gradient: "from-accent-cyan to-teal-700",
    bgLight: "bg-cyan-50",
    bgDark: "dark:bg-cyan-500/10",
    borderLight: "border-cyan-100",
    borderDark: "dark:border-cyan-500/20"
  }
};

export function SkillsSection() {
  const getSkillsByCategory = (category: string) => {
    return skills.filter(skill => skill.category === category);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.5 }
    },
  };

  return (
    <section id="skills" className="section-padding bg-white dark:bg-[#0e1117] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-primary-500/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-accent-violet/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container-custom relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-header">
            Technical <span className="gradient-text">Mastery</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-sans text-balance">
            A comprehensive overview of my technical expertise and proficiency across the stack.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 relative z-20">
          {(Object.keys(skillCategories) as Array<keyof typeof skillCategories>).map((key, index) => {
            const category = skillCategories[key];
            const CategoryIcon = category.icon;
            
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -6, scale: 1.01, transition: { duration: 0.3 } }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-8 rounded-[2rem] border-gray-200/50 dark:border-white/10 transition-all duration-500 group bg-white/60 dark:bg-white/[0.06] hover:border-primary-500/40 hover:shadow-2xl hover:shadow-primary-500/20"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${category.bgLight} ${category.bgDark} ${category.borderLight} ${category.borderDark} border shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                    <CategoryIcon className={`w-6 h-6 text-${category.color}`} />
                  </div>
                  <h3 className="text-2xl font-bold font-display text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>
                
                <motion.div 
                  className="space-y-6"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {getSkillsByCategory(key).map((skill, sIndex) => (
                    <motion.div
                      key={skill.name}
                      variants={itemVariants}
                      className="group/skill"
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold text-gray-700 dark:text-gray-300 font-sans text-sm group-hover/skill:text-primary-600 dark:group-hover/skill:text-primary-400 transition-colors">
                          {skill.name}
                        </span>
                        <span className="text-xs font-bold text-gray-500 dark:text-gray-400 group-hover/skill:text-primary-600 dark:group-hover/skill:text-primary-400 transition-colors">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-2 overflow-hidden border border-gray-200/50 dark:border-gray-700/50">
                        <motion.div
                          className={`h-full rounded-full bg-gradient-to-r ${category.gradient} relative overflow-hidden`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, ease: [0.65, 0, 0.35, 1], delay: sIndex * 0.1 + 0.3 }}
                        >
                          <div className="absolute top-0 right-0 bottom-0 w-10 bg-gradient-to-r from-transparent to-white/30 blur-[2px] -skew-x-12 animate-[shimmer_2s_infinite]" />
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Floating Icons decoration */}
        <div className="mt-32 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-500/5 to-transparent blur-3xl pointer-events-none" />
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 opacity-40 hover:opacity-100 transition-opacity duration-700">
            {skills.slice(0, 14).map((skill, index) => (
              <motion.div 
                key={`tech-${index}`}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex flex-col items-center gap-2 group cursor-pointer"
              >
                <motion.div 
                  className="relative w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-white/70 dark:bg-white/[0.05] backdrop-blur-xl border border-gray-200/50 dark:border-white/10 shadow-lg flex items-center justify-center text-xl md:text-3xl font-semibold font-display group-hover:bg-gradient-to-br group-hover:from-primary-500 group-hover:to-accent-violet group-hover:border-transparent group-hover:shadow-[0_0_30px_rgba(14,165,233,0.6)] transition-all duration-500 overflow-hidden"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ 
                    duration: 4 + (index % 3), 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: index * 0.2
                  }}
                  whileHover={{ scale: 1.25, rotate: index % 2 === 0 ? 10 : -10, transition: { type: "spring", stiffness: 300, damping: 15 } }}
                >
                  <span className="bg-gradient-to-br from-primary-500 to-accent-violet bg-clip-text text-transparent group-hover:text-white drop-shadow-sm transition-colors duration-300">
                    {skill.name.charAt(0)}
                  </span>
                </motion.div>
                <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-300 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
