"use client";

import { motion } from "framer-motion";
import { Check, X, Zap } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

const plans = [
  {
    name: "Pay-As-You-Go",
    price: "Free",
    period: "",
    rate: "₹12/kWh",
    highlight: false,
    badge: null,
    description: "Perfect for occasional EV drivers. No commitment, no monthly fees.",
    features: [
      { text: "Access to 10,000+ stations", included: true },
      { text: "Real-time availability map", included: true },
      { text: "UPI / card payments", included: true },
      { text: "Digital receipts", included: true },
      { text: "Basic chat support", included: true },
      { text: "Priority station access", included: false },
      { text: "Route planning", included: false },
      { text: "Analytics dashboard", included: false },
      { text: "Fleet management", included: false },
      { text: "API access", included: false },
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
    description: "For daily EV commuters who want savings, priority, and smart features.",
    features: [
      { text: "Access to 10,000+ stations", included: true },
      { text: "Real-time availability map", included: true },
      { text: "All payment methods + ZapWallet", included: true },
      { text: "Digital receipts + GST invoices", included: true },
      { text: "24/7 priority support", included: true },
      { text: "Priority station access", included: true },
      { text: "Smart route planning", included: true },
      { text: "Session analytics dashboard", included: true },
      { text: "Fleet management", included: false },
      { text: "API access", included: false },
    ],
    cta: "Start Free 14-Day Trial",
    ctaVariant: "primary" as const,
  },
  {
    name: "Business",
    price: "₹2,499",
    period: "/month",
    rate: "₹7/kWh",
    highlight: false,
    badge: null,
    description: "For fleets, corporates, and operators who need scale and control.",
    features: [
      { text: "Access to 10,000+ stations", included: true },
      { text: "Real-time availability map", included: true },
      { text: "All payment methods + corporate billing", included: true },
      { text: "Centralized billing + GST compliance", included: true },
      { text: "Dedicated account manager", included: true },
      { text: "Priority + reserved station slots", included: true },
      { text: "Advanced fleet route planning", included: true },
      { text: "Full fleet analytics + reports", included: true },
      { text: "Fleet management (up to 50 EVs)", included: true },
      { text: "API access + webhooks", included: true },
    ],
    cta: "Contact Sales",
    ctaVariant: "secondary" as const,
  },
];

const faqs = [
  { q: "Is there a free trial for ZapPlus?", a: "Yes! New users get a 14-day free trial of ZapPlus with no credit card required. You'll automatically move to Pay-As-You-Go after the trial unless you subscribe." },
  { q: "Can I switch plans anytime?", a: "Absolutely. You can upgrade or downgrade your plan at any time from the app. Upgrades take effect immediately; downgrades apply from the next billing cycle." },
  { q: "How are charging rates calculated?", a: "You pay per kWh of energy delivered. Your plan's rate applies (₹12, ₹9, or ₹7 per kWh). Some fast-charging stations may have a small session initiation fee which is always shown upfront before you start." },
  { q: "Are there any setup fees for Business?", a: "No setup fees. Business plans are billed monthly and include onboarding support. Annual billing is available with a 20% discount — contact our sales team." },
];

export function PricingPage() {
  return (
    <div className="pt-16 min-h-screen bg-white dark:bg-gray-950">
      {/* Hero */}
      <section className="py-20 text-center bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-green-100 dark:bg-green-950/50 text-green-700 dark:text-green-400 text-sm font-semibold px-4 py-1.5 rounded-full border border-green-200 dark:border-green-800 mb-6">
              Pricing
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
              Simple,{" "}
              <span className="gradient-text">Transparent</span> Pricing
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
              No hidden fees. No lock-ins. Pay for what you use or save more with a plan.
              Every plan starts with a free trial.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Plans */}
      <section className="py-16">
        <Container>
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.12, duration: 0.5 }}
                className={`relative rounded-3xl overflow-hidden ${
                  plan.highlight
                    ? "border-2 border-green-500 shadow-2xl shadow-green-500/10 bg-gray-950 text-white"
                    : "border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900"
                }`}
              >
                {plan.badge && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-green-500 to-blue-500 text-white text-xs font-bold text-center py-2 flex items-center justify-center gap-1">
                    <Zap className="w-3.5 h-3.5" fill="white" /> {plan.badge}
                  </div>
                )}

                <div className={`p-8 ${plan.badge ? "pt-12" : ""}`}>
                  <h2 className={`text-xl font-bold mb-1 ${plan.highlight ? "text-white" : "text-gray-900 dark:text-white"}`}>
                    {plan.name}
                  </h2>
                  <p className={`text-sm mb-6 ${plan.highlight ? "text-gray-400" : "text-gray-500 dark:text-gray-400"}`}>
                    {plan.description}
                  </p>

                  <div className="flex items-baseline gap-1 mb-1">
                    <span className={`text-4xl font-extrabold ${plan.highlight ? "text-white" : "text-gray-900 dark:text-white"}`}>
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className={`text-sm ${plan.highlight ? "text-gray-400" : "text-gray-500"}`}>{plan.period}</span>
                    )}
                  </div>
                  <div className={`text-sm font-semibold mb-8 ${plan.highlight ? "text-green-400" : "text-green-600 dark:text-green-400"}`}>
                    {plan.rate} charging rate
                  </div>

                  <Button variant={plan.ctaVariant} size="md" href="#" className="w-full mb-8">
                    {plan.cta}
                  </Button>

                  <ul className="space-y-3">
                    {plan.features.map((f) => (
                      <li key={f.text} className="flex items-start gap-3">
                        {f.included ? (
                          <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        ) : (
                          <X className={`w-4 h-4 mt-0.5 flex-shrink-0 ${plan.highlight ? "text-gray-600" : "text-gray-300 dark:text-gray-600"}`} />
                        )}
                        <span className={`text-sm ${
                          f.included
                            ? plan.highlight ? "text-gray-300" : "text-gray-700 dark:text-gray-300"
                            : plan.highlight ? "text-gray-600" : "text-gray-400"
                        }`}>
                          {f.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <Container>
          <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white text-center mb-10">
            Pricing FAQ
          </h2>
          <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">{faq.q}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 text-center">
        <Container>
          <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white mb-4">
            Ready to start charging smarter?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Join 85,000+ EV drivers already on ZapwayEV. No credit card required to start.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg" href="#">Download the App</Button>
            <Button variant="outline" size="lg" href="/contact">Talk to Sales</Button>
          </div>
        </Container>
      </section>
    </div>
  );
}
