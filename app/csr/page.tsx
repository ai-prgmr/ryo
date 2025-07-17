"use client";
import Image from "next/image";
import { Sprout, Home, Heart, HandHeart } from "lucide-react";

const CSR = () => {
  return (
    <div className=" text-gray-800 bg-white font-sans py-16 sm:py-24">
      <div className="bg-white container mx-auto px-6 py-4 lg:px-8  rounded-2xl shadow-lg">
        {/* Main Heading & Introduction */}
        <div className="text-center mb-20 p-4">
          <h1 className="text-3xl md:text-5xl font-bold text-yellow-500  tracking-tight mb-12">
            Our Commitment to Social Responsibility
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed font-bold">
            At RYOPAPERS, we recognize that true success reaches beyond profits.
            That’s why we invest in our community and protect the environment
            through initiatives grounded in care, sustainability, and giving
            back.
          </p>
        </div>

        <div className="space-y-16">
          {/* Initiative 1: Maintaining a Farmland */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 bg-gray-50 p-6 rounded-xl shadow-sm">
            <div className="flex-shrink-0 w-full md:w-1/3">
              {/* Replace with your Popsy.co image for farmland */}
              <Image
                src="/CSR-1.jpeg"
                width={300}
                height={300}
                alt="Illustration of a thriving farmland"
                className="w-full h-auto rounded-lg object-cover"
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
                sustainable agricultural practices to support local biodiversity
                and foster ecological balance. Through this initiative, we aim
                to leave a lasting, positive impact on the environment—honoring
                and nurturing the land that sustains us.
              </p>
            </div>
          </div>

          {/* Initiative 2: Donation to Old Age Homes */}
          <div className="flex flex-col md:flex-row-reverse items-center md:items-start gap-8 bg-gray-50 p-6 rounded-xl shadow-sm">
            <div className="flex-shrink-0 w-full md:w-1/3">
              <Image
                src="/CSR-2.jpeg"
                width={300}
                height={300}
                alt="Illustration of elderly people being cared for"
                className="w-full h-auto rounded-lg object-cover"
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
                We are committed to caring for our senior community by regularly
                supporting local old age homes with financial assistance and
                essential resources. Our contributions help enhance living
                conditions, provide access to quality care, and promote
                meaningful recreational activities—honoring the wisdom, dignity,
                and lifelong contributions of our elders.
              </p>
            </div>
          </div>

          {/* Initiative 3: Donations to Orphanages */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 bg-gray-50 p-6 rounded-xl shadow-sm">
            <div className="flex-shrink-0 w-full md:w-1/3">
              {/* Replace with your Popsy.co image for orphanage/children */}
              <Image
                src="/CSR-3.jpeg"
                width={300}
                height={300}
                alt="Illustration of children in a supportive environment"
                className="w-full h-auto rounded-lg object-cover"
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
                opportunity to thrive. Through ongoing support to orphanages, we
                help provide access to quality education, nutritious meals,
                secure living conditions, and meaningful growth opportunities.
                Our commitment is rooted in the belief that investing in
                children today lays the foundation for a brighter, more
                equitable tomorrow.
              </p>
            </div>
          </div>
        </div>

        {/* Concluding Section */}
        <div className="text-center mt-20 pt-10 border-t border-gray-200">
          <div className="inline-block bg-blue-100 p-4 rounded-full mb-4">
            <Heart size={32} className="text-blue-700" />
          </div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-3">
            A Commitment Beyond Products
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our dedication to these initiatives is woven into the very fabric of
            who we are. At RYOPAPERS, we strive to build a business that not
            only offers exceptional products but also makes a lasting, positive
            impact on the world around us.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CSR;
