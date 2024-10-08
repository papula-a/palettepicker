import Link from "next/link";

const Navigation = () => {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white shadow-md">
      {/* Logo */}
      <div className="flex items-center">
        <img
          src="/path-to-logo.png"
          alt="PalettePicker Logo"
          className="h-10 w-10"
        />
      </div>

      {/* Links */}
      <div className="hidden md:flex space-x-8">
        <Link href="/" className="text-black hover:text-gray-600">
          Home
        </Link>
        <Link href="/templates" className="text-black hover:text-gray-600">
          Templates
        </Link>
        <Link href="/about-us" className="text-black hover:text-gray-600">
          About Us
        </Link>
      </div>

      {/* User Profile Icon */}
      <div>
        <img
          src="/path-to-profile-icon.png"
          alt="Profile"
          className="h-10 w-10 rounded-full"
        />
      </div>
    </nav>
  );
};

export default Navigation;
