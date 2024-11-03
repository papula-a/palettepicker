const FeatureCard = ({ title, description }) => (
  <div className="bg-gradient-to-br from-purple-100 to-orange-100 p-6 rounded-lg shadow-md">
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-sm text-gray-600">{description}</p>
  </div>
);

export default FeatureCard;
