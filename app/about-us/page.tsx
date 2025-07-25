"use client";
import Image from "next/image";
import HeroCard from "../components/HeroCard";
import { Sprout, Home, Heart, HandHeart } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
// Import specific Font Awesome icons for the benefits
import {
  faBoxes,
  faHeadset,
  faStar,
  faLeaf,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion"; // For animating the benefit cards
library.add(faBoxes, faHeadset, faStar, faLeaf);

const benefitColors = [
  "#63E6BE", // Light green/teal
  "#74C0FC", // Light blue
  "#FFD43B", // Yellow
  "#E599F7", // Light purple/pink
  "#FFFACD", // Pastel Yellow
  "#FFC0CB", // Light Pink
];

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
      <div className="container mx-auto px-12 lg:px-8">
        {/* Main Heading & Introduction */}
        <HeroCard />
        <section className=" bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="w-full mx-auto px-6 lg:px-8">
            <div className="p-8 sm:p-10 lg:p-12 border border-gray-100 dark:border-gray-700">
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 text-center">
                Work With Us
              </h3>
              <p
                className={`${textColor} dark:text-gray-300 text-lg md:text-xl leading-relaxed text-center mb-6 mx-auto`}
              >
                Working with RYO Papers feels more like a collaboration than a
                transaction.
              </p>

              <p
                className={`${textColor} dark:text-gray-300 text-lg md:text-xl leading-relaxed mb-8 mx-auto`}
              >
                We know what it’s like to have an idea and not know where to
                start. That’s why we’ve made the process simple, flexible, and
                friendly. Whether you want 500 packs or 50,000 — we’ve got you.
              </p>

              {/* New Grid for Benefits */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {benefitsData.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }} // Animation: start slightly below and transparent
                    whileInView={{ opacity: 1, y: 0 }} // Animate to full visibility
                    viewport={{ once: true, amount: 0.5 }} // Trigger once when 50% in view
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                      ease: "easeOut",
                    }} // Staggered animation
                    className="p-6 rounded-lg flex flex-col items-center text-center shadow-md transition-shadow hover:shadow-lg"
                    style={{
                      backgroundColor:
                        benefitColors[index % benefitColors.length],
                    }} // Dynamic background color
                  >
                    <FontAwesomeIcon
                      icon={benefit.icon}
                      className="text-4xl text-gray-800 mb-3"
                    />
                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      {benefit.title}
                    </h4>
                    <p className="text-md text-gray-700 leading-snug">
                      {benefit.description}
                    </p>
                  </motion.div>
                ))}
              </div>

              <p
                className={`${textColor} dark:text-gray-300 text-lg md:text-xl leading-relaxed text-center max-w-2xl mx-auto`}
              >
                We respect where you come from and where you’re going. If you’re
                ready to build something meaningful — let’s roll together.
              </p>
            </div>
          </div>
        </section>

        {/* CSR Section */}
        <div className=" text-gray-800 bg-white font-sans">
          <div className="bg-white container mx-auto px-6 py-4 lg:px-8  shadow-lg">
            {/* Main Heading & Introduction */}
            <div className="text-center mb-10 p-4">
              <h1 className="text-3xl md:text-5xl font-bold text-yellow-500  tracking-tight mb-12">
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
                  <div className="inline-block bg-green-100 p-3 rounded-full mb-4">
                    <Sprout size={24} className="text-green-700" />
                  </div>
                  <h2 className="text-xl md:text-3xl font-bold text-yellow-500 mb-5">
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
                  <div className="inline-block bg-purple-100 p-3 rounded-full mb-4">
                    <Home size={24} className="text-purple-700" />
                  </div>
                  <h2 className="text-xl md:text-3xl font-bold text-yellow-500 mb-5">
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
                <div className="flex-shrink-0 w-full md:w-1/3">
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
                  <div className="inline-block bg-orange-100 p-3 rounded-full mb-4">
                    <HandHeart size={24} className="text-orange-700" />
                  </div>
                  <h2 className="text-xl md:text-3xl font-bold text-yellow-500 mb-5">
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
                <Heart size={32} className="text-blue-700" />
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
