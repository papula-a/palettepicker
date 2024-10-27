import FeatureCard from "@/components/FeatureCard";
import TemplateButton from "@/components/TemplateButton";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-orange-100 to-white">
        {/* Left shape */}
        <svg
          className="absolute left-0 top-0 h-full w-1/2"
          viewBox="0 0 200 800"
          preserveAspectRatio="none">
          <path fill="#FED7AA" d="M0,0 L100,0 Q200,400 100,800 L0,800 Z" />
        </svg>
        {/* Right shapes */}
        <svg
          className="absolute right-0 top-0 h-full w-1/2"
          viewBox="0 0 200 800"
          preserveAspectRatio="none">
          <path fill="#FED7AA" d="M100,0 Q0,400 100,800 L200,800 L200,0 Z" />
          <path fill="#FDBA74" d="M150,0 Q50,400 150,800 L200,800 L200,0 Z" />
        </svg>
        {/* Content container */}
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
                )}>
                Templates
              </Link>
            </div>
          </div>
        </div>
        <div className="min-h-screen flex flex-col">
          <div className="relative flex-grow w-full overflow-hidden bg-gradient-to-br from-orange-100 to-white">
            {/* SVG shapes code remains the same */}
            {/* ... */}

            {/* Main content */}
            <div className="relative z-10 flex items-center justify-center w-full h-full">
              <div className="text-center px-4">
                <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Color Your <span className="text-yellow-500">Vision</span>,
                  <br />
                  Transform Your{" "}
                  <span className="text-yellow-500">Website</span>
                </h1>
                <p className="mt-4 text-lg max-w-prose text-muted-foreground mx-auto">
                  Try your color combinations on ready-to-use templates
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mt-4 justify-center">
                  <Link
                    href="/template"
                    className={buttonVariants({ variant: "outline" }, "p-4")}>
                    Templates
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Features Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-center mb-12">
            Our Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              title="Dynamic Color Application"
              description="Instantly apply and visualize your chosen color palette across various elements"
            />
            <FeatureCard
              title="Save Functionality"
              description="Easily save your favorite color combinations for future reference"
            />
            <FeatureCard
              title="Different Templates"
              description="Explore a diverse collection of pre-made templates tailored for various purposes"
            />
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
            <TemplateButton text="PORTTFOLIO WEBSITE" />
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
              )}>
              TRY NOW
            </Link>
          </div>
        </div>
      </div>
      {/* FAQ Sections */}
      <div className="bg-white max-w-full mx-auto py-12 px-20">
        <h2 className="text-center text-xl font-semibold mb-8">
          SOME QUESTIONS YOU MIGHT HAVE
        </h2>

        <div className="space-y-4">
          <div className="bg-pink-200 p-4 rounded-lg flex justify-between items-center cursor-pointer">
            <span>What color should I choose for my website</span>
            <span>&#9660;</span>
          </div>

          <div className="bg-pink-200 p-4 rounded-lg flex justify-between items-center cursor-pointer">
            <span>What color should I choose for my website</span>
            <span>&#9660;</span>
          </div>

          <div className="bg-pink-200 p-4 rounded-lg flex justify-between items-center cursor-pointer">
            <span>What color should I choose for my website</span>
            <span>&#9660;</span>
          </div>

          <div className="bg-pink-200 p-4 rounded-lg flex justify-between items-center cursor-pointer">
            <span>What color should I choose for my website</span>
            <span>&#9660;</span>
          </div>
        </div>
      </div>
    </div>
  );
}
