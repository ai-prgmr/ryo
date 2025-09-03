import type { Metadata } from "next";
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
  title: "Roll your Own",
  description: "Roll your Own Papers, custom solutions",
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
      <body className={`antialiased bg-white`}>
        <Header />
        <ConsentManager logoSrc="/new-logo-2-removebg.png" logoAlt="RYO Logo" />
        <main className="pt-28 flex flex-col">{children}</main>
        <Footer />
        <WhatsAppButton /> {/* WhatsApp button added here */}
        {/* Splash Section */}
        <SplashCursor />
      </body>
    </html>
  );
}
