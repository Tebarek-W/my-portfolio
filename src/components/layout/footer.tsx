"use client";

import { socialLinks, personalInfo } from "@/data/portfolio-data";
import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Phone, Github, Linkedin, Code } from "lucide-react";
import Magnetic from "@/components/ui/magnetic";

export function Footer() {
  const [currentYear] = useState<number>(new Date().getFullYear());

  const getSocialIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case 'github': return <Github className="w-4 h-4" />;
      case 'linkedin': return <Linkedin className="w-4 h-4" />;
      case 'email': return <Mail className="w-4 h-4" />;
      default: return <Code className="w-4 h-4" />;
    }
  };

  return (
    <footer className="bg-white dark:bg-[#0e1117] text-gray-900 dark:text-white relative overflow-hidden border-t border-gray-200 dark:border-white/5">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container-custom relative z-10 py-16">
        <div className="grid md:grid-cols-12 gap-12 mb-16">
          {/* Brand & Mission */}
          <motion.div
            className="md:col-span-5 text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold font-display gradient-text mb-6">
              Tebarek Wachamo
            </h3>
            <p className="text-gray-600 dark:text-gray-400 font-sans max-w-sm leading-relaxed mb-8 mx-auto md:mx-0">
              Expert full-stack development focusing on high-performance architecture, 
              scalable systems, and premium user experiences. 
              Let&apos;s build something extraordinary together.
            </p>
            <div className="flex justify-center md:justify-start gap-4">
              {socialLinks.map((social) => (
                <Magnetic key={social.name}>
                  <a
                    href={social.url}
                    className="w-10 h-10 bg-gray-100 dark:bg-white/5 hover:bg-primary-500 hover:text-white dark:hover:bg-primary-500/20 border border-gray-200 dark:border-white/10 rounded-xl flex items-center justify-center transition-all group backdrop-blur-md text-gray-600 dark:text-gray-400 hover:shadow-lg hover:shadow-primary-500/20"
                    aria-label={social.name}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="group-hover:scale-110 transition-transform">
                      {getSocialIcon(social.name)}
                    </span>
                  </a>
                </Magnetic>
              ))}
            </div>
          </motion.div>

          {/* Quick Nav */}
          <motion.div
            className="md:col-span-3 text-center md:text-left flex flex-col items-center md:items-start"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-xs font-black uppercase tracking-[0.25em] text-gray-500 dark:text-gray-500 mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm font-medium font-sans">
              <li><a href="#home" className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">Hero Section</a></li>
              <li><a href="#about" className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">About Story</a></li>
              <li><a href="#skills" className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">Tech Stack</a></li>
              <li><a href="#projects" className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">Showcase</a></li>
            </ul>
          </motion.div>

          {/* Contact Direct */}
          <motion.div
            className="md:col-span-4 text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-xs font-black uppercase tracking-[0.25em] text-gray-500 dark:text-gray-500 mb-6">Contact Point</h4>
            <div className="p-6 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl backdrop-blur-sm space-y-4 group hover:border-primary-500/30 transition-colors">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2 font-sans italic">
                Ready to elevate your digital presence? Reach out directly.
              </p>
              
              <div className="space-y-3">
                <a 
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center justify-center md:justify-start gap-3 text-primary-600 dark:text-primary-500 font-bold font-display hover:text-primary-700 dark:hover:text-primary-400 transition-colors group/link"
                >
                  <div className="w-8 h-8 rounded-lg bg-primary-500/10 flex items-center justify-center group-hover/link:bg-primary-500/20 transition-colors">
                    <Mail className="w-4 h-4 group-hover/link:scale-110 transition-transform" />
                  </div>
                  <span className="text-sm tracking-tight">{personalInfo.email}</span>
                </a>

                <a 
                  href={`tel:${personalInfo.phone.replace(/\s/g, '')}`}
                  className="flex items-center justify-center md:justify-start gap-3 text-primary-600 dark:text-primary-500 font-bold font-display hover:text-primary-700 dark:hover:text-primary-400 transition-colors group/link"
                >
                  <div className="w-8 h-8 rounded-lg bg-primary-500/10 flex items-center justify-center group-hover/link:bg-primary-500/20 transition-colors">
                    <Phone className="w-4 h-4 group-hover/link:scale-110 transition-transform" />
                  </div>
                  <span className="text-sm tracking-tight">{personalInfo.phone}</span>
                </a>
              </div>

              <div className="pt-2 flex justify-center md:justify-start">
                <span className="text-[10px] text-gray-600 dark:text-gray-400 font-black uppercase tracking-widest block bg-gray-200/50 dark:bg-white/5 py-1 px-3 rounded-full w-fit border border-gray-300/50 dark:border-white/5">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-500 mr-2 animate-pulse"></span>
                  Remote & Onsite Available
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Lower Footer */}
        <div className="pt-8 border-t border-gray-200 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <motion.p 
            className="text-[11px] text-gray-500 dark:text-gray-500 font-black uppercase tracking-widest font-sans text-center md:text-left"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            © {currentYear || "2026"} TEBAREK WACHAMO • CRAFTED WITH PRECISION & PASSION
          </motion.p>
          
          <motion.div 
            className="flex gap-8 text-[10px] font-black uppercase tracking-[0.25em] text-gray-600 dark:text-gray-400 items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
             <a href="#home" className="hover:text-primary-600 dark:hover:text-primary-400 transition-all hover:tracking-[0.4em] flex items-center gap-2">
               Back to Top
             </a>
             <span className="text-gray-300 dark:text-gray-800">•</span>
             <span>Next.js • React • TS</span>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
