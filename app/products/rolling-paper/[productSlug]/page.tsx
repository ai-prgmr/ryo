import { products, Product } from "@/app/lib/data";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import ProductCard from "@/app/components/ProductCard";
import PaperTypeSelector from "@/app/components/PaperTypeSelector";
import { generateProductSchema } from "@/app/lib/seo";

type Props = {
  params: Promise<{ productSlug: string }>;
};

export async function generateStaticParams() {
  return products.map((product) => ({
    productSlug: product.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const product = products.find((p) => p.slug === resolvedParams.productSlug);
  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  const baseUrl = "https://ryopapers.com";

  return {
    title: `${product.name} rolling papers | RYO Papers`,
    description: product.description,
    alternates: {
      canonical: `${baseUrl}/products/rolling-paper/${product.slug}`,
    },
    openGraph: {
      title: `${product.name} | RYO Papers`,
      description: product.description,
      url: `${baseUrl}/products/rolling-paper/${product.slug}`,
      images: [
        {
          url: `${baseUrl}${product.image}`,
          width: 800,
          height: 600,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.name} | RYO Papers`,
      description: product.description,
      images: [`${baseUrl}${product.image}`],
    },
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { productSlug } = await params;
  const product = products.find((p) => p.slug === productSlug);

  if (!product) {
    notFound();
  }

  const filteredProducts = products.filter((p) => p.slug !== productSlug);
  const whatsappNumber = "+919009111088";
  const whatsappMessage = encodeURIComponent(
    `Hello! I have a question about your ${product.name} rolling papers.`
  );
  const BASE_URL = "https://ryopapers.com";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
  const jsonLd = generateProductSchema(product as Product, BASE_URL);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://ryopapers.com" },
      { "@type": "ListItem", "position": 2, "name": "Rolling Paper", "item": "https://ryopapers.com/products/rolling-paper" },
      { "@type": "ListItem", "position": 3, "name": product.name, "item": `${BASE_URL}/products/rolling-paper/${productSlug}` }
    ]
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${BASE_URL}/products/rolling-paper/${productSlug}/#webpage`,
    "url": `${BASE_URL}/products/rolling-paper/${productSlug}`,
    "name": `${product.name} rolling papers | RYO Papers`,
    "description": product.description,
    "publisher": { "@id": "https://ryopapers.com/#organization" }
  };

  return (
    <>
      <Script
        id="product-detail-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="product-detail-webpage-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <Script
        id="product-detail-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd }}
      />

      {/* ── BREADCRUMB ── */}
      <nav className="bg-bg border-b border-border py-3.5 px-[clamp(20px,5vw,80px)] text-[12px] text-muted flex gap-2 items-center" aria-label="breadcrumb">
        <Link href="/" className="text-brand-deep hover:underline">Home</Link>
        <span className="text-[rgba(26,22,18,0.1)]" aria-hidden="true">›</span>
        <Link href="/products/rolling-paper" className="text-brand-deep hover:underline">Rolling Paper</Link>
        <span className="text-[rgba(26,22,18,0.1)]" aria-hidden="true">›</span>
        <span>{product.name}</span>
      </nav>

      <div className="bg-white">
        <div className="max-w-5xl mx-auto p-6 md:p-10 flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-6/10 relative flex flex-col">
            <div className="shadow-xl border border-gray-300 w-full flex justify-center items-center">
              <Image
                src={product.image}
                alt={product.name}
                className="md:hidden contain object-fit"
                width={300}
                height={300}
                priority
              />
              <Image
                src={product.image}
                alt={product.name}
                className="hidden md:block contain object-fit"
                width={400}
                height={400}
                priority
              />
            </div>
            <div className="w-full flex justify-between mt-4">
              <Image
                src={product.image}
                alt={product.name}
                className="lg:hidden contain object-fit border border-gray-300"
                width={120}
                height={120}
              />
              <Image
                src={product.image}
                alt={product.name}
                className="lg:hidden contain object-fit border border-gray-300"
                width={120}
                height={120}
              />
              <Image
                src={product.image}
                alt={product.name}
                className="hidden lg:block contain object-fit border border-gray-300"
                width={250}
                height={250}
              />
              <Image
                src={product.image}
                alt={product.name}
                className="hidden lg:block contain object-fit border border-gray-300"
                width={250}
                height={250}
              />
            </div>
          </div>

          <div className="w-full md:w-4/10">
            <h1 className="font-display text-4xl md:text-5xl font-black text-brand mb-4 leading-tight">
              {product.name}
            </h1>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              {product.description}
            </p>
            <p className="text-gray-600 text-base mb-8 leading-relaxed">
              {product.longDescription}
            </p>

            {product.features && product.features.length > 0 && (
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3">Key Features:</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
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
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-lg w-fit"
                aria-label="Chat on WhatsApp"
              >
                Inquire About This Product
              </a>
            </div>
          </div>
        </div>

        <div className="border-1 border-gray-300"></div>

        <div className="max-w-5xl mx-auto p-6 md:p-10 flex flex-col justify-center">
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
                  .map((p: Product, index: number) => (
                    <ProductCard key={p.id} product={p} index={index} />
                  ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
