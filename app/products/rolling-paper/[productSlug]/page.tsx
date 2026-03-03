import { products } from "@/app/lib/data";
import { notFound } from "next/navigation";
import _ProductDetailClientPage from "./_ProductDetailClientPage";
import { Metadata } from "next";

type Props = {
  params: Promise<{ productSlug: string }>;
};

export async function generateStaticParams() {
  return products.map((product) => ({
    productSlug: product.slug,
  }));
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // Fetch the product to get the slug/name
  const resolvedParams = await params;
  const product = products.find((p) => p.slug === resolvedParams.productSlug);
  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  const baseUrl = "https://ryopapers.com";

  return {
    title: `${product.name} rolling papers | RYO Papers`, // Page Title
    description: product.description,     // Meta Description

    // 2. THIS IS THE CANONICAL TAG FIX
    alternates: {
      canonical: `${baseUrl}/products/rolling-paper/${product.slug}`,
    },

    // Optional: Open Graph for sharing
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

interface ProductDetailPageProps {
  params: Promise<{ productSlug: string }>;
}

export default async function ProductDetailPage({
  params,
}: ProductDetailPageProps) {
  const resolvedParams = await params;
  const { productSlug } = resolvedParams;

  const product = products.find((p) => p.slug === productSlug);

  if (!product) {
    notFound();
  }

  return <_ProductDetailClientPage productSlug={productSlug} />;
}
