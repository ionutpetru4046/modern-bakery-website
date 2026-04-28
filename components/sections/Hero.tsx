"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-[#0F0F0F] px-6 pt-24">
      
      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4A373]/20 blur-3xl" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
        
        {/* LEFT CONTENT */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 text-sm uppercase tracking-[0.3em] text-[#D4A373]"
          >
            Artisan Bakery
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl text-5xl font-bold leading-tight text-white md:text-7xl"
          >
            Freshly Baked Luxury Every Morning
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-white/70"
          >
            Experience handcrafted pastries, premium coffee, and warm
            artisan breads made daily with passion and elegance.
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <button className="rounded-full bg-[#D4A373] px-8 py-4 text-sm font-semibold text-black transition duration-300 hover:scale-105">
              Order Now
            </button>

            <button className="rounded-full border border-white/20 px-8 py-4 text-sm font-semibold text-white transition duration-300 hover:border-[#D4A373] hover:text-[#D4A373]">
              Explore Menu
            </button>
          </motion.div>
        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <div className="absolute inset-0 rounded-[40px] bg-[#D4A373]/20 blur-2xl" />

          <img
            src="https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1200&auto=format&fit=crop"
            alt="Bakery"
            className="relative z-10 h-[600px] w-full rounded-[40px] object-cover shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
}