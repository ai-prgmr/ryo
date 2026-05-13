"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import Image from "next/image";

export function ContactAnimations() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.7,
          delay: 0.1,
          ease: "easeIn",
        }}
      >
        <div className="text-orange-400 bg-bg p-6 shadow-lg flex flex-col items-center">
          <Mail size={48} className="mb-4" />
          <h3 className="text-2xl font-bold mb-3">Email Us</h3>
          <p className="leading-relaxed">
            <a
              href="mailto:info@ryopapers.com"
              className="btn btn-primary btn-lg rounded-full"
            >
              info@ryopapers.com
            </a>
            <br />
          </p>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.7,
          delay: 0.1,
          ease: "easeOut",
        }}
      >
        <div className="bg-bg p-6 shadow-lg flex flex-col items-center">
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
          <p className="leading-relaxed">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://wa.me/919009111088"
              className="btn btn-primary btn-lg rounded-full"
            >
              +91 90091 11088
            </a>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
