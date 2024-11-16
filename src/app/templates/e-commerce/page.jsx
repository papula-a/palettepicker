"use client";

import { useEffect, useState } from "react";
import FloatingColorPicker from "@/components/FloatingColorPicker";

const Blog = () => {
  const [colors, setColors] = useState({
    primaryColor: "#000000", // Default black text color
    secondaryColor: "#FF69B4", // Default pink button color
    bgColor: "#F8F8F8", // Default off-white background
    tertiaryColor: "#FFFFFF", // Default white for whitespace
  });

  const [redirectUrl, setRedirectUrl] = useState("");

  useEffect(() => {
    // Ensure dynamic values like window.location.href are only used client-side
    if (typeof window !== "undefined") {
      setRedirectUrl(encodeURIComponent(window.location.href));
    }
  }, []);

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
      <FloatingColorPicker colors={colors} setColors={setColors} />
    </div>
  );
};

export default Blog;
