"use client";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0F0F0F] px-6 py-24 text-white">
      
      {/* HERO */}
      <section className="mx-auto max-w-5xl text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-[#D4A373]">
          Our Story
        </p>

        <h1 className="mt-4 text-5xl font-bold md:text-6xl">
          Crafted with Passion, Baked with Precision
        </h1>

        <p className="mt-6 text-white/60">
          Velora Bakery is a modern artisan bakery inspired by European
          traditions and contemporary culinary artistry.
        </p>
      </section>

      {/* STORY GRID */}
      <section className="mx-auto mt-20 grid max-w-6xl gap-10 md:grid-cols-2">
        
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-2xl font-semibold">Our Mission</h2>
          <p className="mt-4 text-white/60">
            To bring handcrafted baked goods to a modern audience using
            premium ingredients, slow fermentation, and artisanal techniques.
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-2xl font-semibold">Our Vision</h2>
          <p className="mt-4 text-white/60">
            To redefine bakery culture through experience, design, and quality
            — blending tradition with innovation.
          </p>
        </div>
      </section>

      {/* IMAGE SECTION */}
      <section className="mx-auto mt-20 max-w-6xl">
        <img
          src="https://images.unsplash.com/photo-1549931319-a545dcf3bc73?q=80&w=1600&auto=format&fit=crop"
          className="h-[400px] w-full rounded-2xl object-cover"
          alt="bakery"
        />
      </section>
    </main>
  );
}