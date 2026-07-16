"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [activeSection, setActiveSection] = React.useState("home");
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);

      const sections = navigation.map((item) => item.href.substring(1));
      let current = "home";

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 140) {
            current = section;
          }
        }
      }
      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const isDark = mounted && (resolvedTheme === "dark" || theme === "dark");

  return (
    <motion.header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || isOpen
          ? "border-b border-surface-border/80 bg-surface/90 backdrop-blur-xl dark:border-dark-border dark:bg-dark/90"
          : "border-b border-transparent bg-transparent"
      )}
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      <nav className="container-custom" aria-label="Primary">
        <div className="flex h-16 items-center justify-between sm:h-[4.25rem]">
          <a
            href="#home"
            className="group flex items-center gap-2.5 focus-visible:outline-none"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.55, rotate: -18 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              whileHover={{ scale: 1.1, rotate: 6 }}
              whileTap={{ scale: 0.92 }}
              transition={{ type: "spring", stiffness: 320, damping: 18 }}
              className={cn(
              "relative flex h-9 w-9 overflow-hidden items-center justify-center rounded-lg font-display text-sm font-bold transition-colors",
              scrolled || isOpen
                ? "bg-ink text-white group-hover:bg-primary-700 dark:bg-primary-500 dark:text-ink dark:group-hover:bg-primary-400"
                : "bg-primary-300 text-ink group-hover:bg-white"
            )}
            >
              <span className="line-sweep absolute inset-y-0 w-5 -skew-x-12 bg-white/35 blur-sm" aria-hidden="true" />
              <span className="relative z-10">TW</span>
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.45, delay: 0.15 }}
              className={cn(
              "hidden font-display text-base font-semibold tracking-tight sm:block",
              scrolled || isOpen ? "text-ink dark:text-white" : "text-white"
            )}
            >
              Tebarek
            </motion.span>
          </a>

          <div className="hidden items-center gap-1 lg:flex">
            {navigation.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "relative px-3.5 py-2 text-sm font-medium transition-colors",
                    isActive
                      ? scrolled ? "text-ink dark:text-white" : "text-white"
                      : scrolled
                        ? "text-ink-muted hover:text-ink dark:text-slate-400 dark:hover:text-white"
                        : "text-white/65 hover:text-white"
                  )}
                >
                  {item.name}
                  {isActive && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute inset-x-3.5 -bottom-0.5 h-0.5 rounded-full bg-primary-600 dark:bg-primary-400"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2">
            {mounted && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(isDark ? "light" : "dark")}
                aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
                className={cn(!scrolled && !isOpen && "text-white hover:bg-white/10 hover:text-white")}
              >
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
              </Button>
            )}

            <Button
              size="sm"
              className={cn(
                "hidden md:inline-flex",
                !scrolled && !isOpen && "bg-primary-300 text-ink hover:bg-white dark:bg-primary-300"
              )}
              onClick={() =>
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Hire Me
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className={cn("lg:hidden", !scrolled && !isOpen && "text-white hover:bg-white/10 hover:text-white")}
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="border-t border-surface-border lg:hidden dark:border-dark-border"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
            >
              <div className="flex flex-col gap-1 py-4">
                {navigation.map((item, index) => {
                  const isActive = activeSection === item.href.substring(1);
                  return (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.04 }}
                      className={cn(
                        "rounded-xl px-4 py-3 text-base font-medium transition-colors",
                        isActive
                          ? "bg-primary-50 text-primary-800 dark:bg-primary-500/10 dark:text-primary-300"
                          : "text-ink-muted hover:bg-surface-sunken hover:text-ink dark:text-slate-300 dark:hover:bg-white/5"
                      )}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </motion.a>
                  );
                })}
                <div className="mt-2 border-t border-surface-border pt-4 dark:border-dark-border">
                  <Button
                    className="w-full"
                    onClick={() => {
                      setIsOpen(false);
                      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    Hire Me
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
