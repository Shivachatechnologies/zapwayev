"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { FileText, Calendar } from "lucide-react";

const sections = [
  {
    title: "1. Acceptance of Terms",
    content: `By downloading the ZapwayEV app, accessing our website, or using any ZapwayEV service, you agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree, please do not use our services. These Terms govern the relationship between ZapwayEV Technologies Pvt. Ltd. and all users — drivers, hosts, and business customers.`,
  },
  {
    title: "2. Eligibility",
    content: `You must be at least 18 years of age and possess a valid driving licence (where applicable) to use ZapwayEV. By using the app, you represent that you meet these requirements. Businesses using the Business plan must be registered entities in India.`,
  },
  {
    title: "3. User Accounts",
    content: `You are responsible for maintaining the confidentiality of your account credentials. You must promptly notify ZapwayEV of any unauthorised use of your account. ZapwayEV is not liable for losses arising from unauthorised account access. You may not share accounts or create multiple accounts for the same person.`,
  },
  {
    title: "4. Charging Services",
    content: `ZapwayEV provides a platform connecting EV drivers with charging station hosts. Charging sessions are initiated via the app using QR code scanning or NFC. Sessions are billed based on energy consumed (kWh) per the rates displayed at session initiation. ZapwayEV is not liable for charger hardware malfunctions outside our control, but will provide support credits where a session fails to start due to platform errors.`,
  },
  {
    title: "5. Payments & Refunds",
    content: `All payments are processed through our PCI-DSS compliant payment partner. Accepted methods: UPI, credit/debit cards, net banking, and ZapWallet. ZapWallet credits are non-transferable and non-refundable except in cases of platform error. Disputed charges must be raised within 30 days via the app. Approved refunds are processed within 5–7 business days.`,
  },
  {
    title: "6. Host Terms",
    content: `Station hosts must ensure their chargers are in safe operating condition, clearly accessible, and listed with accurate specifications. Hosts receive payouts weekly to their registered bank account, subject to a minimum payout threshold of ₹500. ZapwayEV retains a platform fee (as displayed in the Host dashboard) before payouts. Hosts are responsible for ensuring their charger installation complies with local electrical codes.`,
  },
  {
    title: "7. Prohibited Conduct",
    content: `You may not:
• Use ZapwayEV for any unlawful purpose.
• Tamper with or reverse-engineer charging hardware.
• Use automated scripts to access the platform.
• Resell charging credits or ZapWallet balances.
• Post false reviews or ratings.
• Impersonate ZapwayEV staff or other users.

Violations may result in account suspension and legal action.`,
  },
  {
    title: "8. Intellectual Property",
    content: `All content, trademarks, software, and technology on ZapwayEV are owned by ZapwayEV Technologies Pvt. Ltd. or its licensors. You are granted a limited, non-exclusive licence to use the app for personal, non-commercial purposes. Nothing in these Terms transfers any IP rights to you.`,
  },
  {
    title: "9. Limitation of Liability",
    content: `To the maximum extent permitted by law, ZapwayEV's liability is limited to the amount you paid for the specific service in the 30 days preceding the claim. ZapwayEV is not liable for indirect, incidental, or consequential damages including loss of revenue, data, or vehicle damage due to improper charging (except in cases of gross negligence).`,
  },
  {
    title: "10. Dispute Resolution",
    content: `Any disputes shall first be attempted to be resolved through good-faith negotiations. If unresolved within 30 days, disputes shall be submitted to binding arbitration under the Arbitration and Conciliation Act, 1996, with proceedings in Bengaluru, Karnataka. These Terms are governed by the laws of India.`,
  },
  {
    title: "11. Modifications",
    content: `ZapwayEV reserves the right to modify these Terms at any time. We will provide at least 30 days' notice of material changes. Your continued use after the effective date constitutes acceptance. If you disagree with changes, you may close your account before the effective date.`,
  },
  {
    title: "12. Contact",
    content: `ZapwayEV Technologies Pvt. Ltd.
WeWork DLF Forum, Cyber City
DLF Phase 2, Gurugram, Haryana 122002
Email: legal@zapwayev.in`,
  },
];

export default function TermsPage() {
  return (
    <div className="pt-16 bg-white dark:bg-gray-950 min-h-screen">
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh pointer-events-none" />
        <Container className="relative z-10 max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-blue-500 flex items-center justify-center">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-black text-gray-900 dark:text-white">Terms of Service</h1>
                <p className="flex items-center gap-1 text-sm text-gray-500 mt-1">
                  <Calendar className="w-4 h-4" /> Effective Date: 1 January 2024
                </p>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-10">
              Please read these Terms of Service carefully before using ZapwayEV. These terms constitute a legally binding agreement between you and ZapwayEV Technologies Pvt. Ltd.
            </p>
          </motion.div>

          <div className="space-y-10">
            {sections.map((section, i) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
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
