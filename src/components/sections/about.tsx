"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolio-data";
import { Code, Coffee, Music, GraduationCap } from "lucide-react";

const funFacts = [
  {
    icon: GraduationCap,
    title: "Degree",
    value: "BSc CS",
    description: "Haramaya University",
  },
  {
    icon: Code,
    title: "Lines of Code",
    value: "500K+",
    description: "Written throughout my journey",
  },
  {
    icon: Coffee,
    title: "Coffee Cups",
    value: "∞",
    description: "Fueling development sessions",
  },
  {
    icon: Music,
    title: "Playlists",
    value: "50+",
    description: "Coding focus playlists",
  },
];

const milestones = [
  {
    year: "2026",
    title: "Engineering Excellence",
    desc: "Currently delivering high-impact solutions at GLYME TECH, where I architect high-performance web applications and robust ERP systems with 99.9% uptime for enterprise clients.",
    icon: Code
  },
  {
    year: "2025",
    title: "Industry Entrance & Graduation",
    desc: "Earned my BSc in Computer Science from Haramaya University and launched my professional career by joining GLYME TECH as a Full-stack Developer.",
    icon: GraduationCap
  },
  {
    year: "2024",
    title: "Innovation & Delivery",
    desc: "Developed a real-time facial recognition attendance system and managed complex community platforms, proving my ability to ship production-ready software.",
    icon: Code
  },
  {
    year: "2022",
    title: "The Genesis",
    desc: "Wrote my first line of code and discovered a profound passion for digital creation, setting the foundation for my engineering journey.",
    icon: Code
  }
];

export function AboutSection() {
  return (
    <section id="about" className="section-padding bg-white dark:bg-[#030303] relative overflow-hidden">
       {/* Background decoration */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-primary-500/5 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="container-custom relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-sans">
            A Computer Science Graduate passionate about building the future of the web.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold mb-6 font-display">My Journey</h3>
            <div className="space-y-6 text-gray-600 dark:text-gray-300 font-sans leading-relaxed">
              <p>
                Hello! I&apos;m {personalInfo.name}, a passionate full-stack
                developer with a <strong className="text-primary-500">Bachelor&apos;s degree in Computer Science from Haramaya University</strong> (June 2025). 
                My academic journey provided a solid foundation in the core principles of software engineering.
              </p>
              <p>
                I specialize in <span className="text-accent-indigo font-bold italic">Next.js and TypeScript</span>, 
                striving to build applications that are not just functional, but also visually stunning 
                and highly performant.
              </p>
              <p>
                Whether it&apos;s architecting complex backends or polishing subtle UI micro-interactions, 
                I approach every challenge with curiosity and a commitment to excellence.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {funFacts.map((fact, index) => (
              <motion.div
                key={fact.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-6 rounded-2xl border border-white/10"
              >
                <div className="w-12 h-12 bg-primary-500/10 rounded-xl flex items-center justify-center mb-4">
                  <fact.icon className="w-6 h-6 text-primary-500" />
                </div>
                <h4 className="text-3xl font-bold text-gray-900 dark:text-white mb-1 font-display">
                  {fact.value}
                </h4>
                <p className="font-bold text-xs uppercase tracking-widest text-primary-600 dark:text-primary-400 mb-2">
                  {fact.title}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 font-sans">
                  {fact.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Timeline (Simplified/Modernized) */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-16 font-display">Milestones</h3>
          <div className="space-y-12">
             {milestones.map((item, idx) => (
               <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex gap-8 items-start relative"
               >
                 <div className="flex-shrink-0 w-20 text-2xl font-black font-display text-primary-600 dark:text-primary-400 drop-shadow-sm">{item.year}</div>
                 <div className="flex-1 pb-12 border-l border-primary-500/20 pl-8 relative">
                    <div className="absolute top-0 -left-[5px] w-2.5 h-2.5 rounded-full bg-primary-500 group-hover:scale-125 transition-transform" />
                    <h4 className="text-xl font-bold mb-2 font-display">{item.title}</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm font-sans leading-relaxed">{item.desc}</p>
                 </div>
               </motion.div>
             ))}
          </div>
        </div>
      </div>
    </section>
  );
}
