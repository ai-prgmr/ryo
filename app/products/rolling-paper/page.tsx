import { products, Product } from "@/app/lib/data";
import ProductCard from "@/app/components/ProductCard";
function RollingPaperCategoryPage({}: { params: { categorySlug: string } }) {
  // `params.categorySlug` would be 'rolling-paper' in this case due to file structure.
  const filteredProducts = products.filter(
    (product: Product) => product.categorySlug === "rolling-paper" // Directly filter for 'rolling-paper'
  );

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-extrabold text-amber-600 mb-10 text-center capitalize">
        Premium Rolling Papers
      </h1>

      {filteredProducts.length === 0 ? (
        <p className="text-center text-gray-400 text-lg">
          No products found in this category.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product: Product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
export default RollingPaperCategoryPage;
