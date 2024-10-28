"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./Navbar";
import { buttonVariants } from "./ui/button";
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
      <div className="hidden md:flex flex-1 justify-center">
        <Navbar />
      </div>

      {/* User Profile Icon and Burger Menu */}
      <div className="flex items-center space-x-4">
        {/* User Links for larger screens */}
        <div className="hidden md:flex space-x-4">
          <Link
            href="/sign-in"
            className={buttonVariants({ variant: "outline" })}
          >
            Sign in
          </Link>
          <Link
            href="/sign-up"
            className={buttonVariants({ variant: "outline" })}
          >
            Sign up
          </Link>
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
          <Navbar />
          <div className="flex flex-col items-center space-y-4 py-4">
            <Link
              href="/sign-in"
              className={buttonVariants({ variant: "outline" })}
            >
              Sign in
            </Link>
            <Link
              href="/sign-up"
              className={buttonVariants({ variant: "outline" })}
            >
              Sign up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
