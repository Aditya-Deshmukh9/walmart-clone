import { Organic } from "@/typings/SearchTypes"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"

function Product({ product }: { product: Organic }) {
    return (
        <Link href={{
            pathname: "/product",
            query: { url: product.url },
        }}
            className="flex flex-col relative border rounded-md h-full p-5">
            <Image
                src={product.image}
                alt={product.title}
                width={200}
                height={200}
                className="mx-auto"
            />

            <p className="text-xl font-bold">
                ₹
                {typeof product.price.price === 'number' ? (Math.floor(product.price.price * 83)).toLocaleString() : null}
            </p>

            {product.badge && (
                <Badge className="w-fit absolute top-2 right-2">
                    {product.badge}
                </Badge>
            )}

            <p className="font-normal">{product.title}</p>

            {product.rating && (
                <p className="text-yellow-500 text-sm mt-2">
                    {product.rating.rating}
                    <span className="text-gray-600 ml-2">{product.rating.count}</span>
                </p>
            )}
        </Link>
    )
}

export default Product