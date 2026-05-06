"use client";
import Link from "next/link";
import { useState } from "react";

const Pricing = () => {
  const [plans, setPlans] = useState("maintenance");
  return (
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
          {/* Card 1 */}
          <div className="bg-[#f7fbf6] border-2 border-[#32cd32] rounded-2xl p-8 shadow-xl scale-105 relative">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#32cd32] text-black text-xs font-semibold px-3 py-1 rounded-full">
              MOST POPULAR
            </span>
            <h3 className="font-serif text-2xl text-[#1a1a1a] mb-2">
              1/4 acre (~11,000 ft²)
            </h3>

            <div className="font-serif text-6xl font-bold text-[#1a1a1a] leading-none mb-1">
              {plans === "maintenance" && "$45"}
              {plans === "obstacles" && "$70"}
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

          {/* Card 2 */}
          <div className="bg-[#f7fbf6] border-2 border-[#32cd32] rounded-2xl p-8 shadow-xl scale-105 relative">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#32cd32] text-black text-xs font-semibold px-3 py-1 rounded-full">
              MOST POPULAR
            </span>
            <h3 className="font-serif text-2xl text-[#1a1a1a] mb-2">
              1/2 acre (21780 ft²)
            </h3>

            <div className="font-serif text-6xl font-bold text-[#1a1a1a] leading-none mb-1">
              {plans === "maintenance" && "$80"}
              {plans === "obstacles" && "$125"}
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
              <li className="flex items-center gap-3 text-[#1a1a1a]">
                <span className="w-5 h-5 rounded-full bg-[#32cd32] flex items-center justify-center text-black text-lg">
                  ✓
                </span>
                {plans === "maintenance" && "12% discount"}
                {plans === "obstacles" && "11% discount"}
              </li>
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
            <h3 className="font-serif text-2xl text-[#1a1a1a] mb-2">1 acre</h3>

            <div className="font-serif text-6xl font-bold text-[#1a1a1a] leading-none mb-1">
              {plans === "maintenance" && "$160"}
              {plans === "obstacles" && "$250"}
            </div>

            <div className="text-[#5c6b5c] text-lg mb-6">per visit</div>

            <ul className="space-y-3 mb-8">
              {[
                "Lawn mowing",
                "Trimming around trees & fences",
                "Debris removal (on request)",
                "Priority scheduling",
                "8% discount",
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
              <li className="flex items-center gap-3 text-[#1a1a1a]">
                <span className="w-5 h-5 rounded-full bg-[#32cd32] flex items-center justify-center text-black text-lg">
                  ✓
                </span>
                {plans === "maintenance" && "12% discount"}
                {plans === "obstacles" && "11% discount"}
              </li>
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
              {plans === "maintenance" && "$320"}
              {plans === "obstacles" && "$500"}
            </div>

            <div className="text-[#5c6b5c] text-lg mb-6">per visit</div>

            <ul className="space-y-3 mb-8">
              {[
                "Lawn mowing",
                "Trimming around trees & fences",
                "Debris removal (on request)",
                "Priority scheduling",
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
              <li className="flex items-center gap-3 text-[#1a1a1a]">
                <span className="w-5 h-5 rounded-full bg-[#32cd32] flex items-center justify-center text-black text-lg">
                  ✓
                </span>
                {plans === "maintenance" && "12% discount"}
                {plans === "obstacles" && "11% discount"}
              </li>
            </ul>

            <Link
              href="/contact"
              className="block w-full py-3 rounded-full text-center font-semibold border-2 border-[#32cd32] text-[#32cd32] hover:bg-[#32cd32] hover:text-black transition"
            >
              Book appointment
            </Link>
          </div>

          {/* 2. Single Visit - Full Service (Featured) */}
          {/* <div className="bg-lime rounded-2xl p-8 lg:scale-105 relative">
            <span className="inline-block bg-forest/20 text-forest text-xs font-medium tracking-wider uppercase px-3 py-1 rounded-full mb-6">
              Most Popular
            </span>
            <h3 className="font-serif text-2xl text-forest mb-2">
              Full Service
            </h3>
            <div className="font-serif text-5xl text-forest leading-none mb-1">
              $75
            </div>
            <div className="text-forest/55 text-lg font-light mb-6">
              per visit · up to 2 acres
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3 text-forest/75 text-lg font-light">
                <span className="w-4 h-4 rounded-full bg-forest/15 flex items-center justify-center text-forest text-xs">
                  ✓
                </span>
                Mowing + edging
              </li>
              <li className="flex items-center gap-3 text-forest/75 text-lg font-light">
                <span className="w-4 h-4 rounded-full bg-forest/15 flex items-center justify-center text-forest text-xs">
                  ✓
                </span>
                Trimming around trees & fences
              </li>
              <li className="flex items-center gap-3 text-forest/75 text-lg font-light">
                <span className="w-4 h-4 rounded-full bg-forest/15 flex items-center justify-center text-forest text-xs">
                  ✓
                </span>
                Sidewalk blowing
              </li>
              <li className="flex items-center gap-3 text-forest/75 text-lg font-light">
                <span className="w-4 h-4 rounded-full bg-forest/15 flex items-center justify-center text-forest text-xs">
                  ✓
                </span>
                Debris removal
              </li>
              <li className="flex items-center gap-3 text-forest/75 text-lg font-light">
                <span className="w-4 h-4 rounded-full bg-forest/15 flex items-center justify-center text-forest text-xs">
                  ✓
                </span>
                Priority scheduling
              </li>
            </ul>
            <div className=" text-lime">
              <Link
                href={"/contact"}
                className="block w-full py-3 rounded-full bg-forest text-center text-lg font-medium transition-all duration-200 hover:bg-forest-mid"
              >
                Book Full Service
              </Link>
            </div>
          </div> */}

          {/* 3. Monthly Basic Residential */}
          {/* <div className="bg-forest border border-lime/20 rounded-2xl p-8">
            <span className="inline-block bg-lime/10 text-lime text-xs font-medium tracking-wider uppercase px-3 py-1 rounded-full mb-6">
              Monthly
            </span>
            <h3 className="font-serif text-2xl text-cream mb-2">
              Monthly Basic
            </h3>
            <div className="font-serif text-5xl text-lime leading-none mb-1">
              $165
            </div>
            <div className="text-cream/45 text-lg font-light mb-6">
              per month · 4 visits
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3 text-cream/70 text-lg font-light">
                <span className="w-4 h-4 rounded-full bg-lime/15 flex items-center justify-center text-lime text-xs">
                  ✓
                </span>
                Mowing + blowing each visit
              </li>
              <li className="flex items-center gap-3 text-cream/70 text-lg font-light">
                <span className="w-4 h-4 rounded-full bg-lime/15 flex items-center justify-center text-lime text-xs">
                  ✓
                </span>
                4 visits per month
              </li>
              <li className="flex items-center gap-3 text-cream/70 text-lg font-light">
                <span className="w-4 h-4 rounded-full bg-lime/15 flex items-center justify-center text-lime text-xs">
                  ✓
                </span>
                Approx. 15% savings
              </li>
            </ul>
            <button className="w-full py-3 rounded-full border border-lime/35 text-lime text-lg font-medium transition-all duration-200 hover:bg-lime/10">
              Subscribe to Basic Monthly
            </button>
          </div> */}

          {/* 4. Monthly Full Service Residential */}
          {/* <div className="bg-forest border border-lime/20 rounded-2xl p-8">
            <span className="inline-block bg-lime/10 text-lime text-xs font-medium tracking-wider uppercase px-3 py-1 rounded-full mb-6">
              Monthly
            </span>
            <h3 className="font-serif text-2xl text-cream mb-2">
              Full Monthly
            </h3>
            <div className="font-serif text-5xl text-lime leading-none mb-1">
              $255
            </div>
            <div className="text-cream/45 text-lg font-light mb-6">
              per month · 4 visits
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3 text-cream/70 text-lg font-light">
                <span className="w-4 h-4 rounded-full bg-lime/15 flex items-center justify-center text-lime text-xs">
                  ✓
                </span>
                Everything in Full Service
              </li>
              <li className="flex items-center gap-3 text-cream/70 text-lg font-light">
                <span className="w-4 h-4 rounded-full bg-lime/15 flex items-center justify-center text-lime text-xs">
                  ✓
                </span>
                4 visits per month
              </li>
              <li className="flex items-center gap-3 text-cream/70 text-lg font-light">
                <span className="w-4 h-4 rounded-full bg-lime/15 flex items-center justify-center text-lime text-xs">
                  ✓
                </span>
                High priority scheduling
              </li>
              <li className="flex items-center gap-3 text-cream/70 text-lg font-light">
                <span className="w-4 h-4 rounded-full bg-lime/15 flex items-center justify-center text-lime text-xs">
                  ✓
                </span>
                Approx. 18% savings
              </li>
            </ul>
            <button className="w-full py-3 rounded-full border border-lime/35 text-lime text-lg font-medium transition-all duration-200 hover:bg-lime/10">
              Subscribe to Full Monthly
            </button>
          </div> */}

          {/* 5. Monthly Commercial */}
          {/* <div className="bg-forest border border-lime/20 rounded-2xl p-8 col-span-1 md:col-span-2 lg:col-span-1">
            <span className="inline-block bg-amber-500/10 text-amber-400 text-xs font-medium tracking-wider uppercase px-3 py-1 rounded-full mb-6">
              For Businesses
            </span>
            <h3 className="font-serif text-2xl text-cream mb-2">
              Commercial Plan
            </h3>
            <div className="font-serif text-5xl text-lime leading-none mb-1">
              $295
            </div>
            <div className="text-cream/45 text-lg font-light mb-6">
              per month · 4 visits
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3 text-cream/70 text-lg font-light">
                <span className="w-4 h-4 rounded-full bg-lime/15 flex items-center justify-center text-lime text-xs">
                  ✓
                </span>
                Professional Full Service
              </li>
              <li className="flex items-center gap-3 text-cream/70 text-lg font-light">
                <span className="w-4 h-4 rounded-full bg-lime/15 flex items-center justify-center text-lime text-xs">
                  ✓
                </span>
                4 visits per month
              </li>
              <li className="flex items-center gap-3 text-cream/70 text-lg font-light">
                <span className="w-4 h-4 rounded-full bg-lime/15 flex items-center justify-center text-lime text-xs">
                  ✓
                </span>
                Priority attention
              </li>
              <li className="flex items-center gap-3 text-cream/70 text-lg font-light">
                <span className="w-4 h-4 rounded-full bg-lime/15 flex items-center justify-center text-lime text-xs">
                  ✓
                </span>
                Perfect for offices, stores & commercial properties
              </li>
            </ul>
            <button className="w-full py-3 rounded-full border border-lime/35 text-lime text-lg font-medium transition-all duration-200 hover:bg-lime/10">
              Subscribe to Commercial Plan
            </button>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
