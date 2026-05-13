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
  PenToolIcon,
  Factory
} from "lucide-react"; // Import Menu and X icons
import { useState } from "react"; // Import useState hook
import { usePathname } from "next/navigation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage mobile menu visibility

  // Function to close the menu (used when a link is clicked or menu explicitly closed)
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="bg-forest-600 text-cream-50 shadow-xl fixed w-full z-50 border-b-4 border-ryo-400">
      <div className="w-full mx-auto flex justify-between items-center px-4 md:px-16">
        {" "}
        <Link
          href="/"
          className="flex items-center space-x-2 text-2xl font-bold transition-colors duration-200 p-2 rounded-2xl"
          onClick={closeMenu} // Close menu if logo is clicked
          aria-label="RYOPAPERS logo"
          title="RYOPAPERS logo"
        >
          <Image
            src="/images/ryopapers-final-logo.png"
            alt="RYO Papers Logo"
            width={100}
            height={100}
            priority
            className="transition scale-125"
          />
        </Link>
        {/* Hamburger/Close Button for Mobile */}
        <button
          className="sm:hidden text-ryo-400 focus:outline-none z-60" // Hidden on sm screens and up
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
    sm:bg-none sm:shadow-none
    pb-4 sm:pb-0 pt-2 sm:pt-0
    shadow-lg ${isMenuOpen ? "bg-forest-300" : ""}
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
            onClick={closeMenu}
          />
          <NavLink
            href="/products/rolling-paper"
            icon={Package}
            label="Products"
            onClick={closeMenu}
          />
          <NavLink
            href="/rolling-paper-manufacturer"
            icon={Factory}
            label="Manufacture"
            onClick={closeMenu}
          />
          <NavLink
            href="/custom-rolling-papers"
            icon={Printer}
            label="Customize"
            onClick={closeMenu}
          />
          <NavLink
            href="/blogs"
            icon={PenToolIcon}
            label="Blogs"
            onClick={closeMenu}
          />
          <NavLink
            href="/about-us"
            icon={Leaf}
            label="About Us"
            onClick={closeMenu}
          />
          <NavLink
            href="/contact"
            icon={Mail}
            label="Contact"
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
  onClick?: () => void; // Add onClick prop
}
function NavLink({
  href,
  icon: Icon,
  label,
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
        ${isActive ? "bg-ryo-400/20 text-ryo-400" : "text-cream-200/70"}
        hover:text-ryo-400`}
      onClick={onClick}
    >
      <Icon size={20} />
      <span className="text-xs mt-1.5 whitespace-nowrap font-medium tracking-wide uppercase">{label}</span>
    </Link>
  );
}
