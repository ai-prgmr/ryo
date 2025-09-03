"use client";
import Image from "next/image";

// This component needs client-side interactivity

const WhatsAppButton: React.FC = () => {
  const whatsappNumber = "+919009111088";
  const whatsappMessage = encodeURIComponent(
    "Hello! I have a question about your rolling papers."
  );
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
  // --- Facebook Configuration ---
  // Replace this with your actual Facebook page URL
  // const facebookLink = "https://www.facebook.com/";

  // --- Instagram Configuration ---
  // Replace this with your actual Instagram profile URL
  const instagramLink = "https://www.instagram.com/ryopapers/";

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center">
      {/* WhatsApp Button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="text-white transition-all duration-300 transform hover:scale-110 flex items-center justify-center w-12 h-12 md:w-14 md:h-14"
        aria-label="Chat on WhatsApp"
      >
        <Image
          src="/Digital_Glyph_Green.svg"
          alt="WhatsApp Icon"
          width={40}
          height={40}
          className="text-white"
        />
      </a>

      {/* Instagram Button */}
      <a
        href={instagramLink}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full text-white transition-all duration-300 transform hover:scale-110 flex items-center justify-center w-12 h-12 md:w-14 md:h-14"
        aria-label="Follow on Instagram"
      >
        <Image
          src="/ryo/Instagram.png"
          alt="WhatsApp Icon"
          width={40}
          height={40}
          className="text-white"
        />
      </a>

      {/* Facebook Button */}
      {/* <a
        href={facebookLink}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full text-white transition-all duration-300 transform hover:scale-110 flex items-center justify-center w-12 h-12 md:w-14 md:h-14"
        aria-label="Follow on Facebook"
      >
        <Image
          src="/ryo/Facebook.png"
          alt="WhatsApp Icon"
          width={40}
          height={40}
          className="text-white"
        />
      </a> */}
    </div>
  );
};
export default WhatsAppButton;
