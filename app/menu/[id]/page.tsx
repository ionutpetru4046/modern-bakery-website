"use client";

import Link from "next/link";
import { products } from "@/data/products";
import { useParams } from "next/navigation";
import { useCart } from "@/context/CartContext";

export default function ProductPage() {
  const { id } = useParams();
  const { addToCart } = useCart();

  const product = products.find((p) => p.id === id);
  const related = products.filter((p) => p.id !== id).slice(0, 3);

  if (!product) {
    return (
      <div className="min-h-screen bg-[#0F0F0F] text-white flex items-center justify-center">
        Product not found
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#0F0F0F] px-6 py-24 text-white">
      
      {/* PRODUCT SECTION */}
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2">
        
        <img
          src={product.image}
          className="h-[500px] w-full rounded-2xl object-cover"
          alt={product.name}
        />

        <div>
          <h1 className="text-4xl font-bold">{product.name}</h1>

          <p className="mt-4 text-white/60">
            {product.description}
          </p>

          <p className="mt-6 text-2xl text-[#D4A373]">
            €{product.price}
          </p>

          <button
            onClick={() =>
              addToCart({
                id: Number(product.id),
                name: product.name,
                price: product.price,
                image: product.image,
              })
            }
            className="mt-8 rounded-full bg-[#D4A373] px-8 py-3 font-semibold text-black"
          >
            Add to Cart
          </button>
        </div>
      </div>

      {/* RELATED PRODUCTS */}
      <section className="mx-auto mt-24 max-w-6xl">
        
        <h2 className="text-2xl font-bold">
          You may also like
        </h2>

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((item) => (
            <Link
              key={item.id}
              href={`/menu/${item.id}`}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5"
            >
              <img
                src={item.image}
                className="h-56 w-full object-cover transition group-hover:scale-110"
                alt={item.name}
              />

              <div className="p-4">
                <h3 className="text-lg font-semibold">
                  {item.name}
                </h3>

                <p className="text-[#D4A373]">
                  €{item.price}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}