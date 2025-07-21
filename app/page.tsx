import React from "react";
import Image from "next/image";
import Link from "next/link";
import SampleBoxOffer from "./components/SampleBoxOffer";
import { Metadata } from "next";
import BackgroundCarousel from "./components/BackgroundCarousel";
import BrandwithUs from "./components/BrandWithUs";
import { Factory, Lightbulb, TrendingUp } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBoxOpen } from "@fortawesome/free-solid-svg-icons";
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
  const sampleItems = [
    "King Size Slim",
    "King Size Slim + Filters",
    "1 ¼",
    "1 ¼ + Filters",
    "Block King Size",
    "Block 1 ¼",
    "Pre-rolled cones",
  ];
  return (
    <div className="flex flex-col items-center justify-center min-h-screen  text-gray-200">
      {/* Hero Section */}
      <section className="relative w-full flex items-center justify-center text-center overflow-hidden shadow-xl">
        <BackgroundCarousel>
          <section className="text-center mb-16 p-8">
            <h2 className="text-5xl md:text-7xl font-bold text-[#CCFF00] uppercase mb-6">
              Roll Your Own
            </h2>
            <p className="text-3xl md:text-3xl text-white font-extrabold w-full mb-4">
              Your Vibe. Your Logo. Your Brand.
            </p>
          </section>
        </BackgroundCarousel>
      </section>

      {/* Main Content Sections */}
      <div className=" py-4 md:py-8 ">
        {/* Build your own Section */}
        <div className="min-h-screen bg-white text-white font-sans flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <section className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24 mb-20">
            {/* Left Content Area */}
            <div className="flex-1 text-center lg:text-left">
              <h3 className="text-4xl sm:text-5xl text-[#146EBE] lg:text-6xl text-center font-extrabold leading-tight mb-6 rounded-lg">
                Build Your Brand
              </h3>
              <div className="grid grid-cols-2 justify-center gap-6 mb-12 text-gray-100">
                <div className="flex flex-col bg-[#63E6BE] items-center p-4  rounded-xl shadow-md w-full h-50">
                  <Lightbulb size={40} className="text-blue-400 mb-3" />
                  <span className="font-bold text-black">
                    1. Choose your Products
                  </span>
                  <p className="text-sm mt-1 text-center text-[#183153] font-semibold">
                    Rolling papers, cones, tips, or full sets — pick what fits
                    your brand best.{" "}
                  </p>
                </div>
                <div className="flex flex-col bg-[#74C0FC] items-center p-4  rounded-xl border border-gray-700 shadow-md w-full h-50">
                  <Factory size={40} className="text-green-400 mb-3" />
                  <span className="font-bold text-[#183153]">
                    2. Share Your Vibe
                  </span>
                  <p className="text-sm mt-1 text-center  font-semibold">
                    <span className="text-yellow-700">
                      Send us your design — or
                    </span>
                    <br></br>
                    <b className="uppercase text-black">
                      Our team designs it all.
                    </b>
                  </p>
                </div>
                <div className="flex flex-col bg-[#FFD43B] items-center p-4  rounded-xl border border-gray-700 shadow-md w-full h-50">
                  <TrendingUp size={40} className="text-purple-400 mb-3" />
                  <span className="font-bold text-[#183153]">
                    3. We Custom-Make It
                  </span>
                  <p className="text-sm mt-1 text-center text-yellow-700 font-semibold">
                    Premium materials. Flawless finish. 100% tailored to your
                    brand.
                  </p>
                </div>
                <div className="flex flex-col bg-[#E599F7] items-center p-4  rounded-xl border border-gray-700 shadow-md w-full h-50">
                  <TrendingUp size={40} className="text-purple-400 mb-3" />
                  <span className="font-bold text-black">4. We Ship it !</span>
                  <p className="text-sm mt-1 text-center text-yellow-700 font-semibold">
                    No middlemen, No hidden costs, No hassle.
                  </p>
                </div>
              </div>
              <button className="mt-6 px-6 py-3 border-1 border-b-4 border-b-[#146EBE] text-[#146EBE] rounded-lg shadow-md text-lg font-bold hover:text-xl transition-colors duration-200 flex mx-auto">
                <Link
                  href="/products/rolling-paper"
                  className="flex items-center justify-center"
                >
                  <FontAwesomeIcon icon={faBoxOpen} className="mr-2" />
                  Explore our Catalogue
                </Link>
              </button>
            </div>

            {/* Right Video Placeholder */}
            <div className="flex-1 w-full lg:w-auto relative rounded-2xl shadow-2xl aspect-video max-w-full lg:max-w-2xl">
              <Image
                src="/ryo/product-collage.png"
                alt="Hero Video Placeholder"
                width={200}
                height={200}
                layout="responsive"
                priority
                className="rounded-2xl"
              />
            </div>
          </section>

          {/* Logos Section */}
          {/* Placeholder for company logos */}
          <ul className="flex flex-row flex-wrap justify-center items-center gap-x-8 gap-y-4">
            {sampleItems.map((item, index) => (
              <Link
                key={index}
                href="/products/rolling-paper/king-size-slim-plus-filters"
              >
                <li
                  key={index}
                  // Ensure it's a perfect square and content is centered
                  className="flex flex-col items-center justify-center text-center /* Centering content */
                 bg-gradient-to-r from-yellow-300 to-lime-400 rounded-full /* Make it circular */
                 shadow-sm hover:shadow-lg /* Visuals */
                 text-gray-800 font-bold text-lg /* Text styling */
                 w-24 h-24 md:w-30 md:h-30
                 p-6 /* Increased padding to give content more space */
                 overflow-hidden 
                 transition-all duration-200 transform hover:scale-150"
                  style={{ flexShrink: 0 }} /* Prevent shrinking */
                >
                  {/* SVG Icon */}

                  {/* Text content */}
                  <span className="leading-tight">{item}</span>
                </li>
              </Link>
            ))}
          </ul>
        </div>
        <SampleBoxOffer />
        {/* BrandWithUs Section */}
        <section className="text-center mb-16 bg-white p-8">
          <h3 className="text-3xl md:text-5xl font-extrabold bg-[#CCFF00] text-black mb-6 text-center flex justify-center items-center p-4 rounded-lg">
            Why Brands roll with us?
          </h3>
          {/* <p className="text-lg md:text-xl text-gray-700 font-extrabold w-full mx-auto mb-4">
            Our collection is expertly crafted using the finest materials —
            offering variety, quality, and a smooth rolling experience.
          </p> */}
          <BrandwithUs />
        </section>

        {/* Custom Printing Section */}
        {/* <section className=" p-8  mb-16 bg-white ">
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
            <div className="w-full md:w-1/2 text-center md:flex md:flex-col md:gap-y-20">
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
                className="inline-flex justify-center w-full items-center px-6 py-3 bg-amber-600 text-white rounded-lg shadow-md hover:bg-amber-700 transition-colors duration-200 text-center md:w-3/4 mx-auto"
              >
                <Printer size={20} className="mr-2" />
                Explore Custom Solutions
              </Link>
            </div>
          </div>
        </section> */}

        {/* Contract Manufacturing Section */}
        <section className="p-8 shadow-xl border border-amber-700 bg-white rounded-xl">
          <div className="flex flex-col md:flex-row items-center md:justify-center mx-auto gap-8">
            {/* Image Div - This will be the first item, so with flex-row-reverse, it goes to the right */}
            <div className="w-full md:w-1/2 flex justify-center md:justify-end mb-6 md:mb-0">
              <Image
                src="/ryo/partner-with-us.png"
                alt="Contract Manufacturing Services"
                width={300}
                height={300}
                className="rounded-xl shadow-lg border border-gray-700"
              />
            </div>

            {/* Text Content Div - This will be the second item, so with flex-row-reverse, it goes to the left */}
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-amber-300 mb-4">
                For large-scale orders, please contact us directly.
              </h2>
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-amber-600 text-white rounded-lg shadow-md hover:bg-amber-700 transition-colors duration-200"
              >
                {/* Assuming Factory icon is available or simulated */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2"
                >
                  <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
                  <path d="M17 18h1" />
                  <path d="M12 18h1" />
                  <path d="M7 18h1" />
                </svg>{" "}
                Connect with our Team
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
