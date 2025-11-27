"use client";

import { socialLinks } from "@/data/portfolio-data";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function Footer() {
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  useEffect(() => {
    // This will only run on the client side
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="container-custom">
        <div className="py-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.div
              className="text-center md:text-left mb-6 md:mb-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold gradient-text mb-2">
                Tebarek Wachamo
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Full-Stack Developer
              </p>
            </motion.div>

            <motion.div
              className="flex space-x-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  aria-label={social.name}
                >
                  <span className="sr-only">{social.name}</span>
                  {/* Add social icons here */}
                </a>
              ))}
            </motion.div>
          </div>

          <motion.div
            className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <p className="text-gray-500 dark:text-gray-400">
              © {currentYear || "2024"} Tebarek Wachamo. All rights reserved.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}