import { Leaf, Wind, Users } from "lucide-react";
import Image from "next/image";
import HeroCard from "../components/HeroCard";
const AboutUs = () => {
  return (
    <div className="bg-white font-sans">
      <div className="container mx-auto px-12 lg:px-8">
        {/* Main Heading & Introduction */}
        <HeroCard />
        <div className="gap-y-7">
          {/* Section: Our Philosophy */}
          <div className="flex flex-col md:flex-row items-start gap-8">
            <div className="flex-shrink-0">
              <div className="bg-gray-100 p-4">
                {/* <Dna size={28} className="text-gray-700" /> */}
                <Image
                  src="/ryo/6-socrates.jpeg"
                  alt="Rolling Paper Co. Logo"
                  width={300}
                  height={300}
                  className="" // Optional: Add rounded corners to the logo
                />
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                Our Philosophy
              </h2>
              <p className="text-base text-gray-600 leading-relaxed">
                Rooted in a deep understanding of the RYO (Roll Your Own)
                culture, our work is guided by deliberate intention. We believe
                the process of creation is as important as the final product.
                It&apos;s not just about what is made, but how it is made—and at
                RYOPAPERS, the process is as considered as the paper itself.
              </p>
            </div>
          </div>

          {/* Section: Our Facility */}
          <div className="flex flex-col md:flex-row-reverse items-start gap-8">
            <div className="flex-shrink-0">
              <div className="bg-gray-100 p-4 rounded-full">
                <Wind
                  size={300}
                  className="text-gray-700 bg-white rounded-full p-6"
                />
                {/* <Image
                  src="/presentation.svg"
                  alt="Rolling Paper Co. Logo"
                  width={100}
                  height={100}
                  className="transform scale-125" // Optional: Add rounded corners to the logo
                /> */}
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                A Space for Harmony
              </h2>
              <p className="text-base text-gray-600 leading-relaxed">
                Our facility itself is a reflection of our values—open,
                naturally ventilated, and surrounded by green space to promote
                harmony between production and the environment. Every detail,
                from layout to logistics, has been considered with intention,
                enabling smooth, scalable, and clean operations.
              </p>
            </div>
          </div>

          {/* Section: Crafted For Your Brand */}
          <div className="flex flex-col md:flex-row items-start gap-8">
            <div className="flex-shrink-0">
              <div className="bg-gray-100 p-4 rounded-full">
                {/* <PencilRuler size={28} className="text-gray-700" /> */}
                <Image
                  src="/ryo/man-riding-a-rocket.svg"
                  alt="Rolling Paper Co. Logo"
                  width={300}
                  height={300}
                  className="transform scale-125" // Optional: Add rounded corners to the logo
                />
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                Crafted for Your Brand
              </h2>
              <p className="text-base text-gray-600 leading-relaxed">
                At our core is the ability to craft custom-made and white-label
                rolling paper products that meet the evolving needs of today’s
                consumers. Whether you&apos;re building a boutique lifestyle
                brand or expanding an established line, we offer tailored
                solutions—papers, filter tips, booklets, and packaging—all
                designed to reflect your identity with subtle elegance and
                technical precision.
              </p>
            </div>
          </div>

          {/* Section: Commitment to Sustainability */}
          <div className="flex flex-col md:flex-row-reverse items-start gap-8">
            <div className="flex-shrink-0">
              <div className="bg-gray-100 p-4 rounded-full">
                <Leaf size={300} className="text-green-700" />
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                Commitment to Sustainability
              </h2>
              <p className="text-base text-gray-600 leading-relaxed">
                Materials are responsibly sourced, packaging is biodegradable,
                and inks are vegetable-based—ensuring a low-impact footprint
                without compromising on quality or aesthetics. Each product
                undergoes careful attention to ensure it burns cleanly, feels
                premium to the touch, and delivers a consistent, satisfying user
                experience.
              </p>
            </div>
          </div>
        </div>

        {/* Concluding Section */}
        <div className="text-center mt-20 pt-10 border-t border-gray-200">
          <div className="inline-block bg-gray-100 p-4 rounded-full mb-4">
            <Users size={32} className="text-gray-700" />
          </div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-3">
            Built for Creators
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            RYOPAPERS was built for creators, curators, and connoisseurs—those
            who see rolling papers not just as accessories, but as extensions of
            their brand story. Discreet in presence, distinct in character, and
            always designed with purpose.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
