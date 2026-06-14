"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Zap, Target, Heart, Globe, Award } from "lucide-react";

const team = [
  {
    name: "Chandrakant Singh",
    role: "Co-founder & CEO",
    initials: "CS",
    color: "from-green-500 to-teal-500",
    bio: "Visionary leader driving ZapwayEV's mission to make EV charging effortless across India. Product thinker and builder at heart.",
  },
  {
    name: "Aditya Pratap Singh",
    role: "Co-founder & CTO",
    initials: "APS",
    color: "from-blue-500 to-purple-500",
    bio: "Full-stack architect with expertise in scalable distributed systems. Built ZapwayEV's core platform from the ground up.",
  },
  {
    name: "Akarsh Singh",
    role: "Co-founder & COO",
    initials: "AS",
    color: "from-orange-500 to-pink-500",
    bio: "Operations strategist ensuring every charging station delivers a flawless, reliable experience for drivers and hosts.",
  },
  {
    name: "Himanshu Bachchis",
    role: "Co-founder & CMO",
    initials: "HB",
    color: "from-pink-500 to-red-500",
    bio: "Brand and growth leader building ZapwayEV's community of EV drivers and hosts across India.",
  },
];

const timeline = [
  {
    year: "2024",
    event: "Founded",
    desc: "ZapwayEV was founded in Gurgaon with a bold mission — make EV charging as easy as mobile data across India.",
  },
  {
    year: "2024",
    event: "MVP Launch",
    desc: "Launched the first version of the ZapwayEV app in Delhi NCR. First 100 charging stations onboarded.",
  },
  {
    year: "2025",
    event: "Early Traction",
    desc: "Growing fast across NCR. Expanding station network, building the driver community, and preparing for institutional funding.",
  },
  {
    year: "Next",
    event: "Pan-India Expansion",
    desc: "Vision: 10,000+ charging points across 50 Indian cities. Currently in active conversations with investors.",
  },
];

const values = [
  {
    icon: Target,
    title: "Mission-Driven",
    desc: "Every decision we make is guided by our mission to make EV charging as easy as filling petrol.",
    color: "text-green-500",
    bg: "bg-green-100 dark:bg-green-900/30",
  },
  {
    icon: Heart,
    title: "Driver First",
    desc: "We obsess over the driver experience. Every feature is built with real feedback from real EV owners.",
    color: "text-pink-500",
    bg: "bg-pink-100 dark:bg-pink-900/30",
  },
  {
    icon: Globe,
    title: "Planet Positive",
    desc: "We&apos;re committed to net-zero operations and helping India reduce its carbon footprint.",
    color: "text-blue-500",
    bg: "bg-blue-100 dark:bg-blue-900/30",
  },
  {
    icon: Award,
    title: "Reliability First",
    desc: "99.9% uptime is our promise. We invest heavily in infrastructure to ensure you&apos;re never stranded.",
    color: "text-purple-500",
    bg: "bg-purple-100 dark:bg-purple-900/30",
  },
];

const backers = ["Seeking Series Seed", "EV-focused Angels", "Climate Tech Investors", "Clean Energy VCs"];

export default function AboutPage() {
  return (
    <div className="pt-16 bg-white dark:bg-gray-950 min-h-screen">
      {/* Hero */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh pointer-events-none" />
        <Container className="relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-sm font-medium mb-6">
              <Zap className="w-4 h-4" fill="currentColor" />
              Our Story
            </span>
            <h1 className="text-4xl sm:text-5xl font-black text-gray-900 dark:text-white mb-6">
              Powering India&apos;s{" "}
              <span className="gradient-text">Electric Future</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
              We started ZapwayEV because we experienced the frustration of range anxiety first-hand. Based in Gurgaon, we&apos;re on a mission to make EV charging as seamless and ubiquitous as mobile data in India.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Mission */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900/50">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Mission</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                India has 4 million EVs on the road today. By 2030, that number will cross 100 million. But the charging infrastructure is lagging far behind.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                ZapwayEV exists to bridge that gap — by building the most reliable, affordable, and accessible EV charging network in India. We believe the electric revolution shouldn&apos;t be limited to metros. Every driver, in every city, deserves a stress-free EV experience.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-green-500 to-blue-500 rounded-3xl p-8 text-white"
            >
              <div className="grid grid-cols-2 gap-6">
                {[
                  { num: "1.5M+", label: "EVs Sold in India (FY24)" },
                  { num: "49%", label: "YoY EV Sales Growth" },
                  { num: "12,000+", label: "Charging Stations in India" },
                  { num: "30% by 2030", label: "Target EV Penetration" },
                ].map((s) => (
                  <div key={s.label}>
                    <p className="text-3xl font-black">{s.num}</p>
                    <p className="text-green-100 text-sm">{s.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="py-16">
        <Container>
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">Our Values</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center p-6 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800"
                >
                  <div className={`w-12 h-12 rounded-xl ${v.bg} flex items-center justify-center mx-auto mb-4`}>
                    <Icon className={`w-6 h-6 ${v.color}`} />
                  </div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2">{v.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{v.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900/50">
        <Container>
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">Our Journey</h2>
          <div className="max-w-2xl mx-auto">
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-6 mb-8 last:mb-0"
              >
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-blue-500 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                    {item.year}
                  </div>
                  {i < timeline.length - 1 && <div className="flex-1 w-0.5 bg-gradient-to-b from-green-500 to-blue-500 opacity-30 mt-2" />}
                </div>
                <div className="pb-8">
                  <h3 className="font-bold text-gray-900 dark:text-white">{item.event}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Team */}
      <section className="py-16">
        <Container>
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">Leadership Team</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-6 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${member.color} flex items-center justify-center text-white text-xl font-bold mx-auto mb-4`}>
                  {member.initials}
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white">{member.name}</h3>
                <p className="text-xs text-green-600 dark:text-green-400 font-medium mb-2">{member.role}</p>
                <p className="text-xs text-gray-500 dark:text-gray-500">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Backers */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900/50">
        <Container>
          <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">Investment Opportunity</h2>
          <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
            {backers.map((backer) => (
              <div key={backer} className="px-6 py-3 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl text-sm font-semibold text-gray-700 dark:text-gray-300">
                {backer}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16">
        <Container className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Join the EV Revolution
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Whether you drive, host, or build — there&apos;s a place for you at ZapwayEV.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="primary" size="lg" href="/#features">
              Explore ZapwayEV
            </Button>
            <Button variant="outline" size="lg" href="/contact">
              Get in Touch
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}
