// src/components/WhyRollWithUs.jsx (or .tsx for TypeScript)
"use client";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagic,
  faPalette,
  faHandshakeSlash,
  faReceipt,
  faFire,
  faBoxOpen,
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

// Add the icons to the Font Awesome library for use in your application.
library.add(faMagic, faPalette, faHandshakeSlash, faReceipt, faFire, faBoxOpen);

function BrandwithUs() {
  const stepsData = [
    {
      icon: faMagic,
      title: "Expertly crafted collection",
      description:
        "made with premium materials for a smooth, clean burn every time.",
    },
    {
      icon: faPalette,
      title: "Design-to-Delivery",
      description:
        "a full-service solution: branding, customization, packaging — all in one place.",
    },
    {
      icon: faHandshakeSlash,
      title: "Direct Sourcing",

      description: "No middlemen. No commissions. Just straight-up savings.",
    },
    {
      icon: faReceipt,
      title: "Transparent Pricing",
      description: "No hidden costs — what you see is what you pay.",
    },
    {
      icon: faFire,
      title: "Best Value",
      description: "Top-tier quality at the most competitive prices.",
    },
    {
      icon: faBoxOpen,
      title: "Low Order Quantity",
      description: "Suitable for all pockets sizes.",
    },
  ];

  const backgroundColors = [
    "#63E6BE",
    "#74C0FC",
    "#FFD43B",
    "#E599F7",
    "#FFFACD",
    "#FFC0CB",
  ];

  const [currentStartIndex, setCurrentStartIndex] = useState(0); // For color rotation

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStartIndex(
        (prevIndex) => (prevIndex + 1) % backgroundColors.length
      );
    }, 2000); // Rotate colors every 2 seconds

    // Cleanup function for color interval
    return () => clearInterval(interval);
  }, [backgroundColors.length]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 justify-center gap-6">
      {stepsData.map((step, index) => {
        // No need for a separate IconComponent variable here,
        // you'll directly pass step.icon to FontAwesomeIcon's 'icon' prop.
        const bgColor =
          backgroundColors[
            (index + currentStartIndex) % backgroundColors.length
          ];

        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -150 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.2,
              ease: "easeOut",
            }}
            viewport={{
              once: true, // <-- This is the key property!
              amount: 0.5, // How much of the element needs to be visible (0 to 1)
            }}
            className={`
              flex flex-col items-center p-6 w-full min-h-[180px]
              rounded-xl shadow-md
              duration-500 ease-in-out /* Keep for color transition */
            `}
            style={{ backgroundColor: bgColor }}
          >
            {/* Use FontAwesomeIcon component here */}
            <FontAwesomeIcon
              icon={step.icon}
              size="2x"
              className="text-gray-800 mb-3"
            />{" "}
            {/* size="2x" for 40px equivalent */}
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
export default BrandwithUs;
