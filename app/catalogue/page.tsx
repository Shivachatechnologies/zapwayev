"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import {
  Zap,
  Download,
  BatteryCharging,
  Gauge,
  Rocket,
  Wallet,
  Crown,
  Building2,
  Handshake,
  CheckCircle,
} from "lucide-react";

const chargerTypes = [
  {
    icon: BatteryCharging,
    name: "AC Slow Charger",
    power: "3.3 – 7.2 kW",
    desc: "Ideal for overnight charging at homes, apartments, and offices. Compatible with all Type-2 EVs.",
    color: "from-green-500 to-teal-500",
  },
  {
    icon: Gauge,
    name: "AC Fast Charger",
    power: "22 kW",
    desc: "Great for malls, offices, and parking lots — a full charge in 3-4 hours for most EVs.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Zap,
    name: "DC Fast Charger",
    power: "30 – 60 kW",
    desc: "Perfect for highways and commercial hubs. Charges most EVs to 80% in under an hour.",
    color: "from-orange-500 to-pink-500",
  },
  {
    icon: Rocket,
    name: "DC Ultra-Fast Charger",
    power: "60 – 120 kW",
    desc: "Our fastest option for high-traffic locations — 80% charge in 20-30 minutes.",
    color: "from-purple-500 to-pink-500",
  },
];

const plans = [
  {
    icon: Wallet,
    name: "Pay-As-You-Go",
    price: "₹12/kWh",
    desc: "No subscription. Pay only for what you use.",
    features: ["No monthly fee", "Access to all stations", "UPI / Card / Wallet payments"],
  },
  {
    icon: Crown,
    name: "ZapPlus",
    price: "₹299/month",
    desc: "For regular EV drivers who want savings and priority.",
    features: ["₹9/kWh charging rate", "Priority station access", "Route planning tools"],
    highlight: true,
  },
  {
    icon: Building2,
    name: "Business",
    price: "₹2,499/month",
    desc: "Built for fleets, corporates, and commercial operators.",
    features: ["₹7/kWh charging rate", "Fleet management dashboard", "API access & dedicated support"],
  },
];

const partnerSteps = [
  "List your charger location on the ZapwayEV partner portal.",
  "Our team verifies and helps with installation/calibration if needed.",
  "Your charger goes live on the ZapwayEV app for nearby drivers.",
  "Earn ₹8–15 per kWh dispensed, with weekly payouts to your bank account.",
];

export default function CataloguePage() {
  return (
    <div className="pt-16 bg-white dark:bg-gray-950 min-h-screen">
      {/* Hero */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh pointer-events-none" />
        <Container className="relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-sm font-medium mb-6">
              <Zap className="w-4 h-4" fill="currentColor" />
              Product Catalogue
            </span>
            <h1 className="text-4xl sm:text-5xl font-black text-gray-900 dark:text-white mb-6">
              Chargers, Plans & {" "}
              <span className="gradient-text">Partner Programme</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed mb-8">
              Everything you need to know about ZapwayEV's charger types, customer plans, and how to become a charging partner — in one place.
            </p>
            <Button variant="primary" size="lg" href="/zapwayev-catalogue.pdf">
              <Download className="w-5 h-5 mr-2" />
              Download Catalogue (PDF)
            </Button>
          </motion.div>
        </Container>
      </section>

      {/* Charger Types */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900/50">
        <Container>
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">Charger Types</h2>
          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {chargerTypes.map((c, i) => {
              const Icon = c.icon;
              return (
                <motion.div
                  key={c.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="p-6 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${c.color} flex items-center justify-center mb-4`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-gray-900 dark:text-white">{c.name}</h3>
                    <span className="text-sm font-semibold text-green-600 dark:text-green-400">{c.power}</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{c.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Plans */}
      <section className="py-16">
        <Container>
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">Customer Plans</h2>
          <div className="grid sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {plans.map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={p.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className={`p-6 rounded-2xl border ${
                    p.highlight
                      ? "border-green-500 bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 shadow-lg scale-[1.02]"
                      : "border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900"
                  }`}
                >
                  {p.highlight && (
                    <span className="inline-block px-3 py-1 rounded-full bg-green-500 text-white text-xs font-semibold mb-3">
                      Most Popular
                    </span>
                  )}
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-blue-500 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 dark:text-white text-lg">{p.name}</h3>
                  <p className="text-2xl font-black gradient-text mb-2">{p.price}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{p.desc}</p>
                  <ul className="space-y-2">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" /> {f}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
          <div className="text-center mt-8">
            <Button variant="outline" href="/pricing">See Full Pricing Details</Button>
          </div>
        </Container>
      </section>

      {/* Partner Programme */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900/50">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-sm font-medium mb-4">
              <Handshake className="w-4 h-4" />
              Partner Programme
            </span>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">List Your Charger, Start Earning</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Turn your unused parking spot or charger into a revenue stream with ZapwayEV.
            </p>
          </div>
          <div className="max-w-2xl mx-auto space-y-4">
            {partnerSteps.map((step, i) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex gap-4 items-start p-4 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800"
              >
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-500 to-blue-500 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                  {i + 1}
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300 pt-1">{step}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10 flex flex-wrap gap-4 justify-center">
            <Button variant="primary" size="lg" href="/contact">Become a Partner</Button>
            <Button variant="outline" size="lg" href="/zapwayev-catalogue.pdf">
              <Download className="w-5 h-5 mr-2" />
              Download Catalogue (PDF)
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}
