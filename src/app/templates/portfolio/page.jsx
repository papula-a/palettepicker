"use client";

import FloatingColorPicker from "@/components/FloatingColorPicker";
import {
  Award,
  ChevronDown,
  Heart,
  Medal,
  Send,
  Star,
  Trophy,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const DEFAULT_COLORS = {
  primaryColor: "#1A237E", // Deep navy blue
  secondaryColor: "#FFD700", // Gold for achievements
  bgColor: "#FFFFFF", // Clean white background
  tertiaryColor: "#F5F5F7", // Light gray for sections
};

const Portfolio = () => {
  const [colors, setColors] = useState(DEFAULT_COLORS);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen relative font-sans">
      {/* Navigation Bar */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? "py-2 shadow-lg" : "py-4"
        }`}
        style={{
          backgroundColor: isScrolled ? colors.bgColor : "transparent",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <h1
            className="text-2xl font-bold"
            style={{ color: colors.primaryColor }}
          >
            Simone Biles
          </h1>
          <div className="flex gap-6">
            {["About", "Achievements", "Skills", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:opacity-75 transition-opacity"
                style={{ color: colors.primaryColor }}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/static/simone-biles-hero.jpg"
            alt="Simone Biles"
            fill
            className="object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.7))`,
            }}
          />
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl px-4">
          <h1 className="text-7xl font-bold mb-6">Simone Biles</h1>
          <p className="text-2xl mb-8">
            World Champion Gymnast & Olympic Gold Medalist
          </p>
          <button
            className="px-8 py-4 rounded-full text-lg font-semibold transform hover:scale-105 transition-all duration-300"
            style={{ backgroundColor: colors.secondaryColor }}
          >
            View Achievements
          </button>
        </div>
        <ChevronDown className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-white w-8 h-8" />
      </section>

      {/* Stats Banner */}
      <section
        className="py-12"
        style={{ backgroundColor: colors.primaryColor }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center text-white">
            {[
              {
                icon: <Medal className="w-8 h-8" />,
                value: "32",
                label: "World Medals",
              },
              {
                icon: <Trophy className="w-8 h-8" />,
                value: "7",
                label: "Olympic Medals",
              },
              {
                icon: <Star className="w-8 h-8" />,
                value: "4",
                label: "Signature Moves",
              },
              {
                icon: <Award className="w-8 h-8" />,
                value: "19",
                label: "World Championships",
              },
            ].map((stat, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="mb-4">{stat.icon}</div>
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm opacity-80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2
            className="text-5xl font-bold text-center mb-16"
            style={{ color: colors.primaryColor }}
          >
            About Simone
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg leading-relaxed mb-6">
                Simone Biles is an American gymnast and one of the most
                decorated gymnasts in Olympic history. Known for her
                extraordinary athleticism, she has inspired millions with her
                performances and resilience.
              </p>
              <p className="text-lg leading-relaxed">
                Beyond her athletic achievements, Simone has become a powerful
                voice for mental health awareness in sports, demonstrating that
                true strength includes knowing when to step back and prioritize
                well-being.
              </p>
            </div>
            <div
              className="rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-300"
              style={{ backgroundColor: colors.tertiaryColor }}
            >
              <Image
                src="/static/achievement1.jpg"
                alt="Simone Biles in Action"
                width={600}
                height={400}
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="py-20 px-4"
        style={{ backgroundColor: colors.tertiaryColor }}
      >
        <div className="max-w-7xl mx-auto">
          <h2
            className="text-5xl font-bold text-center mb-16"
            style={{ color: colors.primaryColor }}
          >
            Skills & Strengths
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Power & Precision",
                description:
                  "Renowned for her powerful vaults and precise landings, setting new standards in gymnastics.",
                icon: <Star className="w-8 h-8" />,
              },
              {
                title: "Innovation & Creativity",
                description:
                  "Creator of groundbreaking moves that have revolutionized the sport of gymnastics.",
                icon: <Award className="w-8 h-8" />,
              },
              {
                title: "Mental Strength",
                description:
                  "Demonstrates exceptional resilience and courage in facing challenges both on and off the mat.",
                icon: <Heart className="w-8 h-8" />,
              },
            ].map((skill, index) => (
              <div
                key={index}
                className="p-8 rounded-xl transform hover:scale-105 transition-all duration-300"
                style={{ backgroundColor: colors.bgColor }}
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                  style={{
                    backgroundColor: colors.secondaryColor,
                    color: colors.primaryColor,
                  }}
                >
                  {skill.icon}
                </div>
                <h3
                  className="text-2xl font-semibold mb-4"
                  style={{ color: colors.primaryColor }}
                >
                  {skill.title}
                </h3>
                <p className="text-gray-600">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Timeline */}
      <section id="achievements" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2
            className="text-5xl font-bold text-center mb-16"
            style={{ color: colors.primaryColor }}
          >
            Career Milestones
          </h2>
          <div className="relative">
            {[
              {
                year: "2016",
                title: "Rio Olympics",
                description: "Won 4 Gold medals and 1 Bronze medal",
                image: "/static/achievement1.jpg",
              },
              {
                year: "2019",
                title: "World Championships",
                description:
                  "Most decorated gymnast in World Championship history",
                image: "/static/achievement1.jpg",
              },
              {
                year: "2021",
                title: "Tokyo Olympics",
                description:
                  "Demonstrated courage by prioritizing mental health",
                image: "/static/achievement1.jpg",
              },
            ].map((achievement, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row items-center gap-8 mb-16"
                style={{
                  flexDirection: index % 2 === 0 ? "row" : "row-reverse",
                }}
              >
                <div className="flex-1">
                  <div
                    className="text-4xl font-bold mb-4"
                    style={{ color: colors.secondaryColor }}
                  >
                    {achievement.year}
                  </div>
                  <h3
                    className="text-2xl font-semibold mb-4"
                    style={{ color: colors.primaryColor }}
                  >
                    {achievement.title}
                  </h3>
                  <p className="text-gray-600">{achievement.description}</p>
                </div>
                <div className="flex-1">
                  <div className="rounded-xl overflow-hidden shadow-lg">
                    <Image
                      src={achievement.image}
                      alt={achievement.title}
                      width={600}
                      height={400}
                      className="w-full h-[300px] object-cover transform hover:scale-105 transition-all duration-300"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 px-4"
        style={{ backgroundColor: colors.tertiaryColor }}
      >
        <div className="max-w-7xl mx-auto">
          <h2
            className="text-5xl font-bold text-center mb-16"
            style={{ color: colors.primaryColor }}
          >
            Get in Touch
          </h2>
          <div className="max-w-2xl mx-auto">
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-4 rounded-lg border focus:outline-none focus:ring-2"
                  style={{
                    borderColor: colors.primaryColor,
                    focusRing: colors.secondaryColor,
                  }}
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-4 rounded-lg border focus:outline-none focus:ring-2"
                  style={{
                    borderColor: colors.primaryColor,
                    focusRing: colors.secondaryColor,
                  }}
                />
              </div>
              <textarea
                placeholder="Your Message"
                rows="6"
                className="w-full p-4 rounded-lg border focus:outline-none focus:ring-2"
                style={{
                  borderColor: colors.primaryColor,
                  focusRing: colors.secondaryColor,
                }}
              ></textarea>
              <button
                type="submit"
                className="w-full py-4 rounded-lg text-white font-semibold flex items-center justify-center gap-2 transform hover:scale-105 transition-all duration-300"
                style={{ backgroundColor: colors.primaryColor }}
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="py-8 px-4 text-center"
        style={{ backgroundColor: colors.primaryColor }}
      >
        <p className="text-white">© 2024 Simone Biles. All rights reserved.</p>
      </footer>

      {/* Floating Color Picker */}
      <FloatingColorPicker
        colors={colors}
        setColors={setColors}
        defaultColors={DEFAULT_COLORS}
        className="fixed bottom-4 right-4 z-50"
      />
    </div>
  );
};

export default Portfolio;
