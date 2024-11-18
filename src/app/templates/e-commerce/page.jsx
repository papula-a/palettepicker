"use client";
import FloatingColorPicker from "@/components/FloatingColorPicker";
import Image from "next/image";
import {
  ArrowRight,
  Award,
  Check,
  Gift,
  Sparkles,
  Star,
  TrendingUp,
  Users,
} from "lucide-react";
import { useEffect, useState } from "react";

const DEFAULT_COLORS = {
  primaryColor: "#1B4332", // Forest green
  secondaryColor: "#FF9F1C", // Warm orange
  bgColor: "#F8F9F3", // Natural white
  tertiaryColor: "#EFF1E8", // Sage white
};

const Ecommerce = () => {
  const [colors, setColors] = useState(DEFAULT_COLORS);
  const [feedback, setFeedback] = useState(""); // AI feedback state
  const [redirectUrl, setRedirectUrl] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setRedirectUrl(encodeURIComponent(window.location.href));
    }
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

  const validateColorScheme = async () => {
    const response = await fetch("/api/validate-color", {
      method: "POST",
      body: JSON.stringify({ colors }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    setFeedback(data.feedback); // Set feedback to display to the user
  };

  return (
    <div
      className="min-h-screen flex flex-col relative"
      style={{
        backgroundColor: colors.bgColor,
        color: colors.primaryColor,
        transition: "all 0.3s ease",
      }}
    >
      {/* Hero Section */}
      <section
        className="relative py-32 px-4 flex items-center justify-center"
        style={{
          backgroundColor: colors.tertiaryColor,
        }}
      >
        <div className="relative text-center z-10">
          <h1
            className="text-5xl font-bold mb-6"
            style={{
              color: colors.primaryColor,
            }}
          >
            Elevate Your Living Space
          </h1>
          <p
            className="mb-8 text-lg"
            style={{
              color: colors.primaryColor,
            }}
          >
            Discover our curated selection of contemporary home decor.
          </p>
          <button
            className="px-6 py-3 rounded shadow-lg hover:scale-105 transition"
            style={{
              backgroundColor: colors.secondaryColor,
              color: colors.bgColor,
            }}
          >
            Shop the Collection
          </button>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 w-full px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-10">Featured Products</h2>
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
            {products.map((product) => (
              <div
                key={product.id}
                className="p-6 rounded-md shadow-lg transform transition hover:scale-105"
                style={{ backgroundColor: colors.tertiaryColor }}
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
                <p className="mb-4">{product.price}</p>
                <button
                  className="px-4 py-2 rounded transition hover:bg-opacity-90"
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

      {/* Explore Our Collections */}
      <section
        className="py-16 w-full px-4"
        style={{ backgroundColor: colors.tertiaryColor }}
      >
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-10">
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
