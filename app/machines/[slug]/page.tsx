import { Metadata } from "next";
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

  return {
    title: `${product.name} | RYO Papers`,
    description: product.description,
  };
}

export default async function ProductDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = Object.values(machines).find(
    (m) => m.slug === slug
  ) || Object.values(machines)[0];

  return <ProductDetailClient machine_data={product} />;
}