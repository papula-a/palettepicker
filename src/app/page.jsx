"use client";
import { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import FeatureCard from "@/components/FeatureCard";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import FAQSection from "@/components/FAQItem";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });

    // Re-initialize AOS after the page is loaded to ensure animations display
    setTimeout(() => {
      AOS.refresh();
    }, 500);
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

      {/* Updated Templates Section */}
      <div className="bg-gradient-to-b from-[#c198bb] to-[#fdd7ae] py-16">
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
              <h3 className="text-lg font-semibold mb-2">E-commerce Website</h3>
              <p className="text-sm text-gray-600 mb-4">
                This is the e-commerce page template where you can test and
                apply different color schemes to see how your online store could
                look.
              </p>
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
              <h3 className="text-lg font-semibold mb-2">Blog Website</h3>
              <p className="text-sm text-gray-600 mb-4">
                This is the blog page template where you can experiment with
                color themes to enhance the reading experience for your
                audience.
              </p>
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
              <h3 className="text-lg font-semibold mb-2">Portfolio Website</h3>
              <p className="text-sm text-gray-600 mb-4">
                This is the portfolio page template where you can try out color
                combinations to create a personalized showcase of your work.
              </p>
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
              <h3 className="text-lg font-semibold mb-2">Landing Page</h3>
              <p className="text-sm text-gray-600 mb-4">
                This is the landing page template where you can apply different
                color palettes to make a strong first impression.
              </p>
            </div>
          </div>

          {/* Try Out Button */}
          <div className="text-center mt-8">
            <Link
              href="/templates"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "bg-[#b389a9] shadow-md text-white font-semibold py-2 px-6 rounded-full transition-transform transform hover:scale-105"
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
