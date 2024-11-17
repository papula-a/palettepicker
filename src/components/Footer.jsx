import Image from "next/image";
import Link from "next/link";
import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaPhone,
  FaTwitter,
} from "react-icons/fa"; // Importing icons

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-400 to-pink-400 text-white pt-8">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          {/* Logo and description */}
          <div className="mb-6 md:mb-0 flex flex-col items-center md:items-start text-center md:text-left">
            <Image
              src="/static/logo.png"
              alt="PalettePicker Logo"
              width={150}
              height={150}
            />
            <h5 className="text-xl font-bold mt-4 text-orange-300">
              PalettePicker
            </h5>
            <p className="text-sm mt-2">
              Color your vision, Transform your website
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col items-center md:items-start">
            <h5 className="text-lg font-bold mb-3 text-orange-300">Links</h5>
            <ul className="mt-2 space-y-2">
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

          {/* Contact Info */}
          <div className="mb-6 md:mb-0 flex flex-col items-center md:items-start">
            <h5 className="text-lg font-bold mb-3 text-orange-300">Contact</h5>
            <div className="flex items-center space-x-2 mb-3">
              <FaEnvelope className="text-orange-300" />
              <Link href="mailto:example@gmail.com" className="text-sm">
                example@gmail.com
              </Link>
            </div>
            <div className="flex items-center space-x-2">
              <FaPhone className="text-orange-300" />
              <Link href="tel:+9647701234567" className="text-sm">
                +964 770 123 4567
              </Link>
            </div>
            {/* Social Media Links */}
            <div className="mt-4 flex space-x-10">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:text-yellow-300"
              >
                <FaFacebookF size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:text-yellow-300"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:text-yellow-300"
              >
                <FaInstagram size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-purple-900 p-4 text-center text-xs">
        © 2024 PalettePicker. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
