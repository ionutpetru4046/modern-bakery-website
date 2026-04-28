"use client";

import { useCart } from "@/context/CartContext";
import { useState } from "react";

export default function CheckoutPage() {
  const { cart, total } = useCart();

  const [loading, setLoading] = useState(false);

  const subtotal = total;
  const tax = subtotal * 0.2;
  const grandTotal = subtotal + tax;

  const handleCheckout = async () => {
    setLoading(true);

    // later: Stripe session call
    setTimeout(() => {
      alert("Stripe integration coming next 🚀");
      setLoading(false);
    }, 1000);
  };

  return (
    <main className="min-h-screen bg-[#0F0F0F] px-6 py-24 text-white">
      
      {/* HEADER */}
      <div className="mx-auto max-w-6xl">
        <h1 className="text-4xl font-bold">Checkout</h1>
        <p className="mt-2 text-white/60">
          Complete your order securely
        </p>

        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          
          {/* LEFT — CART SUMMARY */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-semibold">Your Order</h2>

            <div className="mt-6 space-y-4">
              {cart.length === 0 && (
                <p className="text-white/60">Your cart is empty</p>
              )}

              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between border-b border-white/10 pb-3"
                >
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-white/60">
                      €{item.price} × {item.quantity}
                    </p>
                  </div>

                  <p className="text-[#D4A373]">
                    €{item.price * item.quantity}
                  </p>
                </div>
              ))}
            </div>

            {/* TOTALS */}
            <div className="mt-6 space-y-2 border-t border-white/10 pt-4">
              <div className="flex justify-between text-white/70">
                <span>Subtotal</span>
                <span>€{subtotal.toFixed(2)}</span>
              </div>

              <div className="flex justify-between text-white/70">
                <span>Tax (20%)</span>
                <span>€{tax.toFixed(2)}</span>
              </div>

              <div className="flex justify-between text-lg font-bold">
                <span>Total</span>
                <span>€{grandTotal.toFixed(2)}</span>
              </div>
            </div>
          </div>

          {/* RIGHT — CUSTOMER FORM */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-semibold">Customer Details</h2>

            <div className="mt-6 space-y-4">
              
              <input
                type="text"
                placeholder="Full Name"
                className="w-full rounded-lg border border-white/10 bg-black/40 p-3 outline-none"
              />

              <input
                type="email"
                placeholder="Email"
                className="w-full rounded-lg border border-white/10 bg-black/40 p-3 outline-none"
              />

              <input
                type="text"
                placeholder="Address"
                className="w-full rounded-lg border border-white/10 bg-black/40 p-3 outline-none"
              />

              <input
                type="text"
                placeholder="Phone Number"
                className="w-full rounded-lg border border-white/10 bg-black/40 p-3 outline-none"
              />
            </div>

            {/* PAYMENT BUTTON */}
            <button
              onClick={handleCheckout}
              disabled={loading || cart.length === 0}
              className="mt-6 w-full rounded-full bg-[#D4A373] py-3 font-semibold text-black transition hover:scale-[1.02] disabled:opacity-50"
            >
              {loading ? "Processing..." : "Pay Securely (Stripe Ready)"}
            </button>

            <p className="mt-4 text-center text-xs text-white/40">
              Secure payment powered by Stripe (integration next step)
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}