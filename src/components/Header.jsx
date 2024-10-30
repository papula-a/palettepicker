"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-6 py-2 bg-white shadow-md">
      {/* Logo */}
      <div className="flex justify-start">
        <Link href="/">
          <Image
            src="/static/logo.png"
            width={40}
            height={40}
            alt="PalettePicker Logo"
            className="h-10 w-10"
          />
        </Link>
      </div>

      {/* Navbar for larger screens */}
      <div className="hidden md:flex flex-1 justify-center"> {/* Centering Navbar */}
        <div className="flex justify-center space-x-8 ml-4"> {/* Added ml-4 to shift right */}
          <Link href="/" className="text-gray-800 hover:text-orange-500">Home</Link>
          <Link href="/templates" className="text-gray-800 hover:text-orange-500">Templates</Link>
          <Link href="/about" className="text-gray-800 hover:text-orange-500">About Us</Link>
        </div>
      </div>

      {/* User Profile Icon and Links on the right */}
      <div className="flex items-center space-x-4">
        {/* User Links for larger screens */}
        <div className="hidden md:flex space-x-4">
          <Link href="/sign-in" className="text-gray-800 hover:text-orange-500">Log In</Link>
          <Link href="/sign-up" className="text-gray-800 hover:text-orange-500">Sign Up</Link>
        </div>

        {/* Burger Menu Icon for mobile */}
        <button onClick={toggleMenu} className="md:hidden">
          {isMenuOpen ? (
            <HiX className="w-6 h-6 text-gray-800" />
          ) : (
            <HiMenu className="w-6 h-6 text-gray-800" />
          )}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md md:hidden">
          <div className="flex flex-col items-center space-y-4 py-4">
            <Link href="/" className="text-gray-800 hover:text-orange-500">Home</Link>
            <Link href="/templates" className="text-gray-800 hover:text-orange-500">Templates</Link>
            <Link href="/about" className="text-gray-800 hover:text-orange-500">About Us</Link>
            <Link href="/sign-in" className="text-gray-800 hover:text-orange-500">Log In</Link>
            <Link href="/sign-up" className="text-gray-800 hover:text-orange-500">Sign Up</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
