import Image from "next/image";
import Link from "next/link";
import { Printer, Factory } from "lucide-react";
import SampleBoxOffer from "./components/SampleBoxOffer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Roll your Own - Custom Rolling Papers & Contract Manufacturing",
  description:
    "Explore our premium rolling papers, custom printing services, and contract manufacturing solutions for rolling your own papers",
  keywords: [
    "rolling papers",
    "custom printing",
    "contract manufacturing",
    "tobacco industry",
    "premium rolling papers",
    "bespoke printing",
  ],
};

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen  text-gray-200">
      {/* Hero Section */}
      <section className="relative w-full flex items-center justify-center text-center overflow-hidden shadow-xl">
        <Image
          src="/ryo/vecteezy.jpg"
          alt="Rolling Your Own Hero Image"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
      </section>

      {/* Main Content Sections */}
      <div className="container mx-auto px-4 py-12 md:py-16 ">
        {/* Our Products Section */}
        <section className="text-center mb-16 bg-white p-8">
          <h2 className="text-3xl md:text-5xl font-bold text-yellow-500 mb-6">
            Roll Your Own
          </h2>
          <p className="text-lg md:text-xl text-gray-700 font-bold w-full mx-auto mb-4">
            From timeless King Size Slims to distinctive Rolls and Blocks, our
            collection is expertly crafted using the finest materials — offering
            variety, quality, and a smooth rolling experience.
          </p>
        </section>

        {/* Custom Printing Section */}
        <section className=" p-8  mb-16 bg-white ">
          <div className="flex flex-col md:flex-row items-center md:space-x-8">
            <div className="w-full md:w-1/2 mb-6 md:mb-0">
              <Image
                src="/ryo/Custom.jpeg"
                alt="Custom Printing Services"
                width={800}
                height={500}
                className="rounded-xl shadow-lg border border-amber-700"
              />
            </div>
            <div className="w-full md:w-1/2 text-center md:text-left md:flex md:flex-col md:gap-y-20">
              <h2 className="text-3xl md:text-5xl font-bold text-yellow-500 mb-4">
                Create Your Signature Brand
              </h2>
              <p className="text-lg md:text-xl text-gray-700 font-bold mb-6 ">
                Realize your vision with bespoke, tailor-made rolling papers —
                meticulously designed to showcase your brand’s essence and
                deliver an unparalleled rolling experience.
              </p>
              <Link
                href="/custom-printing"
                className="inline-flex justify-center items-center px-6 py-3 bg-amber-600 text-white rounded-lg shadow-md hover:bg-amber-700 transition-colors duration-200 text-center w-1/2"
              >
                <Printer size={20} className="mr-2" />
                Explore Custom Solutions
              </Link>
            </div>
          </div>
        </section>

        <SampleBoxOffer />

        {/* Contract Manufacturing Section */}
        <section className=" p-8 shadow-xl border border-amber-700 bg-white">
          <div className="flex flex-col md:flex-row-reverse items-center md:space-x-reverse md:space-x-8">
            <div className="w-full md:w-1/2 mb-6 md:mb-0">
              <Image
                src="/ryo/partner-with-us.png"
                alt="Contract Manufacturing Services"
                width={800}
                height={500}
                className="rounded-xl shadow-lg border border-gray-700"
              />
            </div>
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-amber-300 mb-4">
                For large-scale orders, please contact us directly.
              </h2>
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-amber-600 text-white rounded-lg shadow-md hover:bg-amber-700 transition-colors duration-200"
              >
                <Factory size={20} className="mr-2" /> Connect with our Team
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
