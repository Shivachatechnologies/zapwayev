"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Bengaluru",
    initials: "PS",
    color: "from-pink-500 to-purple-500",
    rating: 5,
    text: "Switched to my Nexon EV last year and ZapwayEV has been a lifesaver. Found chargers even in Coorg during a road trip! The route planning feature made the whole journey stress-free.",
    vehicle: "Tata Nexon EV",
  },
  {
    name: "Rohit Mehta",
    location: "Mumbai",
    initials: "RM",
    color: "from-blue-500 to-cyan-500",
    rating: 5,
    text: "Listed my home charger and made ₹4,200 last month passively. Setup took under an hour and the dashboard is incredibly intuitive. Best side income I've ever had.",
    vehicle: "Home Charger Host",
  },
  {
    name: "Aisha Khan",
    location: "Delhi",
    initials: "AK",
    color: "from-green-500 to-teal-500",
    rating: 5,
    text: "Route planning feature is a game-changer. Drove Delhi to Jaipur without range anxiety for the first time ever. ZapwayEV knew exactly where to stop and for how long.",
    vehicle: "MG ZS EV",
  },
];

export function Testimonials() {
  return (
    <section className="section-padding bg-white dark:bg-gray-950">
      <Container>
        <SectionHeading
          badge="Loved by 85,000+ Users"
          title="Real Stories from "
          highlight="Real Drivers"
          subtitle="See why EV drivers and charger hosts across India trust ZapwayEV."
        />

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 flex flex-col gap-4 hover:border-green-300 dark:hover:border-green-700 transition-colors group"
            >
              {/* Stars */}
              <div className="flex gap-1">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-yellow-400" fill="#facc15" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed flex-1">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-2 border-t border-gray-200 dark:border-gray-800">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white text-sm font-bold flex-shrink-0`}>
                  {t.initials}
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white text-sm">{t.name}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {t.location} · {t.vehicle}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
