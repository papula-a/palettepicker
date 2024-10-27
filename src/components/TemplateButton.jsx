import Link from "next/link";

const TemplateButton = ({ text, className, href }) => {
  const buttonContent = (
    <span
      className={`bg-gradient-to-r from-pink-400 to-purple-500 text-white font-semibold py-2 px-4 rounded-full shadow-md hover:from-pink-500 hover:to-purple-600 transition duration-300 ${className}`}
    >
      {text}
    </span>
  );

  return href ? (
    <Link href={href} passHref>
      <a>{buttonContent}</a>
    </Link>
  ) : (
    <button>{buttonContent}</button>
  );
};

export default TemplateButton;
