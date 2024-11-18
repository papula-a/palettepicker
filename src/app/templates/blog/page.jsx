"use client";

import FloatingColorPicker from "@/components/FloatingColorPicker";
import {
  ArrowRight,
  ArrowUpRight,
  Clock,
  Coffee,
  Search,
  Tag,
} from "lucide-react";
import { useEffect, useState } from "react";

const DEFAULT_COLORS = {
  primaryColor: "#2D1B69", // Deep purple
  secondaryColor: "#FF7D90", // Coral pink
  bgColor: "#FAFAFF", // Lavender white
  tertiaryColor: "#F0F0FF", // Light lavender
};

// Move the random elements generation to a separate function
const generateFloatingShapes = (count, colors) => {
  return [...Array(count)].map((_, i) => ({
    id: i,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    width: `${Math.random() * 40 + 20}px`,
    height: `${Math.random() * 40 + 20}px`,
    backgroundColor: i % 2 ? colors.primaryColor : colors.secondaryColor,
    borderRadius: i % 3 ? "50%" : "0",
    transform: `rotate(${Math.random() * 360}deg)`,
    animationDelay: `${i * 0.5}s`,
  }));
};

const Blog = () => {
  const [colors, setColors] = useState(DEFAULT_COLORS);
  const [searchFocused, setSearchFocused] = useState(false);
  const [floatingShapes, setFloatingShapes] = useState([]);
  const [isClient, setIsClient] = useState(false);

  // Initialize client-side state
  useEffect(() => {
    setIsClient(true);
    setFloatingShapes(generateFloatingShapes(5, colors));
  }, [colors]); // Empty dependency array means this runs once on mount

  const featuredPost = {
    title: "The Future of Design: AI and Human Creativity",
    excerpt:
      "Explore how artificial intelligence is reshaping the design landscape while enhancing human creativity.",
    author: "Michael Roberts",
    date: "Mar 20, 2024",
    readTime: "8 min",
    tags: ["AI", "Future", "Creativity"],
  };

  const categories = [
    { name: "UI Design", count: 24 },
    { name: "Typography", count: 18 },
    { name: "Color Theory", count: 15 },
    { name: "UX Research", count: 12 },
    { name: "Design Systems", count: 9 },
  ];

  // Only render floating shapes on the client side
  const renderFloatingShapes = () => {
    if (!isClient) return null;

    return floatingShapes.map((shape) => (
      <div
        key={shape.id}
        className="absolute animate-float opacity-20"
        style={{
          top: shape.top,
          left: shape.left,
          width: shape.width,
          height: shape.height,
          backgroundColor: shape.backgroundColor,
          borderRadius: shape.borderRadius,
          transform: shape.transform,
          animationDelay: shape.animationDelay,
        }}
      />
    ));
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: colors.bgColor }}>
      {/* Hero Section with Dynamic Search */}
      <section
        className="relative min-h-[80vh] flex items-center justify-center overflow-hidden py-20"
        style={{ backgroundColor: colors.tertiaryColor }}
      >
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl opacity-20"
            style={{ backgroundColor: colors.secondaryColor }}
          />
          <div
            className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-20"
            style={{ backgroundColor: colors.primaryColor }}
          />
        </div>

        {/* Floating shapes - Only rendered on client side */}
        <div className="absolute inset-0">{renderFloatingShapes()}</div>

        <div className="relative container mx-auto px-4 text-center z-10">
          <h1
            className="text-6xl md:text-7xl font-bold mb-6 tracking-tight"
            style={{ color: colors.primaryColor }}
          >
            Design{" "}
            <span style={{ color: colors.secondaryColor }}>Insights</span>
          </h1>
          <p className="text-xl md:text-2xl font-light mb-12 max-w-2xl mx-auto opacity-90">
            Explore the intersection of creativity, technology, and design
            thinking.
          </p>

          {/* Enhanced Search Bar */}
          <div
            className={`relative max-w-2xl mx-auto transform transition-all duration-300 ${
              searchFocused ? "scale-105" : ""
            }`}
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 opacity-50" />
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full px-12 py-4 rounded-full shadow-lg focus:outline-none transition-all"
                style={{ backgroundColor: "white" }}
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setSearchFocused(false)}
              />
            </div>

            {/* Trending searches */}
            <div className="mt-4 flex flex-wrap justify-center gap-2">
              {["Design Systems", "Typography", "Color Theory"].map((term) => (
                <span
                  key={term}
                  className="px-3 py-1 rounded-full text-sm cursor-pointer transition-all hover:scale-105"
                  style={{
                    backgroundColor: `${colors.secondaryColor}15`,
                    color: colors.secondaryColor,
                  }}
                >
                  {term}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="container mx-auto px-4 -mt-20">
        <div
          className="relative rounded-2xl shadow-xl overflow-hidden"
          style={{ backgroundColor: "white" }}
        >
          <div
            className="absolute top-0 right-0 w-1/2 h-full opacity-10"
            style={{
              backgroundImage: `radial-gradient(circle at 70% 30%, ${colors.secondaryColor}, transparent)`,
            }}
          />
          <div className="p-12 md:p-16">
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span
                className="px-4 py-1 rounded-full text-sm font-medium"
                style={{
                  backgroundColor: `${colors.secondaryColor}15`,
                  color: colors.secondaryColor,
                }}
              >
                Featured
              </span>
              <div className="flex items-center gap-2 text-sm opacity-60">
                <Clock className="w-4 h-4" />
                {featuredPost.readTime}
              </div>
            </div>

            <h2
              className="text-3xl md:text-4xl font-bold mb-6 hover:opacity-80 transition-opacity cursor-pointer"
              style={{ color: colors.primaryColor }}
            >
              {featuredPost.title}
            </h2>

            <p className="text-lg opacity-80 mb-8 max-w-3xl">
              {featuredPost.excerpt}
            </p>

            <div className="flex flex-wrap items-center gap-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-200" />
                <div>
                  <p
                    className="font-medium"
                    style={{ color: colors.primaryColor }}
                  >
                    {featuredPost.author}
                  </p>
                  <p className="text-sm opacity-60">{featuredPost.date}</p>
                </div>
              </div>

              <div className="flex gap-2">
                {featuredPost.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-sm"
                    style={{
                      backgroundColor: `${colors.primaryColor}10`,
                      color: colors.primaryColor,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="container mx-auto px-4 py-20">
        <div className="flex justify-between items-end mb-12">
          <h2
            className="text-3xl font-bold"
            style={{ color: colors.primaryColor }}
          >
            Explore Topics
          </h2>
          <button
            className="flex items-center gap-2 text-sm font-medium hover:opacity-80 transition-opacity"
            style={{ color: colors.secondaryColor }}
          >
            View All
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <div
              key={category.name}
              className="group relative rounded-xl p-8 cursor-pointer transition-all hover:scale-105"
              style={{
                backgroundColor: "white",
                boxShadow: `0 4px 20px ${colors.primaryColor}10`,
              }}
            >
              <div className="flex justify-between items-start mb-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: `${colors.secondaryColor}15` }}
                >
                  <Tag
                    className="w-6 h-6"
                    style={{ color: colors.secondaryColor }}
                  />
                </div>
                <span className="text-2xl font-bold opacity-20">
                  {category.count}
                </span>
              </div>

              <h3
                className="text-xl font-bold mb-2"
                style={{ color: colors.primaryColor }}
              >
                {category.name}
              </h3>

              <div
                className="flex items-center gap-2 text-sm font-medium mt-4"
                style={{ color: colors.secondaryColor }}
              >
                Explore
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter Section with Visual Enhancement */}
      <section
        className="relative py-20 overflow-hidden"
        style={{ backgroundColor: colors.tertiaryColor }}
      >
        <div className="absolute inset-0">
          <div
            className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-10"
            style={{ backgroundColor: colors.secondaryColor }}
          />
          <div
            className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl opacity-10"
            style={{ backgroundColor: colors.primaryColor }}
          />
        </div>

        <div className="relative container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-8">
            <Coffee
              className="w-8 h-8"
              style={{ color: colors.secondaryColor }}
            />
          </div>

          <h2
            className="text-4xl font-bold mb-6"
            style={{ color: colors.primaryColor }}
          >
            Join Our Newsletter
          </h2>
          <p className="text-lg opacity-80 mb-8 max-w-xl mx-auto">
            Get weekly insights on design, creativity, and innovation delivered
            straight to your inbox.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-6 py-3 rounded-lg flex-grow focus:outline-none"
              style={{ backgroundColor: "white" }}
            />
            <button
              className="px-8 py-3 rounded-lg font-medium transition-all hover:scale-105 flex items-center justify-center gap-2"
              style={{
                backgroundColor: colors.secondaryColor,
                color: "white",
              }}
            >
              Subscribe
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {isClient && (
        <FloatingColorPicker
          colors={colors}
          setColors={setColors}
          defaultColors={DEFAULT_COLORS}
        />
      )}

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Blog;
