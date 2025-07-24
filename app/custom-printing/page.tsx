import Link from "next/link";
import { Factory, Lightbulb, TrendingUp } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import CustomDesign from "../components/CustomDesign";

export const metadata: Metadata = {
  title: "Custom Printing & Contract Manufacturing | Rolling Paper Co.",
  description:
    "Explore our custom printing services for rolling papers and contract manufacturing solutions tailored for the tobacco industry.",
  keywords: [
    "King Size Slim",
    "1 1/4",
    "Rolling Papers Booklets",
    "Crease-free papers",
    "Tips/Filters",
  ],
};
import { products, Product } from "@/app/lib/data";
import ProductCard from "@/app/components/ProductCard";

function CustomPrintingPage() {
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
    <div className="container mx-auto px-4 py-4 bg-white">
      <div className="p-1 text-center">
        <div className="relative py-20 px-4 overflow-hidden min-h-[400px]">
          {/* Background Image */}
          <Image
            src="/ryo/customize.jpeg" // <-- Replace with your actual image path
            alt="Custom Printing Services Background"
            layout="fill"
            objectFit="cover"
            sizes="100vw"
            className="transition-opacity duration-1000 ease-in-out z-[0] "
            priority={true}
          />

          {/* Semi-transparent Overlay (Highly Recommended for Text Readability) */}
          <div className="absolute inset-0 bg-black/80 opacity-90 z-[1]"></div>

          {/* Content Wrapper with higher z-index to appear on top */}
          <div className="relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl uppercase font-extrabold text-[#CCFF00] mb-6 ">
              Launch Your Brand
            </h1>
            <p className="text-xl text-gray-200 max-w-5xl mx-auto mb-10 leading-relaxed font-extrabold">
              Unleash your creativity and establish your brand with our premium
              custom printing services for rolling papers. We bring your unique
              designs to life, ensuring exceptional quality and a distinctive
              identity for your product.
            </p>
          </div>
        </div>
        <div className="container mx-auto py-8">
          {/* <h1 className="text-4xl sm:text-5xl text-[#146EBE] lg:text-6xl font-bold mb-10 text-center capitalize">
            Our Products
          </h1> */}

          {filteredProducts.length === 0 ? (
            <p className="text-center text-gray-400 text-lg">
              No products found in this category.
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product: Product, index: number) => {
                const bgColor =
                  backgroundColors[index % backgroundColors.length];
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
        <div className="py-2 text-center mb-5">
          <CustomDesign />
          <h3 className="text-4xl md:text-5xl font-extrabold text-amber-300 mb-6">
            Partner with us for reliable, high-volume manufacturing that scales
            with your business needs.
          </h3>

          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-amber-600 text-white rounded-lg text-xl font-semibold shadow-xl hover:bg-amber-700 transition-all duration-300 transform hover:scale-105"
          >
            Discuss Your Manufacturing Needs
          </Link>
        </div>
        <h2 className="text-3xl font-bold text-amber-300 mb-8">
          Our Process: Simple & Seamless
        </h2>
        <div className="flex flex-wrap justify-center gap-6 mb-12 text-gray-100">
          <div className="flex flex-col items-center p-4  rounded-xl border border-gray-700 shadow-md w-full sm:w-1/2 md:w-1/4">
            <Lightbulb size={40} className="text-blue-400 mb-3" />
            <span className="font-semibold text-gray-500">
              1. Concept & Design
            </span>
            <p className="text-sm mt-1 text-center text-gray-500">
              Share your ideas and artwork.
            </p>
          </div>
          <div className="flex flex-col items-center p-4  rounded-xl border border-gray-700 shadow-md w-full sm:w-1/2 md:w-1/4">
            <Factory size={40} className="text-green-400 mb-3" />
            <span className="font-semibold text-gray-500">2. Production</span>
            <p className="text-sm mt-1 text-center text-gray-500">
              Precision manufacturing & printing.
            </p>
          </div>
          <div className="flex flex-col items-center p-4  rounded-xl border border-gray-700 shadow-md w-full sm:w-1/2 md:w-1/4">
            <TrendingUp size={40} className="text-purple-400 mb-3" />
            <span className="font-semibold text-gray-500">
              3. Launch & Grow
            </span>
            <p className="text-sm mt-1 text-center text-gray-500">
              Your unique brand enters the market.
            </p>
          </div>
        </div>

        <p className="text-xl text-gray-800 max-w-3xl mx-auto mb-8">
          Ready to make your mark? Contact us today to discuss your custom
          rolling paper project and receive a personalized quote.
        </p>

        <Link
          href="/contact"
          className="inline-flex items-center px-8 py-4 bg-amber-600 text-white rounded-lg text-xl font-semibold shadow-xl hover:bg-amber-700 transition-all duration-300 transform hover:scale-105"
        >
          Get a Custom Printing Quote
        </Link>
      </div>
    </div>
  );
}

export default CustomPrintingPage;
