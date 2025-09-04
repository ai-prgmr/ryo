import React from "react";
import Link from "next/link";
import HeroCard from "./components/HeroCard";
import { Metadata } from "next";
import BackgroundCarousel from "./components/BackgroundCarousel";
import ProductCard from "./components/ProductCard";
import { products, Product } from "@/app/lib/data";
import BuildyourBrand from "./components/BuildYourBrand";
import TestimonialCarousel from "./components/TestimonialCarousel";
import {
  faBoxesStacked,
  faHeadset,
  faStar,
  faLeaf,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
export const metadata: Metadata = {
  title: "Roll your Own - Custom Rolling Papers & Contract Manufacturing",
  description:
    "Explore our premium rolling papers, custom printing services, and contract manufacturing solutions for rolling your own papers",
  keywords: [
    "rolling papers",
    "custom printing",
    "contract manufacturing",
    "tobacco industry",
    "premium rolling papers",
    "bespoke printing",
  ],
};

export default function Home() {
  const customImages = ["/images/3.jpeg"];

  for (let i = 3; i <= 35; i++) {
    customImages.push(`/images/${i}.jpeg`);
  }
  const filteredProducts = products.filter(
    (product: Product) => product.categorySlug === "rolling-paper" // Directly filter for 'rolling-paper'
  );

  const benefitsData = [
    {
      icon: faBoxesStacked,
      image: "/images/01.png",
      title: "Low Order Quantities",
      description:
        "Every brand starts somewhere – we support your growth journey.",
    },
    {
      icon: faHeadset,
      image: "/images/02.png",
      title: "Real Human Support",
      description:
        "Talk to people, not bots, for genuine guidance and assistance.",
    },
    {
      icon: faStar,
      image: "/images/03.png",
      title: "Premium Finish",
      description:
        "Beautiful, high-quality packaging with a professional touch.",
    },
    {
      icon: faLeaf,
      image: "/images/04.png",
      title: "Eco-Friendly Promise",
      description: "Committed to sustainability, true to your brand's vibe.",
    },
  ];
  const textColor = "text-[#173153]";

  return (
    <div className="flex flex-col items-center justify-center min-h-screen  text-gray-200">
      {/* Hero Section */}
      <div className="relative w-full aspect-[9/16] md:aspect-video">
        <Image
          src="/Banner-mobile.jpg"
          alt="Mobile Banner"
          fill={true}
          className="md:hidden"
          priority={true}
          style={{ objectFit: "cover" }}
        />
        <Image
          src="/banner-web.jpg"
          alt="Web Banner"
          className="hidden md:block"
          priority={true}
          fill={true}
          style={{ objectFit: "cover" }}
        />
      </div>

      <div className="container mx-auto px-12 lg:px-8">
        {/* Main Heading & Introduction */}
        <HeroCard />
        <div className="flex justify-center items-center mb-8">
          <Image
            src="/branding-cutout.png"
            alt="RYO-branding"
            width={600}
            sizes="100vw"
            className="object-fit contain"
            height={400}
          />
        </div>

        <section className="">
          <div className="max-w-3xl mx-auto">
            <div className="mt-10">
              <h3 className="text-lg sm:text-xl md:text-2xl text-gray-900 mb-6 text-center">
                Work With Us
              </h3>
              <p
                className={`${textColor} dark:text-gray-900 text-lg md:text-xl leading-relaxed text-center mb-6 mx-auto`}
              >
                Working with RYO Papers feels more like a collaboration than a
                transaction.
              </p>

              <p
                className={`${textColor} text-lg md:text-xl leading-relaxed mb-8 mx-auto text-center`}
              >
                We know what it’s like to have an idea and not know where to
                start. That’s why we’ve made the process simple, flexible, and
                friendly. Whether you want 500 packs or 50,000 — we’ve got you.
              </p>

              {/* New Grid for Benefits */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 text-center">
                {benefitsData.map((benefit, index) => (
                  <div key={index} className="">
                    <Image
                      src={benefit.image}
                      alt={benefit.title}
                      width={90}
                      height={90}
                      className="rounded-lg flex mx-auto"
                    />

                    <h4 className="text-2xl font-extrabold text-[#A2D230] mb-2 text-center">
                      {benefit.title}
                    </h4>
                    <p className="text-md text-gray-700 leading-snug text-center">
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="w-full bg-[#A2D22E] mx-auto px-4 py-16 gap-y-4">
        <h2 className="text-3xl mb-10 text-black text-center capitalize">
          Premium <br />
          <span className="text-6xl text-black uppercase font-extrabold">
            Rolling
          </span>{" "}
          <span className="text-6xl text-white uppercase font-extrabold">
            Papers
          </span>
        </h2>

        {filteredProducts.length === 0 ? (
          <p className="text-center text-gray-400 text-lg">
            No products found in this category.
          </p>
        ) : (
          <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mx-auto">
              {filteredProducts.map((product: Product, index: number) => {
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
      {/* Main Content Sections */}
      <div className=" py-4 md:py-8 ">
        {/* Build your own Section */}
        <div className=" bg-white text-white flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8 gap-y-4">
          {/* Hero Section */}

          <section className="container mx-auto flex flex-col items-center justify-between gap-12 lg:gap-10">
            {/* Left Content Area */}

            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-3xl mb-10 text-black text-center capitalize">
                Build <br />
                <span className="text-6xl text-black uppercase font-extrabold">
                  YOUR
                </span>{" "}
                <span className="text-6xl text-[#A2D22E] uppercase font-extrabold">
                  BRAND
                </span>
              </h2>
              <BuildyourBrand />
              <button className="mt-8 px-6 py-3 rounded-lg text-black bg-[#A2D22E] shadow-md text-lg font-bold flex mx-auto">
                <Link
                  href="/custom-printing"
                  className="flex items-center justify-center"
                >
                  Start Building
                </Link>
              </button>
            </div>

            {/* Right Image Placeholder */}
            <div className="w-full relative">
              <BackgroundCarousel
                images={customImages}
                width="max-w-md"
                inset="false"
              />
            </div>
          </section>
        </div>

        {/* Testimonial Carousel Section */}
        <section className=" bg-white">
          <div className="container mx-auto">
            <TestimonialCarousel />
          </div>
        </section>
      </div>
    </div>
  );
}
