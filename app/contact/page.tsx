import Image from "next/image";
import { Mail } from "lucide-react";
function ContactPage() {
  return (
    <div className="bg-white container mx-auto px-4 py-8">
      <div className="bg-transparent p-6 md:p-10 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-amber-300 mb-6">
          Get in Touch
        </h1>
        <p className="text-lg text-gray-500 max-w-3xl mx-auto mb-10 leading-relaxed">
          We&apos;re here to assist you with any inquiries regarding our premium
          rolling papers, custom printing services, or contract manufacturing
          solutions. Reach out to us through the following channels:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2  gap-8 mb-12">
          {/* <div className="bg-gray-900 p-6 rounded-2xl border border-gray-700 shadow-lg flex flex-col items-center">
            <Phone size={48} className="text-amber-400 mb-4" />
            <h3 className="text-2xl font-bold text-gray-100 mb-3">Call Us</h3>
            <p className="text-gray-400 leading-relaxed">
              <a
                href="tel:+919009111088"
                className="text-amber-300 hover:underline"
              >
                +91 90091 11088
              </a>
            </p>
          </div> */}
          <div className="bg-white p-6  border border-amber-300 shadow-lg flex flex-col items-center">
            <Mail size={48} className="text-amber-400 mb-4" />
            <h3 className="text-2xl font-bold text-gray-400 mb-3">Email Us</h3>
            <p className="text-gray-700 leading-relaxed">
              <a
                href="mailto:info@ryopapers.com"
                className="text-gray-600 font-bold hover:underline"
              >
                info@ryopapers.com
              </a>
              <br />{" "}
            </p>
          </div>
          <div className="bg-white p-6 border border-amber-300 shadow-lg flex flex-col items-center">
            <Image
              src="/ryo/Digital_Glyph_Green.svg"
              alt="WhatsApp"
              width={48}
              height={48}
              className="text-amber-400 mb-4"
            />
            <h3 className="text-2xl font-bold text-green-400 mb-3">WhatsApp</h3>
            <p className=" leading-relaxed">
              <a
                target="_blank"
                href="https://wa.me/919009111088"
                className="text-green-400  text-2xl font-bold hover:underline"
              >
                +91 90091 11088
              </a>
            </p>
          </div>
        </div>

        {/* <h2 className="text-3xl font-bold text-amber-300 mb-6">
          Send Us a Message
        </h2>
        <form className="max-w-2xl mx-auto bg-gray-900 p-8 rounded-2xl border border-gray-700 shadow-lg text-left">
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-300 text-sm font-bold mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="shadow appearance-none border border-gray-600 rounded-lg w-full py-3 px-4 text-gray-100 leading-tight focus:outline-none focus:ring-2 focus:ring-amber-500 bg-gray-700 transition-all duration-200"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-300 text-sm font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="shadow appearance-none border border-gray-600 rounded-lg w-full py-3 px-4 text-gray-100 leading-tight focus:outline-none focus:ring-2 focus:ring-amber-500 bg-gray-700 transition-all duration-200"
              placeholder="your.email@example.com"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-gray-300 text-sm font-bold mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              className="shadow appearance-none border border-gray-600 rounded-lg w-full py-3 px-4 text-gray-100 leading-tight focus:outline-none focus:ring-2 focus:ring-amber-500 bg-gray-700 transition-all duration-200"
              placeholder="Tell us how we can help..."
              required
            ></textarea>
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-6 rounded-full text-lg shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Send Message
            </button>
          </div>
        </form> */}
      </div>
    </div>
  );
}
export default ContactPage;
