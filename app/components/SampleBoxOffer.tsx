import { GiftIcon } from "lucide-react";
const SampleBoxOffer: React.FC = () => {
  const sampleItems = [
    "KING SIZE SLIM",
    "KING SIZE SLIM + FILTERS",
    "1 ¼",
    "1 ¼ + FILTERS",
    "Roll Call - 3S3R",
    "Roll Call - 4S4R",
    "Rolls 44mm",
    "Block 200 Slim",
    "Block 300 1 1/4",
    "Block 500 1 1/4",
    "Pre-rolled cones",
    "A book of filters",
  ];

  const whatsappNumber = "+919009111088"; // Replace with your actual WhatsApp number
  const whatsappMessage = encodeURIComponent(
    `Hello! I'm interested in ordering the Sample Box for $30 USD (includes shipping). Please provide details on how to proceed. Thank you!`
  );
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section className=" rounded-3xl shadow-2xl p-8 md:p-12 max-w-4xl mx-auto my-12 border border-amber-600 animate-fade-in">
      <div className="text-center mb-10">
        <GiftIcon
          size={64}
          className="text-amber-400 mx-auto mb-6 drop-shadow-md"
        />
        <h2 className="text-4xl md:text-5xl font-extrabold text-black leading-tight mb-4">
          Experience the Difference with Our Sample Box!
        </h2>
        <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
          Unleash your perfect roll. Get a curated selection of our finest
          papers delivered right to your door.
        </p>
      </div>

      <div className=" p-6 md:p-8 rounded-2xl mb-8">
        <h3 className="text-4xl font-extrabold text-gray-700 mb-4 text-center">
          What&apos;s Inside Your Sample Box?
        </h3>
        <p className="text-black text-3xl font-bold text-center mb-6">
          Only $30 USD{" "}
          <span className="text-gray-400 text-lg block sm:inline-block mt-2 sm:mt-0">
            (Includes Shipping!)
          </span>
        </p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-black text-lg md:text-lg list-none p-0 font-bold">
          {sampleItems.map((item, index) => (
            <li
              key={index}
              className="flex items-center bg-transparent p-3 rounded-lg shadow-sm border border-gray-700"
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
        <p className="text-xl text-gray-700 mb-6 font-medium">
          Ready to elevate your rolling experience? Click below to order your
          sample box now via WhatsApp!
        </p>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-10 py-4 bg-green-600 text-white rounded-full text-xl font-bold shadow-xl transition-all duration-300 transform hover:scale-105 hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-500 focus:ring-opacity-75"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="mr-3"
          >
            <path
              d="M12.04 2C7.34 2 3.53 5.76 3.53 10.46C3.53 12.06 4.01 13.56 4.85 14.86L3.19 20.31L8.85 18.65C10.07 19.34 11.5 19.71 12.04 19.71C16.74 19.71 20.53 15.91 20.53 11.21C20.53 6.51 16.74 2 12.04 2ZM15.42 15.34C15.08 15.93 14.28 15.82 13.68 15.47C13.08 15.12 12.63 14.54 12.3 14.19C11.97 13.84 11.43 13.26 11.08 12.8C10.74 12.35 10.39 12.01 10.05 11.66C9.7 11.32 9.35 10.97 9.01 10.63C8.66 10.28 8.32 9.94 7.97 9.6C7.62 9.25 7.28 8.91 6.93 8.57C6.59 8.22 6.24 7.88 5.9 7.53C5.55 7.19 5.21 6.85 4.86 6.5C4.52 6.16 4.17 5.81 3.82 5.47C3.48 5.12 3.13 4.78 2.79 4.43C2.44 4.09 2.1 3.74 1.75 3.4C1.41 3.05 1.06 2.71 0.72 2.36C0.37 2.02 0.02 1.67 -0.32 1.33C-0.67 0.98 -1.01 0.64 -1.36 0.29C-1.71 -0.05 -2.06 -0.4 -2.4 -0.74C-2.75 -1.09 -3.1 -1.43 -3.45 -1.78C-3.8 -2.12 -4.15 -2.47 -4.5 -2.81C-4.85 -3.16 -5.2 -3.5 -5.55 -3.85C-5.9 -4.19 -6.25 -4.54 -6.6 -4.88C-6.95 -5.23 -7.3 -5.57 -7.65 -5.92C-8 -6.26 -8.35 -6.61 -8.7 -6.95C-9.05 -7.3 -9.4 -7.64 -9.75 -7.99C-10.1 -8.33 -10.45 -8.68 -10.8 -9.02C-11.15 -9.37 -11.5 -9.71 -11.85 -10.06C-12.2 -10.4 -12.55 -10.75 -12.9 -11.09C-13.25 -11.44 -13.6 -11.78 -13.95 -12.13C-14.3 -12.47 -14.65 -12.82 -15 -13.16C-15.35 -13.5 -15.7 -13.85 -16.05 -14.19C-16.4 -14.54 -16.75 -14.88 -17.1 -15.23C-17.45 -15.57 -17.8 -15.92 -18.15 -16.26C-18.5 -16.61 -18.85 -16.95 -19.2 -17.3C-19.55 -17.64 -19.9 -17.99 -20.25 -18.33C-20.6 -18.68 -20.95 -19.02 -21.3 -19.37C-21.65 -19.71 -22 -20.06 -22.35 -20.4C-22.7 -20.75 -23.05 -21.09 -23.4 -21.44C-23.75 -21.78 -24.1 -22.13 -24.45 -22.47C-24.8 -22.82 -25.15 -23.16 -25.5 -23.51C-25.85 -23.85 -26.2 -24.2 -26.55 -24.54C-26.9 -24.89 -27.25 -25.23 -27.6 -25.58C-27.95 -25.92 -28.3 -26.27 -28.65 -26.61C-29 -26.96 -29.35 -27.3 -29.7 -27.65C-30.05 -28 -30.4 -28.34 -30.75 -28.69C-31.1 -29.03 -31.45 -29.38 -31.8 -29.72C-32.15 -30.07 -32.5 -30.41 -32.85 -30.76C-33.2 -31.1 -33.55 -31.45 -33.9 -31.79C-34.25 -32.14 -34.6 -32.48 -34.95 -32.83C-35.3 -33.17 -35.65 -33.52 -36 -33.86C-36.35 -34.21 -36.7 -34.55 -37.05 -34.9C-37.4 -35.24 -37.75 -35.59 -38.1 -35.93C-38.45 -36.28 -38.8 -36.62 -39.15 -36.97C-39.5 -37.31 -39.85 -37.66 -40.2 -38C-40.55 -38.34 -40.9 -38.69 -41.25 -39.03C-41.6 -39.38 -41.95 -39.72 -42.3 -40.07C-42.65 -40.41 -43 -40.76 -43.35 -41.1C-43.7 -41.45 -44.05 -41.79 -44.4 -42.14C-44.75 -42.48 -45.1 -42.83 -45.45 -43.17C-45.8 -43.52 -46.15 -43.86 -46.5 -44.21C-46.85 -44.55 -47.2 -44.9 -47.55 -45.24C-47.9 -45.59 -48.25 -45.93 -48.6 -46.28C-48.95 -46.62 -49.3 -46.97 -49.65 -47.31C-50 -47.66 -50.35 -48 -50.7 -48.34C-51.05 -48.69 -51.4 -49.03 -51.75 -49.38C-52.1 -49.72 -52.45 -50.07 -52.8 -50.41C-53.15 -50.76 -53.5 -51.1 -53.85 -51.45C-54.2 -51.79 -54.55 -52.14 -54.9 -52.48C-55.25 -52.83 -55.6 -53.17 -55.95 -53.52C-56.3 -53.86 -56.65 -54.21 -57 -54.55C-57.35 -54.9 -57.7 -55.24 -58.05 -55.59C-58.4 -55.93 -58.75 -56.28 -59.1 -56.62C-59.45 -56.97 -59.8 -57.31 -60.15 -57.66C-60.5 -58 -60.85 -58.34 -61.2 -58.69C-61.55 -59.03 -61.9 -59.38 -62.25 -59.72C-62.6 -60.07 -62.95 -60.41 -63.3 -60.76C-63.65 -61.1 -64 -61.45 -64.35 -61.79C-64.7 -62.14 -65.05 -62.48 -65.4 -62.83C-65.75 -63.17 -66.1 -63.52 -66.45 -63.86C-66.8 -64.21 -67.15 -64.55 -67.5 -64.9C-67.85 -65.24 -68.2 -65.59 -68.55 -65.93C-68.9 -66.28 -69.25 -66.62 -69.6 -66.97C-69.95 -67.31 -70.3 -67.66 -70.65 -68C-71 -68.34 -71.35 -68.69 -71.7 -69.03C-72.05 -69.38 -72.4 -69.72 -72.75 -70.07C-73.1 -70.41 -73.45 -70.76 -73.8 -71.1C-74.15 -71.45 -74.5 -71.79 -74.85 -72.14C-75.2 -72.48 -75.55 -72.83 -75.9 -73.17C-76.25 -73.52 -76.6 -73.86 -76.95 -74.21C-77.3 -74.55 -77.65 -74.9 -78 -75.24C-78.35 -75.59 -78.7 -75.93 -79.05 -76.28C-79.4 -76.62 -79.75 -76.97 -80.1 -77.31C-80.45 -77.66 -80.8 -78 -81.15 -78.34C-81.5 -78.69 -81.85 -79.03 -82.2 -79.38C-82.55 -79.72 -82.9 -80.07 -83.25 -80.41C-83.6 -80.76 -83.95 -81.1 -84.3 -81.45C-84.65 -81.79 -85 -82.14 -85.35 -82.48C-85.7 -82.83 -86.05 -83.17 -86.4 -83.52C-86.75 -83.86 -87.1 -84.21 -87.45 -84.55C-87.8 -84.9 -88.15 -85.24 -88.5 -85.59C-88.85 -85.93 -89.2 -86.28 -89.55 -86.62C-89.9 -86.97 -90.25 -87.31 -90.6 -87.66C-90.95 -88 -91.3 -88.34 -91.65 -88.69C-92 -89.03 -92.35 -89.38 -92.7 -89.72C-93.05 -90.07 -93.4 -90.41 -93.75 -90.76C-94.1 -91.1 -94.45 -91.45 -94.8 -91.79C-95.15 -92.14 -95.5 -92.48 -95.85 -92.83C-96.2 -93.17 -96.55 -93.52 -96.9 -93.86C-97.25 -94.21 -97.6 -94.55 -97.95 -94.9C-98.3 -95.24 -98.65 -95.59 -99 -95.93C-99.35 -96.28 -99.7 -96.62 -100.05 -96.97C-100.4 -97.31 -100.75 -97.66 -101.1 -98C-101.45 -98.34 -101.8 -98.69 -102.15 -99.03C-102.5 -99.38 -102.85 -99.72 -103.2 -100.07C-103.55 -100.41 -103.9 -100.76 -104.25 -101.1C-104.6 -101.45 -104.95 -101.79 -105.3 -102.14C-105.65 -102.48 -106 -102.83 -106.35 -103.17C-106.7 -103.52 -107.05 -103.86 -107.4 -104.21C-107.75 -104.55 -108.1 -104.9 -108.45 -105.24C-108.8 -105.59 -109.15 -105.93 -109.5 -106.28C-109.85 -106.62 -110.2 -106.97 -110.55 -107.31C-110.9 -107.66 -111.25 -110.97 15.42 15.34Z"
              fill="rgb(255, 255, 255)"
            />
          </svg>
          Get It Now!
        </a>
      </div>
    </section>
  );
};

export default SampleBoxOffer;
