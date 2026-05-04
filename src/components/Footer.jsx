const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-forest border-t-2 border-lime px-8 py-6 flex flex-wrap items-center justify-between gap-4">
      <div className="font-serif text-xl text-lime font-bold">
        Quezada<span className="italic text-cream/35">Lawn</span>
      </div>
      <div className="text-cream/30 text-xs font-light">
        © {currentYear} Quezada Lawn. Local. Honest. Hardworking.
      </div>
    </footer>
  );
};

export { Footer };
