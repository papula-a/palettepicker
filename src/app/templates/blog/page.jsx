"use client"; // Required for Client Component

import { useState } from "react";

const Blog = () => {
  const [colors] = useState({
    primaryColor: "#000000", // Unified black text color
    bgColor: "#F8F8F8", // Off-white background
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

  const testimonials = [
    {
      id: 1,
      quote:
        "This blog has completely changed how I approach design. Highly recommended!",
      author: "Jane Doe",
    },
    {
      id: 2,
      quote:
        "The insights on color theory were exactly what I needed for my latest project.",
      author: "John Smith",
    },
    {
      id: 3,
      quote: "An invaluable resource for designers at any level.",
      author: "Emily Johnson",
    },
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: colors.bgColor }}>
      {/* Hero Section */}
      <section className="bg-pink-500 text-black py-40 px-4 overflow-hidden">
        <svg
          className="absolute top-0 left-0 w-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#F78DA7"
            fillOpacity="1"
            d="M0,64L48,74.7C96,85,192,107,288,128C384,149,480,171,576,160C672,149,768,107,864,85.3C960,64,1056,64,1152,80C1248,96,1344,128,1392,144L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
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
            <button className="bg-white text-black font-semibold px-8 py-4 rounded-lg shadow-lg hover:bg-gray-100 transition">
              Get Started
            </button>
          </div>
        </div>
      </section>

      {/* Popular Posts Section */}
      <section className="container mx-auto px-8 sm:px-16 py-10">
        <h2 className="text-3xl font-semibold mb-6 text-black">
          Popular Posts
        </h2>
        <div className="flex gap-6 overflow-x-auto scrollbar-thin scrollbar-thumb-pink-500 scrollbar-track-gray-200">
          {popularPosts.map((post) => (
            <div
              key={post.id}
              className="flex-none bg-white rounded-lg shadow-md p-6 w-64 hover:shadow-lg transition"
            >
              <h3 className="text-lg font-bold text-black">{post.title}</h3>
              <p className="text-sm text-gray-600">{post.category}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Latest Articles Section */}
      <section className="container mx-auto px-8 sm:px-16 py-10">
        <h2 className="text-3xl font-semibold mb-10 text-center text-black">
          Latest Articles
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden flex flex-col transition-transform transform hover:scale-105 hover:shadow-2xl"
            >
              <div className="h-28 bg-pink-200"></div>
              <div className="p-8">
                <h3 className="text-lg font-bold mb-2 text-black">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-600 mb-2">{post.category}</p>
                <p className="text-sm text-gray-700">{post.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="text-center mt-8">
          <button className="bg-pink-500 text-white font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-pink-600 transition">
            View All Articles
          </button>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-8 sm:px-16">
          <h2 className="text-3xl font-semibold text-center mb-10 text-black">
            What Readers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-2xl transition"
              >
                <p className="italic text-gray-700">{testimonial.quote}</p>
                <h4 className="mt-4 font-bold text-black">
                  {testimonial.author}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-pink-500 text-black text-center">
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
          <button className="bg-black text-white font-semibold px-6 py-3 rounded-full shadow-md hover:bg-gray-800 transition">
            Subscribe
          </button>
        </div>
      </section>
    </div>
  );
};

export default Blog;
