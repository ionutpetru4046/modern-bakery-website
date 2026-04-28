"use client";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#0F0F0F] px-6 py-24 text-white">
      
      {/* HEADER */}
      <section className="mx-auto max-w-4xl text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-[#D4A373]">
          Get in Touch
        </p>

        <h1 className="mt-4 text-5xl font-bold md:text-6xl">
          Let’s Talk Bakery
        </h1>

        <p className="mt-6 text-white/60">
          Have a question, order request, or collaboration idea? We’d love to hear from you.
        </p>
      </section>

      {/* FORM */}
      <section className="mx-auto mt-16 max-w-2xl rounded-2xl border border-white/10 bg-white/5 p-8">
        
        <div className="space-y-4">
          
          <input
            type="text"
            placeholder="Your Name"
            className="w-full rounded-lg border border-white/10 bg-black/40 p-3 outline-none"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full rounded-lg border border-white/10 bg-black/40 p-3 outline-none"
          />

          <textarea
            placeholder="Your Message"
            rows={5}
            className="w-full rounded-lg border border-white/10 bg-black/40 p-3 outline-none"
          />
        </div>

        <button className="mt-6 w-full rounded-full bg-[#D4A373] py-3 font-semibold text-black transition hover:scale-[1.02]">
          Send Message
        </button>
      </section>

      {/* INFO BLOCK */}
      <section className="mx-auto mt-16 max-w-4xl text-center text-white/60">
        <p>Email: hello@velora.com</p>
        <p>Phone: +353 000 000 000</p>
      </section>
    </main>
  );
}