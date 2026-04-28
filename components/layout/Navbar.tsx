"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Menu", href: "/" },
  { name: "About", href: "/" },
  { name: "Gallery", href: "/" },
  { name: "Contact", href: "/" },
];

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/40 backdrop-blur-xl"
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold tracking-wide text-white"
        >
          Velora
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-white/80 transition hover:text-[#D4A373]"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <button className="rounded-full bg-[#D4A373] px-6 py-3 text-sm font-semibold text-black transition hover:scale-105">
            Order Now
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <button className="text-white md:hidden">
          <Menu size={28} />
        </button>
      </div>
    </motion.header>
  );
}