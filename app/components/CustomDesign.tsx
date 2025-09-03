// components/CustomDesignCallToAction.jsx
"use client"; // This directive is necessary if you are using Next.js App Router and client-side features

import React from "react";
import { motion } from "framer-motion";
export default function CustomDesign() {
  const googleFormLink =
    "https://docs.google.com/forms/d/e/1FAIpQLScmqEWZn3wrgT8ARpoNphSO1CnD_QN7in0fIga6pa2pqBVvOw/viewform?usp=header";
  const whatsappNumber = "+919009111088";

  const whatsappMessage = encodeURIComponent(
    "Hi, I'm interested in custom rolling paper booklets. I'd like to discuss design options."
  );

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-full mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-emerald-500 via-zinc-700 to-sky-600 bg-clip-text text-transparent mb-6 leading-tight">
          Craft Your Unique Rolling Paper Brand
        </h2>
        <p className="text-lg md:text-xl text-gray-900 mb-12 max-w-3xl mx-auto">
          Whether you have a design in mind or need a little help, we&apos;re
          here to bring your vision to life.
        </p>
        <h4 className="inline-flex items-center justify-center px-16 py-4 bg-black text-white font-semibold text-2xl mb-16">
          Explore our product range{" "}
        </h4>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Option 1: Provide Your Design */}
          <motion.div
            // Framer Motion animation props
            initial={{ opacity: 0, y: 50 }} // Start invisible and slightly below
            whileInView={{ opacity: 1, y: 0 }} // Animate to fully visible and original position
            transition={{
              duration: 0.7, // Duration of the individual card animation
              delay: 0.1, // Stagger delay: each card animates 0.1s after the previous one
              ease: "easeOut",
            }}
          >
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1">
              <h3 className="text-3xl font-bold text-[#A2D22E] mb-4">
                Have Your Design Ready?
              </h3>
              <p className="text-gray-700 mb-8 leading-relaxed">
                Already have a print-ready design for your rolling paper brand?
                Share it with us directly through our easy-to-use form.
              </p>
              {/* Using <a> tag for external Google Form link */}
              <a
                href={googleFormLink}
                target="_blank" // Opens in a new tab
                rel="noopener noreferrer" // Security best practice for target="_blank"
                className="inline-flex items-center justify-center px-4 lg:px-8 py-3 bg-black text-white font-semibold rounded-full shadow-md
                          transition-colors duration-200 text-lg"
              >
                Submit Your Brand Design
              </a>
            </div>
          </motion.div>
          {/* Option 2: Need Design Assistance? */}
          <motion.div
            // Framer Motion animation props
            initial={{ opacity: 0, x: -150 }} // Start invisible and slightly below
            whileInView={{ opacity: 1, x: 0 }} // Animate to fully visible and original position
            transition={{
              duration: 0.7, // Duration of the individual card animation
              delay: 0.1, // Stagger delay: each card animates 0.1s after the previous one
              ease: "easeInOut",
            }}
          >
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1">
              <h3 className="text-3xl font-bold text-[#A2D22E] mb-4">
                Need Design Assistance?
              </h3>
              <p className="text-gray-700 mb-8 leading-relaxed">
                No worries - Our creative team is here to help craft a perfect
                brand! Fill us in with your vision, inspiration and emotions and
                your brand style.
              </p>
              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`} // Can be the same form, or a different form/section within it for design requests
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 lg:px-8 py-3 bg-black text-white font-semibold rounded-full shadow-md
                          transition-colors duration-200 text-lg"
              >
                Start Your Custom Design
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
