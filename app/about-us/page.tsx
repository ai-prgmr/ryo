import Image from "next/image";
import { Sprout, Home, Heart, HandHeart, Factory, Users, Target, Globe } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBoxes,
  faHeadset,
  faStar,
  faLeaf,
} from "@fortawesome/free-solid-svg-icons";
import Script from "next/script";

// Define data for the benefit cards
const benefitsData = [
  {
    icon: faBoxes,
    title: "Low Order Quantities",
    description:
      "Every brand starts somewhere – we support your growth journey.",
  },
  {
    icon: faHeadset,
    title: "Real Human Support",
    description:
      "Talk to people, not bots, for genuine guidance and assistance.",
  },
  {
    icon: faStar,
    title: "Premium Finish",
    description: "Beautiful, high-quality packaging with a professional touch.",
  },
  {
    icon: faLeaf,
    title: "Eco-Friendly Promise",
    description: "Committed to sustainability, true to your brand's vibe.",
  },
];


const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://ryopapers.com/about-us/#webpage",
  "url": "https://ryopapers.com/about-us",
  "name": "About Us | RYO Papers",
  "description": "Learn about RYOPAPERS, our commitment to social responsibility, and how we support rolling paper brands of all sizes.",
  "publisher": { "@id": "https://ryopapers.com/#organization" }
};

