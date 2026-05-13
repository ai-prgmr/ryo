import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import SplashCursor from "./components/SplashCursor";
import ConsentManager from "./components/ConsentManager";
import "@fortawesome/fontawesome-svg-core/styles.css"; // Import the CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically

export const metadata: Metadata = {
  title: "RYO Papers | Custom Rolling Paper Solutions",
  description: "RYO Papers — custom rolling paper manufacturer since 2017. Rice, hemp, flax, wood pulp & cellulose papers. OEM, white-label, low MOQ (500 packs). Made in India, shipped to 30+ countries.",
  robots: {
    index: true,
    follow: true,
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://ryopapers.com/#organization",
  "name": "RYOPAPERS",
  "url": "https://ryopapers.com",
  "logo": "https://ryopapers.com/images/ryopapers-final-logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "9009111088",
    "email": "info@ryopapers.com",
    "contactType": "Sales"
  },
  "sameAs": [
    "https://www.instagram.com/ryopapers/",
    "https://www.linkedin.com/company/ryopapers/",
    "https://wa.me/919009111088"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <link rel="llms-txt" type="text/markdown" href="https://ryopapers.com/llms.txt" />

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-CVK6P2R76J"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-CVK6P2R76J');
          `}
        </Script>
      </head>
      <body className="antialiased font-sans">
        <Header />
        <ConsentManager
          logoSrc="/images/ryopapers-final-logo.png"
          logoAlt="RYOPAPERS logo"
        />
        <main className="pt-28 flex flex-col">{children}</main>
        <Footer />
        <WhatsAppButton /> {/* WhatsApp button added here */}
        {/* Splash Section */}
        <SplashCursor />
      </body>
    </html>
  );
}
