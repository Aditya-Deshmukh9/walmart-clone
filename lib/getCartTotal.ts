import { Product } from "@/typings/PageTypes";

export function getCartTotal(products: Product[]) {
  const total = products.reduce(
    (acc: number, currentProduct: Product) =>
      acc +
      (typeof currentProduct.price === "number" ? currentProduct.price : 0),
    0
  );

  const formattedTotal = `₹ ${Math.floor(total * 83).toLocaleString()}`;

  return formattedTotal;
}
