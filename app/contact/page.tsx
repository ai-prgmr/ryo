import { ContactAnimations } from "./ContactClient";
import Script from "next/script";

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": "https://ryopapers.com/contact/#webpage",
  "url": "https://ryopapers.com/contact",
  "name": "Contact Us | RYO Papers",
  "description": "Get in touch with RYOPAPERS for inquiries about our premium rolling papers and custom printing services.",
  "publisher": { "@id": "https://ryopapers.com/#organization" }
};

export default function ContactPage() {
  return (
    <div className="bg-bg max-w-5xl mx-auto px-4 py-8">
      <Script
        id="contact-page-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />

      <div className="p-6 md:p-10 text-center">
        <h1
          className="inline-flex items-center justify-center px-16 py-4 text-brand font-semibold rounded-full shadow-md
                           text-5xl mb-16"
        >
          Get in touch{" "}
        </h1>
        <p className="text-lg text-text max-w-3xl mx-auto mb-10 leading-relaxed">
          We&apos;re here to assist you with any inquiries regarding our premium
          rolling papers, custom printing services, or contract manufacturing
          solutions. Reach out to us through the following channels:
        </p>

        <ContactAnimations />
      </div>
    </div>
  );
}

