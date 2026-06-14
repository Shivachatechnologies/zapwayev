"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "How do I find a charging station near me?",
    a: "Open the ZapwayEV app and tap 'Find Stations'. The map will show all available charging stations in real-time near your GPS location. You can filter by connector type, charging speed (AC/DC), and availability. We're live across Gurgaon and Delhi NCR, expanding rapidly.",
  },
  {
    q: "What EV brands does ZapwayEV support?",
    a: "ZapwayEV supports all major EV brands available in India including Tata Nexon EV, MG ZS EV, Hyundai Kona, Ola S1, Ather 450X, Hero Vida, TVS iQube, Mahindra XUV400, and all other CCS2, CHAdeMO, and Type-2 connector compatible vehicles.",
  },
  {
    q: "How does host earnings work?",
    a: "As a host, you set your own price per kWh (our recommended range is ₹8–15/kWh). ZapwayEV handles all billing and collects payment from drivers. After a small platform fee, your earnings are transferred to your bank account every week via NEFT/IMPS. Most hosts earn ₹3,000–₹8,000/month.",
  },
  {
    q: "Is ZapwayEV available in my city?",
    a: "We're currently live in Gurgaon and expanding across Delhi NCR. We're growing fast — if your city isn't covered yet, you can join our waitlist and we'll notify you the moment we launch there.",
  },
  {
    q: "What payment methods are accepted?",
    a: "ZapwayEV accepts all major payment methods: UPI (GPay, PhonePe, Paytm, BHIM), debit/credit cards (Visa, Mastercard, RuPay), net banking, and ZapWallet (our in-app wallet with bonus credits). Business accounts also get GST invoicing and corporate card support.",
  },
  {
    q: "What if I face issues during charging?",
    a: "Our 24/7 support team is available via in-app chat, phone (1800-ZAP-HELP), and email. If a charging session fails due to station issues, you're automatically not charged. Our field teams typically respond to hardware issues within 2 hours. You can also report station issues directly from the app.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section-padding bg-gray-50 dark:bg-gray-900/50">
      <Container>
        <SectionHeading
          badge="FAQ"
          title="Frequently Asked "
          highlight="Questions"
          subtitle="Everything you need to know about ZapwayEV. Can't find your answer? Contact our support team."
        />

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
              >
                <span className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base pr-4">
                  {faq.q}
                </span>
                <motion.div
                  animate={{ rotate: open === i ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-5 text-gray-600 dark:text-gray-400 text-sm leading-relaxed border-t border-gray-100 dark:border-gray-800 pt-4">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
