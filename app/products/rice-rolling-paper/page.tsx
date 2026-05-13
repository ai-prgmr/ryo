import { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import FadeUp from "@/app/components/FadeUp";

export const metadata: Metadata = {
  title: "Rice Rolling Paper Manufacturer — Ultra-Thin Premium | RYO Papers",
  description: "Rice rolling paper manufacturer. Ultra-thin 12–14 GSM. Neutral taste, slow burn, watermark-friendly. OEM & white-label from 500 packs. Made in India, shipped to 30+ countries.",
  keywords: [
    "rice rolling paper manufacturer",
    "rice paper rolling",
    "ultra thin rice paper",
    "rice paper OEM",
    "white label rice rolling paper",
    "custom rice rolling paper",
    "14 gsm rice paper",
    "premium rolling paper rice",
  ],
  alternates: {
    canonical: "https://ryopapers.com/products/rice-rolling-paper",
  },
  openGraph: {
    title: "Rice Rolling Paper Manufacturer — Ultra-Thin Premium | RYO Papers",
    description: "Rice rolling paper manufacturer. Ultra-thin 12–14 GSM. Neutral taste, slow burn, watermark-friendly. OEM & white-label from 500 packs. Made in India, shipped to 30+ countries.",
    url: "https://ryopapers.com/products/rice-rolling-paper",
    type: "website",
    images: [
      {
        url: "https://ryopapers.com/images/ryopapers-final-logo.png",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RiceRollingPaperPage() {
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://ryopapers.com/products/rice-rolling-paper/#webpage",
    "url": "https://ryopapers.com/products/rice-rolling-paper",
    "name": "Rice Rolling Paper Manufacturer — Ultra-Thin Premium | RYO Papers",
    "description": "Rice rolling paper manufacturer. Ultra-thin 12–14 GSM. Neutral taste, slow burn, watermark-friendly. OEM & white-label from 500 packs. Made in India, shipped to 30+ countries.",
    "publisher": { "@id": "https://ryopapers.com/#organization" }
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Rice Rolling Paper",
    "description": "Rice rolling paper manufacturer. Ultra-thin 12–14 GSM. Neutral taste, slow burn, watermark-friendly. OEM & white-label from 500 packs. Made in India, shipped to 30+ countries.",
    "brand": { "@type": "Brand", "name": "RYO Papers" },
    "manufacturer": { "@type": "Organization", "name": "RYO Papers", "url": "https://ryopapers.com" },
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceCurrency": "USD",
      "eligibleQuantity": { "@type": "QuantitativeValue", "minValue": 500, "unitText": "packs" }
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is rice rolling paper made from?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Rice rolling paper is manufactured from processed rice straw fibers. The straw is pulped, refined to remove lignins and impurities, then formed into thin sheets at the target GSM. The result is one of the cleanest-burning, most neutral-tasting paper bases in the industry."
        }
      },
      {
        "@type": "Question",
        "name": "Why is rice paper the most popular type for premium brands?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "At 12–14 GSM, rice paper is the thinnest commercial rolling paper available, which translates to a higher perceived quality in hand. It has no paper taste, so it doesn't interfere with the user's chosen blend."
        }
      },
      {
        "@type": "Question",
        "name": "What GSM should I choose for rice rolling paper?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We recommend 14 GSM as the optimal balance for new brands. It is thin enough to feel premium but durable enough for retail handling. 12 GSM is available for brands requiring maximum transparency."
        }
      },
      {
        "@type": "Question",
        "name": "Can you add a watermark to rice rolling paper?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Rice paper accepts watermarking better than any other material. We can emboss your logo or pattern directly into the fiber during manufacturing."
        }
      },
      {
        "@type": "Question",
        "name": "What is the minimum order for custom rice rolling paper?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "RYO Papers manufactures custom rice rolling paper from a minimum of 500 packs. This is one of the lowest MOQs in the global manufacturing industry."
        }
      }
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://ryopapers.com" },
      { "@type": "ListItem", "position": 2, "name": "Manufacturer", "item": "https://ryopapers.com/rolling-paper-manufacturer" },
      { "@type": "ListItem", "position": 3, "name": "Rice Rolling Paper", "item": "https://ryopapers.com/products/rice-rolling-paper" }
    ]
  };

  return (
    <div className="bg-bg text-text font-sans leading-relaxed overflow-x-hidden">
      <Script
        id="rice-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="rice-webpage-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <Script
        id="rice-product-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <Script
        id="rice-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />



      {/* ── BREADCRUMB ── */}
      <nav className="bg-bg border-b border-border py-3.5 px-[clamp(20px,5vw,80px)] text-[12px] text-muted flex gap-2 items-center" aria-label="breadcrumb">
        <Link href="/" className="text-brand-deep hover:underline">Home</Link>
        <span className="text-[rgba(26,22,18,0.1)]" aria-hidden="true">›</span>
        <Link href="/rolling-paper-manufacturer" className="text-brand-deep hover:underline">Manufacturer</Link>
        <span className="text-[rgba(26,22,18,0.1)]" aria-hidden="true">›</span>
        <span>Rice Rolling Paper</span>
      </nav>

      {/* ── HERO ── */}
      <section className="min-h-[80vh] grid grid-cols-1 md:grid-cols-[1.2fr_1fr] items-center py-20 px-[clamp(20px,5vw,80px)] gap-[60px] relative overflow-hidden" aria-label="Hero">
        <div className="absolute inset-0 pointer-events-none" 
          style={{
            background: `
              radial-gradient(ellipse 60% 50% at 70% 50%, rgba(59,94,58,0.06) 0%, transparent 70%),
              repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(26,22,18,0.025) 40px),
              repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(26,22,18,0.025) 40px)
            `
          }}
        />
        
        <div className="relative z-10">
          <FadeUp delay={0}>
            <span className="inline-flex items-center gap-[10px] text-[11px] font-medium tracking-[0.12em] uppercase text-brand-deep bg-brand-light py-1.5 px-3.5 rounded-sm mb-6 before:content-[''] before:w-5 before:h-px before:bg-[#3B5E3A]">
              Premium Rice Fiber · Ultra-Thin · 12-14 GSM
            </span>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h1 className="font-display text-[clamp(36px,5.2vw,64px)] font-black leading-[1.05] tracking-tight text-ink mb-6">
              Rice Rolling Paper <em className="italic text-brand font-bold">Manufacturer</em>
            </h1>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="text-[clamp(15px,1.4vw,18px)] text-text leading-relaxed max-w-[560px] mb-9 font-light">
              We manufacture the world&apos;s cleanest-burning rice rolling papers. Sourced from natural rice straw and processed without chlorine, our rice paper is the industry standard for brands requiring maximum transparency and zero aftertaste.
            </p>
          </FadeUp>
          <FadeUp delay={0.3}>
            <div className="flex gap-3.5 flex-wrap mb-12">
              <Link href="/contact" className="btn btn-primary btn-lg">
                Request a Sample
              </Link>
              <Link href="#specs" className="btn btn-secondary btn-lg">
                View Specifications
              </Link>
            </div>
          </FadeUp>
          <FadeUp delay={0.4}>
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-[rgba(26,22,18,0.1)]">
              <div>
                <div className="font-display text-[clamp(24px,2.6vw,34px)] font-black text-brand-deep leading-none">12-14</div>
                <div className="text-[12px] text-[#7A6F65] tracking-wider uppercase mt-1.5">GSM Range</div>
              </div>
              <div>
                <div className="font-display text-[clamp(24px,2.6vw,34px)] font-black text-brand-deep leading-none">Slow</div>
                <div className="text-[12px] text-[#7A6F65] tracking-wider uppercase mt-1.5">Burn Rate</div>
              </div>
              <div>
                <div className="font-display text-[clamp(24px,2.6vw,34px)] font-black text-brand-deep leading-none">0%</div>
                <div className="text-[12px] text-[#7A6F65] tracking-wider uppercase mt-1.5">Aftertaste</div>
              </div>
            </div>
          </FadeUp>
        </div>
        
        <FadeUp delay={0.5} className="hero-visual">
          <div className="bg-surface border border-[rgba(26,22,18,0.1)] rounded-lg shadow-[0_30px_60px_rgba(26,22,18,0.10)] p-[60px_40px] w-full max-w-[360px] text-center relative">
            <span className="text-[96px] mb-5 block">🌾</span>
            <div className="font-display text-[26px] font-bold text-ink mb-1.5">Rice Paper</div>
            <div className="text-[11px] text-brand tracking-[0.1em] uppercase font-medium">Ultra-Thin & Neutral</div>
            <div className="absolute -top-[14px] right-6 bg-accent text-ink py-1.5 px-3.5 rounded-sm text-[11px] font-bold tracking-[0.06em] uppercase">Most Popular</div>
          </div>
        </FadeUp>
      </section>

      {/* ── TRUST BAND ── */}
      <div className="bg-bg border-t border-b border-border py-10 px-[clamp(20px,5vw,80px)]">
        <div className="flex flex-wrap justify-center items-center gap-12">
          {[
            "Sustainably Sourced Rice Straw",
            "Chlorine-Free Processing",
            "Food-Grade Arabic Gum",
            "MOQ From 500 Packs",
            "Global Shipping"
          ].map((text, i) => (
            <div key={i} className="flex items-center gap-2.5 text-[13px] font-medium tracking-wider uppercase text-muted">
              <span className="w-8 h-8 border-[1.5px] border-brand rounded-full flex items-center justify-center text-brand text-sm font-bold bg-brand-light">✓</span>
              {text}
            </div>
          ))}
        </div>
      </div>

      {/* ── SECTION INTRO ── */}
      <section className="py-24 px-[clamp(20px,5vw,80px)]">
        <span className="inline-block text-[11px] font-medium tracking-[0.14em] uppercase text-brand mb-4">Manufacturer Overview</span>
        <h2 className="font-display text-[clamp(28px,3.6vw,44px)] font-black leading-[1.1] tracking-tight text-ink mb-8">The Cleanest Smoke. <em className="italic text-brand font-bold">The Thinnest Paper.</em></h2>
        <div className="text-[17px] text-muted font-light max-w-[780px] leading-relaxed space-y-4">
          <p>
            Rice rolling paper is the gold standard for premium brands. Manufactured from refined rice straw fibers, it offers the thinnest profile in the industry (12–14 GSM) while maintaining remarkable tensile strength for rolling.
          </p>
          <p>
            At RYO Papers, we utilize a specialized pulping process that removes lignins and impurities without the use of harsh bleaching agents. The result is a paper that is nearly transparent, exceptionally clean, and leaves absolutely zero residue or aftertaste, allowing the user to experience their blend exactly as intended.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="p-8 bg-surface border border-border border-l-[3px] border-l-brand">
            <span className="font-display text-[28px] font-black text-brand mb-3 block">01</span>
            <h3 className="text-[19px] font-bold text-ink mb-2">Neutral Taste</h3>
            <p className="text-[14.5px] text-muted leading-relaxed">Rice straw fibers are naturally low in aromatic compounds, ensuring the paper never interferes with the flavor profile of the contents.</p>
          </div>
          <div className="p-8 bg-surface border border-border border-l-[3px] border-l-brand">
            <span className="font-display text-[28px] font-black text-brand mb-3 block">02</span>
            <h3 className="text-[19px] font-bold text-ink mb-2">Ultra-Thin (12-14 GSM)</h3>
            <p className="text-[14.5px] text-muted leading-relaxed">The thinnest commercial rolling paper available. Provides a high-end hand feel and maximum transparency for premium brand positioning.</p>
          </div>
          <div className="p-8 bg-surface border border-border border-l-[3px] border-l-brand">
            <span className="font-display text-[28px] font-black text-brand mb-3 block">03</span>
            <h3 className="text-[19px] font-bold text-ink mb-2">Slow, Even Burn</h3>
            <p className="text-[14.5px] text-muted leading-relaxed">Naturally slow-burning fibers ensure a consistent experience from start to finish with minimal ash production.</p>
          </div>
        </div>
      </section>

      {/* ── SPECS TABLE ── */}
      <section className="py-24 px-[clamp(20px,5vw,80px)] bg-bg" id="specs">
        <span className="inline-block text-[11px] font-medium tracking-[0.14em] uppercase text-brand mb-4">Technical Specifications</span>
        <h2 className="font-display text-[clamp(28px,3.6vw,44px)] font-black leading-[1.1] tracking-tight text-ink mb-8">Rice Paper <em className="italic text-brand font-bold">Manufacturing Specs.</em></h2>
        
        <div className="max-w-[760px] border border-border bg-surface">
          {[
            { label: "Standard Weight", value: "14 GSM (Options for 12–13 GSM available)" },
            { label: "Material Source", value: "Refined Rice Straw Fiber" },
            { label: "Burn Speed", value: "Slow / Controlled" },
            { label: "Taste Profile", value: "Neutral (Zero aftertaste)" },
            { label: "Opacity", value: "Semi-Transparent / High Clarity" },
            { label: "Gum Strip", value: "100% Natural Organic Arabic Gum" },
            { label: "Watermarking", value: "Full custom watermarking available" },
          ].map((row, i) => (
            <div key={i} className="grid grid-cols-[200px_1fr] border-bottom border-border last:border-b-0">
              <div className="bg-cream-200 p-4 font-display text-[14px] font-semibold text-ink border-r border-border">{row.label}</div>
              <div className="p-4 text-[14px] text-muted">{row.value}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FORMATS ── */}
      <section className="py-24 px-[clamp(20px,5vw,80px)] bg-bg">
        <span className="inline-block text-[11px] font-medium tracking-[0.14em] uppercase text-brand mb-4">Available Formats</span>
        <h2 className="font-display text-[clamp(28px,3.6vw,44px)] font-black leading-[1.1] tracking-tight text-ink mb-8">Sizes & <em className="italic text-brand font-bold">Formats Available</em></h2>
        <p className="text-[17px] text-muted font-light max-w-[780px] leading-relaxed mb-12">
          Every format below is manufactured at our standard 500-pack minimum. Mix-and-match across sizes is supported on the same purchase order.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "King Size (110mm)", desc: "The most-ordered rice paper format globally. Adult retail standard." },
            { title: "1¼ Size (78mm)", desc: "The classic North American format. Strong demand in US dispensary channels." },
            { title: "Slim (single wide)", desc: "European-favored size. Lower paper-to-content ratio." },
            { title: "Block 100 / 200 / 500", desc: "Higher-volume packaging format for distributors and value retail." },
            { title: "Custom Size", desc: "Any dimension specified by your brief. Print and gum tooling included." },
          ].map((format, i) => (
            <FadeUp key={i} delay={0.05 * i} className="bg-surface border border-border rounded-sm p-7 flex gap-4 items-start">
              <div className="w-6 h-6 bg-brand-light text-brand-deep rounded-full flex items-center justify-center text-[13px] font-bold shrink-0 mt-0.5">✓</div>
              <div>
                <h4 className="font-display text-[17px] font-bold text-ink mb-1">{format.title}</h4>
                <p className="text-[14px] text-[#7A6F65] leading-relaxed">{format.desc}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* ── BEST FOR ── */}
      <section className="py-24 px-[clamp(20px,5vw,80px)] bg-surface">
        <span className="inline-block text-[11px] font-medium tracking-[0.14em] uppercase text-brand mb-4">Best Brand Fit</span>
        <h2 className="font-display text-[clamp(28px,3.6vw,44px)] font-black leading-[1.1] tracking-tight text-ink mb-8">Who Manufactures with <em className="italic text-brand font-bold">Rice Paper?</em></h2>
        <p className="text-[17px] text-muted font-light max-w-[780px] leading-relaxed mb-12">
          The brand segments and retail channels where rice paper is the natural manufacturer choice. If your brand fits one of these patterns, this is likely your material.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { h: "Premium Consumer Brands", p: "Rice is the default for any brand positioning above $5/pack retail. The premium feel is immediately apparent in hand." },
            { h: "US & EU Retail", p: "North American smoke shops and European tobacconists expect rice for their premium SKUs. Customer expectation is set." },
            { h: "Dispensary Lines", p: "Cannabis dispensary private-label programs almost universally choose rice for their flagship paper. Rice signals quality." },
            { h: "Gift Sets & Luxury", p: "Multi-product gift sets (papers + tips + tray) almost always lead with rice paper as the hero SKU." },
          ].map((item, i) => (
            <FadeUp key={i} delay={0.1 * i} className="p-7 bg-bg border-t-[3px] border-t-accent shadow-[0_4px_14px_rgba(26,22,18,0.04)]">
              <h3 className="font-display text-[19px] font-bold text-ink mb-3">{item.h}</h3>
              <p className="text-[14px] text-muted leading-relaxed">{item.p}</p>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* ── COMPARED TO ── */}
      <section className="py-24 px-[clamp(20px,5vw,80px)] bg-bg">
        <span className="inline-block text-[11px] font-medium tracking-[0.14em] uppercase text-brand mb-4">How It Compares</span>
        <h2 className="font-display text-[clamp(28px,3.6vw,44px)] font-black leading-[1.1] tracking-tight text-ink mb-8">Rice <em className="italic text-brand font-bold">vs Other Materials</em></h2>
        <p className="text-[17px] text-muted font-light max-w-[780px] leading-relaxed mb-12">
          Manufacturer-side comparison of rice paper against the four alternative rolling paper materials. Use this when deciding between materials for your launch.
        </p>
        <div className="space-y-4 max-w-[920px]">
          {[
            { k: "vs Hemp", v: "Rice is thinner (12–14 vs 14–18 GSM), burns slower, and has no taste. Hemp is more textured and rolls easier for new users — but rice is the premium signal." },
            { k: "vs Flax", v: "Both are smooth and neutral. Flax has higher tensile strength (less likely to tear) but rice is thinner and considered higher-end in non-European markets." },
            { k: "vs Wood Pulp", v: "Rice is the premium tier; wood pulp is the value tier. Wood pulp burns faster and has a slight paper note. Use wood pulp for value brands, rice for premium positioning." },
            { k: "vs Cellulose", v: "Cellulose is fully transparent and burns even slower than rice. Cellulose is a luxury novelty; rice is the premium daily-use standard." },
          ].map((item, i) => (
            <div key={i} className="grid grid-cols-1 md:grid-cols-[140px_1fr] border border-border overflow-hidden">
              <div className="bg-ink text-white p-5 font-display text-[16px] font-bold flex items-center">{item.k}</div>
              <div className="p-5 text-[14.5px] text-muted leading-relaxed">{item.v}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24 px-[clamp(20px,5vw,80px)] bg-surface" id="faq">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.6fr] gap-[60px] items-start">
          <div className="md:sticky md:top-24">
            <span className="inline-block text-[11px] font-medium tracking-[0.14em] uppercase text-brand mb-4">FAQ</span>
            <h2 className="font-display text-[clamp(26px,3vw,38px)] font-black leading-[1.1] tracking-tight text-ink mb-6">Rice Paper <em className="italic text-brand font-bold">Questions</em></h2>
            <p className="text-[15px] text-muted mb-8 leading-relaxed font-light">
              The most common questions brands ask before placing their first rice paper order.
            </p>
            <Link href="/contact" className="text-[13px] text-brand-deep font-bold uppercase tracking-wider hover:underline">Talk to our team →</Link>
          </div>
          <div className="bg-bg border border-border divide-y divide-border">
            {[
              { q: "What is rice rolling paper made from?", a: "Rice rolling paper is manufactured from processed rice straw fibers. The straw is pulped, refined to remove lignins and impurities, then formed into thin sheets at the target GSM. The result is one of the cleanest-burning, most neutral-tasting paper bases in the industry." },
              { q: "Why is rice paper the most popular type for premium brands?", a: "At 12–14 GSM, rice paper is the thinnest commercial rolling paper available, which translates to a higher perceived quality in hand. It has no paper taste, so it doesn't interfere with the user's chosen blend." },
              { q: "What GSM should I choose for rice rolling paper?", a: "We recommend 14 GSM as the optimal balance for new brands. It is thin enough to feel premium but durable enough for retail handling. 12 GSM is available for brands requiring maximum transparency." },
              { q: "Can you add a watermark to rice rolling paper?", a: "Yes. Rice paper accepts watermarking better than any other material. We can emboss your logo or pattern directly into the fiber during manufacturing." },
              { q: "What is the minimum order for custom rice rolling paper?", a: "RYO Papers manufactures custom rice rolling paper from a minimum of 500 packs. This is one of the lowest MOQs in the global manufacturing industry." },
            ].map((faq, i) => (
              <details key={i} className="group">
                <summary className="list-none p-6 text-[15px] font-bold text-ink cursor-pointer hover:bg-bg-soft flex justify-between items-center transition-colors">
                  {faq.q}
                  <span className="w-5 h-5 border border-current rounded-full flex items-center justify-center text-xs group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-6 pb-6 text-[14.5px] text-muted leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXPLORE OTHER PAPERS ── */}
      <section className="py-24 px-[clamp(20px,5vw,80px)] bg-bg">
        <span className="inline-block text-[11px] font-medium tracking-[0.14em] uppercase text-brand mb-4">Explore Other Materials</span>
        <h2 className="font-display text-[clamp(28px,3.6vw,44px)] font-black leading-[1.1] tracking-tight text-ink mb-8">Other <em className="italic text-brand font-bold">Rolling Paper Types</em> We Manufacture</h2>
        <p className="text-[17px] text-muted font-light max-w-[780px] leading-relaxed mb-12">
          Not sure rice is right for your brand? Explore the other four materials we manufacture.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { icon: "🌿", name: "Hemp", spec: "14–18 GSM · Medium", link: "/products/hemp-rolling-paper" },
            { icon: "🌱", name: "Flax", spec: "13–16 GSM · Smooth & Even", link: "/products/flax-rolling-paper" },
            { icon: "🪵", name: "Wood Pulp", spec: "14–25 GSM · Classic / Faster", link: "/products/wood-pulp-rolling-paper" },
            { icon: "🔮", name: "Cellulose", spec: "11–13 GSM · Very Slow", link: "/products/cellulose-rolling-paper" },
          ].map((item, i) => (
            <Link key={i} href={item.link} className="block p-7 bg-bg border border-border hover:border-brand hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-md group">
              <span className="text-[32px] mb-3 block">{item.icon}</span>
              <div className="font-display text-[18px] font-bold text-ink mb-1">{item.name}</div>
              <div className="text-[11px] text-brand tracking-[0.06em] uppercase mb-3">{item.spec}</div>
              <span className="text-[12px] text-brand-deep font-bold uppercase tracking-wider group-hover:underline">Explore {item.name} →</span>
            </Link>
          ))}
        </div>
        <div className="mt-8">
          <Link href="/rolling-paper-manufacturer" className="text-brand text-[13px] font-bold uppercase tracking-[0.04em] hover:underline">View Full Manufacturer Overview →</Link>
        </div>
      </section>

      {/* ── RELATED CONTENT ── */}
      <section className="py-24 px-[clamp(20px,5vw,80px)] border-t border-border bg-surface">
        <span className="inline-block text-[11px] font-medium tracking-[0.14em] uppercase text-brand mb-4">Related Reading</span>
        <h2 className="font-display text-[clamp(28px,3.6vw,44px)] font-black leading-[1.1] tracking-tight text-ink mb-12">Deep-Dive <em className="italic text-brand font-bold">Resources</em></h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { title: "Hemp vs Rice Rolling Papers", link: "/blogs/hemp-vs-rice-rolling-papers" },
            { title: "What is GSM in Rolling Papers?", link: "/blogs/what-is-gsm-rolling-papers" },
            { title: "Rolling Paper Materials Guide", link: "/blogs/rolling-paper-materials-guide" },
            { title: "How to Start a Rolling Paper Brand", link: "/blogs/how-to-start-rolling-paper-brand" },
          ].map((blog, i) => (
            <Link key={i} href={blog.link} className="p-6 bg-bg border border-border border-l-[3px] border-l-brand hover:bg-brand-light transition-colors group">
              <div className="text-[11px] text-brand tracking-[0.08em] uppercase font-bold mb-2">Related Reading</div>
              <div className="font-display text-[16px] font-bold text-ink leading-tight">{blog.title}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-ink text-white py-24 px-[clamp(20px,5vw,80px)] flex items-center justify-between gap-10 flex-wrap">
        <div>
          <h2 className="font-display text-[clamp(28px,3.5vw,44px)] font-black leading-[1.1] tracking-tight text-white mb-2">Ready to <em className="italic text-brand font-bold">Manufacture</em> Your Rice Brand?</h2>
          <p className="text-base text-[rgba(255,255,255,0.65)] font-light max-w-[500px]">Talk to a real person. Get a quote within 24 hours. Sample shipped within 7–10 days.</p>
        </div>
        <div className="flex gap-3.5 flex-wrap shrink-0">
          <Link href="/contact" className="btn btn-gold btn-lg">Request a Quote</Link>
          <a href="https://wa.me/+919009111088?text=Hello!%20I%20want%20to%20enquire%20about%20Rice%20Rolling%20Paper%20manufacturing." className="btn btn-secondary border-white/30 text-white hover:border-white/70 btn-lg">WhatsApp Us</a>
        </div>
      </section>
    </div>
  );
}
