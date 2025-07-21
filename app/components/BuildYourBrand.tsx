"use client";
import { useState, useEffect } from "react"; // Import useState and useEffect
import { Lightbulb, Factory, TrendingUp } from "lucide-react";
const stepsData = [
  {
    icon: Lightbulb,
    title: "Choose your Products",
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

// Define the array of background colors
const backgroundColors = ["#63E6BE", "#74C0FC", "#FFD43B", "#E599F7"];

export default function BuildyourBrand() {
  // Renamed to be a functional component
  const [currentStartIndex, setCurrentStartIndex] = useState(0);

  useEffect(() => {
    // Set up an interval to change the starting color index every 2 seconds
    const interval = setInterval(() => {
      setCurrentStartIndex(
        (prevIndex) => (prevIndex + 1) % backgroundColors.length
      );
    }, 2000); // 2000 milliseconds = 2 seconds

    // Cleanup function: clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []); // Empty dependency array means this effect runs once on mount and cleans up on unmount

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 justify-center gap-6 mb-12">
      {stepsData.map((step, index) => {
        const IconComponent = step.icon;
        // Calculate the background color using the currentStartIndex
        const bgColor =
          backgroundColors[
            (index + currentStartIndex) % backgroundColors.length
          ];
        return (
          <div
            key={index}
            className="flex flex-col items-center p-6 rounded-xl shadow-md w-full min-h-[180px]
                    duration-500 ease-in-out"
            style={{ backgroundColor: bgColor }}
          >
            {" "}
            <IconComponent size={40} className="text-gray-800 mb-3" />
            <span className="font-bold text-lg text-gray-900 mb-1">
              {step.title}
            </span>
            <p className="text-sm mt-1 text-center font-semibold text-gray-700">
              {step.description}
            </p>
          </div>
        );
      })}
    </div>
  );
}
