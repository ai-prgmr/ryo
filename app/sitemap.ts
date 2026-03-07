import { MetadataRoute } from "next";
import { products } from "@/app/lib/data";

export const dynamic = "force-static";

export const baseUrl = "https://ryopapers.com";

export default function sitemap(): MetadataRoute.Sitemap {
    const staticRoutes: MetadataRoute.Sitemap = [
        "",
        "/about-us",
        "/contact",
        // "/contract-manufacturing",
        // "/csr",
        "/custom-printing",
        "/products/rolling-paper",
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: route === "" ? 1 : 0.8,
    }));

    const productRoutes: MetadataRoute.Sitemap = products.map((product) => ({
        url: `${baseUrl}/products/${product.categorySlug}/${product.slug}`,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: 0.6,
    }));

    // const machineRoutes: MetadataRoute.Sitemap = machines.map((machine) => ({
    //     url: `${baseUrl}/machines/${machine.slug}`,
    //     lastModified: new Date(),
    //     changeFrequency: "weekly" as const,
    //     priority: 0.7,
    // }));

    return [...staticRoutes, ...productRoutes];
}
