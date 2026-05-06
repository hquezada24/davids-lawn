export const dynamic = "force-dynamic";
import Hero from "@/components/main/Hero";
import CTA from "@/components/main/CTA";
import MarqueeStrip from "@/components/main/MarqueeStrip";
import Services from "@/components/main/Services";
import Pricing from "@/components/main/Pricing";
import Team from "@/components/main/Team";

export default function Home() {
  return (
    <div className="bg-forest text-cream font-sans">
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
