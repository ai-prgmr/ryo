import { products, Product } from "@/app/lib/data";
import ProductCard from "@/app/components/ProductCard";
function RollingPaperCategoryPage() {
  // `params.categorySlug` would be 'rolling-paper' in this case due to file structure.
  const filteredProducts = products.filter(
    (product: Product) => product.categorySlug === "rolling-paper" // Directly filter for 'rolling-paper'
  );
  const backgroundColors = [
    "#63E6BE", // Original green/teal
    "#74C0FC", // Original light blue
    "#FFD43B", // Original yellow
    "#E599F7", // Original light purple/pink
    "#FFFACD", // New: Light Pastel Yellow (Lemon Chiffon)
    "#FFC0CB", // New: Light Pink (Pink)
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-extrabold text-yellow-500 mb-10 text-center capitalize">
        Premium Rolling Papers
      </h1>

      {filteredProducts.length === 0 ? (
        <p className="text-center text-gray-400 text-lg">
          No products found in this category.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product: Product, index: number) => {
            const bgColor = backgroundColors[index % backgroundColors.length];
            return (
              <ProductCard
                key={product.id}
                product={product}
                index={index}
                bgColor={bgColor}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
export default RollingPaperCategoryPage;
