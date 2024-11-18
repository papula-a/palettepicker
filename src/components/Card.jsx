import {
  BookOpen,
  Briefcase,
  Layout,
  Palette,
  ShoppingBag,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Icon mapping object
const ICON_MAP = {
  "E-COMMERCE WEBSITE": ShoppingBag,
  "BLOG WEBSITE": BookOpen,
  "SHOWCASE PAGE": Palette,
  "LANDING PAGE": Layout,
  "PORTFOLIO WEBSITE": Briefcase,
};

const Card = ({
  title,
  description,
  imageSrc,
  imageAltText,
  linkHref = "/",
  position = "left",
}) => {
  // Get the corresponding icon component based on the title
  const IconComponent = ICON_MAP[title] || Layout;

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
            <IconComponent
              size={128} // Equivalent to h-32 w-32
              className="text-[#d5adcc]" // Matching your button color
              strokeWidth={1.5} // Slightly thinner lines for better appearance at large sizes
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
            src={imageSrc}
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
