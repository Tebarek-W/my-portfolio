"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { personalInfo } from "@/data/portfolio-data";
import { Download, Mail } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/cv/Tebarek CV1.pdf';
    link.download = 'Tebarek-Wachamo CV.pdf';
    link.click();
  };

  const handleHireMe = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-10">
      {/* Mesh Gradient Background */}
      <div className="absolute inset-0 mesh-gradient opacity-60 dark:opacity-40" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-float" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-accent-violet/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-accent-cyan/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-float" style={{ animationDelay: '4s' }} />
      </div>

      <div className="container-custom relative z-10 pt-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-bold font-display mb-6 tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Hi, I&apos;m{" "}
              <span className="gradient-text">{personalInfo.name}</span>
            </motion.h1>

            <motion.div
              className="text-xl md:text-2xl lg:text-3xl font-sans text-gray-600 dark:text-gray-300 mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <span className="font-medium bg-white/40 dark:bg-white/5 backdrop-blur-sm px-4 py-1 rounded-full border border-white/20">
                {personalInfo.title}
              </span> 
            </motion.div>

            <motion.p
              className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              {personalInfo.description}
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <Button
                size="lg"
                onClick={handleHireMe}
                className="group"
              >
                <Mail className="mr-2 h-5 w-5" />
                Hire Me
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={handleDownloadCV}
                className="group"
              >
                <Download className="mr-2 h-5 w-5" />
                Download CV
                <span className="ml-2 group-hover:translate-y-1 transition-transform">↓</span>
              </Button>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-80 h-80 mx-auto lg:mx-0">
              {/* Animated gradient border */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full animate-spin-slow" style={{ animation: 'spin 10s linear infinite' }}></div>
              
              {/* Profile image container */}
              <div className="absolute inset-4 bg-white dark:bg-gray-900 rounded-full overflow-hidden">
                <Image
                  src="/images/profile.JPG"
                  alt={`${personalInfo.name} - ${personalInfo.title}`}
                  width={320}
                  height={320}
                  className="w-full h-full object-cover rounded-full"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <div className="flex flex-col items-center">
            <span className="text-sm text-gray-500 dark:text-gray-400 mb-2">
              Scroll Down
            </span>
            <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
              <motion.div
                className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}