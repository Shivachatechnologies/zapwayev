"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Zap, Calendar, Clock, ArrowRight, Tag } from "lucide-react";

const featuredPost = {
  title: "Inside ZapwayEV: Building India's Next EV Charging Network from Scratch",
  excerpt:
    "From a single charging station in Cyber City, Gurgaon to a growing network — the story of infrastructure, partnerships, and relentless execution.",
  date: "May 28, 2024",
  readTime: "8 min read",
  category: "Company",
  author: { name: "Akarsh Singh", role: "CEO, ZapwayEV", initials: "AS", color: "from-green-500 to-teal-500" },
};

const posts = [
  {
    title: "India's EV Sales Cross 1 Million in 2024 — What It Means for Charging",
    excerpt: "Record EV adoption is creating unprecedented demand for charging infrastructure. Here's how ZapwayEV is keeping pace.",
    date: "May 22, 2024",
    readTime: "5 min read",
    category: "Industry",
  },
  {
    title: "Understanding EV Charging Types: AC vs DC vs Ultra-Fast",
    excerpt: "Not all chargers are the same. A simple guide to picking the right charger for your EV and your schedule.",
    date: "May 15, 2024",
    readTime: "6 min read",
    category: "Guide",
  },
  {
    title: "How to Earn ₹5,000/Month by Listing Your Home Charger",
    excerpt: "ZapwayEV host Rahul from Pune earned ₹5,200 in April — with zero effort after setup. Here's exactly how.",
    date: "May 8, 2024",
    readTime: "4 min read",
    category: "Hosting",
  },
  {
    title: "Delhi to Mumbai by EV: A Full Road-Trip Guide with Charging Stops",
    excerpt: "We drove the 1,400 km Delhi–Mumbai highway in a Tata Nexon EV. This is the complete route, charging stops, and tips.",
    date: "April 30, 2024",
    readTime: "10 min read",
    category: "Travel",
  },
  {
    title: "ZapwayEV Crosses 2 Million kWh Delivered — A Milestone in Green Energy",
    excerpt: "Every kWh delivered through ZapwayEV is a step toward cleaner air. Here's how we're tracking our environmental impact from day one.",
    date: "April 20, 2024",
    readTime: "3 min read",
    category: "Company",
  },
  {
    title: "Fleet Charging 101: How Businesses Are Saving 40% on Fuel Costs",
    excerpt: "Switching a delivery fleet to EVs + ZapwayEV Business can cut fuel costs dramatically. Here are the numbers.",
    date: "April 12, 2024",
    readTime: "7 min read",
    category: "Business",
  },
];

const categoryColors: Record<string, string> = {
  Company: "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400",
  Industry: "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400",
  Guide: "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400",
  Hosting: "bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400",
  Travel: "bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-400",
  Business: "bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-400",
};

export default function BlogPage() {
  return (
    <div className="pt-16 bg-white dark:bg-gray-950 min-h-screen">
      {/* Hero */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh pointer-events-none" />
        <Container className="relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-sm font-medium mb-6">
              <Zap className="w-4 h-4" fill="currentColor" />
              ZapwayEV Blog
            </span>
            <h1 className="text-4xl sm:text-5xl font-black text-gray-900 dark:text-white mb-4">
              Stories from the <span className="gradient-text">Electric Road</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
              Guides, company news, EV travel diaries, and insights from India&apos;s fastest-growing charging network.
            </p>
          </motion.div>
        </Container>
      </section>

      <Container className="pb-20">
        {/* Featured */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16 p-8 rounded-3xl bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 border border-green-200 dark:border-green-800"
        >
          <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 ${categoryColors[featuredPost.category]}`}>
            {featuredPost.category}
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white mb-4 max-w-3xl">
            {featuredPost.title}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl">{featuredPost.excerpt}</p>
          <div className="flex flex-wrap items-center gap-4 justify-between">
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${featuredPost.author.color} flex items-center justify-center text-white text-sm font-bold`}>
                {featuredPost.author.initials}
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900 dark:text-white">{featuredPost.author.name}</p>
                <p className="text-xs text-gray-500">{featuredPost.author.role}</p>
              </div>
              <span className="flex items-center gap-1 text-xs text-gray-500 ml-4">
                <Calendar className="w-3 h-3" /> {featuredPost.date}
              </span>
              <span className="flex items-center gap-1 text-xs text-gray-500">
                <Clock className="w-3 h-3" /> {featuredPost.readTime}
              </span>
            </div>
            <Button variant="primary" size="sm" href="#">
              Read Article <ArrowRight className="ml-1 w-4 h-4" />
            </Button>
          </div>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="p-6 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-green-500 dark:hover:border-green-500 transition-colors flex flex-col"
            >
              <span className={`inline-block px-2 py-0.5 rounded-md text-xs font-medium mb-3 self-start ${categoryColors[post.category] ?? ""}`}>
                <Tag className="w-3 h-3 inline mr-1" />{post.category}
              </span>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2 leading-snug">{post.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 flex-1 mb-4">{post.excerpt}</p>
              <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-500">
                <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{post.date}</span>
                <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime}</span>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" href="#">Load More Articles</Button>
        </div>
      </Container>
    </div>
  );
}
