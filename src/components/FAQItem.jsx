import { useState } from "react";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`transition-all duration-300 ${
        isOpen ? "bg-pink-200" : "bg-white"
      } rounded-lg shadow-md overflow-hidden p-4 mb-4 cursor-pointer hover:shadow-lg hover:bg-pink-100 max-w-3xl mx-auto`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <button className="flex justify-between items-center w-full text-left focus:outline-none">
        <span
          className={`text-gray-800 font-medium ${
            isOpen ? "font-bold" : ""
          } text-lg`}
        >
          {question}
        </span>
        <span
          className={`transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          &#9660;
        </span>
      </button>
      {isOpen && (
        <div className="mt-4 p-4 bg-pink-50 text-gray-700 rounded-lg shadow-inner">
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
      answer:
        "Choosing colors depends on your brand identity and audience. Generally, consider using a primary color that reflects your brand, a secondary color for accents, and neutral colors for backgrounds. You can also use color theory principles to create a harmonious palette.",
    },
    {
      question: "How do I save my favorite color combinations?",
      answer:
        "You can save your favorite color combinations by creating an account on our website. Once logged in, you’ll have the option to save palettes for future reference and easily access them anytime.",
    },
    {
      question: "Can I change the color palette anytime?",
      answer:
        "Absolutely! You can change your color palette at any time. Our platform allows you to experiment with different combinations, and you can update your saved palettes whenever you want.",
    },
    {
      question: "Are there template customization options?",
      answer:
        "Yes, we offer various customization options for our templates. You can adjust colors, fonts, layouts, and more to fit your unique style. Our goal is to help you create a website that truly represents your vision.",
    },
  ];

  return (
    <div className="bg-white max-w-4xl mx-auto py-12 px-6">
      <h2 className="text-center text-xl font-medium text-gray-700 mb-8">
        Some Questions You Might Have
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
