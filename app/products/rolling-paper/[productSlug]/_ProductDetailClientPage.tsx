"use client";
import React from "react";
import Image from "next/image";
import { Product, products } from "@/app/lib/data";
import ProductCard from "@/app/components/ProductCard";
import PaperTypeSelector from "@/app/components/PaperTypeSelector";

const _ProductDetailClientPage = React.memo(
  ({ productSlug }: { productSlug: string }) => {
    const curentProduct = products.find((p) => p.slug === productSlug);
    const filteredProducts = products.filter((p) => p.slug !== productSlug);
    const whatsappNumber = "+919009111088";
    const whatsappMessage = encodeURIComponent(
      `Hello! I have a question about your ${
        curentProduct && curentProduct.name
      } rolling papers.`
    );
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

    return (
      curentProduct && (
        <div className="">
          <div className="bg-white ">
            <div className="max-w-5xl mx-auto p-6 md:p-10 flex flex-col md:flex-row gap-8">
              <div className="w-full md:w-6/10 relative flex flex-col ">
                <div className="shadow-xl border border-gray-300 w-full flex justify-center items-center">
                  <Image
                    src={curentProduct.image}
                    alt={curentProduct.name}
                    className="md:hidden contain object-fit"
                    width={300}
                    height={300}
                  />
                  <Image
                    src={curentProduct.image}
                    alt={curentProduct.name}
                    className="hidden md:block contain object-fit"
                    width={400}
                    height={400}
                  />
                </div>
                <div className="w-full flex justify-between mt-4">
                  <Image
                    src={curentProduct.image}
                    alt={curentProduct.name}
                    className="lg:hidden contain object-fit border border-gray-300"
                    width={120}
                    height={120}
                  />
                  <Image
                    src={curentProduct.image}
                    alt={curentProduct.name}
                    className="lg:hidden contain object-fit border border-gray-300"
                    width={120}
                    height={120}
                  />
                  <Image
                    src={curentProduct.image}
                    alt={curentProduct.name}
                    className="hidden lg:block contain object-fit border border-gray-300"
                    width={250}
                    height={250}
                  />
                  <Image
                    src={curentProduct.image}
                    alt={curentProduct.name}
                    className="hidden lg:block contain object-fit border border-gray-300"
                    width={250}
                    height={250}
                  />
                </div>
              </div>

              <div className="w-full md:w-4/10">
                <h1 className="text-4xl md:text-5xl font-extrabold text-[#A2D22E] mb-4 leading-tight">
                  {curentProduct.name}
                </h1>
                <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                  {curentProduct.description}
                </p>
                <p className="text-gray-600 text-base mb-8 leading-relaxed">
                  {curentProduct.longDescription}
                </p>

                {curentProduct.features &&
                  curentProduct.features.length > 0 && (
                    <div className="mb-6">
                      <h3 className="text-xl font-semibold mb-3">
                        Key Features:
                      </h3>
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        {curentProduct.features.map((feature, index) => (
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

                {curentProduct.availablePaperTypes.length > 0 && (
                  <PaperTypeSelector
                    availableTypes={curentProduct.availablePaperTypes}
                  />
                )}

                <div className="mt-8">
                  <button className="bg-black text-white font-bold py-3 px-8 text-lg shadow-xl">
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white flex items-center justify-center"
                      aria-label="Chat on WhatsApp"
                    >
                      Inquire About This Product
                    </a>
                  </button>
                </div>
              </div>
            </div>
            <div className="border-1 border-gray-300"></div>
            <div className="max-w-5xl mx-auto p-6 md:p-10 flex flex-col justify-center ">
              <h3 className="text-2xl text-black mb-5">Your next favorite</h3>
              {filteredProducts.length === 0 ? (
                <p className="text-center text-gray-400 text-lg">
                  No products found in this category.
                </p>
              ) : (
                <div className="flex justify-center text-center">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mx-auto">
                    {filteredProducts
                      .slice(0, 3)
                      .map((product: Product, index: number) => {
                        return (
                          <ProductCard
                            key={product.id}
                            product={product}
                            index={index}
                          />
                        );
                      })}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )
    );
  }
);
_ProductDetailClientPage.displayName = "ProductDetailClientPage";

export default _ProductDetailClientPage;
