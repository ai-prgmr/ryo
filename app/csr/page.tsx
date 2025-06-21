"use client";
import Image from "next/image";
import { Sprout, Home, Heart, HandHeart } from "lucide-react";

const CSR = () => {
  return (
    <div className=" text-gray-800 font-sans py-16 sm:py-24">
      <div className="bg-white container mx-auto px-6 py-4 lg:px-8  rounded-2xl shadow-lg">
        {/* Main Heading & Introduction */}
        <div className="text-center mb-16 p-4">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 mb-4">
            Our Social Responsibility
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            At RYOPAPERS, we believe that true growth extends beyond business,
            encompassing our commitment to the community and the environment.
            Our social responsibility initiatives reflect our core values of
            care, sustainability, and giving back.
          </p>
        </div>

        <div className="space-y-16">
          {/* Initiative 1: Maintaining a Farmland */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 bg-gray-50 p-6 rounded-xl shadow-sm">
            <div className="flex-shrink-0 w-full md:w-1/3">
              {/* Replace with your Popsy.co image for farmland */}
              <Image
                src="/ryo/CSR-1.jpeg"
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
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                Sustainable Farmland Initiatives
              </h2>
              <p className="text-base text-gray-700 leading-relaxed">
                We are proud to maintain a dedicated farmland where we implement
                sustainable agricultural practices. This initiative not only
                supports local biodiversity but also promotes ecological
                balance, ensuring a positive impact on the environment for
                generations to come. It&apos;s our way of nurturing the earth
                that sustains us.
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
                className="w-full h-auto rounded-lg object-cover"
              />
            </div>
            <div className="flex-grow text-center md:text-right">
              <div className="inline-block bg-purple-100 p-3 rounded-full mb-4">
                <Home size={24} className="text-purple-700" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                Supporting Our Elders
              </h2>
              <p className="text-base text-gray-700 leading-relaxed">
                We regularly contribute to local old age homes, providing
                financial aid and essential resources to ensure a comfortable
                and dignified life for the elderly. Our donations help improve
                living conditions, facilitate recreational activities, and
                support access to vital care, recognizing the invaluable wisdom
                and contributions of our senior community members.
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
                className="w-full h-auto rounded-lg object-cover"
              />
            </div>
            <div className="flex-grow text-center md:text-left">
              <div className="inline-block bg-orange-100 p-3 rounded-full mb-4">
                <HandHeart size={24} className="text-orange-700" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                Nurturing Future Generations
              </h2>
              <p className="text-base text-gray-700 leading-relaxed">
                RYOPAPERS is committed to empowering the next generation through
                consistent donations to orphanages. These contributions go
                towards providing education, nourishing meals, safe living
                environments, and opportunities for development, ensuring that
                every child has the chance to thrive and build a brighter
                future.
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
            Our dedication to these initiatives is an integral part of who we
            are. We believe in building a business that not only delivers
            exceptional products but also contributes meaningfully to a better
            world.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CSR;
