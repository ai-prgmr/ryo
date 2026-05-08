import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import SplashCursor from "./components/SplashCursor";
import ConsentManager from "./components/ConsentManager";
import { Montserrat } from "next/font/google";
import "@fortawesome/fontawesome-svg-core/styles.css"; // Import the CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "RYO Papers | Custom Rolling Paper Solutions",
  description: "Roll your Own Papers, RYO Rolling Papers custom solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.className} ${montserrat.variable}`}
    >
      <head>
        <link rel="help" type="text/markdown" href="https://ryopapers.com/llms.txt" />
        <link rel="help" type="text/markdown" href="https://ryopapers.com/llms-full.txt" />
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
      <body className={`antialiased bg-white`}>
        <Header />
        <ConsentManager
          logoSrc="/images/ryopapers-final-logo.png"
          logoAlt="RYO Logo"
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
