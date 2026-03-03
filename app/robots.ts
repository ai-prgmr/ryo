import { MetadataRoute } from "next";

export const dynamic = "force-static";

export const baseUrl = "https://www.ryopapers.com";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
        },
        sitemap: `${baseUrl}/sitemap.xml`,
    };
}
