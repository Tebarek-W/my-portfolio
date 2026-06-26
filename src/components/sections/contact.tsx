"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { personalInfo, socialLinks } from "@/data/portfolio-data";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Code } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import Magnetic from "@/components/ui/magnetic";
import { cn } from "@/lib/utils";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export function ContactSection() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success('Message sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch {
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const }
    },
  };

  const contactInfo = [
    { 
      icon: Mail, 
      value: personalInfo.email, 
      label: "Email",
      bgClass: "bg-primary-50 dark:bg-primary-500/10", 
      textClass: "text-primary-600 dark:text-primary-400",
      borderClass: "border-primary-100 dark:border-primary-500/20",
      href: `mailto:${personalInfo.email}`
    },
    { 
      icon: Phone, 
      value: personalInfo.phone, 
      label: "Phone",
      bgClass: "bg-purple-50 dark:bg-purple-500/10", 
      textClass: "text-purple-600 dark:text-purple-400",
      borderClass: "border-purple-100 dark:border-purple-500/20",
      href: `tel:${personalInfo.phone.replace(/\s/g, '')}`
    },
    { 
      icon: MapPin, 
      value: personalInfo.location, 
      label: "Location",
      bgClass: "bg-cyan-50 dark:bg-cyan-500/10", 
      textClass: "text-cyan-600 dark:text-cyan-400",
      borderClass: "border-cyan-100 dark:border-cyan-500/20",
      href: `https://maps.google.com/?q=${personalInfo.location}`
    },
  ];

  const getSocialIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case 'github': return <Github className="w-5 h-5" />;
      case 'linkedin': return <Linkedin className="w-5 h-5" />;
      case 'email': return <Mail className="w-5 h-5" />;
      default: return <Code className="w-5 h-5" />;
    }
  };

  return (
    <section id="contact" className="section-padding bg-slate-50 dark:bg-[#0e1117] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary-500/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent-violet/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 noise-overlay" />

      <div className="container-custom relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
            Let&apos;s <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-sans text-balance">
            Have a project in mind or just want to say hi? I&apos;m always open to new opportunities and exciting collaborations.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-8"
          >
            <motion.div variants={itemVariants} className="glass-card p-8 md:p-10 rounded-[2rem] border border-gray-200/50 dark:border-white/10 bg-white/50 dark:bg-white/5">
              <h3 className="text-2xl font-bold mb-8 font-display text-gray-900 dark:text-white">Contact Details</h3>
              <div className="space-y-6">
                {contactInfo.map((item, idx) => (
                  <a 
                    href={item.href}
                    target={item.icon === MapPin ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    key={idx} 
                    className="flex items-center group p-3 -m-3 rounded-2xl hover:bg-gray-50 dark:hover:bg-white/5 transition-colors"
                  >
                    <Magnetic>
                      <div className={cn(
                        "w-14 h-14 rounded-2xl flex items-center justify-center mr-5 transition-transform duration-300 border shadow-sm group-hover:scale-110",
                        item.bgClass,
                        item.borderClass
                      )}>
                        <item.icon className={cn("w-6 h-6", item.textClass)} />
                      </div>
                    </Magnetic>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-1">{item.label}</p>
                      <span className="text-gray-900 dark:text-white font-sans font-medium text-lg group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                        {item.value}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="glass-card p-8 rounded-[2rem] border border-gray-200/50 dark:border-white/10 bg-white/50 dark:bg-white/5 text-center sm:text-left">
               <h4 className="mb-6 text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">Social Connections</h4>
               <div className="flex flex-wrap justify-center sm:justify-start gap-4">
                  {socialLinks.map((social) => (
                    <Magnetic key={social.name}>
                      <a
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-14 h-14 bg-white dark:bg-gray-900 border border-gray-200 dark:border-white/10 rounded-2xl flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-primary-50 hover:text-primary-600 hover:border-primary-200 dark:hover:bg-primary-500/10 dark:hover:text-primary-400 dark:hover:border-primary-500/30 transition-all group shadow-sm hover:shadow-md"
                        aria-label={social.name}
                      >
                        <span className="group-hover:scale-110 transition-transform">
                          {getSocialIcon(social.name)}
                        </span>
                      </a>
                    </Magnetic>
                  ))}
               </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="glass-card p-8 md:p-10 rounded-[2rem] border border-gray-200/50 dark:border-white/10 bg-white/50 dark:bg-white/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/5 blur-[80px] rounded-full pointer-events-none" />
              
              <h3 className="text-2xl font-bold mb-8 font-display text-gray-900 dark:text-white">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-700 dark:text-gray-300 ml-1">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-white/10 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all duration-300 font-sans text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 shadow-sm"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300 ml-1">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-white/10 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all duration-300 font-sans text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 shadow-sm"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-gray-700 dark:text-gray-300 ml-1">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-white/10 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all duration-300 font-sans text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 shadow-sm"
                    placeholder="Project Inquiry"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-700 dark:text-gray-300 ml-1">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-5 py-4 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-white/10 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all duration-300 font-sans resize-none text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 shadow-sm"
                    placeholder="Hello Tebarek, I'd like to discuss..."
                  />
                </div>

                <Magnetic>
                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-6 rounded-xl bg-gray-900 hover:bg-gray-800 text-white dark:bg-primary-500 dark:hover:bg-primary-600 font-bold text-lg tracking-wide shadow-xl shadow-gray-900/10 dark:shadow-primary-500/20 transition-all duration-300 disabled:opacity-70 group"
                  >
                    {isLoading ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending Message...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        Send Message
                        <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </span>
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
