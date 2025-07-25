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
      "When you're dealing with the volumes we do, reliability is non-negotiable. RYOPAPERS has never missed a beat. Their team really understands the nuances of paper production, and it shows in their ability to deliver top-tier rolling papers, consistently and efficiently. They're true experts in their field.",
    authorName: "Anna Jónsdóttir",
    authorTitle: "Global Smoking Accessories, ICELAND",
  },
  {
    quote:
      "Partnering with RYOPAPERS for our custom rolling papers has been a game-changer. They made the entire customization process seamless, from our specific paper blends to branded packaging. But what truly set them apart was their flexible approach to MOQs (Minimum Order Quantities). It allowed us to launch our unique branded papers without a huge upfront commitment, letting us test the market effectively. Their manufacturing precision means the final product always looks and performs exactly as we envisioned, giving us a real edge over competitors.",
    authorName: "Sarah J.",
    authorTitle: "The Green Leaf Emporium, USA",
  },
  {
    quote:
      "Working with RYOPAPERS has been a real blessing for us at NaijaRollers, no lie. From day one, they made the whole custom paper thing easy — the blend, the branding, everything correct. The best part? Their low MOQ. We didn’t need to break bank to start our own line. Plus, their shipping and dropshipping dey on point — our customers get their papers sharp-sharp, no wahala at all. Good people, good service, top quality — RYOPAPERS get am!",
    authorName: "Chinedu Okafor",
    authorTitle: "NaijaRollers, Lagos, Nigeria",
  },
  {
    quote:
      "Trabajar con RYOPAPERS fue un acierto total para nosotros en RollingChile. Desde el primer día nos ayudaron a crear un diseño único para nuestra marca, con opciones de papel y empaques que aquí en Chile no se encuentran fácil. Otra cosa buena fue el precio justo y las cantidades flexibles — pudimos empezar chico y crecer paso a paso sin quedarnos sin stock. Además, siempre tienen buena comunicación y nos mandan muestras para probar nuevas ideas antes de producir en grande. El envío llega sin problemas y rápido, incluso para nosotros acá en Santiago. Con RYOPAPERS ganamos calidad, respaldo y un socio confiable. ¡Los recomiendo sin dudar!",
    authorName: "Juan González",
    authorTitle: "RollingChile, Santiago, Chile",
  },
  {
    quote:
      "Bringing RYOPAPERS on board made everything so much smoother for us at Volute. We wanted genuine French paper with premium quality, and they handled every detail, no fuss at all. The best part? Our customers can’t tell the difference — whether it’s made here or through RYOPAPERS, the quality and finish are spot on. No stress over big order sizes either — we stay stocked without overcommitting. They’re reliable, quick, and always ready to help. No drama — RYOPAPERS just gets it right.",
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
