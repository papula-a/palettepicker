"use client"; // Required for Client Component

import Wrapper from "@/components/Wrapper";
import { useState } from "react";
import ColorPicker from "@/components/ColorPicker";

const Ecommerce = () => {
  const [colors, setColors] = useState({
    primaryColor: "#050315",
    secondaryColor: "#2f27ce",
    bgColor: "#fbfbfe",
  });

  const handleColorChange = (newColors) => {
    setColors(newColors);
  };

  return (
    <Wrapper
      className="min-h-screen"
      style={{
        backgroundColor: colors.bgColor, // Apply background color to Wrapper
      }}
    >
      {/* Hero Section */}
      <section
        className="hero-section bg-cover bg-center text-white py-20 px-4"
        style={{
          backgroundImage: "url('/path-to-your-hero-image.jpg')",
          backgroundColor: colors.secondaryColor, // Apply secondary color to Hero section
        }}
      >
        <div className="max-w-2xl mx-auto text-center">
          <h1
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ color: colors.primaryColor }}
          >
            Elevate Your Home Style
          </h1>
          <p className="mb-6 text-lg">Discover our exclusive collection of modern home decor.</p>
          <button
            className="py-2 px-6 rounded"
            style={{
              backgroundColor: colors.secondaryColor,
              color: "#fff",
            }}
          >
            Shop Now
          </button>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2
            className="text-3xl font-bold text-center mb-10"
            style={{ color: colors.primaryColor }}
          >
            Featured Products
          </h2>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {/* Product Card - Repeat or Map */}
            <div className="bg-white p-4 rounded-lg shadow">
              <img src="/path-to-your-product-image.jpg" alt="Product" className="w-full h-48 object-cover mb-4" />
              <h3 className="text-lg font-semibold mb-2" style={{ color: colors.primaryColor }}>Product Name</h3>
              <p className="text-sm text-gray-600 mb-2">$99.99</p>
              <button
                className="py-1 px-4 rounded"
                style={{
                  backgroundColor: colors.secondaryColor,
                  color: "#fff",
                }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Collections Section */}
      <section className="py-16 bg-gray-100 px-4">
        <div className="container mx-auto">
          <h2
            className="text-3xl font-bold text-center mb-10"
            style={{ color: colors.primaryColor }}
          >
            Explore Our Collections
          </h2>
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {/* Collection Cards */}
            <div className="relative overflow-hidden rounded-lg shadow-md">
              <img src="/path-to-collection-image.jpg" alt="Collection" className="w-full h-full object-cover" />
              <div
                className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center"
                style={{ backgroundColor: colors.secondaryColor }}
              >
                <h3 className="text-white text-2xl font-semibold">Living Room</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-white py-10 px-4">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} Your Brand. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="#" className="text-gray-400 hover:text-white">Facebook</a>
            <a href="#" className="text-gray-400 hover:text-white">Instagram</a>
            <a href="#" className="text-gray-400 hover:text-white">Twitter</a>
          </div>
        </div>
      </footer>

      {/* Color Picker at the Bottom */}
      <ColorPicker onColorChange={handleColorChange} />
    </Wrapper>
  );
};

export default Ecommerce;
