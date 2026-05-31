"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Zap, MapPin, Clock, Users, Heart, Rocket, Briefcase, ArrowRight } from "lucide-react";

const openRoles = [
  {
    title: "Senior Backend Engineer",
    dept: "Engineering",
    location: "Bengaluru (Hybrid)",
    type: "Full-time",
    desc: "Build and scale the charging network APIs powering 85,000+ users. Node.js, PostgreSQL, Redis.",
  },
  {
    title: "iOS / Android Developer",
    dept: "Engineering",
    location: "Bengaluru (Hybrid)",
    type: "Full-time",
    desc: "Own the ZapwayEV mobile app experience. React Native preferred. 3+ years mobile experience.",
  },
  {
    title: "Product Manager — Driver Experience",
    dept: "Product",
    location: "Bengaluru / Remote",
    type: "Full-time",
    desc: "Define and execute the roadmap for driver-facing features. 4+ years PM experience in consumer apps.",
  },
  {
    title: "City Expansion Lead — North India",
    dept: "Operations",
    location: "Delhi NCR",
    type: "Full-time",
    desc: "Launch and grow ZapwayEV in Delhi, Noida, Gurugram. Partnership, site acquisition, and local ops.",
  },
  {
    title: "B2B Sales Manager",
    dept: "Sales",
    location: "Mumbai",
    type: "Full-time",
    desc: "Sell ZapwayEV Business plans to fleet operators, RWAs, and corporates. 5+ years B2B SaaS/infra sales.",
  },
  {
    title: "UI/UX Designer",
    dept: "Design",
    location: "Bengaluru (Remote-friendly)",
    type: "Full-time",
    desc: "Design beautiful, accessible experiences for the ZapwayEV app and dashboard. Figma expert.",
  },
  {
    title: "Data Analyst",
    dept: "Data",
    location: "Bengaluru / Remote",
    type: "Full-time",
    desc: "Turn charging session data into insights. SQL, Python, and a passion for clean energy metrics.",
  },
  {
    title: "Growth Intern",
    dept: "Marketing",
    location: "Remote",
    type: "Internship (3 months)",
    desc: "Run experiments across paid, organic, and referral channels. Learn startup growth from the inside.",
  },
];

const perks = [
  { icon: Rocket, title: "Equity for Everyone", desc: "All full-time employees get meaningful ESOPs. We win together." },
  { icon: Heart, title: "Health First", desc: "Comprehensive medical, dental, and mental health coverage for you and your family." },
  { icon: Clock, title: "Flexible Hours", desc: "We care about output, not hours. Work when you do your best thinking." },
  { icon: Users, title: "World-Class Team", desc: "Work alongside alumni from Google, Ola, Swiggy, IIT, and Stanford." },
  { icon: Zap, title: "EV Charging Perk", desc: "Free ZapPlus subscription for all employees. Drive EV? We cover your charging." },
  { icon: Briefcase, title: "Learning Budget", desc: "₹50,000/year for courses, books, and conferences of your choice." },
];

const deptColors: Record<string, string> = {
  Engineering: "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400",
  Product: "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400",
  Operations: "bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400",
  Sales: "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400",
  Design: "bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-400",
  Data: "bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-400",
  Marketing: "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400",
};

export default function CareersPage() {
  return (
    <div className="pt-16 bg-white dark:bg-gray-950 min-h-screen">
      {/* Hero */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh pointer-events-none" />
        <Container className="relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-sm font-medium mb-6">
              <Zap className="w-4 h-4" fill="currentColor" />
              We&apos;re Hiring
            </span>
            <h1 className="text-4xl sm:text-6xl font-black text-gray-900 dark:text-white mb-6">
              Build the{" "}
              <span className="gradient-text">Electric Future</span>
              <br />with Us
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed mb-8">
              Join a mission-driven founding team working to make EV charging as easy as connecting to WiFi. We&apos;re an early-stage startup based in Gurgaon — scrappy, fast-moving, and building something that matters.
            </p>
            <Button variant="primary" size="lg" href="#open-roles">
              See Open Roles <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </Container>
      </section>

      {/* Culture stats */}
      <section className="py-12 bg-gradient-to-r from-green-500 to-blue-500">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white text-center">
            {[
              { num: "Early", label: "Stage" },
              { num: "4.8★", label: "Glassdoor Rating" },
              { num: "Seed", label: "Raising Now" },
              { num: "Gurgaon", label: "Headquarters" },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-3xl font-black">{s.num}</p>
                <p className="text-green-100 text-sm mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Perks */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900/50">
        <Container>
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-4">Why ZapwayEV?</h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-xl mx-auto">
            We believe great work deserves great rewards. Here&apos;s what working at ZapwayEV looks like.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {perks.map((perk, i) => {
              const Icon = perk.icon;
              return (
                <motion.div
                  key={perk.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="p-6 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-blue-500 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2">{perk.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{perk.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Open Roles */}
      <section id="open-roles" className="py-16">
        <Container>
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-4">Open Roles</h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12">
            {openRoles.length} positions across Engineering, Product, Operations, and more.
          </p>
          <div className="max-w-4xl mx-auto space-y-4">
            {openRoles.map((role, i) => (
              <motion.div
                key={role.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="p-6 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-green-500 transition-colors group"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <div className="flex flex-wrap gap-2 mb-2">
                      <span className={`px-2 py-0.5 rounded-md text-xs font-medium ${deptColors[role.dept] ?? "bg-gray-100 text-gray-600"}`}>
                        {role.dept}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                        <MapPin className="w-3 h-3" /> {role.location}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                        <Clock className="w-3 h-3" /> {role.type}
                      </span>
                    </div>
                    <h3 className="font-bold text-gray-900 dark:text-white text-lg">{role.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{role.desc}</p>
                  </div>
                  <Button variant="outline" size="sm" href={`mailto:careers@zapwayev.in?subject=Application: ${role.title}`}>
                    Apply <ArrowRight className="ml-1 w-4 h-4" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Don&apos;t see your role? We&apos;re always open to exceptional talent.
            </p>
            <Button variant="primary" href="mailto:careers@zapwayev.in">
              Send an Open Application
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}
