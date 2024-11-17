"use client";

const ColorPicker = ({ colors, setColors }) => {
  const colorLabels = {
    primaryColor: "Text Color",
    secondaryColor: "Button Color",
    bgColor: "Background Color",
    tertiaryColor: "Whitespace Color",
  };

  const handleColorChange = (type, color) => {
    setColors((prevColors) => ({
      ...prevColors,
      [type]: color,
    }));
  };

  return (
    <div className="p-4 bg-white bg-opacity-60 backdrop-blur-md rounded-md shadow-md flex flex-col space-y-4 border border-gray-300 z-50">
      <div className="flex items-center space-x-6">
        {Object.entries(colorLabels).map(([type, label]) => (
          <div key={type} className="flex flex-col items-center">
            <div
              className="w-8 h-8 rounded cursor-pointer border border-gray-300 transition-transform hover:scale-110"
              style={{ backgroundColor: colors[type] || "#FFFFFF" }}
              onClick={() =>
                document.getElementById(`color-input-${type}`).click()
              }
            />
            <input
              type="color"
              id={`color-input-${type}`}
              value={colors[type] || "#FFFFFF"}
              onChange={(e) => handleColorChange(type, e.target.value)}
              className="hidden"
            />
            <span className="text-xs text-gray-600 mt-1">{label}</span>
          </div>
        ))}
      </div>
      <div className="flex w-full h-8 rounded-lg overflow-hidden">
        {Object.values(colors).map((color, index) => (
          <div
            key={index}
            className="flex-1 transition-all"
            style={{ backgroundColor: color || "#FFFFFF" }}
          />
        ))}
      </div>
    </div>
  );
};

export default ColorPicker;
