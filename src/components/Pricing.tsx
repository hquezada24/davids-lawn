const Pricing = () => {
  return (
    <section id="pricing" className="bg-[#243824] py-24">
      <div className="max-w-6xl mx-auto px-8">
        <div className="text-[#a8d44b] text-xs font-medium tracking-widest uppercase mb-3">
          Simple pricing
        </div>
        <h2 className="font-serif text-5xl text-[#f5f0e8] tracking-tight leading-tight mb-12">
          No surprises.
          <br />
          Just <em className="text-[#a8d44b] not-italic">good rates.</em>
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          {/* Basic */}
          <div className="bg-[#1a2e1a] border border-[#a8d44b]/20 rounded-2xl p-8">
            <span className="inline-block bg-[#a8d44b]/10 text-[#a8d44b] text-xs font-medium tracking-wider uppercase px-3 py-1 rounded-full mb-6">
              Basic
            </span>
            <h3 className="font-serif text-2xl text-[#f5f0e8] mb-2">
              Standard Cut
            </h3>
            <div className="font-serif text-5xl text-[#a8d44b] leading-none mb-1">
              $35
            </div>
            <div className="text-[#f5f0e8]/45 text-sm font-light mb-6">
              per visit · up to ¼ acre
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3 text-[#f5f0e8]/70 text-sm font-light">
                <span className="w-4 h-4 rounded-full bg-[#a8d44b]/15 flex items-center justify-center text-[#a8d44b] text-xs">
                  ✓
                </span>
                Mow & bag clippings
              </li>
              <li className="flex items-center gap-3 text-[#f5f0e8]/70 text-sm font-light">
                <span className="w-4 h-4 rounded-full bg-[#a8d44b]/15 flex items-center justify-center text-[#a8d44b] text-xs">
                  ✓
                </span>
                Front & backyard
              </li>
              <li className="flex items-center gap-3 text-[#f5f0e8]/70 text-sm font-light">
                <span className="w-4 h-4 rounded-full bg-[#a8d44b]/15 flex items-center justify-center text-[#a8d44b] text-xs">
                  ✓
                </span>
                Clean up included
              </li>
            </ul>
            <button className="w-full py-3 rounded-full border border-[#a8d44b]/35 text-[#a8d44b] text-sm font-medium transition-all duration-200 hover:bg-[#a8d44b]/10">
              Book this plan
            </button>
          </div>

          {/* Featured */}
          <div className="bg-[#a8d44b] rounded-2xl p-8">
            <span className="inline-block bg-[#1a2e1a]/20 text-[#1a2e1a] text-xs font-medium tracking-wider uppercase px-3 py-1 rounded-full mb-6">
              Most Popular
            </span>
            <h3 className="font-serif text-2xl text-[#1a2e1a] mb-2">
              Full Service
            </h3>
            <div className="font-serif text-5xl text-[#1a2e1a] leading-none mb-1">
              $65
            </div>
            <div className="text-[#1a2e1a]/55 text-sm font-light mb-6">
              per visit · up to ½ acre
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3 text-[#1a2e1a]/75 text-sm font-light">
                <span className="w-4 h-4 rounded-full bg-[#1a2e1a]/15 flex items-center justify-center text-[#1a2e1a] text-xs">
                  ✓
                </span>
                Mow, edge & trim
              </li>
              <li className="flex items-center gap-3 text-[#1a2e1a]/75 text-sm font-light">
                <span className="w-4 h-4 rounded-full bg-[#1a2e1a]/15 flex items-center justify-center text-[#1a2e1a] text-xs">
                  ✓
                </span>
                Sidewalk blowing
              </li>
              <li className="flex items-center gap-3 text-[#1a2e1a]/75 text-sm font-light">
                <span className="w-4 h-4 rounded-full bg-[#1a2e1a]/15 flex items-center justify-center text-[#1a2e1a] text-xs">
                  ✓
                </span>
                Debris removal
              </li>
              <li className="flex items-center gap-3 text-[#1a2e1a]/75 text-sm font-light">
                <span className="w-4 h-4 rounded-full bg-[#1a2e1a]/15 flex items-center justify-center text-[#1a2e1a] text-xs">
                  ✓
                </span>
                Priority scheduling
              </li>
            </ul>
            <button className="w-full py-3 rounded-full bg-[#1a2e1a] text-[#a8d44b] text-sm font-medium transition-all duration-200 hover:bg-[#243824]">
              Book this plan
            </button>
          </div>

          {/* Monthly */}
          <div className="bg-[#1a2e1a] border border-[#a8d44b]/20 rounded-2xl p-8">
            <span className="inline-block bg-[#a8d44b]/10 text-[#a8d44b] text-xs font-medium tracking-wider uppercase px-3 py-1 rounded-full mb-6">
              Seasonal
            </span>
            <h3 className="font-serif text-2xl text-[#f5f0e8] mb-2">
              Monthly Plan
            </h3>
            <div className="font-serif text-5xl text-[#a8d44b] leading-none mb-1">
              $110
            </div>
            <div className="text-[#f5f0e8]/45 text-sm font-light mb-6">
              per month · 2 visits
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3 text-[#f5f0e8]/70 text-sm font-light">
                <span className="w-4 h-4 rounded-full bg-[#a8d44b]/15 flex items-center justify-center text-[#a8d44b] text-xs">
                  ✓
                </span>
                Everything in Full Service
              </li>
              <li className="flex items-center gap-3 text-[#f5f0e8]/70 text-sm font-light">
                <span className="w-4 h-4 rounded-full bg-[#a8d44b]/15 flex items-center justify-center text-[#a8d44b] text-xs">
                  ✓
                </span>
                Bi-weekly scheduling
              </li>
              <li className="flex items-center gap-3 text-[#f5f0e8]/70 text-sm font-light">
                <span className="w-4 h-4 rounded-full bg-[#a8d44b]/15 flex items-center justify-center text-[#a8d44b] text-xs">
                  ✓
                </span>
                Seasonal check-in
              </li>
              <li className="flex items-center gap-3 text-[#f5f0e8]/70 text-sm font-light">
                <span className="w-4 h-4 rounded-full bg-[#a8d44b]/15 flex items-center justify-center text-[#a8d44b] text-xs">
                  ✓
                </span>
                15% member discount
              </li>
            </ul>
            <button className="w-full py-3 rounded-full border border-[#a8d44b]/35 text-[#a8d44b] text-sm font-medium transition-all duration-200 hover:bg-[#a8d44b]/10">
              Book this plan
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
