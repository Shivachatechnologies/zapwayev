"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import {
  IndianRupee,
  ShieldCheck,
  Headphones,
  Gift,
  MapPin,
  Smartphone,
  TrendingUp,
  BarChart3,
  Wrench,
  Megaphone,
  Users,
  Handshake,
} from "lucide-react";

const customerBenefits = [
  { icon: IndianRupee, title: "Affordable Charging", desc: "Transparent, competitive per-kWh pricing with no hidden charges." },
  { icon: MapPin, title: "Growing Network", desc: "New verified charging stations added across Gurgaon & NCR every week." },
  { icon: Smartphone, title: "Effortless App Experience", desc: "Find, navigate, plug in, and pay — all in a few taps." },
  { icon: ShieldCheck, title: "Verified & Safe Stations", desc: "Every station is inspected and rated for safety and reliability." },
  { icon: Gift, title: "Launch Offers & Rewards", desc: "Early users get exclusive discounts, cashback, and referral bonuses." },
  { icon: Headphones, title: "Real Human Support", desc: "Talk to our founding team directly — we respond fast, every time." },
];

const partnerBenefits = [
  { icon: Handshake, title: "Zero/Low Upfront Cost", desc: "Flexible models so you can list your charger with minimal investment." },
  { icon: TrendingUp, title: "New Revenue Stream", desc: "Earn ₹8–15 per kWh on every charging session at your location." },
  { icon: BarChart3, title: "Real-Time Analytics", desc: "Track usage, earnings, and uptime from a simple partner dashboard." },
  { icon: Wrench, title: "Installation & Tech Support", desc: "Our team helps with setup, calibration, and ongoing maintenance." },
  { icon: Megaphone, title: "Built-In Visibility", desc: "Get discovered by EV drivers searching the ZapwayEV app near you." },
  { icon: Users, title: "Dedicated Account Manager", desc: "A direct point of contact from our founding team for support and growth." },
];

export function Benefits() {
  return (
    <section id="benefits" className="section-padding bg-gray-50 dark:bg-gray-900/50">
      <Container>
        <SectionHeading
          badge="Why ZapwayEV"
          title="Benefits for "
          highlight="Everyone"
          subtitle="Whether you're charging your EV or partnering with us to host a charger, ZapwayEV is built to create real value for you."
        />

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Customers */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6">
              <span className="inline-block px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-semibold mb-3">
                For Customers
              </span>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Drive with confidence, charge with ease
              </h3>
            </div>
            <div className="space-y-4">
              {customerBenefits.map((b, i) => {
                const Icon = b.icon;
                return (
                  <motion.div
                    key={b.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                    className="flex items-start gap-4 p-4 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800"
                  >
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500 to-teal-500 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white text-sm">{b.title}</h4>
                      <p className="text-xs text-gray-600 dark:text-gray-400 mt-0.5">{b.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
            <div className="mt-6">
              <Button variant="primary" size="md" href="/download">
                Download the App
              </Button>
            </div>
          </motion.div>

          {/* Partners */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="mb-6">
              <span className="inline-block px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-xs font-semibold mb-3">
                For Partners
              </span>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Turn your space into a revenue stream
              </h3>
            </div>
            <div className="space-y-4">
              {partnerBenefits.map((b, i) => {
                const Icon = b.icon;
                return (
                  <motion.div
                    key={b.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                    className="flex items-start gap-4 p-4 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800"
                  >
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white text-sm">{b.title}</h4>
                      <p className="text-xs text-gray-600 dark:text-gray-400 mt-0.5">{b.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
            <div className="mt-6">
              <Button variant="outline" size="md" href="/contact">
                Become a Partner
              </Button>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
