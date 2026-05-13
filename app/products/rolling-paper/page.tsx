import { products, Product } from "@/app/lib/data";
import ProductCard from "@/app/components/ProductCard";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Premium Rolling Papers | RYO Papers",
  description: "Shop our premium collection of rolling papers, including King Size Slim and 1 ¼ with Filters, Block King Size, Block 1 ¼, and pre-rolled Cones.",
  alternates: {
    canonical: "https://ryopapers.com/products/rolling-paper",
  },
  openGraph: {
    title: "Premium Rolling Papers | RYO Papers",
    description: "Shop our premium collection of rolling papers, including King Size Slim and 1 ¼ with Filters, Block King Size, Block 1 ¼, and pre-rolled Cones.",
    url: "https://ryopapers.com/products/rolling-paper",
    type: "website",
    images: [
      {
        url: "https://ryopapers.com/images/ryopapers-final-logo.png",
        width: 1200,
        height: 630,
        alt: "Roll your Own - Custom Rolling Papers & Contract Manufacturing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shop our premium collection of rolling papers, including King Size Slim and 1 ¼ with Filters, Block King Size, Block 1 ¼, and pre-rolled Cones.",
    description: "Browse our selection of premium rolling papers.",
  },
};

// Organization schema is now global in layout.tsx


const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://ryopapers.com/products/rolling-paper/#webpage",
  "url": "https://ryopapers.com/products/rolling-paper",
  "name": "Premium Rolling Papers | RYO Papers",
  "description": "Shop our premium collection of rolling papers, including King Size Slim and 1 ¼ with Filters, Block King Size, Block 1 ¼, and pre-rolled Cones.",
  "publisher": { "@id": "https://ryopapers.com/#organization" }
};

function RollingPaperCategoryPage() {
  // `params.categorySlug` would be 'rolling-paper' in this case due to file structure.
  const filteredProducts = products.filter(
    (product: Product) => product.categorySlug === "rolling-paper" // Directly filter for 'rolling-paper'
  );

  // Dynamic Schemas
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Premium Rolling Papers Collection",
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

  return (
    <>
      <Script
        id="category-webpage-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />

      <Script
        id="category-itemlist-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      {productSchemas.map((schema, idx) => (
        <Script
          key={idx}
          id={`category-product-schema-${idx}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <div className="max-w-5xl mx-auto px-4 py-16">
        <h1 className="text-3xl mb-10 text-black text-center uppercase">
          Premium <br />
          <span className="text-6xl text-black uppercase font-extrabold">
            Rolling
          </span>{" "}
          <span className="text-6xl text-brand uppercase font-extrabold">
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
    </>
  );
}

export default RollingPaperCategoryPage;

