"use client";
import { useState } from "react";
import Script from "next/script";
import Link from "next/link";
import { motion } from "framer-motion";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "What is the minimum order quantity for custom rolling papers?",
      a: "RYO Papers manufactures custom rolling papers from a minimum order quantity of 500 packs — one of the lowest MOQs in the global rolling paper manufacturing industry, where most factories require 10,000+ packs. This MOQ allows new brands and startups to test market response without locking heavy capital into unsold inventory. Once your initial production sells through, we scale orders up to 50,000+ packs with the same quality standards and a tiered pricing structure."
    },
    {
      q: "What types of rolling paper does RYO Papers manufacture?",
      a: "RYO Papers manufactures five primary rolling paper types: rice paper (12–14 GSM, ultra-thin, neutral taste), hemp paper (14–18 GSM, slightly textured, organic positioning), flax paper (13–16 GSM, traditional European, durable), wood pulp paper (14–25 GSM, cost-efficient classic), and cellulose paper (11–13 GSM, transparent premium niche). We also formulate custom blends for brands with specific GSM, porosity, burn rate, or fiber composition requirements. Available formats include king size, 1¼ size, slim, single wide, and double wide."
    },
    {
      q: "How long does rolling paper contract manufacturing take from order to delivery?",
      a: "Standard turnaround for custom rolling paper contract manufacturing is 3–5 weeks from approved sample to dispatch. Breakdown: sample approval (3–7 days), production (12–18 days), QC and packaging (3–5 days), and direct international shipment (7–21 days depending on destination). Rush production reduces this to 18–22 days for time-sensitive launches. Our average lead time has dropped from 6 weeks in 2017 to 3.5 weeks in 2026 thanks to in-house design, sampling, and printing."
    },
    {
      q: "Do you offer white-label and private-label rolling papers?",
      a: "Yes — white-label and private-label manufacturing is one of our core services. We manufacture papers, booklets, packaging, and outer cartons entirely to your brand specifications. Your brand name, logo, design, and barcode appear on every unit; RYO Papers never appears on your retail product. This is the standard model for over 80% of our clients, including distributors, dispensaries, e-commerce brands, and retail chains. We also offer full OEM manufacturing for clients with proprietary paper formulations."
    },
    {
      q: "Does RYO Papers ship rolling papers globally?",
      a: "Yes. We ship rolling papers to over 30 countries across North America, Europe, Asia, Australia, and the Middle East. All shipments are handled directly by our logistics team — no middlemen, no hidden freight markups. Standard shipping is via DHL, FedEx, or sea freight depending on order volume. Every shipment is tracked and insured. We handle customs documentation, certificates of origin, and HSN code declarations. Total lead time including international shipping is typically 4–7 weeks."
    },
    {
      q: "Can I get rolling paper samples before committing to a full order?",
      a: "Absolutely. We send physical printed samples before any production run begins — you approve paper feel, burn quality, gum performance, print finish, and packaging weight in your hand before committing capital. We do not begin full manufacturing until you're satisfied. Sample lead time is 7–10 days. This is standard process, not an upsell. Sample fees are waived on confirmed orders above 5,000 packs."
    },
    {
      q: "What is GSM in rolling papers and which GSM should I choose?",
      a: "GSM stands for grams per square meter and measures rolling paper thickness. Lower GSM means thinner paper. Industry range is 11–25 GSM. Premium brands typically choose 12–14 GSM for the cleanest smoke and highest perceived quality. Mid-market brands choose 14–18 GSM for balance between feel and durability. Value brands use 18–25 GSM for cost efficiency and easier rolling. RYO Papers manufactures across the full 11–25 GSM range and recommends 14 GSM as the optimal starting point — over 70% of new clients launch at this weight."
    },
    {
      q: "Where is RYO Papers manufactured? Is it Made in India?",
      a: "RYO Papers manufactures all rolling papers in our facility in Indore, Madhya Pradesh, India. Every roll, booklet, and pack is Made in India and ships from India to clients worldwide. Indian manufacturing offers a structural cost advantage over European and Chinese factories while meeting the same FSC, ISO, and food-grade compliance standards. As a registered exporter under Indian DGFT, we provide complete export documentation including Certificate of Origin and HSN classification (4813 — cigarette paper) on every shipment."
    },
    {
      q: "Do you offer custom printing on rolling papers and packaging?",
      a: "Yes. We offer full in-house custom printing on rolling papers, booklets, and packaging. Available finishes include CMYK offset printing, Pantone spot colors, foil stamping (gold, silver, holographic), embossing, debossing, spot UV, soft-touch lamination, and matte/gloss finishes. Watermarks can be added directly to the paper itself. Our in-house design team creates print-ready artwork from your brief, mood board, or logo at no extra charge. Print files accepted in AI, PDF (vector), or high-resolution PNG."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <section className="py-20 px-[clamp(20px,5vw,80px)] bg-cream-200" id="faq">
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-20 items-start">
        <div className="md:sticky md:top-20">
          <span className="text-[11px] font-medium tracking-[0.12em] uppercase text-brand mb-3 block">FAQ</span>
          <h2 className="font-display text-[clamp(28px,3.5vw,44px)] font-black leading-[1.1] tracking-tight text-ink mb-4">Common Questions</h2>
          <p className="text-[15px] text-muted mt-4 leading-relaxed font-light">Everything you need to know before placing your first order. Have a question not covered here?</p>
          <Link href="/contact" className="inline-block mt-6 text-[13px] font-medium text-brand-deep border-b border-brand-deep pb-0.5 hover:opacity-70 transition-opacity">Contact our team →</Link>
        </div>
        <div className="flex flex-col border border-[rgba(26,22,18,0.12)]" role="list">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-[rgba(26,22,18,0.12)] last:border-b-0 overflow-hidden" role="listitem">
              <button
                className={`w-full bg-none border-none cursor-pointer p-[22px_24px] text-left flex justify-between items-center gap-4 text-[15px] font-medium text-ink leading-[1.4] transition-colors duration-150 hover:bg-cream-300 ${openIndex === index ? "bg-ryo-50 !text-brand" : ""}`}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
              >
                {faq.q}
                <span className={`shrink-0 w-5 h-5 border border-current rounded-full flex items-center justify-center text-xs transition-transform duration-200 ${openIndex === index ? "rotate-45" : ""}`} aria-hidden="true">+</span>
              </button>
              <motion.div 
                initial={false}
                animate={{ 
                  height: openIndex === index ? "auto" : 0, 
                  opacity: openIndex === index ? 1 : 0 
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden bg-cream-50" 
                role="region"
              >
                <div className="p-[20px_24px] text-[15px] text-muted leading-relaxed">
                  {faq.a}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
