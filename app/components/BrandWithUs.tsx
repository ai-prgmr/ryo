// src/components/WhyRollWithUs.jsx (or .tsx for TypeScript)

import React from "react";
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
import Link from "next/link";

// Add the icons to the Font Awesome library for use in your application.
library.add(faMagic, faPalette, faHandshakeSlash, faReceipt, faFire, faBoxOpen);

function BrandwithUs() {
  const benefits = [
    {
      icon: faMagic,
      text: "Expertly crafted collection — made with premium materials for a smooth, clean burn every time.",
    },
    {
      icon: faPalette,
      text: "Design-to-Delivery — a full-service solution: branding, customization, packaging — all in one place.",
    },
    {
      icon: faHandshakeSlash,
      text: "No middlemen. No commissions. Just straight-up savings.",
    },
    {
      icon: faReceipt,
      text: "No hidden costs — what you see is what you pay.",
    },
    {
      icon: faFire,
      text: "Best value, guaranteed — top-tier quality at the most competitive prices.",
    },
    {
      icon: faBoxOpen,
      text: "Tons of options — choose from a wide variety of papers, tips, cones, and accessories.",
    },
  ];

  return (
    <section className="p-6 bg-gray-50 rounded-lg shadow-md md:p-8">
      <ul className="space-y-4">
        {benefits.map((benefit, index) => (
          <li
            key={index}
            className="flex items-center space-x-4 justify-center"
          >
            <FontAwesomeIcon
              icon={benefit.icon}
              className="text-amber-500 text-xl mr-3 flex-shrink-0 mt-1" // Tailwind classes for styling the icon
            />
            <span className="text-gray-900 font-bold text-lg leading-relaxed">
              {benefit.text}
            </span>
          </li>
        ))}
      </ul>
      <button className="mt-6 px-6 py-3 bg-amber-600 text-white rounded-lg shadow-md hover:bg-amber-700 transition-colors duration-200">
        <Link href="/contact" className="flex items-center justify-center">
          <FontAwesomeIcon icon={faBoxOpen} className="mr-2" />
          Contact Us
        </Link>
      </button>
    </section>
  );
}

export default BrandwithUs;
