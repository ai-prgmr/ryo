import { GiftIcon } from "lucide-react";
import Image from "next/image";
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
    <section className=" shadow-2xl p-8 md:p-12 max-w-4xl mx-auto my-12 animate-fade-in bg-[#CCFF00]">
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
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-black text-lg md:text-lg list-none p-0 font-bold text-center">
          {sampleItems.map((item, index) => (
            <li
              key={index}
              className="flex items-center justify-center bg-transparent p-3 rounded-lg shadow-sm hover:shadow-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-check text-green-500 mr-3 flex-shrink-0"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span>{item}</span>
            </li>
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
          className="inline-flex items-center justify-center px-10 py-4  text-green-500 rounded-full text-xl font-bold shadow-xl transition-all duration-300 transform hover:scale-105 hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-500 focus:ring-opacity-75"
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
