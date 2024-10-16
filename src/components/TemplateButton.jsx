const TemplateButton = ({ text, className }) => (
  <button
    className={`bg-gradient-to-r from-pink-400 to-purple-500 text-white font-semibold py-2 px-4 rounded-full shadow-md hover:from-pink-500 hover:to-purple-600 transition duration-300 ${className}`}>
    {text}
  </button>
);

export default TemplateButton;
