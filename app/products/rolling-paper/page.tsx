import { products, Product } from "@/app/lib/data";
import ProductCard from "@/app/components/ProductCard";
function RollingPaperCategoryPage() {
  // `params.categorySlug` would be 'rolling-paper' in this case due to file structure.
  const filteredProducts = products.filter(
    (product: Product) => product.categorySlug === "rolling-paper" // Directly filter for 'rolling-paper'
  );

  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <h1 className="text-3xl mb-10 text-black text-center uppercase">
        Premium <br />
        <span className="text-6xl text-black uppercase font-extrabold">
          Rolling
        </span>{" "}
        <span className="text-6xl text-[#A2D22E] uppercase font-extrabold">
          Papers
        </span>
      </h1>

      {filteredProducts.length === 0 ? (
        <p className="text-center text-gray-400 text-lg">
          No products found in this category.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto">
          {filteredProducts.map((product: Product, index: number) => {
            return (
              <ProductCard key={product.id} product={product} index={index} />
            );
          })}
        </div>
      )}
    </div>
  );
}
export default RollingPaperCategoryPage;
