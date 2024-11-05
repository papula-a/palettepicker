"use client";
import { FaArrowDown } from "react-icons/fa"; // Importing a down arrow icon

const ColorPicker = ({ colors, setColors }) => {
  const handleColorChange = (type, color) => {
    setColors((prevColors) => ({
      ...prevColors,
      [type]: color,
    }));
  };

  // Save the current color selection as a palette in local storage
  const savePalette = () => {
    const newPalette = {
      primaryColor: colors.primaryColor,
      secondaryColor: colors.secondaryColor,
      bgColor: colors.bgColor,
      tertiaryColor: colors.tertiaryColor || "#FFFFFF", // Ensure tertiary color is saved with default white if not set
    };

    const savedPalettes =
      JSON.parse(localStorage.getItem("savedPalettes")) || [];
    const updatedPalettes = [...savedPalettes, newPalette];

    localStorage.setItem("savedPalettes", JSON.stringify(updatedPalettes));
    alert("Palette saved successfully!");
  };

  return (
    <div className="p-2 bg-white bg-opacity-60 backdrop-blur-md rounded-md shadow-md flex items-center space-x-6 border border-gray-300">
      {["primaryColor", "secondaryColor", "bgColor", "tertiaryColor"].map(
        (type) => (
          <div key={type} className="flex flex-col items-center">
            <div
              className="w-8 h-8 rounded cursor-pointer border border-gray-300"
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
            <span className="text-xs text-gray-600">
              {colors[type] || "#FFFFFF"}
            </span>
          </div>
        )
      )}

      {/* Save Icon Button */}
      <button
        onClick={savePalette}
        className="text-gray-500 hover:text-gray-700"
      >
        <FaArrowDown size={20} />
      </button>
    </div>
  );
};

export default ColorPicker;
