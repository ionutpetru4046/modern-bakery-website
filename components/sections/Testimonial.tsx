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
    <section className="relative overflow-hidden bg-[#0B0B0B] py-32">
      
      {/* BACKGROUND GLOW */}
      <div className="absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-[#D4A373]/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#D4A373]">
            Customer Experience
          </p>

          <h2 className="text-4xl font-bold leading-tight text-white md:text-6xl">
            Loved By Bakery Enthusiasts
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-white/60">
            Discover why our handcrafted pastries and luxury atmosphere
            create unforgettable experiences every single day.
          </p>
        </motion.div>

        {/* TESTIMONIAL GRID */}
        <div className="grid gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
            >
              
              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                <div className="absolute -top-10 right-0 h-40 w-40 rounded-full bg-[#D4A373]/10 blur-3xl" />
              </div>

              {/* STARS */}
              <div className="mb-6 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-[#D4A373] text-[#D4A373]"
                  />
                ))}
              </div>

              {/* REVIEW */}
              <p className="relative z-10 text-lg leading-relaxed text-white/70">
                “{testimonial.review}”
              </p>

              {/* USER */}
              <div className="relative z-10 mt-8 flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="h-14 w-14 rounded-full object-cover"
                />

                <div>
                  <h4 className="font-semibold text-white">
                    {testimonial.name}
                  </h4>

                  <p className="text-sm text-white/50">
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