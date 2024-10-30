import Image from "next/image";
import Link from "next/link";

const Card = ({ title, description, imageSrc, altText, linkHref = "/" }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-8 max-w-md mx-auto"> {/* Increased padding and max width */}
      <div className="flex justify-center mb-4">
        <Image
          src={imageSrc}
          height={200} // Increased height
          width={200}  // Increased width
          alt={altText}
          className="w-32 h-32" // Adjusted class for the image
          priority
        />
      </div>
      <h2 className="text-center text-xl font-semibold mb-2">{title}</h2> {/* Increased font size */}
      <p className="text-center text-gray-600 mb-4">{description}</p>
      <div className="flex justify-center">
        <Link href={linkHref}>
          <button className="bg-orange-500 text-white py-2 px-8 rounded-full hover:bg-orange-600"> {/* Increased padding */}
            TRY OUT
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
