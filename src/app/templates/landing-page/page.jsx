"use client";

import FloatingColorPicker from "@/components/FloatingColorPicker";
import Image from "next/image"; 
import { useState } from "react";

const LandingPage = () => {
  const [colors, setColors] = useState({
    primaryColor: "#333333", // Default primary color
    secondaryColor: "#4CAF50", // Default secondary color
    textColor: "#333333", // Default text color
    bgColor: "#F4F4F9", // Default background color
    tertiaryColor: "#B0BEC5", // Default neutral color for a calm effect
  });

  return (
    <div 
      className="min-h-screen font-sans" 
      style={{ 
        background: `linear-gradient(135deg, ${colors.bgColor} 0%, ${colors.primaryColor} 100%)` 
      }}
    >
      {/* Hero Section */}
      <section className="text-center py-48 relative flex flex-col items-center justify-center">
        <div className="absolute inset-0 z-0">
          <svg className="w-full h-full" viewBox="0 0 1440 320">
            <path
              fill={colors.primaryColor}
              fillOpacity="0.2"
              d="M0,160L60,186.7C120,213,240,267,360,288C480,309,600,299,720,261.3C840,224,960,160,1080,133.3C1200,107,1320,117,1380,122.7L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
            ></path>
          </svg>
        </div>
        <h1 className="text-6xl font-extrabold relative z-10" style={{ color: colors.primaryColor }}>
          Find Your Peace
        </h1>
        <p className="mt-4 text-2xl text-opacity-90 relative z-10 max-w-2xl mx-auto" style={{ color: colors.textColor }}>
          Join us for guided meditation sessions designed to help you relax and rejuvenate your mind and body.
        </p>
        <a
          href="#features"
          className="mt-8 inline-block font-semibold relative z-10"
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
      <section id="features" className="py-20 px-6">
        <h2 className="text-5xl font-bold text-center mb-10" style={{ color: colors.textColor }}>
          Why Choose Us?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-8 relative z-10">
          <div className="rounded-lg p-8 shadow-lg" style={{ backgroundColor: colors.tertiaryColor }}>
            <h3 className="text-2xl font-semibold mb-4" style={{ color: colors.textColor }}>
              Guided Sessions
            </h3>
            <p style={{ color: colors.textColor }}>
              Experience our expert-led meditation sessions that cater to all levels.
            </p>
          </div>
          <div className="rounded-lg p-8 shadow-lg" style={{ backgroundColor: colors.tertiaryColor }}>
            <h3 className="text-2xl font-semibold mb-4" style={{ color: colors.textColor }}>
              Flexible Scheduling
            </h3>
            <p style={{ color: colors.textColor }}>
              Join sessions that fit your schedule, whether you're at home or on the go.
            </p>
          </div>
          <div className="rounded-lg p-8 shadow-lg" style={{ backgroundColor: colors.tertiaryColor }}>
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
            <div className="p-8 rounded-lg shadow-lg" style={{ backgroundColor: colors.tertiaryColor }}>
              <Image src="/static/icon1.png" alt="Start Your Practice" width={64} height={64} className="mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2" style={{ color: colors.textColor }}>
                Start Your Practice
              </h3>
              <p style={{ color: colors.textColor }}>
                Begin with simple, guided sessions to ease into your meditation journey.
              </p>
            </div>
            <div className="p-8 rounded-lg shadow-lg" style={{ backgroundColor: colors.tertiaryColor }}>
              <Image src="/static/icon2.png" alt="Track Your Progress" width={64} height={64} className="mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2" style={{ color: colors.textColor }}>
                Track Your Progress
              </h3>
              <p style={{ color: colors.textColor }}>
                Utilize our tools to monitor your meditation frequency and improvements.
              </p>
            </div>
            <div className="p-8 rounded-lg shadow-lg" style={{ backgroundColor: colors.tertiaryColor }}>
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
      <FloatingColorPicker colors={colors} setColors={setColors} />
    </div>
  );
};

export default LandingPage;
