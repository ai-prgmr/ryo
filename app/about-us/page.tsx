"use client";
import Image from "next/image";
import HeroCard from "../components/HeroCard";
import { Sprout, Home, Heart, HandHeart } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBoxes,
  faHeadset,
  faStar,
  faLeaf,
} from "@fortawesome/free-solid-svg-icons";
library.add(faBoxes, faHeadset, faStar, faLeaf);

// Define data for the benefit cards
const benefitsData = [
  {
    icon: faBoxes,
    title: "Low Order Quantities",
    description:
      "Every brand starts somewhere – we support your growth journey.",
  },
  {
    icon: faHeadset,
    title: "Real Human Support",
    description:
      "Talk to people, not bots, for genuine guidance and assistance.",
  },
  {
    icon: faStar,
    title: "Premium Finish",
    description: "Beautiful, high-quality packaging with a professional touch.",
  },
  {
    icon: faLeaf,
    title: "Eco-Friendly Promise",
    description: "Committed to sustainability, true to your brand's vibe.",
  },
];

export default function AboutUs() {
  const textColor = "text-[#173153]";
  return (
    <div className=" font-sans mt-2">
      <div className="max-w-5xl mx-auto px-12 lg:px-8">
        {/* Main Heading & Introduction */}
        <div className="max-w-5xl mx-auto px-12 lg:px-8">
          {/* Main Heading & Introduction */}
          <HeroCard />
          <div className="flex justify-center items-center mb-8">
            <Image
              src="/ryo/branding-cutout.png"
              alt="RYO-branding"
              width={600}
              sizes="100vw"
              className="object-fit contain"
              height={400}
            />
          </div>

          <section className="">
            <div className="max-w-3xl mx-auto">
              <div className="mt-10">
                <h3 className="text-lg sm:text-xl md:text-2xl text-gray-900 mb-6 text-center">
                  Work With Us
                </h3>
                <p
                  className={`${textColor} dark:text-gray-900 text-lg md:text-xl leading-relaxed text-center mb-6 mx-auto`}
                >
                  Working with RYO Papers feels more like a collaboration than a
                  transaction.
                </p>

                <p
                  className={`${textColor} text-lg md:text-xl leading-relaxed mb-8 mx-auto text-center`}
                >
                  We know what it’s like to have an idea and not know where to
                  start. That’s why we’ve made the process simple, flexible, and
                  friendly. Whether you want 500 packs or 50,000 — we’ve got
                  you.
                </p>

                {/* New Grid for Benefits */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 text-center">
                  {benefitsData.map((benefit, index) => (
                    <span key={index}>
                      <FontAwesomeIcon
                        icon={benefit.icon}
                        className="text-7xl mb-3 text-gray-400"
                      />
                      <h4 className="text-5xl font-extrabold text-[#A2D230] mb-2 text-center">
                        {benefit.title}
                      </h4>
                      <p className="text-md text-gray-700 leading-snug text-center">
                        {benefit.description}
                      </p>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* CSR Section */}
        <div className=" text-gray-800 bg-white font-sans mt-10">
          <div className="bg-white container mx-auto px-6 py-4 lg:px-8">
            {/* Main Heading & Introduction */}
            <div className="text-center mb-10 p-4">
              <h1 className="text-3xl md:text-5xl font-bold text-[#A2D22E]  tracking-tight mb-12">
                Our Commitment to Social Responsibility
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed font-bold">
                At RYOPAPERS, we recognize that true success reaches beyond
                profits. That’s why we invest in our community and protect the
                environment through initiatives grounded in care,
                sustainability, and giving back.
              </p>
            </div>

            <div className="space-y-8">
              {/* Initiative 1: Maintaining a Farmland */}
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8 bg-gray-50 p-6 rounded-xl shadow-sm">
                <div className="flex-shrink-0 w-full md:w-1/3">
                  {/* Replace with your Popsy.co image for farmland */}
                  <Image
                    src="/ryo/CSR-1.jpeg"
                    width={300}
                    height={300}
                    alt="Illustration of a thriving farmland"
                    className=" rounded-lg object-cover"
                  />
                </div>
                <div className="flex-grow text-center md:text-left">
                  <div className="inline-block p-3 rounded-full mb-4">
                    <Sprout size={24} className="" />
                  </div>
                  <h2 className="text-xl md:text-3xl font-bold text-[#A2D22E] mb-5">
                    Sustainable Farmland Initiatives
                  </h2>
                  <p className="text-xl font-bold text-gray-700 leading-relaxed">
                    We take pride in our dedicated farmland, where we employ
                    sustainable agricultural practices to support local
                    biodiversity and foster ecological balance. Through this
                    initiative, we aim to leave a lasting, positive impact on
                    the environment—honoring and nurturing the land that
                    sustains us.
                  </p>
                </div>
              </div>

              {/* Initiative 2: Donation to Old Age Homes */}
              <div className="flex flex-col md:flex-row-reverse items-center md:items-start gap-8 bg-gray-50 p-6 rounded-xl shadow-sm">
                <div className="flex-shrink-0 w-full md:w-1/3">
                  <Image
                    src="/ryo/CSR-2.jpeg"
                    width={300}
                    height={300}
                    alt="Illustration of elderly people being cared for"
                    className="rounded-lg object-cover"
                  />
                </div>
                <div className="flex-grow text-center md:text-right">
                  <div className="inline-block p-3 rounded-full mb-4">
                    <Home size={24} className="" />
                  </div>
                  <h2 className="text-xl md:text-3xl font-bold text-[#A2D22E] mb-5">
                    Supporting Our Elders
                  </h2>
                  <p className="text-xl font-bold text-gray-700 leading-relaxed">
                    We are committed to caring for our senior community by
                    regularly supporting local old age homes with financial
                    assistance and essential resources. Our contributions help
                    enhance living conditions, provide access to quality care,
                    and promote meaningful recreational activities—honoring the
                    wisdom, dignity, and lifelong contributions of our elders.
                  </p>
                </div>
              </div>

              {/* Initiative 3: Donations to Orphanages */}
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8 bg-gray-50 p-6 rounded-xl shadow-sm">
                <div className="flex-shrink-0 w-full justify-center md:w-1/3">
                  {/* Replace with your Popsy.co image for orphanage/children */}
                  <Image
                    src="/ryo/CSR-3.jpeg"
                    width={300}
                    height={300}
                    alt="Illustration of children in a supportive environment"
                    className="rounded-lg object-cover"
                  />
                </div>
                <div className="flex-grow text-center md:text-left">
                  <div className="inline-block p-3 rounded-full mb-4">
                    <HandHeart size={24} className="" />
                  </div>
                  <h2 className="text-xl md:text-3xl font-bold text-[#A2D22E] mb-5">
                    Nurturing Future Generations
                  </h2>
                  <p className="text-xl font-bold text-gray-700 leading-relaxed">
                    At RYOPAPERS, we believe that every child deserves the
                    opportunity to thrive. Through ongoing support to
                    orphanages, we help provide access to quality education,
                    nutritious meals, secure living conditions, and meaningful
                    growth opportunities. Our commitment is rooted in the belief
                    that investing in children today lays the foundation for a
                    brighter, more equitable tomorrow.
                  </p>
                </div>
              </div>
            </div>

            {/* Concluding Section */}
            <div className="text-center mt-10">
              <div className="inline-block bg-blue-100 p-4 rounded-full mb-4">
                <Heart size={32} className="" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                A Commitment Beyond Products
              </h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our dedication to these initiatives is woven into the very
                fabric of who we are. At RYOPAPERS, we strive to build a
                business that not only offers exceptional products but also
                makes a lasting, positive impact on the world around us.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
