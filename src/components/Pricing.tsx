const Pricing = () => {
  return (
    <section id="pricing" className="bg-forest-mid py-24">
      <div className="max-w-6xl mx-auto px-8">
        <div className="text-lime text-xs font-medium tracking-widest uppercase mb-3">
          Simple pricing
        </div>
        <h2 className="font-serif text-5xl text-cream tracking-tight leading-tight mb-12">
          No surprises.
          <br />
          Just <em className="text-lime not-italic">good rates.</em>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* 1. Single Visit - Basic */}
          <div className="bg-forest border border-lime/20 rounded-2xl p-8">
            <span className="inline-block bg-lime/10 text-lime text-xs font-medium tracking-wider uppercase px-3 py-1 rounded-full mb-6">
              Single Visit
            </span>
            <h3 className="font-serif text-2xl text-cream mb-2">
              Standard Cut
            </h3>
            <div className="font-serif text-5xl text-lime leading-none mb-1">
              $48
            </div>
            <div className="text-cream/45 text-sm font-light mb-6">
              per visit · up to 1 acre
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3 text-cream/70 text-sm font-light">
                <span className="w-4 h-4 rounded-full bg-lime/15 flex items-center justify-center text-lime text-xs">
                  ✓
                </span>
                Lawn mowing
              </li>
              <li className="flex items-center gap-3 text-cream/70 text-sm font-light">
                <span className="w-4 h-4 rounded-full bg-lime/15 flex items-center justify-center text-lime text-xs">
                  ✓
                </span>
                Sidewalk blowing
              </li>
              <li className="flex items-center gap-3 text-cream/70 text-sm font-light">
                <span className="w-4 h-4 rounded-full bg-lime/15 flex items-center justify-center text-lime text-xs">
                  ✓
                </span>
                Front & backyard
              </li>
            </ul>
            <button className="w-full py-3 rounded-full border border-lime/35 text-lime text-sm font-medium transition-all duration-200 hover:bg-lime/10">
              Book Single Visit
            </button>
          </div>

          {/* 2. Single Visit - Full Service (Featured) */}
          <div className="bg-lime rounded-2xl p-8 lg:scale-105 relative">
            <span className="inline-block bg-forest/20 text-forest text-xs font-medium tracking-wider uppercase px-3 py-1 rounded-full mb-6">
              Most Popular
            </span>
            <h3 className="font-serif text-2xl text-forest mb-2">
              Full Service
            </h3>
            <div className="font-serif text-5xl text-forest leading-none mb-1">
              $78
            </div>
            <div className="text-forest/55 text-sm font-light mb-6">
              per visit · up to 2 acres
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3 text-forest/75 text-sm font-light">
                <span className="w-4 h-4 rounded-full bg-forest/15 flex items-center justify-center text-forest text-xs">
                  ✓
                </span>
                Mowing + edging
              </li>
              <li className="flex items-center gap-3 text-forest/75 text-sm font-light">
                <span className="w-4 h-4 rounded-full bg-forest/15 flex items-center justify-center text-forest text-xs">
                  ✓
                </span>
                Trimming around trees & fences
              </li>
              <li className="flex items-center gap-3 text-forest/75 text-sm font-light">
                <span className="w-4 h-4 rounded-full bg-forest/15 flex items-center justify-center text-forest text-xs">
                  ✓
                </span>
                Sidewalk blowing
              </li>
              <li className="flex items-center gap-3 text-forest/75 text-sm font-light">
                <span className="w-4 h-4 rounded-full bg-forest/15 flex items-center justify-center text-forest text-xs">
                  ✓
                </span>
                Debris removal
              </li>
              <li className="flex items-center gap-3 text-forest/75 text-sm font-light">
                <span className="w-4 h-4 rounded-full bg-forest/15 flex items-center justify-center text-forest text-xs">
                  ✓
                </span>
                Priority scheduling
              </li>
            </ul>
            <button className="w-full py-3 rounded-full bg-forest text-lime text-sm font-medium transition-all duration-200 hover:bg-forest-mid">
              Book Full Service
            </button>
          </div>

          {/* 3. Monthly Basic Residential */}
          <div className="bg-forest border border-lime/20 rounded-2xl p-8">
            <span className="inline-block bg-lime/10 text-lime text-xs font-medium tracking-wider uppercase px-3 py-1 rounded-full mb-6">
              Monthly
            </span>
            <h3 className="font-serif text-2xl text-cream mb-2">
              Monthly Basic
            </h3>
            <div className="font-serif text-5xl text-lime leading-none mb-1">
              $165
            </div>
            <div className="text-cream/45 text-sm font-light mb-6">
              per month · 4 visits
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3 text-cream/70 text-sm font-light">
                <span className="w-4 h-4 rounded-full bg-lime/15 flex items-center justify-center text-lime text-xs">
                  ✓
                </span>
                Mowing + blowing each visit
              </li>
              <li className="flex items-center gap-3 text-cream/70 text-sm font-light">
                <span className="w-4 h-4 rounded-full bg-lime/15 flex items-center justify-center text-lime text-xs">
                  ✓
                </span>
                4 visits per month
              </li>
              <li className="flex items-center gap-3 text-cream/70 text-sm font-light">
                <span className="w-4 h-4 rounded-full bg-lime/15 flex items-center justify-center text-lime text-xs">
                  ✓
                </span>
                Approx. 15% savings
              </li>
            </ul>
            <button className="w-full py-3 rounded-full border border-lime/35 text-lime text-sm font-medium transition-all duration-200 hover:bg-lime/10">
              Subscribe to Basic Monthly
            </button>
          </div>

          {/* 4. Monthly Full Service Residential */}
          <div className="bg-forest border border-lime/20 rounded-2xl p-8">
            <span className="inline-block bg-lime/10 text-lime text-xs font-medium tracking-wider uppercase px-3 py-1 rounded-full mb-6">
              Monthly
            </span>
            <h3 className="font-serif text-2xl text-cream mb-2">
              Full Monthly
            </h3>
            <div className="font-serif text-5xl text-lime leading-none mb-1">
              $255
            </div>
            <div className="text-cream/45 text-sm font-light mb-6">
              per month · 4 visits
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3 text-cream/70 text-sm font-light">
                <span className="w-4 h-4 rounded-full bg-lime/15 flex items-center justify-center text-lime text-xs">
                  ✓
                </span>
                Everything in Full Service
              </li>
              <li className="flex items-center gap-3 text-cream/70 text-sm font-light">
                <span className="w-4 h-4 rounded-full bg-lime/15 flex items-center justify-center text-lime text-xs">
                  ✓
                </span>
                4 visits per month
              </li>
              <li className="flex items-center gap-3 text-cream/70 text-sm font-light">
                <span className="w-4 h-4 rounded-full bg-lime/15 flex items-center justify-center text-lime text-xs">
                  ✓
                </span>
                High priority scheduling
              </li>
              <li className="flex items-center gap-3 text-cream/70 text-sm font-light">
                <span className="w-4 h-4 rounded-full bg-lime/15 flex items-center justify-center text-lime text-xs">
                  ✓
                </span>
                Approx. 18% savings
              </li>
            </ul>
            <button className="w-full py-3 rounded-full border border-lime/35 text-lime text-sm font-medium transition-all duration-200 hover:bg-lime/10">
              Subscribe to Full Monthly
            </button>
          </div>

          {/* 5. Monthly Commercial */}
          <div className="bg-forest border border-lime/20 rounded-2xl p-8 col-span-1 md:col-span-2 lg:col-span-1">
            <span className="inline-block bg-amber-500/10 text-amber-400 text-xs font-medium tracking-wider uppercase px-3 py-1 rounded-full mb-6">
              For Businesses
            </span>
            <h3 className="font-serif text-2xl text-cream mb-2">
              Commercial Plan
            </h3>
            <div className="font-serif text-5xl text-lime leading-none mb-1">
              $295
            </div>
            <div className="text-cream/45 text-sm font-light mb-6">
              per month · 4 visits
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3 text-cream/70 text-sm font-light">
                <span className="w-4 h-4 rounded-full bg-lime/15 flex items-center justify-center text-lime text-xs">
                  ✓
                </span>
                Professional Full Service
              </li>
              <li className="flex items-center gap-3 text-cream/70 text-sm font-light">
                <span className="w-4 h-4 rounded-full bg-lime/15 flex items-center justify-center text-lime text-xs">
                  ✓
                </span>
                4 visits per month
              </li>
              <li className="flex items-center gap-3 text-cream/70 text-sm font-light">
                <span className="w-4 h-4 rounded-full bg-lime/15 flex items-center justify-center text-lime text-xs">
                  ✓
                </span>
                Priority attention
              </li>
              <li className="flex items-center gap-3 text-cream/70 text-sm font-light">
                <span className="w-4 h-4 rounded-full bg-lime/15 flex items-center justify-center text-lime text-xs">
                  ✓
                </span>
                Perfect for offices, stores & commercial properties
              </li>
            </ul>
            <button className="w-full py-3 rounded-full border border-lime/35 text-lime text-sm font-medium transition-all duration-200 hover:bg-lime/10">
              Subscribe to Commercial Plan
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
