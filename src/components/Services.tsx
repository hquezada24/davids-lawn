const Services = () => {
  return (
    <section id="services" className="max-w-6xl mx-auto px-8 py-24">
      <div className="text-lime text-xs font-medium tracking-widest uppercase mb-3">
        What we do
      </div>
      <h2 className="font-serif text-5xl text-cream tracking-tight leading-tight mb-12">
        Everything your
        <br />
        lawn <em className="text-lime not-italic">needs.</em>
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div className="transition-[transform, border-color] duration-200  hover:-translate-y-1 bg-forest border-2 border-lime rounded-2xl p-7">
          <span className="text-3xl block mb-4">🌾</span>
          <h4 className="text-cream font-medium text-lg mb-2">Lawn Mowing</h4>
          <p className="text-cream/50 font-light text-lg leading-relaxed">
            Clean, even cuts every time. We handle any yard size with precision.
          </p>
        </div>
        {/* <div className="transition-[transform, border-color] duration-200  hover:-translate-y-1 bg-forest border-2 border-lime rounded-2xl p-7">
          <span className="text-3xl block mb-4">✂️</span>
          <h4 className="text-cream font-medium text-lg mb-2">
            Edging & Trimming
          </h4>
          <p className="text-cream/50 font-light text-lg leading-relaxed">
            Crisp borders along walkways, driveways, and garden beds.
          </p>
        </div> */}
        {/* <div className="transition-[transform, border-color] duration-200  hover:-translate-y-1 bg-forest border-2 border-lime rounded-2xl p-7">
          <span className="text-3xl block mb-4">🍂</span>
          <h4 className="text-cream font-medium text-lg mb-2">Leaf Cleanup</h4>
          <p className="text-cream/50 font-light text-lg leading-relaxed">
            Fall cleanups that leave your lawn clear and ready for the cold.
          </p>
        </div> */}
        {/* <div className="transition-[transform, border-color] duration-200  hover:-translate-y-1 bg-forest border-2 border-lime rounded-2xl p-7">
          <span className="text-3xl block mb-4">💧</span>
          <h4 className="text-cream font-medium text-lg mb-2">Fertilization</h4>
          <p className="text-cream/50 font-light text-lg leading-relaxed">
            Seasonal treatments to keep your grass thick, green, and healthy.
          </p>
        </div> */}
        <div className="transition-[transform, border-color] duration-200  hover:-translate-y-1 bg-forest border-2 border-lime rounded-2xl p-7">
          <span className="text-3xl block mb-4">🧹</span>
          <h4 className="text-cream font-medium text-lg mb-2">
            Debris Hauling
          </h4>
          <p className="text-cream/50 font-light text-lg leading-relaxed">
            We bag and haul everything away — no mess left behind.
          </p>
        </div>
        <div className="transition-[transform, border-color] duration-200  hover:-translate-y-1 bg-forest border-2 border-lime rounded-2xl p-7">
          <span className="text-3xl block mb-4">📋</span>
          <h4 className="text-cream font-medium text-lg mb-2">
            Free Estimates
          </h4>
          <p className="text-cream/50 font-light text-lg leading-relaxed">
            No pressure, no obligation. We come out and give you a fair quote.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
