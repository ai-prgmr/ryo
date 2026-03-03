import { Product } from "@/app/lib/data";

const cleanDescription = (text: string) => text.replace(/"/g, "'");

export const generateProductSchema = (product: Product, baseUrl: string) => {
    const price = "20.00";
    const currency = "INR";
    const availabilityStatus = "InStock";
    const productSchema = {
        "@context": "https://schema.org/",
        "@type": "Product",
        "sku": product.id,
        "name": product.name,
        "image": `${baseUrl}${product.image}`,
        "description": cleanDescription(product.longDescription),
        "brand": {
            "@type": "Brand",
            "name": "RYOPAPERS"
        },
        "offers": {
            "@type": "Offer",
            "url": `${baseUrl}/products/${product.slug}`,
            "priceCurrency": currency,
            "price": price,
            "itemCondition": "https://schema.org/NewCondition",
            "availability": `https://schema.org/${availabilityStatus}`,
            "seller": {
                "@type": "Organization",
                "name": "RYOPAPERS"
            }
        },
    };

    return JSON.stringify(productSchema);
};