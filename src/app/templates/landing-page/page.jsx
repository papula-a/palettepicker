'use client';

import React, { useState } from 'react';
import Image from 'next/image'; // Import Next.js Image component
import FloatingColorPicker from "@/components/FloatingColorPicker";

const LandingPage = () => {
  // Initialize color states
  const [colors, setColors] = useState({
    primaryColor: "#ffffff", // Default primary color for card backgrounds
    secondaryColor: "#4CAF50", // Default secondary color (for buttons)
    textColor: "#333333", // Default text color
    bgColor: "#F4F4F9", // Default background color
  });

  return (
    <div className="min-h-screen" style={{ backgroundColor: colors.bgColor }}> {/* Use bgColor from state */}
      {/* Hero Section */}
      <section className="text-center py-40 relative">
        <div className="absolute inset-0">
          <svg className="w-full h-full" viewBox="0 0 1440 320">
            <path fill="#ffffff" fillOpacity="0.5" d="M0,128L60,101.3C120,75,240,21,360,10.7C480,0,600,32,720,69.3C840,107,960,149,1080,160C1200,171,1320,149,1380,138.7L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
          </svg>
        </div>
        <h1 className="text-6xl font-bold text-white relative z-10" style={{ color: colors.primaryColor }}>Find Your Peace</h1>
        <p className="mt-4 text-xl text-white relative z-10 max-w-xl mx-auto">
          Join us for guided meditation sessions designed to help you relax and rejuvenate your mind and body.
        </p>
        <a href="#features" className="mt-6 inline-block" style={{ backgroundColor: colors.secondaryColor, color: "#ffffff", padding: "12px 24px", borderRadius: "8px", transition: "background-color 0.3s" }}>
          Get Started
        </a>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800">Why Choose Us?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {/* Feature Item */}
          <div className="bg-green-100 border rounded-lg p-6 shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800">Guided Sessions</h3>
            <p className="mt-2 text-gray-600">Experience our expert-led meditation sessions that cater to all levels.</p>
          </div>
          {/* Feature Item */}
          <div className="bg-yellow-100 border rounded-lg p-6 shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800">Flexible Scheduling</h3>
            <p className="mt-2 text-gray-600">Join sessions that fit your schedule, whether you're at home or on the go.</p>
          </div>
          {/* Feature Item */}
          <div className="bg-pink-100 border rounded-lg p-6 shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800">Community Support</h3>
            <p className="mt-2 text-gray-600">Connect with fellow meditators and share your journey towards mindfulness.</p>
          </div>
        </div>
      </section>

      {/* Discover Your Journey Section */}
      <section className="py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Discover Your Journey</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded shadow-md">
              <Image src="/static/icon1.png" alt="Start Your Practice" width={64} height={64} className="mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Start Your Practice</h3>
              <p className="text-gray-700">Begin with simple, guided sessions to ease into your meditation journey.</p>
            </div>
            <div className="bg-white p-6 rounded shadow-md">
              <Image src="/static/icon2.png" alt="Track Your Progress" width={64} height={64} className="mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Track Your Progress</h3>
              <p className="text-gray-700">Utilize our tools to monitor your meditation frequency and improvements.</p>
            </div>
            <div className="bg-white p-6 rounded shadow-md">
              <Image src="/static/icon3.png" alt="Join a Community" width={64} height={64} className="mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Join a Community</h3>
              <p className="text-gray-700">Engage with fellow meditators, share experiences, and motivate each other.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-40 px-4 bg-blue-50 text-center relative">
        <div className="absolute inset-0">
          <svg className="w-full h-full" viewBox="0 0 1440 320">
            <path fill="#ffffff" d="M0,128L60,101.3C120,75,240,21,360,10.7C480,0,600,32,720,69.3C840,107,960,149,1080,160C1200,171,1320,149,1380,138.7L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
          </svg>
        </div>
        <h2 className="text-4xl font-bold text-gray-800 relative z-10">What Our Users Say</h2>
        <blockquote className="mt-4 italic text-gray-600 relative z-10">
          "This meditation program has changed my life. I feel more centered and focused."
        </blockquote>
        <p className="mt-2 text-gray-700 relative z-10">- Sarah Johnson</p>
        <blockquote className="mt-4 italic text-gray-600 relative z-10">
          "The sessions are easy to follow and have helped me develop a regular practice."
        </blockquote>
        <p className="mt-2 text-gray-700 relative z-10">- Mark Thompson</p>
      </section>

      {/* Floating Color Picker */}
      <FloatingColorPicker colors={colors} setColors={setColors} />
    </div>
  );
};

export default LandingPage;
