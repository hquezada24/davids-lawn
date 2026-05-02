"use client";
import Link from "next/link";

const Button = ({ text, link = "", variant = "light" }) => {
  const styling =
    variant === "light"
      ? ["text-forest", "bg-lime"]
      : ["text-lime", "bg-forest"];
  return (
    <div className={`${styling[0]}`}>
      <Link
        href={link}
        className={`${styling[1]} text-sm font-medium px-6 py-2.5 rounded-full transition-all duration-200 hover:bg-lime-light hover:-translate-y-0.5`}
      >
        {text}
      </Link>
    </div>
  );
};

export default Button;
