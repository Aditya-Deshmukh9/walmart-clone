"use client"

import { useCartStore } from "@/store";
import { Product } from "@/typings/PageTypes"
import { Button } from "./ui/button";
import RemoveFromCart from "./RemoveFromCart";

function AddToCart({ product }: { product: Product }) {
  const [cart, addToCart] = useCartStore((state) => [state.cart,
  state.addToCart])

  const ProductCartLength = cart.filter((item) => item.meta.sku === product.meta.sku).length


  const handleAdd = () => {
    addToCart(product);
  }

  if (ProductCartLength) {
    return <div className="flex space-x-5 items-center">
      <RemoveFromCart product={product} />
      <span>{ProductCartLength}</span>
      <Button className="bg-walmart hover:bg-walmart/50" onClick={handleAdd}>+</Button>
    </div>
  }

  return <Button onClick={handleAdd}>AddToCart</Button>;
}

export default AddToCart;
