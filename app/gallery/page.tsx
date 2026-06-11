"use client";

import { motion } from "framer-motion";

const images = [
  "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1527515545081-5db817172677?q=80&w=1200&auto=format&fit=crop",
];

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-[#0F0F0F] px-6 py-24 text-white">
      
      {/* HEADER */}
      <div className="mx-auto max-w-6xl text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-[#D4A373]">
          Our Craft
        </p>

        <h1 className="mt-4 text-5xl font-bold md:text-6xl">
          Bakery Gallery
        </h1>

        <p className="mt-6 text-white/60">
          A visual journey through our artisan pastries, breads, and desserts.
        </p>
      </div>

      {/* GRID */}
      <div className="mx-auto mt-16 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((img, index) => (
          <motion.div
            key={img}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-2xl border border-white/10"
          >
            <img
              src={img}
              alt="Bakery item"
              className="h-[300px] w-full object-cover transition duration-500 group-hover:scale-110"
            />

            {/* overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent" />
          </motion.div>
        ))}
      </div>
    </main>
  );
}