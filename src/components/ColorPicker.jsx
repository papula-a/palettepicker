import { useState } from "react";

const ColorPicker = ({ colors, setColors }) => {
  const [currentColorType, setCurrentColorType] = useState(null); // To track which color type is currently being edited

  const handleColorChange = (type, color) => {
    setColors(prevColors => ({
      ...prevColors,
      [type]: color,
    }));
  };

  const handleCircleClick = (type) => {
    setCurrentColorType(type);
    const colorInput = document.getElementById(`color-input-${type}`);
    colorInput.click(); // Simulate click on the hidden input
  };

  return (
    <div className="flex flex-col mt-4">
      <h4 className="text-sm font-medium">Select Colors</h4>

      {/* Color Circles for Primary, Secondary, Background, and Text */}
      <div className="flex space-x-4">
        {['primaryColor', 'secondaryColor', 'bgColor'].map((type) => (
          <div key={type} className="flex flex-col items-center">
            <span className="font-semibold">{type.charAt(0).toUpperCase() + type.slice(1).replace('Color', '')}:</span>
            <div
              onClick={() => handleCircleClick(type)}
              className="w-12 h-12 rounded-full cursor-pointer border-2 border-gray-300"
              style={{ backgroundColor: colors[type] }}
            />
            <input
              type="color"
              id={`color-input-${type}`}
              value={colors[type]}
              onChange={(e) => handleColorChange(type, e.target.value)}
              className="hidden"
              onBlur={() => setCurrentColorType(null)} // Optionally reset currentColorType on blur
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColorPicker;
