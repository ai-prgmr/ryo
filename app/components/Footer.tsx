// components/Footer.tsx
import Image from "next/image";
import Link from "next/link";
function Footer() {
  return (
    // <footer className=" text-gray-100 p-6 text-center shadow-inner rounded-t-lg mt-8">
    //   <div className="container mx-auto">
    //     <p>
    //       &copy; {new Date().getFullYear()} RYO Papers. All rights reserved.
    //     </p>
    //     {/* <p className="mt-2 text-sm">
    //       Designed for discerning users who appreciate quality and
    //       craftsmanship.
    //     </p> */}
    //   </div>
    // </footer>
    <footer className="p-4 bg-white md:p-8 lg:p-10 dark:bg-gray-800">
      <div className="mx-auto max-w-screen-xl text-center">
        <Link
          href="/"
          className="flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <Image
            src="/new-logo-removebg.png"
            alt="RYO Papers Logo"
            width={100}
            height={100}
            className="mr-2 bg-amber-400 rounded-lg  shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
          />
        </Link>
        <p className="my-6 text-gray-500 dark:text-gray-400">
          Roll Your Own Paper – Crafted with care, designed for you.
        </p>
        <ul className="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white">
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6 ">
              About
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              Premium
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6 ">
              Campaigns
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              Blog
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              Affiliate Program
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              FAQs
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              Contact
            </a>
          </li>
        </ul>
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024-2025{" "}
          <a href="#" className="hover:underline">
            RYO Papers
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
