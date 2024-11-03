import Image from "next/image";

export default function AboutUs() {
  return (
    <div>
      <div className="flex items-center justify-center w-full h-64 bg-gradient-to-r from-[#3F1B62] via-[#A881A7] to-pink-200">
        <h1 className="text-7xl font-bold text-white">
          About <span className="text-yellow-400">Us</span>
        </h1>
      </div>

      <div className="bg-white border p-3">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="flex justify-center">
              <div className="mb-12">
                <p className="mt-8 text-3xl text-black max-w-2xl text-justify">
                  We want to{" "}
                  <span className="font-semibold text-yellow-500 ">
                    simplify the process
                  </span>{" "}
                  of web design by offering intuitive tools that allow you to
                  apply stunning color schemes effortlessly.
                </p>
                <Image
                  src="/static/svg/blob-1.svg"
                  width={24}
                  height={24}
                  alt="Image 2"
                  className="w-full h-auto"
                />
              </div>
            </div>

            <div className="flex items-center my-4">
              <div className="relative p-8 bg-white rounded-xl shadow-lg max-w-lg">
                <div className="flex justify-center">
                  <Image
                    src="/static/svg/blob-3.svg"
                    width={24}
                    height={24}
                    alt="Image 2"
                    className="w-full h-auto"
                  />
                </div>
                <div className="absolute inset-0 opacity-10 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl"></div>
                <h2 className="text-2xl font-bold mb-4 text-gray-800">
                  Our Mission
                </h2>
                <p className="text-gray-700">
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
    </div>
  );
}
