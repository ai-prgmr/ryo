"use client";
import { useState, useEffect } from "react";
import { Lightbulb, Factory, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

// (stepsData and backgroundColors definitions remain the same)
const stepsData = [
  {
    icon: Lightbulb,
    title: "Choose Rolling Paper",
    description:
      "Rolling papers, cones, tips, or full sets — pick what fits your brand best.",
  },
  {
    icon: Factory,
    title: "Share Your Vibe",
    description: (
      <>
        <span className="text-gray-700">Send us your design — or</span>
        <br />
        <b className="uppercase text-gray-900">Our team designs it all.</b>
      </>
    ),
  },
  {
    icon: TrendingUp,
    title: "We Custom-Make It",
    description:
      "Premium materials. Flawless finish. 100% tailored to your brand.",
  },
  {
    icon: TrendingUp,
    title: "We Ship it !",
    description: "No middlemen, No hidden costs, No hassle.",
  },
];

const backgroundColors = ["#63E6BE", "#74C0FC", "#FFD43B", "#E599F7"];

export default function BuildyourBrand() {
  const [currentStartIndex, setCurrentStartIndex] = useState(0); // For color rotation

  // Effect for color rotation (this part remains the same)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStartIndex(
        (prevIndex) => (prevIndex + 1) % backgroundColors.length
      );
    }, 2000); // Rotate colors every 2 seconds

    // Cleanup function for color interval
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 justify-center gap-6">
      {stepsData.map((step, index) => {
        const IconComponent = step.icon;
        const bgColor =
          backgroundColors[
            (index + currentStartIndex) % backgroundColors.length
          ];

        return (
          <motion.div // <--- Changed from `div` to `motion.div`
            key={index}
            // Define the initial state (before animation)
            initial={{ opacity: 0, x: -150 }} // Starts transparent and 50px below its final position
            // Define the animated state (after animation)
            whileInView={{ opacity: 1, x: 0 }} // Ends fully opaque and at its original y-position
            // Define the animation transition properties
            transition={{
              duration: 1, // How long the animation for each item takes (0.5 seconds)
              delay: index * 0.15, // Stagger delay: Each item starts its animation 0.15s after the previous one
              ease: "easeOut", // Easing function for a smoother finish
            }}
            className={`
              flex flex-col items-center p-6 w-full min-h-[180px]
              rounded-xl shadow-md
              transition-colors duration-500 ease-in-out /* Keep for color transition */
            `}
            style={{ backgroundColor: bgColor }}
          >
            <IconComponent size={40} className="text-gray-800 mb-3" />
            <span className="font-bold text-lg text-gray-900 mb-1">
              {step.title}
            </span>
            <p className="text-sm mt-1 text-center font-semibold text-[#173153]">
              {step.description}
            </p>
          </motion.div>
        );
      })}
    </div>
  );
}
