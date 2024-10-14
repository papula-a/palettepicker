import Image from "next/image";
import Link from "next/link";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <nav className="flex justify-between items-center px-6 py-2 bg-white shadow-md rounded-2xl">
      {/* Logo */}
      <div className="flex items-center">
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
      <Navbar />

      {/* User Profile Icon */}
      <div>
        <Image
          src="/static/account.png"
          width={24}
          height={24}
          alt="Profile"
          className="h-10 w-10 rounded-full"
        />
      </div>
    </nav>
  );
};

export default Header;
