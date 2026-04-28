"use client";

import Link from "next/link";
import {
    MapPin,
    Phone,
    Mail,
  } from "lucide-react";

const footerLinks = [
  {
    title: "Navigation",
    links: ["Home", "Menu", "About", "Gallery"],
  },
  {
    title: "Company",
    links: ["Careers", "Privacy Policy", "Terms", "Support"],
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#080808]">
      
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-[#D4A373]/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24">
        
        {/* TOP SECTION */}
        <div className="grid gap-16 lg:grid-cols-4">
          
          {/* BRAND */}
          <div>
            <Link
              href="/"
              className="text-3xl font-bold tracking-wide text-white"
            >
              Velora
            </Link>

            <p className="mt-6 max-w-sm leading-relaxed text-white/60">
              Experience handcrafted pastries, artisan coffee,
              and luxury bakery moments designed with elegance.
            </p>

            {/* SOCIALS */}
            
          </div>

          {/* LINKS */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="mb-6 text-lg font-semibold text-white">
                {section.title}
              </h3>

              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-white/60 transition hover:text-[#D4A373]"
                    >
                      {link}
                    </a>
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
                <MapPin
                  size={18}
                  className="mt-1 text-[#D4A373]"
                />

                <p className="text-white/60">
                  Dublin City Center, Ireland
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Phone
                  size={18}
                  className="text-[#D4A373]"
                />

                <p className="text-white/60">
                  +353 89 123 4567
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Mail
                  size={18}
                  className="text-[#D4A373]"
                />

                <p className="text-white/60">
                  hello@velora.com
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-20 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 md:flex-row">
          
          <p className="text-sm text-white/40">
            © 2026 Velora Bakery. All rights reserved.
          </p>

          <div className="flex gap-6 text-sm text-white/40">
            <a
              href="#"
              className="transition hover:text-[#D4A373]"
            >
              Privacy
            </a>

            <a
              href="#"
              className="transition hover:text-[#D4A373]"
            >
              Terms
            </a>

            <a
              href="#"
              className="transition hover:text-[#D4A373]"
            >
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}