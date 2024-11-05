"use client";

import FloatingColorPicker from "@/components/FloatingColorPicker";
import Image from "next/image"; 
import { useState } from "react";

const LandingPage = () => {
  const [colors, setColors] = useState({
    primaryColor: "#5D8AA8", // Soft blue-gray for a calming effect
    secondaryColor: "#A8D5BA", // Gentle sage green
    textColor: "#4F4F4F", // Medium-dark gray for readability
    bgColor: "#F9F9F9", // Light, warm gray background
    tertiaryColor: "#ebebf0", // Soft peach color for accents
  });

  return (
    <div 
      className="min-h-screen font-sans relative overflow-hidden" 
      style={{ background: `linear-gradient(135deg, ${colors.bgColor} 0%, ${colors.primaryColor} 100%)` }}
    >
      {/* Sunburst Background */}
      <div className="absolute inset-0 flex items-center justify-center">
        <svg className="w-96 h-96 opacity-10" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" fill={colors.secondaryColor} />
        </svg>
      </div>

      {/* Floating Bubbles */}
      <div className="bubble bubble1" style={{ backgroundColor: colors.tertiaryColor }}></div>
      <div className="bubble bubble2" style={{ backgroundColor: colors.secondaryColor }}></div>
      <div className="bubble bubble3" style={{ backgroundColor: colors.primaryColor }}></div>

      {/* Hero Section */}
      <section className="text-center py-48 relative flex flex-col items-center justify-center z-10">
        <h1 className="text-6xl font-extrabold" style={{ color: colors.primaryColor }}>
          Find Your Peace
        </h1>
        <p className="mt-4 text-2xl text-opacity-90 max-w-2xl mx-auto" style={{ color: colors.textColor }}>
          Join us for guided meditation sessions designed to help you relax and rejuvenate your mind and body.
        </p>
        <a
          href="#features"
          className="mt-8 inline-block font-semibold"
          style={{
            backgroundColor: colors.secondaryColor,
            color: "#ffffff",
            padding: "14px 28px",
            borderRadius: "8px",
            transition: "background-color 0.3s ease",
          }}
        >
          Get Started
        </a>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 relative z-0">
        <h2 className="text-5xl font-bold text-center mb-10" style={{ color: colors.textColor }}>
          Why Choose Us?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-8">
          <div className="rounded-lg p-8 shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl" style={{ backgroundColor: colors.tertiaryColor }}>
            <h3 className="text-2xl font-semibold mb-4" style={{ color: colors.textColor }}>
              Guided Sessions
            </h3>
            <p style={{ color: colors.textColor }}>
              Experience our expert-led meditation sessions that cater to all levels.
            </p>
          </div>
          <div className="rounded-lg p-8 shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl" style={{ backgroundColor: colors.tertiaryColor }}>
            <h3 className="text-2xl font-semibold mb-4" style={{ color: colors.textColor }}>
              Flexible Scheduling
            </h3>
            <p style={{ color: colors.textColor }}>
              Join sessions that fit your schedule, whether you're at home or on the go.
            </p>
          </div>
          <div className="rounded-lg p-8 shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl" style={{ backgroundColor: colors.tertiaryColor }}>
            <h3 className="text-2xl font-semibold mb-4" style={{ color: colors.textColor }}>
              Community Support
            </h3>
            <p style={{ color: colors.textColor }}>
              Connect with fellow meditators and share your journey towards mindfulness.
            </p>
          </div>
        </div>
      </section>

      {/* Discover Your Journey Section */}
      <section className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8" style={{ color: colors.textColor }}>
            Discover Your Journey
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="p-8 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl" style={{ backgroundColor: colors.tertiaryColor }}>
              <Image src="/static/icon1.png" alt="Start Your Practice" width={64} height={64} className="mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2" style={{ color: colors.textColor }}>
                Start Your Practice
              </h3>
              <p style={{ color: colors.textColor }}>
                Begin with simple, guided sessions to ease into your meditation journey.
              </p>
            </div>
            <div className="p-8 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl" style={{ backgroundColor: colors.tertiaryColor }}>
              <Image src="/static/icon2.png" alt="Track Your Progress" width={64} height={64} className="mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2" style={{ color: colors.textColor }}>
                Track Your Progress
              </h3>
              <p style={{ color: colors.textColor }}>
                Utilize our tools to monitor your meditation frequency and improvements.
              </p>
            </div>
            <div className="p-8 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl" style={{ backgroundColor: colors.tertiaryColor }}>
              <Image src="/static/icon3.png" alt="Join a Community" width={64} height={64} className="mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2" style={{ color: colors.textColor }}>
                Join a Community
              </h3>
              <p style={{ color: colors.textColor }}>
                Engage with fellow meditators, share experiences, and motivate each other.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Floating Color Picker */}
      <FloatingColorPicker colors={colors} setColors={setColors} className="relative z-50" />

      {/* Bubble CSS */}
      <style jsx>{`
        .bubble {
          position: absolute;
          border-radius: 50%;
          opacity: 0.15;
          animation: float 10s infinite ease-in-out;
        }

        .bubble1 {
          width: 100px;
          height: 100px;
          bottom: 10%;
          left: 10%;
          animation-delay: 0s;
        }

        .bubble2 {
          width: 150px;
          height: 150px;
          bottom: 20%;
          right: 15%;
          animation-delay: 2s;
        }

        .bubble3 {
          width: 80px;
          height: 80px;
          top: 15%;
          left: 25%;
          animation-delay: 4s;
        }

        @keyframes float {
          0% {
            transform: translateY(0);
            opacity: 0.1;
          }
          50% {
            transform: translateY(-20px);
            opacity: 0.3;
          }
          100% {
            transform: translateY(0);
            opacity: 0.1;
          }
        }
      `}</style>
    </div>
  );
};

export default LandingPage;
