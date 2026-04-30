const CTA = () => {
  return (
    <section id="contact" className="bg-[#a8d44b]  py-24 text-center">
      <h2 className="font-serif text-6xl text-[#1a2e1a] tracking-tight leading-tight mb-4">
        Ready for a<br />
        <em className="not-italic">fresh cut?</em>
      </h2>
      <p className="text-[#1a2e1a]/60 font-light text-lg mb-10">
        Drop your address and we'll get back to you within 24 hours with a free
        quote.
      </p>
      <div className="flex gap-3 justify-center max-w-lg mx-auto px-4 flex-wrap">
        <input
          type="text"
          placeholder="Your street address..."
          className="flex-1 min-w-48 px-6 py-3 rounded-full bg-[#1a2e1a] text-[#f5f0e8] placeholder-[#f5f0e8]/30 text-sm font-light outline-none"
        />
        <button className="bg-[#1a2e1a] text-[#a8d44b] font-medium text-sm px-7 py-3 rounded-full transition-all duration-200 hover:bg-[#243824] whitespace-nowrap">
          Get my free quote
        </button>
      </div>
    </section>
  );
};

export default CTA;
