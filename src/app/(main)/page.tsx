export const dynamic = "force-dynamic";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import Hero from "@/components/Hero";
import CTA from "@/components/CTA";
import MarqueeStrip from "@/components/MarqueeStrip";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import Team from "@/components/Team";

export default function Home() {
  return (
    <div className="bg-[#1a2e1as] text-cream font-sans">
      {/* HERO */}
      <Hero />

      {/* MARQUEE STRIP */}
      <MarqueeStrip />

      {/* SERVICES */}
      <Services />

      {/* PRICING */}
      <Pricing />

      {/* TEAM */}
      <Team />

      {/* CTA */}
      <CTA />
    </div>
  );
}
