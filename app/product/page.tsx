import fetchProduct from "@/lib/fetchProduct";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import AddToCart from "@/components/AddToCart"

import { Badge } from "@/components/ui/badge";


type Props = {
    searchParams: {
        url: string;
    }
}

async function Productpage({ searchParams: { url } }: Props) {

    const product = await fetchProduct(url)
    console.log(product);

    if (!product) return notFound();

    return (
        <div className="p-4 lg:p-4 flex flex-col lg:flex-row w-full">

            <div className="hidden lg:inline space-y-4">
                {product.images.map((image, i) => (
                    <Image
                        key={image}
                        src={image}
                        alt={product.title + " " + i}
                        width={90}
                        height={90}
                        className="border rounded-sm"
                    />
                ))}

            </div>
            <Carousel
                opts={{
                    loop: true,
                }}
                className="w-3/5 mb-10 lg:mb-0 lg:w-full self-start flex items-center max-w-xl mx-auto lg:mx-20"
            >
                <CarouselContent>
                    {

                        product.images.map((image, i) => (
                            <CarouselItem key={i}>
                                <div className="p-1">
                                    <div className="flex aspect-square items-center justify-center p-2 relative">
                                        <Image
                                            key={image}
                                            src={image}
                                            alt={product.title + " " + i}
                                            width={400}
                                            height={400}

                                        />
                                    </div>
                                </div>

                            </CarouselItem>
                        ))
                    }
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
            <div className="flex-1 border rou w-full p-5 space-y-5">
                <h1 className="text-3xl font-bold">{product.title}</h1>

                <div className="space-x-2">
                    {product.breadcrumbs.map((breadcrumb, i) => (
                        <Badge
                            key={breadcrumb + i}
                            className={breadcrumb}
                            variant="outline"
                        >
                            {breadcrumb}
                        </Badge>
                    ))}
                </div>

                <div className="py-5" dangerouslySetInnerHTML={{ __html: product.description }}>

                </div>

                {
                    product.rating && (
                        <p className="text-yellow-500 px-2 rounded-md inline-block border text-sm">
                            {product.rating.rating} *
                            <span className="text-gray-600 ml-2">
                                ({product.rating.count} reviews)
                            </span>
                        </p>
                    )
                }

                <p className="text-2xl font-bold mt-2">
                    ₹
                    {typeof product.price === 'number' ? (Math.floor(product.price * 83)).toLocaleString() : null}
                </p>

                <AddToCart product={product} />

                <hr />

                <h3 className="font-bold text-2xl pt-10">Specifications</h3>

                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="font-semibold text-[18px]">Specifications</TableHead >
                            <TableHead className="font-semibold text-[18px]">Value</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {product.specifications.map((spec) => (
                            <TableRow key={spec.key}>
                                <TableCell className="font-bold">{spec.key}</TableCell>
                                <TableCell>{spec.value}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

            </div>
        </div>
    )
}

export default Productpage