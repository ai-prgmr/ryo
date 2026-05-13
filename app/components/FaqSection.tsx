"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const faqData = [
  {
    num: "01",
    q: "What is RYO Papers, and are you a manufacturer or a middleman?",
    a: "RYO Papers is the rolling paper manufacturing arm of YUVU Overseas — a family-run manufacturing house in Indore, India. We're a direct manufacturer, not a trader or middleman. Every roll, booklet, and pack is produced in our own facility. When you work with us, you're talking to the people who actually make your paper — not an agent quoting on someone else's production. We've been manufacturing since 2017 and currently supply over 100 active brands across 30+ countries."
  },
  {
    num: "02",
    q: "Who are your typical clients — and can I work with you as a small startup?",
    a: "Most of our clients are emerging rolling paper brands, distributors, dispensaries, e-commerce sellers, and retail chains. About 70% of them launched their brand with us. Our 500-pack minimum order is one of the lowest in the global industry — most factories require 10,000+. That MOQ exists specifically so first-time brand founders can test the market without locking heavy capital into inventory. If you have an idea, we can help you start small and scale to 50,000+ packs as you grow."
  },
  {
    num: "03",
    q: "What makes RYO Papers different from other rolling paper manufacturers?",
    a: "Three things consistently come up from clients: low MOQs (500 packs vs. industry-standard 10,000+), direct human support (you talk to a real person, not a sales bot or agent layer), and full in-house capability — paper manufacturing, design, custom printing, and packaging all under one roof. We're also one of the few manufacturers offering rice, hemp, flax, wood pulp, and cellulose papers from a single facility. No quality drift between sample and production — what you approve is what ships."
  },
  {
    num: "04",
    q: "I have an idea but no packaging design. Can you help with the artwork?",
    a: "Yes. Our in-house design team creates print-ready artwork from your brief, mood board, or even just a logo — at no extra charge on confirmed orders. You don't need a designer or an agency to launch with us. We've designed packaging for everything from minimalist premium brands to colorful retail-chain private labels. Send us what you have (Pinterest board, sketch, competitor reference, anything) and we'll come back with concept directions within 5–7 days."
  },
  {
    num: "05",
    q: "How do I get started with custom rolling papers?",
    a: "Three steps: (1) Send us a message via WhatsApp, email, or our contact form — tell us roughly what you want (paper type, size, quantity, brand vibe). (2) We respond within 24 hours with feasibility, pricing, and timeline. If it's a fit, we send a physical printed sample for your approval within 7–10 days. (3) Once you approve the sample, we manufacture and ship in 3–5 weeks. No long onboarding calls, no minimum commitment contracts. You can stop after sampling if it's not right."
  },
  {
    num: "06",
    q: "Are custom rolling papers legal where I plan to sell them?",
    a: "In every major market we ship to — North America, EU, UK, Australia, the Gulf, and most of Asia — manufacturing and selling rolling papers as a legal accessory product is permitted. Hemp rolling paper specifically is made from industrial hemp fiber (the stalk) and contains zero THC, so it's classified as a paper product, not a controlled substance. You're responsible for compliance with local retail and import regulations and any branding restrictions. If you tell us your target market at the brief stage, we'll flag anything we've seen come up before."
  },
  {
    num: "07",
    q: "Can RYO Papers help me launch a complete rolling paper brand from scratch?",
    a: "Yes — this is what we do most. About 70% of our clients had never manufactured a product before they came to us. We handle paper, booklets, packaging, custom printing, design, and shipping under one roof. What you need to bring: a brand name, a sense of the audience you're targeting, and the willingness to commit to at least a 500-pack first order. What we bring: production, design support, sampling, QC, certifications, and direct shipping to your warehouse. From first message to delivered product, most new brands launch within 6–8 weeks."
  }
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(item => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.a
      }
    }))
  };

  return (
    <section className="relative py-24 md:py-32 px-6 md:px-12 bg-white overflow-hidden" aria-labelledby="faq-heading">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      {/* Subtle backdrop */}
      <div className="absolute inset-0 pointer-events-none opacity-50">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_50%_at_100%_100%,rgba(162,210,48,0.04)_0%,transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_0%_0%,rgba(45,74,43,0.03)_0%,transparent_60%)]"></div>
      </div>

      <div className="max-w-[1240px] mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-10 md:gap-20 items-start">
        
        {/* LEFT: Header */}
        <div className="lg:sticky lg:top-10">
          <span className="inline-flex items-center gap-3 font-mono text-[11px] font-medium text-ryo-700 bg-ryo-100 px-3.5 py-1.5 rounded-full uppercase tracking-widest mb-6">
            <span className="w-2 h-2 rounded-full bg-ryo-400"></span>
            Common Questions
          </span>
          <h2 id="faq-heading" className="font-display text-[clamp(32px,4vw,52px)] font-normal text-forest-600 leading-[1.05] tracking-tight mb-5">
            Questions brands ask <em className="italic font-medium text-ryo-600">before</em> they start.
          </h2>
          <p className="text-base text-cream-700 leading-relaxed font-light mb-7">
            Most of our clients are first-time brand founders. These are the
            questions that come up before the first conversation.
          </p>
          <div className="p-[22px] bg-cream-100 border-l-4 border-ryo-400 rounded-r-lg mb-5">
            <div className="font-mono text-[10px] text-cream-600 tracking-widest uppercase mb-2">Still have questions?</div>
            <p className="text-sm text-cream-700 leading-relaxed mb-3.5">
              Talk to a real person on WhatsApp. Most queries answered within an hour during Indian business hours.
            </p>
            <Link 
              href="https://wa.me/+919009111088?text=Hello!%20I%20have%20a%20question%20about%20your%20rolling%20papers." 
              className="inline-flex items-center gap-2 font-sans text-[13px] font-semibold text-forest-600 hover:text-ryo-600 transition-colors group"
            >
              Message us on WhatsApp
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>

        {/* RIGHT: FAQ List */}
        <div className="border-t border-cream-300">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className={`border-b border-cream-300 transition-colors duration-200 ${isOpen ? 'bg-ryo-400/5' : ''}`}>
                <button 
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full text-left py-7 grid grid-cols-[36px_1fr_36px] gap-4 items-start font-display text-lg md:text-xl font-medium text-forest-600 tracking-tight leading-snug group transition-colors duration-200 hover:text-ryo-600"
                  aria-expanded={isOpen}
                >
                  <span className={`font-mono text-xs font-medium tracking-wider transition-colors duration-200 mt-1 ${isOpen ? 'text-ryo-600' : 'text-cream-500'}`}>
                    {item.num}
                  </span>
                  <span>{item.q}</span>
                  <span className={`w-9 h-9 border-[1.5px] border-cream-400 rounded-full flex items-center justify-center text-lg font-light transition-all duration-300 ${isOpen ? 'bg-ryo-400 border-ryo-400 text-forest-700 rotate-45' : 'text-cream-600 group-hover:border-ryo-400 group-hover:text-ryo-600'}`}>
                    +
                  </span>
                </button>
                <motion.div
                  initial={false}
                  animate={{ 
                    height: isOpen ? "auto" : 0, 
                    opacity: isOpen ? 1 : 0 
                  }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <div className="pl-12 pr-12 pb-8">
                    <p className="font-sans text-[15.5px] text-cream-700 leading-relaxed font-normal">
                      {item.a}
                    </p>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FaqSection;
