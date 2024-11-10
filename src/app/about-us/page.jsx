import Image from "next/image";

export default function AboutUs() {
  return (
    <div>
      {/* Hero Section */}
      <div className="flex items-center justify-center w-full h-64 bg-gradient-to-r from-purple-500 to-pink-300">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
          About <span className="text-yellow-400">Us</span>
        </h1>
      </div>

      {/* Mission Section */}
      <div className="bg-white border-t border-gray-200 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="flex justify-center">
              <div className="mb-12 lg:mb-0">
                <p className="text-base md:text-lg lg:text-xl text-black max-w-2xl text-justify">
                  We want to{" "}
                  <span className="font-semibold text-yellow-500">
                    simplify the process
                  </span>{" "}
                  of web design by offering intuitive tools that allow you to
                  apply stunning color schemes effortlessly.
                </p>
                <Image
                  src="/static/svg/blob-1.svg"
                  width={24}
                  height={24}
                  alt="Decorative Blob"
                  className="w-full h-auto mt-4 hidden lg:block"
                />
              </div>
            </div>

            <div className="flex items-center my-4">
              <div className="relative p-4 md:p-6 bg-white rounded-xl shadow-lg max-w-lg w-full mx-auto">
                <div className="flex justify-center">
                  <Image
                    src="/static/svg/blob-3.svg"
                    width={24}
                    height={24}
                    alt="Decorative Blob"
                    className="w-full h-auto"
                  />
                </div>
                <div className="absolute inset-0 opacity-10 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl"></div>
                <h2 className="text-lg md:text-xl font-bold mb-4 text-gray-800">
                  Our Mission
                </h2>
                <p className="text-xs md:text-sm text-gray-700">
                  At PalettePicker, our mission is to empower designers,
                  developers, and creatives by simplifying the process of
                  choosing and applying color schemes. We strive to make web
                  design accessible and enjoyable for everyone, providing
                  intuitive tools to create visually stunning and cohesive
                  websites. Through our innovative platform, we aim to inspire
                  creativity and enhance the digital experience for users across
                  diverse industries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Core Values Section */}
      <div className="bg-gradient-to-br from-yellow-100 to-pink-100 py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-semibold mb-8">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-bold mb-2 text-yellow-500">
                Innovation
              </h3>
              <p className="text-sm text-gray-700">
                We constantly strive to innovate and improve our tools, keeping
                up with the latest in design technology to serve our users
                better.
              </p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-bold mb-2 text-yellow-500">
                Creativity
              </h3>
              <p className="text-sm text-gray-700">
                We believe in unleashing creativity by providing tools that are
                simple to use and powerful in design potential.
              </p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-bold mb-2 text-yellow-500">
                Accessibility
              </h3>
              <p className="text-sm text-gray-700">
                Making design accessible to everyone, regardless of their
                background or experience, is a core part of our mission.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Meet the Team Section */}
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-semibold mb-8">Meet the Creators</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Creator 1 - Papula Azad */}
            <div className="flex flex-col items-center">
              <Image
                src="/static/team/papula.jpg" // Replace with actual image path
                alt="Papula Azad"
                width={120}
                height={120}
                className="rounded-full mb-4"
              />
              <h3 className="text-lg font-bold">Papula Azad</h3>
              <p className="text-gray-500">UI/UX Designer & Developer</p>
            </div>

            {/* Creator 2 - Diya Hushyar */}
            <div className="flex flex-col items-center">
              <Image
                src="/static/team/diya.jpg" // Replace with actual image path
                alt="Diya Hushyar"
                width={120}
                height={120}
                className="rounded-full mb-4"
              />
              <h3 className="text-lg font-bold">Diya Hushyar</h3>
              <p className="text-gray-500">Developer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
