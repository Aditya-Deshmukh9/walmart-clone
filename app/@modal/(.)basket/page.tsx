"use client"

import Basket from "@/components/Basket";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { useCartStore } from "@/store";
import { useRouter } from "next/navigation";


function BasketInterseption() {
    const router = useRouter()
    const cart = useCartStore((state) => state.cart)

    function onDismiss() {
        router.back();
    }


    return (
        <Dialog
            open
            onOpenChange={(isOpen) => {
                if (!isOpen) {
                    onDismiss();
                }
            }}
        >
            <DialogContent className="h-4/5 w-full overflow-x-hidden overflow-scroll max-w-3xl">
                <DialogHeader>
                    <DialogTitle>Basket</DialogTitle>
                    <DialogDescription >
                        <p className="text-2xl">Contents of your Basket</p>

                        <p className="text-xl sm:text-xs font-light text-black">
                            {cart.length > 0 ? `${cart.length} items` : "My Cart"}
                        </p>
                    </DialogDescription>
                </DialogHeader>
                <Basket />
            </DialogContent>
        </Dialog>

    )
}

export default BasketInterseption 