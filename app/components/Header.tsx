// components/Header.tsx
"use client"; // This directive is crucial for client-side interactivity

import Link from "next/link";
import Image from "next/image";
import { Home, Package, Printer, Mail, Menu, X, Leaf } from "lucide-react"; // Import Menu and X icons
import { useState } from "react"; // Import useState hook

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage mobile menu visibility

  // Function to close the menu (used when a link is clicked or menu explicitly closed)
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="bg-gradient-to-r from-[#adb693] to-[#3c4e35] text-white shadow-xl fixed w-full z-50 border-b-16 border-b-[#CCFF00]">
      <div className="container mx-auto flex justify-between items-center px-4">
        {" "}
        {/* Added relative for absolute positioning of nav */}
        {/* Logo/Brand */}
        <Link
          href="/"
          className="flex items-center space-x-2 text-2xl font-bold text-white hover:text-blue-100 transition-colors duration-200 p-2 rounded-2xl"
          onClick={closeMenu} // Close menu if logo is clicked
          aria-label="Rolling Paper Co. Home"
          title="Rolling Paper Co. Home"
        >
          <Image
            src="/ryo/new-logo-removebg.png"
            alt="Rolling Paper Co. Logo"
            width={100}
            height={100}
            className="" // Optional: Add rounded corners to the logo
          />
          <Image
            src="/ryo/new-gify2-unscreen.gif"
            alt="Rolling Paper Co. Logo"
            width={100}
            height={100}
            className="mt-4" // Optional: Add rounded corners to the logo
          />
        </Link>
        {/* Hamburger/Close Button for Mobile */}
        <button
          className="sm:hidden text-white focus:outline-none z-50" // Hidden on sm screens and up
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={
            isMenuOpen ? "Close navigation menu" : "Open navigation menu"
          }
        >
          {isMenuOpen ? <X size={30} /> : <Menu size={30} />}{" "}
          {/* Toggle between X and Menu icon */}
        </button>
        {/* Navigation - Desktop & Mobile */}
        <nav
          className={`
            ${
              isMenuOpen ? "flex" : "hidden"
            }  // Show/hide based on isMenuOpen state
            flex-col sm:flex-row // Stack vertically on mobile, horizontally on desktop
            sm:relative // Absolute position for mobile overlay, relative for desktop
            top-full left-0 w-full // Position the mobile menu right below the header
            bg-gradient-to-r from-teal-400 to-blue-500 // Background for mobile menu
            sm:bg-none sm:shadow-none // No special background/shadow on desktop
            pb-4 sm:pb-0 pt-2 sm:pt-0 // Padding adjustments for mobile
            shadow-lg // Shadow for the mobile menu overlay
            items-center sm:justify-end // Center items on mobile, right-align on desktop
            gap-x-4 gap-y-4 text-lg sm:text-base // Spacing between items
            sm:flex // Always display as flex on sm screens and up
            duration-300 ease-in-out // Smooth transition for menu appearance
            overflow-y-auto sm:overflow-visible // Allow scrolling for many links on mobile
            max-h-[calc(100vh-theme(spacing.24))] sm:max-h-none // Max height for mobile menu
          `}
        >
          <NavLink
            href="/"
            icon={Home}
            label="Home"
            textColor="text-white"
            hoverColor="hover:text-gray-800"
            onClick={closeMenu}
          />
          <NavLink
            href="/products/rolling-paper"
            icon={Package}
            label="Products"
            textColor="text-white"
            hoverColor="hover:text-gray-800"
            onClick={closeMenu}
          />
          <NavLink
            href="/custom-printing"
            icon={Printer}
            label="Custom Printing"
            textColor="text-white"
            hoverColor="hover:text-gray-800"
            onClick={closeMenu}
          />
          <NavLink
            href="/csr"
            icon={Leaf}
            label="CSR"
            textColor="text-white"
            hoverColor="hover:text-gray-800"
            onClick={closeMenu}
          />
          <NavLink
            href="/about-us"
            icon={Leaf}
            label="About Us"
            textColor="text-white"
            hoverColor="hover:text-gray-800"
            onClick={closeMenu}
          />
          <NavLink
            href="/contact"
            icon={Mail}
            label="Contact"
            textColor="text-white"
            hoverColor="hover:text-gray-800"
            onClick={closeMenu}
          />
        </nav>
      </div>
    </header>
  );
}
import { usePathname } from "next/navigation";

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
  textColor = "text-gray-100",
  hoverColor = "hover:text-blue-100",
  onClick, // Destructure the onClick prop
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
        ${isActive ? "bg-teal-400 bg-opacity-20" : ""}
        ${textColor} ${hoverColor}`}
      onClick={onClick} // Pass the onClick prop to the Link
    >
      <Icon size={20} />
      <span className="text-xl mt-1 whitespace-nowrap">{label}</span>
    </Link>
  );
}
// // Helper component for navigation links
// function NavLink({
//   href,
//   icon: Icon,
//   label,
// }: {
//   href: string;
//   icon: React.ElementType;
//   label: string;
// }) {
//   return (
//     <Link
//       href={href}
//       className="flex items-center space-x-2 text-white hover:text-amber-300 transition-colors duration-200 p-2 rounded-lg hover:bg-gray-700"
//     >
//       <Icon size={20} />
//       <span className="hidden sm:inline">{label}</span>
//     </Link>
//   );
// }
