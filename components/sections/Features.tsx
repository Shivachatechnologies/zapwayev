"use client";

import { motion } from "framer-motion";
import { Map, Zap, CreditCard, Navigation, Headphones, Home } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const features = [
  {
    icon: Map,
    color: "from-green-500 to-emerald-600",
    title: "Real-Time Station Map",
    description:
      "See live availability of nearby charging stations on an interactive map. Filter by charger type, speed, and price.",
  },
  {
    icon: Zap,
    color: "from-blue-500 to-cyan-600",
    title: "Fast & Smart Charging",
    description:
      "AC, DC, and ultra-fast 150kW chargers. Smart load balancing ensures peak efficiency without overloading the grid.",
  },
  {
    icon: CreditCard,
    color: "from-purple-500 to-violet-600",
    title: "In-App Payments",
    description:
      "Pay via UPI, cards, or your ZapWallet balance. Auto-generated invoices for business users and GST compliance.",
  },
  {
    icon: Navigation,
    color: "from-orange-500 to-amber-600",
    title: "Smart Route Planning",
    description:
      "Plan long drives with charging stops pre-calculated based on your EV model's range. Never get stranded mid-journey.",
  },
  {
    icon: Headphones,
    color: "from-pink-500 to-rose-600",
    title: "24/7 Support",
    description:
      "Round-the-clock assistance via in-app chat, phone, and remote diagnostics — for drivers and charging hosts alike.",
  },
  {
    icon: Home,
    color: "from-teal-500 to-green-600",
    title: "Host Your Charger",
    description:
      "Turn your idle home or office charger into a revenue stream. Full dashboard, analytics, and weekly payouts included.",
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function Features() {
  return (
    <section id="features" className="py-24 bg-gray-50 dark:bg-gray-900">
      <Container>
        <SectionHeading
          badge="Features"
          title="Everything you need to charge confidently"
          subtitle="ZapwayEV is built for India's EV revolution — powerful, reliable, and designed for real-world roads."
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={cardVariant}
              whileHover={{ y: -4 }}
              className="group bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:border-green-300 dark:hover:border-green-700 hover:shadow-xl hover:shadow-green-500/10 transition-all duration-300"
            >
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}
              >
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
