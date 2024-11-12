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

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Header = ({ isUserAuthenticated, user }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

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

              <span className="h-6 w-px bg-gray-200" aria-hidden="true" />

              <Button variant="outline">
                <RegisterLink postLoginRedirectURL="/">Sign up</RegisterLink>
              </Button>
            </>
          ) : (
            <div className="relative">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Avatar className="cursor-pointer">
                    <AvatarImage src={user.picture} alt={user.given_name} />
                    <AvatarFallback>PP</AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="absolute right-0 mt-2 w-40">
                  <DropdownMenuLabel className="text-[#C084FC] text-lg">
                    {user.given_name} {user.family_name}
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem>
                      {/* <Icons.user className="mr-2 h-4 w-4" /> */}
                      <Link href="/user/profile" className="cursor-pointer">
                        Profile
                      </Link>
                      <DropdownMenuShortcut className="text-[#C084FC]">
                        ⇧⌘P
                      </DropdownMenuShortcut>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem>
                      {/* <Icons.archive className="mr-2 h-4 w-4" /> */}
                      <Link href="/user/palettes" className="cursor-pointer">
                        My Palettes
                      </Link>
                      <DropdownMenuShortcut className="text-[#C084FC]">
                        ⌘E
                      </DropdownMenuShortcut>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem>
                      {/* <Icons.logout className="mr-2 h-4 w-4" /> */}
                      <LogoutLink>Log out</LogoutLink>
                      <DropdownMenuShortcut className="text-[#C084FC]">
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
