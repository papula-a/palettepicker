"use client";
import FloatingColorPicker from "@/components/FloatingColorPicker";
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

// const DEFAULT_COLORS = {
//   primaryColor: "#1A1A2E", // Deep navy
//   secondaryColor: "#FF6B6B", // Coral pink
//   bgColor: "#FFF9F0", // Warm white
//   tertiaryColor: "#F4F1EA", // Soft cream
// };

const DEFAULT_COLORS = {
  primaryColor: "#1B4332", // Forest green
  secondaryColor: "#FF9F1C", // Warm orange
  bgColor: "#F8F9F3", // Natural white
  tertiaryColor: "#EFF1E8", // Sage white
};

const Ecommerce = () => {
  const [colors, setColors] = useState(DEFAULT_COLORS);
  const [redirectUrl, setRedirectUrl] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setRedirectUrl(encodeURIComponent(window.location.href));
    }
  }, []);

  const blogPosts = [
    {
      id: 1,
      title: "Understanding Minimalist Design",
      category: "Design Principles",
      icon: <Star className="w-6 h-6 mb-4" />,
      excerpt:
        "Learn the core principles of minimalist design and how to apply them effectively.",
    },
    {
      id: 2,
      title: "UI Trends of 2024",
      category: "User Interface",
      icon: <TrendingUp className="w-6 h-6 mb-4" />,
      excerpt:
        "Discover the latest UI trends shaping the digital landscape in 2024.",
    },
    {
      id: 3,
      title: "Typography Basics",
      category: "Typography",
      icon: <Users className="w-6 h-6 mb-4" />,
      excerpt:
        "Master the fundamentals of typography and create visually appealing designs.",
    },
  ];

  const features = [
    { icon: <Check className="w-6 h-6" />, text: "Professional Templates" },
    { icon: <Award className="w-6 h-6" />, text: "Expert Support" },
    { icon: <Sparkles className="w-6 h-6" />, text: "Regular Updates" },
    { icon: <Gift className="w-6 h-6" />, text: "Premium Resources" },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "UI Designer",
      content:
        "This platform has transformed how I approach design projects. The resources are invaluable.",
    },
    {
      name: "Michael Chen",
      role: "Creative Director",
      content:
        "The quality of templates and support is outstanding. Highly recommended for any designer.",
    },
  ];

  // Background decoration component
  const BackgroundDecoration = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        className="absolute top-0 left-0 w-64 h-64 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-10"
        style={{ backgroundColor: colors.secondaryColor }}
      />
      <div
        className="absolute top-1/2 right-0 w-96 h-96 translate-x-1/2 -translate-y-1/2 rounded-full opacity-10"
        style={{ backgroundColor: colors.secondaryColor }}
      />
      <div
        className="absolute bottom-0 left-1/3 w-48 h-48 translate-y-1/2 rounded-full opacity-10"
        style={{ backgroundColor: colors.primaryColor }}
      />
    </div>
  );

  return (
    <div
      className="min-h-screen flex flex-col relative"
      style={{
        backgroundColor: colors.bgColor,
        color: colors.primaryColor,
        transition: "all 0.3s ease",
      }}
    >
      <BackgroundDecoration />

      {/* Hero Section */}
      <section
        className="relative py-32 px-4 overflow-hidden min-h-[90vh] flex items-center"
        style={{
          backgroundColor: colors.tertiaryColor,
          transition: "all 0.3s ease",
        }}
      >
        {/* Animated background patterns */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `linear-gradient(45deg, ${colors.secondaryColor}22, ${colors.primaryColor}11)`,
            }}
          />
          <div
            className="absolute w-96 h-96 -top-48 -left-48 rounded-full blur-3xl opacity-20"
            style={{ backgroundColor: colors.secondaryColor }}
          />
          <div
            className="absolute w-96 h-96 -bottom-48 -right-48 rounded-full blur-3xl opacity-20"
            style={{ backgroundColor: colors.primaryColor }}
          />
        </div>

        {/* Floating geometric shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute top-1/4 left-1/4 w-8 h-8 animate-float opacity-40"
            style={{
              backgroundColor: colors.secondaryColor,
              transform: "rotate(45deg)",
            }}
          />
          <div
            className="absolute top-1/3 right-1/4 w-12 h-12 rounded-full animate-float-delayed opacity-40"
            style={{ backgroundColor: colors.primaryColor }}
          />
          <div
            className="absolute bottom-1/4 left-1/3 w-16 h-16 animate-float opacity-30"
            style={{
              borderRadius: "60% 40% 30% 70%/60% 30% 70% 40%",
              backgroundColor: colors.secondaryColor,
            }}
          />
          <div
            className="absolute top-1/2 right-1/3 w-10 h-10 animate-float-delayed opacity-40"
            style={{
              borderRadius: "30% 70% 70% 30%/30% 30% 70% 70%",
              backgroundColor: colors.primaryColor,
            }}
          />
        </div>

        {/* Main content */}
        <div className="relative container mx-auto text-center z-10">
          <div className="inline-block relative">
            <div
              className="absolute -inset-1 blur-lg opacity-30"
              style={{ backgroundColor: colors.secondaryColor }}
            />
            <h1
              className="relative text-7xl font-bold mb-6 tracking-tight bg-clip-text"
              style={{
                textShadow: `0 4px 12px ${colors.primaryColor}33`,
              }}
            >
              Design Solutions
            </h1>
          </div>

          <p className="text-xl font-light mb-12 max-w-2xl mx-auto opacity-90 relative">
            Elevate your design projects with innovative solutions and creative
            strategies.
          </p>

          {/* CTA button with enhanced styling */}
          <div className="mt-8 relative inline-block group">
            <div
              className="absolute -inset-1 rounded-lg blur transition-all opacity-70 group-hover:opacity-100"
              style={{ backgroundColor: colors.secondaryColor }}
            />
            <button
              className="relative px-8 py-4 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 flex items-center space-x-2"
              style={{
                backgroundColor: colors.secondaryColor,
                color: colors.bgColor,
              }}
            >
              <span className="relative z-10">Get Started</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Custom cursor effect */}
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
          @keyframes float-delayed {
            0%,
            100% {
              transform: translateY(0) rotate(0deg);
            }
            50% {
              transform: translateY(-15px) rotate(-5deg);
            }
          }
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
          .animate-float-delayed {
            animation: float-delayed 7s ease-in-out infinite;
          }
        `}</style>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-8 py-20 relative">
        <h2 className="text-4xl font-bold mb-16 text-center">Why Choose Us</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-xl transition-all duration-300 hover:scale-105"
              style={{ backgroundColor: `${colors.secondaryColor}10` }}
            >
              <div className="mb-4" style={{ color: colors.secondaryColor }}>
                {feature.icon}
              </div>
              <p className="font-medium">{feature.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Latest Articles Section */}
      <section className="container mx-auto px-8 sm:px-16 py-20">
        <h2 className="text-4xl font-bold mb-16 text-center">
          Latest Articles
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="rounded-xl overflow-hidden flex flex-col transition-all duration-300 hover:scale-105 group"
              style={{
                backgroundColor: colors.tertiaryColor,
                boxShadow: `0 4px 20px ${colors.primaryColor}15`,
              }}
            >
              <div
                className="p-8 flex flex-col items-center text-center h-full"
                style={{ color: colors.primaryColor }}
              >
                <div style={{ color: colors.secondaryColor }}>{post.icon}</div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-underline">
                  {post.title}
                </h3>
                <p className="text-sm opacity-75 mb-4">{post.category}</p>
                <p className="text-sm opacity-90 mb-6">{post.excerpt}</p>
                <button
                  className="mt-auto px-6 py-2 rounded-lg transition-all duration-300 text-sm"
                  style={{
                    backgroundColor: `${colors.secondaryColor}15`,
                    color: colors.secondaryColor,
                  }}
                >
                  Read More
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        className="py-20 relative"
        style={{ backgroundColor: colors.tertiaryColor }}
      >
        <div className="container mx-auto px-8">
          <h2 className="text-4xl font-bold mb-16 text-center">
            What Our Users Say
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-8 rounded-xl relative transition-all duration-300 hover:scale-105"
                style={{
                  backgroundColor: colors.bgColor,
                  boxShadow: `0 4px 20px ${colors.primaryColor}15`,
                }}
              >
                <div
                  className="absolute top-4 right-4 opacity-20"
                  style={{ color: colors.secondaryColor }}
                >
                  <Star className="w-8 h-8" />
                </div>
                <p className="mb-6 italic">{testimonial.content}</p>
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-sm opacity-75">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="container mx-auto px-8 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Stay Updated</h2>
          <p className="mb-8 opacity-90">
            Subscribe to our newsletter for the latest design tips and
            resources.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-6 py-3 rounded-lg"
              style={{
                backgroundColor: colors.tertiaryColor,
                border: `2px solid ${colors.secondaryColor}30`,
              }}
            />
            <button
              className="px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105"
              style={{
                backgroundColor: colors.secondaryColor,
                color: colors.bgColor,
              }}
            >
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Login Section */}
      {redirectUrl && (
        <div className="text-center py-8">
          <a
            href={`/api/auth/login?post_login_redirect_url=${redirectUrl}`}
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105"
            style={{
              backgroundColor: `${colors.secondaryColor}15`,
              color: colors.secondaryColor,
            }}
          >
            <span>Sign in to your account</span>
            <ArrowRight className="w-4 h-4" />
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

export default Ecommerce;
