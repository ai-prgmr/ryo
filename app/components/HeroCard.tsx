// components/HeroCard.tsx

import React from "react";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});
const HeroCard: React.FC = () => {
  return (
    <div className="text-gray-100 py-8 md:py-8 mb-8 mx-auto overflow-hidden relative">
      <div className="relative z-10 text-center">
        <h1
          className={`${montserrat.className} ${montserrat.variable} text-3xl text-gray-500 leading-tight mb-4`}
        >
          Where your story <br />
          <span className="text-6xl uppercase font-extrabold text-black">
            meets our <span className="text-[#CCFF00]">paper</span>
          </span>
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
