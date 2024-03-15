import { create } from "zustand";

import { devtools, persist } from "zustand/middleware";
import { Product } from "./typings/PageTypes";

interface CartSlice {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (product: Product) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartSlice>()(
  devtools(
    persist(
      (set, get) => ({
        cart: [],
        addToCart: (product) => {
          set((state) => ({
            cart: [...state.cart, product],
          }));
        },
        removeFromCart: (product) => {
          const productremove = get().cart.findIndex(
            (p) => p.meta.sku === product.meta.sku
          );

          set((state) => {
            const newCart = [...state.cart];

            newCart.splice(productremove, 1);
            return { cart: newCart };
          });
        },
        clearCart: () => {
          set({ cart: [] }); // Clear the cart by setting it to an empty array
        },
      }),
      {
        name: "shopping-cart-storage",
      }
    )
  )
);
