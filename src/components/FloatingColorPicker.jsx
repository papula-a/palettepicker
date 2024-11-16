"use client"; // Required for Client Component

import { useState } from "react";
import FloatingColorPicker from "@/components/FloatingColorPicker"; // Adjust the path as needed

const Blog = () => {
  const [colors, setColors] = useState({
    primaryColor: "#000000", // Default black text color
    secondaryColor: "#FF69B4", // Default pink button color
    bgColor: "#F8F8F8", // Default off-white background
    tertiaryColor: "#FFFFFF", // Default white for whitespace
  });

  const blogPosts = [
    {
      id: 1,
      title: "Understanding Minimalist Design",
      category: "Design Principles",
      excerpt: "Learn the core principles behind effective minimalist design.",
    },
    {
      id: 2,
      title: "UI Trends of 2024",
      category: "User Interface",
      excerpt: "Explore the latest UI trends shaping the design world.",
    },
    {
      id: 3,
      title: "Typography Basics",
      category: "Typography",
      excerpt: "Master the art of typography for web and print design.",
    },
    {
      id: 4,
      title: "Color Theory for Designers",
      category: "Color Theory",
      excerpt: "Understand how to use color effectively in your projects.",
    },
    {
      id: 5,
      title: "Accessibility in Design",
      category: "Inclusive Design",
      excerpt:
        "Discover how to create designs that are accessible to everyone.",
    },
    {
      id: 6,
      title: "The Power of White Space",
      category: "Design Principles",
      excerpt:
        "Learn how white space can enhance your designs' clarity and elegance.",
    },
  ];

  const popularPosts = [
    { id: 1, title: "10 Typography Trends in 2024", category: "Typography" },
    { id: 2, title: "Best Tools for UI Designers", category: "Design Tools" },
    { id: 3, title: "Color Psychology in Branding", category: "Color Theory" },
    { id: 4, title: "Creating Accessible Designs", category: "Accessibility" },
  ];

  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: colors.bgColor, color: colors.primaryColor }}
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
            strategies. Explore tips, tools, and resources to unleash your
            creativity.
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

      {/* Popular Posts Section */}
      <section className="container mx-auto px-8 sm:px-16 py-10">
        <h2 className="text-3xl font-semibold mb-6">Popular Posts</h2>
        <div className="flex gap-6 overflow-x-auto scrollbar-thin scrollbar-thumb-pink-400 scrollbar-track-gray-200">
          {popularPosts.map((post) => (
            <div
              key={post.id}
              className="flex-none bg-white rounded-lg shadow-md p-6 w-64 hover:shadow-lg transition"
              style={{ color: colors.primaryColor }}
            >
              <h3 className="text-lg font-bold">{post.title}</h3>
              <p className="text-sm">{post.category}</p>
            </div>
          ))}
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
                <p className="text-sm mb-2">{post.category}</p>
                <p className="text-sm">{post.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="text-center mt-8">
          <button
            className="px-8 py-3 rounded-lg shadow-md transition"
            style={{
              backgroundColor: colors.secondaryColor,
              color: colors.tertiaryColor,
            }}
          >
            View All Articles
          </button>
        </div>
      </section>

      {/* Newsletter Section */}
      <section
        className="py-16 text-center"
        style={{
          backgroundColor: colors.tertiaryColor,
        }}
      >
        <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
        <p className="mb-6">
          Stay updated with the latest posts, stories, and insights!
        </p>
        <div className="flex justify-center items-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-3 rounded-full w-64 text-gray-700 focus:outline-none shadow-md"
          />
          <button
            className="font-semibold px-6 py-3 rounded-full shadow-md transition"
            style={{
              backgroundColor: colors.secondaryColor,
              color: colors.tertiaryColor,
            }}
          >
            Subscribe
          </button>
        </div>
      </section>

      {/* Floating Color Picker */}
      <FloatingColorPicker colors={colors} setColors={setColors} />
    </div>
  );
};

export default Blog;
