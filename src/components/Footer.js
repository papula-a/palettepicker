const Footer = () => {
  return (
    <footer className="bg-purple-700 text-white px-6 py-8 mt-12">
      <div className="container mx-auto flex flex-col md:flex-row justify-between">
        {/* Logo and description */}
        <div className="mb-6 md:mb-0">
          <img
            src="/path-to-logo.png"
            alt="PalettePicker Logo"
            className="h-12 w-12 mb-4"
          />
          <p className="text-sm">Color your vision, Transform your website</p>
        </div>

        {/* Contact Info */}
        <div className="mb-6 md:mb-0">
          <h5 className="text-lg font-bold mb-3">Contact</h5>
          <p className="text-sm">
            📧 example@gmail.com <br />
            📞 0770 123 4567
          </p>
        </div>

        {/* Links */}
        <div>
          <h5 className="text-lg font-bold mb-3">Links</h5>
          <ul>
            <li>
              <a href="/" className="text-sm hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="/templates" className="text-sm hover:underline">
                Templates
              </a>
            </li>
            <li>
              <a href="/about-us" className="text-sm hover:underline">
                About Us
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-8 text-center text-xs">
        © 2024 PalettePicker. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
