"use client";
import Link from "next/link";
import Image from "next/image";
import { Product } from "@/app/lib/data";
import { motion } from "framer-motion";
interface ProductCardProps {
  product: Product;
  index: number;
}

function ProductCard({ product, index }: ProductCardProps) {
  return (
    <motion.div
      // Framer Motion animation props
      initial={{ opacity: 0, y: 50 }} // Start invisible and slightly below
      whileInView={{ opacity: 1, y: 0 }} // Animate to fully visible and original position
      transition={{
        duration: 0.7, // Duration of the individual card animation
        delay: index * 0.1, // Stagger delay: each card animates 0.1s after the previous one
        ease: "easeOut",
      }}
    >
      <Link
        href={`/products/${product.categorySlug}/${product.slug}`}
        className="block"
      >
        <div className="max-w-[300px] overflow-hidden bg-[#F6F6F6] rounded-lg p-4">
          <div className=" relative max-w-sm bg-white h-48 flex items-center justify-center overflow-hidden mx-auto mt-2 rounded-lg">
            {" "}
            {/* Fixed height for consistency */}
            <Image
              src={product.image}
              alt={product.name}
              width={200}
              height={200}
              className="p-8" // Padding inside the image container, hover effect
            />
          </div>
          <div className="p-4">
            <h3 className="text-xl font-semibold text-gray-700 mb-2 truncate text-center">
              {product.name}
            </h3>
            <p className="text-[#09192f] text-md leading-relaxed line-clamp-2 text-center">
              {product.description}
            </p>
            <div className="mt-4">
              <button className="bg-black text-white uppercase py-2 px-4 rounded-lg w-full shadow-md text-center justify-center flex items-center mx-auto">
                View Details
              </button>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default ProductCard;
