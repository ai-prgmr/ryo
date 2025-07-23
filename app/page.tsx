import React from "react";
import Link from "next/link";
import SampleBoxOffer from "./components/SampleBoxOffer";
import { Metadata } from "next";
import BackgroundCarousel from "./components/BackgroundCarousel";
import BrandwithUs from "./components/BrandWithUs";
import BuildyourBrand from "./components/BuildYourBrand";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBoxOpen } from "@fortawesome/free-solid-svg-icons";
import TestimonialCarousel from "./components/TestimonialCarousel";
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
  const images = [
    "/ryo/Carousel-1.png",
    "/ryo/Carousel-3.png",
    "/ryo/Carousel-9.png",
    "/ryo/vecteezy.jpg",
    "/ryo/Vandana-kaki.png",
  ];
  const customImages = [
    "/ryo/custom-papers.png",
    "/ryo/your_vibe.png",
    "/ryo/custom.png",
    "/ryo/ship.png",
    "/ryo/Vandana-kaki.png",
  ];
  return (
    <div className="flex flex-col items-center justify-center min-h-screen  text-gray-200">
      {/* Hero Section */}
      <section className="relative w-full flex items-center justify-center text-center overflow-hidden shadow-xl">
        <BackgroundCarousel
          images={images}
          width="w-[100vw] h-[500px]"
          inset="true"
        >
          <section className="text-center mb-16 p-8">
            <h2 className="text-5xl md:text-7xl font-bold text-[#CCFF00] uppercase mb-6">
              Roll Your Own
            </h2>
            <p className="text-3xl md:text-3xl text-white font-extrabold w-full mb-4">
              Your Vibe. Your Logo. Your Brand.
            </p>
            <p className="text-3xl  md:text-3xl text-white font-extrabold w-full mt-4">
              <span className="text-[#CCFF00]">!! </span>Low MOQ at better price
              <span className="text-[#CCFF00]"> !! </span>
            </p>
          </section>
        </BackgroundCarousel>
      </section>

      {/* Main Content Sections */}
      <div className=" py-4 md:py-8 ">
        {/* Build your own Section */}
        <div className=" bg-white text-white flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8 gap-y-4">
          {/* Hero Section */}

          <section className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24">
            {/* Left Content Area */}

            <div className="flex-1 text-center lg:text-left">
              <h3 className="text-4xl sm:text-5xl text-[#146EBE] lg:text-6xl text-center font-extrabold leading-tight mb-6 rounded-lg">
                Build Your Brand
              </h3>
              <BuildyourBrand />
              <button className="mt-8 px-6 py-3 border-1 border-b-4 border-b-[#146EBE] text-[#146EBE] rounded-lg shadow-md text-lg font-bold hover:text-xl transition-colors duration-200 flex mx-auto">
                <Link
                  href="/custom-printing"
                  className="flex items-center justify-center"
                >
                  <FontAwesomeIcon icon={faBoxOpen} className="mr-2" />
                  Start Building
                </Link>
              </button>
            </div>

            {/* Right Image Placeholder */}
            <div className="flex-1 w-full lg:w-auto relative rounded-2xl shadow-2xl max-w-full lg:max-w-2xl">
              <BackgroundCarousel
                images={customImages}
                width="w-full h-200"
                inset="false"
              />
            </div>
          </section>
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

        {/* Testimonial Carousel Section */}
        <section className=" bg-white">
          <div className="container mx-auto">
            <TestimonialCarousel />
          </div>
        </section>
      </div>
    </div>
  );
}
