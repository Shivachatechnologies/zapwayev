"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { CheckCircle, Smartphone, Zap } from "lucide-react";

const driverBenefits = [
  "Real-time station availability",
  "No subscription required",
  "Works with all EV brands",
  "Offline route planning",
  "24/7 in-app support",
];

const hostBenefits = [
  "Easy installation support",
  "Earn ₹8–15 per kWh",
  "Remote monitoring dashboard",
  "Instant payouts weekly",
  "Dedicated partner manager",
];

export function DriversVsHosts() {
  return (
    <section className="section-padding bg-white dark:bg-gray-950">
      <Container>
        <SectionHeading
          badge="Built for Everyone"
          title="For Drivers & "
          highlight="Charging Partners"
          subtitle="Whether you drive an EV or own a charger, ZapwayEV has something powerful for you."
        />

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Drivers */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl overflow-hidden border border-green-200 dark:border-green-800/50 bg-gradient-to-br from-green-50 to-white dark:from-green-950/30 dark:to-gray-900 p-8"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-green-500/10 rounded-full -translate-y-20 translate-x-20 blur-2xl" />
            <div className="relative">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-green-500 to-green-400 flex items-center justify-center mb-4 shadow-lg shadow-green-500/30">
                <Smartphone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">For Drivers</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-6">
                Charge with confidence anywhere across India. Never worry about range again.
              </p>
              <ul className="space-y-3 mb-8">
                {driverBenefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300 text-sm">{benefit}</span>
                  </li>
                ))}
              </ul>
              <Button variant="primary" size="md" href="#">
                Download App
              </Button>
            </div>
          </motion.div>

          {/* Hosts */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative rounded-3xl overflow-hidden border border-blue-200 dark:border-blue-800/50 bg-gradient-to-br from-blue-50 to-white dark:from-blue-950/30 dark:to-gray-900 p-8"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/10 rounded-full -translate-y-20 translate-x-20 blur-2xl" />
            <div className="relative">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-400 flex items-center justify-center mb-4 shadow-lg shadow-blue-500/30">
                <Zap className="w-6 h-6 text-white" fill="white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">For Charging Partners</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-6">
                Turn your idle charger into a passive income stream. Become a ZapwayEV charging partner today.
              </p>
              <ul className="space-y-3 mb-8">
                {hostBenefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300 text-sm">{benefit}</span>
                  </li>
                ))}
              </ul>
              <Button variant="outline" size="md" href="/contact">
                Become a Charging Partner
              </Button>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
