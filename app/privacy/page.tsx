"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Shield, Calendar } from "lucide-react";

const sections = [
  {
    title: "1. Information We Collect",
    content: `We collect information you provide directly to us, including:

• Account information: name, email address, phone number, and password when you create an account.
• Payment information: billing address, UPI ID, or card details (processed securely via our payment partners — we do not store raw card numbers).
• Location data: real-time GPS location when you use the app to find charging stations. You may disable this in device settings.
• Vehicle information: EV make, model, battery capacity, and connector type to show compatible chargers.
• Usage data: charging sessions, session duration, energy consumed, and transaction history.`,
  },
  {
    title: "2. How We Use Your Information",
    content: `ZapwayEV uses your data to:

• Provide, operate, and improve the ZapwayEV platform and app.
• Process payments and send transaction receipts.
• Show you nearby available charging stations in real time.
• Send service notifications (charging session start/stop, invoices, support updates).
• Personalise route planning and charging recommendations.
• Conduct analytics to improve network reliability and uptime.
• Comply with legal obligations and resolve disputes.`,
  },
  {
    title: "3. Sharing of Information",
    content: `We do not sell your personal data. We share information only with:

• Service providers: payment gateways (Razorpay), cloud infrastructure (AWS), and analytics platforms under strict data processing agreements.
• Charging station hosts: limited session data (start time, duration, energy) required to operate their hardware.
• Legal authorities: when required by law, court order, or to protect user safety.
• Business transfers: in connection with a merger, acquisition, or sale of assets, subject to standard confidentiality protections.`,
  },
  {
    title: "4. Data Retention",
    content: `We retain personal data for as long as your account is active or as needed to provide services. You may request deletion of your account and associated data at any time via the app settings or by emailing privacy@zapwayev.in. Some data may be retained longer for legal compliance (e.g., GST invoicing records for 7 years as required under Indian law).`,
  },
  {
    title: "5. Security",
    content: `ZapwayEV employs industry-standard security measures including TLS encryption in transit, AES-256 encryption at rest, SOC 2-compliant infrastructure, regular third-party security audits, and multi-factor authentication for admin access. Despite these measures, no system is 100% secure. Please report any suspected vulnerabilities to security@zapwayev.in.`,
  },
  {
    title: "6. Your Rights",
    content: `Under applicable law (including the Digital Personal Data Protection Act, 2023), you have the right to:

• Access the personal data we hold about you.
• Correct inaccurate data.
• Request deletion ("right to be forgotten").
• Withdraw consent for processing where consent is the legal basis.
• Nominate a representative to exercise your rights.

To exercise these rights, email privacy@zapwayev.in with subject "Data Rights Request."`,
  },
  {
    title: "7. Cookies & Tracking",
    content: `Our website uses cookies for authentication, preferences, and analytics. You can manage cookie preferences via our Cookie Settings panel. See our Cookie Policy for details. The ZapwayEV mobile app does not use browser cookies but may use device identifiers for analytics.`,
  },
  {
    title: "8. Children's Privacy",
    content: `ZapwayEV is not intended for users under 18 years of age. We do not knowingly collect personal information from minors. If you believe we have inadvertently collected such information, contact us immediately at privacy@zapwayev.in.`,
  },
  {
    title: "9. Changes to This Policy",
    content: `We may update this Privacy Policy from time to time. We will notify you of material changes via email or an in-app notification at least 30 days before the change takes effect. Continued use of ZapwayEV after the effective date constitutes acceptance of the updated policy.`,
  },
  {
    title: "10. Contact Us",
    content: `For privacy-related queries or complaints, contact our Data Protection Officer:

ZapwayEV Technologies Pvt. Ltd.
Attn: Data Protection Officer
12th Floor, Prestige Tech Park, Koramangala
Bengaluru, Karnataka 560034

Email: privacy@zapwayev.in
Phone: +91 80 4567 8901`,
  },
];

export default function PrivacyPage() {
  return (
    <div className="pt-16 bg-white dark:bg-gray-950 min-h-screen">
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh pointer-events-none" />
        <Container className="relative z-10 max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-blue-500 flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-black text-gray-900 dark:text-white">Privacy Policy</h1>
                <p className="flex items-center gap-1 text-sm text-gray-500 mt-1">
                  <Calendar className="w-4 h-4" /> Effective Date: 1 January 2024
                </p>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-10">
              ZapwayEV Technologies Pvt. Ltd. ("ZapwayEV", "we", "our", "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, share, and protect your personal information when you use the ZapwayEV app, website (zapwayev.in), and related services.
            </p>
          </motion.div>

          <div className="space-y-10">
            {sections.map((section, i) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-3">{section.title}</h2>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed whitespace-pre-line text-sm">
                  {section.content}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
