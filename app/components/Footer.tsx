"use client";
import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin } from "lucide-react";

function Footer() {
  const currentYear = new Date().getFullYear();
  const whatsappNumber = "+919009111088";
  const whatsappMessage = encodeURIComponent(
    "Hello! I have a question about your rolling papers."
  );
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
  // --- Facebook Configuration ---
  // Replace this with your actual Facebook page URL
  // const facebookLink = "https://www.facebook.com/";

  // --- Instagram Configuration ---
  // Replace this with your actual Instagram profile URL
  const instagramLink = "https://www.instagram.com/ryopapers/";
  const linkedinLink = "https://www.linkedin.com/company/ryopapers/";

  return (
    <footer className="bg-[#05014a] text-gray-300 pt-16 pb-8 border-t-4 border-[#A2D22E]">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* Brand Column */}
          <div className="flex flex-col items-start">
            <Link href="/" className="inline-block">
              <Image
                src="/images/ryopapers-final-logo.png"
                alt="RYO Papers Logo"
                width={140}
                height={140}
                className="transform transition-transform duration-300 hover:scale-105"
              />
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed">
              Roll Your Own Paper – Crafted with care, designed for you. We provide premium, custom rolling paper solutions for businesses and individuals worldwide.
            </p>
            <div className="flex space-x-4">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white transition-all duration-300 transform hover:scale-110 flex items-center justify-center w-12 h-12 md:w-14 md:h-14"
                aria-label="Chat on WhatsApp"
              >
                <Image
                  src="/Digital_Glyph_Green.svg"
                  alt="WhatsApp Icon"
                  width={20}
                  height={20}
                  className="text-white"
                />
              </a>
              <a
                href={linkedinLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white transition-all duration-300 transform hover:scale-110 flex items-center justify-center w-12 h-12 md:w-14 md:h-14"
                aria-label="Connect on LinkedIn"
              >
                <Image
                  src="/in-blue.png"
                  alt="LinkedIn Icon"
                  width={24}
                  height={24}
                  className="text-white"
                />
              </a>
              {/* Instagram Button */}
              <a
                href={instagramLink}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full text-white transition-all duration-300 transform hover:scale-110 flex items-center justify-center w-12 h-12 md:w-14 md:h-14"
                aria-label="Follow on Instagram"
              >
                <Image
                  src="/Instagram-1.png"
                  alt="WhatsApp Icon"
                  width={20}
                  height={20}
                  className="text-white"
                />
              </a>
            </div>
            <ul className="space-x-4 text-sm">
              <li className="flex items-center text-gray-400 pl-4">
                <Mail size={18} className="text-[#A2D22E] mr-3 flex-shrink-0" />
                <a href="mailto:info@ryopapers.com" className="hover:text-[#A2D22E] transition-colors">info@ryopapers.com</a>
              </li>
            </ul>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-white font-semibold text-sm md:text-lg mb-6 tracking-wide uppercase">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/" className="hover:text-[#A2D22E] transition-colors flex items-center group"><span className="mr-2 text-white/20 group-hover:text-[#A2D22E] transition-colors">›</span> Home</Link></li>
              <li><Link href="/about-us" className="hover:text-[#A2D22E] transition-colors flex items-center group"><span className="mr-2 text-white/20 group-hover:text-[#A2D22E] transition-colors">›</span> About Us</Link></li>
              <li><Link href="/blogs" className="hover:text-[#A2D22E] transition-colors flex items-center group"><span className="mr-2 text-white/20 group-hover:text-[#A2D22E] transition-colors">›</span> Blogs & Insights</Link></li>
              <li><Link href="/contact" className="hover:text-[#A2D22E] transition-colors flex items-center group"><span className="mr-2 text-white/20 group-hover:text-[#A2D22E] transition-colors">›</span> Contact Us</Link></li>
            </ul>
          </div>

          {/* Products & Services Column */}
          <div>
            <h3 className="text-white font-semibold text-sm md:text-lg mb-6 tracking-wide uppercase">Our Solutions</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/products/rolling-paper" className="hover:text-[#A2D22E] transition-colors flex items-center group"><span className="mr-2 text-white/20 group-hover:text-[#A2D22E] transition-colors">›</span> Rolling Papers</Link></li>
              <li><Link href="/blogs/private-label-rolling-papers" className="hover:text-[#A2D22E] transition-colors flex items-center group"><span className="mr-2 text-white/20 group-hover:text-[#A2D22E] transition-colors">›</span> Private Label Brands</Link></li>
              <li><Link href="/custom-rolling-papers" className="hover:text-[#A2D22E] transition-colors flex items-center group"><span className="mr-2 text-white/20 group-hover:text-[#A2D22E] transition-colors">›</span> Custom Size & Print</Link></li>
            </ul>
          </div>

          {/* Latest Blogs Column */}
          <div>
            <h3 className="text-white font-semibold text-sm md:text-lg mb-6 tracking-wide uppercase">Latest Blogs</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/blogs/how-to-start-rolling-paper-brand" className="hover:text-[#A2D22E] transition-colors flex items-center group"><span className="mr-2 text-white/20 group-hover:text-[#A2D22E] transition-colors">›</span> How to Start a Brand</Link></li>
              <li><Link href="/blogs/what-is-gsm-rolling-papers" className="hover:text-[#A2D22E] transition-colors flex items-center group"><span className="mr-2 text-white/20 group-hover:text-[#A2D22E] transition-colors">›</span> What is GSM?</Link></li>
              <li><Link href="/blogs/hemp-vs-rice-rolling-papers" className="hover:text-[#A2D22E] transition-colors flex items-center group"><span className="mr-2 text-white/20 group-hover:text-[#A2D22E] transition-colors">›</span> Hemp vs Rice Papers</Link></li>
              <li><Link href="/blogs/rolling-paper-materials-guide" className="hover:text-[#A2D22E] transition-colors flex items-center group"><span className="mr-2 text-white/20 group-hover:text-[#A2D22E] transition-colors">›</span> Materials Guide</Link></li>
              <li><Link href="/blogs/how-rolling-papers-are-manufactured" className="hover:text-[#A2D22E] transition-colors flex items-center group"><span className="mr-2 text-white/20 group-hover:text-[#A2D22E] transition-colors">›</span> Manufacturing Process</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p className="mb-4 md:mb-0">
            © {currentYear} <Link href="/" className="text-gray-300 hover:text-white transition-colors font-medium">RYO Papers</Link>. All Rights Reserved.
          </p>
          <p>
            Developed by <a href="https://www.aiprgmr.in" target="_blank" rel="noopener noreferrer" className="text-[#A2D22E] hover:text-[#b4eb31] transition-colors font-medium">AI PRGMR</a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
