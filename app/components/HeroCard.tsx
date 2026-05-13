// components/HeroCard.tsx

import React from "react";
const HeroCard: React.FC = () => {
  return (
    <div className="text-ink py-8 md:py-8 mb-8 mx-auto overflow-hidden relative">
      <div className="relative z-10 text-center">
        <h1 className="font-display text-[clamp(28px,4.5vw,56px)] leading-[1.1] tracking-tight text-ink mb-6">
          Where your story <br />
          <span className="text-[clamp(40px,7vw,88px)] uppercase font-black text-ink block mt-2">
            meets our <span className="text-brand italic">paper</span>
          </span>
        </h1>

        {/* Main content */}
        <div className="space-y-6 max-w-3xl mx-auto">
          <p className="text-[clamp(16px,1.2vw,20px)] text-muted leading-relaxed font-light">
            At <strong className="text-brand-deep font-bold">RYO Papers,</strong> we believe
            every great idea deserves a chance — no matter how small it starts.
            That’s why, since 2017, we’ve been helping people around the world
            create their own line of custom rolling papers, with low minimum
            orders, fast turnaround, and personal attention every step of the way.
          </p>
          <p className="text-[clamp(16px,1.2vw,20px)] text-muted leading-relaxed font-light">
            We’re a white-label company, but our approach is anything but generic.
            Every client, every brand, every design — it matters to us. We
            understand that your product isn’t just a product. It’s your story,
            your roots, your identity. And we take that seriously.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
