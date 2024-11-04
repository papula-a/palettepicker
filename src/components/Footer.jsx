import Image from "next/image";
import Link from "next/link"; // Make sure this is imported

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-400 to-pink-400 text-white pt-8">
      <div className="px-6 py-6">
        <div className="container mx-auto flex flex-col md:flex-row justify-between">
          {/* Logo and description */}
          <div className="mb-6 md:mb-0 flex flex-col items-center md:items-start">
            <Image
              src="/static/logo.png"
              alt="PalettePicker Logo"
              width={150}
              height={150}
            />
          </div>

          <div className="mb-6 md:mb-0 flex flex-col items-center md:items-start">
            <h5 className="text-lg font-bold mb-3 text-orange-200">
              PalettePicker
            </h5>
            <p className="text-sm mt-2">
              Color your vision, Transform your website
            </p>
          </div>

          {/* Contact Info */}
          <div className="mb-6 md:mb-0 flex flex-col items-center md:items-start">
            <h5 className="text-lg font-bold mb-3 text-orange-200">Contact</h5>
            <div className="text-sm mt-2">
              <div className="m-2">📧 example@gmail.com</div>
              <div>📞 0770 123 4567</div>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-col items-center md:items-start">
            <h5 className="text-lg font-bold mb-3 text-orange-200">Links</h5>
            <ul className="mt-2">
              <li>
                <Link href="/" className="text-sm hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/templates" className="text-sm hover:underline">
                  Templates
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="text-sm hover:underline">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-purple-800 p-3 text-center text-xs">
        © 2024 PalettePicker. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
