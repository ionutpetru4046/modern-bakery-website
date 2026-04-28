"use client";

import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

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
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#080808]">
      
      {/* Glow */}
      <div className="absolute bottom-0 left-1/2 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-[#D4A373]/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24">

        {/* TOP GRID */}
        <div className="grid gap-16 lg:grid-cols-4">

          {/* BRAND */}
          <div>
            <Link href="/" className="text-3xl font-bold tracking-wide text-white">
              Velora
            </Link>

            <p className="mt-6 max-w-sm text-white/60 leading-relaxed">
              Experience handcrafted pastries, artisan coffee,
              and luxury bakery moments designed with elegance.
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
            <h3 className="mb-6 text-lg font-semibold text-white">
              Contact
            </h3>

            <div className="space-y-5">

              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 text-[#D4A373]" />
                <p className="text-white/60">
                  Dublin City Center, Ireland
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={18} className="text-[#D4A373]" />
                <p className="text-white/60">
                  +353 89 123 4567
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={18} className="text-[#D4A373]" />
                <p className="text-white/60">
                  hello@velora.com
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* NEWSLETTER (🔥 NEW — HIGH CONVERSION AREA) */}
        <div className="mt-20 border-t border-white/10 pt-10">
          
          <h3 className="text-lg font-semibold text-white">
            Join our newsletter
          </h3>

          <p className="mt-2 text-white/60">
            Weekly updates on fresh pastries & exclusive offers.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-white outline-none"
            />

            <button className="rounded-lg bg-[#D4A373] px-6 py-3 font-semibold text-black">
              Subscribe
            </button>
          </div>
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