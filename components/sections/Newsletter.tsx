"use client";

export default function NewsletterPage() {
  return (
    <main className="min-h-screen bg-[#0F0F0F] px-6 py-24 text-white">
      
      <div className="mx-auto max-w-3xl text-center">
        
        <p className="text-sm uppercase tracking-[0.3em] text-[#D4A373]">
          Stay Updated
        </p>

        <h1 className="mt-4 text-5xl font-bold">
          Join Our Bakery Newsletter
        </h1>

        <p className="mt-6 text-white/60">
          Get weekly updates on fresh pastries, seasonal menus, and exclusive offers.
        </p>

        {/* FORM */}
        <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6">
          
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full rounded-lg border border-white/10 bg-black/40 p-3 text-white outline-none"
          />

          <button className="mt-4 w-full rounded-full bg-[#D4A373] py-3 font-semibold text-black transition hover:scale-[1.02]">
            Subscribe
          </button>

          <p className="mt-4 text-xs text-white/40">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </main>
  );
}