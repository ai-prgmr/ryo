"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowRight, Cog } from "lucide-react";
import { machines } from "@/app/lib/machineData";

export default function ProductsClient() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const machine_data = machines;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };



  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-background via-background to-accent/5">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto mb-20"
          >
            <h1 className="text-3xl mt-5 text-black text-center uppercase">
              Our Core{" "}<br />
              <span className="text-6xl text-black uppercase font-extrabold">
                Precision
              </span>{" "}
              <span className="text-6xl text-[#A2D22E] uppercase font-extrabold">
                Machines
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Engineered for excellence, built for reliability. Each machine
              represents decades of manufacturing expertise and innovation.
            </p>
          </motion.div>

          {/* Machinery Grid */}
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {machine_data.map((machine, index) => (
              <motion.div key={machine.id} // Framer Motion animation props
                initial={{ opacity: 0, y: 50 }} // Start invisible and slightly below
                whileInView={{ opacity: 1, y: 0 }} // Animate to fully visible and original position
                transition={{
                  duration: 0.7, // Duration of the individual card animation
                  delay: index * 0.1, // Stagger delay: each card animates 0.1s after the previous one
                  ease: "easeOut",
                }}>
                <Link href={`/machines/${machine.slug}`}>
                  <div
                    className="h-full rounded-lg border border-border bg-card hover:shadow-xl cursor-pointer transition-all duration-300 group overflow-hidden"
                    data-testid={`card-product-${machine.slug}`}
                  >
                    {/* Image Placeholder with Icon */}
                    <div className="aspect-[4/3] bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <Cog className="w-24 h-24 text-primary/40 group-hover:scale-110 transition-transform duration-300" />

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-primary/90 backdrop-blur-sm px-6 py-3 rounded-full">
                          <span className="text-primary-foreground font-semibold flex items-center gap-2">
                            View Details
                            <ArrowRight className="w-4 h-4" />
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-2xl font-semibold mb-2 group-hover:text-primary transition-colors">
                        {machine.name}
                      </h3>
                      <p className="text-sm text-primary font-medium mb-4">
                        {machine.tagline}
                      </p>
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {machine.description}
                      </p>

                      {/* Specs */}
                      <div className="space-y-2 mb-6">
                        {machine.specifications.map((spec, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-2 text-sm"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                            <span className="text-muted-foreground">
                              {spec.value}
                            </span>
                          </div>
                        ))}
                      </div>

                      <button
                        className="w-full px-4 py-2 rounded-md border border-border bg-background hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all group-hover:bg-primary group-hover:text-primary-foreground"
                        data-testid={`button-learn-more-${machine.id}`}
                      >
                        <span className="flex items-center justify-center gap-2">
                          Learn More
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </button>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Support CTA */}
      <section className="py-24 bg-indigo-700 text-white">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Need Help Choosing the Right Equipment?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our technical team is ready to help you find the perfect solution
              for your production needs.
            </p>
            <Link href="/contact">
              <button
                className="inline-flex items-center justify-center px-8 py-4 rounded-md bg-white text-indigo-600 font-bold text-base shadow-lg hover:bg-primary/90 transition-all"
                data-testid="button-contact-expert"
              >
                Contact an Expert
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
