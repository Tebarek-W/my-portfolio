"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { Moon, Sun, Menu, X } from "lucide-react";
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

  // Ensure we're mounted to avoid hydration issues
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navigation.map((item) => item.href.substring(1));
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      setActiveSection(current || "home");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Don't render theme-dependent content until mounted
  if (!mounted) {
    return (
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-set-7xl">
          <div className="flex justify-between items-center py-4">
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
      className="fixed top-0 w-full glass z-50 transition-all duration-300"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="container-custom">
        <div className="flex justify-between items-center py-4">
          <Magnetic>
            <motion.div
              className="text-2xl font-bold font-display gradient-text cursor-pointer"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              TW
            </motion.div>
          </Magnetic>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navigation.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? "text-primary-600 dark:text-primary-400"
                      : "text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <motion.div
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-600 dark:bg-primary-400"
                      layoutId="activeSection"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          <div className="flex items-center space-x-4">
            <Magnetic>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                aria-label="Toggle theme"
                className="rounded-full"
              >
                <div className="relative w-5 h-5">
                  <motion.div
                    initial={false}
                    animate={{ 
                      rotate: theme === "dark" ? 0 : 90,
                      scale: theme === "dark" ? 1 : 0,
                      opacity: theme === "dark" ? 1 : 0
                    }}
                    className="absolute inset-0"
                  >
                    <Sun size={20} />
                  </motion.div>
                  <motion.div
                    initial={false}
                    animate={{ 
                      rotate: theme === "dark" ? -90 : 0,
                      scale: theme === "dark" ? 0 : 1,
                      opacity: theme === "dark" ? 0 : 1
                    }}
                    className="absolute inset-0"
                  >
                    <Moon size={20} />
                  </motion.div>
                </div>
              </Button>
            </Magnetic>

            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
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
              className="md:hidden py-4 border-t border-gray-200 dark:border-gray-800 overflow-hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="flex flex-col space-y-4">
                {navigation.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.05 }}
                    className={`px-3 py-2 text-base font-medium transition-colors ${
                      activeSection === item.href.substring(1)
                        ? "text-primary-600 dark:text-primary-400"
                        : "text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
