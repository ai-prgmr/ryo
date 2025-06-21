"use client";
import { use } from "react";
import Image from "next/image";
import { products } from "@/app/lib/data";
import PaperTypeSelector from "@/app/components/PaperTypeSelector";
import { notFound } from "next/navigation";
function ProductDetailPage({
  params,
}: {
  params: Promise<{ productSlug: string }>;
}) {
  const { productSlug } = use(params);

  const product = products.find((p) => p.slug === productSlug);

  if (!product) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-3xl shadow-xl p-6 md:p-10">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="w-full md:w-1/2 relative min-h-[300px] md:min-h-[450px] flex items-center justify-center rounded-xl overflow-hidden shadow-lg border border-amber-300 hover:border-amber-400 transition-all duration-300 transform hover:-translate-y-1">
            <Image
              src={product.image}
              alt={product.name}
              layout="fill"
              objectFit="contain"
              className="rounded-xl"
              onError={(e) => {
                e.currentTarget.src =
                  "https://placehold.co/600x400/2D3748/A0AEC0?text=Image+Error";
              }}
            />
          </div>

          <div className="w-full md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-extrabold text-amber-300 mb-4 leading-tight">
              {product.name}
            </h1>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              {product.description}
            </p>
            <p className="text-gray-400 text-base mb-8 leading-relaxed">
              {product.longDescription}
            </p>

            {product.features && product.features.length > 0 && (
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-amber-300 mb-3">
                  Key Features:
                </h3>
                <ul className="list-disc list-inside text-gray-400 space-y-1">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-check-circle text-green-500 mr-2"
                      >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <path d="m9 11 3 3L22 4" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {product.availablePaperTypes.length > 0 && (
              <PaperTypeSelector availableTypes={product.availablePaperTypes} />
            )}

            <div className="mt-8">
              <button className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-8 rounded-full text-lg shadow-xl transition-all duration-300 transform hover:scale-105">
                Inquire About This Product
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductDetailPage;
