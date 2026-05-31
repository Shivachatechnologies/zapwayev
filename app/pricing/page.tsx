"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { CheckCircle, X, ChevronDown, Zap } from "lucide-react";

const plans = [
  {
    name: "Pay-As-You-Go",
    price: "Free",
    period: "",
    rate: "₹12/kWh",
    highlight: false,
    badge: null,
    description: "Perfect for occasional EV drivers who want flexibility without commitment.",
    features: {
      "Station Access": true,
      "Real-time Map": true,
      "UPI / Card Payments": true,
      "Digital Receipts": true,
      "Route Planning": false,
      "Priority Access": false,
      "ZapWallet Bonus": false,
      "Fleet Management": false,
      "API Access": false,
      "GST Invoicing": false,
      "Dedicated Support": false,
      "Analytics Dashboard": false,
    },
    cta: "Get Started Free",
    ctaVariant: "outline" as const,
  },
  {
    name: "ZapPlus",
    price: "₹299",
    period: "/month",
    rate: "₹9/kWh",
    highlight: true,
    badge: "Most Popular",
    description: "For frequent EV drivers who want the best experience and maximum savings.",
    features: {
      "Station Access": true,
      "Real-time Map": true,
      "UPI / Card Payments": true,
      "Digital Receipts": true,
      "Route Planning": true,
      "Priority Access": true,
      "ZapWallet Bonus": "5% bonus",
      "Fleet Management": false,
      "API Access": false,
      "GST Invoicing": false,
      "Dedicated Support": false,
      "Analytics Dashboard": true,
    },
    cta: "Start 7-Day Free Trial",
    ctaVariant: "primary" as const,
  },
  {
    name: "Business",
    price: "₹2,499",
    period: "/month",
    rate: "₹7/kWh",
    highlight: false,
    badge: null,
    description: "For fleets, corporations, and businesses managing multiple EV vehicles.",
    features: {
      "Station Access": true,
      "Real-time Map": true,
      "UPI / Card Payments": true,
      "Digital Receipts": true,
      "Route Planning": true,
      "Priority Access": true,
      "ZapWallet Bonus": "10% bonus",
      "Fleet Management": "Up to 50 vehicles",
      "API Access": true,
      "GST Invoicing": true,
      "Dedicated Support": true,
      "Analytics Dashboard": true,
    },
    cta: "Contact Sales",
    ctaVariant: "secondary" as const,
  },
];

const pricingFaqs = [
  {
    q: "Can I switch plans anytime?",
    a: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.",
  },
  {
    q: "Is there a free trial for ZapPlus?",
    a: "Yes! ZapPlus comes with a 7-day free trial. No credit card required to start.",
  },
  {
    q: "How is the kWh rate calculated?",
    a: "You're billed per kWh of energy consumed during your session. The rate shown is the platform rate — individual hosts may charge slightly more or less.",
  },
  {
    q: "What is ZapWallet?",
    a: "ZapWallet is our in-app wallet. You can load money and earn bonus credits based on your plan. It's the fastest way to pay for charging sessions.",
  },
];

