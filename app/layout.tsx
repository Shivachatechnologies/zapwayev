import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ZapwayEV — Charge Smarter. Drive Further.",
  description:
    "ZapwayEV connects EV drivers to smart charging stations across India. Find, plug, and pay — all from one app.",
  keywords: [
    "EV charging",
    "electric vehicle charging",
    "charging stations India",
    "ZapwayEV",
    "EV app",
    "fast charging",
    "home charger host",
  ],
  openGraph: {
    title: "ZapwayEV — Charge Smarter. Drive Further.",
    description:
      "India's newest smart EV charging network. Find, plug, and pay — all from one app.",
    type: "website",
    siteName: "ZapwayEV",
  },
  twitter: {
    card: "summary_large_image",
    title: "ZapwayEV — Charge Smarter. Drive Further.",
    description: "India's fastest-growing EV charging network.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
