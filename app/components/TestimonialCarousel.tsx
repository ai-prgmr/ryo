// components/TestimonialsCarousel.jsx
"use client"; // Important for Next.js if this is a client component
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Import motion and AnimatePresence
import TestimonialCard from "./TestimonialCard"; // Adjust path if TestimonialCard is in same file or different directory

// Sample Testimonials Data (You should replace this with your actual data)
const testimonialsData = [
  {
    quote:
      "Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application.",
    authorName: "Micheal Gough",
    authorTitle: "CEO at Google",
    authorImg:
      "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png",
  },
  {
    quote:
      "This service transformed our workflow. The components are intuitive and the documentation is clear. Highly recommend for any modern web project.",
    authorName: "Sarah Johnson",
    authorTitle: "CTO at Tech Innovations",
    authorImg:
      "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png",
  },
  {
    quote:
      "Unbelievable efficiency boost! The pre-built elements saved us countless hours of development time. Truly a game-changer for our startup.",
    authorName: "David Lee",
    authorTitle: "Lead Developer, Alpha Corp",
    authorImg:
      "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png",
  },
  {
    quote:
      "The attention to detail and customization options are fantastic. Our brand really shines through, and the support team is top-notch.",
    authorName: "Emily Chen",
    authorTitle: "Marketing Director, Global Brands",
    authorImg:
      "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png",
  },
  {
    quote:
      "A seamless experience from start to finish. The flexibility of the components allowed us to implement complex features with ease.",
    authorName: "Mark Sulliver",
    authorTitle: "Product Manager, Creative Solutions",
    authorImg:
      "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-goad.png",
  },
  {
    quote:
      "Absolutely blown away by the quality and speed. This platform is now an indispensable part of our development stack.",
    authorName: "Lisa Wong",
    authorTitle: "Founder, Innovate Labs",
    authorImg:
      "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/thomas-lean.png",
  },
];

// Define animation variants for Framer Motion
const itemVariants = {
  enter: { opacity: 0, x: 50 }, // Starts off-screen to the right, transparent
  center: { opacity: 1, x: 0 }, // Fully visible, in place
  exit: { opacity: 0, x: -50 }, // Exits off-screen to the left, transparent
};

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-rotation logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
    }, 5000); // Rotate every 5 seconds (adjust as needed)

    return () => clearInterval(interval);
  }, []);

  // Function to get the testimonials to display based on current index and desktop/mobile view
  const getDisplayTestimonials = () => {
    // This logic relies on Tailwind's breakpoints being consistent.
    // For desktop (lg and up), we want 3. For mobile, 1.
    // We'll calculate a 'base index' for the set of 3 on desktop.
    // For seamless looping, we'll show up to 3 testimonials by calculating their index modulo length.

    // On mobile, just return the current testimonial
    // For desktop, prepare an array of 3 testimonials, handling wrap-around
    const desktopTestimonials = [];
    for (let i = 0; i < 3; i++) {
      desktopTestimonials.push(
        testimonialsData[(currentIndex + i) % testimonialsData.length]
      );
    }
    return desktopTestimonials;
  };

  const desktopTestimonialsToRender = getDisplayTestimonials();

  return (
    <section className="bg-white dark:bg-gray-900 py-8 lg:py-16">
      <div className="max-w-screen-xl px-4 mx-auto text-center lg:px-6">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-8">
          What Our Clients Say
        </h2>

        {/* Mobile View: Shows 1 testimonial at a time */}
        {/* AnimatePresence for exit animations on the single changing mobile testimonial */}
        <div className="lg:hidden relative h-[400px] flex items-center justify-center overflow-hidden">
          {" "}
          {/* Fixed height for smooth transitions */}
          <AnimatePresence mode="wait">
            {" "}
            {/* 'wait' mode ensures one component finishes exiting before the next enters */}
            <motion.div
              key={currentIndex} // Key changes to trigger animation when current testimonial changes
              variants={itemVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute w-full" // Position absolutely to allow overlapping transitions
            >
              <TestimonialCard {...testimonialsData[currentIndex]} />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Desktop View: Shows 3 testimonials at a time */}
        {/* No AnimatePresence for the grid, as items are mostly fixed, and we update content */}
        <div className="hidden lg:grid grid-cols-3 gap-8 md:gap-12">
          {desktopTestimonialsToRender.map((testimonial, idx) => (
            <motion.div
              key={testimonial.authorName + idx} // Unique key for each instance
              variants={itemVariants}
              initial="enter"
              animate="center"
              transition={{
                duration: 0.5,
                delay: idx * 0.1,
                ease: "easeInOut",
              }} // Stagger desktop items
            >
              <TestimonialCard {...testimonial} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
