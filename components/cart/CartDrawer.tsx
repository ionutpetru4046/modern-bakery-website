"use client";

import { useCart } from "@/context/CartContext";
import { X, Trash2 } from "lucide-react";

export default function CartDrawer({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (v: boolean) => void;
}) {
  const {
    cart,
    increaseQty,
    decreaseQty,
    removeFromCart,
    clearCart,
    total,
  } = useCart();

  if (!open) return null;

  const subtotal = total;
  const tax = subtotal * 0.2; // 20% tax simulation
  const grandTotal = subtotal + tax;

  return (
    <div className="fixed inset-0 z-50 bg-black/60">
      
      {/* BACKDROP */}
      <div
        onClick={() => setOpen(false)}
        className="absolute inset-0"
      />

      {/* PANEL */}
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-[#0F0F0F] p-6 text-white shadow-2xl">
        
        {/* HEADER */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <h2 className="text-xl font-bold">Your Cart</h2>

          <button onClick={() => setOpen(false)}>
            <X />
          </button>
        </div>

        {/* EMPTY STATE */}
        {cart.length === 0 ? (
          <div className="mt-10 text-center text-white/60">
            Your cart is empty
          </div>
        ) : (
          <>
            {/* ITEMS */}
            <div className="mt-6 flex flex-col gap-5 overflow-y-auto max-h-[50vh]">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between border-b border-white/10 pb-4"
                >
                  {/* INFO */}
                  <div>
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-sm text-white/60">
                      €{item.price}
                    </p>
                  </div>

                  {/* QTY */}
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => decreaseQty(item.id)}
                      className="rounded bg-white/10 px-2"
                    >
                      -
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      onClick={() => increaseQty(item.id)}
                      className="rounded bg-white/10 px-2"
                    >
                      +
                    </button>
                  </div>

                  {/* REMOVE */}
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-400"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              ))}
            </div>

            {/* SUMMARY */}
            <div className="mt-6 border-t border-white/10 pt-4 space-y-2">
              
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

            {/* ACTIONS */}
            <div className="mt-6 space-y-3">
              
              {/* CHECKOUT CTA */}
              <button className="w-full rounded-full bg-[#D4A373] py-3 font-semibold text-black hover:scale-[1.02] transition">
                Proceed to Checkout
              </button>

              {/* CLEAR CART */}
              <button
                onClick={clearCart}
                className="w-full rounded-full border border-white/10 py-3 text-white/70 hover:text-white"
              >
                Clear Cart
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}