import { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import FadeUp from "@/app/components/FadeUp";

export const metadata: Metadata = {
  title: "Cellulose Rolling Paper Manufacturer — Transparent Premium | RYO Papers",
  description: "Cellulose rolling paper manufacturer. Fully transparent 11–13 GSM, ultra-slow burn, no taste. Premium niche for luxury and gift-set brands. OEM from 500 packs.",
  keywords: [
    "cellulose rolling paper manufacturer",
    "transparent rolling paper",
    "clear rolling paper",
    "premium rolling paper",
    "luxury rolling paper",
    "white label cellulose paper",
    "novelty rolling paper",
    "gift set rolling paper",
  ],
  alternates: {
    canonical: "https://ryopapers.com/products/cellulose-rolling-paper",
  },
  openGraph: {
    title: "Cellulose Rolling Paper Manufacturer — Transparent Premium | RYO Papers",
    description: "Cellulose rolling paper manufacturer. Fully transparent 11–13 GSM, ultra-slow burn, no taste. Premium niche for luxury and gift-set brands. OEM from 500 packs.",
    url: "https://ryopapers.com/products/cellulose-rolling-paper",
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

export default function CelluloseRollingPaperPage() {
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://ryopapers.com/products/cellulose-rolling-paper/#webpage",
    "url": "https://ryopapers.com/products/cellulose-rolling-paper",
    "name": "Cellulose Rolling Paper Manufacturer — Transparent Premium | RYO Papers",
    "description": "Cellulose rolling paper manufacturer. Fully transparent 11–13 GSM, ultra-slow burn, no taste. Premium niche for luxury and gift-set brands. OEM from 500 packs.",
    "publisher": { "@id": "https://ryopapers.com/#organization" }
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Cellulose Rolling Paper",
    "description": "Cellulose rolling paper manufacturer. Fully transparent 11–13 GSM, ultra-slow burn, no taste. Premium niche for luxury and gift-set brands. OEM from 500 packs.",
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
        "name": "What is cellulose rolling paper made from?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Cellulose rolling paper is manufactured from plant-derived cellulose, typically sourced from cotton linters. It is NOT plastic. It is a 100% biodegradable plant product processed into a transparent film."
        }
      },
      {
        "@type": "Question",
        "name": "Does transparent paper burn as well as traditional paper?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It burns even slower. Cellulose is naturally slow-burning. Because it is tasteless, it does not interfere with the flavor profile of the chosen blend."
        }
      },
      {
        "@type": "Question",
        "name": "Is cellulose rolling paper safe?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "RYO Papers manufactures cellulose rolling paper that is certified food-grade and 100% biodegradable. It contains no heavy metals or harmful plastics."
        }
      },
      {
        "@type": "Question",
        "name": "Does cellulose paper require a gum strip?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. Cellulose is self-adhering. When moistened, the material bonds to itself, eliminating the need for a separate Arabic gum line. This results in a cleaner aesthetic."
        }
      },
      {
        "@type": "Question",
        "name": "What is the minimum order for custom cellulose paper?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "RYO Papers manufactures custom cellulose rolling paper from a minimum of 500 packs. This allows luxury brands to launch a novelty SKU with minimal risk."
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
      { "@type": "ListItem", "position": 3, "name": "Cellulose Rolling Paper", "item": "https://ryopapers.com/products/cellulose-rolling-paper" }
    ]
  };

  return (
    <div className="bg-bg text-text font-sans leading-relaxed overflow-x-hidden">
      <Script
        id="cellulose-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="cellulose-webpage-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <Script
        id="cellulose-product-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <Script
        id="cellulose-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />


      {/* ── BREADCRUMB ── */}
      <nav className="bg-bg border-b border-border py-3.5 px-[clamp(20px,5vw,80px)] text-[16px] text-muted flex gap-2 items-center" aria-label="breadcrumb">
        <Link href="/" className="text-brand-deep hover:underline">Home</Link>
        <span className="text-[rgba(26,22,18,0.1)]" aria-hidden="true">›</span>
        <Link href="/rolling-paper-manufacturer" className="text-brand-deep hover:underline">Manufacturer</Link>
        <span className="text-[rgba(26,22,18,0.1)]" aria-hidden="true">›</span>
        <span>Cellulose Rolling Paper</span>
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
              Plant-Based Cellulose · Fully Transparent · 11-13 GSM
            </span>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h1 className="font-display text-[clamp(36px,5.2vw,64px)] font-black leading-[1.05] tracking-tight text-ink mb-6">
              Cellulose Rolling Paper <em className="italic text-brand font-bold">Manufacturer</em>
            </h1>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="text-[clamp(15px,1.4vw,18px)] text-text leading-relaxed max-w-[560px] mb-9 font-light">
              We manufacture fully transparent cellulose rolling papers for luxury and novelty brands. Made from plant-derived cellulose, our transparent paper provides a glass-like aesthetic with an ultra-slow, tasteless burn for a truly unique smoking experience.
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
                <div className="font-display text-[clamp(24px,2.6vw,34px)] font-black text-brand-deep leading-none">11-13</div>
                <div className="text-[12px] text-[#7A6F65] tracking-wider uppercase mt-1.5">GSM Range</div>
              </div>
              <div>
                <div className="font-display text-[clamp(24px,2.6vw,34px)] font-black text-brand-deep leading-none">Very Slow</div>
                <div className="text-[12px] text-[#7A6F65] tracking-wider uppercase mt-1.5">Burn Rate</div>
              </div>
              <div>
                <div className="font-display text-[clamp(24px,2.6vw,34px)] font-black text-brand-deep leading-none">Glass</div>
                <div className="text-[12px] text-[#7A6F65] tracking-wider uppercase mt-1.5">Finish</div>
              </div>
            </div>
          </FadeUp>
        </div>

        <FadeUp delay={0.5} className="hero-visual">
          <div className="bg-surface border border-[rgba(26,22,18,0.1)] rounded-lg shadow-[0_30px_60px_rgba(26,22,18,0.10)] p-[60px_40px] w-full max-w-[360px] text-center relative">
            <span className="text-[96px] mb-5 block">💎</span>
            <div className="font-display text-[26px] font-bold text-ink mb-1.5">Cellulose Paper</div>
            <div className="text-[11px] text-brand tracking-[0.1em] uppercase font-medium">Transparent & Pure</div>
            <div className="absolute -top-[14px] right-6 bg-accent text-ink py-1.5 px-3.5 rounded-sm text-[11px] font-bold tracking-[0.06em] uppercase">Premium Niche</div>
          </div>
        </FadeUp>
      </section>

      {/* ── TRUST BAND ── */}
      <div className="bg-[#FAFAF7] border-t border-b border-[rgba(26,22,18,0.06)] py-10 px-[clamp(20px,5vw,80px)]">
        <div className="flex flex-wrap justify-center items-center gap-12">
          {[
            "100% Plant-Derived Cellulose",
            "Fully Transparent Aesthetic",
            "Ultra-Slow, Tasteless Burn",
            "MOQ From 500 Packs",
            "Luxury Segment positioning"
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
        <h2 className="font-display text-[clamp(28px,3.6vw,44px)] font-black leading-[1.1] tracking-tight text-ink mb-8">Unseen Quality. <em className="italic text-brand font-bold">Unbeatable Transparency.</em></h2>
        <div className="text-[17px] text-text font-light max-w-[780px] leading-relaxed space-y-4">
          <p>
            Cellulose rolling paper is the gold standard for luxury and novelty brands. Manufactured from plant-derived cellulose, it is processed into a fully transparent sheet that looks like glass but burns like premium paper.
          </p>
          <p>
            At RYO Papers, we manufacture cellulose rolling papers that are 100% biodegradable and food-safe. The transparent forming process ensures a sheet that is virtually tasteless and burns exceptionally slowly, allowing the user to see exactly what they are smoking. For brands targeting the premium niche or luxury gift-set market, cellulose provides an unmatched visual impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="p-8 bg-surface border border-[rgba(26,22,18,0.1)] border-l-[3px] border-l-[#3B5E3A]">
            <span className="font-display text-[28px] font-black text-brand-deep mb-3 block">01</span>
            <h3 className="text-[19px] font-bold text-ink mb-2">Visual Transparency</h3>
            <p className="text-[14.5px] text-[#7A6F65] leading-relaxed">The clear, glass-like finish creates a &apos;wow&apos; factor that fiber-based papers cannot match. Ideal for social media-heavy brand marketing.</p>
          </div>
          <div className="p-8 bg-surface border border-[rgba(26,22,18,0.1)] border-l-[3px] border-l-[#3B5E3A]">
            <span className="font-display text-[28px] font-black text-brand-deep mb-3 block">02</span>
            <h3 className="text-[19px] font-bold text-ink mb-2">Ultra-Slow Burn</h3>
            <p className="text-[14.5px] text-[#7A6F65] leading-relaxed">Cellulose is naturally slow-burning, providing a prolonged experience without the need for chemical additives or heavy watermarks.</p>
          </div>
          <div className="p-8 bg-surface border border-[rgba(26,22,18,0.1)] border-l-[3px] border-l-[#3B5E3A]">
            <span className="font-display text-[28px] font-black text-brand-deep mb-3 block">03</span>
            <h3 className="text-[19px] font-bold text-ink mb-2">Luxury Positioning</h3>
            <p className="text-[14.5px] text-[#7A6F65] leading-relaxed">Position your brand as a luxury innovator. Cellulose is the preferred choice for gift sets and high-end lifestyle products.</p>
          </div>
        </div>
      </section>

      {/* ── SPECS TABLE ── */}
      <section className="py-24 px-[clamp(20px,5vw,80px)] bg-[#FAFAF7]" id="specs">
        <span className="inline-block text-[11px] font-medium tracking-[0.14em] uppercase text-brand-deep mb-4">Technical Specifications</span>
        <h2 className="font-display text-[clamp(28px,3.6vw,44px)] font-black leading-[1.1] tracking-tight text-ink mb-8">Cellulose Paper <em className="italic text-brand font-bold">Manufacturing Specs.</em></h2>

        <div className="max-w-[760px] border border-[rgba(26,22,18,0.1)] bg-surface">
          {[
            { label: "Standard Weight", value: "11–13 GSM" },
            { label: "Material Source", value: "Plant-Derived Cellulose (Cotton Linters)" },
            { label: "Burn Speed", value: "Very Slow / Steady" },
            { label: "Taste Profile", value: "Neutral / Tasteless" },
            { label: "Clarity", value: "Fully Transparent (Glass-like)" },
            { label: "Gum Strip", value: "Self-adhering (No separate gum strip required)" },
            { label: "Safety", value: "Certified Food-Grade & Biodegradable" },
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
            { title: "King Size (110mm)", desc: "The luxury standard for novelty and premium gift-set brands." },
            { title: "1¼ Size (78mm)", desc: "Classic size for North American novelty retail and dispensary lines." },
            { title: "Slim (single wide)", desc: "European-favored novelty size. Minimizes paper-to-content ratio." },
            { title: "Pre-rolled Cones", desc: "Cellulose is highly popular for pre-rolled transparent cones." },
            { title: "Custom Size", desc: "Any dimension specified by your brief. Optimized for luxury brand specs." },
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
        <h2 className="font-display text-[clamp(28px,3.6vw,44px)] font-black leading-[1.1] tracking-tight text-ink mb-8">Who Manufactures with <em className="italic text-brand font-bold">Cellulose Paper?</em></h2>
        <p className="text-[17px] text-muted font-light max-w-[780px] leading-relaxed mb-12">
          The brand segments and retail channels where cellulose paper is the natural manufacturer choice. If your brand fits one of these patterns, this is likely your material.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { h: "Luxury Novelty Brands", p: "The clear, glass-like finish creates a 'wow' factor that fiber-based papers cannot match. Ideal for social media-heavy brand marketing." },
            { h: "Gift Set Innovators", p: "Position your brand as a luxury innovator. Cellulose is the preferred choice for gift sets and high-end lifestyle products." },
            { h: "Social Media Channels", p: "Brands with heavy Instagram/TikTok marketing use cellulose because its transparency makes for high-engagement visual content." },
            { h: "Dispensary Novelties", p: "Premium dispensary private-label programs use cellulose as a high-margin hero SKU next to their rice/hemp papers." },
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
        <h2 className="font-display text-[clamp(28px,3.6vw,44px)] font-black leading-[1.1] tracking-tight text-ink mb-8">Cellulose <em className="italic text-brand font-bold">vs Other Materials</em></h2>
        <p className="text-[17px] text-muted font-light max-w-[780px] leading-relaxed mb-12">
          Manufacturer-side comparison of cellulose paper against the four alternative rolling paper materials. Use this when deciding between materials for your launch.
        </p>
        <div className="space-y-4 max-w-[920px]">
          {[
            { k: "vs Rice", v: "Rice is the daily premium standard; cellulose is the luxury novelty. Cellulose is fully transparent and burns even slower than 12 GSM rice paper." },
            { k: "vs Hemp", v: "Opposite ends of the spectrum. Hemp is textured and earthy; cellulose is smooth and tasteless. Hemp for wellness, cellulose for novelty." },
            { k: "vs Flax", v: "Flax is traditional and opaque; cellulose is modern and transparent. Almost no audience overlap between these two materials." },
            { k: "vs Wood Pulp", v: "Wood pulp is the global value standard; cellulose is the highest-cost novelty standard. Cellulose is for brands positioning far above the value tier." },
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
            <h2 className="font-display text-[clamp(26px,3vw,38px)] font-black leading-[1.1] tracking-tight text-ink mb-6">Cellulose Paper <em className="italic text-brand font-bold">Questions</em></h2>
            <p className="text-[15px] text-muted mb-8 leading-relaxed font-light">
              The most common questions brands ask before placing their first cellulose paper order.
            </p>
            <Link href="/contact" className="text-[13px] text-brand-deep font-bold uppercase tracking-wider hover:underline">Talk to our team →</Link>
          </div>
          <div className="bg-bg border border-border divide-y divide-border">
            {[
              { q: "What is cellulose rolling paper made from?", a: "Cellulose rolling paper is manufactured from plant-derived cellulose, typically sourced from cotton linters. It is NOT plastic. It is a 100% biodegradable plant product processed into a transparent film." },
              { q: "Does transparent paper burn as well as traditional paper?", a: "It burns even slower. Cellulose is naturally slow-burning. Because it is tasteless, it does not interfere with the flavor profile of the chosen blend." },
              { q: "Is cellulose rolling paper safe?", a: "RYO Papers manufactures cellulose rolling paper that is certified food-grade and 100% biodegradable. It contains no heavy metals or harmful plastics." },
              { q: "Does cellulose paper require a gum strip?", a: "No. Cellulose is self-adhering. When moistened, the material bonds to itself, eliminating the need for a separate Arabic gum line. This results in a cleaner aesthetic." },
              { q: "What is the minimum order for custom cellulose paper?", a: "RYO Papers manufactures custom cellulose rolling paper from a minimum of 500 packs. This allows luxury brands to launch a novelty SKU with minimal risk." },
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
          Not sure cellulose is right for your brand? Explore the other four materials we manufacture.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { icon: "🌾", name: "Rice", spec: "12–14 GSM · Slow", link: "/products/rice-rolling-paper" },
            { icon: "🌿", name: "Hemp", spec: "14–18 GSM · Medium", link: "/products/hemp-rolling-paper" },
            { icon: "🌱", name: "Flax", spec: "13–16 GSM · Smooth & Even", link: "/products/flax-rolling-paper" },
            { icon: "🪵", name: "Wood Pulp", spec: "14–25 GSM · Classic / Faster", link: "/products/wood-pulp-rolling-paper" },
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
          <h2 className="font-display text-[clamp(28px,3.5vw,44px)] font-black leading-[1.1] tracking-tight text-white mb-2">Ready to <em className="italic text-brand font-bold">Manufacture</em> Your Cellulose Brand?</h2>
          <p className="text-base text-[rgba(255,255,255,0.65)] font-light max-w-[500px]">Talk to a real person. Get a quote within 24 hours. Sample shipped within 7–10 days.</p>
        </div>
        <div className="flex gap-3.5 flex-wrap shrink-0">
          <Link href="/contact" className="btn btn-gold btn-lg">Request a Quote</Link>
          <a href="https://wa.me/+919009111088?text=Hello!%20I%20want%20to%20enquire%20about%20Cellulose%20Rolling%20Paper%20manufacturing." className="btn btn-secondary border-white/30 text-white hover:border-white/70 btn-lg">WhatsApp Us</a>
        </div>
      </section>
    </div>
  );
}
