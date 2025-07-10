"use client";
import Image from "next/image";

// This component needs client-side interactivity

const WhatsAppButton: React.FC = () => {
  const whatsappNumber = "+919009111088"; // Replace with your actual WhatsApp number
  const whatsappMessage = encodeURIComponent(
    "Hello! I have a question about your rolling papers."
  );
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6  text-white rounded-full shadow-lg hover:bg-white transition-all duration-300 transform hover:scale-110 z-50 flex items-center justify-center w-12 h-12 md:w-30 md:h-30"
      aria-label="Chat on WhatsApp"
    >
      {/* WhatsApp Icon (simple SVG) */}
      <Image
        src="/ryo/Digital_Glyph_Green.svg" // Ensure you have this icon in your public folder
        alt="WhatsApp Icon"
        width={80}
        height={80}
        className="text-white"
      />
    </a>
  );
};
export default WhatsAppButton;
