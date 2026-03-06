import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us | RYO Rolling Papers",
    description: "Learn more about RYO Rolling Papers. Low order quantities, real human support, premium finish, and eco-friendly promise.",
    alternates: {
        canonical: "https://ryopapers.com/about-us",
    },
    openGraph: {
        title: "About Us | RYO Rolling Papers",
        description: "Learn more about RYO Rolling Papers. Low order quantities, real human support, premium finish, and eco-friendly promise.",
        url: "https://ryopapers.com/about-us",
    },
    twitter: {
        card: "summary_large_image",
        title: "About Us | RYO Rolling Papers",
        description: "Learn more about RYO Rolling Papers. Low order quantities, real human support, premium finish, and eco-friendly promise.",
    },
};



export default function AboutUsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
