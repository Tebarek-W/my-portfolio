"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { experiences } from "@/data/portfolio-data";
import { Briefcase, Calendar, MapPin, Building2, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";

export function ExperienceSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" className="section-padding bg-slate-50 dark:bg-[#0e1117] relative overflow-hidden">
      {/* Dynamic Backgrounds */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[600px] h-[600px] bg-accent-violet/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 noise-overlay" />

      <div className="container-custom relative z-10" ref={containerRef}>
        <motion.div
          className="text-center mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-header">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-sans text-balance">
            A track record of delivering high-impact solutions and driving technical excellence.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-[39px] md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-white/10 hidden sm:block">
            <motion.div 
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-primary-500 to-accent-violet rounded-full shadow-[0_0_10px_rgba(14,165,233,0.5)]"
              style={{ height: lineHeight }}
            />
          </div>

          <div className="space-y-12 sm:space-y-24">
            {experiences.map((job, index) => {
              const isEven = index % 2 === 0;
              return (
                <ExperienceCard 
                  key={`${job.company}-${index}`} 
                  job={job} 
                  index={index} 
                  isEven={isEven} 
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

const ExperienceCard = ({ job, index, isEven }: { job: typeof experiences[0], index: number, isEven: boolean }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="relative flex flex-col sm:flex-row items-start sm:items-center w-full group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Timeline Node - Desktop */}
      <div className="hidden sm:flex absolute left-1/2 -translate-x-1/2 w-20 h-20 items-center justify-center z-20">
        <div className={cn(
          "w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 shadow-xl border-2",
          isHovered 
            ? "bg-primary-500 border-white text-white scale-110 shadow-[0_0_30px_rgba(14,165,233,0.4)]" 
            : "bg-white dark:bg-gray-900 border-primary-500/50 text-primary-500 dark:border-white/20 dark:text-gray-400"
        )}>
          <Briefcase className="w-5 h-5" />
        </div>
      </div>

      {/* Content Side */}
      <div className={cn(
        "w-full sm:w-1/2 pl-16 sm:pl-0",
        isEven ? "sm:pr-16 md:pr-24 text-left sm:text-right" : "sm:pl-16 md:pl-24 text-left sm:ml-auto"
      )}>
        {/* Mobile Timeline Node */}
        <div className="absolute left-4 top-6 sm:hidden w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-500 bg-white dark:bg-gray-900 border-2 border-primary-500/50 text-primary-500 z-20 group-hover:bg-primary-500 group-hover:border-white group-hover:text-white shadow-lg">
          <Briefcase className="w-4 h-4" />
        </div>
        
        {/* Mobile Line */}
        <div className="absolute left-9 top-16 bottom-[-3rem] w-px bg-gray-200 dark:bg-white/10 sm:hidden z-10" />

        <div className={cn(
          "glass-card p-6 md:p-8 rounded-[2rem] border border-gray-200/50 dark:border-white/10 transition-all duration-500 relative bg-white/50 dark:bg-white/5",
          isHovered ? "border-primary-500/30 shadow-xl -translate-y-1" : "hover:border-primary-500/30"
        )}>
          {/* Connector Line - Desktop */}
          <div className={cn(
            "hidden sm:block absolute top-1/2 -translate-y-1/2 w-16 h-px bg-gray-200 dark:bg-white/10 transition-colors duration-500",
            isEven ? "-right-16" : "-left-16",
            isHovered && "bg-primary-500/50 dark:bg-primary-500/50"
          )} />

          <div className={cn(
            "flex flex-wrap gap-y-2 gap-x-4 mb-4 text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400",
            isEven ? "sm:justify-end" : "justify-start"
          )}>
            <span className="flex items-center text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-500/10 px-3 py-1 rounded-full border border-primary-100 dark:border-primary-500/20">
              <Calendar className="w-3.5 h-3.5 mr-1.5" />
              {job.duration}
            </span>
            <span className="flex items-center bg-gray-100 dark:bg-white/5 px-3 py-1 rounded-full border border-gray-200 dark:border-white/5">
              <MapPin className="w-3.5 h-3.5 mr-1.5" />
              {job.location}
            </span>
          </div>

          <h3 className="text-2xl font-bold font-display text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
            {job.title}
          </h3>
          
          <div className={cn(
            "flex items-center text-lg font-medium text-gray-700 dark:text-gray-300 mb-6",
            isEven ? "sm:justify-end" : "justify-start"
          )}>
            <Building2 className="w-4 h-4 mr-2 text-gray-400" />
            {job.company}
          </div>

          <ul className="space-y-3 mb-8 text-sm font-sans text-left">
            {job.description.map((desc, i) => (
              <li key={i} className="flex items-start text-gray-600 dark:text-gray-400 leading-relaxed">
                <ChevronRight className="w-4 h-4 mr-2 mt-1 flex-shrink-0 text-primary-500/50 group-hover:text-primary-500 transition-colors" />
                <span>{desc}</span>
              </li>
            ))}
          </ul>

          <div className={cn(
            "flex flex-wrap gap-2 pt-6 border-t border-gray-100 dark:border-white/10",
            isEven ? "sm:justify-end" : "justify-start"
          )}>
            {job.technologies.map((tech) => (
              <span 
                key={tech}
                className="px-3 py-1.5 bg-gray-50 dark:bg-white/5 text-gray-700 dark:text-gray-300 text-xs font-bold rounded-xl border border-gray-200 dark:border-white/5 uppercase tracking-wider group-hover:border-primary-500/20 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
