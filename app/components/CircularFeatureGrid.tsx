// components/CircularFeatureGrid.jsx
"use client"; // This directive is necessary for client-side features like Framer Motion

import React from "react";
import Image from "next/image"; // For optimized images in Next.js
import { motion } from "framer-motion"; // For animation

const featuresData = [
  {
    imageSrc: "/ryo/sample/king-size.jpeg", // Example: /public/sample/feature-fast-shipping.png
    altText: "Fast Shipping Icon",
    text: "King Size + Filters",
  },
  {
    imageSrc: "/ryo/sample/king-size.jpeg",
    altText: "Eco-Friendly Icon",
    text: "King Size",
  },
  {
    imageSrc: "/ryo/sample/king-size.jpeg",
    altText: "Custom Design Icon",
    text: "1 ¼ + Filters",
  },
  {
    imageSrc: "/ryo/sample/king-size.jpeg",
    altText: "Low MOQ Icon",
    text: "1 ¼",
  },
  {
    imageSrc: "/ryo/sample/rolling-cone.jpeg",
    altText: "Quality Guaranteed Icon",
    text: "Pre-rolled cones",
  },
  {
    imageSrc: "/ryo/sample/king-size.jpeg",
    altText: "Competitive Pricing Icon",
    text: "Block King Size",
  },
];

// Background colors as provided by you
const backgroundColors = [
  "#63E6BE", // Original green/teal
  "#74C0FC", // Original light blue
  "#FFD43B", // Original yellow
  "#E599F7", // Original light purple/pink
  "#FFFACD", // New: Light Pastel Yellow (Lemon Chiffon)
  "#FFC0CB", // New: Light Pink (Pink)
];

export default function CircularFeatureGrid() {
  return (
    <section className="bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {featuresData.map((feature, index) => (
            <motion.div
              key={index} // Unique key for each item
              // Framer Motion animation properties
              initial={{ opacity: 0, scale: 0.8 }} // Start slightly smaller and transparent
              whileInView={{ opacity: 1, scale: 1 }} // Animate to full size and opaque when in view
              viewport={{
                once: true, // Animation plays only once when it enters the viewport
                amount: 0.5, // Triggers when 50% of the component is visible
              }}
              transition={{
                duration: 0.6, // Duration of the individual animation
                delay: index * 0.1, // Stagger delay: each item animates 0.1s after the previous one
                ease: "easeOut", // Easing function for a smoother finish
              }}
              // Styling for the circular container
              className={`
                w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 
                rounded-full // Makes the div perfectly circular
                flex flex-col items-center justify-center text-center 
                p-4 sm:p-6 // Padding inside the circle
                shadow-lg hover:shadow-xl transition-shadow duration-300 
                overflow-hidden 
              `}
              // Apply dynamic background color using inline style
              style={{
                backgroundColor:
                  backgroundColors[index % backgroundColors.length],
              }}
            >
              {/* Image Container within the circle */}
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 lg:w-48 lg:h-48 rounded-full overflow-hidden mb-3">
                <Image
                  src={feature.imageSrc}
                  alt={feature.altText}
                  layout="fill" // Fills the parent div
                  objectFit="cover" // Covers the area, cropping if necessary (good for circular images)
                  className="group-hover:scale-105 transition-transform duration-300" // Image zoom on hover
                />
              </div>
              {/* Text below the image */}
              <p className="text-sm sm:text-base text-gray-800 dark:text-gray-200 font-medium leading-tight max-w-[80%]">
                {feature.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
