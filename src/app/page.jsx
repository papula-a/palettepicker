"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import FeatureCard from "@/components/FeatureCard";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import FAQSection from "@/components/FAQItem";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-pink-100 to-white">
        {/* Left and Right SVG Shapes with Parallax Effect */}
        <svg
          className="absolute left-0 top-0 h-full w-1/2"
          viewBox="0 0 200 800"
          preserveAspectRatio="none"
          style={{
            transform: `translateY(${scrollY * 0.2}px)`,
            transition: "transform 0.1s ease-out",
          }}
        >
          <path
            fill="#C084FC"
            d="M0,0 C60,200 40,600 0,800 L100,800 C160,600 140,200 100,0 Z"
          />
        </svg>
        <svg
          className="absolute right-0 top-0 h-full w-1/2"
          viewBox="0 0 200 800"
          preserveAspectRatio="none"
          style={{
            transform: `translateY(${scrollY * 0.2}px)`,
            transition: "transform 0.1s ease-out",
          }}
        >
          <path
            fill="#F9A8D4"
            d="M100,0 C140,200 160,600 100,800 L200,800 C160,600 140,200 200,0 Z"
          />
          <path
            fill="#F472B6"
            d="M150,0 C130,200 170,600 150,800 L200,800 L200,0 Z"
          />
        </svg>

        {/* Content Container */}
        <div className="relative z-10 flex items-center justify-center w-full h-full">
          <div className="text-center px-4">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Color Your <span className="text-yellow-500">Vision</span>,
              <br />
              Transform Your <span className="text-yellow-500">Website</span>
            </h1>

            {/* Horizontal Rectangle Under Text */}
            <div className="mx-auto mt-4 w-1/2 h-2 rounded-lg bg-gradient-to-r from-purple-200 via-pink-200 to-purple-200" />

            <p className="mt-4 text-lg max-w-prose text-muted-foreground mx-auto">
              Try your color combinations on ready-to-use templates
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4 justify-center">
              <Link
                href="/templates"
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "bg-[#d5adcc] shadow-md text-white font-semibold py-2 px-6 rounded-full transition-transform transform hover:scale-105"
                )}
              >
                Templates
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section with AOS Animation */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-center mb-12">
            Our Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
            <div
              className="flex justify-center transform transition-transform duration-300 hover:scale-105"
              data-aos="fade-up"
            >
              <FeatureCard
                title="Dynamic Color Application"
                description="Instantly apply and visualize your chosen color palette across various elements"
              />
            </div>
            <div
              className="flex justify-center transform transition-transform duration-300 hover:scale-105"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <FeatureCard
                title="Save Functionality"
                description="Easily save your favorite color combinations for future reference"
              />
            </div>
            <div
              className="flex justify-center transform transition-transform duration-300 hover:scale-105"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <FeatureCard
                title="Different Templates"
                description="Explore a diverse collection of pre-made templates tailored for various purposes"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Updated Templates Section without Text */}
      <div className="bg-gradient-to-b from-purple-100 to-pink-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-center mb-12 text-black">
            Our Templates
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {/* Template 1 */}
            <div
              className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center transform transition-transform duration-300 hover:scale-105"
              data-aos="zoom-in"
            >
              <Image
                src="/static/ecommerce.png"
                alt="E-commerce"
                width={48}
                height={48}
                className="mb-4"
              />
              <h3 className="text-lg font-semibold">E-commerce Website</h3>
            </div>

            {/* Template 2 */}
            <div
              className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center transform transition-transform duration-300 hover:scale-105"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <Image
                src="/static/blog.png"
                alt="Blog"
                width={48}
                height={48}
                className="mb-4"
              />
              <h3 className="text-lg font-semibold">Blog Website</h3>
            </div>

            {/* Template 3 */}
            <div
              className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center transform transition-transform duration-300 hover:scale-105"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <Image
                src="/static/portfolio.png"
                alt="Portfolio"
                width={48}
                height={48}
                className="mb-4"
              />
              <h3 className="text-lg font-semibold">Portfolio Website</h3>
            </div>

            {/* Template 4 */}
            <div
              className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center transform transition-transform duration-300 hover:scale-105"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <Image
                src="/static/landing-page.png"
                alt="Landing Page"
                width={48}
                height={48}
                className="mb-4"
              />
              <h3 className="text-lg font-semibold">Landing Page</h3>
            </div>
          </div>

          {/* Try Out Button */}
          <div className="text-center mt-8">
            <Link
              href="/templates"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "bg-[#d5adcc] shadow-md text-white font-semibold py-2 px-6 rounded-full transition-transform transform hover:scale-105"
              )}
            >
              Try Out
            </Link>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <FAQSection />
    </div>
  );
}
