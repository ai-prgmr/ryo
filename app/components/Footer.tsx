"use client";
import Image from "next/image";
import Link from "next/link";
import { Mail } from "lucide-react";

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
    <footer className="bg-forest-700 text-cream-200/80 pt-16 pb-8 border-t-4 border-ryo-400">
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
            <p className="text-sm text-cream-200/60 leading-relaxed">
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
                  alt="Instagram Icon"
                  width={20}
                  height={20}
                  className="text-white"
                />
              </a>
            </div>
            <ul className="mt-6 space-y-4 text-sm">
              <li className="flex items-center">
                <Mail size={18} className="text-ryo-400 mr-3 flex-shrink-0" />
                <a href="mailto:info@ryopapers.com" className="text-cream-200 hover:text-ryo-400 transition-colors">info@ryopapers.com</a>
              </li>
            </ul>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-white font-semibold text-sm md:text-lg mb-6 tracking-wide uppercase">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/" className="text-cream-200 hover:text-ryo-400 transition-colors flex items-center group"><span className="mr-2 text-white/20 group-hover:text-ryo-400 transition-colors">›</span> Home</Link></li>
              <li><Link href="/about-us" className="text-cream-200 hover:text-ryo-400 transition-colors flex items-center group"><span className="mr-2 text-white/20 group-hover:text-ryo-400 transition-colors">›</span> About Us</Link></li>
              <li><Link href="/rolling-paper-manufacturer" className="text-cream-200 hover:text-ryo-400 transition-colors flex items-center group"><span className="mr-2 text-white/20 group-hover:text-ryo-400 transition-colors">›</span> Manufacturer</Link></li>
              <li><Link href="/blogs" className="text-cream-200 hover:text-ryo-400 transition-colors flex items-center group"><span className="mr-2 text-white/20 group-hover:text-ryo-400 transition-colors">›</span> Blogs & Insights</Link></li>
              <li><Link href="/contact" className="text-cream-200 hover:text-ryo-400 transition-colors flex items-center group"><span className="mr-2 text-white/20 group-hover:text-ryo-400 transition-colors">›</span> Contact Us</Link></li>
            </ul>
          </div>

          {/* Products & Services Column */}
          <div>
            <h3 className="text-white font-semibold text-sm md:text-lg mb-6 tracking-wide uppercase">Our Solutions</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/products/rolling-paper" className="text-cream-200 hover:text-ryo-400 transition-colors flex items-center group"><span className="mr-2 text-white/20 group-hover:text-ryo-400 transition-colors">›</span> Rolling Papers</Link></li>
              <li><Link href="/blogs/private-label-rolling-papers" className="text-cream-200 hover:text-ryo-400 transition-colors flex items-center group"><span className="mr-2 text-white/20 group-hover:text-ryo-400 transition-colors">›</span> Private Label Brands</Link></li>
              <li><Link href="/blogs/custom-rolling-papers" className="text-cream-200 hover:text-ryo-400 transition-colors flex items-center group"><span className="mr-2 text-white/20 group-hover:text-ryo-400 transition-colors">›</span> Custom Size & Print</Link></li>
              <li><Link href="/products/rice-rolling-paper" className="text-cream-200 hover:text-ryo-400 transition-colors flex items-center group"><span className="mr-2 text-white/20 group-hover:text-ryo-400 transition-colors">›</span> Rice Paper</Link></li>
              <li><Link href="/products/hemp-rolling-paper" className="text-cream-200 hover:text-ryo-400 transition-colors flex items-center group"><span className="mr-2 text-white/20 group-hover:text-ryo-400 transition-colors">›</span> Hemp Paper</Link></li>
              <li><Link href="/products/flax-rolling-paper" className="text-cream-200 hover:text-ryo-400 transition-colors flex items-center group"><span className="mr-2 text-white/20 group-hover:text-ryo-400 transition-colors">›</span> Flax Paper</Link></li>
              <li><Link href="/products/wood-pulp-rolling-paper" className="text-cream-200 hover:text-ryo-400 transition-colors flex items-center group"><span className="mr-2 text-white/20 group-hover:text-ryo-400 transition-colors">›</span> Wood Pulp Paper</Link></li>
              <li><Link href="/products/cellulose-rolling-paper" className="text-cream-200 hover:text-ryo-400 transition-colors flex items-center group"><span className="mr-2 text-white/20 group-hover:text-ryo-400 transition-colors">›</span> Cellulose Paper</Link></li>
            </ul>
          </div>

          {/* Latest Blogs Column */}
          <div>
            <h3 className="text-white font-semibold text-sm md:text-lg mb-6 tracking-wide uppercase">Latest Blogs</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/blogs/how-to-start-rolling-paper-brand" className="text-cream-200 hover:text-ryo-400 transition-colors flex items-center group"><span className="mr-2 text-white/20 group-hover:text-ryo-400 transition-colors">›</span> How to Start a Brand</Link></li>
              <li><Link href="/blogs/what-is-gsm-rolling-papers" className="text-cream-200 hover:text-ryo-400 transition-colors flex items-center group"><span className="mr-2 text-white/20 group-hover:text-ryo-400 transition-colors">›</span> What is GSM?</Link></li>
              <li><Link href="/blogs/hemp-vs-rice-rolling-papers" className="text-cream-200 hover:text-ryo-400 transition-colors flex items-center group"><span className="mr-2 text-white/20 group-hover:text-ryo-400 transition-colors">›</span> Hemp vs Rice Papers</Link></li>
              <li><Link href="/blogs/rolling-paper-materials-guide" className="text-cream-200 hover:text-ryo-400 transition-colors flex items-center group"><span className="mr-2 text-white/20 group-hover:text-ryo-400 transition-colors">›</span> Materials Guide</Link></li>
              <li><Link href="/blogs/how-rolling-papers-are-manufactured" className="text-cream-200 hover:text-ryo-400 transition-colors flex items-center group"><span className="mr-2 text-white/20 group-hover:text-ryo-400 transition-colors">›</span> Manufacturing Process</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm text-cream-200/60">
          <p className="mb-4 md:mb-0 text-cream-200/80 transition-colors hover:text-white">
            © {currentYear} <Link href="/" className="text-ryo-400 hover:text-ryo-300  font-medium">RYO Papers</Link>. All Rights Reserved.
          </p>
          <p className="mb-4 md:mb-0 text-cream-200/80 transition-colors hover:text-white">
            Developed by <Link href="https://www.aiprgmr.in" target="_blank" rel="noopener noreferrer" className="text-ryo-400 hover:text-ryo-300 transition-colors font-medium">AI PRGMR</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
