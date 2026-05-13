// app/rolling-paper-manufacturer/page.tsx
import { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import FaqSection from "./FaqSection";
import FadeUp from "@/app/components/FadeUp";

export const metadata: Metadata = {
  title: "Rolling Paper Manufacturer — Custom, OEM & White Label Since 2017 | RYO Papers",
  description:
    "RYO Papers is a leading rolling paper manufacturer based in Indore, India. OEM, white-label and contract manufacturing of rice, hemp, flax, wood pulp & cellulose papers. Low MOQ (500 packs), 3–5 week lead time, 30+ countries served since 2017.",
  keywords: [
    "rolling paper manufacturer",
    "custom rolling paper manufacturer",
    "OEM rolling papers",
    "white label rolling papers",
    "private label rolling paper manufacturer",
    "rolling paper contract manufacturing",
    "hemp rolling paper manufacturer",
    "rice paper manufacturer",
    "flax rolling paper",
    "wholesale rolling papers",
    "rolling paper supplier",
    "rolling paper factory India",
    "king size rolling papers",
    "1 1/4 rolling papers",
    "rolling paper printing",
    "made in India rolling paper",
  ],
  alternates: {
    canonical: "https://ryopapers.com/rolling-paper-manufacturer",
  },
  openGraph: {
    title: "Rolling Paper Manufacturer — RYO Papers (OEM · White Label · Since 2017)",
    description:
      "Premier rolling paper manufacturer for OEM, white-label & contract manufacturing. Custom rice, hemp, flax & cellulose papers. Low MOQ (500 packs), global shipping to 30+ countries since 2017.",
    url: "https://ryopapers.com/rolling-paper-manufacturer",
    type: "website",
    locale: "en_US",
    siteName: "RYO Papers",
    images: [
      {
        url: "https://ryopapers.com/og-rolling-paper-manufacturer.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@ryopapers",
    title: "Rolling Paper Manufacturer — RYO Papers",
    description: "OEM · white-label · contract manufacturing. Rice, hemp, flax, cellulose. MOQ from 500 packs. 30+ countries since 2017.",
    images: ["https://ryopapers.com/og-rolling-paper-manufacturer.jpg"],
  },
};

export default function RollingPaperManufacturerPage() {
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://ryopapers.com/rolling-paper-manufacturer/#webpage",
    "url": "https://ryopapers.com/rolling-paper-manufacturer",
    "name": "Rolling Paper Manufacturer — Custom, OEM & White Label Since 2017 | RYO Papers",
    "description": "RYO Papers is a leading rolling paper manufacturer based in Indore, India. OEM, white-label and contract manufacturing of rice, hemp, flax, wood pulp & cellulose papers. Low MOQ (500 packs), 3–5 week lead time, 30+ countries served since 2017.",
    "publisher": { "@id": "https://ryopapers.com/#organization" }
  };


  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://ryopapers.com" },
      { "@type": "ListItem", "position": 2, "name": "Manufacturer", "item": "https://ryopapers.com/rolling-paper-manufacturer" }
    ]
  };

  return (
    <div className="bg-bg text-text font-sans leading-relaxed overflow-x-hidden">
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="webpage-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />


      {/* ── BREADCRUMB ── */}
      <nav className="bg-bg border-b border-border py-3.5 px-[clamp(20px,5vw,80px)] text-[16px] text-muted flex gap-2 items-center" aria-label="breadcrumb">
        <Link href="/" className="text-brand-deep hover:underline">Home</Link>
        <span className="text-[rgba(26,22,18,0.1)]" aria-hidden="true">›</span>
        <span>Rolling Paper Manufacturer</span>
      </nav>

      {/* ── HERO ── */}
      <section className="min-h-[88vh] grid grid-cols-1 md:grid-cols-2 items-center py-20 px-[clamp(20px,5vw,80px)] gap-[60px] relative overflow-hidden" aria-label="Hero">
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
              Manufacturer · OEM · White Label · Since 2017
            </span>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h1 className="font-display text-[clamp(38px,5.5vw,68px)] font-black leading-[1.05] tracking-tight text-ink mb-6">
              Rolling Paper <em className="italic text-brand font-bold">Manufacturer</em> You Can Build a Brand On
            </h1>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="text-[clamp(15px,1.4vw,18px)] text-text leading-relaxed max-w-[560px] mb-9 font-light">
              RYO Papers is a leading rolling paper manufacturer based in Indore, India — supplying OEM, white-label and contract manufacturing to brands in 30+ countries. Rice, hemp, flax, wood pulp, cellulose and custom blends — engineered with precision at every GSM, every size, every print finish.
            </p>
          </FadeUp>
          <FadeUp delay={0.3}>
            <div className="flex gap-3.5 flex-wrap mb-12">
              <Link href="/contact" className="btn btn-gold btn-lg">
                Request a Sample
              </Link>
              <Link href="#paper-types" className="btn btn-primary btn-lg">
                View Paper Types
              </Link>
            </div>
          </FadeUp>
          <FadeUp delay={0.4}>
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-[rgba(26,22,18,0.1)]">
              <div>
                <div className="font-display text-[clamp(28px,3vw,38px)] text-brand-deep leading-none">2017</div>
                <div className="text-[12px] text-[#7A6F65] tracking-wider uppercase mt-1.5">Founded</div>
              </div>
              <div>
                <div className="font-display text-[clamp(28px,3vw,38px)] text-brand-deep leading-none">30+</div>
                <div className="text-[12px] text-[#7A6F65] tracking-wider uppercase mt-1.5">Countries Served</div>
              </div>
              <div>
                <div className="font-display text-[clamp(28px,3vw,38px)]  text-brand-deep leading-none">500</div>
                <div className="text-[12px] text-[#7A6F65] tracking-wider uppercase mt-1.5">Min. Order (Packs)</div>
              </div>
            </div>
          </FadeUp>
        </div>
        <FadeUp delay={0.5} className="relative flex items-center justify-center z-10" aria-hidden="true">
          <div className="relative w-[380px] h-[440px] max-w-full">
            <div className="absolute w-[240px] h-[320px] rounded-md border border-[rgba(26,22,18,0.1)] flex flex-col items-center justify-center p-6 bg-[#F5F2EC] top-0 left-0 -rotate-9 -translate-x-[30px] shadow-[0_18px_50px_rgba(26,22,18,0.1)]">
              <div className="text-[56px] mb-4">🌿</div>
            </div>
            <div className="absolute w-[240px] h-[320px] rounded-md border border-[rgba(26,22,18,0.1)] flex flex-col items-center justify-center p-6 bg-brand-light top-0 left-0 rotate-[4deg] translate-x-[40px] -translate-y-[10px] shadow-[0_18px_50px_rgba(26,22,18,0.1)]">
              <div className="text-[56px] mb-4">📜</div>
            </div>
            <div className="absolute w-[240px] h-[320px] rounded-md border border-[#3B5E3A] flex flex-col items-center justify-center p-6 bg-surface top-0 left-0 translate-x-[70px] translate-y-[60px] shadow-[0_18px_50px_rgba(26,22,18,0.1)]">
              <div className="text-[56px] mb-4">✦</div>
              <div className="font-display text-[18px] text-ink text-center mb-2">Custom Rolling Papers</div>
              <div className="text-[11px] text-[#7A6F65] tracking-wider uppercase text-center">OEM · White Label · Contract Mfg.</div>
            </div>
          </div>
        </FadeUp>
      </section>

      {/* ── TRUST BAND ── */}
      <div className="bg-bg border-t border-b border-[rgba(26,22,18,0.06)] py-10 px-[clamp(20px,5vw,80px)]">
        <p className="text-center text-[11px] tracking-[0.14em] uppercase text-[#7A6F65] font-medium mb-6">Manufacturing Standards & Certifications</p>
        <div className="flex flex-wrap justify-center items-center gap-12">
          {[
            "FSC-Certified Papers",
            "Food-Grade Inks",
            "Natural Gum Arabic",
            "Made in India · DGFT Registered",
            "Direct Manufacturer · No Middlemen"
          ].map((text, i) => (
            <div key={i} className="flex items-center gap-2.5 text-[13px] font-medium tracking-wider uppercase text-text">
              <span className="w-9 h-9 border-[1.5px] border-[#3B5E3A] rounded-full flex items-center justify-center text-brand-deep text-sm font-bold bg-brand-light">✓</span>
              {text}
            </div>
          ))}
        </div>
      </div>

      {/* ── WHAT WE MANUFACTURE ── */}
      <section className="py-24 px-[clamp(20px,5vw,80px)]" id="paper-types">
        <span className="inline-block text-[11px] font-medium tracking-[0.14em] uppercase text-brand-deep mb-4">What We Manufacture</span>
        <h2 className="font-display text-[clamp(30px,4vw,48px)] leading-[1.1] tracking-tight text-ink mb-5">Every Rolling Paper Type. <em className="italic text-brand font-bold">One Manufacturer.</em></h2>
        <p className="text-[17px] text-text font-light max-w-[720px] leading-relaxed mb-14">
          RYO Papers manufactures the full spectrum of rolling paper materials — from ultra-thin rice papers to slow-burning hemp blends, from traditional flax to transparent cellulose. Every material is sourced for purity, tested for burn consistency, and available with full custom printing, packaging, and watermark options. Available in king size, 1¼ size, slim, single wide, and double wide formats.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: "🌾", name: "Rice Paper", spec: "12–14 GSM · Slow Burn · Neutral Taste", desc: "Ultra-thin and nearly tasteless. Burns slow and even. Our most popular paper type for premium consumer brands targeting a clean smoke. Watermarks and natural gum arabic available.", tag: "Most Popular", link: "/products/rice-rolling-paper" },
            { icon: "🌿", name: "Hemp Paper", spec: "14–18 GSM · Medium Burn · Slight Earthy Note", desc: "Natural brown or bleached hemp. Slightly textured, easy to roll, durable in transit. Ideal for wellness and organic-positioned brands. FSC-certified options available on request.", tag: "Wellness Segment", link: "/products/hemp-rolling-paper" },
            { icon: "🌱", name: "Flax Paper", spec: "13–16 GSM · Even Burn · High Tensile Strength", desc: "Traditionally used in European markets. Excellent tensile strength and smooth burn profile. Ideal for volume brands requiring a durable, classic European feel.", tag: "European Standard", link: "/products/flax-rolling-paper" },
            { icon: "🪵", name: "Wood Pulp", spec: "14–25 GSM · Classic Burn · Cost Efficient", desc: "The classic rolling paper material. Cost-efficient at scale. Available bleached and unbleached. Suits entry-level and value-tier brand positioning across international markets.", tag: "Cost Efficient", link: "/products/wood-pulp-rolling-paper" },
            { icon: "🔮", name: "Cellulose", spec: "11–13 GSM · Very Slow Burn · Fully Transparent", desc: "Transparent, ultra-thin papers for brands looking to stand out on shelf. A premium differentiator with a unique visual identity — increasingly demanded by gift-set and luxury brands.", tag: "Premium Niche", link: "/products/cellulose-rolling-paper" },
            { icon: "✦", name: "Custom Blend", spec: "By Specification · Any GSM · Any Fiber", desc: "Have a specific GSM, porosity, fiber blend, or burn rate in mind? Work directly with our production team to formulate a proprietary paper specification — fully owned by your brand.", tag: "By Request", link: "/contact" },
          ].map((item, i) => (
            <Link key={i} href={item.link} className="bg-surface border border-[rgba(26,22,18,0.1)] rounded px-7 py-8 flex flex-col transition-all duration-300 hover:border-[#3B5E3A] hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(26,22,18,0.06)] group">
              <div className="text-[42px] mb-4.5">{item.icon}</div>
              <div className="font-display text-[22px] font-bold text-ink mb-1.5">{item.name}</div>
              <div className="text-[11px] tracking-[0.08em] uppercase text-brand font-medium mb-3.5">{item.spec}</div>
              <p className="text-sm text-[#7A6F65] leading-[1.6] flex-grow mb-4">{item.desc}</p>
              <span className="self-start text-[11px] tracking-[0.06em] text-[#C9A84C] border border-[#C9A84C] py-1 px-2.5 rounded-sm uppercase font-medium">{item.tag}</span>
              <span className="mt-3.5 text-[12px] text-brand-deep uppercase tracking-[0.06em] font-medium group-hover:underline">Explore {item.name} →</span>
            </Link>
          ))}
        </div>
      </section>

      {/* ── COMPARISON TABLE ── */}
      <section className="py-24 px-[clamp(20px,5vw,80px)] bg-bg">
        <span className="inline-block text-[11px] font-medium tracking-[0.14em] uppercase text-brand-deep mb-4">Compare Paper Types</span>
        <h2 className="font-display text-[clamp(30px,4vw,48px)] leading-[1.1] tracking-tight text-ink mb-5">Rice vs Hemp vs Flax vs Wood Pulp vs Cellulose</h2>
        <p className="text-[17px] text-text font-light max-w-[720px] leading-relaxed mb-14">
          Picking the right paper type is the single most important decision when launching a rolling paper brand. Below is the manufacturer-side comparison we use when consulting with new clients — covering GSM range, burn profile, taste neutrality, durability, cost tier, and best-fit brand positioning.
        </p>
        <div className="overflow-x-auto mt-4 border border-[rgba(26,22,18,0.1)] bg-surface rounded">
          <table className="w-full min-w-[720px] border-collapse text-left text-sm" aria-label="Comparison of rolling paper types">
            <thead>
              <tr className="bg-ink text-white font-display text-[13px] tracking-wider uppercase font-bold">
                <th className="p-4 border-b border-[rgba(26,22,18,0.06)]">Attribute</th>
                <th className="p-4 border-b border-[rgba(26,22,18,0.06)]">Rice</th>
                <th className="p-4 border-b border-[rgba(26,22,18,0.06)]">Hemp</th>
                <th className="p-4 border-b border-[rgba(26,22,18,0.06)]">Flax</th>
                <th className="p-4 border-b border-[rgba(26,22,18,0.06)]">Wood Pulp</th>
                <th className="p-4 border-b border-[rgba(26,22,18,0.06)]">Cellulose</th>
              </tr>
            </thead>
            <tbody className="text-text">
              {[
                { label: "GSM Range", values: ["12–14", "14–18", "13–16", "14–25", "11–13"] },
                { label: "Burn Speed", values: ["Slow", "Medium", "Smooth & even", "Faster", "Very slow"] },
                { label: "Taste Profile", values: ["Neutral / clean", "Slight earthy note", "Neutral", "Mild paper note", "Tasteless"] },
                { label: "Texture", values: ["Smooth, ultra-thin", "Slightly textured", "Smooth", "Classic feel", "Glass-like, transparent"] },
                { label: "Cost Tier", values: ["Mid–Premium", "Mid", "Mid", "Entry / Value", "Premium"] },
                { label: "Best Brand Fit", values: ["Premium consumer", "Wellness / organic", "European volume", "Value / entry", "Luxury / niche"] },
                { label: "Print Finish", values: ["Excellent", "Excellent", "Excellent", "Excellent", "Limited"] },
                { label: "Availability at MOQ 500", values: ["✓", "✓", "✓", "✓", "✓"] },
              ].map((row, i) => (
                <tr key={i} className="hover:bg-bg transition-colors border-b border-[rgba(26,22,18,0.06)] last:border-b-0">
                  <th className="p-4 bg-cream-200 font-display w-[180px] text-ink">{row.label}</th>
                  {row.values.map((val, j) => (
                    <td key={j} className={`p-4 ${j === 0 || (row.label === "Best Brand Fit" && j === 0) ? "bg-brand-light font-medium" : ""}`}>
                      {val}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-6 text-sm text-[#7A6F65] max-w-[720px]">
          Not sure which type fits your brand? Most new brands launch on rice paper at 14 GSM — it has the broadest appeal across consumer segments and the cleanest first impression. <Link href="/contact" className="text-brand-deep font-medium underline">Talk to our team →</Link>
        </p>
      </section>

      {/* ── PROCESS ── */}
      <section className="py-24 px-[clamp(20px,5vw,80px)] bg-surface">
        <span className="inline-block text-[11px] font-medium tracking-[0.14em] uppercase text-brand-deep mb-4">How It Works</span>
        <h2 className="font-display text-[clamp(30px,4vw,48px)] font-black leading-[1.1] tracking-tight text-ink mb-5">From Brief to <em className="italic text-brand font-bold">Brand-Ready</em> in 3–5 Weeks</h2>
        <p className="text-[17px] text-text font-light max-w-[720px] leading-relaxed mb-14">
          Our rolling paper manufacturing process is engineered for brand owners — not factories. We handle the production complexity so you receive a finished, retail-ready product, not a logistics headache. Most clients move from initial brief to dispatched shipment within 3–5 weeks.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {[
            { num: "01", title: "Brief & Consultation", desc: "Share your paper type, size, GSM, gum style, packaging format and target market. A real person reviews your requirements and responds within 24 hours with feasibility, costing, and lead time." },
            { num: "02", title: "Design & Sampling", desc: "We send physical printed samples for your approval. If you need design help, our in-house team creates print-ready artwork from your brief, mood board, or logo — no extra charge." },
            { num: "03", title: "Production", desc: "Manufacturing begins only after you approve the physical sample. Standard lead time is 12–18 days. Rush production available for time-sensitive brand launches." },
            { num: "04", title: "Quality Check", desc: "Every batch passes burn testing, gum adhesion testing, GSM verification, and visual inspection before it leaves our facility. No shortcuts on consistency between sample and production run." },
            { num: "05", title: "Direct Shipment", desc: "We ship directly to your warehouse or 3PL — no middlemen, no freight agents skimming margin. Tracked, insured, and delivered with full export documentation (COO, HSN, Commercial Invoice)." },
          ].map((step, i) => (
            <FadeUp key={i} delay={0.1 * i} className="bg-surface border border-[rgba(26,22,18,0.1)] rounded px-6 py-8 relative">
              <div className="font-display text-[44px] font-black text-brand-deep leading-none mb-4">{step.num}</div>
              <div className="font-display text-lg font-bold text-ink mb-2 leading-snug">{step.title}</div>
              <p className="text-[14px] text-[#7A6F65] leading-relaxed">{step.desc}</p>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* ── DATA BAND ── */}
      <section className="bg-ink text-white py-24 px-[clamp(20px,5vw,80px)]">
        <span className="inline-block text-[11px] font-medium tracking-[0.14em] uppercase text-[#E8C97A] mb-4">RYO Papers Manufacturing Data</span>
        <h2 className="font-display text-[clamp(30px,4vw,48px)] font-black leading-[1.1] tracking-tight text-white mb-5 max-w-[800px]">The State of Rolling Paper <em className="italic text-brand font-bold">Manufacturing in 2026</em></h2>
        <p className="text-[17px] text-[rgba(255,255,255,0.7)] font-light max-w-[720px] leading-relaxed mb-14">
          Insights drawn from our own production records across 100+ brands and nine years of manufacturing data. Use these benchmarks when planning your launch, costing your range, or pitching investors.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {[
            { num: "73%", label: "of new RYO Papers clients launch their first SKU on rice paper at 14 GSM" },
            { num: "3.5w", label: "average lead time in 2026 — down from 6 weeks in 2017 thanks to in-house design and printing" },
            { num: "68%", label: "of brands launching at our 500-pack MOQ reorder within 6 months" },
            { num: "30+", label: "countries actively served, with strongest growth in North America, Western Europe and the Gulf" },
            { num: "340%", label: "growth in custom blend orders since 2022 as brands move toward proprietary paper specifications" },
            { num: "1¼", label: "most-ordered paper size globally, followed by king size and slim" },
          ].map((item, i) => (
            <div key={i} className="border-l-2 border-[#C9A84C] pl-6 py-2">
              <div className="font-display text-[56px] font-black text-brand leading-none mb-2.5">{item.num}</div>
              <div className="text-[13px] text-[rgba(255,255,255,0.85)] leading-relaxed">{item.label}</div>
            </div>
          ))}
        </div>
        <p className="mt-14 text-[12px] text-[rgba(255,255,255,0.5)] italic">
          Source: RYO Papers internal manufacturing data, January 2017 – April 2026. Aggregated across 100+ active brand clients. Updated quarterly.
        </p>
      </section>

      {/* ── EDUCATIONAL BLOCKS ── */}
      <section className="py-24 px-[clamp(20px,5vw,80px)] bg-bg">
        <span className="inline-block text-[11px] font-medium tracking-[0.14em] uppercase text-brand-deep mb-4">Manufacturer&apos;s Knowledge Base</span>
        <h2 className="font-display text-[clamp(30px,4vw,48px)] font-black leading-[1.1] tracking-tight text-ink mb-5">Three Decisions That Define Your <em className="italic text-brand font-bold">Rolling Paper Brand</em></h2>
        <p className="text-[17px] text-text font-light max-w-[720px] leading-relaxed mb-14">
          Most launch failures aren&apos;t about design — they&apos;re about three under-discussed manufacturing decisions: GSM, gum, and MOQ economics. Here&apos;s the manufacturer-side view on each.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-surface border border-[rgba(26,22,18,0.1)] border-l-[3px] border-l-[#3B5E3A] p-8">
            <h3 className="font-display text-[22px] font-bold text-brand-deep mb-3">GSM Explained</h3>
            <p className="text-[14.5px] text-text leading-relaxed mb-3"><strong>GSM</strong> stands for grams per square meter — the standard global measure of rolling paper thickness. Lower GSM = thinner paper.</p>
            <p className="text-[14.5px] text-text leading-relaxed mb-3">Premium brands typically choose <strong>12–14 GSM</strong> for quality. Mid-market brands pick <strong>14–18 GSM</strong> for balance. Value brands run <strong>18–25 GSM</strong> for cost efficiency.</p>
            <p className="text-[14.5px] text-text leading-relaxed">Recommendation: <strong>14 GSM rice or hemp.</strong> Broadest market acceptance and best margins.</p>
          </div>
          <div className="bg-surface border border-[rgba(26,22,18,0.1)] border-l-[3px] border-l-[#3B5E3A] p-8">
            <h3 className="font-display text-[22px] font-bold text-brand-deep mb-3">Gum Types</h3>
            <p className="text-[14.5px] text-text leading-relaxed mb-3">The gum strip is what makes a rolling paper functional. Three options:</p>
            <p className="text-[14.5px] text-text leading-relaxed mb-3"><strong>Natural gum arabic</strong> — sourced from Acacia trees. Plant-based, food-safe, no aftertaste. The premium standard. RYO Papers&apos; default.</p>
            <p className="text-[14.5px] text-text leading-relaxed"><strong>Synthetic / Hybrid</strong> — cost-efficient but increasingly avoided by health-positioned brands.</p>
          </div>
          <div className="bg-surface border border-[rgba(26,22,18,0.1)] border-l-[3px] border-l-[#3B5E3A] p-8">
            <h3 className="font-display text-[22px] font-bold text-brand-deep mb-3">MOQ Economics</h3>
            <p className="text-[14.5px] text-text leading-relaxed mb-3">Most factories require <strong>10,000–50,000 pack MOQs.</strong> This kills new brands before they start — locking $20K+ in inventory.</p>
            <p className="text-[14.5px] text-text leading-relaxed mb-3">RYO Papers manufactures from <strong>500 packs.</strong> Validate market response, refine packaging, and build cash flow before scaling.</p>
            <p className="text-[14.5px] text-text leading-relaxed">Data: <strong>68% of brands</strong> launching at 500 MOQ reorder within 6 months.</p>
          </div>
        </div>
      </section>

      {/* ── WHY RYO ── */}
      <section className="py-24 px-[clamp(20px,5vw,80px)]">
        <span className="inline-block text-[11px] font-medium tracking-[0.14em] uppercase text-brand-deep mb-4">Why RYO Papers</span>
        <h2 className="font-display text-[clamp(30px,4vw,48px)] font-black leading-[1.1] tracking-tight text-ink mb-5">Built for Brands, <em className="italic text-brand font-bold">Not Just Buyers.</em></h2>
        <p className="text-[17px] text-text font-light max-w-[720px] leading-relaxed mb-14">
          We&apos;ve helped over a hundred rolling paper brands go from idea to retail shelf since 2017. Here&apos;s what makes RYO Papers a different kind of manufacturer.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: "📦", title: "Low Minimum Orders", desc: "Start from 500 packs. Test your market, prove your concept, and scale when ready — without locking capital into a warehouse of unsold stock. No other major manufacturer offers this." },
            { icon: "🧑‍🤝‍🧑", title: "Real Human Support", desc: "No ticket queues. No chatbots. Every client works with a real person from first inquiry to delivery. We know your brand, your launch dates, and your design preferences — not just your order number." },
            { icon: "🌍", title: "Global Supply, Local Care", desc: "We supply brands across North America, Europe, Asia, Australia, and the Gulf. Every order — 500 or 500,000 packs — is treated with the same personal attention." },
            { icon: "🎨", title: "In-House Design Team", desc: "Don't have print-ready artwork? We'll design it. Send a brief, a mood board, or just a logo — and our team creates packaging that reflects your brand. No extra cost on confirmed orders." },
            { icon: "♻️", title: "Sustainable Materials", desc: "We work with sustainably farmed and certified raw materials. Natural gum arabic, unbleached options, and FSC-certified papers available across the entire range." },
            { icon: "⚡", title: "Fast Turnaround", desc: "Standard lead time of 3–5 weeks from approved sample to dispatch. We're built to move at the pace brands need — especially during launch windows and trade-show deadlines." },
          ].map((item, i) => (
            <FadeUp key={i} delay={0.1 * i} className="py-2">
              <span className="inline-block text-[28px] mb-4">{item.icon}</span>
              <h3 className="font-display text-[19px] font-bold text-ink mb-2.5">{item.title}</h3>
              <p className="text-[14.5px] text-[#7A6F65] leading-relaxed">{item.desc}</p>
            </FadeUp>
          ))}
        </div>
      </section>


      {/* ── TEAM BAND ── */}
      <section className="py-24 px-[clamp(20px,5vw,80px)] border-t border-b border-[rgba(26,22,18,0.06)]">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-[60px] items-center">
          <FadeUp delay={0.1} className="aspect-[4/5] bg-gradient-to-br from-brand-light to-[#F5F2EC] border border-border rounded-sm flex items-center justify-center text-[80px] relative overflow-hidden">
            <span className="relative z-10">🌿</span>
            <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 14px, #3B5E3A 15px)' }}></div>
          </FadeUp>
          <div>
            <span className="inline-block text-[11px] font-medium tracking-[0.14em] uppercase text-brand-deep mb-4">The People Behind the Paper</span>
            <h2 className="font-display text-[clamp(28px,3.4vw,40px)] font-black leading-[1.1] tracking-tight text-ink mb-6">A Family-Run <em className="italic text-brand font-bold">Manufacturing House.</em></h2>
            <div className="text-base text-text leading-relaxed space-y-4 mb-10 font-light">
              <p>
                RYO Papers is the rolling paper division of YUVU Overseas, a family-run manufacturing house in Indore, India. We started in 2017 with a single conviction: that rolling paper manufacturing had become a black box of large MOQs, opaque pricing, and middlemen — and that brand owners deserved better.
              </p>
              <p>
                Today we run an in-house team of paper engineers, print specialists, and designers — supplying over a hundred active brands across 30+ countries. Every order, regardless of size, is handled directly. No agencies, no resellers, no quality drift between sample and production.
              </p>
              <p>
                When you work with RYO Papers, you&apos;re talking to the people who actually make the paper.
              </p>
            </div>
            <div className="flex flex-wrap gap-8">
              <div>
                <div className="font-display text-[32px] font-black text-brand-deep leading-none">9</div>
                <div className="text-[12px] text-[#7A6F65] tracking-wider uppercase mt-1">Years Manufacturing</div>
              </div>
              <div>
                <div className="font-display text-[32px] font-black text-brand-deep leading-none">100+</div>
                <div className="text-[12px] text-[#7A6F65] tracking-wider uppercase mt-1">Active Brands</div>
              </div>
              <div>
                <div className="font-display text-[32px] font-black text-brand-deep leading-none">1</div>
                <div className="text-[12px] text-[#7A6F65] tracking-wider uppercase mt-1">Indore Facility</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-24 px-[clamp(20px,5vw,80px)] bg-bg">
        <span className="inline-block text-[11px] font-medium tracking-[0.14em] uppercase text-brand-deep mb-4">Client Voices</span>
        <h2 className="font-display text-[clamp(30px,4vw,48px)] leading-[1.1] tracking-tight text-ink mb-5">Brands That Trust <em className="italic text-brand font-bold">Our Manufacturing.</em></h2>
        <p className="text-[17px] text-text font-light max-w-[720px] leading-relaxed mb-14">
          From single-product startups to multi-market distributors — here&apos;s what RYO Papers clients say about working with us. All testimonials verified, all clients reachable on request.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { text: "What impresses us most about RYO Papers is their dedication to the raw materials. They don't just talk about pure fibers — you can actually feel it in their papers. Their manufacturing process clearly prioritises cleanliness and precision, resulting in a product we're genuinely proud to put our name on.", author: "Bryan Willis", co: "Organic Rolls · Vietnam" },
            { text: "With the volumes we handle, reliability is the only currency. RYO Papers always delivers. Their expertise in paper production shows in the consistent quality and smooth execution. We've never had a batch issue across multiple years of orders.", author: "Anna Jónsdóttir", co: "Global Smoking Accessories · Iceland" },
            { text: "Partnering with RYO Papers made launching our custom rolling papers easy and affordable. Their low MOQs let us test the market without heavy investment, and the final product matched our vision perfectly — both in look and burn performance.", author: "Sarah J.", co: "The Green Leaf Emporium · USA" },
          ].map((t, i) => (
            <FadeUp
              key={i}
              delay={0.1 * i}
              className="bg-surface border border-border p-8 rounded relative before:content-['\'] before:absolute before:-top-2 before:left-6 before:font-display before:text-[80px] before:text-brand-deep before:leading-none before:bg-surface before:px-2"
            >
              <p className="text-[15px] text-text leading-relaxed italic mb-5 mt-2">{t.text}</p>
              <p className="font-display text-base text-ink">{t.author}</p>
              <p className="text-[13px] text-[#7A6F65] mt-0.5">{t.co}</p>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* ── FAQ ── */}
      <FaqSection />

      {/* ── CTA ── */}
      <div className="bg-ink text-white py-20 px-[clamp(20px,5vw,80px)] flex items-center justify-between gap-10 flex-wrap">
        <div>
          <h2 className="font-display text-[clamp(28px,3.5vw,44px)] font-black leading-[1.1] tracking-tight text-white mb-2">
            Ready to <em className="italic text-brand font-bold">Manufacture</em> Your Brand?
          </h2>
          <p className="text-base text-[rgba(255,255,255,0.65)] font-light">Talk to a real person. Get a quote within 24 hours. No bots, no scripts.</p>
        </div>
        <div className="flex gap-3.5 flex-wrap shrink-0">
          <Link
            href="/contact"
            className="btn btn-gold"
          >
            Request a Quote
          </Link>
          <a
            href="https://wa.me/+919009111088?text=Hello!%20I%20want%20to%20enquire%20about%20rolling%20paper%20manufacturing."
            className="btn btn-secondary border-white/30 text-white hover:border-white/70"
          >
            WhatsApp Us
          </a>
        </div>
      </div>
    </div>
  );
}
