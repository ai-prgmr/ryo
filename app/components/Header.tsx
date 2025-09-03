// // components/Header.tsx
"use client"; // This directive is crucial for client-side interactivity

import Link from "next/link";
import Image from "next/image";
import {
  Package,
  Home,
  Printer,
  Mail,
  X,
  Leaf,
  AlignRightIcon,
} from "lucide-react"; // Import Menu and X icons
import { useState } from "react"; // Import useState hook
import { usePathname } from "next/navigation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage mobile menu visibility

  // Function to close the menu (used when a link is clicked or menu explicitly closed)
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="bg-[#05014a] text-gray-50 shadow-xl fixed w-full z-50 border-b-4 border-b-[#A2D22E]">
      <div className="w-full mx-auto flex justify-between items-center px-4 md:px-16">
        {" "}
        <Link
          href="/"
          className="flex items-center space-x-2 text-2xl font-bold transition-colors duration-200 p-2 rounded-2xl"
          onClick={closeMenu} // Close menu if logo is clicked
          aria-label="Rolling Paper Co. Home"
          title="Rolling Paper Co. Home"
        >
          <Image
            src="/new-logo-2-removebg.png"
            alt="RYO Papers Logo"
            width={100}
            height={100}
            priority
            className="transform scale-125" // Optional: Add rounded corners to the logo
          />
        </Link>
        {/* Hamburger/Close Button for Mobile */}
        <button
          className="sm:hidden text-blue-500 focus:outline-none z-60" // Hidden on sm screens and up
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={
            isMenuOpen ? "Close navigation menu" : "Open navigation menu"
          }
        >
          {isMenuOpen ? <X size={30} /> : <AlignRightIcon size={30} />}{" "}
          {/* Toggle between X and Menu icon */}
        </button>
        {/* Navigation - Desktop & Mobile */}
        <nav
          className={`
            ${isMenuOpen ? "flex" : "hidden"}
            flex-col sm:flex-row
    fixed sm:relative
    top-0 left-0 w-full h-full sm:h-auto
    bg-[#05014a]
    sm:bg-none sm:shadow-none
    pb-4 sm:pb-0 pt-2 sm:pt-0
    shadow-lg
    items-center sm:justify-end
    gap-x-4 gap-y-4 text-lg sm:text-base
    sm:flex
    duration-300 ease-in-out
    overflow-y-auto sm:overflow-visible
    z-50
          `}
        >
          {" "}
          <NavLink
            href="/"
            icon={Home}
            label="Home"
            textColor="text-gray-300"
            hoverColor="hover:text-gray-200"
            onClick={closeMenu}
          />
          <NavLink
            href="/products/rolling-paper"
            icon={Package}
            label="Products"
            textColor="text-white"
            hoverColor="hover:text-gray-200"
            onClick={closeMenu}
          />
          <NavLink
            href="/custom-printing"
            icon={Printer}
            label="Customize"
            textColor="text-gray-100"
            hoverColor="hover:text-gray-200"
            onClick={closeMenu}
          />
          <NavLink
            href="/about-us"
            icon={Leaf}
            label="About Us"
            textColor="text-gray-100"
            hoverColor="hover:text-gray-200"
            onClick={closeMenu}
          />
          <NavLink
            href="/contact"
            icon={Mail}
            label="Contact"
            textColor="text-gray-100"
            hoverColor="hover:text-gray-200"
            onClick={closeMenu}
          />
        </nav>
      </div>
    </header>
  );
}

interface NavLinkProps {
  href: string;
  icon: React.ElementType;
  label: string;
  textColor?: string;
  hoverColor?: string;
  onClick?: () => void; // Add onClick prop
}

function NavLink({
  href,
  icon: Icon,
  label,
  hoverColor = "hover:text-blue-600",
  onClick,
}: NavLinkProps) {
  const pathname = usePathname();
  // Simplified active check for routes like /products/category
  const isActive =
    pathname.startsWith(href) &&
    (pathname.length === href.length || pathname.charAt(href.length) === "/");

  return (
    <Link
      href={href}
      className={`flex flex-col items-center p-2 rounded-lg transition-colors duration-200
        ${isActive ? "bg-[#e1ffac] text-black bg-opacity-20" : "text-gray-200"}
        ${isActive ? "hover:text-black" : `${hoverColor}`}`}
      onClick={onClick}
    >
      <Icon size={20} />
      <span className="text-md mt-1 whitespace-nowrap">{label}</span>
    </Link>
  );
}
