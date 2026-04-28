"use client";

import Link from "next/link";
import { products } from "@/data/products";

export default function MenuPage() {
  return (
    <main className="min-h-screen bg-[#0F0F0F] px-6 py-24 text-white">
      
      <h1 className="text-4xl font-bold">Our Menu</h1>
      <p className="mt-2 text-white/60">
        Click a product to view details
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <Link
            key={product.id}
            href={`/menu/${product.id}`}
            className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5"
          >
            <img
              src={product.image}
              className="h-64 w-full object-cover transition group-hover:scale-110"
              alt={product.name}
            />

            <div className="p-4">
              <h3 className="text-lg font-semibold">
                {product.name}
              </h3>
              <p className="text-[#D4A373]">€{product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}