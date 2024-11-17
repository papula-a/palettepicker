"use client";

import FloatingColorPicker from "@/components/FloatingColorPicker";
import { useState } from "react";

const Ecommerce = () => {
  const [colors, setColors] = useState({
    primaryColor: "#333333",
    secondaryColor: "#A8D5BA",
    bgColor: "#F4F4F9",
    tertiaryColor: "#ebebf0",
  });

  const products = [
    { id: 1, name: "Product 1", price: "$99.99", image: "/static/chair.png" },
    { id: 2, name: "Product 2", price: "$129.99", image: "/static/lamp.png" },
    { id: 3, name: "Product 3", price: "$89.99", image: "/static/table.png" },
    { id: 4, name: "Product 4", price: "$149.99", image: "/static/sink.png" },
  ];

  const blogPosts = [
    {
      id: 1,
      title: "Understanding Minimalist Design",
      category: "Design Principles",
    },
    { id: 2, title: "UI Trends of 2024", category: "User Interface" },
    { id: 3, title: "Typography Basics", category: "Typography" },
  ];

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        backgroundColor: colors.bgColor,
        color: colors.primaryColor,
      }}
    >
      {/* Hero Section */}
      <section
        className="bg-pink-100 py-40 px-4 overflow-hidden"
        style={{ backgroundColor: colors.tertiaryColor }}
      >
        <div className="relative container mx-auto text-center pt-12 z-10">
          <h1 className="text-5xl font-bold uppercase mb-6">
            Design Solutions
          </h1>
          <p className="text-lg font-light mb-8 max-w-2xl mx-auto">
            Elevate your design projects with innovative solutions and creative
            strategies.
          </p>
          <div className="mt-8">
            <button
              className="px-8 py-4 rounded-lg shadow-lg transition"
              style={{
                backgroundColor: colors.secondaryColor,
                color: colors.tertiaryColor,
              }}
            >
              Get Started
            </button>
          </div>
        </div>
      </section>

      {/* Latest Articles Section */}
      <section className="container mx-auto px-8 sm:px-16 py-10">
        <h2 className="text-3xl font-semibold mb-10 text-center">
          Latest Articles
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden flex flex-col transition-transform transform hover:scale-105 hover:shadow-2xl"
              style={{ color: colors.primaryColor }}
            >
              <div
                className="h-28"
                style={{ backgroundColor: colors.tertiaryColor }}
              ></div>
              <div className="p-8">
                <h3 className="text-lg font-bold mb-2">{post.title}</h3>
                <p className="text-sm">{post.category}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Login Section */}
      {redirectUrl && (
        <div className="text-center py-4">
          <a
            href={`/api/auth/login?post_login_redirect_url=${redirectUrl}`}
            className="text-blue-500 underline"
          >
            Sign in
          </a>
        </div>
      )}

      {/* Floating Color Picker */}
      <FloatingColorPicker
        colors={colors}
        setColors={setColors}
        defaultColors={DEFAULT_COLORS}
      />
    </div>
  );
};

export default Blog;
