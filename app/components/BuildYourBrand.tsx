"use client";
import { Lightbulb, Factory, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
// (stepsData and backgroundColors definitions remain the same)
const stepsData = [
  {
    icon: Lightbulb,
    title: "Choose Rolling Paper",
    image: "/ryo/01.png",
    description:
      "Rolling papers, cones, tips, or full sets — pick what fits your brand best.",
  },
  {
    icon: Factory,
    image: "/ryo/02.png",
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
    image: "/ryo/03.png",
    description:
      "Premium materials. Flawless finish. 100% tailored to your brand.",
  },
  {
    icon: TrendingUp,
    image: "/ryo/04.png",
    title: "We Ship it",
    description: "No middlemen, No hidden costs, No hassle.",
  },
];

export default function BuildyourBrand() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 justify-center gap-2">
      {stepsData.map((step, index) => {
        //const IconComponent = step.icon;

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
              flex flex-col items-center w-full min-h-[180px]
              duration-500 ease-in-out
            `}
          >
            <Image
              src={step.image}
              alt={step.title}
              width={75}
              height={75}
              className="mb-3 rounded-lg"
            />
            {/* <IconComponent size={40} className="text-gray-800 mb-3" /> */}
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
