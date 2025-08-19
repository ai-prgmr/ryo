import { products } from "@/app/lib/data";
import { notFound } from "next/navigation";
import _ProductDetailClientPage from "./_ProductDetailClientPage";
export async function generateStaticParams() {
  return products.map((product) => ({
    productSlug: product.slug,
  }));
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
