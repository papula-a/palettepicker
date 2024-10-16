const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={() => setIsOpen(!isOpen)}>
        <span className="text-gray-800 font-medium">{question}</span>
        {/* <ChevronDown
          className={`w-5 h-5 text-gray-500 transform transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        /> */}
      </button>
      {isOpen && <div className="mt-2 text-gray-600">{answer}</div>}
    </div>
  );
};

export default FAQItem;
