import Link from "next/link";
import { Factory, Lightbulb, TrendingUp } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import CustomDesign from "../components/CustomDesign";

export const metadata: Metadata = {
  title: "Custom Printing & Contract Manufacturing | RYO Papers",
  description:
    "Explore our custom printing services for rolling papers and contract manufacturing solutions tailored for the tobacco industry.",
  keywords: [
    "King Size Slim",
    "1 1/4",
    "Rolling Papers Booklets",
    "Crease-free papers",
    "Tips/Filters",
  ],
  alternates: {
    canonical: "https://ryopapers.com/custom-printing",
  },
  openGraph: {
    title: "Custom Printing & Contract Manufacturing | RYO Papers",
    description: "Explore our custom printing services for rolling papers and contract manufacturing solutions tailored for the tobacco industry.",
    url: "https://ryopapers.com/custom-printing",
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Printing & Contract Manufacturing | RYO Papers",
    description: "Explore our custom printing services for rolling papers and contract manufacturing solutions tailored for the tobacco industry.",
  },
};

function CustomPrintingPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-4 bg-white">
      <div className="p-1 text-center">
        <div className="relative py-20 px-4 overflow-hidden min-h-[400px]">
          {/* Background Image */}
          <Image
            src="/customize.jpeg" // <-- Replace with your actual image path
            alt="Custom Rolling Papers Printing Services"
            layout="fill"
            objectFit="cover"
            sizes="100vw"
            className="transition-opacity duration-1000 ease-in-out z-[0] "
            priority={true}
          />

          {/* Semi-transparent Overlay (Highly Recommended for Text Readability) */}
          <div className="absolute inset-0 bg-black/80 opacity-90 z-[1]"></div>

          {/* Content Wrapper with higher z-index to appear on top */}
          <div className="relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl uppercase font-extrabold text-[#CCFF00] mb-6 ">
              Launch Your Own Rolling Paper Brand
            </h1>
            <p className="text-xl text-gray-200 max-w-5xl mx-auto mb-10 leading-relaxed font-extrabold">
              From a single idea to shelf-ready product, we manufacture and print premium custom rolling papers that carry your name, your design, and your story. Low minimums. Precision printing. Worldwide shipping.
            </p>
          </div>
        </div>

        <div className="py-2 text-center m-5">
          <h2 className="text-3xl mb-10 text-black text-center capitalize">
            Our Process <br />
            <span className="text-6xl text-black uppercase font-extrabold">
              Simple.
            </span>{" "}
            <span className="text-6xl text-[#A2D22E] uppercase font-extrabold">
              BRANDED.
            </span>{" "}
            <span className="text-6xl text-[#A2D22E] uppercase font-extrabold">
              YOURS.
            </span>
          </h2>
          <div className="flex flex-wrap justify-center gap-6 mb-12 text-gray-100">
            <div className="flex flex-col items-center p-4  rounded-xl w-full sm:w-1/2 md:w-1/3">
              <Lightbulb size={40} className=" text-black mb-3" />
              <span className="text-2xl font-bold text-[#A2D22E]">
                Concept & Design
              </span>
              <p className="text-md mt-1 text-center text-black">
                Share your artwork or your idea. We&apos;ll help you refine it into a print-ready
              </p>
            </div>
            <div className="flex flex-col items-center p-4  rounded-xl w-full sm:w-1/2 md:w-1/4">
              <Factory size={40} className="text-black mb-3" />
              <span className="text-2xl font-bold text-[#A2D22E]">
                Production
              </span>
              <p className="text-md mt-1 text-center text-black">
                Your design is manufactured on premium-grade paper using calibrated print lines built for sharp, consistent results.
              </p>
            </div>
            <div className="flex flex-col items-center p-4  rounded-xl w-full sm:w-1/2 md:w-1/4">
              <TrendingUp size={40} className="text-black mb-3" />
              <span className="text-2xl font-bold text-[#A2D22E]">
                Launch & Grow
              </span>
              <p className="text-md mt-1 text-center text-black ">
                Your finished booklets ship straight to you, ready for the market.
              </p>
            </div>
          </div>
          <CustomDesign />

          <p className="text-xl text-gray-800 max-w-3xl mx-auto mb-8">
            Ready to make your mark? Contact us today to discuss your custom
            rolling paper project and receive a personalized quote.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center  px-16 py-4 bg-black text-white text-xl font-semibold shadow-xl"
          >
            Get a Custom Printing Quote
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CustomPrintingPage;
