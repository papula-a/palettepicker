"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import FeatureCard from "@/components/FeatureCard";
import TemplateButton from "@/components/TemplateButton";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
<<<<<<< HEAD
import FAQSection from "@/components/FAQItem"; // Import the new FAQSection component
=======
import FAQItem from "@/components/FAQItem"; // Import FAQItem component
>>>>>>> 7f6990b48b867a5926556dcb6c1f09beabf255fd

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800, // animation duration in milliseconds
      once: false, // whether animation should happen only once
    });
  }, []);

  return (
    <div>
      {/* Hero Section */}
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
        <div className="relative z-10 flex items-center justify-center w-full h-full px-4">
          <div className="text-center">
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
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8 justify-center">
            <div data-aos="zoom-in" className="col-span-2 md:col-span-1">
              <TemplateButton text="E-COMMERCE WEBSITE" />
            </div>
            <div
              data-aos="zoom-in"
              data-aos-delay="100"
              className="col-span-2 md:col-span-1"
            >
              <TemplateButton text="BLOG WEBSITE" />
            </div>
            <div data-aos="zoom-in" data-aos-delay="200">
              <TemplateButton text="PORTFOLIO WEBSITE" />
            </div>
            <div
              data-aos="zoom-in"
              data-aos-delay="300"
              className="col-span-2 md:col-span-1"
            >
              <TemplateButton text="LANDING PAGE WEBSITE" />
            </div>
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
<<<<<<< HEAD
      <FAQSection /> {/* Use the new FAQSection component here */}
=======
      <div className="bg-white max-w-full mx-auto py-12 px-4 sm:px-20">
        <h2 className="text-center text-xl font-semibold mb-8">
          SOME QUESTIONS YOU MIGHT HAVE
        </h2>
        <div className="space-y-4">
          <div data-aos="zoom-in">
            <FAQItem
              question="What color should I choose for my website?"
              answer="The best colors depend on your brand and audience. Generally, soft and neutral tones are safe and work well for a professional look, while bright colors can attract attention and convey a more energetic vibe."
            />
          </div>
          <div data-aos="zoom-in" data-aos-delay="100">
            <FAQItem
              question="How do I save my favorite color combinations?"
              answer="Once you've created a color combination you like, you can use the 'Save' button to store it in your saved combinations. This way, you can access and apply your saved colors anytime in your projects."
            />
          </div>
          <div data-aos="zoom-in" data-aos-delay="200">
            <FAQItem
              question="Can I change the color palette anytime?"
              answer="Yes, you can change the colors anytime! Our platform is designed to allow easy customization, so feel free to experiment with different colors to find the perfect match for your style."
            />
          </div>
          <div data-aos="zoom-in" data-aos-delay="300">
            <FAQItem
              question="Are there template customization options?"
              answer="Absolutely! Each template offers customization options to adjust colors, layouts, and other elements, so you can make it unique to your brand and style."
            />
          </div>
        </div>
      </div>
>>>>>>> 7f6990b48b867a5926556dcb6c1f09beabf255fd
    </div>
  );
}
