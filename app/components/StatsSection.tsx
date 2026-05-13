import React from "react";
import Link from "next/link";

const StatsSection = () => {
  return (
    <section className="relative py-24 md:py-32 px-6 md:px-12 bg-white overflow-hidden" aria-labelledby="stats-heading">
      {/* Subtle grid backdrop */}
      <div className="absolute inset-0 pointer-events-none opacity-50">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_100%_0%,rgba(162,210,48,0.05)_0%,transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_50%_at_0%_100%,rgba(45,74,43,0.04)_0%,transparent_60%)]"></div>
      </div>

      <div className="max-w-[1240px] mx-auto relative z-10">
        <span className="inline-flex items-center gap-3 font-mono text-[11px] font-medium text-ryo-700 bg-ryo-100 px-3.5 py-1.5 rounded-full uppercase tracking-widest mb-7">
          <span className="w-2 h-2 rounded-full bg-ryo-400"></span>
          Market Intelligence · 2024–2034
        </span>

        <h2 id="stats-heading" className="font-display text-[clamp(34px,4.5vw,56px)] font-normal text-forest-600 leading-[1.05] tracking-tight mb-5 max-w-[920px]">
          A <em className="italic font-medium text-ryo-600"> $1.36 billion</em> industry<sup className="text-[0.4em] ml-1.5 opacity-40 hover:opacity-100 transition-opacity"><Link href="https://www.polarismarketresearch.com/industry-analysis/cigarette-paper-market" target="_blank" className="hover:text-ryo-600"> [1]</Link></sup> — <br />
          and the brands building into it.
        </h2>

        <p className="text-lg md:text-[17px] text-cream-700 leading-relaxed max-w-[720px] mb-14 font-light">
          Rolling papers aren&apos;t a niche. They&apos;re a global manufacturing category with
          institutional growth across cannabis, RYO tobacco, and pre-roll segments —
          and the brands launching today are building into one of the fastest-moving
          consumer paper markets in the world.
          <span className="block mt-4 text-[11px] font-mono text-ryo-400 uppercase tracking-tight">Source: Polaris Market Research 2025-2034 Analysis</span>
        </p>

        {/* HERO STAT */}
        <div className="bg-forest-600 text-white rounded-2xl p-10 md:p-16 lg:p-20 grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-12 items-center mb-8 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,rgba(162,210,48,0.15)_0%,transparent_50%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_100%,rgba(201,169,97,0.10)_0%,transparent_50%)]"></div>
          </div>

          <div className="relative z-10">
            <div className="font-mono text-xs tracking-widest uppercase text-ryo-300 mb-1.5">Global Cigarette Paper Market</div>
            <div className="font-display text-[clamp(72px,10vw,144px)] font-normal text-white leading-[0.9] tracking-tighter mb-3.5 lining-nums">
              $1.36<span className="text-[0.5em] text-ryo-300 font-light -ml-1 tracking-tight">B</span>
            </div>
            <div className="font-display text-xl md:text-2xl lg:text-[26px] font-light text-white/90 leading-snug tracking-tight mb-5">
              The global cigarette paper market in 2024 — forecast to grow at{" "}
              <strong className="text-ryo-300 font-medium">3.5% CAGR</strong> through 2034.
            </div>
            <div className="text-[13px] text-white/55 flex flex-wrap gap-x-4 gap-y-2 items-center">
              <span className="flex items-center after:content-['·'] after:ml-4 after:text-white/30 last:after:hidden">Asia Pacific leading</span>
              <span className="flex items-center after:content-['·'] after:ml-4 after:text-white/30 last:after:hidden">Wood pulp dominant</span>
              <span className="flex items-center after:content-['·'] after:ml-4 after:text-white/30 last:after:hidden">2024 valuation</span>
            </div>
          </div>

          <div className="grid gap-5 relative z-10">
            <div className="border-l-2 border-ryo-400 pl-5">
              <div className="font-display text-3xl md:text-4xl font-normal text-gold-300 leading-none tracking-tight mb-1.5">+6.3%</div>
              <div className="text-[13px] text-white/75 leading-relaxed">
                US rolling paper & cones market CAGR (2026–2033) — the fastest-growing major region.
              </div>
            </div>
            <div className="border-l-2 border-ryo-400 pl-5">
              <div className="font-display text-3xl md:text-4xl font-normal text-gold-300 leading-none tracking-tight mb-1.5">$858M</div>
              <div className="text-[13px] text-white/75 leading-relaxed">
                US rolling paper & cones market value (2025).
              </div>
            </div>
            <div className="border-l-2 border-ryo-400 pl-5">
              <div className="font-display text-3xl md:text-4xl font-normal text-gold-300 leading-none tracking-tight mb-1.5">58–60%</div>
              <div className="text-[13px] text-white/75 leading-relaxed">
                Hemp&apos;s material share of the global rolling paper market.
              </div>
            </div>
          </div>
        </div>

        {/* STAT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-14">
          <div className="bg-cream-50 border border-cream-300 rounded-xl p-8 transition-all duration-300 hover:border-ryo-400 hover:shadow-lg hover:-translate-y-0.5 group relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-ryo-400 scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"></div>
            <div className="font-mono text-[10px] text-cream-600 tracking-widest uppercase mb-[18px] flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-ryo-400"></span>
              Cannabis & Herb Rolling
            </div>
            <div className="font-display text-[clamp(40px,4.5vw,64px)] font-normal text-forest-600 leading-[0.95] tracking-tighter mb-3 lining-nums">
              $745<span className="text-[0.45em] text-cream-500 font-light -ml-1 tracking-normal">M</span>
            </div>
            <div className="text-sm text-cream-700 leading-relaxed mb-4">
              Global application value for cannabis and herb rolling (2023), growing at 4.8% CAGR.
            </div>
            <div className="font-mono text-[11px] text-cream-500 tracking-wide pt-4 border-top border-cream-300 uppercase">
              North America · Pre-roll surge
            </div>
          </div>

          <div className="bg-cream-50 border border-cream-300 rounded-xl p-8 transition-all duration-300 hover:border-ryo-400 hover:shadow-lg hover:-translate-y-0.5 group relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-ryo-400 scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"></div>
            <div className="font-mono text-[10px] text-cream-600 tracking-widest uppercase mb-[18px] flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-ryo-400"></span>
              Tobacco Rolling Share
            </div>
            <div className="font-display text-[clamp(40px,4.5vw,64px)] font-normal text-forest-600 leading-[0.95] tracking-tighter mb-3 lining-nums">
              63.4<span className="text-[0.45em] text-cream-500 font-light -ml-1 tracking-normal">%</span>
            </div>
            <div className="text-sm text-cream-700 leading-relaxed mb-4">
              Estimated tobacco rolling share of global rolling paper applications by 2026.
            </div>
            <div className="font-mono text-[11px] text-cream-500 tracking-wide pt-4 border-top border-cream-300 uppercase">
              Europe-led · RYO tradition
            </div>
          </div>

          <div className="bg-cream-50 border border-cream-300 rounded-xl p-8 transition-all duration-300 hover:border-ryo-400 hover:shadow-lg hover:-translate-y-0.5 group relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-ryo-400 scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"></div>
            <div className="font-mono text-[10px] text-cream-600 tracking-widest uppercase mb-[18px] flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-ryo-400"></span>
              Hemp Growth Rate
            </div>
            <div className="font-display text-[clamp(40px,4.5vw,64px)] font-normal text-forest-600 leading-[0.95] tracking-tighter mb-3 lining-nums">
              +6.1<span className="text-[0.45em] text-cream-500 font-light -ml-1 tracking-normal">%</span>
            </div>
            <div className="text-sm text-cream-700 leading-relaxed mb-4">
              Upper-end CAGR for the hemp rolling paper market — the fastest-growing material in the category.
            </div>
            <div className="font-mono text-[11px] text-cream-500 tracking-wide pt-4 border-top border-cream-300 uppercase">
              Premiumization · Organic shift
            </div>
          </div>
        </div>

        {/* BREAKDOWN BAND */}
        <div className="bg-cream-100 border border-cream-300 rounded-xl p-6 md:p-10">
          <div className="font-mono text-[11px] text-cream-600 tracking-widest uppercase mb-6 flex items-center gap-3 after:content-[''] after:flex-1 after:h-[1px] after:bg-cream-300">
            By Segment · Growth Drivers
          </div>
          <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr_1fr] gap-[1px] bg-cream-300 rounded-lg overflow-hidden border border-cream-300">
            {/* Header */}
            <div className="hidden md:block bg-forest-600 text-white font-mono text-[10px] tracking-widest uppercase px-[22px] py-3.5 text-center">Segment</div>
            <div className="hidden md:block bg-forest-600 text-white font-mono text-[10px] tracking-widest uppercase px-[22px] py-3.5 text-center">Market Value</div>
            <div className="hidden md:block bg-forest-600 text-white font-mono text-[10px] tracking-widest uppercase px-[22px] py-3.5 text-center">CAGR</div>
            <div className="hidden md:block bg-forest-600 text-white font-mono text-[10px] tracking-widest uppercase px-[22px] py-3.5 text-center">Leading Region</div>

            {/* Row 1 */}
            <div className="bg-cream-100 font-display text-[17px] text-forest-600 font-normal tracking-tight px-[22px] py-6 md:py-4 flex flex-col justify-center border-b md:border-b-0 border-cream-300">
              Global Cigarette Paper
              <small className="block font-sans text-xs font-normal text-cream-600 mt-1">Wood pulp dominant</small>
            </div>
            <div className="bg-cream-50 px-[22px] py-6 md:py-4 flex flex-col justify-center items-center md:items-start border-b md:border-b-0 border-cream-300">
              <div className="font-display text-[26px] text-forest-600 font-normal tracking-tight leading-none mb-1">$1.36<span className="text-[0.55em] text-cream-500 ml-0.5">B</span></div>
              <div className="font-mono text-[10px] text-cream-600 tracking-wider uppercase">2024</div>
            </div>
            <div className="bg-cream-50 px-[22px] py-6 md:py-4 flex flex-col justify-center items-center md:items-start border-b md:border-b-0 border-cream-300">
              <div className="font-display text-[26px] text-forest-600 font-normal tracking-tight leading-none mb-1">3.5<span className="text-[0.55em] text-cream-500 ml-0.5">%</span></div>
              <div className="font-mono text-[10px] text-cream-600 tracking-wider uppercase">2025–2034</div>
            </div>
            <div className="bg-cream-50 px-[22px] py-6 md:py-4 flex flex-col justify-center items-center md:items-start">
              <div className="font-display text-[26px] text-forest-600 font-normal tracking-tight leading-none mb-1">APAC</div>
              <div className="font-mono text-[10px] text-cream-600 tracking-wider uppercase">Demand leader</div>
            </div>

            {/* Row 2 */}
            <div className="bg-cream-100 font-display text-[17px] text-forest-600 font-normal tracking-tight px-[22px] py-6 md:py-4 flex flex-col justify-center border-b md:border-b-0 border-cream-300">
              US Rolling Paper & Cones
              <small className="block font-sans text-xs font-normal text-cream-600 mt-1">Hemp, rice, flax</small>
            </div>
            <div className="bg-cream-50 px-[22px] py-6 md:py-4 flex flex-col justify-center items-center md:items-start border-b md:border-b-0 border-cream-300">
              <div className="font-display text-[26px] text-ryo-600 font-normal tracking-tight leading-none mb-1">$858<span className="text-[0.55em] text-cream-500 ml-0.5">M</span></div>
              <div className="font-mono text-[10px] text-cream-600 tracking-wider uppercase">2025</div>
            </div>
            <div className="bg-cream-50 px-[22px] py-6 md:py-4 flex flex-col justify-center items-center md:items-start border-b md:border-b-0 border-cream-300">
              <div className="font-display text-[26px] text-ryo-600 font-normal tracking-tight leading-none mb-1">6.3<span className="text-[0.55em] text-cream-500 ml-0.5">%</span></div>
              <div className="font-mono text-[10px] text-cream-600 tracking-wider uppercase">2026–2033</div>
            </div>
            <div className="bg-cream-50 px-[22px] py-6 md:py-4 flex flex-col justify-center items-center md:items-start">
              <div className="font-display text-[26px] text-forest-600 font-normal tracking-tight leading-none mb-1">N. America</div>
              <div className="font-mono text-[10px] text-cream-600 tracking-wider uppercase">Pre-roll surge</div>
            </div>

            {/* Row 3 */}
            <div className="bg-cream-100 font-display text-[17px] text-forest-600 font-normal tracking-tight px-[22px] py-6 md:py-4 flex flex-col justify-center border-b md:border-b-0 border-cream-300">
              Cannabis & Herb Rolling
              <small className="block font-sans text-xs font-normal text-cream-600 mt-1">Application value</small>
            </div>
            <div className="bg-cream-50 px-[22px] py-6 md:py-4 flex flex-col justify-center items-center md:items-start border-b md:border-b-0 border-cream-300">
              <div className="font-display text-[26px] text-forest-600 font-normal tracking-tight leading-none mb-1">$745<span className="text-[0.55em] text-cream-500 ml-0.5">M</span></div>
              <div className="font-mono text-[10px] text-cream-600 tracking-wider uppercase">2023</div>
            </div>
            <div className="bg-cream-50 px-[22px] py-6 md:py-4 flex flex-col justify-center items-center md:items-start border-b md:border-b-0 border-cream-300">
              <div className="font-display text-[26px] text-forest-600 font-normal tracking-tight leading-none mb-1">4.8<span className="text-[0.55em] text-cream-500 ml-0.5">%</span></div>
              <div className="font-mono text-[10px] text-cream-600 tracking-wider uppercase">Forecast</div>
            </div>
            <div className="bg-cream-50 px-[22px] py-6 md:py-4 flex flex-col justify-center items-center md:items-start">
              <div className="font-display text-[26px] text-forest-600 font-normal tracking-tight leading-none mb-1">N. America</div>
              <div className="font-mono text-[10px] text-cream-600 tracking-wider uppercase">Legalization</div>
            </div>
          </div>
        </div>

        {/* SOURCES FOOTER */}
        <div className="mt-8 pt-6 border-t border-cream-300 flex flex-col md:flex-row justify-between items-start gap-6">
          <p className="font-mono text-[11px] text-cream-500 tracking-wide leading-relaxed max-w-[720px]">
            <strong className="text-cream-700 font-semibold uppercase">Sources:</strong> Industry market research reports including
            global cigarette paper market analyses, U.S. rolling paper & cones
            market reports, and global rolling paper application studies (2023–2026).
            Major market players tracked: Delfort Group, Glatz Group, SWM
            International, OCB, Republic Technologies, RAW, Rizla, HBI International.
          </p>
          <Link href="/rolling-paper-manufacturer" className="inline-flex items-center gap-2 font-sans text-[13px] font-semibold text-forest-600 no-underline px-[18px] py-2.5 bg-ryo-100 rounded-full transition-all duration-200 hover:bg-ryo-400 hover:text-forest-700 hover:translate-x-0.5 group">
            Build your brand
            <span className="font-normal transition-transform duration-200 group-hover:translate-x-0.5">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
