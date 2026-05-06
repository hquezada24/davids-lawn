"use client";
import { useScrollAnimationAll } from "@/hooks/useScrollAnimation";
import { ImagePlaceholder } from "./ImagePlaceholder";
import { useState } from "react";
import Link from "next/link";

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

const plans = [
  {
    badge: "Single Visit",
    title: "Up to 1/2 acre (21780 ft²)",
    price: "$55",
    meta: "per visit",
    cta: "Book Appointment",
    featured: true,
    placeholder: "Photo: standard lawn mowing",
    features: [
      "Mowing",
      "Trimming around trees & fences",
      // "Sidewalk blowing",
      "Debris removal (on request)",
      //"Priority scheduling",
    ],
  },
  {
    badge: "Most Popular",
    title: "Up to 1 acres",
    price: "$90",
    meta: "per visit",
    cta: "Book Appointment",
    featured: false,
    placeholder: "Photo: full service yard work",
    features: [
      "Mowing",
      "Trimming around trees & fences",
      // "Sidewalk blowing",
      "Debris removal (on request)",
      "Priority scheduling",
      "15% discount",
    ],
  },
  {
    badge: "Most Popular",
    title: "Up to 2 acres",
    price: "$140",
    meta: "per visit",
    cta: "Book Appointment",
    featured: false,
    placeholder: "Photo: full service yard work",
    features: [
      "Mowing",
      "Trimming around trees & fences",
      // "Sidewalk blowing",
      "Debris removal (on request)",
      "Priority scheduling",
      "15% discount",
    ],
  },
  // {
  //   badge: "Monthly",
  //   title: "Monthly Basic",
  //   price: "$165",
  //   meta: "per month · 4 visits",
  //   cta: "Subscribe to Basic Monthly",
  //   featured: false,
  //   placeholder: "Photo: residential lawn maintenance",
  //   features: [
  //     "Mowing + blowing each visit",
  //     "4 visits per month",
  //     "Approx. 15% savings",
  //   ],
  // },
  // {
  //   badge: "Monthly",
  //   title: "Full Monthly",
  //   price: "$255",
  //   meta: "per month · 4 visits",
  //   cta: "Subscribe to Full Monthly",
  //   featured: false,
  //   placeholder: "Photo: premium lawn care",
  //   features: [
  //     "Everything in Full Service",
  //     "4 visits per month",
  //     "High priority scheduling",
  //     "Approx. 18% savings",
  //   ],
  // },
  // {
  //   badge: "For Businesses",
  //   title: "Commercial Plan",
  //   price: "$295",
  //   meta: "per month · 4 visits",
  //   cta: "Subscribe to Commercial Plan",
  //   featured: false,
  //   placeholder: "Photo: commercial landscaping",
  //   features: [
  //     "Professional Full Service",
  //     "4 visits per month",
  //     "Priority attention",
  //     "Perfect for offices & stores",
  //   ],
  // },
];

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

