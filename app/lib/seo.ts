import { Product } from "@/app/lib/data";

const cleanDescription = (text: string) => text.replace(/"/g, "'");

export const generateProductSchema = (product: Product, baseUrl: string) => {
    const price = "20.00";
    const currency = "USD";
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
            "priceValidUntil": new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split("T")[0],
            "itemCondition": "https://schema.org/NewCondition",
            "availability": `https://schema.org/${availabilityStatus}`,
            "hasMerchantReturnPolicy": {
                "@type": "MerchantReturnPolicy",
                "applicableCountry": "US",
                "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
                "merchantReturnDays": "30",
                "returnMethod": "https://schema.org/ReturnByMail",
                "returnFees": "https://schema.org/RestockingFees",
                "restockingFee": {
                    "@type": "MonetaryAmount",
                    "value": "50.00",
                    "currency": currency
                }
            },
            "shippingDetails": {
                "@type": "OfferShippingDetails",
                "shippingRate": {
                    "@type": "MonetaryAmount",
                    "value": "70",
                    "currency": currency
                },
                "shippingDestination": {
                    "@type": "DefinedRegion",
                    "addressCountry": "US"
                },
                "deliveryTime": {
                    "@type": "ShippingDeliveryTime",
                    "handlingTime": {
                        "@type": "QuantitativeValue",
                        "minValue": 0,
                        "maxValue": 1,
                        "unitCode": "DAY"
                    },
                    "transitTime": {
                        "@type": "QuantitativeValue",
                        "minValue": 5,
                        "maxValue": 7,
                        "unitCode": "DAY"
                    }
                }
            },
            "seller": {
                "@type": "Organization",
                "name": "RYOPAPERS"
            }
        },
    };

    return JSON.stringify(productSchema);
};