"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { personalInfo, socialLinks } from "@/data/portfolio-data";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Code } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import Magnetic from "@/components/ui/magnetic";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export function ContactSection() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error("Failed to send message");
      }
    } catch {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      value: personalInfo.email,
      label: "Email",
      href: `mailto:${personalInfo.email}`,
    },
    {
      icon: Phone,
      value: personalInfo.phone,
      label: "Phone",
      href: `tel:${personalInfo.phone.replace(/\s/g, "")}`,
    },
    {
      icon: MapPin,
      value: personalInfo.location,
      label: "Location",
      href: `https://maps.google.com/?q=${encodeURIComponent(personalInfo.location)}`,
      external: true,
    },
  ];

  const getSocialIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case "github":
        return <Github className="h-5 w-5" />;
      case "linkedin":
        return <Linkedin className="h-5 w-5" />;
      case "email":
        return <Mail className="h-5 w-5" />;
      default:
        return <Code className="h-5 w-5" />;
    }
  };

  return (
    <section id="contact" className="section-padding aurora-wash color-grid relative overflow-hidden">
      <div className="ambient-drift absolute -left-28 bottom-0 h-80 w-80 rounded-full bg-primary-500/15 blur-[110px]" aria-hidden="true" />
      <div className="absolute -right-24 top-20 h-72 w-72 rounded-full bg-blue-500/10 blur-[100px]" aria-hidden="true" />
      <div className="container-custom relative z-10">
        <motion.div
          className="mb-14 max-w-2xl"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          <motion.p variants={fadeUp} className="section-label">
            Contact
          </motion.p>
          <motion.h2 variants={fadeUp} className="section-header">
            Let&apos;s work together
          </motion.h2>
          <motion.p variants={fadeUp} className="section-lead">
            Have a project in mind or an opportunity to discuss? I&apos;d love to hear
            from you.
          </motion.p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="space-y-6 lg:col-span-5"
          >
            <motion.div variants={fadeUp} className="surface-card hover-lift p-6 sm:p-8">
              <h3 className="mb-6 font-display text-lg font-bold text-ink dark:text-white">
                Contact details
              </h3>
              <ul className="space-y-2">
                {contactInfo.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noopener noreferrer" : undefined}
                      className="group flex items-center gap-4 rounded-xl p-3 transition-all duration-300 hover:translate-x-1 hover:bg-primary-50 dark:hover:bg-primary-500/10"
                    >
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-700 transition-all duration-300 group-hover:rotate-3 group-hover:scale-110 group-hover:bg-primary-600 group-hover:text-white dark:bg-primary-500/10 dark:text-primary-300 dark:group-hover:bg-primary-400 dark:group-hover:text-ink">
                        <item.icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <span>
                        <span className="block text-xs font-semibold uppercase tracking-wider text-ink-faint dark:text-slate-500">
                          {item.label}
                        </span>
                        <span className="mt-0.5 block text-base font-medium text-ink transition-colors group-hover:text-primary-700 dark:text-white dark:group-hover:text-primary-300">
                          {item.value}
                        </span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={fadeUp} className="surface-card hover-lift p-6 sm:p-8">
              <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-ink-faint dark:text-slate-500">
                Social
              </h4>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-surface-border text-ink-muted transition-all duration-300 hover:-translate-y-1 hover:rotate-3 hover:border-primary-600 hover:bg-primary-600 hover:text-white hover:shadow-lg dark:border-dark-border dark:text-slate-400 dark:hover:border-primary-400 dark:hover:bg-primary-400 dark:hover:text-ink"
                    aria-label={social.name}
                  >
                    {getSocialIcon(social.name)}
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="surface-card relative overflow-hidden p-6 shadow-[0_20px_60px_-35px_rgba(13,148,136,0.45)] sm:p-8 lg:p-10">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary-500 via-blue-500 to-amber-400" />
              <h3 className="mb-6 font-display text-lg font-bold text-ink dark:text-white">
                Send a message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium text-ink dark:text-slate-200"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      autoComplete="name"
                      className="input-field"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-ink dark:text-slate-200"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      autoComplete="email"
                      className="input-field"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="subject"
                    className="text-sm font-medium text-ink dark:text-slate-200"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="input-field"
                    placeholder="Project inquiry"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-ink dark:text-slate-200"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="input-field resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <Magnetic strength={0.15}>
                  <Button
                    type="submit"
                    disabled={isLoading}
                    size="lg"
                    className="w-full sm:w-auto"
                  >
                    {isLoading ? (
                      <span className="flex items-center gap-2">
                        <svg
                          className="h-4 w-4 animate-spin"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <>
                        Send message
                        <Send className="h-4 w-4" />
                      </>
                    )}
                  </Button>
                </Magnetic>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
