"use client";
import Link from "next/link";

import { FaLeaf, FaHandshake, FaSeedling } from "react-icons/fa";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0F0F0F] text-white px-4 md:px-8 py-16 md:py-28">
      {/* HERO SECTION */}
      <section className="mx-auto max-w-4xl text-center space-y-7">
        <p className="text-xs md:text-sm font-semibold uppercase tracking-[0.25em] text-[#D4A373]">
          Behind Velora
        </p>
        <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-[#D4A373] via-white to-[#B37A4B] bg-clip-text text-transparent drop-shadow">
          Artisanal Baking<br className="hidden md:inline" /> For the Modern Palate
        </h1>
        <p className="max-w-2xl mx-auto text-base md:text-lg text-white/70">
          At Velora Bakery, we reimagine classic European flavors with innovative, contemporary technique. Every loaf, croissant, and pastry is crafted using organic flours, premium local ingredients, and a deep respect for slow, natural processes. Our mission: to elevate everyday rituals into moments of luxury.
        </p>
      </section>

      {/* VALUES CARDS */}
      <section className="mx-auto mt-24 grid max-w-6xl gap-8 md:grid-cols-3">
        <div className="rounded-3xl bg-gradient-to-tr from-[#1A1A1A] via-[#232323] to-[#2A1B13] border border-[#222]/30 p-7 shadow-lg transition-all hover:scale-[1.02] duration-200">
          <FaLeaf className="text-[#D4A373] text-3xl mb-4 mx-auto" />
          <h2 className="text-xl font-semibold mb-2 text-[#D4A373]">Sustainable Craft</h2>
          <p className="text-white/70 text-sm">
            Locally sourced ingredients, eco-friendly methods, and zero food-waste baking form the heart of our promise to the earth.
          </p>
        </div>
        <div className="rounded-3xl bg-gradient-to-tr from-[#18130D] via-[#232019] to-[#0F0F0F] border border-[#222]/30 p-7 shadow-lg transition-all hover:scale-[1.02] duration-200">
          <FaHandshake className="text-[#D4A373] text-3xl mb-4 mx-auto" />
          <h2 className="text-xl font-semibold mb-2 text-[#D4A373]">Community First</h2>
          <p className="text-white/70 text-sm">
            We believe bread brings people together. Our bakery hosts classes, supports local charities, and fosters a welcoming space for all.
          </p>
        </div>
        <div className="rounded-3xl bg-gradient-to-tr from-[#0E0A07] via-[#15110F] to-[#1C1512] border border-[#222]/30 p-7 shadow-lg transition-all hover:scale-[1.02] duration-200">
          <FaSeedling className="text-[#D4A373] text-3xl mb-4 mx-auto" />
          <h2 className="text-xl font-semibold mb-2 text-[#D4A373]">Modern Tradition</h2>
          <p className="text-white/70 text-sm">
            We blend time-honored techniques and modern design, ensuring each bite is both nostalgically familiar and excitingly new.
          </p>
        </div>
      </section>

      {/* FOUNDER STORY + IMAGE */}
      <section className="mx-auto flex flex-col md:flex-row items-center gap-14 mt-28 max-w-6xl">
        <div className="flex-1">
          <h3 className="text-2xl font-bold mb-2 text-[#D4A373]">From Our Founder</h3>
          <p className="text-white/70 text-base md:text-lg">
            <span className="block mb-3">
              "My journey started at my grandmother's hearth in Marseille, where I learned that every loaf carries a story. At Velora, we knead those stories into every batch—fusing honest ingredients, science, and creativity. Our bakery is more than a place; it’s an experience that inspires joy, sharing, and discovery."
            </span>
            <span className="mt-4 italic text-white/40">– Amélie Lefevre, Founder &amp; Head Baker</span>
          </p>
        </div>
        <div className="flex-1 w-full flex justify-center">
          <div className="rounded-2xl overflow-hidden shadow-2xl border-2 border-[#D4A373]/30 max-w-xs">
            <img
              src="https://images.unsplash.com/photo-1519864600265-abb23847ef2c?q=80&w=800&auto=format&fit=crop"
              alt="Founder Amélie Lefevre"
              className="object-cover w-full aspect-square grayscale-[30%] hover:grayscale-0 transition duration-500"
            />
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="mx-auto mt-24 max-w-6xl ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <img
            src="https://images.unsplash.com/photo-1422513391413-ddd4f2ce3340?q=80&w=800&auto=format&fit=crop"
            alt="Fresh sourdough"
            className="h-64 md:h-72 object-cover rounded-2xl brightness-90 hover:brightness-100 transition"
          />
          <img
            src="https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?q=80&w=800&auto=format&fit=crop"
            alt="Artisan pastries"
            className="h-64 md:h-72 object-cover rounded-2xl brightness-90 hover:brightness-100 transition"
          />
          <img
            src="https://images.unsplash.com/photo-1549931319-a545dcf3bc73?q=80&w=800&auto=format&fit=crop"
            alt="Bakery interior"
            className="h-64 md:h-72 object-cover rounded-2xl brightness-90 hover:brightness-100 transition"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-xl mt-28 text-center">
        <h4 className="text-lg font-semibold text-[#D4A373] tracking-widest uppercase mb-6">
          Taste the Difference
        </h4>
        <p className="text-white/70 mb-8">
          Visit our flagship location, explore our seasonal menu, or join a bread-making workshop. Discover why Velora is more than a bakery—it’s a celebration.
        </p>
        <Link
          href="/menu"
          className="inline-block px-8 py-3 rounded-3xl bg-[#D4A373] text-[#252018] text-lg font-bold shadow-md transition-all hover:bg-[#E7B078] hover:scale-105"
        >
          View Our Menu
        </Link>
      </section>
    </main>
  );
}