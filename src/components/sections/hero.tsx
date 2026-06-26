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

  // 3D Tilt Effect logic - Optimized for professional feel
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);
  
  // Floating elements variants
  const floatVariants = (delay: number) => ({
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut" as const,
        delay
      }
    }
  });

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
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } },
  };

  const techStack = ["React", "Next.js", "TypeScript", "Node.js", "TailwindCSS", "PostgreSQL", "Supabase"];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 pb-10">
      {/* Mesh Gradient Background */}
      <div className="absolute inset-0 mesh-gradient opacity-60 dark:opacity-40" />
      <div className="absolute inset-0 noise-overlay" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary-200/30 rounded-full mix-blend-multiply filter blur-[100px] opacity-70 animate-float" />
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-accent-violet/20 rounded-full mix-blend-multiply filter blur-[100px] opacity-70 animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-1/4 left-1/2 w-[600px] h-[600px] bg-accent-cyan/20 rounded-full mix-blend-multiply filter blur-[120px] opacity-70 animate-float" style={{ animationDelay: '4s' }} />
      </div>

      <div className="container-custom relative z-10 pt-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Text Content */}
          <motion.div
            className="text-center lg:text-left lg:col-span-7 flex flex-col justify-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="mb-6 flex justify-center lg:justify-start">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/50 dark:bg-white/5 border border-gray-200 dark:border-white/10 backdrop-blur-md shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-xs font-medium text-gray-700 dark:text-gray-300">Available for new opportunities</span>
              </div>
            </motion.div>

            <motion.h1
              className="font-bold font-display mb-6 tracking-tight leading-[1.1] text-balance flex flex-col"
              variants={itemVariants}
            >
              <span className="text-3xl md:text-4xl text-gray-800 dark:text-gray-200 mb-2 font-medium">
                Hi, I&apos;m
              </span>
              <motion.span 
                className="text-5xl md:text-6xl lg:text-7xl xl:text-[4.5rem] bg-gradient-to-r from-primary-500 via-accent-violet to-accent-cyan bg-clip-text text-transparent inline-block pb-2 drop-shadow-sm"
                whileHover={{ scale: 1.02, filter: "brightness(1.15) drop-shadow(0 0 15px rgba(139, 92, 246, 0.5))" }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {personalInfo.name}
              </motion.span>
            </motion.h1>

            <motion.div
              className="text-lg sm:text-xl md:text-2xl font-sans text-gray-600 dark:text-gray-300 mb-6"
              variants={itemVariants}
            >
              <span className="font-semibold text-gray-900 dark:text-white">
                {personalInfo.title}
              </span> 
            </motion.div>

            <motion.p
              className="text-lg text-gray-600 dark:text-gray-400 mb-10 max-w-2xl text-balance leading-relaxed"
              variants={itemVariants}
            >
              {personalInfo.description}
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
              variants={itemVariants}
            >
              <Magnetic>
                <Button
                  size="lg"
                  onClick={handleHireMe}
                  className="group relative overflow-hidden bg-gradient-to-r from-primary-600 to-accent-violet hover:from-primary-700 hover:to-accent-violet/90 text-white shadow-xl shadow-primary-500/25 min-w-[160px] rounded-xl"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Hire Me
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                  <motion.div 
                    className="absolute inset-0 bg-white/20 dark:bg-black/10"
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
                  className="group border-gray-300 text-gray-700 hover:bg-gray-50 dark:border-white/20 dark:text-gray-200 dark:hover:bg-white/10 min-w-[160px] bg-white/70 dark:bg-white/5 backdrop-blur-xl rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download CV
                  <span className="ml-2 group-hover:translate-y-1 transition-transform">↓</span>
                </Button>
              </Magnetic>
            </motion.div>

            {/* Tech Ticker */}
            <motion.div 
              variants={itemVariants}
              className="hidden lg:flex items-center gap-4 text-sm font-medium text-gray-500 dark:text-gray-400"
            >
              <span className="uppercase tracking-wider text-xs font-bold">Tech Stack:</span>
              <div className="flex gap-4 items-center">
                {techStack.map((tech, i) => (
                  <React.Fragment key={tech}>
                    <span className="hover:text-primary-500 transition-colors cursor-default">{tech}</span>
                    {i < techStack.length - 1 && <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-700" />}
                  </React.Fragment>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            className="relative lg:col-span-5 flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div 
              className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-[420px] lg:h-[420px] cursor-pointer group/image"
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              {/* Professional soft glow instead of spinning borders */}
              <motion.div 
                className="absolute inset-0 bg-primary-500/20 dark:bg-primary-500/10 rounded-full blur-3xl"
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              
              {/* Animated rings */}
              <div className="absolute inset-2 border border-gray-200 dark:border-white/5 rounded-full z-0" />
              <div className="absolute inset-[-10px] border border-dashed border-gray-200 dark:border-white/5 rounded-full z-0 animate-spin-slow opacity-50" />
              
              {/* Profile image container */}
              <motion.div 
                className="absolute inset-4 bg-white dark:bg-gray-900 rounded-full overflow-hidden border-4 border-white/80 dark:border-white/10 shadow-2xl backdrop-blur-sm"
                style={{ transform: "translateZ(50px)" }}
              >
                <Image
                  src="/images/profile.JPG"
                  alt={`${personalInfo.name} - ${personalInfo.title}`}
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover/image:scale-105 translate-y-2"
                  priority
                  sizes="(max-width: 768px) 288px, (max-width: 1024px) 320px, 420px"
                />
                
                {/* Subtle overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-500" />
              </motion.div>
              
              {/* Floating tech elements - Scaled down and slowed for professionalism */}
              <motion.div 
                className="absolute top-8 right-4 w-12 h-12 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-xl shadow-xl flex items-center justify-center border border-gray-100 dark:border-white/10"
                variants={floatVariants(0)}
                animate="animate"
                style={{ transform: "translateZ(80px)" }}
              >
                <span className="text-xl">🚀</span>
              </motion.div>
              <motion.div 
                className="absolute bottom-12 left-2 w-12 h-12 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-xl shadow-xl flex items-center justify-center border border-gray-100 dark:border-white/10"
                variants={floatVariants(1.5)}
                animate="animate"
                style={{ transform: "translateZ(60px)" }}
              >
                <span className="text-xl">✨</span>
              </motion.div>
              <motion.div 
                className="absolute -top-4 left-1/4 w-10 h-10 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-xl shadow-xl flex items-center justify-center border border-gray-100 dark:border-white/10"
                variants={floatVariants(2.5)}
                animate="animate"
                style={{ transform: "translateZ(40px)" }}
              >
                <span className="text-lg">💻</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <div className="flex flex-col items-center">
            <span className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-3">
              Scroll
            </span>
            <div className="w-6 h-10 border-2 border-gray-300 dark:border-gray-600 rounded-full flex justify-center p-1 relative">
              <motion.div
                className="w-1 h-2 bg-gray-400 dark:bg-gray-500 rounded-full"
                animate={{ y: [0, 16, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
