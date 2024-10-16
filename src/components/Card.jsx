import Image from "next/image";

const Card = ({ title, description, imageSrc, altText }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 max-w-xs mx-auto">
      <div className="flex justify-center mb-4">
        <Image
          src={imageSrc}
          height={24}
          width={24}
          alt={altText}
          className="w-24 h-24"
        />
      </div>
      <h2 className="text-center text-lg font-semibold mb-2">{title}</h2>
      <p className="text-center text-gray-600 mb-4">{description}</p>
      <div className="flex justify-center">
        <button className="bg-orange-500 text-white py-2 px-6 rounded-full hover:bg-orange-600">
          TRY OUT
        </button>
      </div>
    </div>
  );
};

export default Card;
