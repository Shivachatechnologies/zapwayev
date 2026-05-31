"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  centered?: boolean;
}

export function SectionHeading({
  badge,
  title,
  highlight,
  subtitle,
  centered = true,
}: SectionHeadingProps) {
  const titleParts = highlight ? title.split(highlight) : [title];

  return (
    <motion.div
      className={`mb-16 ${centered ? "text-center" : ""}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {badge && (
        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 mb-4">
          {badge}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
        {highlight ? (
          <>
            {titleParts[0]}
            <span className="gradient-text">{highlight}</span>
            {titleParts[1]}
          </>
        ) : (
          title
        )}
      </h2>
      {subtitle && (
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
