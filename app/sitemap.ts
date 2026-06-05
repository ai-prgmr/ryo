import { MetadataRoute } from "next";
import { products } from "@/app/lib/data";
import { getAllBlogs } from "@/app/lib/blogs";
import { getAllPerspectives } from "@/app/lib/perspectives";

export const dynamic = "force-static";

export const baseUrl = "https://ryopapers.com";

export default function sitemap(): MetadataRoute.Sitemap {
    const staticRoutes: MetadataRoute.Sitemap = [
        "",
        "/about-us",
        "/contact",
        "/custom-rolling-papers",
        "/blogs",
        "/perspectives",
        "/rolling-paper-manufacturer",
        "/products/rolling-paper",
        "/products/cellulose-rolling-paper",
        "/products/flax-rolling-paper",
        "/products/hemp-rolling-paper",
        "/products/rice-rolling-paper",
        "/products/wood-pulp-rolling-paper",
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

    const blogs = getAllBlogs();

    const parseDate = (dateStr: string) => {
        if (!dateStr) return new Date();
        // Remove st, nd, rd, th and clean up commas to make it parseable by Date
        const cleanDate = dateStr.replace(/(\d+)(st|nd|rd|th)/, '$1').replace(/,/g, ' ');
        const date = new Date(cleanDate);
        return isNaN(date.getTime()) ? new Date() : date;
    };

    const blogRoutes: MetadataRoute.Sitemap = blogs.map((blog) => ({
        url: `${baseUrl}/blogs/${blog.slug}`,
        lastModified: parseDate(blog.last_updated),
        changeFrequency: "weekly" as const,
        priority: 0.7,
    }));

    const perspectives = getAllPerspectives();

    const perspectiveRoutes: MetadataRoute.Sitemap = perspectives.map((p) => ({
        url: `${baseUrl}/perspectives/${p.slug}`,
        lastModified: parseDate(p.last_updated),
        changeFrequency: "weekly" as const,
        priority: 0.7,
    }));

    return [...staticRoutes, ...productRoutes, ...blogRoutes, ...perspectiveRoutes];
}
