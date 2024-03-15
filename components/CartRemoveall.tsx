import { useCartStore } from "@/store";
import { Button } from "./ui/button";

function CartRemoveAll() {
    const clearCart = useCartStore((state) => state.clearCart);

    const handleClearCart = () => {
        clearCart();
    };

    return (
        <Button className="mt-5 h-10 bg-red-600 hover:bg-red-600/50" onClick={handleClearCart}>
            Clear All
        </Button>
    );
}

export default CartRemoveAll;
