import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative bg-[#8C6D8F] text-white">
      {" "}
      {/* Darker lavender */}
      {/* Decorative Wave SVG */}
      <div className="absolute -top-5 w-full">
        <svg
          viewBox="0 0 1440 320"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <path
            fill="#8C6D8F"
            fillOpacity="1"
            d="M0,160L60,176C120,192,240,224,360,224C480,224,600,192,720,170.7C840,149,960,139,1080,154.7C1200,171,1320,213,1380,234.7L1440,256V320H1380C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          />
        </svg>
      </div>
      <div className="px-6 pt-16 pb-8 relative z-10">
        <div className="container mx-auto flex flex-col md:flex-row justify-between">
          {/* Logo and description */}
          <div className="mb-6 md:mb-0 flex items-center flex-col md:items-start">
            <Image
              src="/static/logo.png"
              alt="PalettePicker Logo"
              width={150}
              height={150}
            />
          </div>

          <div className="mb-6 md:mb-0 flex items-center flex-col md:items-start">
            <h5 className="text-lg font-bold mb-3 text-[#ebb308]">
              PalettePicker
            </h5>{" "}
            {/* Warm golden color */}
            <p className="text-sm text-center md:text-left">
              Color your vision, Transform your website
            </p>
          </div>

          {/* Contact Info */}
          <div className="mb-6 md:mb-0 flex items-center flex-col md:items-start">
            <h5 className="text-lg font-bold mb-3 text-[#ebb308]">Contact</h5>{" "}
            {/* Warm golden color */}
            <div className="text-sm text-center md:text-left">
              <div className="m-2">📧 example@gmail.com</div>
              <div>📞 0770 123 4567</div>
            </div>
          </div>

          {/* Links */}
          <div className="flex items-center flex-col md:items-start">
            <h5 className="text-lg font-bold mb-3 text-[#ebb308]">Links</h5>{" "}
            {/* Warm golden color */}
            <ul className="text-center md:text-left">
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
      <div className="bg-[#5B3A70] p-3 text-center text-xs text-white">
        {" "}
        {/* Lighter purple for bottom bar */}© 2024 PalettePicker. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
