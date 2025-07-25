// components/HeroCard.tsx

import React from "react";

const HeroCard: React.FC = () => {
  return (
    <div
      className="
      bg-gradient-to-b from-[#bdc9c3] to-[#A1D8D2]
      text-gray-100 py-8 md:py-8 mb-8
      border border-green-600
       mx-auto
      overflow-hidden relative
      transform hover:scale-[1.01] transition-transform duration-300 ease-in-out
    "
    >
      {/* Optional: Add a subtle 'shine' effect using pseudo-elements or a subtle pattern */}
      <div
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 100% 0%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 0% 100%, rgba(255,255,255,0.1) 0%, transparent 50%)",
        }}
      ></div>

      <div className="relative z-10 text-center">
        {/* Main H1 featuring the R-Y-O breakdown */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold  leading-tight mb-4 bg-gradient-to-r from-emerald-500 via-zinc-700 to-sky-600 bg-clip-text text-transparent">
          Where your story meets our paper
        </h1>

        {/* Main content */}
        <p className="text-lg md:text-xl text-[#173153] leading-relaxed max-w-3xl mx-auto">
          At<strong className="text-sky-600"> RYO Papers,</strong> we believe
          every great idea deserves a chance — no matter how small it starts.
          That’s why, since 2017, we’ve been helping people around the world
          create their own line of custom rolling papers, with low minimum
          orders, fast turnaround, and personal attention every step of the way.
        </p>
        <p className="text-lg md:text-xl text-[#173153] leading-relaxed max-w-3xl mx-auto mt-4">
          We’re a white-label company, but our approach is anything but generic.
          Every client, every brand, every design — it matters to us. We
          understand that your product isn’t just a product. It’s your story,
          your roots, your identity. And we take that seriously.
        </p>
      </div>
    </div>
  );
};

export default HeroCard;
