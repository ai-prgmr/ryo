"use client";
import Link from "next/link";
//import Image from "next/image";
import { Product } from "@/app/lib/data";
interface ProductCardProps {
  product: Product;
}

function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      href={`/products/${product.categorySlug}/${product.slug}`}
      className="block"
    >
      <div className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border-3 border-amber-200 hover:border-amber-400 transform hover:-translate-y-1">
        <div className="p-4">
          <h3 className="text-xl font-semibold text-gray-700 mb-2 truncate text-center">
            {product.name}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed line-clamp-2 text-center">
            {product.description}
          </p>
          <div className="mt-4">
            <button className="bg-transparent hover:bg-amber-700 hover:text-gray-200 text-gray-600 font-bold py-2 px-4 rounded-lg transition-colors duration-200 w-1/2 shadow-md text-center justify-center flex items-center mx-auto">
              View Details
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
