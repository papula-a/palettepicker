"use client"; // Required for Client Component 

import FloatingColorPicker from "@/components/FloatingColorPicker";
import Image from "next/image";
import { useState } from "react";

const Ecommerce = () => {
  const [colors, setColors] = useState({
    primaryColor: "#333333",
    secondaryColor: "#A8D5BA",
    bgColor: "#F4F4F9",
    tertiaryColor: "#ebebf0"
  });
  

  const products = [
    { id: 1, name: "Product 1", price: "$99.99", image: "/static/chair.png" },
    { id: 2, name: "Product 2", price: "$129.99", image: "/static/lamp.png" },
    { id: 3, name: "Product 3", price: "$89.99", image: "/static/table.png" },
    { id: 4, name: "Product 4", price: "$149.99", image: "/static/sink.png" },
  ];

  const collections = [
    { id: 1, name: "Living Room", image: "/static/living-room.png" },
    { id: 2, name: "Bedroom", image: "/static/bedroom.png" },
    { id: 3, name: "Outdoor", image: "/static/outdoor.png" },
  ];

  return (
    <div
      className="min-h-screen flex flex-col items-center"
      style={{ backgroundColor: colors.bgColor }}
    >
      {/* Hero Section */}
      <section
        className="hero-section w-full bg-cover bg-center py-28 flex items-center justify-center"
        style={{
          backgroundImage: "url('/static/hero-image.png')",
          backgroundColor: colors.bgColor,
        }}
      >
        <div
          className="p-12 rounded-lg shadow-lg max-w-2xl text-center"
          style={{ backgroundColor: colors.tertiaryColor }}
        >
          <h1
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ color: colors.primaryColor }}
          >
            Elevate Your Living Space
          </h1>
          <p className="mb-8 text-lg" style={{ color: colors.primaryColor }}>
            Discover our curated selection of contemporary home decor.
          </p>
          <button
            className="px-6 py-3 text-base font-semibold rounded shadow-md hover:shadow-lg hover:bg-opacity-80 transition"
            style={{
              backgroundColor: colors.secondaryColor,
              color: "#ffffff",
            }}
          >
            Shop the Collection
          </button>
        </div>
      </section>

      {/* Wave Divider */}
      <div className="w-full overflow-hidden">
        <svg className="wave-divider" viewBox="0 0 1440 320">
          <path
            fill={colors.tertiaryColor}
            fillOpacity="1"
            d="M0,256L80,240C160,224,320,192,480,176C640,160,800,160,960,176C1120,192,1280,224,1360,240L1440,256L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          ></path>
        </svg>
      </div>

      {/* Featured Products Section */}
      <section
        className="py-16 w-full px-4"
        style={{
          background: `linear-gradient(135deg, ${colors.tertiaryColor}, ${colors.bgColor})`,
        }}
      >
        <div className="container mx-auto text-center">
          <h2
            className="text-3xl font-semibold mb-10"
            style={{ color: colors.primaryColor }}
          >
            Featured Products
          </h2>
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {products.map((product) => (
              <div
                key={product.id}
                className="p-6 rounded-md shadow-lg transform transition hover:scale-105"
                style={{
                  backgroundColor: colors.tertiaryColor,
                }}
              >
                <Image
                  src={product.image}
                  width={300}
                  height={300}
                  alt={product.name}
                  className="w-full h-56 object-cover rounded mb-4"
                />
                <h3
                  className="text-lg font-medium mb-1"
                  style={{ color: colors.primaryColor }}
                >
                  {product.name}
                </h3>
                <p className="mb-4" style={{ color: colors.primaryColor }}>
                  {product.price}
                </p>
                <button
                  className="px-4 py-2 w-full rounded transition hover:bg-opacity-90"
                  style={{
                    backgroundColor: colors.secondaryColor,
                    color: "#ffffff",
                  }}
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Explore Our Collections Section */}
      <section
        className="py-16 w-full px-4"
        style={{
          backgroundColor: colors.tertiaryColor,
        }}
      >
        <div className="container mx-auto text-center">
          <h2
            className="text-3xl font-semibold mb-10"
            style={{ color: colors.primaryColor }}
          >
            Explore Our Collections
          </h2>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {collections.map((collection) => (
              <div
                key={collection.id}
                className="relative overflow-hidden transform transition hover:scale-105"
              >
                <Image
                  src={collection.image}
                  width={300}
                  height={300}
                  alt={collection.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-25">
                  <h3 className="text-white text-2xl font-semibold">
                    {collection.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Floating Color Picker */}
      <FloatingColorPicker colors={colors} setColors={setColors} />
    </div>
  );
};

export default Ecommerce;
