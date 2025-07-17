"use client";
// components/Footer.tsx
import Image from "next/image";
import Link from "next/link";
import WorldMusicRadioPlayer from "./WorldMusicRadioPlayer";
function Footer() {
  return (
    <footer className="p-4 md:p-8 lg:p-10 mt-4 bg-black">
      <div className="mx-auto max-w-screen-xl text-center">
        <Link
          href="/"
          className="flex justify-center items-center text-2xl font-semibold text-white"
        >
          <Image
            src="/ryo/new-logo-2-removebg.png"
            alt="RYO Papers Logo"
            width={100}
            height={100}
            className="mr-2 transform-3d scale-180 transition-shadow duration-300 ease-in-out"
          />
        </Link>
        <p className="my-6 text-gray-500 dark:text-gray-200">
          Roll Your Own Paper – Crafted with care, designed for you.
        </p>
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400 my-5 mb-10">
          © 2024-2025{" "}
          <a href="#" className="hover:underline">
            RYO Papers
          </a>
          . All Rights Reserved.
        </span>
        <WorldMusicRadioPlayer /> {/* World Music Radio Player */}
      </div>
    </footer>
  );
}

export default Footer;
