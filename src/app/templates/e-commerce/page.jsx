"use client";
import FloatingColorPicker from "@/components/FloatingColorPicker";
import Image from "next/image";
import { useEffect, useState } from "react";

const DEFAULT_COLORS = {
  primaryColor: "#1B4332", // Forest green
  secondaryColor: "#FF9F1C", // Warm orange
  bgColor: "#F8F9F3", // Natural white
  tertiaryColor: "#EFF1E8", // Sage white
};

const Ecommerce = () => {
  const [colors, setColors] = useState(DEFAULT_COLORS);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = window.scrollY;
      setScrollProgress((currentProgress / totalScroll) * 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <div className="min-h-screen font-sans relative overflow-hidden">
      {/* Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 z-50 transition-all duration-300"
        style={{
          width: `${scrollProgress}%`,
          backgroundColor: colors.secondaryColor,
        }}
      />

      {/* Background with animated gradient */}
      <div
        className="absolute inset-0 transition-all duration-500 z-[-1]"
        style={{
          background: `linear-gradient(135deg, ${colors.bgColor} 0%, ${colors.primaryColor}40 100%)`,
        }}
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 py-20">
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1
            className="text-7xl font-extrabold mb-6 tracking-tight"
            style={{ color: colors.primaryColor }}
          >
            Elevate Your Living Space
          </h1>
          <p
            className="text-2xl mb-8 leading-relaxed"
            style={{ color: colors.primaryColor }}
          >
            Discover our curated selection of contemporary home decor.
          </p>
          <div className="flex gap-4 justify-center">
            <button
              className="px-8 py-4 rounded-lg text-white font-semibold transform hover:scale-105 transition-all duration-300"
              style={{ backgroundColor: colors.secondaryColor }}
            >
              Shop the Collection
            </button>
            <button
              className="px-8 py-4 rounded-lg font-semibold transform hover:scale-105 transition-all duration-300"
              style={{
                backgroundColor: colors.tertiaryColor,
                color: colors.primaryColor,
              }}
            >
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2
            className="text-5xl font-bold text-center mb-16"
            style={{ color: colors.primaryColor }}
          >
            Featured Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="p-8 rounded-xl transform hover:scale-105 transition-all duration-300"
                style={{ backgroundColor: colors.tertiaryColor }}
              >
                <Image
                  src={product.image}
                  width={300}
                  height={300}
                  alt={product.name}
                  className="w-full h-56 object-cover rounded mb-6"
                />
                <h3
                  className="text-xl font-semibold mb-4 text-center"
                  style={{ color: colors.primaryColor }}
                >
                  {product.name}
                </h3>
                <p
                  className="text-center text-lg mb-6"
                  style={{ color: colors.primaryColor }}
                >
                  {product.price}
                </p>
                <div className="flex justify-center">
                  <button
                    className="px-6 py-3 rounded-lg text-white font-semibold transform hover:scale-105 transition-all duration-300"
                    style={{ backgroundColor: colors.secondaryColor }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collections Section */}
      <section className="relative py-20 px-4">
        <h2
          className="text-5xl font-bold text-center mb-16"
          style={{ color: colors.primaryColor }}
        >
          Explore Our Collections
        </h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {collections.map((collection) => (
            <div
              key={collection.id}
              className="relative overflow-hidden rounded-xl transform hover:scale-105 transition-all duration-300"
            >
              <Image
                src={collection.image}
                width={400}
                height={300}
                alt={collection.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-25">
                <h3
                  className="text-white text-3xl font-semibold"
                  style={{ color: colors.bgColor }}
                >
                  {collection.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Floating Color Picker */}
      <FloatingColorPicker
        colors={colors}
        setColors={setColors}
        defaultColors={DEFAULT_COLORS}
        className="fixed bottom-4 right-4 z-50"
      />

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-20px) scale(1.05);
          }
        }

        .animate-float {
          animation: float 20s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default Ecommerce;
