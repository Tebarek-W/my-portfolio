"use client";

import { motion } from "framer-motion";
import { experiences } from "@/data/portfolio-data";
import { Card, CardContent } from "@/components/ui/card";

export function ExperienceSection() {
  return (
    <section id="experience" className="section-padding">
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My professional journey and career milestones
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-primary-200 dark:bg-primary-800"></div>

            {/* Experience items */}
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                className={`flex items-start mb-12 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white dark:border-gray-900 z-10 mt-4"></div>

                {/* Content */}
                <div
                  className={`ml-12 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                  }`}
                >
                  <Card className="card-hover">
                    <CardContent className="p-6">
                      {/* Company Logo and Info - FIXED SPACING */}
                      <div
                        className={`flex items-center mb-4 ${
                          index % 2 === 0 ? "md:flex-row-reverse" : ""
                        }`}
                      >
                        {/* Logo Container - Added margin for spacing */}
                        <div
                          className={`w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center ${
                            index % 2 === 0 ? "md:ml-6 ml-4" : "mr-6 md:mr-4"
                          }`}
                        >
                          <span className="text-white font-bold text-xs">
                            {experience.company
                              .split(" ")
                              .map((word) => word[0])
                              .join("")
                              .toUpperCase()}
                          </span>
                        </div>
                        {/* Company Info - Added more spacing */}
                        <div
                          className={`flex-1 ${
                            index % 2 === 0 ? "text-right" : ""
                          } space-y-1`}
                        >
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                            {experience.company}
                          </h3>
                          <p className="text-primary-600 dark:text-primary-400 font-semibold">
                            {experience.position}
                          </p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            {experience.duration}
                          </p>
                        </div>
                      </div>

                      {/* Description - Fixed justified text */}
                      <ul className="space-y-2 text-gray-600 dark:text-gray-300 mt-4">
                        {experience.description.map((item, itemIndex) => (
                          <li
                            key={itemIndex}
                            className="flex items-start text-sm"
                          >
                            <span className="mr-2 mt-0.5">•</span>
                            <span className="text-justify leading-relaxed">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>

                      {/* Technologies */}
                      <div
                        className={`flex flex-wrap gap-2 mt-4 ${
                          index % 2 === 0 ? "justify-end" : ""
                        }`}
                      >
                        {experience.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 text-xs rounded-md"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
