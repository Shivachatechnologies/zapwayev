"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Cookie, Calendar } from "lucide-react";

const cookieTypes = [
  {
    name: "Strictly Necessary Cookies",
    required: true,
    desc: "These cookies are essential for the website to function. They enable core features like authentication, session management, and security. You cannot opt out of these.",
    examples: ["auth_session", "csrf_token", "dark_mode_pref"],
  },
  {
    name: "Performance & Analytics Cookies",
    required: false,
    desc: "These cookies help us understand how visitors interact with our website by collecting anonymised data. We use this information to improve page speed, navigation, and content.",
    examples: ["_ga (Google Analytics)", "_posthog (PostHog)"],
  },
  {
    name: "Functional Cookies",
    required: false,
    desc: "These cookies remember your preferences — such as your last searched city, preferred charger type, or language settings — to provide a personalised experience.",
    examples: ["user_city_pref", "charger_type_filter", "lang"],
  },
  {
    name: "Marketing Cookies",
    required: false,
    desc: "We use these cookies to show you relevant ads on third-party platforms. They help us measure the effectiveness of our campaigns. We do not sell your data to advertisers.",
    examples: ["_fbp (Meta Pixel)", "_gcl_au (Google Ads)"],
  },
];

export default function CookiesPage() {
  return (
    <div className="pt-16 bg-white dark:bg-gray-950 min-h-screen">
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh pointer-events-none" />
        <Container className="relative z-10 max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-blue-500 flex items-center justify-center">
                <Cookie className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-black text-gray-900 dark:text-white">Cookie Policy</h1>
                <p className="flex items-center gap-1 text-sm text-gray-500 mt-1">
                  <Calendar className="w-4 h-4" /> Effective Date: 1 January 2024
                </p>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              ZapwayEV uses cookies and similar technologies on our website and web app. This Cookie Policy explains what cookies are, which types we use, and how you can control them.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-10">
              <strong className="text-gray-900 dark:text-white">What are cookies?</strong> Cookies are small text files stored on your device by your browser. They help websites remember information about your visit, like your preferences or login state, making your next visit easier.
            </p>
          </motion.div>

          <div className="space-y-6 mb-12">
            {cookieTypes.map((ct, i) => (
              <motion.div
                key={ct.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-6 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800"
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h2 className="font-bold text-gray-900 dark:text-white">{ct.name}</h2>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold flex-shrink-0 ${ct.required ? "bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400" : "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400"}`}>
                    {ct.required ? "Always Active" : "Optional"}
                  </span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{ct.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {ct.examples.map((ex) => (
                    <code key={ex} className="px-2 py-0.5 bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded">
                      {ex}
                    </code>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6 text-sm text-gray-600 dark:text-gray-400 leading-relaxed"
          >
            <div>
              <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-2">How to Control Cookies</h2>
              <p>You can manage cookies via your browser settings. Most browsers allow you to block or delete cookies. Note that blocking strictly necessary cookies will affect app functionality. You can also use the Cookie Preferences panel in the website footer to manage optional cookies.</p>
            </div>
            <div>
              <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Third-Party Cookies</h2>
              <p>Some cookies are set by third-party services we use (e.g., Google Analytics, Meta). These are governed by their respective privacy policies. We encourage you to review them.</p>
            </div>
            <div>
              <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Contact</h2>
              <p>Questions about our cookie practices? Email us at privacy@zapwayev.in</p>
            </div>
          </motion.div>

          <div className="mt-10 flex gap-4 flex-wrap">
            <Button variant="primary" href="#">Manage Cookie Preferences</Button>
            <Button variant="outline" href="/privacy">Read Privacy Policy</Button>
          </div>
        </Container>
      </section>
    </div>
  );
}
