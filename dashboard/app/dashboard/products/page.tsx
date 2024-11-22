import { listProducts } from "@/api/products";
import ProductListItem from "./ProductListItem";

export default async function ProductsPage() {
  const products = await listProducts();
  console.log('on the server');
  return (
    <div className="flex flex-row flex-wrap gap-4 max-w-[1400px] mx-auto w-full">
      {products.map((product) => (
        <ProductListItem product={product} key={product.id}/>
      ))}
    </div>
  );
}
