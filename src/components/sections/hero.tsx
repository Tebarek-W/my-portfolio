"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { personalInfo } from "@/data/portfolio-data";
import { Download, Mail } from "lucide-react";
import Image from "next/image";
import Magnetic from "@/components/ui/magnetic";
import React from "react";

export function HeroSection() {
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/cv/Tebarek_Wachamo_Resume.pdf';
    link.download = 'Tebarek-WachamoCV.pdf';
    link.click();
  };

  const handleHireMe = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  // 3D Tilt Effect logic
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } },
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
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-bold font-display mb-6 tracking-tight"
              variants={itemVariants}
            >
              Hi, I&apos;m{" "}
              <motion.span 
                className="gradient-text inline-block"
                whileHover={{ scale: 1.05, filter: "brightness(1.2)" }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {personalInfo.name}
              </motion.span>
            </motion.h1>

            <motion.div
              className="text-xl md:text-2xl lg:text-3xl font-sans text-gray-600 dark:text-gray-300 mb-8"
              variants={itemVariants}
            >
              <span className="font-medium bg-white/40 dark:bg-white/5 backdrop-blur-sm px-4 py-1 rounded-full border border-white/20">
                {personalInfo.title}
              </span> 
            </motion.div>

            <motion.p
              className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl"
              variants={itemVariants}
            >
              {personalInfo.description}
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              variants={itemVariants}
            >
              <Magnetic>
                <Button
                  size="lg"
                  onClick={handleHireMe}
                  className="group relative overflow-hidden"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Hire Me
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                  <motion.div 
                    className="absolute inset-0 bg-white/20"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.5 }}
                  />
                </Button>
              </Magnetic>
              <Magnetic>
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
              </Magnetic>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          >
            <motion.div 
              className="relative w-96 h-96 mx-auto lg:mx-0 cursor-pointer"
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              {/* Animated gradient border */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full animate-spin-slow opacity-50 blur-xl" style={{ animation: 'spin 10s linear infinite' }}></div>
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-500 via-accent-violet to-accent-cyan rounded-full animate-spin-slow" style={{ animation: 'spin 15s linear infinite reverse' }}></div>
              
              {/* Profile image container */}
              <motion.div 
                className="absolute inset-4 bg-white dark:bg-gray-900 rounded-full overflow-hidden border-4 border-white/10 dark:border-white/5 shadow-2xl"
                style={{ transform: "translateZ(50px)" }}
              >
                <Image
                  src="/images/profile.JPG"
                  alt={`${personalInfo.name} - ${personalInfo.title}`}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover rounded-full transition-transform duration-500 hover:scale-110"
                  priority
                />
              </motion.div>
              
              {/* Floating tech elements (optional decoration) */}
              <motion.div 
                className="absolute -top-4 -right-4 w-12 h-12 bg-white dark:bg-gray-800 rounded-2xl shadow-lg flex items-center justify-center border border-white/20"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                style={{ transform: "translateZ(80px)" }}
              >
                <span className="text-xl">🚀</span>
              </motion.div>
              <motion.div 
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-white dark:bg-gray-800 rounded-2xl shadow-lg flex items-center justify-center border border-white/20"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                style={{ transform: "translateZ(60px)" }}
              >
                <span className="text-xl">✨</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
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
