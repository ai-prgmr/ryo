import { GiftIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
const SampleBoxOffer: React.FC = () => {
  const sampleItems = [
    "King Size + Filters",
    "King Size Slim + Filters",
    "1 ¼ + Filters",
    "Block King Size",
    "Block 1 ¼",
    "Pre-rolled cones",
  ];

  const whatsappNumber = "+919009111088"; // Replace with your actual WhatsApp number
  const whatsappMessage = encodeURIComponent(
    `Hello! I'm interested in ordering the Sample Box for $30 USD (includes shipping). Please provide details on how to proceed. Thank you!`
  );
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section className=" p-4 max-w-4xl mx-auto animate-fade-in  bg-[#e1ffac]">
      <div className="text-center mb-10">
        <GiftIcon
          size={64}
          className="text-amber-400 mx-auto mb-6 drop-shadow-md"
        />
        <h2 className="text-4xl md:text-6xl font-extrabold text-black leading-tight mb-6">
          Discover Our Sample Box
        </h2>
        <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto font-bold">
          Find your perfect roll with a curated selection of our premium
          papers—delivered straight to your door.
        </p>
      </div>

      <div className=" p-6 md:p-8 rounded-2xl mb-8">
        <h3 className="text-3xl font-extrabold text-red-400 mb-4 text-center italic">
          See What&apos;s Included in Your Sample Box
        </h3>
        <p className="text-black text-3xl font-bold text-center mb-12">
          Just $30 USD—shipping&apos;s on us! Secure your sample box today!
          {/* <span className="text-gray-400 text-lg block sm:inline-block mt-2 sm:mt-0">
            (Includes Shipping!)
          </span> */}
        </p>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 place-items-center">
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
                 p-8 /* Increased padding to give content more space */
                 overflow-hidden"
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

      <div className="text-center">
        <p className="text-lg text-gray-700 mb-6 font-medium">
          Enhance your rolling experience—message us on WhatsApp to order your
          sample box today.
        </p>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-10 py-4  text-white text-xl font-bold  transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-500 focus:ring-opacity-75"
        >
          <Image
            src="/ryo/Digital_Glyph_Green.svg" // Ensure you have this icon in your public folder
            alt="WhatsApp Icon"
            width={64}
            height={64}
            className="text-white px-2"
          />
        </a>
      </div>
    </section>
  );
};

export default SampleBoxOffer;
