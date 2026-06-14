"use client";

import { motion } from "framer-motion";
import { MapPin, Zap, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

const trustItems = [
  "1.5M+ EVs on Indian Roads",
  "49% YoY EV Growth in India",
  "12,000+ Charging Stations Nationwide",
  "Gurgaon HQ",
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" },
  }),
};

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-white dark:bg-gray-950">
      {/* Gradient mesh background */}
      <div className="absolute inset-0 bg-gradient-mesh pointer-events-none" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-green-500/10 via-blue-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-green-500/8 to-transparent rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Copy */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <motion.div
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="inline-flex items-center gap-2 bg-green-50 dark:bg-green-950/50 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-400 px-4 py-1.5 rounded-full text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              India&apos;s Fastest-Growing EV Charging Network
            </motion.div>

            <motion.h1
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6"
            >
              The Future of{" "}
              <span className="gradient-text">EV Charging</span>{" "}
              is Here
            </motion.h1>

            <motion.p
              custom={2}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0"
            >
              ZapwayEV connects EV drivers to smart charging stations
              across India&apos;s fast-growing EV network. Find the nearest charger, plug in, and pay — all
              from one powerful app. Zero range anxiety, always.
            </motion.p>

            <motion.div
              custom={3}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10"
            >
              <Button variant="primary" size="lg" href="#features">
                <MapPin className="w-5 h-5 mr-2" />
                Find Charging Stations
              </Button>
              <Button variant="outline" size="lg" href="/contact">
                <Zap className="w-5 h-5 mr-2" />
                List Your Charger
              </Button>
            </motion.div>

            {/* Trust Strip */}
            <motion.div
              custom={4}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="flex flex-wrap items-center gap-x-6 gap-y-2 justify-center lg:justify-start"
            >
              {trustItems.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-1.5 text-sm text-gray-600 dark:text-gray-400"
                >
                  <span className="text-green-500 font-bold">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="relative hidden lg:flex items-center justify-center"
          >
            <HeroIllustration />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

function HeroIllustration() {
  return (
    <div className="relative w-[480px] h-[420px]">
      {/* Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-3xl blur-2xl" />

      {/* Main card */}
      <div className="relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-3xl shadow-2xl p-8 h-full flex flex-col gap-6">
        {/* App header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" fill="white" />
            </div>
            <span className="font-bold gradient-text">ZapwayEV</span>
          </div>
          <span className="text-xs bg-green-100 dark:bg-green-950 text-green-700 dark:text-green-400 px-3 py-1 rounded-full font-medium">
            3 Nearby
          </span>
        </div>

        {/* Map placeholder */}
        <div className="flex-1 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-2xl relative overflow-hidden">
          {/* Grid lines */}
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute left-0 right-0 border-t border-gray-300/40 dark:border-gray-700/40"
              style={{ top: `${(i + 1) * 20}%` }}
            />
          ))}
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute top-0 bottom-0 border-l border-gray-300/40 dark:border-gray-700/40"
              style={{ left: `${(i + 1) * 16.67}%` }}
            />
          ))}

          {/* Station pins */}
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
            className="absolute top-1/4 left-1/3"
          >
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center shadow-lg shadow-green-500/40">
              <Zap className="w-4 h-4 text-white" fill="white" />
            </div>
            <div className="text-[10px] font-bold text-green-600 text-center mt-1 bg-white dark:bg-gray-900 rounded px-1">
              Free
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ repeat: Infinity, duration: 3, delay: 0.5, ease: "easeInOut" }}
            className="absolute top-1/2 left-2/3"
          >
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/40">
              <Zap className="w-4 h-4 text-white" fill="white" />
            </div>
            <div className="text-[10px] font-bold text-blue-600 text-center mt-1 bg-white dark:bg-gray-900 rounded px-1">
              2 min
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, -4, 0] }}
            transition={{ repeat: Infinity, duration: 2, delay: 1, ease: "easeInOut" }}
            className="absolute top-2/3 left-1/4"
          >
            <div className="w-7 h-7 bg-gray-400 rounded-full flex items-center justify-center">
              <Zap className="w-3.5 h-3.5 text-white" />
            </div>
            <div className="text-[10px] text-gray-500 text-center mt-1 bg-white dark:bg-gray-900 rounded px-1">
              Busy
            </div>
          </motion.div>
        </div>

        {/* Bottom info card */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-950/50 dark:to-blue-950/50 rounded-xl p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-gray-500 dark:text-gray-400">Nearest Station</p>
              <p className="font-bold text-gray-900 dark:text-gray-100 text-sm">Cyber City, Gurugram</p>
              <p className="text-xs text-green-600 dark:text-green-400 mt-0.5">● Available now • 22 kW AC</p>
            </div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-green-500 to-blue-500 text-white text-xs font-bold px-4 py-2 rounded-lg cursor-pointer flex items-center gap-1"
            >
              Navigate <ChevronRight className="w-3 h-3" />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
