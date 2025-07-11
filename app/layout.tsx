import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import SplashCursor from "./components/SplashCursor";
import ConsentManager from "./components/ConsentManager";

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
    <html lang="en" className="light">
      <body className={`text-gray-900 antialiased bg-black`}>
        <Header />
        <ConsentManager
          logoSrc="/ryo/new-logo-2-removebg.png"
          logoAlt="RYO Logo"
        />
        <main className="pt-30 flex flex-col">{children}</main>
        <Footer />
        <WhatsAppButton /> {/* WhatsApp button added here */}
        {/* Splash Section */}
        <SplashCursor />
      </body>
    </html>
  );
}
