"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { personalInfo } from "@/data/portfolio-data";
import { ArrowDownRight, Download, Mail } from "lucide-react";
import Image from "next/image";
import Magnetic from "@/components/ui/magnetic";
import { fadeUp, staggerContainer } from "@/lib/animations";

export function HeroSection() {
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
        <Image
          src="/images/profile.JPG"
          alt={`${personalInfo.name} — ${personalInfo.title}`}
          fill
          className="object-cover object-top"
          priority
          sizes="52vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071318] via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071318]/45 via-transparent to-[#071318]/10" />
      </div>

      {/* Portrait plane — top on mobile/tablet */}
      <div className="absolute inset-x-0 top-0 h-[46svh] overflow-hidden lg:hidden">
        <Image
          src="/images/profile.JPG"
          alt={`${personalInfo.name} — ${personalInfo.title}`}
          fill
          className="object-cover object-top"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071318] via-transparent to-[#071318]/10" />
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
              className="font-display text-[clamp(3.5rem,9vw,7.5rem)] font-bold leading-[0.9] tracking-[-0.055em] text-white"
            >
              Tebarek
              <br />
              <span className="text-primary-300">Wachamo.</span>
            </motion.h1>

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
          <ArrowDownRight className="h-4 w-4" />
        </motion.a>
      </div>
    </section>
  );
}