const PricingPage = () => {
  const [plans, setPlans] = useState("maintenance");
  const pageRef = useScrollAnimationAll(".animate", { threshold: 0.12 });

  return (
    <div
      ref={pageRef}
      className="bg-forest text-cream font-sans overflow-x-hidden"
    >
      {/* ── HERO ───────────────────────────────────────────── */}
      <section className="relative max-w-6xl mx-auto px-8 pt-20 pb-16 overflow-hidden">
        <div className="pointer-events-none absolute top-0 right-0 w-96 h-96 rounded-full bg-lime/5 translate-x-32 -translate-y-20" />
        <div className="animate pill-in inline-flex items-center gap-2 bg-lime/10 border border-lime/20 text-cream text-xs font-medium tracking-widest uppercase px-4 py-2 rounded-full mb-8">
          Pricing
        </div>

        <div className="overflow-hidden">
          <span className="animate hero-line-inner delay-1 block font-serif text-6xl md:text-7xl tracking-tight leading-none">
            Simple.
          </span>
        </div>
        <div className="overflow-hidden mt-1">
          <span className="animate hero-line-inner delay-2 block font-serif text-6xl md:text-7xl text-lime tracking-tight leading-none">
            Transparent.
          </span>
        </div>

        <p className="animate fade-up delay-3 mt-8 text-cream/60 font-light text-lg max-w-xl">
          No hidden fees. No surprises. Just clear pricing for clean, reliable
          work.
        </p>
      </section>

      {/* ── PRICING GRID ───────────────────────────────────── */}
      {/* <section className="max-w-6xl mx-auto px-8 pb-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <div
              key={plan.title}
              className={`animate fade-up delay-${(i % 5) + 1} rounded-2xl p-6 flex flex-col justify-between text-cream ${
                plan.featured
                  ? "bg-[#f7fbf6] lg:scale-105"
                  : "bg-forest border border-lime/20"
              }`}
            >
              <div>
                
                <div className="mb-6">
                  <ImagePlaceholder
                    label={plan.placeholder}
                    height="h-[160px]"
                  />
                </div>

               
                <span
                className={`inline-block text-xs font-medium tracking-wider uppercase px-3 py-1 rounded-full mb-4 ${
                  plan.featured
                    ? "bg-forest/20 text-forest"
                    : "bg-lime/10 text-lime"
                }`}
              >
                {plan.badge}
              </span> 

              
                <h3 className={`font-serif text-2xl mb-2 text-[#1a1a1a]`}>
                  {plan.title}
                </h3>

               
                <div
                  className={`font-serif text-6xl font-bold text-[#1a1a1a] leading-none mb-1`}
                >
                  {plan.price}
                </div>

                <div className={`text-lg font-light mb-6 text-[#5c6b5c]`}>
                  {plan.meta}
                </div>

              
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className={`flex items-center gap-3 text-lg font-light text-[#5c6b5c]`}
                    >
                      <span
                        className={`w-5 h-5 rounded-full bg-[#32cd32] flex items-center justify-center text-black text-lg`}
                      >
                        ✓
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div>

              
                <Link
                  href="/contact"
                  className={`block w-full py-3 rounded-full text-center font-semibold ${plan.featured ? "bg-[#32cd32] hover:bg-[#28a428]" : "border-2 border-[#32cd32] hover:bg-lime"} text-black transition`}
                >
                  Book appointment
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section> */}
      <section id="pricing" className="bg-forest py-24">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-lime text-xs font-medium tracking-widest uppercase mb-3">
            Simple pricing
          </div>
          <h2 className="font-serif text-5xl text-cream tracking-tight leading-tight mb-12">
            No surprises.
            <br />
            Just <em className="text-lime not-italic">good rates.</em>
          </h2>
          <div className="mb-10">
            <div className="w-full flex flex-col items-center mx-auto">
              <label
                htmlFor="lawn-status"
                className="block text-lg font-medium text-[#1a1a1a] mb-2"
              >
                Lawn condition
              </label>

              <div className="relative">
                <select
                  name="lawn-status"
                  id="lawn-status"
                  value={plans}
                  onChange={(e) => setPlans(e.target.value)}
                  className="w-full appearance-none rounded-xl border border-[#d9e5d6] bg-[#f7fbf6] px-4 py-3 pr-10 text-[#1a1a1a] text-base font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-[#32cd32] focus:border-[#32cd32] transition"
                >
                  <option value="maintenance">Regular Maintenance</option>
                  <option value="obstacles">
                    Heavy Obstacles / Uneven Terrain / Overgrown
                  </option>
                </select>

                {/* Custom arrow */}
                <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-[#5c6b5c]">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* 1. Single Visit - Basic */}

            {/* Card 1 */}
            <div className="bg-[#f7fbf6] border-2 border-[#32cd32] rounded-2xl p-8 shadow-xl scale-105 relative">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#32cd32] text-black text-xs font-semibold px-3 py-1 rounded-full">
                MOST POPULAR
              </span>
              <h3 className="font-serif text-2xl text-[#1a1a1a] mb-2">
                Up to 1/2 acre (21780 ft²)
              </h3>

              <div className="font-serif text-6xl font-bold text-[#1a1a1a] leading-none mb-1">
                {plans === "maintenance" && "$65"}
                {plans === "obstacles" && "$100"}
              </div>

              <div className="text-[#5c6b5c] text-lg mb-6">per visit</div>

              <ul className="space-y-3 mb-8">
                {[
                  "Lawn mowing",
                  "Trimming around trees & fences",
                  "Debris removal (on request)",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-[#1a1a1a]"
                  >
                    <span className="w-5 h-5 rounded-full bg-[#32cd32] flex items-center justify-center text-black text-lg">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className="block w-full py-3 rounded-full text-center font-semibold bg-[#32cd32] text-black hover:bg-[#28a428] transition"
              >
                Book appointment
              </Link>
            </div>

            {/* Featured Card */}
            <div className="border-2 border-[#32cd32]  rounded-2xl p-8 bg-forest">
              <h3 className="font-serif text-2xl text-[#1a1a1a] mb-2">
                Up to 1 acre
              </h3>

              <div className="font-serif text-6xl font-bold text-[#1a1a1a] leading-none mb-1">
                {plans === "maintenance" && "$120"}
                {plans === "obstacles" && "$184"}
              </div>

              <div className="text-[#5c6b5c] text-lg mb-6">per visit</div>

              <ul className="space-y-3 mb-8">
                {[
                  "Lawn mowing",
                  "Trimming around trees & fences",
                  "Debris removal (on request)",
                  "Priority scheduling",
                  "15% discount",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-[#1a1a1a]"
                  >
                    <span className="w-5 h-5 rounded-full bg-[#32cd32] flex items-center justify-center text-black text-lg">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className="block w-full py-3 rounded-full text-center font-semibold border-2 border-[#32cd32] text-[#32cd32] hover:bg-[#32cd32] hover:text-black transition"
              >
                Book appointment
              </Link>
            </div>

            {/* Card 3 */}
            <div className="border-2 border-[#32cd32] rounded-2xl p-8 bg-forest">
              <h3 className="font-serif text-2xl text-[#1a1a1a] mb-2">
                Up to 2 acres
              </h3>

              <div className="font-serif text-6xl font-bold text-[#1a1a1a] leading-none mb-1">
                {plans === "maintenance" && "$200"}
                {plans === "obstacles" && "$300"}
              </div>

              <div className="text-[#5c6b5c] text-lg mb-6">per visit</div>

              <ul className="space-y-3 mb-8">
                {[
                  "Lawn mowing",
                  "Trimming around trees & fences",
                  "Debris removal (on request)",
                  "Priority scheduling",
                  "15% discount",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-[#1a1a1a]"
                  >
                    <span className="w-5 h-5 rounded-full bg-[#32cd32] flex items-center justify-center text-black text-lg">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className="block w-full py-3 rounded-full text-center font-semibold border-2 border-[#32cd32] text-[#32cd32] hover:bg-[#32cd32] hover:text-black transition"
              >
                Book appointment
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────── */}
      <section className="bg-forest py-20 text-center">
        <h2 className="animate fade-up font-serif text-5xl text-cream mb-4">
          Ready to book an appointment?
        </h2>
        {/* <p className="animate fade-up delay-1 text-forest/60 mb-8">
          We’ll guide you to the right plan — no pressure.
        </p> */}
        <div className="text-cream mt-10">
          <Link
            href={"/contact"}
            className="bg-lime font-medium text-lg px-7 py-3 rounded-full transition-all duration-200 hover:bg-[#28a428] whitespace-nowrap"
          >
            Get a recommendation →
          </Link>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;
