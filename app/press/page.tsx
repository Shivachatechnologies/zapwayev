"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Zap, Calendar, ExternalLink, Download, Mail } from "lucide-react";

const pressReleases = [
  {
    date: "May 2025",
    headline: "ZapwayEV Launches in Delhi NCR — Bringing Smart EV Charging to the Capital",
    summary: "ZapwayEV goes live with its first 100 charging stations across Gurgaon, Noida, and Delhi. App available on iOS and Android.",
    tag: "Launch",
  },
  {
    date: "April 2025",
    headline: "ZapwayEV Announces Host Programme — Earn from Your Idle EV Charger",
    summary: "Home and commercial charger owners in NCR can now list on ZapwayEV and earn per kWh dispensed.",
    tag: "Product",
  },
  {
    date: "March 2025",
    headline: "ZapwayEV Onboards 50 Commercial Charging Partners in Gurgaon",
    summary: "Malls, office parks, and residential societies in Gurgaon Cyber City and Golf Course Road join the network.",
    tag: "Partnership",
  },
  {
    date: "February 2025",
    headline: "ZapwayEV App Hits 1,000 Downloads in First Week — Early Traction Signals Strong Demand",
    summary: "Early users praise real-time availability, seamless UPI payments, and route planning features.",
    tag: "Milestone",
  },
  {
    date: "January 2025",
    headline: "ZapwayEV Technologies Pvt. Ltd. Incorporated in Gurugram",
    summary: "Founded by four tech entrepreneurs with backgrounds in EV, SaaS, and mobility. Headquartered at WeWork DLF Forum, Cyber City.",
    tag: "Company",
  },
];

const mediaCoverage = [
  { outlet: "YourStory", headline: "Meet ZapwayEV — the Gurgaon startup building India's smart charging network", date: "May 2025" },
  { outlet: "Inc42", headline: "ZapwayEV is betting on the host model to crack EV charging in India", date: "April 2025" },
  { outlet: "Economic Times", headline: "NCR's newest EV startup wants to turn every parking spot into a charger", date: "April 2025" },
  { outlet: "Entrackr", headline: "ZapwayEV launches in Gurgaon with 100 stations, eyes pan-India expansion", date: "March 2025" },
  { outlet: "Business Standard", headline: "India's EV charging gap — and the startups closing it from Cyber City", date: "February 2025" },
  { outlet: "Mint", headline: "EV charging startups are multiplying. ZapwayEV thinks its network model wins.", date: "January 2025" },
];

const tagColors: Record<string, string> = {
  Launch: "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400",
  Company: "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300",
  Milestone: "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400",
  Partnership: "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400",
  Product: "bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400",
  Award: "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400",
};

export default function PressPage() {
  return (
    <div className="pt-16 bg-white dark:bg-gray-950 min-h-screen">
      {/* Hero */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh pointer-events-none" />
        <Container className="relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-sm font-medium mb-6">
              <Zap className="w-4 h-4" fill="currentColor" />
              Newsroom
            </span>
            <h1 className="text-4xl sm:text-5xl font-black text-gray-900 dark:text-white mb-6">
              ZapwayEV in the <span className="gradient-text">News</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto mb-8">
              Press releases, media coverage, and brand assets. For press inquiries, reach out to our communications team.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="primary" href="mailto:press@zapwayev.in">
                <Mail className="w-4 h-4 mr-2" /> Contact Press Team
              </Button>
              <Button variant="outline" href="#">
                <Download className="w-4 h-4 mr-2" /> Download Press Kit
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Press Releases */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900/50">
        <Container>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-10">Press Releases</h2>
          <div className="space-y-4 max-w-4xl">
            {pressReleases.map((pr, i) => (
              <motion.div
                key={pr.headline}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-6 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-green-500 transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className={`px-2 py-0.5 rounded-md text-xs font-medium ${tagColors[pr.tag] ?? ""}`}>{pr.tag}</span>
                      <span className="flex items-center gap-1 text-xs text-gray-500">
                        <Calendar className="w-3 h-3" /> {pr.date}
                      </span>
                    </div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-1">{pr.headline}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{pr.summary}</p>
                  </div>
                  <Button variant="ghost" size="sm" href="#">
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Media Coverage */}
      <section className="py-16">
        <Container>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-10">Media Coverage</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl">
            {mediaCoverage.map((item, i) => (
              <motion.div
                key={item.headline}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-5 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-green-500 transition-colors"
              >
                <p className="text-xs font-bold text-green-600 dark:text-green-400 mb-2 uppercase tracking-wide">{item.outlet}</p>
                <p className="text-sm font-semibold text-gray-900 dark:text-white mb-3 leading-snug">{item.headline}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">{item.date}</span>
                  <ExternalLink className="w-4 h-4 text-gray-400 hover:text-green-500 cursor-pointer transition-colors" />
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Brand Assets */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900/50">
        <Container>
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Brand Assets</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Download logos, brand guidelines, and product screenshots for editorial use. Please review our brand guidelines before publishing.
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              {["Logo Pack (SVG + PNG)", "Brand Guidelines PDF", "Product Screenshots"].map((asset) => (
                <div key={asset} className="p-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{asset}</span>
                  <Download className="w-4 h-4 text-green-500 cursor-pointer" />
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
