import { useState } from "react";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
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
          &#9660;
        </span>
      </button>
      {isOpen && (
        <div
          className="mt-4 text-gray-700 p-4 rounded-lg"
          style={{
            background: "linear-gradient(to right, #FAD2E1, #FFF7E1)", // gradient when open
          }}
        >
          {answer}
        </div>
      )}
    </div>
  );
};

export default FAQItem;
