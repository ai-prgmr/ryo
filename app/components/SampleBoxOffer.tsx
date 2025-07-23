//import { GiftIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const SampleBoxOffer: React.FC = () => {
  // const sampleItems = [
  //   "King Size + Filters",
  //   "King Size Slim + Filters",
  //   "1 ¼ + Filters",
  //   "Block King Size",
  //   "Block 1 ¼",
  //   "Pre-rolled cones",
  // ];

  const whatsappNumber = "+919009111088"; // Replace with your actual WhatsApp number
  const whatsappMessage = encodeURIComponent(
    `Hello! I'm interested in ordering the Sample Box for $30 USD (includes shipping). Please provide details on how to proceed. Thank you!`
  );
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section
      id="sampleBox"
      className=" p-8 max-w-full mx-auto animate-fade-in bg-gradient-to-b from-[#bdc9c3] to-[#A1D8D2] rounded-2xl shadow-lg"
    >
      <div className="text-center mb-4">
        {/* <GiftIcon
          size={64}
          className="text-purple-800 mx-auto mb-6 drop-shadow-md"
        /> */}
        {/* <Image
          src="/ryo/images/gift_icon.png"
          alt="gift icon"
          width={100}
          height={100}
          className="mb-3 rounded-lg justify-center mx-auto"
        /> */}
        <h2 className="text-4xl md:text-6xl font-extrabold text-[#146EBE] leading-tight">
          Discover Our Sample Pack
        </h2>
      </div>

      <div className=" px-6 md:px-8 rounded-2xl mb-8">
        <h3 className="md:text-5xl text-3xl font-extrabold text-[#146EBE] text-center italic">
          Just $30 USD
          <Image
            src="/ryo/images/free-shipping.png"
            alt="free shipping icon"
            width={200}
            height={200}
            className=" rounded-lg justify-center mx-auto"
          />
        </h3>
        <p className="text-white text-2xl font-bold text-center mb-12">
          See What&apos;s Included
        </p>
        <Image
          src="/ryo/Sample-Box-removebg.png"
          alt="Sample Box Contents"
          width={500}
          height={300}
          className="justify-center mx-auto"
        />
      </div>

      <div className="text-center">
        <button className="mt-6 px-6 py-1 border-1 bg-amber-500 border-b-4 border-b-[#146EBE] text-white rounded-lg shadow-md font-bold transition-colors duration-200 flex mx-auto">
          <Link
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-4 py-4 text-2xl font-bold  transition-all duration-300 transform hover:scale-105"
          >
            Order Today
          </Link>
        </button>
      </div>
    </section>
    // <div className="relative max-w-3xl mx-auto bg-linear-to-r from-cyan-500 to-blue-500  rounded-lg shadow-xl overflow-hidden">
    //   <Image
    //     src="/ryo/Sample-Box.png"
    //     alt="Sample Box Offer - 6 Varieties for $30 USD with Free Shipping"
    //     className="w-full h-auto object-cover"
    //     width={500}
    //     height={300}
    //   />

    //   <div className="p-6 text-center">
    //     <h3 className="text-2xl font-bold text-gray-800 mb-4">
    //       Get Your Sample Box Today!
    //     </h3>
    //     <p className="text-gray-600 mb-6">
    //       Experience 6 of our best product varieties for just $30 USD, with free
    //       shipping directly to your door.
    //     </p>

    //     <a
    //       href="/order-sample-box"
    //       className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-full
    //          transition-all duration-300 transform hover:scale-105 shadow-lg
    //          focus:outline-none focus:ring-4 focus:ring-amber-300 focus:ring-opacity-75"
    //     >
    //       Order Today
    //     </a>
    //   </div>
    // </div>
  );
};

export default SampleBoxOffer;
