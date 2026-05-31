"use client";

import { motion } from "framer-motion";
import { Zap, Target, Users, Globe, Award, Leaf } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

const team = [
  { name: "Arjun Kapoor", role: "Co-Founder & CEO", initials: "AK", color: "from-green-500 to-emerald-600", bio: "Former Tesla operations lead. 10+ years in EV infrastructure across Asia." },
  { name: "Sneha Rajan", role: "Co-Founder & CTO", initials: "SR", color: "from-blue-500 to-indigo-600", bio: "Ex-Google Maps engineer. Built real-time location systems at scale for 200M+ users." },
  { name: "Vikram Iyer", role: "VP Business Development", initials: "VI", color: "from-purple-500 to-violet-600", bio: "Built Ola Electric's B2B partnerships from ground up. Expert in energy sector deals." },
  { name: "Meera Pillai", role: "Head of Product", initials: "MP", color: "from-orange-500 to-amber-600", bio: "Product lead at Zomato and CRED. Obsessed with building products that people love." },
];

const values = [
  { icon: Leaf, title: "Sustainability First", description: "Every decision we make is measured by its environmental impact. We're building for a zero-emission future." },
  { icon: Users, title: "Community Driven", description: "Our network is powered by thousands of hosts and millions of drivers who believe in clean mobility." },
  { icon: Target, title: "Radical Reliability", description: "99.9% uptime is our promise. Because when your car needs a charge, you can't afford a failed station." },
  { icon: Globe, title: "India-First, Global Vision", description: "We're solving for Indian roads, Indian EVs, and Indian payment systems — with a vision to go global." },
];

const milestones = [
  { year: "2021", title: "Founded in Bengaluru", description: "ZapwayEV incorporated with a mission to solve EV charging anxiety in India." },
  { year: "2022", title: "Seed Round — ₹8 Crore", description: "Raised seed funding. Launched in Bengaluru and Pune with 200 charging stations." },
  { year: "2023", title: "Series A — ₹45 Crore", description: "Expanded to 20 cities. Crossed 1M charging sessions and 25,000 active users." },
  { year: "2024", title: "10,000 Stations Milestone", description: "Now in 50+ cities. Partnerships with Tata Motors, MG, and Mahindra EV. 85,000 users." },
];

const investors = [
  "Blume Ventures", "Sequoia Surge", "Clean Energy Fund", "Ola Electric Ventures", "SIDBI Fund of Funds",
];

export function AboutPage() {
  return (
    <div className="pt-16 min-h-screen bg-white dark:bg-gray-950">
      {/* Hero */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
        <div className="absolute inset-0 bg-gradient-mesh pointer-events-none" />
        <Container className="relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-green-500/30">
              <Zap className="w-8 h-8 text-white" fill="white" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
              We&apos;re building India&apos;s{" "}
              <span className="gradient-text">clean mobility future</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
              ZapwayEV was born from a simple frustration — finding a working EV charger in India was
              too hard. We set out to fix that, and we&apos;re just getting started.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg" href="/contact">Join Our Team</Button>
              <Button variant="outline" size="lg" href="#mission">Our Mission</Button>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Mission */}
      <section id="mission" className="py-20">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block bg-green-100 dark:bg-green-950/50 text-green-700 dark:text-green-400 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              Our Mission
            </span>
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-6">
              Eliminate range anxiety from every EV journey in India
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
              India is on the cusp of an EV revolution. But for that revolution to succeed, drivers
              need to trust that they can charge their car whenever and wherever they need to. That&apos;s
              why we&apos;re building the most reliable, accessible, and intelligent charging network in
              the country — one kilowatt-hour at a time.
            </p>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <Container>
          <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white text-center mb-12">
            What we stand for
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 text-center"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <v.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">{v.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{v.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <Container>
          <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white text-center mb-14">
            Our journey so far
          </h2>
          <div className="max-w-3xl mx-auto relative">
            <div className="absolute left-16 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-500 to-blue-500 opacity-30" />
            <div className="space-y-10">
              {milestones.map((m, i) => (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="flex gap-8 items-start"
                >
                  <div className="flex-shrink-0 w-14 text-right">
                    <span className="text-sm font-extrabold gradient-text">{m.year}</span>
                  </div>
                  <div className="w-4 h-4 rounded-full bg-gradient-to-br from-green-500 to-blue-500 flex-shrink-0 mt-0.5 shadow-lg shadow-green-500/30" />
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-1">{m.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{m.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Team */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <Container>
          <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white text-center mb-12">
            Meet the team
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 text-center"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${member.color} flex items-center justify-center mx-auto mb-4 text-white text-xl font-extrabold shadow-lg`}>
                  {member.initials}
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white">{member.name}</h3>
                <p className="text-green-600 dark:text-green-400 text-xs font-semibold mb-3">{member.role}</p>
                <p className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Investors */}
      <section className="py-16">
        <Container>
          <p className="text-center text-sm text-gray-500 dark:text-gray-400 font-medium uppercase tracking-widest mb-8">
            Backed by leading investors
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {investors.map((inv) => (
              <div key={inv} className="text-gray-400 dark:text-gray-500 font-bold text-sm hover:text-gray-700 dark:hover:text-gray-300 transition-colors">
                {inv}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-green-600 to-blue-600 text-center">
        <Container>
          <h2 className="text-3xl font-extrabold text-white mb-4">
            Want to be part of the mission?
          </h2>
          <p className="text-green-100 mb-8">We&apos;re hiring across engineering, design, operations, and sales.</p>
          <Button variant="secondary" size="lg" href="/contact">View Open Roles</Button>
        </Container>
      </section>
    </div>
  );
}
