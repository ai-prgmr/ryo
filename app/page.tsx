import Image from "next/image";
import Link from "next/link";
import { Printer, Factory } from "lucide-react";
import SampleBoxOffer from "./components/SampleBoxOffer";
import BackgroundCarousel from "./components/BackgroundCarousel";
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen  text-gray-200 py-4">
      {/* Hero Section */}
      <section className="relative w-full flex items-center justify-center text-center overflow-hidden shadow-xl">
        <BackgroundCarousel />
      </section>

      {/* Main Content Sections */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        {/* Our Products Section */}
        <section className="text-center mb-16 bg-transparent p-8 rounded-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-600 mb-6">
            Our Premium Rolling Papers
          </h2>
          <p className="text-lg text-gray-800 max-w-3xl mx-auto mb-4">
            From classic King Size Slim to unique Rolls and Blocks, we offer a
            diverse selection crafted from the finest materials.
          </p>
        </section>

        {/* Custom Printing Section */}
        <section className=" p-8  mb-16 ">
          <div className="flex flex-col md:flex-row items-center md:space-x-8">
            <div className="w-full md:w-1/2 mb-6 md:mb-0">
              <Image
                src="/Custom.jpeg"
                alt="Custom Printing Services"
                width={800}
                height={500}
                className="rounded-xl shadow-lg border border-amber-700"
              />
            </div>
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">
                Launch Your Own Paper
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Turn your vision into reality with our bespoke custom printing
                services. Brand your own rolling papers, meticulously crafted to
                your specifications.
              </p>
              <Link
                href="/custom-printing"
                className="inline-flex items-center px-6 py-3 bg-amber-600 text-white rounded-lg shadow-md hover:bg-amber-700 transition-colors duration-200"
              >
                <Printer size={20} className="mr-2" /> Learn About Custom
                Printing
              </Link>
            </div>
          </div>
        </section>

        <SampleBoxOffer />

        {/* Contract Manufacturing Section */}
        <section className=" p-8 rounded-2xl shadow-xl border border-amber-700">
          <div className="flex flex-col md:flex-row-reverse items-center md:space-x-reverse md:space-x-8">
            <div className="w-full md:w-1/2 mb-6 md:mb-0">
              <Image
                src="/partner-with-us.png"
                alt="Contract Manufacturing Services"
                width={800}
                height={500}
                className="rounded-xl shadow-lg border border-gray-700"
              />
            </div>
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-amber-300 mb-4">
                Contract Manufacturing for Tobacco Industry
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Leverage our expertise and state-of-the-art facilities for
                seamless contract manufacturing solutions tailored for the
                tobacco industry.
              </p>
              <Link
                href="/contract-manufacturing"
                className="inline-flex items-center px-6 py-3 bg-amber-600 text-white rounded-lg shadow-md hover:bg-amber-700 transition-colors duration-200"
              >
                <Factory size={20} className="mr-2" /> Discover Our Capabilities
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