function ComparisonTable() {
  const featureKeys = Object.keys(plans[0].features);

  return (
    <div className="overflow-x-auto mt-16">
      <table className="w-full">
        <thead>
          <tr>
            <th className="text-left py-4 pr-4 text-gray-500 dark:text-gray-400 font-medium text-sm w-48">Feature</th>
            {plans.map((plan) => (
              <th key={plan.name} className="py-4 px-4 text-center">
                <span className={`text-sm font-bold ${plan.highlight ? "text-green-500" : "text-gray-900 dark:text-white"}`}>
                  {plan.name}
                </span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {featureKeys.map((feature, i) => (
            <tr
              key={feature}
              className={`border-t border-gray-100 dark:border-gray-800 ${i % 2 === 0 ? "bg-gray-50/50 dark:bg-gray-900/30" : ""}`}
            >
              <td className="py-3 pr-4 text-gray-700 dark:text-gray-300 text-sm font-medium">{feature}</td>
              {plans.map((plan) => {
                const val = plan.features[feature as keyof typeof plan.features];
                return (
                  <td key={plan.name} className="py-3 px-4 text-center">
                    {val === true ? (
                      <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
                    ) : val === false ? (
                      <X className="w-5 h-5 text-gray-300 dark:text-gray-600 mx-auto" />
                    ) : (
                      <span className="text-xs text-green-600 dark:text-green-400 font-medium">{val}</span>
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function PricingFAQ() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="max-w-2xl mx-auto space-y-3">
      {pricingFaqs.map((faq, i) => (
        <div key={i} className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between px-5 py-4 text-left"
          >
            <span className="font-medium text-gray-900 dark:text-white text-sm">{faq.q}</span>
            <motion.div animate={{ rotate: open === i ? 180 : 0 }} transition={{ duration: 0.2 }}>
              <ChevronDown className="w-5 h-5 text-gray-400" />
            </motion.div>
          </button>
          <AnimatePresence>
            {open === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <p className="px-5 pb-4 text-sm text-gray-600 dark:text-gray-400 border-t border-gray-100 dark:border-gray-800 pt-3">
                  {faq.a}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

export default function PricingPage() {
  return (
    <div className="pt-16 bg-white dark:bg-gray-950 min-h-screen">
      {/* Hero */}
      <section className="py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh pointer-events-none" />
        <Container className="relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-sm font-medium mb-6">
              <Zap className="w-4 h-4" fill="currentColor" />
              Simple, Transparent Pricing
            </span>
            <h1 className="text-4xl sm:text-5xl font-black text-gray-900 dark:text-white mb-4">
              Pay for what you use.{" "}
              <span className="gradient-text">Save more</span> with a plan.
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              No hidden fees, no surprises. Start free and upgrade when you need more.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Plans */}
      <Container className="pb-16">
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative rounded-2xl p-7 flex flex-col ${
                plan.highlight
                  ? "bg-gradient-to-b from-gray-900 to-gray-950 text-white border-2 border-green-500 shadow-2xl shadow-green-500/10 scale-105"
                  : "bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-green-500 to-blue-500 text-white text-xs font-bold px-4 py-1.5 rounded-full">
                    {plan.badge}
                  </span>
                </div>
              )}
              <h3 className={`text-lg font-bold mb-1 ${plan.highlight ? "text-white" : "text-gray-900 dark:text-white"}`}>
                {plan.name}
              </h3>
              <div className="flex items-baseline gap-1 mb-1">
                <span className={`text-4xl font-black ${plan.highlight ? "text-white" : "text-gray-900 dark:text-white"}`}>
                  {plan.price}
                </span>
                <span className={`text-sm ${plan.highlight ? "text-gray-400" : "text-gray-500"}`}>
                  {plan.period}
                </span>
              </div>
              <span className={`text-sm font-semibold mb-3 ${plan.highlight ? "text-green-400" : "text-green-600 dark:text-green-400"}`}>
                {plan.rate}
              </span>
              <p className={`text-xs mb-6 ${plan.highlight ? "text-gray-400" : "text-gray-500 dark:text-gray-500"}`}>
                {plan.description}
              </p>
              <Button variant={plan.ctaVariant} size="md" href="#" className="w-full mb-0">
                {plan.cta}
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Comparison table */}
        <ComparisonTable />

        {/* FAQ */}
        <div className="mt-20">
          <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">
            Pricing FAQs
          </h2>
          <PricingFAQ />
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-950/30 dark:to-blue-950/30 rounded-3xl p-12 border border-green-100 dark:border-green-900/50"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-3">
            Still not sure? Talk to us.
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Our team will help you find the right plan for your needs.
          </p>
          <Button variant="primary" size="lg" href="/contact">
            Contact Our Team
          </Button>
        </motion.div>
      </Container>
    </div>
  );
}
