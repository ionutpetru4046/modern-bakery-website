"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <main className="bg-[#0F0F0F] text-white">
      {/* HERO */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
        {/* BACKGROUND IMAGE */}
        <div
          className="absolute inset-0 scale-110 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=2000&auto=format&fit=crop')",
            transform: "translateY(0px)",
          }}
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/70" />

        {/* GOLD GRADIENT GLOW */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black" />

        {/* CONTENT */}
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          {/* SMALL LABEL */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-sm uppercase tracking-[0.3em] text-[#D4A373]"
          >
            Artisan Bakery Experience
          </motion.p>

          {/* TITLE */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mt-6 text-5xl font-bold leading-tight md:text-7xl"
          >
            Baked With Passion.
            <span className="text-[#D4A373]">Served With Elegance.</span>
          </motion.h1>

          {/* DESCRIPTION */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-6 text-white/60"
          >
            A modern bakery where craftsmanship meets design. Fresh pastries,
            artisan bread, and desserts made with precision and soul.
          </motion.p>

          {/* CTA BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Link href="/menu">
              <button className="rounded-full bg-[#D4A373] px-8 py-3 font-semibold text-black transition hover:scale-105">
                Explore Menu
              </button>
            </Link>

            <Link href="/gallery">
              <button className="rounded-full border border-white/20 px-8 py-3 font-semibold text-white transition hover:border-[#D4A373] hover:text-[#D4A373]">
                View Gallery
              </button>
            </Link>
          </motion.div>

          {/* SCROLL INDICATOR */}
          <div className="mt-16 animate-bounce text-white/40">↓ Scroll</div>
        </div>
      </section>
    </main>
  );
}
