"use client";

import { useCart } from "../../context/CartContext";
import { X } from "lucide-react";

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
    total,
  } = useCart();

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60">
      <div className="absolute right-0 top-0 h-full w-[400px] bg-[#0F0F0F] p-6 text-white">
        
        {/* HEADER */}
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold">Your Cart</h2>

          <button onClick={() => setOpen(false)}>
            <X />
          </button>
        </div>

        {/* ITEMS */}
        <div className="mt-6 flex flex-col gap-4">
          {cart.length === 0 && (
            <p className="text-white/60">Cart is empty</p>
          )}

          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border-b border-white/10 pb-3"
            >
              <div>
                <p className="font-semibold">{item.name}</p>
                <p className="text-sm text-white/60">
                  ${item.price}
                </p>
              </div>

              {/* QTY */}
              <div className="flex items-center gap-2">
                <button onClick={() => decreaseQty(item.id)}>
                  -
                </button>

                <span>{item.quantity}</span>

                <button onClick={() => increaseQty(item.id)}>
                  +
                </button>
              </div>

              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-400"
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        {/* TOTAL */}
        <div className="absolute bottom-6 left-6 right-6">
          <div className="flex justify-between text-lg font-bold">
            <span>Total:</span>
            <span>${total}</span>
          </div>

          <button className="mt-4 w-full rounded-full bg-[#D4A373] py-3 text-black font-semibold">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}