"use client";
import Image from "next/image";
import { Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <div className="bg-white max-w-5xl mx-auto px-4 py-8">
      <div className="p-6 md:p-10 text-center">
        <h1
          className="inline-flex items-center justify-center px-16 py-4 text-[#A2D22E] font-semibold rounded-full shadow-md
                           text-5xl mb-16"
        >
          Get in touch{" "}
        </h1>
        <p className="text-lg text-[#173153] max-w-3xl mx-auto mb-10 leading-relaxed">
          We&apos;re here to assist you with any inquiries regarding our premium
          rolling papers, custom printing services, or contract manufacturing
          solutions. Reach out to us through the following channels:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2  gap-8 mb-12">
          <motion.div
            // Framer Motion animation props
            initial={{ opacity: 0, y: 50 }} // Start invisible and slightly below
            whileInView={{ opacity: 1, y: 0 }} // Animate to fully visible and original position
            transition={{
              duration: 0.7, // Duration of the individual card animation
              delay: 0.1, // Stagger delay: each card animates 0.1s after the previous one
              ease: "easeIn",
            }}
          >
            <div className="text-orange-400 bg-white p-6  shadow-lg flex flex-col items-center">
              <Mail size={48} className=" mb-4" />
              <h3 className="text-2xl  font-bold  mb-3">Email Us</h3>
              <p className="leading-relaxed">
                <a
                  href="mailto:info@ryopapers.com"
                  className="inline-flex items-center justify-center px-6 md:px-12 py-3 bg-amber-500 text-white font-semibold rounded-full shadow-md
                         hover:bg-amber-600 transition-colors duration-200 text-lg md:text-2xl
                         focus:outline-none focus:ring-4 focus:ring-amber-300 focus:ring-opacity-75"
                >
                  info@ryopapers.com
                </a>
                <br />{" "}
              </p>
            </div>
          </motion.div>
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
            <div className="bg-white p-6 shadow-lg flex flex-col items-center">
              <Image
                src="/Digital_Glyph_Green.svg"
                alt="WhatsApp"
                width={48}
                height={48}
                className="text-amber-400 mb-4"
              />
              <h3 className="text-2xl font-bold text-green-400 mb-3">
                WhatsApp
              </h3>
              <p className=" leading-relaxed">
                <a
                  target="_blank"
                  href="https://wa.me/919009111088"
                  className="inline-flex items-center justify-center px-6 md:px-12 py-3 bg-green-400 text-white font-semibold rounded-full shadow-md
                          transition-colors duration-200 text-lg md:text-2xl
                         focus:outline-none focus:ring-4 focus:ring-amber-300 focus:ring-opacity-75"
                >
                  +91 90091 11088
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
