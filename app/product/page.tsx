import fetchProduct from "@/lib/fetchProduct";

type Props = {
    searchParams: {
        url: string;
    }
}

async function Productpage({ searchParams: { url } }: Props) {

    const product = await fetchProduct(url)
    console.log(product);

    return (
        <div>page</div>
    )
}

export default Productpage