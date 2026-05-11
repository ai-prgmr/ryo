import { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { Playfair_Display, DM_Sans } from "next/font/google";
import FadeUp from "@/app/components/FadeUp";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700", "900"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-sans",
});

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

  return (
    <div className={`bg-white text-[#1A1612] ${dmSans.variable} ${playfair.variable} font-sans leading-relaxed overflow-x-hidden`}>
      <Script
        id="cellulose-product-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />

      {/* ── BREADCRUMB ── */}
      <nav className="bg-[#FAFAF7] border-b border-[rgba(26,22,18,0.06)] py-3.5 px-[clamp(20px,5vw,80px)] text-[12px] text-[#7A6F65] flex gap-2 items-center" aria-label="breadcrumb">
        <Link href="/" className="text-[#3B5E3A] hover:underline">Home</Link>
        <span className="text-[rgba(26,22,18,0.1)]" aria-hidden="true">›</span>
        <Link href="/rolling-paper-manufacturer" className="text-[#3B5E3A] hover:underline">Manufacturer</Link>
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
            <span className="inline-flex items-center gap-[10px] text-[11px] font-medium tracking-[0.12em] uppercase text-[#3B5E3A] bg-[#EBF2EB] py-1.5 px-3.5 rounded-sm mb-6 before:content-[''] before:w-5 before:h-px before:bg-[#3B5E3A]">
              Plant-Based Cellulose · Fully Transparent · 11-13 GSM
            </span>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h1 className="font-[var(--font-playfair)] text-[clamp(36px,5.2vw,64px)] font-black leading-[1.05] tracking-tight text-[#1A1612] mb-6">
              Cellulose Rolling Paper <em className="italic text-[#3B5E3A] font-bold">Manufacturer</em>
            </h1>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="text-[clamp(15px,1.4vw,18px)] text-[#3D3630] leading-relaxed max-w-[560px] mb-9 font-light">
              We manufacture fully transparent cellulose rolling papers for luxury and novelty brands. Made from plant-derived cellulose, our transparent paper provides a glass-like aesthetic with an ultra-slow, tasteless burn for a truly unique smoking experience.
            </p>
          </FadeUp>
          <FadeUp delay={0.3}>
            <div className="flex gap-3.5 flex-wrap mb-12">
              <Link href="/contact" className="bg-[#1A1612] text-white py-3.5 px-8 rounded-sm text-sm font-medium tracking-wider uppercase transition-all duration-200 hover:bg-[#3B5E3A] inline-block">
                Request a Sample
              </Link>
              <Link href="#specs" className="border-[1.5px] border-[#1A1612] text-[#1A1612] py-3 px-7 rounded-sm text-sm font-medium tracking-wider uppercase transition-all duration-200 hover:bg-[#1A1612] hover:text-white inline-block">
                View Specifications
              </Link>
            </div>
          </FadeUp>
          <FadeUp delay={0.4}>
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-[rgba(26,22,18,0.1)]">
              <div>
                <div className="font-[var(--font-playfair)] text-[clamp(24px,2.6vw,34px)] font-black text-[#3B5E3A] leading-none">11-13</div>
                <div className="text-[12px] text-[#7A6F65] tracking-wider uppercase mt-1.5">GSM Range</div>
              </div>
              <div>
                <div className="font-[var(--font-playfair)] text-[clamp(24px,2.6vw,34px)] font-black text-[#3B5E3A] leading-none">Very Slow</div>
                <div className="text-[12px] text-[#7A6F65] tracking-wider uppercase mt-1.5">Burn Rate</div>
              </div>
              <div>
                <div className="font-[var(--font-playfair)] text-[clamp(24px,2.6vw,34px)] font-black text-[#3B5E3A] leading-none">Glass</div>
                <div className="text-[12px] text-[#7A6F65] tracking-wider uppercase mt-1.5">Finish</div>
              </div>
            </div>
          </FadeUp>
        </div>
        
        <FadeUp delay={0.5} className="hero-visual">
          <div className="bg-white border border-[rgba(26,22,18,0.1)] rounded-lg shadow-[0_30px_60px_rgba(26,22,18,0.10)] p-[60px_40px] w-full max-w-[360px] text-center relative">
            <span className="text-[96px] mb-5 block">💎</span>
            <div className="font-[var(--font-playfair)] text-[26px] font-bold text-[#1A1612] mb-1.5">Cellulose Paper</div>
            <div className="text-[11px] text-[#3B5E3A] tracking-[0.1em] uppercase font-medium">Transparent Luxury</div>
            <div className="absolute -top-[14px] right-6 bg-[#C9A84C] text-[#1A1612] py-1.5 px-3.5 rounded-sm text-[11px] font-bold tracking-[0.06em] uppercase">Premium Niche</div>
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
            <div key={i} className="flex items-center gap-2.5 text-[13px] font-medium tracking-wider uppercase text-[#3D3630]">
              <span className="w-8 h-8 border-[1.5px] border-[#3B5E3A] rounded-full flex items-center justify-center text-[#3B5E3A] text-sm font-bold bg-[#EBF2EB]">✓</span>
              {text}
            </div>
          ))}
        </div>
      </div>

      {/* ── SECTION INTRO ── */}
      <section className="py-24 px-[clamp(20px,5vw,80px)]">
        <span className="inline-block text-[11px] font-medium tracking-[0.14em] uppercase text-[#3B5E3A] mb-4">Manufacturer Overview</span>
        <h2 className="font-[var(--font-playfair)] text-[clamp(28px,3.6vw,44px)] font-black leading-[1.1] tracking-tight text-[#1A1612] mb-8">Crystal Clear. <em className="italic text-[#3B5E3A] font-bold">Luxury Positioned.</em></h2>
        <div className="text-[17px] text-[#3D3630] font-light max-w-[780px] leading-relaxed space-y-4">
          <p>
            Cellulose rolling paper is the gold standard for luxury and novelty brands. Manufactured from plant-derived cellulose, it is processed into a fully transparent sheet that looks like glass but burns like premium paper.
          </p>
          <p>
            At RYO Papers, we manufacture cellulose rolling papers that are 100% biodegradable and food-safe. The transparent forming process ensures a sheet that is virtually tasteless and burns exceptionally slowly, allowing the user to see exactly what they are smoking. For brands targeting the premium niche or luxury gift-set market, cellulose provides an unmatched visual impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="p-8 bg-white border border-[rgba(26,22,18,0.1)] border-l-[3px] border-l-[#3B5E3A]">
            <span className="font-[var(--font-playfair)] text-[28px] font-black text-[#3B5E3A] mb-3 block">01</span>
            <h3 className="text-[19px] font-bold text-[#1A1612] mb-2">Visual Transparency</h3>
            <p className="text-[14.5px] text-[#7A6F65] leading-relaxed">The clear, glass-like finish creates a &apos;wow&apos; factor that fiber-based papers cannot match. Ideal for social media-heavy brand marketing.</p>
          </div>
          <div className="p-8 bg-white border border-[rgba(26,22,18,0.1)] border-l-[3px] border-l-[#3B5E3A]">
            <span className="font-[var(--font-playfair)] text-[28px] font-black text-[#3B5E3A] mb-3 block">02</span>
            <h3 className="text-[19px] font-bold text-[#1A1612] mb-2">Ultra-Slow Burn</h3>
            <p className="text-[14.5px] text-[#7A6F65] leading-relaxed">Cellulose is naturally slow-burning, providing a prolonged experience without the need for chemical additives or heavy watermarks.</p>
          </div>
          <div className="p-8 bg-white border border-[rgba(26,22,18,0.1)] border-l-[3px] border-l-[#3B5E3A]">
            <span className="font-[var(--font-playfair)] text-[28px] font-black text-[#3B5E3A] mb-3 block">03</span>
            <h3 className="text-[19px] font-bold text-[#1A1612] mb-2">Luxury Positioning</h3>
            <p className="text-[14.5px] text-[#7A6F65] leading-relaxed">Position your brand as a luxury innovator. Cellulose is the preferred choice for gift sets and high-end lifestyle products.</p>
          </div>
        </div>
      </section>

      {/* ── SPECS TABLE ── */}
      <section className="py-24 px-[clamp(20px,5vw,80px)] bg-[#FAFAF7]" id="specs">
        <span className="inline-block text-[11px] font-medium tracking-[0.14em] uppercase text-[#3B5E3A] mb-4">Technical Specifications</span>
        <h2 className="font-[var(--font-playfair)] text-[clamp(28px,3.6vw,44px)] font-black leading-[1.1] tracking-tight text-[#1A1612] mb-8">Cellulose Paper <em className="italic text-[#3B5E3A] font-bold">Manufacturing Specs.</em></h2>
        
        <div className="max-w-[760px] border border-[rgba(26,22,18,0.1)] bg-white">
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
              <div className="bg-[#F5F2EC] p-4 font-[var(--font-playfair)] text-[14px] font-semibold text-[#1A1612] border-r border-[rgba(26,22,18,0.06)]">{row.label}</div>
              <div className="p-4 text-[14px] text-[#3D3630]">{row.value}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#1A1612] text-white py-20 px-[clamp(20px,5vw,80px)] flex items-center justify-between gap-10 flex-wrap">
        <div>
          <h2 className="font-[var(--font-playfair)] text-[clamp(28px,3.5vw,44px)] font-black leading-[1.1] tracking-tight text-white mb-2">Ready to <em className="italic text-[#E8C97A] font-bold">Manufacture</em> Your Brand?</h2>
          <p className="text-base text-[rgba(255,255,255,0.65)] font-light">Talk to a real person. Get a quote for Cellulose Paper within 24 hours.</p>
        </div>
        <div className="flex gap-3.5 flex-wrap shrink-0">
          <Link href="/contact" className="bg-[#C9A84C] text-[#1A1612] py-3.5 px-8 rounded-sm text-sm font-medium tracking-wider uppercase transition-all duration-200 hover:bg-[#E8C97A]">Request a Quote</Link>
          <a href="https://wa.me/+919009111088?text=Hello!%20I%20want%20to%20enquire%20about%20Cellulose%20Rolling%20Paper%20manufacturing." className="border-[1.5px] border-[rgba(255,255,255,0.3)] text-white py-3 px-7 rounded-sm text-sm font-medium tracking-wider uppercase transition-colors duration-200 hover:border-[rgba(255,255,255,0.7)]">WhatsApp Us</a>
        </div>
      </section>
    </div>
  );
}
