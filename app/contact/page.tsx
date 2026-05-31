"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { MapPin, Mail, Phone, MessageSquare, CheckCircle, Zap } from "lucide-react";

const subjects = [
  "General Inquiry",
  "Driver Support",
  "Host Onboarding",
  "Business / Fleet",
  "Press & Media",
  "Careers",
  "Technical Issue",
  "Feedback",
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-16 bg-white dark:bg-gray-950 min-h-screen">
      {/* Hero */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh pointer-events-none" />
        <Container className="relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-sm font-medium mb-6">
              <MessageSquare className="w-4 h-4" />
              Get in Touch
            </span>
            <h1 className="text-4xl sm:text-5xl font-black text-gray-900 dark:text-white mb-4">
              We&apos;d love to{" "}
              <span className="gradient-text">hear from you</span>
            </h1>
            <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
              Have a question, partnership idea, or need help? Our team typically responds within 2 hours during business hours.
            </p>
          </motion.div>
        </Container>
      </section>

      <Container className="pb-20">
        <div className="grid lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {[
              {
                icon: MapPin,
                title: "Visit Us",
                color: "text-green-500",
                bg: "bg-green-100 dark:bg-green-900/30",
                lines: ["ZapwayEV Technologies Pvt. Ltd.", "WeWork DLF Forum, Cyber City", "DLF Phase 2, Gurugram 122002"],
              },
              {
                icon: Mail,
                title: "Email Us",
                color: "text-blue-500",
                bg: "bg-blue-100 dark:bg-blue-900/30",
                lines: ["hello@zapwayev.in", "support@zapwayev.in", "partnerships@zapwayev.in"],
              },
              {
                icon: Phone,
                title: "Call Us",
                color: "text-purple-500",
                bg: "bg-purple-100 dark:bg-purple-900/30",
                lines: ["1800-ZAP-HELP (toll-free)", "+91 80 4567 8901", "Mon–Sat 9AM–8PM IST"],
              },
            ].map((contact) => {
              const Icon = contact.icon;
              return (
                <div key={contact.title} className="flex gap-4">
                  <div className={`w-12 h-12 rounded-xl ${contact.bg} flex items-center justify-center flex-shrink-0`}>
                    <Icon className={`w-6 h-6 ${contact.color}`} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{contact.title}</h3>
                    {contact.lines.map((line) => (
                      <p key={line} className="text-sm text-gray-600 dark:text-gray-400">{line}</p>
                    ))}
                  </div>
                </div>
              );
            })}

            {/* Map placeholder */}
            <div className="rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 h-48 flex items-center justify-center border border-gray-200 dark:border-gray-800 relative overflow-hidden">
              <div className="absolute inset-0 opacity-30">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="absolute left-0 right-0 border-t border-gray-400/30" style={{ top: `${(i + 1) * 16.67}%` }} />
                ))}
                {[...Array(7)].map((_, i) => (
                  <div key={i} className="absolute top-0 bottom-0 border-l border-gray-400/30" style={{ left: `${(i + 1) * 14.28}%` }} />
                ))}
              </div>
              <div className="relative text-center">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-blue-500 flex items-center justify-center mx-auto mb-2 shadow-lg">
                  <Zap className="w-5 h-5 text-white" fill="white" />
                </div>
                <p className="text-xs font-medium text-gray-600 dark:text-gray-400">Cyber City, Gurugram</p>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2"
          >
            {submitted ? (
              <div className="h-full flex items-center justify-center">
                <div className="text-center py-16">
                  <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Message Sent!</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Thanks for reaching out. Our team will get back to you within 2 business hours.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-8 space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Arjun Sharma"
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="arjun@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                      Subject <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                    >
                      <option value="">Select a subject</option>
                      {subjects.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell us how we can help..."
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all resize-none"
                  />
                </div>

                <Button variant="primary" size="lg" className="w-full" type="submit">
                  Send Message
                </Button>

                <p className="text-xs text-gray-500 dark:text-gray-500 text-center">
                  By submitting, you agree to our{" "}
                  <a href="#" className="underline hover:text-green-500">Privacy Policy</a>.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </Container>
    </div>
  );
}
