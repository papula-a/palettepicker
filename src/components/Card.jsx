import Image from "next/image";

const Card = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 max-w-xs mx-auto">
      <div className="flex justify-center mb-4">
        <Image
          src="/static/logo.png"
          height={24}
          width={24}
          alt="E-commerce"
          className="w-24 h-24"
        />
      </div>
      <h2 className="text-center text-lg font-semibold mb-2">
        E-COMMERCE WEBSITE
      </h2>
      <p className="text-center text-gray-600 mb-4">
        Ecommerce websites are online platforms that facilitate the buying and
        selling of goods and services over the internet.
      </p>
      <div className="flex justify-center">
        <button className="bg-orange-500 text-white py-2 px-6 rounded-full hover:bg-orange-600">
          TRY OUT
        </button>
      </div>
    </div>
  );
};

export default Card;
