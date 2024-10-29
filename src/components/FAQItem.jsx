<<<<<<< HEAD
import { useState } from 'react';
=======
import { useState } from "react";
>>>>>>> 7f6990b48b867a5926556dcb6c1f09beabf255fd

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
<<<<<<< HEAD
    <div className={`border-b border-gray-200 ${isOpen ? "border-pink-500" : "border-gray-200"} py-4`}>
      <button
        className={`flex justify-between items-center w-full text-left p-4 ${isOpen ? "bg-pink-100" : "bg-white"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={`text-gray-800 font-medium ${isOpen ? "font-bold" : ""}`}>
          {question}
        </span>
        <span className={`transform transition-transform ${isOpen ? "rotate-180" : ""}`}>
=======
    <div
      className="p-4 rounded-lg cursor-pointer mb-2 transition-colors"
      style={{
        background: "linear-gradient(to right, #FAD2E1, #FFF7E1)", // gradient always visible
      }}
    >
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-gray-800 font-medium">{question}</span>
        <span
          className={`w-5 h-5 transform transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          style={{ color: "black" }} // set icon color to black
        >
>>>>>>> 7f6990b48b867a5926556dcb6c1f09beabf255fd
          &#9660;
        </span>
      </button>
      {isOpen && (
<<<<<<< HEAD
        <div className="mt-2 p-4 border-t border-gray-300 bg-pink-50 text-gray-700">
=======
        <div
          className="mt-4 text-gray-700 p-4 rounded-lg"
          style={{
            background: "linear-gradient(to right, #FAD2E1, #FFF7E1)", // gradient when open
          }}
        >
>>>>>>> 7f6990b48b867a5926556dcb6c1f09beabf255fd
          {answer}
        </div>
      )}
    </div>
  );
};

const FAQSection = () => {
  const faqs = [
    {
      question: "What color should I choose for my website?",
      answer: "Choosing colors depends on your brand identity and audience. Generally, consider using a primary color that reflects your brand, a secondary color for accents, and neutral colors for backgrounds. You can also use color theory principles to create a harmonious palette."
    },
    {
      question: "How do I save my favorite color combinations?",
      answer: "You can save your favorite color combinations by creating an account on our website. Once logged in, you’ll have the option to save palettes for future reference and easily access them anytime."
    },
    {
      question: "Can I change the color palette anytime?",
      answer: "Absolutely! You can change your color palette at any time. Our platform allows you to experiment with different combinations, and you can update your saved palettes whenever you want."
    },
    {
      question: "Are there template customization options?",
      answer: "Yes, we offer various customization options for our templates. You can adjust colors, fonts, layouts, and more to fit your unique style. Our goal is to help you create a website that truly represents your vision."
    }
  ];

  return (
    <div className="bg-white max-w-full mx-auto py-12 px-20">
      <h2 className="text-center text-xl font-semibold mb-8">
        SOME QUESTIONS YOU MIGHT HAVE
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
