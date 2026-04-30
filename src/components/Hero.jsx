const Hero = () => {
  return (
    <section className="max-w-6xl mx-auto px-8 py-24 grid md:grid-cols-2 gap-12 items-center">
      <div>
        <div className="flex items-center gap-2 text-[#a8d44b] text-xs font-medium tracking-widest uppercase mb-5">
          <span className="block w-6 h-px bg-[#a8d44b] "></span> Your
          neighborhood crew
        </div>
        <h1 className="font-serif text-6xl leading-tight tracking-tight text-[#f5f0e8] mb-6">
          We cut grass.
          <br />
          You cut <em className="text-[#a8d44b] not-italic">stress.</em>
        </h1>
        <p className="text-[#f5f0e8]/65 font-light text-lg leading-relaxed mb-8 max-w-md">
          A local team of hardworking neighbors ready to keep your yard looking
          sharp — at prices that make sense.
        </p>
        <div className="flex gap-4 flex-wrap">
          <button className="bg-[#a8d44b] text-[#1a2e1a] font-medium px-8 py-3 rounded-full transition-all duration-200 hover:bg-[#bce563] hover:-translate-y-0.5">
            Book a Cut →
          </button>
          <button className="border border-[#f5f0e8]/30 text-[#f5f0e8] font-light px-8 py-3 rounded-full transition-all duration-200 hover:border-[#f5f0e8]/70">
            See pricing
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="bg-[#243824] border border-[#a8d44b]/20 rounded-2xl p-8 relative overflow-hidden">
          <div className="absolute bottom-0 right-0 w-32 h-32 rounded-full bg-[#a8d44b]/5 translate-x-6 translate-y-6"></div>
          <span className="text-5xl block mb-4">🌿</span>
          <h3 className="font-serif text-2xl text-[#f5f0e8] mb-2">
            Freshly cut, every time
          </h3>
          <p className="text-[#f5f0e8]/55 font-light text-sm leading-relaxed">
            Professional-grade results from a crew that takes pride in the work.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-[#243824] border border-[#a8d44b]/15 rounded-2xl p-5">
            <div className="font-serif text-3xl text-[#a8d44b] mb-1">48h</div>
            <div className="text-[#f5f0e8]/50 text-sm font-light">
              Booking turnaround
            </div>
          </div>
          <div className="bg-[#243824] border border-[#a8d44b]/15 rounded-2xl p-5">
            <div className="font-serif text-3xl text-[#a8d44b] mb-1">$0</div>
            <div className="text-[#f5f0e8]/50 text-sm font-light">
              Cancellation fee
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
