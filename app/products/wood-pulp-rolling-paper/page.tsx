import { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import FadeUp from "@/app/components/FadeUp";

export const metadata: Metadata = {
  title: "Wood Pulp Rolling Paper Manufacturer — Cost-Efficient at Scale | RYO Papers",
  description: "Wood pulp rolling paper manufacturer. Classic 14–25 GSM, bleached or unbleached, best price-quality ratio. OEM & white-label from 500 packs. Made in India.",
  keywords: [
    "wood pulp rolling paper manufacturer",
    "classic rolling paper",
    "value rolling paper",
    "bleached rolling paper",
    "unbleached rolling paper",
    "white label wood pulp paper",
    "custom wood pulp paper",
    "bulk rolling paper",
  ],
  alternates: {
    canonical: "https://ryopapers.com/products/wood-pulp-rolling-paper",
  },
  openGraph: {
    title: "Wood Pulp Rolling Paper Manufacturer — Cost-Efficient at Scale | RYO Papers",
    description: "Wood pulp rolling paper manufacturer. Classic 14–25 GSM, bleached or unbleached, best price-quality ratio. OEM & white-label from 500 packs. Made in India.",
    url: "https://ryopapers.com/products/wood-pulp-rolling-paper",
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

export default function WoodPulpRollingPaperPage() {
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://ryopapers.com/products/wood-pulp-rolling-paper/#webpage",
    "url": "https://ryopapers.com/products/wood-pulp-rolling-paper",
    "name": "Wood Pulp Rolling Paper Manufacturer — Cost-Efficient at Scale | RYO Papers",
    "description": "Wood pulp rolling paper manufacturer. Classic 14–25 GSM, bleached or unbleached, best price-quality ratio. OEM & white-label from 500 packs. Made in India.",
    "publisher": { "@id": "https://ryopapers.com/#organization" }
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Wood Pulp Rolling Paper",
    "description": "Wood pulp rolling paper manufacturer. Classic 14–25 GSM, bleached or unbleached, best price-quality ratio. OEM & white-label from 500 packs. Made in India.",
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
        "name": "What is wood pulp rolling paper?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Wood pulp rolling paper is the classic, original rolling paper material — manufactured from refined wood pulp fiber. It's the most cost-efficient rolling paper material available and the easiest to scale to high volume."
        }
      },
      {
        "@type": "Question",
        "name": "Is wood pulp rolling paper lower quality than rice or hemp?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Not lower quality — different positioning. Wood pulp is the value tier, rice is the premium tier, hemp is the wellness tier. A well-manufactured wood pulp paper passes the same strict QC protocols as our other lines."
        }
      },
      {
        "@type": "Question",
        "name": "Should I choose bleached or unbleached wood pulp?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Bleached wood pulp is pure white and looks clean — the standard for convenience retail. Unbleached wood pulp is natural-brown and signals 'eco' to consumers. Both are available at the same MOQ."
        }
      },
      {
        "@type": "Question",
        "name": "What is the minimum order for custom wood pulp rolling paper?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "RYO Papers manufactures custom wood pulp rolling paper from a minimum of 500 packs. However, its true cost advantage emerges at higher volumes (5,000+ packs)."
        }
      },
      {
        "@type": "Question",
        "name": "Is wood pulp rolling paper sustainable?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "RYO Papers uses sustainably sourced wood pulp from certified forestry operations and offers FSC-certified production on request. It is recyclable and biodegradable."
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
      { "@type": "ListItem", "position": 3, "name": "Wood Pulp Rolling Paper", "item": "https://ryopapers.com/products/wood-pulp-rolling-paper" }
    ]
  };

  return (
    <div className="bg-bg text-text font-sans leading-relaxed overflow-x-hidden">
      <Script
        id="wood-pulp-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="wood-pulp-webpage-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <Script
        id="wood-pulp-product-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <Script
        id="wood-pulp-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />


      {/* ── BREADCRUMB ── */}
      <nav className="bg-bg border-b border-border py-3.5 px-[clamp(20px,5vw,80px)] text-[12px] text-muted flex gap-2 items-center" aria-label="breadcrumb">
        <Link href="/" className="text-brand-deep hover:underline">Home</Link>
        <span className="text-[rgba(26,22,18,0.1)]" aria-hidden="true">›</span>
        <Link href="/rolling-paper-manufacturer" className="text-brand-deep hover:underline">Manufacturer</Link>
        <span className="text-[rgba(26,22,18,0.1)]" aria-hidden="true">›</span>
        <span>Wood Pulp Rolling Paper</span>
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
              Classic Wood Fiber · Cost-Efficient · 14-25 GSM
            </span>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h1 className="font-display text-[clamp(36px,5.2vw,64px)] font-black leading-[1.05] tracking-tight text-ink mb-6">
              Wood Pulp Paper <em className="italic text-brand font-bold">Manufacturer</em>
            </h1>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="text-[clamp(15px,1.4vw,18px)] text-text leading-relaxed max-w-[560px] mb-9 font-light">
              We manufacture the world&apos;s most reliable wood pulp rolling papers for value-tier and high-volume brands. Sourced from sustainable forestry, our wood pulp paper offers a classic burn profile and the best price-to-quality ratio in the global market.
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
                <div className="font-display text-[clamp(24px,2.6vw,34px)] font-black text-brand leading-none">14-25</div>
                <div className="text-[12px] text-muted tracking-wider uppercase mt-1.5">GSM Range</div>
              </div>
              <div>
                <div className="font-display text-[clamp(24px,2.6vw,34px)] font-black text-brand leading-none">Classic</div>
                <div className="text-[12px] text-muted tracking-wider uppercase mt-1.5">Burn Rate</div>
              </div>
              <div>
                <div className="font-display text-[clamp(24px,2.6vw,34px)] font-black text-brand leading-none">Value</div>
                <div className="text-[12px] text-muted tracking-wider uppercase mt-1.5">Tier</div>
              </div>
            </div>
          </FadeUp>
        </div>
        
        <FadeUp delay={0.5} className="hero-visual">
          <div className="bg-surface border border-[rgba(26,22,18,0.1)] rounded-lg shadow-[0_30px_60px_rgba(26,22,18,0.10)] p-[60px_40px] w-full max-w-[360px] text-center relative">
            <span className="text-[96px] mb-5 block">🪵</span>
            <div className="font-display text-[26px] font-bold text-ink mb-1.5">Wood Pulp Paper</div>
            <div className="text-[11px] text-brand tracking-[0.1em] uppercase font-medium">Classic & Cost-Efficient</div>
            <div className="absolute -top-[14px] right-6 bg-accent text-ink py-1.5 px-3.5 rounded-sm text-[11px] font-bold tracking-[0.06em] uppercase">High Value</div>
          </div>
        </FadeUp>
      </section>

      {/* ── TRUST BAND ── */}
      <div className="bg-[#FAFAF7] border-t border-b border-[rgba(26,22,18,0.06)] py-10 px-[clamp(20px,5vw,80px)]">
        <div className="flex flex-wrap justify-center items-center gap-12">
          {[
            "Sustainably Sourced Forestry Fiber",
            "Bleached & Unbleached Options",
            "Consistent Burn Characteristics",
            "MOQ From 500 Packs",
            "Best Value at Scale"
          ].map((text, i) => (
            <div key={i} className="flex items-center gap-2.5 text-[13px] font-medium tracking-wider uppercase text-text">
              <span className="w-8 h-8 border-[1.5px] border-[#3B5E3A] rounded-full flex items-center justify-center text-brand-deep text-sm font-bold bg-brand-light">✓</span>
              {text}
            </div>
          ))}
        </div>
      </div>

      {/* ── SECTION INTRO ── */}
      <section className="py-24 px-[clamp(20px,5vw,80px)]">
        <span className="inline-block text-[11px] font-medium tracking-[0.14em] uppercase text-brand-deep mb-4">Manufacturer Overview</span>
        <h2 className="font-display text-[clamp(28px,3.6vw,44px)] font-black leading-[1.1] tracking-tight text-ink mb-8">The Original Choice. <em className="italic text-brand font-bold">Unbeatable Value.</em></h2>
        <div className="text-[17px] text-text font-light max-w-[780px] leading-relaxed space-y-4">
          <p>
            Wood pulp rolling paper is the classic, original rolling paper material — manufactured from refined wood pulp fiber. It is the most cost-efficient rolling paper material available and the easiest to scale to high-volume production.
          </p>
          <p>
            At RYO Papers, we manufacture wood pulp rolling paper that meets strict international quality standards. Available in bleached white for a clean look or unbleached natural-brown for an &apos;eco&apos; aesthetic, our wood pulp line provides a reliable, steady burn. For private-label programs and value-tier brands, wood pulp remains the correct choice for maximizing margins without sacrificing consistency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="p-8 bg-surface border border-[rgba(26,22,18,0.1)] border-l-[3px] border-l-[#3B5E3A]">
            <span className="font-display text-[28px] font-black text-brand-deep mb-3 block">01</span>
            <h3 className="text-[19px] font-bold text-ink mb-2">Cost-Efficiency</h3>
            <p className="text-[14.5px] text-[#7A6F65] leading-relaxed">Wood pulp offers the lowest production cost per unit, allowing brands to compete aggressively on price in competitive retail markets.</p>
          </div>
          <div className="p-8 bg-surface border border-[rgba(26,22,18,0.1)] border-l-[3px] border-l-[#3B5E3A]">
            <span className="font-display text-[28px] font-black text-brand-deep mb-3 block">02</span>
            <h3 className="text-[19px] font-bold text-ink mb-2">High Scalability</h3>
            <p className="text-[14.5px] text-[#7A6F65] leading-relaxed">The manufacturing process for wood pulp is highly optimized, making it the most reliable material for orders ranging from 500 to 500,000+ packs.</p>
          </div>
          <div className="p-8 bg-surface border border-[rgba(26,22,18,0.1)] border-l-[3px] border-l-[#3B5E3A]">
            <span className="font-display text-[28px] font-black text-brand-deep mb-3 block">03</span>
            <h3 className="text-[19px] font-bold text-ink mb-2">Excellent Printability</h3>
            <p className="text-[14.5px] text-[#7A6F65] leading-relaxed">The uniform surface of wood pulp paper accepts complex custom printing, foil stamping, and finishes with high precision and color accuracy.</p>
          </div>
        </div>
      </section>

      {/* ── SPECS TABLE ── */}
      <section className="py-24 px-[clamp(20px,5vw,80px)] bg-[#FAFAF7]" id="specs">
        <span className="inline-block text-[11px] font-medium tracking-[0.14em] uppercase text-brand-deep mb-4">Technical Specifications</span>
        <h2 className="font-display text-[clamp(28px,3.6vw,44px)] font-black leading-[1.1] tracking-tight text-ink mb-8">Wood Pulp Paper <em className="italic text-brand font-bold">Manufacturing Specs.</em></h2>
        
        <div className="max-w-[760px] border border-[rgba(26,22,18,0.1)] bg-surface">
          {[
            { label: "Standard Weight", value: "14–25 GSM (Bleached or Unbleached)" },
            { label: "Material Source", value: "Refined Wood Pulp Fiber" },
            { label: "Burn Speed", value: "Classic / Faster than Rice" },
            { label: "Taste Profile", value: "Mild paper note" },
            { label: "Opacity", value: "Opaque (High White or Natural Brown)" },
            { label: "Gum Strip", value: "100% Natural Organic Arabic Gum" },
            { label: "Positioning", value: "Value Tier / Bulk Private Label" },
          ].map((row, i) => (
            <div key={i} className="grid grid-cols-[200px_1fr] border-bottom border-[rgba(26,22,18,0.06)] last:border-b-0">
              <div className="bg-cream-200 p-4 font-display text-[14px] font-semibold text-ink border-r border-border">{row.label}</div>
              <div className="p-4 text-[14px] text-text">{row.value}</div>
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
            { title: "King Size (110mm)", desc: "The volume standard for North American and global value brands." },
            { title: "1¼ Size (78mm)", desc: "Classic size for bulk private-label programs in convenience retail." },
            { title: "Slim (single wide)", desc: "Traditional compact format. Lowest per-unit cost in the range." },
            { title: "Block 100 / 200 / 500", desc: "Volume packaging format for distributors and heavy-use retail channels." },
            { title: "Custom Size", desc: "Any dimension specified by your brief. Optimized for high-volume production." },
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
        <h2 className="font-display text-[clamp(28px,3.6vw,44px)] font-black leading-[1.1] tracking-tight text-ink mb-8">Who Manufactures with <em className="italic text-brand font-bold">Wood Pulp Paper?</em></h2>
        <p className="text-[17px] text-muted font-light max-w-[780px] leading-relaxed mb-12">
          The brand segments and retail channels where wood pulp paper is the natural manufacturer choice. If your brand fits one of these patterns, this is likely your material.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { h: "Value-Tier Brands", p: "Wood pulp offers the lowest production cost per unit, allowing brands to compete aggressively on price in competitive retail markets." },
            { h: "Convenience Retail", p: "Standard white wood-pulp paper is the benchmark for the convenience-store and gas-station retail channel." },
            { h: "High-Volume Private Label", p: "The manufacturing process for wood pulp is highly optimized, making it the most reliable material for orders ranging from 50,000 to 500,000+ packs." },
            { h: "Bulk Distribution", p: "Volume distributors favor wood pulp for its consistent supply chain and reliable performance at a mass-market price point." },
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
        <h2 className="font-display text-[clamp(28px,3.6vw,44px)] font-black leading-[1.1] tracking-tight text-ink mb-8">Wood Pulp <em className="italic text-brand font-bold">vs Other Materials</em></h2>
        <p className="text-[17px] text-muted font-light max-w-[780px] leading-relaxed mb-12">
          Manufacturer-side comparison of wood pulp paper against the four alternative rolling paper materials. Use this when deciding between materials for your launch.
        </p>
        <div className="space-y-4 max-w-[920px]">
          {[
            { k: "vs Rice", v: "Wood pulp is the value tier; rice is the premium tier. Wood pulp is thicker (14–25 vs 12–14 GSM) and has a classic burn vs rice's very slow burn." },
            { k: "vs Hemp", v: "Wood pulp is the cost-efficient standard; hemp is the wellness standard. Wood pulp is smoother to print on; hemp has more texture and an earthy story." },
            { k: "vs Flax", v: "Wood pulp is the global value standard; flax is the mid-premium European standard. Wood pulp is faster-burning; flax is smoother and stronger." },
            { k: "vs Cellulose", v: "Wood pulp is opaque and traditional; cellulose is transparent and novelty. Maximum distance in positioning and cost." },
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
            <h2 className="font-display text-[clamp(26px,3vw,38px)] font-black leading-[1.1] tracking-tight text-ink mb-6">Wood Pulp <em className="italic text-brand font-bold">Questions</em></h2>
            <p className="text-[15px] text-muted mb-8 leading-relaxed font-light">
              The most common questions brands ask before placing their first wood pulp paper order.
            </p>
            <Link href="/contact" className="text-[13px] text-brand-deep font-bold uppercase tracking-wider hover:underline">Talk to our team →</Link>
          </div>
          <div className="bg-bg border border-border divide-y divide-border">
            {[
              { q: "What is wood pulp rolling paper?", a: "Wood pulp rolling paper is the classic, original rolling paper material — manufactured from refined wood pulp fiber. It's the most cost-efficient rolling paper material available and the easiest to scale to high volume." },
              { q: "Is wood pulp rolling paper lower quality than rice or hemp?", a: "Not lower quality — different positioning. Wood pulp is the value tier, rice is the premium tier, hemp is the wellness tier. A well-manufactured wood pulp paper passes the same strict QC protocols as our other lines." },
              { q: "Should I choose bleached or unbleached wood pulp?", a: "Bleached wood pulp is pure white and looks clean — the standard for convenience retail. Unbleached wood pulp is natural-brown and signals 'eco' to consumers. Both are available at the same MOQ." },
              { q: "What is the minimum order for custom wood pulp rolling paper?", a: "RYO Papers manufactures custom wood pulp rolling paper from a minimum of 500 packs. However, its true cost advantage emerges at higher volumes (5,000+ packs)." },
              { q: "Is wood pulp rolling paper sustainable?", a: "RYO Papers uses sustainably sourced wood pulp from certified forestry operations and offers FSC-certified production on request. It is recyclable and biodegradable." },
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
          Not sure wood pulp is right for your brand? Explore the other four materials we manufacture.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { icon: "🌾", name: "Rice", spec: "12–14 GSM · Slow", link: "/products/rice-rolling-paper" },
            { icon: "🌿", name: "Hemp", spec: "14–18 GSM · Medium", link: "/products/hemp-rolling-paper" },
            { icon: "🌱", name: "Flax", spec: "13–16 GSM · Smooth & Even", link: "/products/flax-rolling-paper" },
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
          <h2 className="font-display text-[clamp(28px,3.5vw,44px)] font-black leading-[1.1] tracking-tight text-white mb-2">Ready to <em className="italic text-brand font-bold">Manufacture</em> Your Wood Pulp Brand?</h2>
          <p className="text-base text-[rgba(255,255,255,0.65)] font-light max-w-[500px]">Talk to a real person. Get a quote within 24 hours. Sample shipped within 7–10 days.</p>
        </div>
        <div className="flex gap-3.5 flex-wrap shrink-0">
          <Link href="/contact" className="btn btn-gold btn-lg">Request a Quote</Link>
          <a href="https://wa.me/+919009111088?text=Hello!%20I%20want%20to%20enquire%20about%20Wood%20Pulp%20Rolling%20Paper%20manufacturing." className="btn btn-secondary border-white/30 text-white hover:border-white/70 btn-lg">WhatsApp Us</a>
        </div>
      </section>
    </div>
  );
}
