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

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import Icons from "@/components/Icons";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { FaUser } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const { isAuthenticated, isLoading, user } = useKindeBrowserClient();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-6 py-2 bg-white shadow-md">
      {/* Logo */}
      <div className="flex justify-start w-1/5">
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
      <div className="hidden md:flex justify-center w-3/5">
        <Navbar />
      </div>

      {/* User Profile Icon and Burger Menu */}
      <div className="flex items-center justify-end space-x-4 w-1/5">
        <div className="hidden md:flex space-x-4">
          {!isAuthenticated ? (
            <>
              <Button variant="outline" disabled={isLoading}>
                {isLoading ? (
                  <span className="flex items-center">
                    <Icons.spinner className="animate-spin h-4 w-4 text-gray-500" />
                  </span>
                ) : (
                  <LoginLink>Sign in</LoginLink>
                )}
              </Button>

              <span className="h-6 w-px bg-gray-200" aria-hidden="true" />

              <Button variant="outline" disabled={isLoading}>
                {isLoading ? (
                  <span className="flex items-center">
                    <Icons.spinner className="animate-spin h-4 w-4 text-gray-500" />
                  </span>
                ) : (
                  <RegisterLink>Sign up</RegisterLink>
                )}
              </Button>
            </>
          ) : (
            <div className="relative">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Avatar className="cursor-pointer">
                    <AvatarImage src={user?.picture} alt={user?.given_name} />
                    <AvatarFallback>PP</AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="absolute right-0 mt-2 w-40">
                  <DropdownMenuLabel className="text-yellow-500 text-lg flex items-center space-x-2">
                    <FaUser className="text-gray-600" />
                    <span>
                      {user?.given_name} {user?.family_name}
                    </span>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem>
                      <Link href="/profile" className="cursor-pointer">
                        Profile
                      </Link>
                      <DropdownMenuShortcut className="text-yellow-500">
                        ⇧⌘P
                      </DropdownMenuShortcut>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem>
                      <LogoutLink>Log out</LogoutLink>
                      <DropdownMenuShortcut className="text-yellow-500">
                        ⇧⌘Q
                      </DropdownMenuShortcut>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
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
            {!isAuthenticated ? (
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
