"use client";

import { motion, useInView } from "framer-motion";
import { Project } from "@/types/portfolio";
import { projects } from "@/data/portfolio-data";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import Image from "next/image";
import Magnetic from "@/components/ui/magnetic";
import { useState, useRef } from "react";

const ProjectCard = ({ project, index, handleAction }: { project: Project, index: number, handleAction: (p: Project, t: 'github' | 'live') => void }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-100px" });

  const hasLiveDemo = project.liveUrl && project.liveUrl !== '#';
  const hasGitHubRepo = project.githubUrl && project.githubUrl !== '#';

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.95 }}
      whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.3, ease: "easeOut" } }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="glass-card rounded-[2rem] overflow-hidden group border-gray-200/50 dark:border-white/10 relative bg-white/60 dark:bg-white/[0.06] hover:border-primary-500/40 hover:shadow-2xl hover:shadow-primary-500/20"
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/0 via-primary-500/0 to-accent-violet/0 group-hover:from-primary-500/10 group-hover:to-accent-violet/10 transition-colors duration-500 rounded-[2rem] pointer-events-none" />
      
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden bg-gray-100 dark:bg-gray-800">
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse" />
        )}
        <Image
          src={project.image}
          alt={project.title}
          fill
          className={`object-cover transition-all duration-700 group-hover:scale-105 group-hover:-translate-y-2 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          quality={90}
          priority={index < 2}
          onLoad={() => setImageLoaded(true)}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
        
        {/* Hover Overlay Actions */}
        <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-[2px] bg-black/20 gap-4">
          <div className="flex gap-4 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
            {hasLiveDemo && (
              <Magnetic>
                <Button
                  size="sm"
                  onClick={() => handleAction(project, 'live')}
                  className="bg-primary-500 text-white hover:bg-primary-600 border-0 shadow-[0_0_20px_rgba(14,165,233,0.4)] rounded-full px-6 font-bold tracking-wide"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Preview
                </Button>
              </Magnetic>
            )}
          </div>
          <div className="flex gap-4 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 delay-75 ease-out">
            {hasGitHubRepo && (
              <Magnetic>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleAction(project, 'github')}
                  className="bg-black/50 border-white/20 text-white hover:bg-white hover:text-black backdrop-blur-md rounded-full px-6 font-bold tracking-wide transition-colors"
                >
                  <Github className="w-4 h-4 mr-2" />
                  Source Code
                </Button>
              </Magnetic>
            )}
          </div>
        </div>

        {/* Project Number */}
        <div className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-black/30 backdrop-blur-md border border-white/10 text-white font-display font-bold text-lg">
          {index + 1}
        </div>

        {/* Primary Tech Badge */}
        <div className="absolute top-4 left-4">
           <motion.span 
            className="px-4 py-1.5 bg-black/50 backdrop-blur-md border border-white/20 text-white text-[10px] uppercase tracking-widest font-bold rounded-full shadow-lg"
            whileHover={{ scale: 1.05, backgroundColor: "rgba(14,165,233,0.8)" }}
           >
            {project.technologies[0]}
          </motion.span>
        </div>
      </div>

      {/* Content */}
      <div className="p-8 relative">
        <h3 className="text-2xl font-bold mb-3 font-display text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6 line-clamp-2 text-sm leading-relaxed font-sans text-balance">
          {project.description}
        </p>
        
        {/* Tech Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-300 text-[10px] font-bold rounded-full border border-gray-200 dark:border-white/5 uppercase tracking-wider group-hover:border-primary-500/30 transition-colors"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-3 py-1 bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-300 text-[10px] font-bold rounded-full border border-gray-200 dark:border-white/5 uppercase tracking-wider">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>

        {/* Footer Action */}
        <div className="flex items-center justify-between pt-5 border-t border-gray-200/50 dark:border-white/10">
          <span className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest">
            {project.featured ? "Featured Work" : "Side Project"}
          </span>
          <button 
            onClick={() => handleAction(project, hasLiveDemo ? 'live' : 'github')}
            className="w-10 h-10 rounded-full bg-primary-50 dark:bg-primary-500/10 flex items-center justify-center text-primary-600 dark:text-primary-400 group-hover:bg-primary-500 group-hover:text-white transition-colors"
            aria-label="View Project"
          >
            <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export function ProjectsSection() {
  const featuredProjects = projects.filter(project => project.featured);

  const handleProjectAction = (project: Project, type: 'github' | 'live') => {
    if (type === 'github' && project.githubUrl && project.githubUrl !== '#') {
      window.open(project.githubUrl, '_blank');
    } else if (type === 'live' && project.liveUrl && project.liveUrl !== '#') {
      window.open(project.liveUrl, '_blank');
    }
  };

  return (
    <section id="projects" className="section-padding bg-slate-50 dark:bg-[#0e1117] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-500/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-violet/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 noise-overlay" />

      <div className="container-custom relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-header">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-sans text-balance">
            A selection of my best work, combining clean code with beautiful design.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Magnetic>
            <Button
              size="lg"
              className="rounded-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white hover:border-primary-500 hover:text-primary-600 dark:hover:text-primary-400 font-bold group shadow-sm transition-all duration-300 px-8"
              onClick={() => {
                window.open('https://github.com/Tebarek-W', '_blank');
              }}
            >
              Explore More on GitHub
              <Github className="ml-3 w-5 h-5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Magnetic>
        </motion.div>
      </div>
    </section>
  );
}
