"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Smartphone, QrCode, CreditCard } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Smartphone,
    title: "Find",
    color: "from-green-500 to-green-400",
    shadow: "shadow-green-500/30",
    description:
      "Open the app, search your location, and see real-time available chargers nearby. Filter by speed, cost, and connector type.",
  },
  {
    number: "02",
    icon: QrCode,
    title: "Plug",
    color: "from-blue-500 to-blue-400",
    shadow: "shadow-blue-500/30",
    description:
      "Navigate to the station, scan the QR code, and start charging with one tap. Compatible with all major EV brands.",
  },
  {
    number: "03",
    icon: CreditCard,
    title: "Pay",
    color: "from-purple-500 to-blue-500",
    shadow: "shadow-purple-500/30",
    description:
      "Your session ends automatically. Receive a digital receipt, and payment is auto-deducted via UPI, card, or ZapWallet.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="section-padding bg-gray-50 dark:bg-gray-900/50">
      <Container>
        <SectionHeading
          badge="Simple Process"
          title="Charging Made "
          highlight="Effortless"
          subtitle="From finding a station to completing payment — the entire process takes less than 60 seconds."
        />

        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden md:block absolute top-16 left-[calc(16.67%+2rem)] right-[calc(16.67%+2rem)] h-0.5 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 opacity-30 z-0" />

          <div className="grid md:grid-cols-3 gap-8 relative z-10">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  className="flex flex-col items-center text-center"
                >
                  {/* Icon circle */}
                  <div className="relative mb-6">
                    <div
                      className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${step.color} shadow-xl ${step.shadow} flex items-center justify-center`}
                    >
                      <Icon className="w-9 h-9 text-white" />
                    </div>
                    <div className="absolute -top-3 -right-3 w-7 h-7 rounded-full bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 flex items-center justify-center">
                      <span className="text-xs font-black text-gray-700 dark:text-gray-300">
                        {step.number}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed max-w-xs">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
