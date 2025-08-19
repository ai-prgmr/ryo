// components/TestimonialsCarousel.jsx
"use client"; // Important for Next.js if this is a client component
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Import motion and AnimatePresence
import TestimonialCard from "./TestimonialCard"; // Adjust path if TestimonialCard is in same file or different directory

// Sample Testimonials Data (You should replace this with your actual data)
const testimonialsData = [
  {
    quote:
      "What impresses us most about RYOPAPERS is their dedication to the raw materials. They don't just talk about pure fibers; you can actually feel it in their papers. Their manufacturing process clearly prioritizes cleanliness and precision, resulting in a product we're genuinely proud to put our name on.",
    authorName: "Bryan Willis ",
    authorTitle: "Organic Rolls, Vietnam",
  },
  {
    quote:
      "With the volumes we handle, reliability is key — and RYOPAPERS always delivers. Their expertise in paper production shows in the consistent quality and smooth execution.",
    authorName: "Anna Jónsdóttir",
    authorTitle: "Global Smoking Accessories, ICELAND",
  },
  {
    quote:
      "Partnering with RYOPAPERS made launching our custom rolling papers easy and affordable. Their low MOQs let us test the market without heavy investment, and the final product matched our vision perfectly — both in look and performance.",
    authorName: "Sarah J.",
    authorTitle: "The Green Leaf Emporium, USA",
  },
  {
    quote:
      "Working with RYOPAPERS has been a blessing for NaijaRollers. They made custom papers easy — from blend to branding. Their low MOQ and sharp-sharp shipping made launching smooth. No stress, just top quality and solid service.",
    authorName: "Chinedu Okafor",
    authorTitle: "NaijaRollers, Lagos, Nigeria",
  },
  {
    quote:
      "Trabajar con RYOPAPERS fue un gran acierto. Nos ayudaron a crear un diseño único con opciones que no se ven en Chile. Buen precio, cantidades flexibles y envíos rápidos. Siempre atentos y profesionales — un socio confiable.",
    authorName: "Juan González",
    authorTitle: "RollingChile, Santiago, Chile",
  },
  {
    quote:
      "RYOPAPERS made things easy for us at Volute. We got premium French-quality paper without the hassle, and our customers love it. Low MOQs keep us stocked without overcommitting. Reliable, quick, and always on point.",
    authorName: "Marie Martin",
    authorTitle: "Volute, France",
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
    <section className="bg-white py-8 lg:py-16">
      <div className="max-w-screen-xl px-4 mx-auto text-center lg:px-6">
        <h2 className="text-3xl font-extralight text-gray-500 mb-8">
          What Our Clients Say <br />
          <span className="text-[#A2D22E] font-extrabold text-6xl uppercase">
            Reviews
          </span>
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
