"use client";

import { motion, useInView } from "framer-motion";
import { personalInfo } from "@/data/portfolio-data";
import { Code, Coffee, Music, GraduationCap, Calendar } from "lucide-react";
import Magnetic from "@/components/ui/magnetic";
import { useEffect, useRef, useState } from "react";
import { calculateYearsSince } from "@/lib/utils";

const AnimatedCounter = ({ value, duration = 2 }: { value: string, duration?: number }) => {
  const [count, setCount] = useState(0);
  const nodeRef = useRef(null);
  const inView = useInView(nodeRef, { once: true, margin: "-50px" });
  
  const isNumber = !isNaN(Number(value.replace(/[^0-9]/g, '')));
  const numValue = isNumber ? parseInt(value.replace(/[^0-9]/g, '')) : 0;
  const suffix = value.replace(/[0-9]/g, '');

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

  return (
    <span ref={nodeRef}>
      {isNumber ? `${count}${suffix}` : value}
    </span>
  );
};

const funFacts = [
  {
    icon: Calendar,
    title: "Experience",
    value: `${calculateYearsSince(2022)}+ yrs`,
    description: "Professional development",
  },
  {
    icon: Code,
    title: "Lines of Code",
    value: "500K+",
    description: "Written across projects",
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
    icon: Code
  },
  {
    year: "2025",
    title: "The Culmination Project",
    desc: "Graduated with honors from Haramaya University, delivering a Real-time Facial Recognition Attendance System as my Final Year Project. Joined GLYME TECH full-time.",
    icon: GraduationCap
  },
  {
    year: "2024",
    title: "Strategic Development",
    desc: "Achieved significant milestones during intensive internships, delivering community platforms and mastering full-stack workflows while maintaining peak academic performance.",
    icon: Code
  },
  {
    year: "2023",
    title: "Academic Project Proliferation",
    desc: "Developed a diverse array of over 15+ specialized projects for university assessments, mastering various tech stacks and software engineering methodologies.",
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
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const }
    },
  };

  return (
    <section id="about" className="section-padding bg-slate-50 dark:bg-[#0e1117] relative overflow-hidden">
       {/* Background decoration */}
      <motion.div 
        className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary-500/5 blur-[120px] rounded-full pointer-events-none"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute inset-0 noise-overlay" />
      
      <div className="container-custom relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-header">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-sans text-balance">
            A Computer Science Graduate passionate about building the future of the web.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-card p-8 md:p-10 rounded-[2rem] border-white/50 dark:border-white/10"
          >
            <h3 className="text-3xl font-bold mb-6 font-display text-gray-900 dark:text-white">My Journey</h3>
            <div className="space-y-6 text-gray-700 dark:text-gray-300 font-sans text-lg font-light leading-[1.8]">
              <p>
                Hello! I&apos;m <span className="font-semibold text-primary-600 dark:text-primary-400">{personalInfo.name}</span>, a passionate software engineer and full-stack developer with a Bachelor&apos;s degree in Computer Science from Haramaya University. 
                My academic journey provided a solid foundation in the core principles of software engineering.
              </p>
              <p>
                I specialize in <span className="font-medium text-gray-900 dark:text-white">React, Next.js, TypeScript, and TailwindCSS</span> on the frontend, while leveraging <span className="font-medium text-gray-900 dark:text-white">NestJS, Node.js, and PostgreSQL</span> to architect robust, scalable backends.
              </p>
              <p>
                Whether it&apos;s architecting complex backend systems or polishing subtle UI micro-interactions, I approach every challenge with curiosity and a commitment to engineering excellence.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {funFacts.map((fact) => (
              <Magnetic key={fact.title}>
                <motion.div
                  variants={itemVariants}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="glass-card p-6 rounded-3xl border border-white/50 dark:border-white/10 h-full bg-white/50 dark:bg-white/5"
                >
                  <div className="w-12 h-12 bg-primary-100 dark:bg-primary-500/10 rounded-2xl flex items-center justify-center mb-4 text-primary-600 dark:text-primary-400 border border-primary-200 dark:border-primary-500/20">
                    <fact.icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-3xl font-bold text-gray-900 dark:text-white mb-1 font-display">
                    <AnimatedCounter value={fact.value} />
                  </h4>
                  <p className="font-bold text-xs uppercase tracking-widest text-primary-600 dark:text-primary-400 mb-2">
                    {fact.title}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 font-sans">
                    {fact.description}
                  </p>
                </motion.div>
              </Magnetic>
            ))}
          </motion.div>
        </div>

        {/* Timeline (Simplified/Modernized) */}
        <div className="max-w-4xl mx-auto relative">
          <motion.h3 
            className="text-3xl font-bold text-center mb-16 font-display"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Milestones
          </motion.h3>
          
          <motion.div 
            className="space-y-0"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
             {milestones.map((item, index) => (
               <motion.div 
                key={item.year}
                variants={itemVariants}
                className="flex gap-8 items-start relative group"
               >
                 <div className="flex-shrink-0 w-24 text-2xl font-black font-display text-primary-600/80 dark:text-primary-400/80 drop-shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:text-primary-600 dark:group-hover:text-primary-400 pt-1">{item.year}</div>
                 
                 <div className={`flex-1 pb-16 border-l-2 ${index === milestones.length - 1 ? 'border-transparent' : 'border-gray-200 dark:border-white/10'} pl-8 relative`}>
                    <motion.div 
                      className="absolute top-2 -left-[9px] w-4 h-4 rounded-full bg-white dark:bg-gray-900 border-2 border-primary-500 shadow-[0_0_10px_rgba(14,165,233,0.5)] z-10 group-hover:scale-125 transition-transform" 
                      whileInView={{ scale: [0, 1.5, 1], opacity: [0, 1] }}
                      viewport={{ once: true }}
                    />
                    
                    <div className="glass-card p-6 rounded-2xl border-white/50 dark:border-white/10 bg-white/50 dark:bg-white/5 group-hover:border-primary-500/30 transition-colors">
                      <h4 className="text-xl font-bold mb-3 font-display text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">{item.title}</h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm font-sans leading-relaxed">{item.desc}</p>
                    </div>
                 </div>
               </motion.div>
             ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
