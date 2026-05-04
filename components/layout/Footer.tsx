"use client";

import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

const footerLinks = [
  {
    title: "Navigation",
    links: [
      { name: "Home", href: "/" },
      { name: "Menu", href: "/menu" },
      { name: "About", href: "/about" },
      { name: "Gallery", href: "/gallery" },
      { name: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "Careers", href: "/careers" },
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms", href: "/terms" },
      { name: "Support", href: "/contact" },
    ],
  },
];

export default function Footer() {
  // Newsletter logic integrated here from Newsletter.tsx
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubscribe(e: React.FormEvent) {
    e.preventDefault();
    // Here you could integrate your actual subscription logic
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3500); // Reset message after 3.5s
    setEmail("");
  }

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#080808]">
      {/* Glow */}
      <div className="absolute bottom-0 left-1/2 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-[#D4A373]/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24">
        {/* TOP GRID */}
        <div className="grid gap-16 lg:grid-cols-4">
          {/* BRAND WITH LOGO (Styled same as Navbar) */}
          <div>
            <Link
              href="/"
              className="group flex items-center gap-2 select-none"
            >
              <span className="relative block h-14 w-14 transition-transform duration-300 scale-95 saturate-100 group-hover:saturate-150">
                <Image
                  src="/logoBakery.jpg"
                  alt="Velora Bakery Logo"
                  fill
                  className="object-cover scale-95 saturate-100 group-hover:saturate-150 transition-all duration-300"
                  priority
                  sizes="56px"
                />
              </span>
              <span className="ml-1 font-serif text-[1.7rem] font-extrabold tracking-tight text-white leading-tight select-none drop-shadow-[0_3px_12px_rgba(212,163,115,0.03)] group-hover:text-[#D4A373] transition-colors duration-300">
                Velora Bakery
              </span>
            </Link>

            <p className="mt-6 max-w-sm text-white/60 leading-relaxed">
              Experience handcrafted pastries, artisan coffee, and luxury bakery
              moments designed with elegance.
            </p>
          </div>

          {/* LINKS */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="mb-6 text-lg font-semibold text-white">
                {section.title}
              </h3>

              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-white/60 transition hover:text-[#D4A373]"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* CONTACT */}
          <div>
            <h3 className="mb-6 text-lg font-semibold text-white">Contact</h3>

            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 text-[#D4A373]" />
                <p className="text-white/60">
                  Velora Bakery, Dublin City Center, Ireland
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={18} className="text-[#D4A373]" />
                <p className="text-white/60">+353 89 123 4567</p>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={18} className="text-[#D4A373]" />
                <p className="text-white/60">velorabakery@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* NEWSLETTER (🔥 Integrated Newsletter Page) */}
        <div className="mt-20 border-t border-white/10 pt-10">
          <div className="flex items-center gap-3 mb-2">
            <h3 className="text-lg font-semibold text-white">
              Join Our Bakery Newsletter
            </h3>
            {/* Add link to the full newsletter page */}
          </div>

          <p className="mt-2 text-white/60">
            Get weekly updates on fresh pastries, seasonal menus, and exclusive
            offers.
          </p>

          <form
            className="mt-6 flex flex-col gap-3 sm:flex-row"
            onSubmit={handleSubscribe}
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-white outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <button
              type="submit"
              className="rounded-lg bg-[#D4A373] px-6 py-3 font-semibold text-black transition hover:scale-[1.02]"
              disabled={submitted}
            >
              {submitted ? "Subscribed!" : "Subscribe"}
            </button>
          </form>
          <p className="mt-4 text-xs text-white/40">
            No spam. Unsubscribe anytime.
          </p>
        </div>

        {/* BOTTOM */}
        <div className="mt-20 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-sm text-white/40">
            © 2026 Velora Bakery. All rights reserved.
          </p>

          <div className="flex gap-6 text-sm text-white/40">
            <Link href="/privacy" className="hover:text-[#D4A373] transition">
              Privacy
            </Link>

            <Link href="/terms" className="hover:text-[#D4A373] transition">
              Terms
            </Link>

            <Link href="/cookies" className="hover:text-[#D4A373] transition">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
