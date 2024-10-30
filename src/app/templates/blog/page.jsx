"use client"; // Required for Client Component

import { useState } from "react";

const Blog = () => {
  const [colors, setColors] = useState({
    primaryColor: "#333333", // Dark color for primary text
    secondaryColor: "#4CAF50", // Green accent color
    bgColor: "#f9f9f9", // Light background color
  });

  const blogPosts = [
    {
      id: 1,
      title: "The Art of Reflection",
      date: "October 28, 2024",
      author: "Winnie Au",
      excerpt:
        "Explore the techniques behind my latest collection, inspired by personal reflections and nature.",
      image: "/static/winnie-art1.jpg", // Ensure this is a high-resolution image
    },
    {
      id: 2,
      title: "Nature as Muse",
      date: "October 25, 2024",
      author: "Winnie Au",
      excerpt:
        "How the natural world fuels my creativity and informs my artistic process.",
      image: "/static/winnie-art2.jpg",
    },
    {
      id: 3,
      title: "Color and Emotion",
      date: "October 22, 2024",
      author: "Winnie Au",
      excerpt: "An exploration of how color influences emotion in my artwork.",
      image: "/static/winnie-art3.jpg",
    },
    {
      id: 4,
      title: "Artistic Sustainability",
      date: "October 20, 2024",
      author: "Winnie Au",
      excerpt:
        "The importance of sustainability in art and how I incorporate it into my practice.",
      image: "/static/winnie-art4.jpg",
    },
  ];

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ backgroundColor: colors.bgColor }}
    >
      {/* Header Section */}
      <header className="w-full bg-white shadow">
        <div className="container mx-auto px-4 py-6 flex justify-center">
          <h1 className="text-4xl font-bold text-gray-800">
            Winnie Au's Art Blog
          </h1>
        </div>
      </header>

      {/* Hero Section */}
      <section className="w-full bg-gray-100">
        <div className="container mx-auto px-4 py-10">
          <h2
            className="text-3xl font-semibold text-center"
            style={{ color: colors.primaryColor }}
          >
            Featured Artwork
          </h2>
          <article className="bg-white rounded-lg shadow-lg overflow-hidden mt-6">
            <img
              src={blogPosts[0].image}
              alt={blogPosts[0].title}
              className="w-full h-96 object-cover" // Increased height to h-96
            />
            <div className="p-6">
              <h3
                className="text-2xl font-bold mb-2"
                style={{ color: colors.primaryColor }}
              >
                {blogPosts[0].title}
              </h3>
              <p className="text-gray-600 text-sm mb-1">
                {blogPosts[0].date} by {blogPosts[0].author}
              </p>
              <p className="text-gray-700 mt-4">{blogPosts[0].excerpt}</p>
              <a
                href="#"
                className="text-secondaryColor hover:underline mt-4 inline-block"
              >
                Read more...
              </a>
            </div>
          </article>
        </div>
      </section>

      {/* Blog Posts Section */}
      <main className="container mx-auto px-4 py-10">
        <h2
          className="text-3xl font-semibold mb-10 text-center"
          style={{ color: colors.primaryColor }}
        >
          Latest Posts
        </h2>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.slice(1).map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-60 object-cover" // Increased height to h-60
              />
              <div className="p-4">
                <h3
                  className="text-lg font-bold mb-1"
                  style={{ color: colors.primaryColor }}
                >
                  {post.title}
                </h3>
                <p className="text-gray-600 text-xs mb-1">
                  {post.date} by {post.author}
                </p>
                <p className="text-gray-700 text-sm">{post.excerpt}</p>
                <a
                  href="#"
                  className="text-secondaryColor hover:underline text-xs"
                >
                  Read more...
                </a>
              </div>
            </article>
          ))}
        </div>
      </main>

      {/* Book Section */}
      <section className="w-full px-4 py-10 bg-gray-100"> {/* Changed container to w-full */}
        <h2
          className="text-3xl font-semibold mb-6 text-center"
          style={{ color: colors.primaryColor }}
        >
          Winnie Au's Book
        </h2>
        <div className="container mx-auto bg-white rounded-lg shadow-lg p-6 flex">
          {/* Text Content */}
          <div className="flex-1 pr-4">
            <h3 className="text-2xl font-bold mb-2">Cone of Shame</h3>
            <p className="text-gray-700 mb-4">
              "Cone of Shame" is an exploration of the emotional complexities and
              societal perceptions of vulnerability and shame. Through a combination
              of evocative illustrations and insightful narratives, Winnie Au takes
              readers on a journey that challenges the stigma associated with
              vulnerability.
            </p>
            <p className="text-gray-700 mb-4">
              This book not only reflects the artist's unique perspective but also
              encourages readers to embrace their imperfections and recognize the
              beauty in vulnerability. It is a powerful reminder that shame can be a
              shared experience, inviting conversations that foster understanding and
              empathy.
            </p>
            <p className="text-gray-700 mb-4">
              Perfect for art enthusiasts and anyone interested in personal growth,
              "Cone of Shame" serves as both a creative inspiration and a source of
              comfort.
            </p>
            <a
              href="#"
              className="text-secondaryColor hover:underline"
            >
              Learn more or purchase...
            </a>
          </div>
          {/* Image Container */}
          <div className="flex-none w-32 h-32">
            <img
              src="/static/cone-of-shame.jpg" 
              alt="Cone of Shame"
              className="w-full h-full object-cover rounded" // Adjust size as needed
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
