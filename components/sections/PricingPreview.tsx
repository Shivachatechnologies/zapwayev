"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { CheckCircle, Zap } from "lucide-react";

const plans = [
  {
    name: "Pay-As-You-Go",
    price: "Free",
    period: "",
    rate: "₹12/kWh",
    highlight: false,
    badge: null,
    features: [
      "Access all charging stations",
      "Real-time availability map",
      "In-app payments (UPI, cards)",
      "Digital receipts",
      "Basic customer support",
    ],
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
    features: [
      "Everything in Pay-As-You-Go",
      "Priority station access",
      "Advanced route planning",
      "ZapWallet credits 5% bonus",
      "Priority 24/7 support",
      "Session history & analytics",
    ],
    cta: "Start Free Trial",
    ctaVariant: "primary" as const,
  },
  {
    name: "Business",
    price: "₹2,499",
    period: "/month",
    rate: "₹7/kWh",
    highlight: false,
    badge: null,
    features: [
      "Everything in ZapPlus",
      "Fleet management dashboard",
      "API access & integrations",
      "Dedicated account manager",
      "Custom invoicing & GST",
      "Up to 50 vehicles",
    ],
    cta: "Contact Sales",
    ctaVariant: "secondary" as const,
  },
];

export function PricingPreview() {
  return (
    <section className="section-padding bg-gray-50 dark:bg-gray-900/50">
      <Container>
        <SectionHeading
          badge="Pricing"
          title="Simple, Transparent "
          highlight="Pricing"
          subtitle="No hidden fees. No surprises. Pay only for what you use, or save more with a plan."
        />

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative rounded-2xl p-6 flex flex-col ${
                plan.highlight
                  ? "bg-gradient-to-b from-gray-900 to-gray-950 text-white border-2 border-green-500 shadow-2xl shadow-green-500/10 scale-105"
                  : "bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-green-500 to-blue-500 text-white text-xs font-bold px-4 py-1.5 rounded-full flex items-center gap-1">
                    <Zap className="w-3 h-3" fill="white" />
                    {plan.badge}
                  </span>
                </div>
              )}

              <h3 className={`text-lg font-bold mb-1 ${plan.highlight ? "text-white" : "text-gray-900 dark:text-white"}`}>
                {plan.name}
              </h3>
              <div className="flex items-baseline gap-1 mb-1">
                <span className={`text-3xl font-black ${plan.highlight ? "text-white" : "text-gray-900 dark:text-white"}`}>
                  {plan.price}
                </span>
                <span className={`text-sm ${plan.highlight ? "text-gray-400" : "text-gray-500"}`}>
                  {plan.period}
                </span>
              </div>
              <span className={`text-sm font-semibold mb-6 ${plan.highlight ? "text-green-400" : "text-green-600 dark:text-green-400"}`}>
                {plan.rate}
              </span>

              <ul className="space-y-2.5 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <CheckCircle className={`w-4 h-4 mt-0.5 flex-shrink-0 ${plan.highlight ? "text-green-400" : "text-green-500"}`} />
                    <span className={`text-sm ${plan.highlight ? "text-gray-300" : "text-gray-600 dark:text-gray-400"}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button variant={plan.ctaVariant} size="md" href="/pricing" className="w-full">
                {plan.cta}
              </Button>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <a href="/pricing" className="text-green-600 dark:text-green-400 font-medium hover:underline">
            View full plan comparison →
          </a>
        </motion.div>
      </Container>
    </section>
  );
}
