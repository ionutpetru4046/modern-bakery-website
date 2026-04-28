"use client";

import { useState } from "react";
import { MapPin, Phone, Mail } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    // Simulate sending with a timeout, replace this with real API call in prod
    setTimeout(() => {
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 4000);
    }, 1200);
  }

  return (
    <main className="min-h-screen bg-[#0F0F0F] px-6 py-24 text-white">
      <section className="mx-auto max-w-4xl text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-[#D4A373]">Get in Touch</p>
        <h1 className="mt-4 text-5xl font-bold md:text-6xl">Contact Velora Bakery</h1>
        <p className="mt-6 text-white/60">
          For custom orders, events, collaborations, or any questions, fill out the form and our team will get back to you within 24 hours.
        </p>
      </section>

      <section className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-12 md:grid-cols-2">
        {/* FORM BLOCK */}
        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-white/10 bg-white/5 p-8 shadow-lg"
        >
          <h2 className="mb-4 text-2xl font-semibold text-white">Send us a message</h2>
          <div className="space-y-4">
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              maxLength={80}
              className="w-full rounded-lg border border-white/10 bg-black/40 p-3 outline-none"
            />
            <input
              name="email"
              type="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              required
              maxLength={80}
              className="w-full rounded-lg border border-white/10 bg-black/40 p-3 outline-none"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              required
              maxLength={1000}
              className="w-full rounded-lg border border-white/10 bg-black/40 p-3 outline-none"
            />
          </div>
          <button
            type="submit"
            className={`mt-6 w-full rounded-full bg-[#D4A373] py-3 font-semibold text-black transition hover:scale-[1.02] ${
              status === "submitting" ? "opacity-70 cursor-not-allowed" : ""
            }`}
            disabled={status === "submitting"}
          >
            {status === "submitting" ? "Sending..." : "Send Message"}
          </button>
          {status === "success" && (
            <p className="mt-4 rounded-lg bg-green-600/10 px-4 py-2 text-center text-green-400">
              Your message was sent! Thank you for contacting us.
            </p>
          )}
          {status === "error" && (
            <p className="mt-4 rounded-lg bg-red-700/10 px-4 py-2 text-center text-red-400">
              Oops, something went wrong. Please try again.
            </p>
          )}
        </form>

        {/* CONTACT INFO BLOCK */}
        <div className="flex flex-col justify-between rounded-2xl border border-white/10 bg-[#181717]/70 p-8 md:min-h-[375px]">
          <div>
            <h2 className="mb-4 text-2xl font-semibold text-white">Contact Details</h2>
            <ul className="space-y-5 text-white/80">
              <li className="flex items-start gap-3">
                <MapPin size={19} className="mt-1 text-[#D4A373]" />
                <span className="text-base">
                  Velora Bakery, Dublin City Center, Ireland
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-[#D4A373]" />
                <a href="tel:+353000000000" className="text-base hover:text-[#D4A373] transition">
                  +353 000 000 000
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-[#D4A373]" />
                <a href="mailto:hello@velora.com" className="text-base hover:text-[#D4A373] transition">
                  hello@velora.com
                </a>
              </li>
            </ul>
          </div>

          <div className="mt-10 border-t border-white/10 pt-6 text-sm text-white/60">
            <h3 className="mb-2 font-semibold text-white">Opening Hours</h3>
            <ul className="space-y-1">
              <li>Monday - Friday: 7:00am – 6:00pm</li>
              <li>Saturday: 8:00am – 4:30pm</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
        </div>
      </section>

      {/* MAP BLOCK */}
      <section className="mx-auto mt-16 max-w-4xl rounded-2xl overflow-hidden border border-white/10 bg-[#0A0A0A] shadow mb-8">
        <iframe
          title="Velora Bakery Location"
          src="https://www.openstreetmap.org/export/embed.html?bbox=-6.2672,53.3420,-6.2550,53.3505&amp;layer=mapnik&amp;marker=53.34647,-6.26059"
          className="h-72 w-full border-0 grayscale"
          loading="lazy"
          allowFullScreen
        ></iframe>
        <div className="p-4 text-white/60 text-xs text-center">
          Find us on <a href="https://openstreetmap.org/" className="underline hover:text-[#D4A373]" target="_blank" rel="noopener noreferrer">OpenStreetMap</a>
        </div>
      </section>
    </main>
  );
}