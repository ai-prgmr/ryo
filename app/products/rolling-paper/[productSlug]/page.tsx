import { products } from "@/app/lib/data";
import { notFound } from "next/navigation";
import _ProductDetailClientPage from "./_ProductDetailClientPage";
import { Metadata } from "next";

type Props = {
  params: { productSlug: string };
};

export async function generateStaticParams() {
  return products.map((product) => ({
    productSlug: product.slug,
  }));
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // Fetch the product to get the slug/name
  console.log(params)
  const product = products.find((p) => p.slug === params.productSlug);
  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  const baseUrl = "https://ryopapers.com";

  return {
    title: `${product.name} | RYO Papers`, // Page Title
    description: product.description,     // Meta Description

    // 2. THIS IS THE CANONICAL TAG FIX
    alternates: {
      canonical: `${baseUrl}/products/rolling-paper/${product.slug}`,
    },

    // Optional: Open Graph for sharing
    openGraph: {
      title: product.name,
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
