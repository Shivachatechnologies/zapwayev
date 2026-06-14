import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Stats } from "@/components/sections/Stats";
import { DriversVsHosts } from "@/components/sections/DriversVsHosts";
import { Benefits } from "@/components/sections/Benefits";
import { PricingPreview } from "@/components/sections/PricingPreview";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { Newsletter } from "@/components/sections/Newsletter";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <HowItWorks />
      <Stats />
      <DriversVsHosts />
      <Benefits />
      <PricingPreview />
      <Testimonials />
      <FAQ />
      <Newsletter />
    </>
  );
}
