"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Container } from "@/components/ui/Container";

const stats = [
  { value: 1.5, suffix: "M+", label: "EVs Sold in India (FY24)", prefix: "" },
  { value: 49, suffix: "%", label: "YoY EV Sales Growth", prefix: "" },
  { value: 12000, suffix: "+", label: "Public Charging Stations in India", prefix: "" },
  { value: 30, suffix: "%", label: "Target EV Penetration by 2030", prefix: "" },
];

function Counter({
  value,
  suffix,
  prefix,
  started,
}: {
  value: number;
  suffix: string;
  prefix: string;
  started: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started) return;
    const duration = 2000;
    const steps = 60;
    const stepValue = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += stepValue;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [started, value]);

  const formatted =
    value >= 10000
      ? Math.round(count).toLocaleString("en-IN")
      : !Number.isInteger(value)
      ? count.toFixed(1)
      : Math.round(count).toLocaleString("en-IN");

  return (
    <span>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}

export function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 bg-gray-950 dark:bg-gray-950 relative overflow-hidden">
      {/* Gradient accents */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-900/20 via-transparent to-blue-900/20 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-green-500 to-transparent opacity-60" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-60" />

      <Container>
        <motion.p
          className="text-center text-sm font-semibold tracking-widest uppercase text-gray-500 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          India's EV Revolution
        </motion.p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black gradient-text mb-2">
                <Counter
                  value={stat.value}
                  suffix={stat.suffix}
                  prefix={stat.prefix}
                  started={inView}
                />
              </div>
              <p className="text-gray-400 text-sm font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