export default function AboutUs() {
  const textColor = "text-text";
  return (
    <div className=" font-sans">
      <Script
        id="about-us-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />

      <div className="max-w-5xl mx-auto lg:px-8">
        {/* Main Heading & Introduction */}
        <div className="max-w-5xl mx-auto px-12 lg:px-8">
          {/* Main Heading & Introduction */}
          <div className="text-ink py-10 md:py-16 mb-12 mx-auto overflow-hidden relative bg-[radial-gradient(circle_at_top_right,rgba(162,210,46,0.08),transparent_50%)] rounded-[3rem]">
            <div className="relative z-10 text-center px-4">
              <h1 className="font-display text-[clamp(28px,4.5vw,56px)] leading-[1.1] tracking-tight text-ink mb-10">
                <span className="text-[clamp(40px,7vw,88px)] uppercase font-black text-ink block mt-2">
                  Manufacturing Custom <br className="hidden md:block" /> Rolling Papers <span className="text-brand italic">Since 2017</span>
                </span>
              </h1>

              {/* Main content */}
              <div className="space-y-12 max-w-5xl mx-auto mt-12">
                <div className="space-y-6 max-w-3xl mx-auto">
                  <p className="text-[clamp(18px,1.5vw,22px)] text-ink leading-relaxed font-medium text-center">
                    <strong className="text-brand font-bold">RYO Papers</strong> is a full-service private-label manufacturer based in Indore, India, dedicated to helping global founders and distributors build their own brand identities.
                  </p>
                  <p className="text-[clamp(16px,1.2vw,20px)] text-muted leading-relaxed font-light text-center">
                    Since 2017, we have specialized in the high-precision production of hemp, rice, flax, and wood pulp papers, shipping to 30+ countries worldwide.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                  <div className="p-8 bg-surface rounded-3xl border border-brand/5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:border-brand/20 transition-all duration-300 group">
                    <div className="w-14 h-14 bg-brand/10 rounded-2xl flex items-center justify-center mb-6 text-brand group-hover:scale-110 transition-transform duration-300">
                      <Factory size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-ink mb-3 tracking-tight">A Real Factory, Not a Middleman</h3>
                    <p className="text-muted leading-relaxed text-sm md:text-base">
                      We are a true OEM manufacturer—handling everything from fiber pulping and watermark embedding to gumming and booklet folding in-house.
                    </p>
                  </div>

                  <div className="p-8 bg-surface rounded-3xl border border-brand/5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:border-brand/20 transition-all duration-300 group">
                    <div className="w-14 h-14 bg-brand/10 rounded-2xl flex items-center justify-center mb-6 text-brand group-hover:scale-110 transition-transform duration-300">
                      <Users size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-ink mb-3 tracking-tight">Collaboration Over Transaction</h3>
                    <p className="text-muted leading-relaxed text-sm md:text-base">
                      We believe every great idea deserves a chance. This is why we offer low minimum orders (500 booklets) and personal attention to every client.
                    </p>
                  </div>

                  <div className="p-8 bg-surface rounded-3xl border border-brand/5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:border-brand/20 transition-all duration-300 group">
                    <div className="w-14 h-14 bg-brand/10 rounded-2xl flex items-center justify-center mb-6 text-brand group-hover:scale-110 transition-transform duration-300">
                      <Target size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-ink mb-3 tracking-tight">Technical Precision</h3>
                    <p className="text-muted leading-relaxed text-sm md:text-base">
                      Our facility operates with professional quality systems, maintaining a tight ±5% GSM tolerance to ensure a consistent, premium burn rate for every sheet.
                    </p>
                  </div>

                  <div className="p-8 bg-surface rounded-3xl border border-brand/5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:border-brand/20 transition-all duration-300 group">
                    <div className="w-14 h-14 bg-brand/10 rounded-2xl flex items-center justify-center mb-6 text-brand group-hover:scale-110 transition-transform duration-300">
                      <Globe size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-ink mb-3 tracking-tight">Global Reach, Indian Roots</h3>
                    <p className="text-muted leading-relaxed text-sm md:text-base">
                      With 5+ years of exporting experience, we blend German engineering standards with the agility and innovation that India is known for.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center mb-8">
            <Image
              src="/branding-cutout.png"
              alt="RYO-branding"
              width={600}
              sizes="100vw"
              className="object-contain mx-auto"
              height={400}
            />
          </div>

          <section className="">
            <div className="max-w-3xl mx-auto">
              <div className="mt-10">
                <h3 className="font-display text-lg sm:text-xl md:text-3xl text-brand mb-6 text-center font-semibold">
                  Work with Us
                </h3>
                <p
                  className={`${textColor} dark:text-ink text-lg md:text-xl leading-relaxed text-center mb-6 mx-auto`}
                >
                  Working with RYO Papers feels more like a collaboration than a
                  transaction.
                </p>

                <p
                  className={`${textColor} text-lg md:text-xl leading-relaxed mb-8 mx-auto text-center`}
                >
                  We know what it’s like to have an idea and not know where to
                  start. That’s why we’ve made the process simple, flexible, and
                  friendly. Whether you want 500 packs or 50,000 — we’ve got
                  you.
                </p>

                {/* New Grid for Benefits */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                  {benefitsData.map((benefit, index) => (
                    <div key={index} className="flex flex-col items-center p-6 bg-surface rounded-2xl border border-brand/5 group hover:border-brand/20 transition-all duration-300">
                      <div className="mb-4 text-brand/30 group-hover:text-brand transition-colors duration-300">
                        <FontAwesomeIcon
                          icon={benefit.icon}
                          className="text-5xl"
                        />
                      </div>
                      <h4 className="font-display text-xl font-bold text-ink mb-2 text-center">
                        {benefit.title}
                      </h4>
                      <p className="text-sm text-muted leading-relaxed text-center">
                        {benefit.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* CSR Section */}
        <div className=" text-gray-800 bg-surface font-sans mt-10">
          <div className="bg-surface container mx-auto px-6 py-4 lg:px-8">
            {/* Main Heading & Introduction */}
            <div className="text-center mb-10 p-4">
              <h2 className="font-display text-3xl md:text-5xl font-black text-brand tracking-tight mb-12">
                Our Commitment to Social Responsibility
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed font-bold">
                At RYOPAPERS, we recognize that true success reaches beyond
                profits. That’s why we invest in our community and protect the
                environment through initiatives grounded in care,
                sustainability, and giving back.
              </p>
            </div>

            <div className="space-y-8">
              {/* Initiative 1: Maintaining a Farmland */}
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8 bg-bg p-6 rounded-xl shadow-sm">
                <div className="flex-shrink-0 w-full md:w-1/3">
                  {/* Replace with your Popsy.co image for farmland */}
                  <Image
                    src="/CSR-1.jpeg"
                    width={300}
                    height={300}
                    alt="Illustration of a thriving farmland"
                    className=" rounded-lg object-cover"
                  />
                </div>
                <div className="flex-grow text-center md:text-left">
                  <div className="inline-block bg-green-100 p-3 rounded-full mb-4">
                    <Sprout size={24} className="text-green-700" />
                  </div>
                  <h2 className="font-display text-xl md:text-3xl font-bold text-brand mb-5">
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
              <div className="flex flex-col md:flex-row-reverse items-center md:items-start gap-8 bg-bg p-6 rounded-xl shadow-sm">
                <div className="flex-shrink-0 w-full md:w-1/3">
                  <Image
                    src="/CSR-2.jpeg"
                    width={300}
                    height={300}
                    alt="Illustration of elderly people being cared for"
                    className="rounded-lg object-cover"
                  />
                </div>
                <div className="flex-grow text-center md:text-right">
                  <div className="inline-block bg-purple-100 p-3 rounded-full mb-4">
                    <Home size={24} className="text-purple-700" />
                  </div>
                  <h2 className="font-display text-xl md:text-3xl font-bold text-brand mb-5">
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
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8 bg-bg p-6 rounded-xl shadow-sm">
                <div className="flex-shrink-0 w-full justify-center md:w-1/3">
                  {/* Replace with your Popsy.co image for orphanage/children */}
                  <Image
                    src="/CSR-3.jpeg"
                    width={300}
                    height={300}
                    alt="Illustration of children in a supportive environment"
                    className="rounded-lg object-cover"
                  />
                </div>
                <div className="flex-grow text-center md:text-left">
                  <div className="inline-block bg-orange-100 p-3 rounded-full mb-4">
                    <HandHeart size={24} className="text-orange-700" />
                  </div>
                  <h2 className="font-display text-xl md:text-3xl font-bold text-brand mb-5">
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
            <div className="text-center mt-10">
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
      </div>
    </div>
  );
}
