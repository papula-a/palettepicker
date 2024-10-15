import Image from "next/image";
import Link from "next/link";
import Navbar from "./Navbar";
import { buttonVariants } from "./ui/button";

const Header = () => {
  return (
    <nav className="flex justify-between items-center px-6 py-2 bg-white shadow-md">
      {/* Logo */}
      <div className="w-2/12 flex justify-start">
        <Link href="/">
          <Image
            src="/static/logo.png"
            width={24}
            height={24}
            alt="PalettePicker Logo"
            className="h-10 w-10"
          />
        </Link>
      </div>

      {/* Navbar */}
      <div className="w-8/12 flex justify-center space-x-8">
        <Navbar />
      </div>

      {/* User Profile Icon */}
      <div className="w-2/12 flex justify-end pr-4 space-x-4">
        <Link
          href="/sign-in"
          className={buttonVariants({ variant: "outline" })}>
          Sign in
        </Link>{" "}
        <Link
          href="/sign-up"
          className={buttonVariants({ variant: "outline" })}>
          Sign up
        </Link>
        {/* <Image
          src="/static/account.png"
          width={24}
          height={24}
          alt="Profile"
          className="h-10 w-10 rounded-full"
        /> */}
      </div>
    </nav>
  );
};

export default Header;
