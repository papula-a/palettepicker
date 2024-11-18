"use client";

import FloatingColorPicker from "@/components/FloatingColorPicker";
import { ArrowRight, Check, Palette, Sparkles, Star } from "lucide-react";
import { useEffect, useState } from "react";

const DEFAULT_COLORS = {
  primaryColor: "#FF6B6B", // Vibrant coral
  secondaryColor: "#4ECDC4", // Turquoise
  bgColor: "#F7F7F7", // Light gray
  tertiaryColor: "#45B7D1", // Sky blue
};

const Showcase = () => {
  const [colors, setColors] = useState(DEFAULT_COLORS);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const features = [
    { icon: <Palette className="w-6 h-6" />, text: "Dynamic Theming" },
    { icon: <Check className="w-6 h-6" />, text: "Real-time Preview" },
    { icon: <Sparkles className="w-6 h-6" />, text: "Color Harmony" },
    { icon: <Star className="w-6 h-6" />, text: "Export Options" },
  ];

  const ColorBlock = ({ color, label }) => (
    <div className="group relative overflow-hidden rounded-xl transition-all duration-500 hover:scale-105">
      <div
        className="h-24 w-full rounded-xl shadow-lg transition-all duration-300 group-hover:shadow-2xl"
        style={{ backgroundColor: color }}
      >
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <p className="text-white font-medium">{label}</p>
        </div>
      </div>
    </div>
  );

  return (
    <div
      style={{ backgroundColor: colors.bgColor, color: colors.primaryColor }}
      className="min-h-screen"
    >
      {/* Floating Navigation */}
      <nav
        className={`fixed w-full z-40 transition-all duration-500 ${
          isScrolled ? "py-2" : "py-4"
        }`}
        style={{
          backgroundColor: `${colors.bgColor}${isScrolled ? "ff" : "00"}`,
          backdropFilter: isScrolled ? "blur(10px)" : "none",
        }}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="text-2xl font-bold">ColorPalette</div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0" style={{ opacity: 0.1 }}>
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 100 + 50}px`,
                height: `${Math.random() * 100 + 50}px`,
                backgroundColor: Object.values(colors)[i % 4],
                borderRadius: "50%",
                filter: "blur(40px)",
                opacity: 0.3,
                animation: `pulse ${Math.random() * 3 + 2}s infinite`,
                transform: `rotate(${Math.random() * 360}deg)`,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-6xl md:text-7xl font-bold mb-8 leading-tight">
              Create Beautiful
              <span
                className="block"
                style={{
                  background: `linear-gradient(45deg, ${colors.primaryColor}, ${colors.secondaryColor})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Color Harmonies
              </span>
            </h1>
            <p className="text-xl mb-12 opacity-80">
              Design with confidence using our intelligent color palette
              generator. Create stunning combinations that work perfectly
              together.
            </p>

            {/* Color Blocks */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <ColorBlock color={colors.primaryColor} label="Primary" />
              <ColorBlock color={colors.secondaryColor} label="Secondary" />
              <ColorBlock color={colors.bgColor} label="Background" />
              <ColorBlock color={colors.tertiaryColor} label="Tertiary" />
            </div>

            <button
              className="px-8 py-4 rounded-xl text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2 mx-auto"
              style={{
                background: `linear-gradient(45deg, ${colors.primaryColor}, ${colors.secondaryColor})`,
                boxShadow: `0 4px 20px ${colors.primaryColor}40`,
              }}
            >
              <span>Start Creating</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section
        className="py-20"
        style={{ backgroundColor: `${colors.primaryColor}08` }}
      >
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-xl transition-all duration-300 hover:scale-105"
                style={{
                  backgroundColor: colors.bgColor,
                  boxShadow: `0 4px 20px ${colors.primaryColor}15`,
                }}
              >
                <div
                  className="w-12 h-12 rounded-lg mb-4 flex items-center justify-center"
                  style={{
                    backgroundColor: `${colors.secondaryColor}15`,
                    color: colors.secondaryColor,
                  }}
                >
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.text}</h3>
                <p className="opacity-60">
                  Experience the power of dynamic color theming in real-time.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Color Preview Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            Preview Your Colors
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Text Preview */}
            <div
              className="p-8 rounded-xl"
              style={{ backgroundColor: colors.bgColor }}
            >
              <h3 className="text-2xl font-bold mb-4">Typography</h3>
              <div className="space-y-4">
                <p className="text-4xl font-bold">Heading 1</p>
                <p className="text-3xl font-bold">Heading 2</p>
                <p className="text-2xl font-bold">Heading 3</p>
                <p className="text-xl">Regular text</p>
                <p style={{ color: colors.secondaryColor }}>Accent text</p>
              </div>
            </div>

            {/* UI Elements Preview */}
            <div
              className="p-8 rounded-xl"
              style={{ backgroundColor: colors.bgColor }}
            >
              <h3 className="text-2xl font-bold mb-4">UI Elements</h3>
              <div className="space-y-4">
                <button
                  className="w-full px-4 py-2 rounded-lg text-white transition-transform hover:scale-105"
                  style={{ backgroundColor: colors.primaryColor }}
                >
                  Primary Button
                </button>
                <button
                  className="w-full px-4 py-2 rounded-lg text-white transition-transform hover:scale-105"
                  style={{ backgroundColor: colors.secondaryColor }}
                >
                  Secondary Button
                </button>
                <div
                  className="w-full p-4 rounded-lg"
                  style={{ backgroundColor: colors.tertiaryColor }}
                >
                  <p className="text-white">Card Example</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Export Section */}
      <section
        className="py-20"
        style={{
          background: `linear-gradient(45deg, ${colors.primaryColor}11, ${colors.secondaryColor}11)`,
        }}
      >
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to Export?</h2>
          <p className="mb-8 opacity-80">
            Get your color palette in multiple formats including CSS, SCSS, and
            JSON.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              className="px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105"
              style={{
                backgroundColor: colors.primaryColor,
                color: colors.bgColor,
              }}
            >
              Export CSS
            </button>
            <button
              className="px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105"
              style={{
                backgroundColor: colors.secondaryColor,
                color: colors.bgColor,
              }}
            >
              Export SCSS
            </button>
            <button
              className="px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105"
              style={{
                backgroundColor: colors.tertiaryColor,
                color: colors.bgColor,
              }}
            >
              Export JSON
            </button>
          </div>
        </div>
      </section>

      {/* Floating Color Picker */}
      <FloatingColorPicker
        colors={colors}
        setColors={setColors}
        defaultColors={DEFAULT_COLORS}
      />
    </div>
  );
};

export default Showcase;
