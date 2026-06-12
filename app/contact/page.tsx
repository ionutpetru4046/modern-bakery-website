"use client";

import { useState } from "react";
import { MapPin, Phone, Mail } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
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
    <main className="min-h-screen bg-linear-to-tr from-[#110d09] via-[#17120c] to-[#0F0F0F] px-2 py-10 md:px-8 md:py-20 flex flex-col items-center justify-start text-white relative">
      {/* Decorative Gradient Circles */}
      <div className="pointer-events-none absolute left-[-100px] top-0 h-72 w-72 bg-[#D4A373]/20 rounded-full blur-3xl z-0 hidden sm:block"></div>
      <div className="pointer-events-none absolute right-[-100px] bottom-0 h-64 w-64 bg-[#D4A373]/30 rounded-full blur-2xl z-0 hidden md:block"></div>

      {/* HEADER */}
      <section className="relative z-10 w-full max-w-3xl text-center">
        <p className="text-xs md:text-sm font-semibold uppercase tracking-[0.3em] text-[#D4A373] drop-shadow">
          Get in Touch
        </p>
        <h1 className="mt-4 text-4xl md:text-6xl font-extrabold bg-linear-to-r from-[#D4A373] via-[#F3E9DD] to-[#B37A4B] bg-clip-text text-transparent drop-shadow">
          Contact Velora Bakery
        </h1>
        <p className="mt-6 text-base md:text-lg text-white/70 max-w-2xl mx-auto">
          For custom orders, collaborations, events, or any questions, fill out the form and our artisan team will respond within 24 hours.
        </p>
      </section>

      {/* FORM & INFO */}
      <section className="relative z-10 mx-auto mt-14 grid w-full max-w-5xl grid-cols-1 gap-x-12 gap-y-10 md:grid-cols-2">
        {/* FORM BLOCK */}
        <form
          onSubmit={handleSubmit}
          className="rounded-3xl border border-white/10 bg-linear-to-br from-[#222017]/80 via-[#18120b]/80 to-[#1B150D]/80 p-6 md:p-10 shadow-2xl backdrop-blur-sm flex flex-col shadow-[#D4A373]/5 transition-all"
        >
          <h2 className="mb-4 text-2xl md:text-3xl font-semibold bg-gradient-to-l from-[#D4A373] to-[#B37A4B] bg-clip-text text-transparent">
            Send Us a Message
          </h2>
          <div className="grid grid-cols-1 gap-4">
            <label className="flex flex-col text-left text-white/80 text-sm font-semibold gap-1">
              Name
              <input
                name="name"
                type="text"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
                maxLength={80}
                className="mt-1 w-full rounded-xl border border-[#D4A373]/30 bg-black/40 px-4 py-3 text-base outline-none focus:border-[#D4A373] focus:bg-black/60 transition"
                autoComplete="name"
              />
            </label>
            <label className="flex flex-col text-left text-white/80 text-sm font-semibold gap-1">
              Email
              <input
                name="email"
                type="email"
                placeholder="Email Address"
                value={form.email}
                onChange={handleChange}
                required
                maxLength={80}
                className="mt-1 w-full rounded-xl border border-[#D4A373]/30 bg-black/40 px-4 py-3 text-base outline-none focus:border-[#D4A373] focus:bg-black/60 transition"
                autoComplete="email"
              />
            </label>
            <label className="flex flex-col text-left text-white/80 text-sm font-semibold gap-1">
              Message
              <textarea
                name="message"
                placeholder="Your Message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                required
                maxLength={1000}
                className="mt-1 w-full rounded-xl border border-[#D4A373]/30 bg-black/40 px-4 py-3 text-base outline-none focus:border-[#D4A373] focus:bg-black/60 transition resize-none"
              />
            </label>
          </div>
          <button
            type="submit"
            className={`mt-7 w-full rounded-2xl bg-linear-to-r from-[#D4A373] via-[#ECD7BE] to-[#B37A4B] px-6 py-3 text-lg font-bold text-[#252018] shadow-lg shadow-[#D4A373]/10 hover:scale-[1.015] hover:from-[#E7B078] hover:to-[#D4A373] focus:outline-none transition-all duration-150 ${
              status === "submitting" ? "opacity-60 cursor-not-allowed" : ""
            }`}
            disabled={status === "submitting"}
          >
            {status === "submitting" ? "Sending..." : "Send Message"}
          </button>
          {status === "success" && (
            <p className="mt-5 rounded-xl bg-green-600/10 px-4 py-2 text-center text-green-400 font-semibold shadow-md animate-fadein">
              Your message was sent! Thank you for contacting us.
            </p>
          )}
          {status === "error" && (
            <p className="mt-5 rounded-xl bg-red-700/10 px-4 py-2 text-center text-red-400 font-semibold shadow-md">
              Oops, something went wrong. Please try again.
            </p>
          )}
        </form>

        {/* CONTACT INFO BLOCK */}
        <div className="flex flex-col justify-between rounded-3xl border border-white/10 bg-gradient-to-br from-[#191209]/70 via-[#181717]/80 to-[#21180D]/80 p-6 md:p-10 shadow-2xl backdrop-blur-sm min-h-[340px]">
          <div>
            <h2 className="mb-4 text-2xl md:text-3xl font-semibold gi from-[#D4A373] to-[#B37A4B] bg-clip-text text-transparent">
              Contact Details
            </h2>
            <ul className="space-y-6 text-white/85">
              <li className="flex items-start gap-4">
                <span className="bg-black/40 p-2 rounded-full">
                  <MapPin size={22} className="text-[#D4A373]" />
                </span>
                <span className="text-base font-medium mt-1">
                  Velora Bakery,<br className="sm:hidden" />
                  <span className="text-white/50">Dublin City Center, Ireland</span>
                </span>
              </li>
              <li className="flex items-center gap-4">
                <span className="bg-black/40 p-2 rounded-full">
                  <Phone size={20} className="text-[#D4A373]" />
                </span>
                <a
                  href="tel:+353000000000"
                  className="text-base font-medium hover:text-[#D4A373] transition"
                >
                  +353 000 000 000
                </a>
              </li>
              <li className="flex items-center gap-4">
                <span className="bg-black/40 p-2 rounded-full">
                  <Mail size={20} className="text-[#D4A373]" />
                </span>
                <a
                  href="mailto:hello@velora.com"
                  className="text-base font-medium hover:text-[#D4A373] transition"
                >
                  hello@velora.com
                </a>
              </li>
            </ul>
          </div>

          <div className="mt-9 border-t border-white/10 pt-5 text-sm text-white/65">
            <h3 className="mb-3 font-bold text-[#D4A373] tracking-wide uppercase text-xs">
              Opening Hours
            </h3>
            <ul className="space-y-1">
              <li>
                Monday – Friday:{" "}
                <span className="inline-block font-semibold text-white/80">
                  7:00am – 6:00pm
                </span>
              </li>
              <li>
                Saturday:{" "}
                <span className="inline-block font-semibold text-white/80">
                  8:00am – 4:30pm
                </span>
              </li>
              <li>
                Sunday:{" "}
                <span className="inline-block font-semibold text-[#f66] pl-1">Closed</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* MAP BLOCK */}
      <section className="relative z-10 mx-auto mb-7 mt-12 w-full max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-[#191209]/60 via-[#1a1612]/60 to-[#0A0A0A]/80 shadow-2xl">
        <iframe
          title="Velora Bakery Location"
          src="https://www.openstreetmap.org/export/embed.html?bbox=-6.2672,53.3420,-6.2550,53.3505&amp;layer=mapnik&amp;marker=53.34647,-6.26059"
          className="h-[310px] w-full border-0 grayscale-[35%] hover:grayscale-0 transition duration-500"
          loading="lazy"
          allowFullScreen
        ></iframe>
        <div className="p-4 text-white/60 text-xs text-center backdrop-blur">
          Find us on{" "}
          <a
            href="https://openstreetmap.org/"
            className="underline decoration-dotted underline-offset-4 hover:text-[#D4A373] transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            OpenStreetMap
          </a>
        </div>
      </section>
    </main>
  );
}