import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us | RYO Papers",
    description: "Get in touch with RYO Papers for any inquiries regarding our premium rolling papers, custom printing services, or contract manufacturing solutions.",
    alternates: {
        canonical: "https://www.ryopapers.com/contact",
    },
    openGraph: {
        title: "Contact Us | RYO Papers",
        description: "Get in touch with RYO Papers for any inquiries regarding our premium rolling papers, custom printing services, or contract manufacturing solutions.",
        url: "https://www.ryopapers.com/contact",
    },
    twitter: {
        card: "summary_large_image",
        title: "Contact Us | RYO Papers",
        description: "Get in touch with RYO Papers for any inquiries regarding our premium rolling papers, custom printing services, or contract manufacturing solutions.",
    },
};

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
