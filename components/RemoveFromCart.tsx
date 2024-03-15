"use client"

import { useCartStore } from "@/store"
import { Button } from "./ui/button";
import { Product } from "@/typings/PageTypes";

function RemoveFromCart({ product }: { product: Product }) {
    const removeFromCart = useCartStore((state) => state.removeFromCart
    )

    const handleRemove = () => {
        removeFromCart(product)
    }

    return (
        <Button className="bg-walmart hover:bg-walmart/50" onClick={handleRemove}>-</Button>
    )
}

export default RemoveFromCart