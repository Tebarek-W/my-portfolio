"use client";

import { socialLinks, personalInfo } from "@/data/portfolio-data";
import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Phone, Github, Linkedin, Code, ArrowUp } from "lucide-react";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export function Footer() {
  const [currentYear] = useState<number>(new Date().getFullYear());

  const getSocialIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case "github":
        return <Github className="h-4 w-4" />;
      case "linkedin":
        return <Linkedin className="h-4 w-4" />;
      case "email":
        return <Mail className="h-4 w-4" />;
      default:
        return <Code className="h-4 w-4" />;
    }
  };

  return (
    <footer className="border-t border-surface-border bg-surface-raised dark:border-dark-border dark:bg-dark">
      <div className="container-custom py-14 sm:py-16">
        <motion.div
          className="mb-12 grid gap-10 md:grid-cols-12"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          <motion.div variants={fadeUp} className="md:col-span-5">
            <a
              href="#home"
              className="inline-flex items-center gap-2.5"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-ink font-display text-sm font-bold text-white dark:bg-primary-500 dark:text-ink">
                TW
              </span>
              <span className="font-display text-lg font-semibold text-ink dark:text-white">
                Tebarek Wachamo
              </span>
            </a>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink-muted dark:text-slate-400">
              Full-stack engineer focused on high-performance architecture, scalable
              systems, and refined user experiences.
            </p>
            <div className="mt-6 flex gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-surface-border text-ink-muted transition-colors hover:border-primary-600/40 hover:text-primary-700 dark:border-dark-border dark:text-slate-400 dark:hover:border-primary-400/40 dark:hover:text-primary-300"
                  aria-label={social.name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {getSocialIcon(social.name)}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="md:col-span-3">
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-ink-faint dark:text-slate-500">
              Navigate
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-ink-muted transition-colors hover:text-ink dark:text-slate-400 dark:hover:text-white"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={fadeUp} className="md:col-span-4">
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-ink-faint dark:text-slate-500">
              Get in touch
            </h4>
            <div className="space-y-3">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-3 text-sm font-medium text-ink transition-colors hover:text-primary-700 dark:text-slate-200 dark:hover:text-primary-300"
              >
                <Mail className="h-4 w-4 shrink-0 text-primary-600 dark:text-primary-400" />
                {personalInfo.email}
              </a>
              <a
                href={`tel:${personalInfo.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-3 text-sm font-medium text-ink transition-colors hover:text-primary-700 dark:text-slate-200 dark:hover:text-primary-300"
              >
                <Phone className="h-4 w-4 shrink-0 text-primary-600 dark:text-primary-400" />
                {personalInfo.phone}
              </a>
              <p className="pt-2 text-xs text-ink-faint dark:text-slate-500">
                <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Open to remote and onsite roles
              </p>
            </div>
          </motion.div>
        </motion.div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-surface-border pt-8 dark:border-dark-border sm:flex-row">
          <p className="text-center text-xs text-ink-faint dark:text-slate-500 sm:text-left">
            © {currentYear} Tebarek Wachamo. All rights reserved.
          </p>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="inline-flex items-center gap-2 text-xs font-medium text-ink-muted transition-colors hover:text-ink dark:text-slate-400 dark:hover:text-white"
          >
            Back to top
            <ArrowUp className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
