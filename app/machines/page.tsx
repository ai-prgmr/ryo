import { Metadata } from "next";
import ProductsClient from "@/app/components/ProductsClient";

export const metadata: Metadata = {
  title: "RYO Papers | Precision Equipment",
  description:
    "Explore our core precision rolling paper manufacturing equipment. Industry-leading machinery engineered for excellence and built for reliability.",
};

export default function Products() {
  return <ProductsClient />;
}
