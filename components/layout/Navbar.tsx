"use client";

import Link from "next/link";
import { Menu, X, ShoppingBag } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import CartDrawer from "../cart/CartDrawer";
import { useCart } from "@/context/CartContext";
import Image from "next/image";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Menu", href: "/menu" },
  { name: "Gallery", href: "/gallery" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const pathname = usePathname();
  const { cart } = useCart();

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  // 🔥 SCROLL EFFECT
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🔥 AUTO CLOSE MOBILE MENU ON ROUTE CHANGE
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      {/* NAVBAR */}
      <header
        className={`fixed top-0 left-0 z-50 w-full border-b transition-all duration-300 ${
          scrolled
            ? "bg-black/80 backdrop-blur-xl border-white/10"
            : "bg-black/20 backdrop-blur-md border-transparent"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
          
          {/* MODERN LOGO DESIGN */}
          <Link
            href="/"
            className="flex items-center gap-3 text-2xl font-bold tracking-wide text-white group"
            style={{ textDecoration: "none" }}
          >
            {/* Circular Glassy Logo Container with Soft Shadow */}
            <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-linear-to-br from-[#faf6f2]/60 to-[#ecd4b8]/30 shadow-[0_2px_20px_2px_rgba(212,163,115,0.07)] ring-2 ring-[#D4A373]/10 overflow-hidden group-hover:ring-[#D4A373]/30 transition-all duration-300 ease-in-out">
              <Image
                src="/logoBakery.jpg"
                alt="Velora Bakery Logo"
                fill
                className="object-cover scale-95 saturate-100 hover:saturate-150 transition-all duration-300"
                priority
                sizes="56px"
              />
            </span>
            <span className="ml-1 font-serif text-[1.7rem] font-extrabold tracking-tight text-white leading-tight select-none drop-shadow-[0_3px_12px_rgba(212,163,115,0.03)] group-hover:text-[#D4A373] transition-colors duration-300">
              Velora Bakery
            </span>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden items-center gap-10 md:flex">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm transition ${
                    isActive
                      ? "text-[#D4A373]"
                      : "text-white/70 hover:text-[#D4A373]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* RIGHT ACTIONS */}
          <div className="flex items-center gap-4">
            
            {/* CART */}
            <button
              onClick={() => setCartOpen(true)}
              className="relative text-white hover:text-[#D4A373]"
            >
              <ShoppingBag size={24} />

              {cartCount > 0 && (
                <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-[#D4A373] text-xs font-bold text-black">
                  {cartCount}
                </span>
              )}
            </button>

            {/* CTA */}
            <Link href="/order" className="hidden md:block">
              <button className="rounded-full bg-[#D4A373] px-6 py-3 text-sm font-semibold text-black transition hover:scale-105">
                Order Now
              </button>
            </Link>

            {/* MOBILE MENU */}
            <button
              onClick={() => setOpen(true)}
              className="text-white md:hidden"
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </header>

      {/* CART DRAWER */}
      <CartDrawer open={cartOpen} setOpen={setCartOpen} />

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <>
            {/* BACKDROP */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
            />

            {/* SIDEBAR */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed right-0 top-0 z-50 h-full w-[75%] bg-[#0F0F0F] border-l border-white/10 p-6"
            >
              <button
                onClick={() => setOpen(false)}
                className="mb-10 text-white"
              >
                <X size={28} />
              </button>

              <div className="flex flex-col gap-6">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;

                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={`text-lg transition ${
                        isActive
                          ? "text-[#D4A373]"
                          : "text-white/80 hover:text-[#D4A373]"
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}

                <Link href="/order" onClick={() => setOpen(false)}>
                  <button className="mt-6 w-full rounded-full bg-[#D4A373] py-3 font-semibold text-black">
                    Order Now
                  </button>
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}