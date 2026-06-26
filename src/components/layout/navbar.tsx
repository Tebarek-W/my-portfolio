"use client";

import * as React from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { Moon, Sun, Menu, X, Rocket } from "lucide-react";
import { useEffect, useState } from "react";
import Magnetic from "@/components/ui/magnetic";

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
  const { theme, setTheme } = useTheme();
  const [activeSection, setActiveSection] = React.useState("home");
  const [mounted, setMounted] = useState(false);
  
  const { scrollY } = useScroll();
  const navBackground = useTransform(
    scrollY,
    [0, 50],
    ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.8)"]
  );
  
  const navBackgroundDark = useTransform(
    scrollY,
    [0, 50],
    ["rgba(14, 17, 23, 0)", "rgba(14, 17, 23, 0.85)"]
  );

  const blurValue = useTransform(
    scrollY,
    [0, 50],
    ["blur(0px)", "blur(12px)"]
  );

  const borderOpacity = useTransform(
    scrollY,
    [0, 50],
    [0, 1]
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navigation.map((item) => item.href.substring(1));
      let current = "home";
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Adding offset to trigger active state earlier
          if (rect.top <= 150) {
            current = section;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) {
    return (
      <nav className="fixed top-0 w-full z-50 py-4 transition-all duration-300">
        <div className="container-custom">
          <div className="flex justify-between items-center h-12">
            <div className="text-2xl font-bold bg-gradient-to-r from-primary-500 to-primary-700 bg-clip-text text-transparent">
              TW
            </div>
            
            <div className="hidden md:flex space-x-8">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="px-3 py-2 text-sm font-medium text-gray-600 dark:text-gray-300"
                >
                  {item.name}
                </a>
              ))}
            </div>

            <div className="w-9 h-9 opacity-0">
              <Sun size={20} />
            </div>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <motion.nav
      className="fixed top-0 w-full z-50 transition-all duration-300"
      style={{
        background: theme === 'dark' ? navBackgroundDark : navBackground,
        backdropFilter: blurValue,
        borderBottom: `1px solid rgba(${theme === 'dark' ? '255, 255, 255' : '0, 0, 0'}, ${borderOpacity.get() * 0.1})`
      }}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="container-custom">
        <div className="flex justify-between items-center py-3">
          <Magnetic>
            <motion.div
              className="text-2xl font-bold font-display cursor-pointer flex items-center gap-2 group"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-accent-violet flex items-center justify-center text-white text-sm">
                TW
              </div>
              <span className="hidden sm:block text-lg bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 group-hover:from-primary-500 group-hover:to-accent-violet transition-all">
                Tebarek
              </span>
            </motion.div>
          </Magnetic>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1 p-1 rounded-full bg-gray-100/50 dark:bg-white/5 border border-gray-200/50 dark:border-white/10">
            {navigation.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors rounded-full ${
                    isActive
                      ? "text-primary-600 dark:text-primary-400"
                      : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      className="absolute inset-0 bg-white dark:bg-white/10 shadow-sm rounded-full z-0 border border-gray-200/50 dark:border-white/10"
                      layoutId="activeNavSection"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.name}</span>
                </a>
              );
            })}
          </div>

          <div className="flex items-center space-x-2">
            <Magnetic>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                aria-label="Toggle theme"
                className="rounded-full w-10 h-10 p-0 border border-transparent hover:border-gray-200 dark:hover:border-white/10"
              >
                <div className="relative w-5 h-5 flex items-center justify-center text-gray-600 dark:text-gray-300">
                  <motion.div
                    initial={false}
                    animate={{ 
                      rotate: theme === "dark" ? 0 : 90,
                      scale: theme === "dark" ? 1 : 0,
                      opacity: theme === "dark" ? 1 : 0
                    }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <Moon size={18} />
                  </motion.div>
                  <motion.div
                    initial={false}
                    animate={{ 
                      rotate: theme === "dark" ? -90 : 0,
                      scale: theme === "dark" ? 0 : 1,
                      opacity: theme === "dark" ? 0 : 1
                    }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <Sun size={18} />
                  </motion.div>
                </div>
              </Button>
            </Magnetic>

            <div className="hidden md:block pl-2">
              <Magnetic>
                <Button
                  size="sm"
                  className="rounded-full bg-gray-900 text-white hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100 font-medium px-5"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <Rocket className="w-4 h-4 mr-2 text-primary-500" />
                  Hire Me
                </Button>
              </Magnetic>
            </div>

            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden rounded-full w-10 h-10 p-0"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="lg:hidden overflow-hidden absolute top-full left-0 w-full bg-white/95 dark:bg-[#0e1117]/95 backdrop-blur-xl border-b border-gray-200 dark:border-white/10 shadow-xl"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="flex flex-col space-y-1 p-4">
                {navigation.map((item, index) => {
                  const isActive = activeSection === item.href.substring(1);
                  return (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.05 }}
                      className={`px-4 py-3 text-base font-medium transition-all rounded-xl flex items-center ${
                        isActive
                          ? "bg-primary-50 dark:bg-white/5 text-primary-600 dark:text-primary-400"
                          : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-white/5"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {isActive && <div className="w-1.5 h-1.5 rounded-full bg-primary-500 mr-3" />}
                      {item.name}
                    </motion.a>
                  );
                })}
                <div className="pt-4 mt-2 border-t border-gray-100 dark:border-white/5">
                  <Button
                    className="w-full rounded-xl"
                    onClick={() => {
                      setIsOpen(false);
                      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    <Rocket className="w-4 h-4 mr-2" />
                    Hire Me
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
