import { machines } from "@/app/lib/machineData";
import ProductDetailClient from "../../components/ProductDetailClient";

// Convert machines object keys into static params
export function generateStaticParams() {
  return Object.values(machines).map((m) => ({
    slug: m.slug,
  }));
}
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = Object.values(machines).find(
    (m) => m.slug === slug
  ) || Object.values(machines)[0];

  const baseUrl = "https://www.ryopapers.com";

  return {
    title: `${product.name} | RYO Papers`,
    description: product.description,
    alternates: {
      canonical: `${baseUrl}/machines/${product.slug}`,
    },
    openGraph: {
      title: `${product.name} | RYO Papers`,
      description: product.description,
      url: `${baseUrl}/machines/${product.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.name} | RYO Papers`,
      description: product.description,
    },
  };
}

export default async function ProductDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = Object.values(machines).find(
    (m) => m.slug === slug
  ) || Object.values(machines)[0];

  return <ProductDetailClient machine_data={product} />;
}