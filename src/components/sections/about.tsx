"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { personalInfo } from "@/data/portfolio-data";
import { Code, Coffee, Music, Plane, GraduationCap } from "lucide-react";

const funFacts = [
  {
    icon: GraduationCap,
    title: "Degree",
    value: "BSc CS",
    description: "Haramaya University",
  },
  {
    icon: Code,
    title: "Lines of Code",
    value: "500K+",
    description: "Written throughout my journey",
  },
  {
    icon: Coffee,
    title: "Coffee Cups",
    value: "∞",
    description: "Fueling development sessions",
  },
  {
    icon: Music,
    title: "Playlists",
    value: "50+",
    description: "Coding focus playlists",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Computer Science Graduate from Haramaya University passionate about creating digital solutions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold mb-6">My Journey</h3>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                Hello! I'm {personalInfo.name}, a passionate full-stack
                developer with a <strong>Bachelor's degree in Computer Science from Haramaya University</strong>, 
                which I completed in June 2025. My academic journey provided me with a comprehensive 
                foundation in software engineering principles, algorithms, data structures, and computer systems.
              </p>
              <p>
                I specialize in modern JavaScript frameworks like React and
                Next.js, and I love working with TypeScript to build robust,
                scalable applications. On the backend, I'm proficient with
                Node.js, Python, and various databases, leveraging both my academic 
                knowledge and practical experience to create innovative solutions.
              </p>
              <p>
                My education equipped me with strong problem-solving skills and 
                theoretical understanding that I now apply to real-world development 
                challenges. I'm excited to bring my fresh perspective and up-to-date 
                knowledge to create impactful digital experiences.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {funFacts.map((fact, index) => (
              <motion.div
                key={fact.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="text-center card-hover">
                  <CardContent className="p-6">
                    <fact.icon className="w-12 h-12 text-primary-600 mx-auto mb-4" />
                    <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {fact.value}
                    </h4>
                    <p className="font-semibold text-gray-700 dark:text-gray-300 mb-1">
                      {fact.title}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {fact.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Education & Experience Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-center mb-12">
            My Journey Timeline
          </h3>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary-200 dark:bg-primary-800"></div>

              {/* 2025 - Graduation */}
              <div className="flex items-start mb-12">
                <div className="w-1/2 pr-8">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-end mb-4">
                        <GraduationCap className="w-8 h-8 text-primary-600 ml-4 flex-shrink-0" />
                        <div className="text-right">
                          <h4 className="text-xl font-bold">Graduated - Haramaya University</h4>
                          <p className="text-primary-600 dark:text-primary-400 font-semibold">
                            Bachelor of Science in Computer Science
                          </p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            June 2025
                          </p>
                        </div>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300">
                        Successfully completed my Computer Science degree with 
                        comprehensive knowledge in software engineering, algorithms, 
                        data structures, database systems, and computer networks. 
                        Ready to apply my academic foundation to professional challenges.
                      </p>
                      <div className="flex flex-wrap gap-2 justify-end mt-3">
                        <span className="px-2 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 text-xs rounded-md">
                          Software Engineering
                        </span>
                        <span className="px-2 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 text-xs rounded-md">
                          Algorithms & Data Structures
                        </span>
                        <span className="px-2 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 text-xs rounded-md">
                          Database Systems
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <div className="w-8 h-8 bg-primary-600 rounded-full border-4 border-white dark:border-gray-900 z-10 mt-4"></div>
                <div className="w-1/2"></div>
              </div>

              {/* 2022-2025 - University Studies */}
              <div className="flex items-start mb-12 flex-row-reverse">
                <div className="w-1/2 pl-8">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="text-left">
                          <h4 className="text-xl font-bold">University Studies & Skill Development</h4>
                          <p className="text-primary-600 dark:text-primary-400 font-semibold">
                            2022 - 2025
                          </p>
                        </div>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300">
                        Pursued Computer Science degree while simultaneously developing 
                        practical full-stack development skills. Built projects using 
                        React, Next.js, Node.js, and modern web technologies, applying 
                        theoretical knowledge to real-world applications.
                      </p>
                    </CardContent>
                  </Card>
                </div>
                <div className="w-8 h-8 bg-primary-600 rounded-full border-4 border-white dark:border-gray-900 z-10 mt-4"></div>
                <div className="w-1/2"></div>
              </div>

              {/* 2023-2024 - Advanced Projects */}
              <div className="flex items-start mb-12">
                <div className="w-1/2 pr-8">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-end mb-4">
                        <div className="text-right">
                          <h4 className="text-xl font-bold">Advanced Project Development</h4>
                          <p className="text-primary-600 dark:text-primary-400 font-semibold">
                            2023 - 2024
                          </p>
                        </div>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300">
                        Developed complex full-stack applications and portfolio projects 
                        using modern technologies. Gained expertise in TypeScript, 
                        responsive design, API development, and deployment while 
                        balancing academic responsibilities.
                      </p>
                    </CardContent>
                  </Card>
                </div>
                <div className="w-8 h-8 bg-primary-600 rounded-full border-4 border-white dark:border-gray-900 z-10 mt-4"></div>
                <div className="w-1/2"></div>
              </div>

              {/* 2022 - Started Journey */}
              <div className="flex items-start mb-12 flex-row-reverse">
                <div className="w-1/2 pl-8">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="text-left">
                          <h4 className="text-xl font-bold">Programming Journey Begins</h4>
                          <p className="text-primary-600 dark:text-primary-400 font-semibold">
                            2022
                          </p>
                        </div>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300">
                        Started my Computer Science degree and began exploring 
                        web development fundamentals. Built first projects and 
                        discovered passion for creating digital solutions through code.
                      </p>
                    </CardContent>
                  </Card>
                </div>
                <div className="w-8 h-8 bg-primary-600 rounded-full border-4 border-white dark:border-gray-900 z-10 mt-4"></div>
                <div className="w-1/2"></div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}