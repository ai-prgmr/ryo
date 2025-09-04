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
    }, 1500);

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }); // Re-run effect if currentIndex changes to restart timer

  return (
    <div
      className={`relative overflow-hidden z-10 ${width} aspect-video mx-auto`}
    >
      {/* Background Image */}
      <Image
        src={images[currentIndex]}
        alt={`Background image ${currentIndex + 1}`}
        fill={true}
        sizes="(max-width: 768px) 100vw, 33vw"
        className="contain"
        priority={true}
      />

      {/* Dark Overlay for Text Readability */}
      {inset === "true" ? (
        <div className="absolute inset-0 bg-black opacity-70"></div>
      ) : (
        ""
      )}

      {/* Indicators (Dots) */}
      {/* <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
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
      </div> */}

      {/* Content for the hero section (optional, can be passed as children) */}
      <div className="absolute inset-0 flex items-center justify-left text-center z-20 p-6">
        {" "}
        {/* Increased z-index for content */}
        {children}
      </div>
    </div>
  );
};

export default BackgroundCarousel;
