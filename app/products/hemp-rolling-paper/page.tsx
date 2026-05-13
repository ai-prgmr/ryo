import { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import FadeUp from "@/app/components/FadeUp";

export const metadata: Metadata = {
  title: "Hemp Rolling Paper Manufacturer — Natural, FSC-Certified | RYO Papers",
  description: "Hemp rolling paper manufacturer. Natural 14–18 GSM hemp fiber, FSC-certified options, slightly textured, easy to roll. OEM & white-label from 500 packs. Made in India.",
  keywords: [
    "hemp rolling paper manufacturer",
    "organic hemp rolling paper",
    "FSC certified hemp paper",
    "natural hemp rolling paper",
    "white label hemp paper",
    "hemp paper OEM",
    "custom hemp rolling paper",
    "eco rolling paper",
  ],
  alternates: {
    canonical: "https://ryopapers.com/products/hemp-rolling-paper",
  },
  openGraph: {
    title: "Hemp Rolling Paper Manufacturer — Natural, FSC-Certified | RYO Papers",
    description: "Hemp rolling paper manufacturer. Natural 14–18 GSM hemp fiber, FSC-certified options, slightly textured, easy to roll. OEM & white-label from 500 packs. Made in India.",
    url: "https://ryopapers.com/products/hemp-rolling-paper",
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

export default function HempRollingPaperPage() {
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://ryopapers.com/products/hemp-rolling-paper/#webpage",
    "url": "https://ryopapers.com/products/hemp-rolling-paper",
    "name": "Hemp Rolling Paper Manufacturer — Natural, FSC-Certified | RYO Papers",
    "description": "Hemp rolling paper manufacturer. Natural 14–18 GSM hemp fiber, FSC-certified options, slightly textured, easy to roll. OEM & white-label from 500 packs. Made in India.",
    "publisher": { "@id": "https://ryopapers.com/#organization" }
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Hemp Rolling Paper",
    "description": "Hemp rolling paper manufacturer. Natural 14–18 GSM hemp fiber, FSC-certified options, slightly textured, easy to roll. OEM & white-label from 500 packs. Made in India.",
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
        "name": "What is hemp rolling paper made from?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Hemp rolling paper is manufactured from industrial hemp fiber — a fast-growing, sustainable plant. The stalks are pulped and refined into paper sheets. RYO Papers uses sustainably sourced industrial hemp and offers both unbleached natural-brown and bleached-white finishes."
        }
      },
      {
        "@type": "Question",
        "name": "Is your hemp rolling paper FSC-certified?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "FSC certification is available on our hemp rolling paper line on request. It's increasingly required for retail in EU markets and major US health-positioned chains."
        }
      },
      {
        "@type": "Question",
        "name": "Why does hemp paper have a slight earthy taste?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The slight earthy character comes from natural compounds in the hemp fiber. Wellness-positioned brands actively prefer this as it reinforces the natural, organic positioning."
        }
      },
      {
        "@type": "Question",
        "name": "Does hemp rolling paper contain THC or CBD?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. Hemp rolling paper is made from the stalk fiber of industrial hemp, which contains no THC or meaningful CBD. It is legal for import and retail in all major markets."
        }
      },
      {
        "@type": "Question",
        "name": "What is the minimum order for custom hemp rolling paper?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "RYO Papers manufactures custom hemp rolling paper from a minimum of 500 packs. This allows wellness brands to test market response without heavy commitment."
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
      { "@type": "ListItem", "position": 3, "name": "Hemp Rolling Paper", "item": "https://ryopapers.com/products/hemp-rolling-paper" }
    ]
  };

  return (
    <div className="bg-bg text-text font-sans leading-relaxed overflow-x-hidden">
      <Script
        id="hemp-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="hemp-webpage-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <Script
        id="hemp-product-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <Script
        id="hemp-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />



      {/* ── BREADCRUMB ── */}
      <nav className="bg-bg border-b border-border py-3.5 px-[clamp(20px,5vw,80px)] text-[16px] text-muted flex gap-2 items-center" aria-label="breadcrumb">
        <Link href="/" className="text-brand-deep hover:underline">Home</Link>
        <span className="text-[rgba(26,22,18,0.1)]" aria-hidden="true">›</span>
        <Link href="/rolling-paper-manufacturer" className="text-brand-deep hover:underline">Manufacturer</Link>
        <span className="text-[rgba(26,22,18,0.1)]" aria-hidden="true">›</span>
        <span>Hemp Rolling Paper</span>
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
              Industrial Hemp Fiber · Natural & FSC-Certified · 14-18 GSM
            </span>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h1 className="font-display text-[clamp(36px,5.2vw,64px)] font-black leading-[1.05] tracking-tight text-ink mb-6">
              Hemp Rolling Paper <em className="italic text-brand-deep font-bold">Manufacturer</em>
            </h1>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="text-[clamp(15px,1.4vw,18px)] text-text leading-relaxed max-w-[560px] mb-9 font-light">
              We manufacture natural hemp rolling papers for the world&apos;s leading wellness brands. Available in unbleached natural-brown or bleached-white, our hemp fiber provides a slightly textured, easy-to-roll experience with a subtle earthy note.
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
                <div className="font-display text-[clamp(24px,2.6vw,34px)] font-black text-brand-deep leading-none">14-18</div>
                <div className="text-[12px] text-[#7A6F65] tracking-wider uppercase mt-1.5">GSM Range</div>
              </div>
              <div>
                <div className="font-display text-[clamp(24px,2.6vw,34px)] font-black text-brand-deep leading-none">Medium</div>
                <div className="text-[12px] text-[#7A6F65] tracking-wider uppercase mt-1.5">Burn Rate</div>
              </div>
              <div>
                <div className="font-display text-[clamp(24px,2.6vw,34px)] font-black text-brand-deep leading-none">Natural</div>
                <div className="text-[12px] text-[#7A6F65] tracking-wider uppercase mt-1.5">Fiber Source</div>
              </div>
            </div>
          </FadeUp>
        </div>

        <FadeUp delay={0.5} className="hero-visual">
          <div className="bg-surface border border-[rgba(26,22,18,0.1)] rounded-lg shadow-[0_30px_60px_rgba(26,22,18,0.10)] p-[60px_40px] w-full max-w-[360px] text-center relative">
            <span className="text-[96px] mb-5 block">🌿</span>
            <div className="font-display text-[26px] font-bold text-ink mb-1.5">
              Hemp Paper</div>
            <div className="text-[11px] text-brand tracking-[0.1em] uppercase font-medium">
              Natural & Sustainable</div>
            <div className="absolute -top-[14px] right-6 bg-accent text-ink py-1.5 px-3.5 rounded-sm text-[11px] font-bold tracking-[0.06em] uppercase">
              Wellness Segment</div>
          </div>
        </FadeUp>
      </section>

      {/* ── TRUST BAND ── */}
      <div className="bg-[#FAFAF7] border-t border-b border-[rgba(26,22,18,0.06)] py-10 px-[clamp(20px,5vw,80px)]">
        <div className="flex flex-wrap justify-center items-center gap-12">
          {[
            "Industrial Hemp Fiber Source",
            "FSC-Certified Options",
            "THC-Free & Regulated",
            "MOQ From 500 Packs",
            "Unbleached Natural Finish"
          ].map((text, i) => (
            <div key={i} className="flex items-center gap-2.5 text-[13px] font-medium tracking-wider uppercase text-text">
              <span className="w-8 h-8 border-[1.5px] border-brand rounded-full flex items-center justify-center text-brand text-sm font-bold bg-brand-light">✓</span>
              {text}
            </div>
          ))}
        </div>
      </div>

      {/* ── SECTION INTRO ── */}
      <section className="py-24 px-[clamp(20px,5vw,80px)]">
        <span className="inline-block text-[11px] font-medium tracking-[0.14em] uppercase text-brand mb-4">Manufacturer Overview</span>
        <h2 className="font-display text-[clamp(28px,3.6vw,44px)] font-black leading-[1.1] tracking-tight text-ink mb-8">Natural Character. <em className="italic text-brand font-bold">Sustainable Roots.</em></h2>
        <div className="text-[17px] text-text font-light max-w-[780px] leading-relaxed space-y-4">
          <p>
            Hemp rolling paper is the preferred choice for wellness, organic, and eco-conscious brands. Manufactured from industrial hemp stalks, it provides a slightly more textured feel compared to rice paper, making it easier to roll for both beginners and experienced users.
          </p>
          <p>
            At RYO Papers, we source industrial hemp from certified suppliers. Our hemp papers are available in their natural unbleached brown state — a strong visual cue for &apos;natural&apos; products — or in a bleached white finish. Every sheet is processed to ensure a consistent, medium-slow burn and a subtle earthy character that complements natural blends.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="p-8 bg-surface border border-[rgba(26,22,18,0.1)] border-l-[3px] border-l-brand">
            <span className="font-display text-[28px] font-black text-brand mb-3 block">01</span>
            <h3 className="text-[19px] font-bold text-ink mb-2">Eco-Positioning</h3>
            <p className="text-[14.5px] text-[#7A6F65] leading-relaxed">Industrial hemp is a highly sustainable crop. Using hemp fiber allows brands to target the growing segment of environmentally conscious consumers.</p>
          </div>
          <div className="p-8 bg-surface border border-[rgba(26,22,18,0.1)] border-l-[3px] border-l-brand">
            <span className="font-display text-[28px] font-black text-brand mb-3 block">02</span>
            <h3 className="text-[19px] font-bold text-ink mb-2">Ease of Use</h3>
            <p className="text-[14.5px] text-[#7A6F65] leading-relaxed">The slightly higher GSM (14–18) and natural fiber texture provide superior grip, making it more durable during transit and easier to handle during rolling.</p>
          </div>
          <div className="p-8 bg-surface border border-[rgba(26,22,18,0.1)] border-l-[3px] border-l-brand">
            <span className="font-display text-[28px] font-black text-brand mb-3 block">03</span>
            <h3 className="text-[19px] font-bold text-ink mb-2">FSC-Certified</h3>
            <p className="text-[14.5px] text-[#7A6F65] leading-relaxed">Available with full Forest Stewardship Council certification, ensuring your brand meets the strictest international compliance and retail standards.</p>
          </div>
        </div>
      </section>

      {/* ── SPECS TABLE ── */}
      <section className="py-24 px-[clamp(20px,5vw,80px)] bg-[#FAFAF7]" id="specs">
        <span className="inline-block text-[11px] font-medium tracking-[0.14em] uppercase text-brand mb-4">Technical Specifications</span>
        <h2 className="font-display text-[clamp(28px,3.6vw,44px)] font-black leading-[1.1] tracking-tight text-ink mb-8">Hemp Paper <em className="italic text-brand font-bold">Manufacturing Specs.</em></h2>

        <div className="max-w-[760px] border border-[rgba(26,22,18,0.1)] bg-surface">
          {[
            { label: "Standard Weight", value: "14–18 GSM (Options for unbleached and bleached)" },
            { label: "Material Source", value: "Industrial Hemp Stalk Fiber" },
            { label: "Burn Speed", value: "Medium / Steady" },
            { label: "Taste Profile", value: "Subtle Earthy / Natural" },
            { label: "Opacity", value: "Matte / Opaque" },
            { label: "Gum Strip", value: "100% Natural Organic Arabic Gum" },
            { label: "Certification", value: "FSC-certified options available on request" },
          ].map((row, i) => (
            <div key={i} className="grid grid-cols-[200px_1fr] border-bottom border-[rgba(26,22,18,0.06)] last:border-b-0">
              <div className="bg-cream-200 p-4 font-display text-[14px] font-semibold text-ink border-r border-border">
                {row.label}</div>
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
            { title: "King Size (110mm)", desc: "The standard format for organic and wellness-positioned brands globally." },
            { title: "1¼ Size (78mm)", desc: "Classic size with high demand in North American natural-product channels." },
            { title: "Slim (single wide)", desc: "European-favored size. High tensile strength makes it ideal for thin formats." },
            { title: "Cones & Pre-rolls", desc: "Hemp is the preferred material for pre-rolled cones due to its natural texture." },
            { title: "Custom Size", desc: "Any dimension specified by your brief. Full custom printing available on booklet." },
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
        <h2 className="font-display text-[clamp(28px,3.6vw,44px)] font-black leading-[1.1] tracking-tight text-ink mb-8">Who Manufactures with <em className="italic text-brand font-bold">Hemp Paper?</em></h2>
        <p className="text-[17px] text-muted font-light max-w-[780px] leading-relaxed mb-12">
          The brand segments and retail channels where hemp paper is the natural manufacturer choice. If your brand fits one of these patterns, this is likely your material.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { h: "Wellness & Organic Brands", p: "Hemp is the primary choice for brands positioning around wellness, sustainability, and organic lifestyle." },
            { h: "Eco-Conscious Retail", p: "Natural products, eco-shops, and sustainable retail channels prioritize hemp over rice or wood pulp." },
            { h: "CBD-Focused Lines", p: "Brands selling CBD products typically lead with hemp rolling paper to maintain a consistent plant-based story." },
            { h: "Authentic & Earthy Positioning", p: "Brands wanting a less 'corporate' and more 'earthy' feel use hemp's texture to communicate authenticity." },
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
        <h2 className="font-display text-[clamp(28px,3.6vw,44px)] font-black leading-[1.1] tracking-tight text-ink mb-8">Hemp <em className="italic text-brand font-bold">vs Other Materials</em></h2>
        <p className="text-[17px] text-muted font-light max-w-[780px] leading-relaxed mb-12">
          Manufacturer-side comparison of hemp paper against the four alternative rolling paper materials. Use this when deciding between materials for your launch.
        </p>
        <div className="space-y-4 max-w-[920px]">
          {[
            { k: "vs Rice", v: "Hemp is thicker (14–18 vs 12–14 GSM), more textured, and has a slight earthy note. Rice is thinner and neutral. Use rice for premium, hemp for wellness." },
            { k: "vs Flax", v: "Hemp is more textured and earthy; flax is smoother and neutral. Both have good tensile strength, but hemp has a stronger sustainability story." },
            { k: "vs Wood Pulp", v: "Hemp is the wellness tier; wood pulp is the value tier. Hemp has a cleaner burn and better brand perception for eco-conscious users." },
            { k: "vs Cellulose", v: "Hemp is opaque and natural; cellulose is transparent and synthetic-feeling. Opposite ends of the positioning spectrum." },
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
            <h2 className="font-display text-[clamp(26px,3vw,38px)] font-black leading-[1.1] tracking-tight text-ink mb-6">Hemp Paper <em className="italic text-brand font-bold">Questions</em></h2>
            <p className="text-[15px] text-muted mb-8 leading-relaxed font-light">
              The most common questions brands ask before placing their first hemp paper order.
            </p>
            <Link href="/contact" className="text-[13px] text-brand-deep font-bold uppercase tracking-wider hover:underline">Talk to our team →</Link>
          </div>
          <div className="bg-bg border border-border divide-y divide-border">
            {[
              { q: "What is hemp rolling paper made from?", a: "Hemp rolling paper is manufactured from industrial hemp fiber — a fast-growing, sustainable plant. The stalks are pulped and refined into paper sheets. RYO Papers uses sustainably sourced industrial hemp and offers both unbleached natural-brown and bleached-white finishes." },
              { q: "Is your hemp rolling paper FSC-certified?", a: "FSC certification is available on our hemp rolling paper line on request. It's increasingly required for retail in EU markets and major US health-positioned chains." },
              { q: "Why does hemp paper have a slight earthy taste?", a: "The slight earthy character comes from natural compounds in the hemp fiber. Wellness-positioned brands actively prefer this as it reinforces the natural, organic positioning." },
              { q: "Does hemp rolling paper contain THC or CBD?", a: "No. Hemp rolling paper is made from the stalk fiber of industrial hemp, which contains no THC or meaningful CBD. It is legal for import and retail in all major markets." },
              { q: "What is the minimum order for custom hemp rolling paper?", a: "RYO Papers manufactures custom hemp rolling paper from a minimum of 500 packs. This allows wellness brands to test market response without heavy commitment." },
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
          Not sure hemp is right for your brand? Explore the other four materials we manufacture.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { icon: "🌾", name: "Rice", spec: "12–14 GSM · Slow", link: "/products/rice-rolling-paper" },
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
          <h2 className="font-display text-[clamp(28px,3.5vw,44px)] font-black leading-[1.1] tracking-tight text-white mb-2">Ready to <em className="italic text-brand font-bold">Manufacture</em> Your Hemp Brand?</h2>
          <p className="text-base text-[rgba(255,255,255,0.65)] font-light max-w-[500px]">Talk to a real person. Get a quote within 24 hours. Sample shipped within 7–10 days.</p>
        </div>
        <div className="flex gap-3.5 flex-wrap shrink-0">
          <Link href="/contact" className="btn btn-gold btn-lg">Request a Quote</Link>
          <a href="https://wa.me/+919009111088?text=Hello!%20I%20want%20to%20enquire%20about%20Hemp%20Rolling%20Paper%20manufacturing." className="btn btn-secondary border-white/30 text-white hover:border-white/70 btn-lg">WhatsApp Us</a>
        </div>
      </section>
    </div>
  );
}
