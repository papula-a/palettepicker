import Link from "next/link";

const TemplateButton = ({ text, className, href }) => {
  const rectangleContent = (
    <div
      className={`w-60 h-24 bg-gradient-to-r from-pink-400 to-purple-500 text-white font-semibold flex items-center justify-center rounded-lg shadow-md hover:from-pink-500 hover:to-purple-600 transition duration-300 ${className}`}
    >
      {text}
    </div>
  );

  return href ? (
    <Link href={href} passHref>
      <a>{rectangleContent}</a>
    </Link>
  ) : (
    <div>{rectangleContent}</div>
  );
};

export default TemplateButton;
