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
  const IconComponent = ICON_MAP[title] || Layout;

  return (
    <div
      className={`flex flex-col md:flex-row items-center gap-12 ${
        position === "right" ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Left or Right part: Icon and Text */}
      <div className="flex-1 text-center">
        <div className="flex justify-center mb-4">
          <IconComponent
            size={128}
            className="text-[#d5adcc]"
            strokeWidth={1.5}
          />
        </div>
        <h2 className="text-2xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-600 mb-6">{description}</p>
        <Link href={linkHref}>
          <button className="bg-[#d5adcc] text-white font-semibold py-2 px-8 rounded-full transition-transform transform hover:scale-105 hover:shadow-lg">
            TRY OUT
          </button>
        </Link>
      </div>
      {/* Right or Left part: Website Preview */}
      <div className="flex-1">
        <Image
          src={imageSrc || "/static/templates/default-placeholder.png"}
          alt={imageAltText || "Template Preview"}
          layout="responsive"
          width={16} // Aspect ratio
          height={9}
          quality={90}
          className="rounded-lg object-cover"
        />
      </div>
    </div>
  );
};

export default Card;
