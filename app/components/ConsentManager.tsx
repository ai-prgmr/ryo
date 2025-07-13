// components/AgeVerificationModal.tsx
"use client"; // This directive is necessary for client-side components in Next.js App Router

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // Import useRouter for redirection
import Image from "next/image";
interface AgeVerificationModalProps {
  logoSrc: string; // Prop for your logo image source
  logoAlt: string; // Prop for your logo alt text
}

const ConsentManager: React.FC<AgeVerificationModalProps> = ({
  logoSrc,
  logoAlt,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVerified, setIsVerified] = useState(false); // State to track verification status
  const router = useRouter(); // Initialize the useRouter hook

  useEffect(() => {
    // This effect runs only once when the component mounts on the client-side.
    // It checks if the user has already verified their age in local storage.
    const storedVerification = localStorage.getItem("ageVerified");
    if (storedVerification === "true") {
      setIsVerified(true); // User is already verified
      setIsOpen(false); // Ensure modal is closed
    } else {
      setIsOpen(true); // User not verified, show the modal
    }
  }, [isVerified]);

  const handleVerifyAge = () => {
    // Set verification status to true
    setIsVerified(true);
    // Hide the modal
    setIsOpen(false);
    // Store the verification status in local storage
    localStorage.setItem("ageVerified", "true");
  };

  const handleDeclineAge = () => {
    // Optional: You might want to store a 'declined' status in local storage
    // to prevent the modal from reappearing immediately, or just redirect.
    // localStorage.setItem('ageVerified', 'declined');

    // Redirect to a safe external site (e.g., Google.com)
    // Note: For external URLs, useRouter.push() behaves like window.location.href
    router.push("https://www.google.com");
  };

  // If not open, don't render anything
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-gray-800 rounded-lg shadow-2xl p-8 max-w-md w-full text-center relative">
        {/* Logo Image */}
        <div className="">
          <Image
            src={logoSrc}
            alt={logoAlt}
            width={200}
            height={200}
            className="mx-auto object-contain rounded-lg "
          />
        </div>

        {/* Verification Question */}
        <p className="text-white text-3xl font-semibold mb-8 leading-tight">
          Verify that you are at least 21 years old?
        </p>

        {/* Buttons Container */}
        <div className="space-y-4">
          {" "}
          {/* Added space between buttons */}
          {/* Yes, Continue Button */}
          <button
            onClick={handleVerifyAge}
            className="w-full bg-green-700 hover:bg-green-600 text-white font-bold py-4 px-6 rounded-lg text-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Yes
          </button>
          {/* No Button */}
          <button
            onClick={handleDeclineAge}
            className="w-full bg-red-700 hover:bg-red-600 text-white font-bold py-4 px-6 rounded-lg text-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConsentManager;
