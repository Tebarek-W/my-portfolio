"use client";

import { socialLinks } from "@/data/portfolio-data";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function Footer() {
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-black text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="container-custom relative z-10 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-center md:text-left"
            >
              <h3 className="text-3xl font-bold font-display gradient-text mb-4">
                Tebarek Wachamo
              </h3>
              <p className="text-gray-400 font-sans max-w-sm">
                Building refined digital experiences through thoughtful design and high-performance engineering.
              </p>
            </motion.div>

            <motion.div
              className="flex flex-col items-center md:items-end gap-6"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    className="w-12 h-12 bg-white/5 hover:bg-white/10 rounded-full flex items-center justify-center transition-all border border-white/5 group"
                    aria-label={social.name}
                  >
                    <span className="font-display text-gray-500 group-hover:text-primary-500 font-bold">{social.name.charAt(0)}</span>
                  </a>
                ))}
              </div>
              <p className="text-xs font-bold uppercase tracking-widest text-gray-600">
                Ethically built with Next.js & Framer Motion
              </p>
            </motion.div>
        </div>

        <motion.div
          className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-sm text-gray-500 font-sans">
            © {currentYear || "2026"} Tebarek Wachamo. All rights reserved.
          </p>
          <div className="flex gap-8 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-700">
             <a href="#home" className="hover:text-primary-500 transition-colors">Back to Top</a>
             <span>Open for Opportunities</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}