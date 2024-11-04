"use client";

import { Button } from "@/components/ui/button";
import {
  LoginLink,
  LogoutLink,
  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import Navbar from "./Navbar";

const Header = ({ isUserAuthenticated, user }) => {
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
        <div className="hidden md:flex space-x-4">
          {!isUserAuthenticated ? (
            <>
              <Button variant="outline">
                <LoginLink postLoginRedirectURL="/">Sign in</LoginLink>
              </Button>
              <Button variant="outline">
                <RegisterLink postLoginRedirectURL="/">Sign up</RegisterLink>
              </Button>
            </>
          ) : (
            <>
              <Link href="/profile">
                {user?.picture ? (
                  <Image
                    src={user.picture}
                    alt="Profile picture"
                    width={32}
                    height={32}
                    className="rounded-full cursor-pointer"
                  />
                ) : (
                  <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center cursor-pointer">
                    <span className="text-gray-600 text-sm">
                      {user?.given_name?.[0] || user?.email?.[0]?.toUpperCase()}
                    </span>
                  </div>
                )}
              </Link>
              <Button variant="outline">
                <LogoutLink>Log out</LogoutLink>
              </Button>
            </>
          )}
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
            <Link href="/" className="text-gray-800 hover:text-pink-500">
              Home
            </Link>
            <Link
              href="/templates"
              className="text-gray-800 hover:text-pink-500"
            >
              Templates
            </Link>
            <Link href="/about" className="text-gray-800 hover:text-pink-500">
              About Us
            </Link>
            {!isUserAuthenticated ? (
              <>
                <Link
                  href="/sign-in"
                  className="text-gray-800 hover:text-pink-500"
                >
                  Log In
                </Link>
                <Link
                  href="/sign-up"
                  className="text-gray-800 hover:text-pink-500"
                >
                  Sign Up
                </Link>
              </>
            ) : (
              <Link
                href="/profile"
                className="text-gray-800 hover:text-pink-500"
              >
                Profile
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
