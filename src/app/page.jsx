"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import FeatureCard from "@/components/FeatureCard";
import TemplateButton from "@/components/TemplateButton";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import FAQSection from "@/components/FAQItem"; // Import the new FAQSection component

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800, // animation duration in milliseconds
      once: false, // whether animation should happen only once
    });
  }, []);

  return (
    <div>
      <div className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-orange-100 to-white">
        {/* Left and Right SVG Shapes */}
        <svg
          className="absolute left-0 top-0 h-full w-1/2"
          viewBox="0 0 200 800"
          preserveAspectRatio="none"
        >
          <path fill="#FED7AA" d="M0,0 L100,0 Q200,400 100,800 L0,800 Z" />
        </svg>
        <svg
          className="absolute right-0 top-0 h-full w-1/2"
          viewBox="0 0 200 800"
          preserveAspectRatio="none"
        >
          <path fill="#FED7AA" d="M100,0 Q0,400 100,800 L200,800 L200,0 Z" />
          <path fill="#FDBA74" d="M150,0 Q50,400 150,800 L200,800 L200,0 Z" />
        </svg>

        {/* Content Container */}
        <div className="relative z-10 flex items-center justify-center w-full h-full">
          <div className="text-center px-4">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Color Your <span className="text-yellow-500">Vision</span>,
              <br />
              Transform Your <span className="text-yellow-500">Website</span>
            </h1>
            <p className="mt-4 text-lg max-w-prose text-muted-foreground mx-auto">
              Try your color combinations on ready-to-use templates
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4 justify-center">
              <Link
                href="/templates"
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "bg-orange-200 hover:bg-orange-200 text-gray-800 font-semibold py-2 px-6 rounded-full"
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div data-aos="fade-up">
              <FeatureCard
                title="Dynamic Color Application"
                description="Instantly apply and visualize your chosen color palette across various elements"
              />
            </div>
            <div data-aos="fade-up" data-aos-delay="100">
              <FeatureCard
                title="Save Functionality"
                description="Easily save your favorite color combinations for future reference"
              />
            </div>
            <div data-aos="fade-up" data-aos-delay="200">
              <FeatureCard
                title="Different Templates"
                description="Explore a diverse collection of pre-made templates tailored for various purposes"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Templates Section */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-center mb-12">
            Our Templates
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <TemplateButton text="E-COMMERCE WEBSITE" className="col-span-2" />
            <TemplateButton text="BLOG WEBSITE" className="col-span-2" />
            <TemplateButton text="PORTFOLIO WEBSITE" />
            <TemplateButton
              text="LANDING PAGE WEBSITE"
              className="col-span-2 md:col-span-3"
            />
          </div>
          <div className="text-center">
            <Link
              href="/templates"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "bg-pink-200 hover:bg-pink-200 text-gray-800 font-semibold py-2 px-6 rounded-full"
              )}
            >
              TRY NOW
            </Link>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <FAQSection /> {/* Use the new FAQSection component here */}
    </div>
  );
}
