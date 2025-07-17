import Link from "next/link";
import {
  Award,
  FlaskConical,
  Blend,
  Handshake,
  Paintbrush,
  Palette,
  Factory,
  Lightbulb,
  TrendingUp,
} from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom Printing & Contract Manufacturing | Rolling Paper Co.",
  description:
    "Explore our custom printing services for rolling papers and contract manufacturing solutions tailored for the tobacco industry.",
  keywords: [
    "King Size Slim",
    "1 1/4",
    "Rolling Papers Booklets",
    "Crease-free papers",
    "Tips/Filters",
  ],
};

function CustomPrintingPage() {
  return (
    <div className="container mx-auto px-4 py-16 bg-white">
      <div className="  p-6 md:p-10 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-amber-300 mb-6">
          Custom Printing: Launch Your Own Paper
        </h1>
        <p className="text-lg text-gray-800 max-w-4xl mx-auto mb-10 leading-relaxed">
          Unleash your creativity and establish your brand with our premium
          custom printing services for rolling papers. We bring your unique
          designs to life, ensuring exceptional quality and a distinctive
          identity for your product.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className=" p-6">
            <Paintbrush size={48} className="text-amber-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-500 mb-3">
              Your Vision, Our Expertise
            </h3>
            <p className="text-gray-800 leading-relaxed">
              From intricate logos to vibrant patterns, our advanced printing
              technology ensures every detail of your design is perfectly
              replicated on the finest rolling paper.
            </p>
          </div>
          <div className=" p-6 rounded-2xl">
            <Palette size={48} className="text-amber-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-500 mb-3">
              Material & Finish Options
            </h3>
            <p className="text-gray-800 leading-relaxed">
              Choose from our wide range of paper types – Unbleached Organic,
              Hemp, Unbleached Classic, white, AlfaAlfa, Bamboo, Verge,
              Flavoured, Coloured – to match your brand&quot;s ethos and
              aesthetic.
            </p>
          </div>
        </div>
        <div className="p-6 md:p-10 text-center mb-5">
          <h1 className="text-4xl md:text-5xl font-extrabold text-amber-300 mb-6">
            Contract Manufacturing
          </h1>
          <p className="text-2xl text-gray-800 max-w-4xl mx-auto mb-10 leading-relaxed">
            As a trusted partner, we offer comprehensive contract manufacturing
            solutions specifically designed for the tobacco industry. Leveraging
            our cutting-edge facilities and stringent quality controls, we
            ensure your products meet the highest standards of excellence and
            compliance.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className=" p-6 rounded-2xl">
              <Award size={48} className="text-amber-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-500 mb-3">
                Uncompromising Quality
              </h3>
              <p className="text-gray-800 leading-relaxed">
                Our manufacturing processes adhere to the strictest industry
                standards, guaranteeing consistency and superior quality for
                every batch of your product.
              </p>
            </div>
            <div className=" p-6 rounded-2xl">
              <FlaskConical size={48} className="text-amber-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-500 mb-3">
                Advanced Capabilities
              </h3>
              <p className="text-gray-800 leading-relaxed">
                Equipped with state-of-the-art machinery and skilled
                technicians, we handle projects of all scales with efficiency
                and precision.
              </p>
            </div>
            <div className=" p-6 rounded-2xl">
              <Blend size={48} className="text-amber-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-500 mb-3">
                Custom Formulation & Production
              </h3>
              <p className="text-gray-800 leading-relaxed">
                Whether it&unquot;s specific blends, unique paper types, or
                specialized packaging, we adapt to your exact manufacturing
                requirements.
              </p>
            </div>
            <div className=" p-6 rounded-2xl">
              <Handshake size={48} className="text-amber-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-500 mb-3">
                Confidential Partnership
              </h3>
              <p className="text-gray-800 leading-relaxed">
                We operate with utmost discretion and confidentiality,
                protecting your intellectual property and business interests
                throughout the process.
              </p>
            </div>
          </div>

          <p className="text-xl text-gray-800 max-w-3xl mx-auto mb-8">
            Partner with us for reliable, high-volume manufacturing that scales
            with your business needs.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-amber-600 text-white rounded-lg text-xl font-semibold shadow-xl hover:bg-amber-700 transition-all duration-300 transform hover:scale-105"
          >
            Discuss Your Manufacturing Needs
          </Link>
        </div>
        <h2 className="text-3xl font-bold text-amber-300 mb-8">
          Our Process: Simple & Seamless
        </h2>
        <div className="flex flex-wrap justify-center gap-6 mb-12 text-gray-100">
          <div className="flex flex-col items-center p-4  rounded-xl border border-gray-700 shadow-md w-full sm:w-1/2 md:w-1/4">
            <Lightbulb size={40} className="text-blue-400 mb-3" />
            <span className="font-semibold text-gray-500">
              1. Concept & Design
            </span>
            <p className="text-sm mt-1 text-center text-gray-500">
              Share your ideas and artwork.
            </p>
          </div>
          <div className="flex flex-col items-center p-4  rounded-xl border border-gray-700 shadow-md w-full sm:w-1/2 md:w-1/4">
            <Factory size={40} className="text-green-400 mb-3" />
            <span className="font-semibold text-gray-500">2. Production</span>
            <p className="text-sm mt-1 text-center text-gray-500">
              Precision manufacturing & printing.
            </p>
          </div>
          <div className="flex flex-col items-center p-4  rounded-xl border border-gray-700 shadow-md w-full sm:w-1/2 md:w-1/4">
            <TrendingUp size={40} className="text-purple-400 mb-3" />
            <span className="font-semibold text-gray-500">
              3. Launch & Grow
            </span>
            <p className="text-sm mt-1 text-center text-gray-500">
              Your unique brand enters the market.
            </p>
          </div>
        </div>

        <p className="text-xl text-gray-800 max-w-3xl mx-auto mb-8">
          Ready to make your mark? Contact us today to discuss your custom
          rolling paper project and receive a personalized quote.
        </p>

        <Link
          href="/contact"
          className="inline-flex items-center px-8 py-4 bg-amber-600 text-white rounded-lg text-xl font-semibold shadow-xl hover:bg-amber-700 transition-all duration-300 transform hover:scale-105"
        >
          Get a Custom Printing Quote
        </Link>
      </div>
    </div>
  );
}

export default CustomPrintingPage;
