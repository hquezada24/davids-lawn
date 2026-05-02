"use client";
import { useScrollAnimationAll } from "@/hooks/useScrollAnimation";
import { ImagePlaceholder } from "./ImagePlaceholder";
import Link from "next/link";

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

const plans = [
  {
    badge: "Single Visit",
    title: "Up to 1 acre",
    price: "$45",
    meta: "per visit · up to 1 acre",
    cta: "Book Single Visit",
    featured: false,
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
    title: "Up to 2 acres",
    price: "$75",
    meta: "per visit · up to 2 acres",
    cta: "Book Full Service",
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
    title: "Up to 3 acres",
    price: "$115",
    meta: "per visit · up to 3 acres",
    cta: "Book Full Service",
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
  const pageRef = useScrollAnimationAll(".animate", { threshold: 0.12 });

  return (
    <div
      ref={pageRef}
      className="bg-forest text-cream font-sans overflow-x-hidden"
    >
      {/* ── HERO ───────────────────────────────────────────── */}
      <section className="relative max-w-6xl mx-auto px-8 pt-20 pb-16 overflow-hidden">
        <div className="pointer-events-none absolute top-0 right-0 w-96 h-96 rounded-full bg-lime/5 translate-x-32 -translate-y-20" />
        <div className="animate pill-in inline-flex items-center gap-2 bg-lime/10 border border-lime/20 text-lime text-xs font-medium tracking-widest uppercase px-4 py-2 rounded-full mb-8">
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
      <section className="max-w-6xl mx-auto px-8 pb-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <div
              key={plan.title}
              className={`animate fade-up delay-${(i % 5) + 1} rounded-2xl p-6 ${
                plan.featured
                  ? "bg-lime text-forest lg:scale-105"
                  : "bg-forest border border-lime/20"
              }`}
            >
              {/* Image */}
              <div className="mb-6">
                <ImagePlaceholder label={plan.placeholder} height="h-[160px]" />
              </div>

              {/* Badge */}
              {/* <span
                className={`inline-block text-xs font-medium tracking-wider uppercase px-3 py-1 rounded-full mb-4 ${
                  plan.featured
                    ? "bg-forest/20 text-forest"
                    : "bg-lime/10 text-lime"
                }`}
              >
                {plan.badge}
              </span> */}

              {/* Title */}
              <h3
                className={`font-serif text-2xl mb-2 ${
                  plan.featured ? "text-forest" : "text-cream"
                }`}
              >
                {plan.title}
              </h3>

              {/* Price */}
              <div
                className={`font-serif text-5xl leading-none mb-1 ${
                  plan.featured ? "text-forest" : "text-lime"
                }`}
              >
                {plan.price}
              </div>

              <div
                className={`text-sm font-light mb-6 ${
                  plan.featured ? "text-forest/60" : "text-cream/45"
                }`}
              >
                {plan.meta}
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className={`flex items-center gap-3 text-sm font-light ${
                      plan.featured ? "text-forest/80" : "text-cream/70"
                    }`}
                  >
                    <span
                      className={`w-4 h-4 rounded-full flex items-center justify-center text-xs ${
                        plan.featured
                          ? "bg-forest/15 text-forest"
                          : "bg-lime/15 text-lime"
                      }`}
                    >
                      ✓
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                className={`w-full py-3 rounded-full text-sm font-medium transition-all duration-200 ${
                  plan.featured
                    ? "bg-forest text-lime hover:bg-forest-mid"
                    : "border border-lime/35 text-lime hover:bg-lime/10"
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────── */}
      <section className="bg-lime py-20 text-center">
        <h2 className="animate fade-up font-serif text-5xl text-forest mb-4">
          Ready to book an appointment?
        </h2>
        {/* <p className="animate fade-up delay-1 text-forest/60 mb-8">
          We’ll guide you to the right plan — no pressure.
        </p> */}
        <div className="text-lime mt-10">
          <Link
            href={"/contact"}
            className="animate fade-up delay-2 bg-forest text-lime px-8 py-3 rounded-full hover:bg-forest-mid transition"
          >
            Get a recommendation →
          </Link>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;
