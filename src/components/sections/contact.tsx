"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { personalInfo, socialLinks } from "@/data/portfolio-data";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import Magnetic from "@/components/ui/magnetic";

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
      transition: { duration: 0.6 }
    },
  };

  return (
    <section id="contact" className="section-padding bg-white dark:bg-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-primary-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container-custom relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
            Let&apos;s <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-sans">
            Have a project in mind or just want to say hi? I&apos;m always open to new opportunities.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.div variants={itemVariants} className="glass-card p-8 rounded-3xl border border-white/10">
              <h3 className="text-2xl font-bold mb-6 font-display">Contact Details</h3>
              <div className="space-y-6">
                {[
                  { icon: Mail, value: personalInfo.email, color: "primary" },
                  { icon: Phone, value: personalInfo.phone, color: "accent-violet" },
                  { icon: MapPin, value: personalInfo.location, color: "accent-cyan" },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center group">
                    <Magnetic>
                      <div className={`w-12 h-12 bg-${item.color}-500/10 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform`}>
                        <item.icon className={`w-5 h-5 text-${item.color}-500`} />
                      </div>
                    </Magnetic>
                    <span className="text-gray-700 dark:text-gray-300 font-sans font-medium">{item.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="glass-card p-8 rounded-3xl border border-white/10 uppercase tracking-widest text-[10px] font-bold">
               <h4 className="mb-4 text-gray-500 text-xs">Social Connections</h4>
               <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <Magnetic key={social.name}>
                      <a
                        href={social.url}
                        className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center hover:bg-primary-500/20 transition-all group"
                        aria-label={social.name}
                      >
                        <span className="text-lg font-display text-gray-400 group-hover:text-primary-500">{social.name.charAt(0)}</span>
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
            transition={{ duration: 0.8 }}
          >
            <div className="glass-card p-8 rounded-3xl border border-white/10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-gray-500 ml-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary-500/50 transition-all font-sans text-sm"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-gray-500 ml-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary-500/50 transition-all font-sans text-sm"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-xs font-bold uppercase tracking-wider text-gray-500 ml-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary-500/50 transition-all font-sans text-sm"
                    placeholder="Project Inquiry"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-gray-500 ml-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary-500/50 transition-all font-sans text-sm resize-none"
                    placeholder="Tell me more about your requirements..."
                  />
                </div>
                
                <Magnetic>
                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-6 rounded-2xl bg-gradient-to-r from-primary-600 to-accent-violet hover:from-primary-700 hover:to-accent-violet/90 text-white font-bold font-display shadow-xl shadow-primary-500/20 relative overflow-hidden group"
                  >
                    <motion.div 
                      className="absolute inset-0 bg-white/20"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.5 }}
                    />
                    {isLoading ? (
                      "Sending..."
                    ) : (
                      <span className="flex items-center justify-center">
                        <Send className="w-5 h-5 mr-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        Shoot Message
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
