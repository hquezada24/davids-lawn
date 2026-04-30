"use client";
import Link from "next/link";
import { useState, useRef } from "react";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const location = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActiveLink = (path) => {
    return location === path;
  };
  return (
    <header>
      <nav className="sticky top-0 z-50 bg-[#1a2e1a] border-b border-white/10 flex items-center justify-between px-8 py-4">
        <div className="font-serif text-2xl text-[#a8d44b] ">
          Green<span className="italic text-[#f5f0e8]/60">Crew</span>
        </div>
        <ul className="hidden md:flex gap-8 list-none">
          <li>
            <Link
              href="/services"
              className="text-[#f5f0e8]/60 text-sm font-light tracking-wide hover:text-[#a8d44b] transition-colors"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              href="/pricing"
              className="text-[#f5f0e8]/60 text-sm font-light tracking-wide hover:text-[#a8d44b] transition-colors"
            >
              Pricing
            </Link>
          </li>
          <li>
            <Link
              href="/team"
              className="text-[#f5f0e8]/60 text-sm font-light tracking-wide hover:text-[#a8d44b] transition-colors"
            >
              Our Team
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="text-[#f5f0e8]/60 text-sm font-light tracking-wide hover:text-[#a8d44b] transition-colors"
            >
              Contact
            </Link>
          </li>
        </ul>
        <button className="bg-[#a8d44b] text-[#1a2e1a] text-sm font-medium px-5 py-2 rounded-full transition-all duration-200 hover:bg-[#bce563]">
          Get a Quote
        </button>
      </nav>
    </header>
  );
};

export { Header };
