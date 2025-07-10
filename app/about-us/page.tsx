import { Leaf, Wind, Users } from "lucide-react";
import Image from "next/image";
import HeroCard from "../components/HeroCard";
import { Sprout, Home, Heart, HandHeart } from "lucide-react";

const AboutUs = () => {
  return (
    <div className=" font-sans mt-2">
      <div className="container mx-auto px-12 lg:px-8">
        {/* Main Heading & Introduction */}
        <HeroCard />
        <div className="gap-y-7 bg-white p-4 shadow-lg mt-8">
          {/* Section: Our Philosophy */}
          <div className="flex flex-col md:flex-row items-start gap-8 ">
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
                  size={150}
                  className="text-gray-700 bg-white rounded-full"
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
                  width={150}
                  height={150}
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
                <Leaf size={150} className="text-green-700" />
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

        {/* CSR Section */}
        <div className=" text-gray-800 bg-black font-sans py-16 sm:py-24">
          <div className="bg-white container mx-auto px-6 py-4 lg:px-8  shadow-lg">
            {/* Main Heading & Introduction */}
            <div className="text-center mb-20 p-4">
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
            <div className="text-center mt-20 pt-10 border-t border-gray-200">
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

        {/* Concluding Section */}
        <div className="text-center mt-20 pt-10 border-t border-gray-200">
          <div className="inline-block bg-gray-100 p-4 rounded-full mb-4">
            <Users size={32} className="text-gray-700" />
          </div>
          <h3 className="text-2xl font-semibold text-gray-200 mb-3">
            Built for Creators
          </h3>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
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
