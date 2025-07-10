import Link from "next/link";
import { Award, FlaskConical, Blend, Handshake } from "lucide-react";
function ContractManufacturingPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className=" rounded-3xl shadow-xl p-6 md:p-10 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-amber-300 mb-6">
          Contract Manufacturing for the Tobacco Industry
        </h1>
        <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-10 leading-relaxed">
          As a trusted partner, we offer comprehensive contract manufacturing
          solutions specifically designed for the tobacco industry. Leveraging
          our cutting-edge facilities and stringent quality controls, we ensure
          your products meet the highest standards of excellence and compliance.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gray-900 p-6 rounded-2xl border border-gray-700 shadow-lg">
            <Award size={48} className="text-amber-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-100 mb-3">
              Uncompromising Quality
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Our manufacturing processes adhere to the strictest industry
              standards, guaranteeing consistency and superior quality for every
              batch of your product.
            </p>
          </div>
          <div className="bg-gray-900 p-6 rounded-2xl border border-gray-700 shadow-lg">
            <FlaskConical size={48} className="text-amber-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-100 mb-3">
              Advanced Capabilities
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Equipped with state-of-the-art machinery and skilled technicians,
              we handle projects of all scales with efficiency and precision.
            </p>
          </div>
          <div className="bg-gray-900 p-6 rounded-2xl border border-gray-700 shadow-lg">
            <Blend size={48} className="text-amber-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-100 mb-3">
              Custom Formulation & Production
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Whether it&unquot;s specific blends, unique paper types, or
              specialized packaging, we adapt to your exact manufacturing
              requirements.
            </p>
          </div>
          <div className="bg-gray-900 p-6 rounded-2xl border border-gray-700 shadow-lg">
            <Handshake size={48} className="text-amber-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-100 mb-3">
              Confidential Partnership
            </h3>
            <p className="text-gray-400 leading-relaxed">
              We operate with utmost discretion and confidentiality, protecting
              your intellectual property and business interests throughout the
              process.
            </p>
          </div>
        </div>

        <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
          Partner with us for reliable, high-volume manufacturing that scales
          with your business needs.
        </p>

        <Link
          href="/contact"
          className="inline-flex items-center px-8 py-4 bg-amber-600 text-white rounded-full text-xl font-semibold shadow-xl hover:bg-amber-700 transition-all duration-300 transform hover:scale-105"
        >
          Discuss Your Manufacturing Needs
        </Link>
      </div>
    </div>
  );
}
export default ContractManufacturingPage;
