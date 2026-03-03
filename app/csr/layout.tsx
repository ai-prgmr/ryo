import { Metadata } from "next";

export const metadata: Metadata = {
    title: "CSR | RYO Papers",
    description: "Our Commitment to Social Responsibility. Learn about our sustainable farmland initiatives, supporting elders, and nurturing future generations.",
    alternates: {
        canonical: "https://www.ryopapers.com/csr",
    },
    openGraph: {
        title: "CSR | RYO Papers",
        description: "Our Commitment to Social Responsibility. Learn about our sustainable farmland initiatives, supporting elders, and nurturing future generations.",
        url: "https://www.ryopapers.com/csr",
    },
    twitter: {
        card: "summary_large_image",
        title: "CSR | RYO Papers",
        description: "Our Commitment to Social Responsibility. Learn about our sustainable farmland initiatives, supporting elders, and nurturing future generations.",
    },
};

export default function CsrLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
