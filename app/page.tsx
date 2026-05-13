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
import StatsSection from "./components/StatsSection";
import FaqSection from "./components/FaqSection";
import Script from "next/script";


export const metadata: Metadata = {
  title: "Roll your Own - Custom Rolling Papers & OEM Manufacturing",
  description:
    "Explore our premium rolling papers, custom rolling papers printing services, and contract rolling papers manufacturing solutions for your brand",
  keywords: [
    "ryo rolling papers",
    "custom rolling papers printing",
    "contract rolling papers manufacturing",
    "tobacco industry",
    "premium rolling papers",
    "bespoke rolling papers printing",
  ],
  alternates: {
    canonical: "https://ryopapers.com",
  },
  openGraph: {
    title: "Roll your Own - Custom Rolling Papers & Contract/OEM Manufacturing",
    description: "Explore our premium rolling papers, custom rolling papers printing services, and contract rolling papers manufacturing solutions for your brand",
    url: "https://ryopapers.com",
    type: "website",
    images: [
      {
        url: "https://ryopapers.com/images/ryopapers-final-logo.png",
        width: 1200,
        height: 630,
        alt: "Roll your Own - Custom Rolling Papers & Contract/OEM Manufacturing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Roll your Own - Custom Rolling Papers & Contract Manufacturing",
    description: "Explore our premium rolling papers, custom rolling papers printing services, and contract rolling papers manufacturing solutions for your brand",
  },
};

// Organization schema is now global in layout.tsx


const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://ryopapers.com/#webpage",
  "url": "https://ryopapers.com",
  "name": "Roll your Own - Custom Rolling Papers & OEM Manufacturing",
  "description": "Explore our premium rolling papers, custom rolling papers printing services, and contract rolling papers manufacturing solutions for your brand",
  "publisher": { "@id": "https://ryopapers.com/#organization" }
};

// Static schemas are moved or updated to dynamic versions inside the component



export default function Home() {
  const customImages = ["/images/4.jpeg"];

  for (let i = 4; i <= 36; i++) {
    customImages.push(`/images/${i}.jpeg`);
  }

  const filteredProducts = products.filter(
    (product: Product) => product.categorySlug === "rolling-paper"
  );

  // Dynamic Schemas
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Our Premium Rolling Papers",
    "numberOfItems": filteredProducts.length,
    "itemListElement": filteredProducts.map((product, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Product",
        "name": product.name,
        "description": product.description,
        "image": `https://ryopapers.com${product.image}`,
        "url": `https://ryopapers.com/products/rolling-paper/${product.slug}`,
        "brand": {
          "@type": "Brand",
          "name": "RYOPAPERS"
        },
        "offers": {
          "@type": "Offer",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock"
        }
      }
    }))
  };

  const productSchemas = filteredProducts.map((product) => ({
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "description": product.description,
    "image": `https://ryopapers.com${product.image}`,
    "brand": {
      "@type": "Brand",
      "name": "RYOPAPERS"
    },
    "url": `https://ryopapers.com/products/rolling-paper/${product.slug}`,
    "sku": product.id,
    "offers": {
      "@type": "Offer",
      "url": `https://ryopapers.com/products/rolling-paper/${product.slug}`,
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "RYOPAPERS"
      }
    }
  }));


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
  const textColor = "text-text";

  return (
    <>
      <Script
        id="home-webpage-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />

      <Script
        id="home-itemlist-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      {productSchemas.map((schema, idx) => (
        <Script
          key={idx}
          id={`home-product-schema-${idx}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}


      <div className="flex flex-col items-center justify-center min-h-screen  text-gray-200">
        {/* Hero Section */}
        <div className="relative w-full aspect-[9/16] md:aspect-video">
          <Image
            src="/Banner-mobile.jpg"
            alt="Custom rolling papers in king size, 1¼ and rolled cones — RYO Papers"
            fill={true}
            className="md:hidden"
            priority={true}
            style={{ objectFit: "cover" }}
          />
          <Image
            src="/banner-web.jpg"
            alt="Custom rolling papers in king size, 1¼ and rolled cones — RYO Papers"
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
                <h3 className="font-display text-lg sm:text-xl md:text-3xl text-brand mb-6 text-center font-semibold">
                  Tailored Solutions for Your Brand
                </h3>
                <p
                  className={`${textColor} dark:text-ink text-lg md:text-xl leading-relaxed text-center mb-6 mx-auto`}
                >
                  From standard requests to complex challenges, we've got you covered. Working with RYO Papers feels more like a dedicated collaboration than a one-off transaction.
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

                      <h4 className="font-display text-2xl font-black text-brand mb-2 text-center">
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
        <div className="w-full bg-brand mx-auto px-4 py-16 gap-y-4">
          <h2 className="font-display text-[clamp(32px,4vw,48px)] mb-10 text-ink text-center capitalize">
            Premium <br />
            <span className="text-[clamp(48px,6vw,72px)] text-ink uppercase font-black">
              Rolling
            </span>{" "}
            <span className="text-[clamp(48px,6vw,72px)] text-cream-50 uppercase font-black">
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
                <h2 className="font-display text-[clamp(32px,4vw,48px)] mb-10 text-ink text-center capitalize">
                  Build <br />
                  <span className="text-[clamp(48px,6vw,72px)] text-ink uppercase font-black">
                    YOUR
                  </span>{" "}
                  <span className="text-[clamp(48px,6vw,72px)] text-brand uppercase font-black">
                    BRAND
                  </span>
                </h2>
                <BuildyourBrand />
                <Link
                  href="/custom-rolling-papers"
                  className="btn btn-primary btn-lg mt-8 flex mx-auto w-fit"
                >
                  Start Building
                </Link>
              </div>

              {/* Right Image Placeholder */}
              <div className="w-full relative">
                <BackgroundCarousel
                  images={customImages}
                  width="max-w-lg"
                  inset="false"
                />
              </div>
            </section>
          </div>
          {/* Stats Section */}
          <StatsSection />
          {/* Testimonial Carousel Section */}
          <section className=" bg-white">
            <div className="container mx-auto">
              <TestimonialCarousel />
            </div>
          </section>
          {/* Featured Blogs */}
          <section className="py-12 bg-gray-50">
            <h2 className="font-display text-3xl font-bold text-center text-muted mb-8">Featured <span className="text-brand italic">Articles</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
                <h3 className="text-xl font-semibold mb-2 text-[#A2D22E]">Private Label Rolling Papers</h3>
                <p className="text-gray-600 mb-4">Learn how to create your own branded rolling papers with our OEM services.</p>
                <Link href="/blogs/private-label-rolling-papers" className="text-[#A2D22E] hover:underline">
                  Read more →
                </Link>
              </div>
              <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
                <h3 className="text-xl font-semibold mb-2 text-[#A2D22E]">How to Start a Rolling Paper Brand</h3>
                <p className="text-gray-600 mb-4">Step‑by‑step guide for founders launching their own rolling paper brand.</p>
                <Link href="/blogs/how-to-start-rolling-paper-brand" className="text-[#A2D22E] hover:underline">
                  Read more →
                </Link>
              </div>
            </div>
            <div className="text-center mt-8">
              <Link href="/blogs" className="btn btn-primary btn-lg">
                View All Blogs
              </Link>
            </div>
          </section>
          <FaqSection />

        </div>
      </div>
    </>
  );
}
