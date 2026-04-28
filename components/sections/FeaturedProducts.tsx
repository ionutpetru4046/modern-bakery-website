"use client";

import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { useEffect } from "react";

const products = [
  {
    id: 1,
    name: "Chocolate Croissant",
    price: "$8",
    image:
      "https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Strawberry Cake",
    price: "$14",
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Artisan Bread",
    price: "$10",
    image:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Luxury Donuts",
    price: "$12",
    image:
      "https://images.unsplash.com/photo-1527515545081-5db817172677?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 5,
    name: "Vanilla Cupcake",
    price: "$9",
    image:
      "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function FeaturedProducts() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
  });

  // AUTOPLAY
  useEffect(() => {
    if (!emblaApi) return;

    const autoplay = setInterval(() => {
      emblaApi.scrollNext();
    }, 3000);

    return () => clearInterval(autoplay);
  }, [emblaApi]);

  return (
    <section className="relative overflow-hidden bg-[#0F0F0F] py-28">
      
      {/* Glow */}
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-[#D4A373]/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        
        {/* HEADER */}
        <div className="mb-16 flex items-end justify-between">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#D4A373]">
              Featured Collection
            </p>

            <h2 className="text-4xl font-bold text-white md:text-5xl">
              Signature Bakery Creations
            </h2>
          </div>

          <button className="hidden rounded-full border border-white/10 px-6 py-3 text-sm text-white/80 transition hover:border-[#D4A373] hover:text-[#D4A373] md:block">
            View Full Menu
          </button>
        </div>

        {/* CAROUSEL */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                className="min-w-[85%] sm:min-w-[48%] xl:min-w-[31%]"
              >
                <div className="group overflow-hidden rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl">
                  
                  {/* IMAGE */}
                  <div className="relative overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-[420px] w-full object-cover transition duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  </div>

                  {/* CONTENT */}
                  <div className="p-6">
                    <div className="mb-4 flex items-center justify-between">
                      <h3 className="text-xl font-semibold text-white">
                        {product.name}
                      </h3>

                      <span className="text-[#D4A373]">
                        {product.price}
                      </span>
                    </div>

                    <button className="w-full rounded-full bg-[#D4A373] py-3 text-sm font-semibold text-black transition duration-300 hover:scale-[1.02]">
                      Add To Cart
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}