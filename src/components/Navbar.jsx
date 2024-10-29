import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex space-x-8 text-center">
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
  );
};

export default Navbar;
