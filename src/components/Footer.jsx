const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0f1c0f] px-8 py-6 flex flex-wrap items-center justify-between gap-4">
      <div className="font-serif text-xl text-[#a8d44b] ">
        Quezada<span className="italic text-[#f5f0e8]/35">Lawn</span>
      </div>
      <div className="text-[#f5f0e8]/30 text-xs font-light">
        © {currentYear} Quezada Lawn. Local. Honest. Hardworking.
      </div>
    </footer>
  );
};

export { Footer };
