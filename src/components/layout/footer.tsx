"use client";

import { socialLinks, personalInfo } from "@/data/portfolio-data";
import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Phone } from "lucide-react";

export function Footer() {
  const [currentYear] = useState<number>(new Date().getFullYear());

  return (
    <footer className="bg-[#030303] text-white relative overflow-hidden border-t border-white/5">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary-500/10 blur-[120px] rounded-full pointer-events-none" />

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
            <p className="text-gray-400 font-sans max-w-sm leading-relaxed mb-8">
              Expert full-stack development focusing on high-performance architecture, 
              scalable systems, and premium user experiences. 
              Let&apos;s build something extraordinary together.
            </p>
            <div className="flex justify-center md:justify-start gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="w-10 h-10 bg-white/5 hover:bg-primary-500/20 border border-white/10 rounded-xl flex items-center justify-center transition-all group backdrop-blur-md"
                  aria-label={social.name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="font-display text-gray-500 group-hover:text-primary-500 font-black text-xs uppercase tracking-tighter">
                    {social.name.substring(0, 2)}
                  </span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Nav */}
          <motion.div
            className="md:col-span-3 text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-xs font-black uppercase tracking-[0.25em] text-gray-500 mb-6">Exploration</h4>
            <ul className="space-y-4 text-sm font-medium font-sans">
              <li><a href="#home" className="text-gray-400 hover:text-primary-500 transition-colors">Hero Section</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-primary-500 transition-colors">About Story</a></li>
              <li><a href="#skills" className="text-gray-400 hover:text-primary-500 transition-colors">Techellectuals</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-primary-500 transition-colors">Showcase</a></li>
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
            <h4 className="text-xs font-black uppercase tracking-[0.25em] text-gray-500 mb-6">Contact Point</h4>
            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm space-y-4">
              <p className="text-sm text-gray-400 mb-2 font-sans italic">
                Ready to elevate your digital presence? Reach out directly.
              </p>
              
              <div className="space-y-3">
                <a 
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-3 text-primary-500 font-bold font-display hover:text-primary-400 transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-primary-500/10 flex items-center justify-center group-hover:bg-primary-500/20 transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="text-sm tracking-tight">{personalInfo.email}</span>
                </a>

                <a 
                  href={`tel:${personalInfo.phone.replace(/\s/g, '')}`}
                  className="flex items-center gap-3 text-primary-500 font-bold font-display hover:text-primary-400 transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-primary-500/10 flex items-center justify-center group-hover:bg-primary-500/20 transition-colors">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span className="text-sm tracking-tight">{personalInfo.phone}</span>
                </a>
              </div>

              <div className="pt-2">
                <span className="text-[10px] text-gray-600 font-black uppercase tracking-widest block bg-white/5 py-1 px-3 rounded-full w-fit">
                  Remote & Onsite Available
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Lower Footer */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <motion.p 
            className="text-[11px] text-gray-600 font-black uppercase tracking-widest font-sans"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            © {currentYear || "2026"} TEBAREK WACHAMO • BUILT WITH PRECISION & PRECISION
          </motion.p>
          
          <motion.div 
            className="flex gap-8 text-[10px] font-black uppercase tracking-[0.25em] text-gray-700"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
             <a href="#home" className="hover:text-primary-500 transition-all hover:tracking-[0.4em]">Initialize Rise</a>
             <span className="text-gray-900">•</span>
             <span>Refined Dev Stack 2.0</span>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
