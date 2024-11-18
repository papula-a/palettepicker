"use client";

import FloatingColorPicker from "@/components/FloatingColorPicker";
import { Calendar, Heart, Moon, Star, Sun, Users, Wind } from "lucide-react";
import { useEffect, useState } from "react";

const DEFAULT_COLORS = {
  primaryColor: "#2D3047", // Deep blue-grey for main text and accents
  secondaryColor: "#93B7BE", // Soft blue for buttons and highlights
  bgColor: "#F7F9FB", // Light grey-blue for background
  tertiaryColor: "#E0E2DB", // Warm grey for cards and secondary elements
};

const LandingPage = () => {
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
        className="fixed inset-0 transition-all duration-500"
        style={{
          background: `linear-gradient(135deg, ${colors.bgColor} 0%, ${colors.primaryColor}40 100%)`,
        }}
      />

{/* Animated Background Shapes */}
<div className="fixed inset-0 overflow-hidden">
  {[...Array(20)].map((_, i) => {
    // Dynamically calculate the maximum height for the shapes
    const viewportHeight = window.innerHeight;
    const footerHeight = 200; // Replace with your footer's actual height
    const maxShapeHeight = viewportHeight - footerHeight;

    const randomTop = Math.random() * (maxShapeHeight / viewportHeight) * 100; // Adjust top position dynamically
    return (
      <div
        key={i}
        className="absolute rounded-full mix-blend-multiply filter blur-xl animate-float"
        style={{
          width: Math.random() * 300 + 100 + "px",
          height: Math.random() * 300 + 100 + "px",
          left: Math.random() * 100 + "%", // Random left position
          top: `${randomTop}%`, // Ensure top stays above the footer
          backgroundColor:
            i % 2 === 0 ? colors.secondaryColor : colors.tertiaryColor,
          opacity: 0.1,
          animationName: "float",
          animationDuration: `${Math.random() * 10 + 10}s`,
          animationTimingFunction: "ease-in-out",
          animationIterationCount: "infinite",
          animationDelay: `${i * -0.5}s`, // Explicitly defined to avoid conflict
        }}
      />
    );
  })}
</div>



      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 py-20">
        <div className="absolute inset-0 flex items-center justify-center opacity-20">
          <div className="relative w-96 h-96">
            <div className="absolute inset-0 animate-spin-slow">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                {[...Array(12)].map((_, i) => (
                  <line
                    key={i}
                    x1="50"
                    y1="10"
                    x2="50"
                    y2="25"
                    stroke={colors.primaryColor}
                    strokeWidth="2"
                    transform={`rotate(${i * 30} 50 50)`}
                  />
                ))}
              </svg>
            </div>
          </div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <h1
            className="text-7xl font-extrabold mb-6 tracking-tight"
            style={{ color: colors.primaryColor }}
          >
            Find Your Inner Peace
          </h1>
          <p
            className="text-2xl mb-8 leading-relaxed"
            style={{ color: colors.primaryColor }}
          >
            Discover the transformative power of meditation through guided
            sessions designed to bring harmony to your mind, body, and spirit.
          </p>
          <div className="flex gap-4 justify-center">
            <button
              className="px-8 py-4 rounded-lg text-white font-semibold transform hover:scale-105 transition-all duration-300"
              style={{ backgroundColor: colors.secondaryColor }}
            >
              Start Your Journey
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

      {/* Features Section with Icons */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2
            className="text-5xl font-bold text-center mb-16"
            style={{ color: colors.primaryColor }}
          >
            Your Path to Mindfulness
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Moon className="w-8 h-8" />,
                title: "Evening Meditation",
                description:
                  "Unwind with calming sessions designed for better sleep and relaxation.",
              },
              {
                icon: <Sun className="w-8 h-8" />,
                title: "Morning Routines",
                description:
                  "Start your day with energizing meditation practices.",
              },
              {
                icon: <Wind className="w-8 h-8" />,
                title: "Breath Work",
                description:
                  "Master breathing techniques for stress relief and focus.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-8 rounded-xl transform hover:scale-105 transition-all duration-300"
                style={{ backgroundColor: colors.tertiaryColor }}
              >
                <div
                  className="rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto"
                  style={{
                    backgroundColor: colors.secondaryColor,
                    color: colors.bgColor,
                  }}
                >
                  {feature.icon}
                </div>
                <h3
                  className="text-xl font-semibold mb-4 text-center"
                  style={{ color: colors.primaryColor }}
                >
                  {feature.title}
                </h3>
                <p
                  className="text-center"
                  style={{ color: colors.primaryColor }}
                >
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="relative py-20 px-4">
        <div
          className="max-w-7xl mx-auto p-12 rounded-2xl"
          style={{ backgroundColor: colors.tertiaryColor }}
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              {
                icon: <Heart className="w-6 h-6" />,
                value: "10K+",
                label: "Happy Meditators",
              },
              {
                icon: <Users className="w-6 h-6" />,
                value: "500+",
                label: "Daily Sessions",
              },
              {
                icon: <Calendar className="w-6 h-6" />,
                value: "365",
                label: "Days Active",
              },
              {
                icon: <Star className="w-6 h-6" />,
                value: "4.9",
                label: "User Rating",
              },
            ].map((stat, index) => (
              <div key={index} className="flex flex-col items-center">
                <div
                  className="rounded-full w-12 h-12 flex items-center justify-center mb-4"
                  style={{
                    backgroundColor: colors.secondaryColor,
                    color: colors.bgColor,
                  }}
                >
                  {stat.icon}
                </div>
                <h3
                  className="text-3xl font-bold mb-2"
                  style={{ color: colors.primaryColor }}
                >
                  {stat.value}
                </h3>
                <p style={{ color: colors.primaryColor }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative py-20 px-4">
        <h2
          className="text-5xl font-bold text-center mb-16"
          style={{ color: colors.primaryColor }}
        >
          What Our Community Says
        </h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              quote:
                "This platform transformed my daily routine. I've never felt more centered and peaceful.",
              author: "Sarah J.",
              role: "Practicing for 6 months",
            },
            {
              quote:
                "The guided sessions are perfect for beginners. I've learned so much about mindfulness.",
              author: "Michael R.",
              role: "Practicing for 1 year",
            },
            {
              quote:
                "The community support here is amazing. It keeps me motivated on my meditation journey.",
              author: "Emily L.",
              role: "Practicing for 3 months",
            },
          ].map((testimonial, index) => (
            <div
              key={index}
              className="p-8 rounded-xl"
              style={{ backgroundColor: colors.tertiaryColor }}
            >
              <p
                className="text-lg mb-6 italic"
                style={{ color: colors.primaryColor }}
              >
                &quot;{testimonial.quote}&quot;
              </p>
              <div>
                <p
                  className="font-semibold"
                  style={{ color: colors.primaryColor }}
                >
                  {testimonial.author}
                </p>
                <p className="text-sm" style={{ color: colors.secondaryColor }}>
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Mood Tracker Section */}
      <section className="relative py-20 px-4">
        <div
          className="max-w-2xl mx-auto p-8 rounded-xl"
          style={{ backgroundColor: colors.tertiaryColor }}
        >
          <h2
            className="text-3xl font-bold text-center mb-8"
            style={{ color: colors.primaryColor }}
          >
            Track Your Mindfulness Journey
          </h2>
          <form className="flex flex-col items-center space-y-6">
            <label className="text-lg" style={{ color: colors.primaryColor }}>
              How are you feeling today?
            </label>
            <input
              type="range"
              min="1"
              max="5"
              step="1"
              defaultValue="3"
              className="w-full max-w-md"
              style={{ accentColor: colors.secondaryColor }}
            />
            <div
              className="flex justify-between w-full max-w-md"
              style={{ color: colors.primaryColor }}
            >
              <span>Stressed</span>
              <span>Neutral</span>
              <span>Peaceful</span>
            </div>
          </form>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-5xl font-bold mb-8"
            style={{ color: colors.primaryColor }}
          >
            Begin Your Meditation Journey Today
          </h2>
          <p className="text-xl mb-12" style={{ color: colors.primaryColor }}>
            Join thousands of others who have discovered the power of mindful
            meditation.
          </p>
          <button
            className="px-12 py-6 rounded-lg text-white font-semibold transform hover:scale-105 transition-all duration-300 text-lg"
            style={{ backgroundColor: colors.secondaryColor }}
          >
            Start Free Trial
          </button>
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

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-float {
          animation: float 20s infinite ease-in-out;
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default LandingPage;
