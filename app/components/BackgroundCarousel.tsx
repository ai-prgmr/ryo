"use client";

import React, { useState, useEffect } from "react";

import Image from "next/image";

interface BackgroundCarouselProps {
  children?: React.ReactNode;
  images: string[];
  width: string;
  inset: string;
}

const BackgroundCarousel: React.FC<BackgroundCarouselProps> = ({
  children,
  images,
  width,
  inset,
}) => {
  images = images;
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next image
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to go to the previous image
  // const prevImage = () => {
  //   setCurrentIndex(
  //     (prevIndex) => (prevIndex - 1 + images.length) % images.length
  //   );
  // };

  // Autoplay functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 1500); // Change image every 5 seconds

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }); // Re-run effect if currentIndex changes to restart timer

  return (
    <div className={`relative overflow-hidden shadow-xl z-10 ${width}`}>
      {/* Background Image */}
      <Image
        src={images[currentIndex]}
        alt={`Background image ${currentIndex + 1}`}
        layout="fill"
        objectFit="cover"
        sizes="100vw"
        className="transition-opacity duration-1000 ease-in-out "
        priority={true}
      />

      {/* Dark Overlay for Text Readability */}
      {inset === "true" ? (
        <div className="absolute inset-0 bg-black opacity-70"></div>
      ) : (
        ""
      )}

      {/* Navigation Arrows */}
      {/* <button
        onClick={prevImage}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-gray-800 bg-opacity-60 rounded-full text-white hover:bg-opacity-80 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber-500 z-10"
        aria-label="Previous image"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m15 18-6-6 6-6" />
        </svg>
      </button>
      <button
        onClick={nextImage}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-gray-800 bg-opacity-60 rounded-full text-white hover:bg-opacity-80 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber-500 z-10"
        aria-label="Next image"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m9 18 6-6-6-6" />
        </svg>
      </button> */}

      {/* Indicators (Dots) */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 w-2 rounded-full transition-all duration-300 ${
              currentIndex === index
                ? "bg-amber-400 w-6"
                : "bg-gray-400 hover:bg-gray-200"
            }`}
            aria-label={`Go to image ${index + 1}`}
          ></button>
        ))}
      </div>

      {/* Content for the hero section (optional, can be passed as children) */}
      <div className="absolute inset-0 flex items-center justify-center text-center z-20 p-6">
        {" "}
        {/* Increased z-index for content */}
        {children}
      </div>
    </div>
  );
};

export default BackgroundCarousel;
