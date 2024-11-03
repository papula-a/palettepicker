import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#A881A7] text-white pt-8">
      {" "}
      {/* Added top padding here */}
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
            <h5 className="text-lg font-bold mb-3 text-[#eab308]">
              PalettePicker
            </h5>{" "}
            {/* Heading color */}
            <p className="text-sm mt-2">
              Color your vision, Transform your website
            </p>{" "}
            {/* Additional margin for positioning */}
          </div>

          {/* Contact Info */}
          <div className="mb-6 md:mb-0 flex flex-col items-center md:items-start">
            <h5 className="text-lg font-bold mb-3 text-[#eab308]">Contact</h5>{" "}
            {/* Heading color */}
            <div className="text-sm mt-2">
              <div className="m-2">📧 example@gmail.com</div>
              <div>📞 0770 123 4567</div>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-col items-center md:items-start">
            <h5 className="text-lg font-bold mb-3 text-[#eab308]">Links</h5>{" "}
            {/* Heading color */}
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
      <div className="bg-[#3F1B62] p-3 text-center text-xs">
        © 2024 PalettePicker. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
