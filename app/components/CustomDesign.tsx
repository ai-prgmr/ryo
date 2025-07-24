// components/CustomDesignCallToAction.jsx
"use client"; // This directive is necessary if you are using Next.js App Router and client-side features

import React from "react";
// import Image from "next/image";

export default function CustomDesign() {
  const googleFormLink = "YOUR_GOOGLE_FORM_LINK_HERE"; // e.g., "https://docs.google.com/forms/d/e/1FAIpQLSc..."
  const whatsappNumber = "YOUR_WHATSAPP_NUMBER"; // e.g., "+919876543210" (include country code, no spaces or hyphens)

  const whatsappMessage = encodeURIComponent(
    "Hi, I'm interested in custom rolling paper booklets. I'd like to discuss design options."
  );

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-full mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight">
          Craft Your Unique Rolling Paper Brand
        </h2>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
          Whether you have a design in mind or need a little help, we&apos;re
          here to bring your vision to life.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Option 1: Provide Your Design */}
          <div className="bg-white dark:bg-gray-850 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1">
            <h3 className="text-3xl font-bold text-amber-600 dark:text-amber-400 mb-4">
              Have Your Design Ready?
            </h3>
            <p className="text-gray-700 h-20 dark:text-gray-300 mb-8 leading-relaxed">
              Already have a print-ready design for your rolling paper brand?
              Share it with us directly through our easy-to-use form.
            </p>
            {/* Using <a> tag for external Google Form link */}
            <a
              href={googleFormLink}
              target="_blank" // Opens in a new tab
              rel="noopener noreferrer" // Security best practice for target="_blank"
              className="inline-flex items-center justify-center px-8 py-3 bg-amber-500 text-white font-semibold rounded-full shadow-md
                         hover:bg-amber-600 transition-colors duration-200 text-lg
                         focus:outline-none focus:ring-4 focus:ring-amber-300 focus:ring-opacity-75"
            >
              Submit Your Brand Design
            </a>
          </div>

          {/* Option 2: Need Design Assistance? */}
          <div className="bg-white dark:bg-gray-850 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1">
            <h3 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-4">
              Need Design Assistance?
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed h-20">
              No worries - Our creative team is here to help craft a perfect
              brand! Fill us in with your vision, inspiration and emotions and
              your brand style.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              {/* Using <a> tag for external Google Form link */}
              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`} // Can be the same form, or a different form/section within it for design requests
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 bg-indigo-500 text-white font-semibold rounded-full shadow-md
                           hover:bg-indigo-600 transition-colors duration-200 text-lg
                           focus:outline-none focus:ring-4 focus:ring-indigo-300 focus:ring-opacity-75"
              >
                {/* <Image
                  src="/ryo/Digital_Glyph_Green.svg" // Ensure you have this icon in your public folder
                  alt="WhatsApp Icon"
                  width={80}
                  height={80}
                  className="text-white"
                /> */}
                Start Your Custom Design
              </a>
              {/* Using <a> tag for external WhatsApp link */}
              {/* <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 bg-green-500 text-white font-semibold rounded-full shadow-md
                           hover:bg-green-600 transition-colors duration-200 text-lg
                           focus:outline-none focus:ring-4 focus:ring-green-300 focus:ring-opacity-75"
              >
                <Image
                  src="/ryo/Digital_Glyph_Green.svg" // Ensure you have this icon in your public folder
                  alt="WhatsApp Icon"
                  width={80}
                  height={80}
                  className="text-white"
                />
                Chat on WhatsApp
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
