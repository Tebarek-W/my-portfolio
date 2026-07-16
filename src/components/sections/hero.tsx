"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { personalInfo } from "@/data/portfolio-data";
import { ArrowDownRight, Code2, Download, Mail, MapPin } from "lucide-react";
import Image from "next/image";
import Magnetic from "@/components/ui/magnetic";
import { fadeUp, staggerContainer } from "@/lib/animations";

export function HeroSection() {
  const prefersReducedMotion = useReducedMotion();

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/cv/Tebarek_Wachamo_Resume.pdf";
    link.download = "Tebarek-WachamoCV.pdf";
    link.click();
  };

  const handleHireMe = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-[#071318]"
    >
      {/* Portrait plane — right side on desktop */}
      <div className="absolute inset-y-0 right-0 hidden w-[52%] overflow-hidden lg:block">
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.06 }}
          animate={
            prefersReducedMotion
              ? { opacity: 1, scale: 1 }
              : { opacity: 1, scale: [1.04, 1.11, 1.04], x: [0, -8, 0] }
          }
          transition={{
            opacity: { duration: 0.9 },
            scale: { duration: 8, repeat: Infinity, ease: "easeInOut" },
            x: { duration: 8, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          <Image
            src="/images/profile.JPG"
            alt={`${personalInfo.name} — ${personalInfo.title}`}
            fill
            className="object-cover object-top"
            priority
            sizes="52vw"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#071318] via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071318]/45 via-transparent to-[#071318]/10" />
        <motion.div
          className="absolute bottom-0 left-0 top-0 w-px bg-gradient-to-b from-transparent via-primary-300/80 to-transparent"
          animate={prefersReducedMotion ? undefined : { opacity: [0.25, 1, 0.25] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          aria-hidden="true"
        />

        {/* Expressive portrait frame */}
        <div className="portrait-glow-frame pointer-events-none bottom-7 left-7 right-7 top-24 z-10 xl:bottom-10 xl:left-10 xl:right-10 xl:top-28" aria-hidden="true" />
        <div className="pointer-events-none absolute bottom-10 left-10 right-10 top-28 z-10 rounded-b-[1.65rem] border-x-2 border-b-2 border-white/25 shadow-[inset_0_0_28px_rgba(94,234,212,0.08)] xl:bottom-14 xl:left-14 xl:right-14 xl:top-32" aria-hidden="true" />

        {/* Architectural corner details */}
        <div className="pointer-events-none absolute left-7 top-24 z-20 h-16 w-16 rounded-tl-[2rem] border-l-[3px] border-t-[3px] border-primary-200 shadow-[-5px_-5px_18px_rgba(94,234,212,0.35)] xl:left-10 xl:top-28" aria-hidden="true" />
        <div className="pointer-events-none absolute bottom-7 right-7 z-20 h-16 w-16 rounded-br-[2rem] border-b-[3px] border-r-[3px] border-blue-300 shadow-[5px_5px_18px_rgba(96,165,250,0.35)] xl:bottom-10 xl:right-10" aria-hidden="true" />

        <motion.div
          className="absolute right-12 top-24 z-20 flex items-center gap-2 rounded-xl border border-white/15 bg-[#071318]/65 px-3 py-2 text-xs font-semibold text-white shadow-xl backdrop-blur-md xl:right-16"
          animate={prefersReducedMotion ? undefined : { y: [0, -8, 0], rotate: [0, 1.5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <Code2 className="h-4 w-4 text-primary-300" aria-hidden="true" />
          Full-stack builder
        </motion.div>

        <motion.div
          className="absolute bottom-16 left-16 z-20 flex items-center gap-2 rounded-xl border border-white/15 bg-[#071318]/65 px-3 py-2 text-xs font-semibold text-white shadow-xl backdrop-blur-md"
          animate={prefersReducedMotion ? undefined : { y: [0, 7, 0], rotate: [0, -1.5, 0] }}
          transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        >
          <MapPin className="h-4 w-4 text-amber-300" aria-hidden="true" />
          Addis Ababa
        </motion.div>
      </div>

      {/* Portrait plane — top on mobile/tablet */}
      <div className="absolute inset-x-0 top-0 h-[46svh] overflow-hidden lg:hidden">
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.04 }}
          animate={
            prefersReducedMotion
              ? { opacity: 1, scale: 1 }
              : { opacity: 1, scale: [1.02, 1.06, 1.02] }
          }
          transition={{
            opacity: { duration: 0.8 },
            scale: { duration: 10, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          <Image
            src="/images/profile.JPG"
            alt={`${personalInfo.name} — ${personalInfo.title}`}
            fill
            className="object-cover object-top"
            priority
            sizes="100vw"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#071318] via-transparent to-[#071318]/10" />
        <div className="portrait-glow-frame pointer-events-none bottom-4 left-4 right-4 top-20 z-10 rounded-2xl" aria-hidden="true" />
        <div className="pointer-events-none absolute left-4 top-20 z-20 h-11 w-11 rounded-tl-2xl border-l-[3px] border-t-[3px] border-primary-200" aria-hidden="true" />
        <div className="pointer-events-none absolute bottom-4 right-4 z-20 h-11 w-11 rounded-br-2xl border-b-[3px] border-r-[3px] border-blue-300" aria-hidden="true" />
      </div>

      <div
        className="absolute inset-y-0 left-0 w-full opacity-30 lg:w-[52%]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage: "radial-gradient(ellipse at center, black, transparent 78%)",
        }}
      />
      <motion.div
        className="ambient-drift absolute -left-28 top-1/3 h-80 w-80 rounded-full bg-primary-400/20 blur-[100px]"
        aria-hidden="true"
      />

      <div className="container-custom relative z-10 pb-12 pt-[48svh] sm:pb-16 lg:py-28">
        <div className="grid lg:grid-cols-12">
          <motion.div
            className="flex max-w-3xl flex-col lg:col-span-6 lg:pr-12 xl:pr-16"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.p
              variants={fadeUp}
              className="mb-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-primary-300"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-500 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary-300" />
              </span>
              Available for opportunities
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="font-display text-[clamp(2.75rem,6vw,5.75rem)] font-bold leading-[0.92] tracking-[-0.045em] text-white"
            >
              <span className="block overflow-hidden pb-1">
                <motion.span
                  className="block"
                  initial={{ y: "110%", x: -35, opacity: 0, filter: "blur(10px)" }}
                  animate={{ y: 0, x: 0, opacity: 1, filter: "blur(0px)" }}
                  whileHover={{ x: 8 }}
                  transition={{ duration: 0.9, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
                >
                  Tebarek
                </motion.span>
              </span>
              <span className="block overflow-hidden pb-2">
                <motion.span
                  className="hero-name-gradient block"
                  initial={{ y: "110%", x: 35, opacity: 0, filter: "blur(10px)" }}
                  animate={{ y: 0, x: 0, opacity: 1, filter: "blur(0px)" }}
                  whileHover={{ x: 8 }}
                  transition={{ duration: 0.9, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
                >
                  Wachamo.
                </motion.span>
              </span>
            </motion.h1>

            <motion.div
              className="mt-4 h-1 w-28 origin-left rounded-full bg-gradient-to-r from-primary-300 via-blue-400 to-amber-400"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
            />

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-xl font-display text-lg font-medium text-white/90 sm:text-2xl"
            >
              Full-stack engineer crafting digital products with clarity, character,
              and performance.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="mt-4 max-w-xl text-sm leading-relaxed text-white/65 sm:text-base"
            >
              From polished interfaces to scalable APIs, I turn ambitious ideas into
              products people enjoy using.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <Magnetic>
                <Button
                  size="lg"
                  onClick={handleHireMe}
                  className="w-full bg-primary-300 text-ink hover:bg-white dark:bg-primary-300 dark:hover:bg-white sm:w-auto"
                >
                  <Mail className="h-4 w-4" />
                  Get in touch
                </Button>
              </Magnetic>
              <Magnetic>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={handleDownloadCV}
                  className="w-full border-white/30 bg-white/5 text-white backdrop-blur-sm hover:border-white/60 hover:bg-white/10 dark:border-white/30 dark:text-white sm:w-auto"
                >
                  <Download className="h-4 w-4" />
                  Download CV
                </Button>
              </Magnetic>
            </motion.div>

          </motion.div>
        </div>

        <motion.a
          href="#about"
          className="absolute bottom-8 right-8 hidden items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/60 transition-colors hover:text-white lg:inline-flex"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          Scroll to explore
          <motion.span
            animate={prefersReducedMotion ? undefined : { x: [0, 4, 0], y: [0, 4, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDownRight className="h-4 w-4" />
          </motion.span>
        </motion.a>
      </div>
    </section>
  );
}
