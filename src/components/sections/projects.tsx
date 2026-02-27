"use client";

import { motion } from "framer-motion";
import { Project } from "@/types/portfolio";
import { projects } from "@/data/portfolio-data";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

export function ProjectsSection() {
  const featuredProjects = projects.filter(project => project.featured);

  const handleProjectAction = (project: Project, type: 'github' | 'live') => {
    if (type === 'github') {
      if (project.githubUrl && project.githubUrl !== '#') {
        window.open(project.githubUrl, '_blank');
      }
    } else if (type === 'live') {
      if (project.liveUrl && project.liveUrl !== '#') {
        window.open(project.liveUrl, '_blank');
      }
    }
  };

  const hasLiveDemo = (project: Project) => {
    return project.liveUrl && project.liveUrl !== '#';
  };

  const hasGitHubRepo = (project: Project) => {
    return project.githubUrl && project.githubUrl !== '#';
  };

  return (
    <section id="projects" className="section-padding bg-slate-50 dark:bg-[#0a0a0c] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-accent-violet/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="container-custom relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-sans">
            A selection of my best work, combining clean code with beautiful design.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-2xl overflow-hidden group border border-white/10"
            >
              {/* Image Container */}
              <div className="relative h-56 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-all duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    quality={90}
                    priority={index < 3}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-500" />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-[2px]">
                  <div className="flex gap-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    {hasLiveDemo(project) && (
                      <Button
                        size="sm"
                        onClick={() => handleProjectAction(project, 'live')}
                        className="bg-white text-gray-900 hover:bg-primary-50 border-0 shadow-xl rounded-full px-5"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </Button>
                    )}
                    {hasGitHubRepo(project) && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleProjectAction(project, 'github')}
                        className="bg-black/50 border-white/20 text-white hover:bg-white/10 backdrop-blur-md rounded-full px-5"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                    )}
                  </div>
                </div>

                {/* Tech Badge */}
                <div className="absolute top-4 left-4">
                   <span className="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] uppercase tracking-wider font-bold rounded-full">
                    {project.technologies[0]}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 font-display text-gray-900 dark:text-white group-hover:text-primary-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2 text-sm leading-relaxed font-sans">
                  {project.description}
                </p>
                
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 bg-primary-500/5 text-primary-600 dark:text-primary-400 text-[10px] font-bold rounded-full border border-primary-500/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Footer Link */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-white/5">
                  <span className="text-xs text-gray-500 dark:text-gray-500 italic">
                    {project.featured ? "Featured Project" : "Developer Tools"}
                  </span>
                  <button 
                    onClick={() => handleProjectAction(project, 'live')}
                    className="text-primary-500 hover:text-primary-600 dark:text-primary-400 dark:hover:text-primary-300 font-bold text-sm flex items-center gap-1 group/btn"
                  >
                    Details
                    <ExternalLink className="w-3 h-3 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button
            size="lg"
            variant="outline"
            className="rounded-full border-primary-500/20 hover:border-primary-500 font-bold group"
            onClick={() => {
              window.open('https://github.com/Tebarek-W', '_blank');
            }}
          >
            Explore More on GitHub
            <Github className="ml-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}