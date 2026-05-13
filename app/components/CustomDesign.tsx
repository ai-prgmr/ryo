// components/CustomDesignCallToAction.jsx
"use client"; // This directive is necessary if you are using Next.js App Router and client-side features

import React from "react";
import { motion } from "framer-motion";
export default function CustomDesign() {
  const googleFormLink =
    "https://docs.google.com/forms/d/e/1FAIpQLScmqEWZn3wrgT8ARpoNphSO1CnD_QN7in0fIga6pa2pqBVvOw/viewform?usp=header";
  const whatsappNumber = "+919009111088";

  const whatsappMessage = encodeURIComponent(
    "Hi, I&apos;m interested in custom rolling paper booklets. I&apos;d like to discuss design options."
  );

  return (
    <section className="py-16 bg-bg">
      <div className="max-w-full mx-auto px-4 text-center">
        <h2 className="font-display text-4xl md:text-5xl font-black text-ink mb-6 leading-tight">
          Build Your Rolling Paper Brand, Your Way
        </h2>
        <p className="text-lg md:text-xl text-text mb-12 max-w-3xl mx-auto">
          Whether you arrive with a finished design or just a spark of an idea, we take it from concept to carton.
        </p>
        <h4 className="inline-flex items-center justify-center px-16 py-4 bg-ink text-cream-50 font-display font-bold text-2xl mb-16">
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
            <div className="bg-surface p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1">
              <h3 className="text-3xl font-bold text-brand mb-4">
                Have Your Design Ready?
              </h3>
              <p className="text-gray-700 mb-8 leading-relaxed">
                Already have print-ready artwork? Send it across through our quick submission form, and we&apos;ll move straight to production planning.
              </p>
              {/* Using <a> tag for external Google Form link */}
              <a
                href={googleFormLink}
                target="_blank" // Opens in a new tab
                rel="noopener noreferrer" // Security best practice for target="_blank"
                className="btn btn-primary"
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
            <div className="bg-surface p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1">
              <h3 className="text-3xl font-bold text-brand mb-4">
                Need Design Assistance?
              </h3>
              <p className="text-gray-700 mb-8 leading-relaxed">
                No artwork yet? No problem. Our in-house creative team will build your brand from scratch — share your vision, mood, and target audience, and we&apos;ll handle the rest.
              </p>
              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`} // Can be the same form, or a different form/section within it for design requests
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
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
