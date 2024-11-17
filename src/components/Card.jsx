import Image from "next/image";
import Link from "next/link";

const Card = ({
  title,
  description,
  illustrationSrc,
  illustrationAltText,
  imageSrc,
  imageAltText,
  linkHref = "/",
  position = "left", // Default to "left" if no position is provided
}) => {
  return (
    <div
      className={`flex flex-col md:flex-row items-center gap-6 ${
        position === "right" ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Left or Right part: Card Component */}
      <div className="flex-1">
        <div className="bg-white rounded-lg p-8 max-w-md mx-auto">
          <div className="flex justify-center mb-4">
            <Image
              src={illustrationSrc}
              height={200} // Increased height
              width={200} // Increased width
              alt={illustrationAltText}
              className="w-32 h-32" // Adjusted class for the image
              priority
            />
          </div>
          <h2 className="text-center text-xl font-semibold mb-2">{title}</h2>
          <p className="text-center text-gray-600 mb-4">{description}</p>
          <div className="flex justify-center">
            <Link href={linkHref}>
              <button className="bg-[#d5adcc] shadow-md text-white font-semibold py-2 px-6 rounded-full transition-transform transform hover:scale-105">
                TRY OUT
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Right or Left part: Website Preview */}
      <div className="flex-1">
        <div className="h-full w-full bg-gray-100 rounded-lg overflow-hidden shadow-md p-2">
          <Image
            src={imageSrc} // Example preview image
            alt={imageAltText}
            width={200}
            height={100}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
