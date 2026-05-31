"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Zap, Smartphone, Star, Shield, Wifi, MapPin, CreditCard, Route } from "lucide-react";

const features = [
  { icon: MapPin, label: "Real-Time Station Map", desc: "See live charger availability near you." },
  { icon: CreditCard, label: "One-Tap Payments", desc: "UPI, cards, or ZapWallet. Instant receipts." },
  { icon: Route, label: "Route Planning", desc: "Plan road trips with charging stops built in." },
  { icon: Wifi, label: "Works Offline", desc: "Saved stations work without mobile data." },
  { icon: Shield, label: "Secure & Private", desc: "Bank-grade security. Zero data selling." },
  { icon: Star, label: "4.8 Rating", desc: "Loved by 85,000+ EV drivers across India." },
];

const screenshots = [
  { title: "Station Map", bg: "from-green-500 to-teal-500" },
  { title: "Charging Session", bg: "from-blue-500 to-purple-500" },
  { title: "Route Planner", bg: "from-orange-500 to-pink-500" },
];

export default function DownloadPage() {
  return (
    <div className="pt-16 bg-white dark:bg-gray-950 min-h-screen">
      {/* Hero */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh pointer-events-none" />
        <Container className="relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-sm font-medium mb-6">
                <Zap className="w-4 h-4" fill="currentColor" />
                Now Available on iOS & Android
              </span>
              <h1 className="text-4xl sm:text-6xl font-black text-gray-900 dark:text-white mb-6 leading-tight">
                Download the{" "}
                <span className="gradient-text">ZapwayEV App</span>
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                India&apos;s most-loved EV charging app. Find stations, plan routes, and pay — all from one beautiful app. Free to download.
              </p>

              <div className="flex flex-wrap gap-4 mb-10">
                {/* App Store Button */}
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-3 px-5 py-3 bg-black dark:bg-white rounded-2xl text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
                >
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                  <div>
                    <p className="text-xs opacity-80">Download on the</p>
                    <p className="text-base font-semibold leading-tight">App Store</p>
                  </div>
                </motion.a>

                {/* Play Store Button */}
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-3 px-5 py-3 bg-black dark:bg-white rounded-2xl text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
                >
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3 20.5v-17c0-.83.94-1.3 1.6-.8l14 8.5c.6.37.6 1.23 0 1.6l-14 8.5c-.66.5-1.6.03-1.6-.8z" />
                  </svg>
                  <div>
                    <p className="text-xs opacity-80">Get it on</p>
                    <p className="text-base font-semibold leading-tight">Google Play</p>
                  </div>
                </motion.a>
              </div>

              <div className="flex items-center gap-6 text-sm text-gray-500 dark:text-gray-400">
                <span className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-400" fill="currentColor" /> 4.8 / 5
                </span>
                <span>85,000+ downloads</span>
                <span>Free · No ads</span>
              </div>
            </motion.div>

            {/* Phone mockups */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex justify-center gap-4"
            >
              {screenshots.map((s, i) => (
                <motion.div
                  key={s.title}
                  initial={{ y: 0 }}
                  animate={{ y: i % 2 === 0 ? -10 : 10 }}
                  transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                  className="w-32 sm:w-40"
                >
                  <div className={`bg-gradient-to-br ${s.bg} rounded-3xl aspect-[9/19] flex flex-col items-center justify-center p-3 shadow-2xl`}>
                    <Smartphone className="w-8 h-8 text-white/50 mb-2" />
                    <p className="text-white text-xs font-medium text-center">{s.title}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900/50">
        <Container>
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Everything You Need, In One App
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <motion.div
                  key={f.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-start gap-4 p-5 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800"
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500 to-blue-500 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white text-sm">{f.label}</h3>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-0.5">{f.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* QR CTA */}
      <section className="py-16">
        <Container className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Scan to Download</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">Point your phone camera at the QR code to download instantly.</p>
          <div className="inline-block p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-3xl shadow-lg mb-8">
            {/* QR Code placeholder */}
            <div className="w-40 h-40 bg-gradient-to-br from-green-100 to-blue-100 dark:from-green-900/30 dark:to-blue-900/30 rounded-2xl flex items-center justify-center">
              <div className="grid grid-cols-5 gap-1 p-2">
                {Array.from({ length: 25 }).map((_, i) => (
                  <div
                    key={i}
                    className={`w-5 h-5 rounded-sm ${Math.random() > 0.5 ? "bg-gray-900 dark:bg-white" : "bg-transparent"}`}
                  />
                ))}
              </div>
            </div>
          </div>
          <p className="text-sm text-gray-500">Compatible with iOS 14+ and Android 8.0+</p>
        </Container>
      </section>
    </div>
  );
}
