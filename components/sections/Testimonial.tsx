"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sophia Bennett",
    role: "Food Blogger",
    review:
      "The atmosphere, pastries, and premium quality feel absolutely unmatched. Every visit feels luxurious.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "James Carter",
    role: "Coffee Enthusiast",
    review:
      "Velora has transformed my morning routine. The artisan bread and coffee are exceptional.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Emma Wilson",
    role: "Creative Director",
    review:
      "A beautifully designed bakery experience with stunning desserts and an unforgettable ambiance.",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Oliver Martinez",
    role: "Pastry Chef",
    review:
      "As a pastry chef, I'm impressed by the attention to detail in every treat and the innovative menu. Truly inspiring!",
    image:
      "https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: 5,
    name: "Grace Kim",
    role: "Event Planner",
    review:
      "Velora is my go-to for every special occasion. Their desserts are always a showstopper and wow my guests!",
    image:
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: 6,
    name: "Lucas Petrov",
    role: "Travel Writer",
    review:
      "From the croissants to the cupcakes, everything tastes like a Parisian morning. I recommend it to all my readers.",
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=400&auto=format&fit=crop",
  },
];

export default function Testimonials() {
  return (
    <section className="relative isolate overflow-x-hidden bg-gradient-to-br from-[#18120b] via-[#191209] to-[#0B0B0B] py-32">
      {/* MODERN AURORA/GRADIENT BACKGROUND */}
      <div className="pointer-events-none absolute -top-32 left-1/2 h-96 w-[72vw] -translate-x-1/2 rounded-full bg-gradient-to-tl from-[#D4A373]/30 via-transparent to-[#B37A4B]/10 blur-2xl opacity-90" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 bg-gradient-to-b from-[#D4A373]/10 via-transparent to-transparent rounded-full blur-2xl opacity-80" />
      <div className="pointer-events-none absolute left-[-160px] top-1/2 h-60 w-60 bg-[#fffdf7]/[0.025] rounded-full blur-2xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <p className="mb-5 text-xs md:text-sm font-medium uppercase tracking-[0.2em] text-[#D4A373] bg-[#fffdf7]/5 backdrop-blur rounded-xl inline-block px-4 py-2 shadow-inner/5">
            What Our Guests Say
          </p>
          <h2 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-[#D4A373] via-white to-[#B37A4B] bg-clip-text text-transparent drop-shadow-lg">
            Cherished By The Community
          </h2>
          <p className="mt-6 text-lg text-white/70 font-normal">
            Exceptional moments, outstanding tastes. Read why Velora is celebrated by food lovers, creatives, and connoisseurs alike.
          </p>
        </motion.div>

        {/* TESTIMONIAL GRID */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 60, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.55,
                delay: index * 0.12,
                ease: [0.4, 0.13, 0.23, 0.96],
              }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-3xl bg-gradient-to-tr from-[#222017]/80 via-[#17120c]/85 to-[#232323]/80 border border-white/10 shadow-xl shadow-[#D4A373]/5 p-9 flex flex-col min-h-[340px] transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-[#D4A373]/30"
            >
              {/* Swoosh/Aura Hover Effect */}
              <div className="pointer-events-none absolute inset-0 scale-110 opacity-0 group-hover:opacity-100 transition duration-700">
                <div className="absolute -bottom-16 -right-16 h-40 w-40 rounded-full bg-gradient-to-br from-[#D4A373]/20 to-transparent blur-2xl" />
                <div className="absolute top-0 left-0 h-20 w-20 bg-[#B37A4B]/10 rounded-full blur-2xl" />
              </div>

              {/* Stars */}
              <div className="mb-6 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-[#D4A373] text-[#D4A373] drop-shadow"
                  />
                ))}
              </div>

              {/* Review */}
              <p className="relative z-10 text-lg md:text-xl font-medium leading-relaxed text-white/80 pb-3 italic">
                “{testimonial.review}”
              </p>

              {/* User */}
              <div className="relative z-10 mt-auto pt-9 flex items-center gap-4 border-t border-white/10">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="h-14 w-14 rounded-full object-cover border-4 border-[#D4A373]/20 shadow-lg transition-all duration-300 group-hover:scale-105"
                />
                <div>
                  <h4 className="font-semibold text-white drop-shadow">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-[#D4A373] font-medium tracking-wide mt-0.5">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}