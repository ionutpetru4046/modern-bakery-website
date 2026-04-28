import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import FeaturedProducts from "@/components/sections/FeaturedProducts";
import Testimonials from "@/components/sections/Testimonial";
import Footer from "@/components/layout/Footer";
import ScrollReveal from "@/components/animations/ScrollReveal";
import Link from "next/link";
import { products } from "@/data/products";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#0F0F0F]">
      <Navbar />
      <Hero />
      {/* FEATURED SECTION */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <ScrollReveal>
            <h2 className="text-4xl font-bold">Featured Pastries</h2>
            <p className="mt-2 text-white/60">
              Crafted daily with premium ingredients
            </p>
          </ScrollReveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product, i) => (
              <ScrollReveal key={product.id} delay={i * 0.1}>
                <Link
                  href={`/menu/${product.id}`}
                  className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5"
                >
                  <img
                    src={product.image}
                    className="h-64 w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="p-4">
                    <h3 className="text-lg font-semibold">{product.name}</h3>

                    <p className="text-[#D4A373]">€{product.price}</p>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      <FeaturedProducts />
      <Testimonials />
      <Footer />
    </main>
  );
}
