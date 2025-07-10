// components/HeroCard.tsx

import React from "react";

const HeroCard: React.FC = () => {
  return (
    <div
      className="
      bg-gradient-to-b from-green-900 to-green-700
      text-gray-100 py-8 md:py-8 mb-16
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
        <h1
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold  leading-tight mb-4
          drop-shadow-lg bg-clip-text text-transparent
          bg-gradient-to-r from-amber-300 via-amber-100 to-amber-300
        "
        >
          <span className="block text-green-200">
            R – <span className="text-white">Respect</span>
          </span>
          <span className="block text-green-200">
            Y – <span className="text-white">Your</span>
          </span>
          <span className="block text-green-200">
            O – <span className="text-white">Origin</span>
          </span>
        </h1>

        {/* Main content */}
        <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto">
          <strong className="text-green-200">RYOPAPERS</strong> is a rolling
          paper manufacturer for those who value thoughtful design, quiet
          craftsmanship, and the freedom to build something uniquely their own.
          We blend precision manufacturing with environmentally conscious
          practices to offer brands a refined, flexible foundation for growth.
        </p>
      </div>
    </div>
  );
};

export default HeroCard;
