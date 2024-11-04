"use client";

const ColorPicker = ({ colors, setColors }) => {
  const handleColorChange = (type, color) => {
    setColors((prevColors) => ({
      ...prevColors,
      [type]: color,
    }));
  };

  // Save the current color selection as a palette in local storage
  const savePalette = () => {
    const newPalette = [
      colors.primaryColor,
      colors.secondaryColor,
      colors.bgColor,
    ];
    const savedPalettes =
      JSON.parse(localStorage.getItem("savedPalettes")) || [];
    const updatedPalettes = [...savedPalettes, newPalette];

    localStorage.setItem("savedPalettes", JSON.stringify(updatedPalettes));
    alert("Palette saved successfully!");
  };

  return (
    <div className="p-4 bg-white rounded shadow-lg w-48 mx-auto">
      <h4 className="text-lg font-medium mb-4 text-center">
        Select Your Colors
      </h4>
      <div className="flex flex-col space-y-2">
        {["primaryColor", "secondaryColor", "bgColor"].map((type) => (
          <div key={type} className="flex items-center">
            <div
              className="w-10 h-10 rounded-full cursor-pointer border-2 border-gray-300 mr-2"
              style={{ backgroundColor: colors[type] }}
              onClick={() =>
                document.getElementById(`color-input-${type}`).click()
              }
            />
            <input
              type="color"
              id={`color-input-${type}`}
              value={colors[type]}
              onChange={(e) => handleColorChange(type, e.target.value)}
              className="hidden"
            />
            <span className="text-sm ml-2">{colors[type]}</span>
          </div>
        ))}
      </div>

      {/* Save Button */}
      <button
        onClick={savePalette}
        className="mt-4 w-full bg-[#d5adcc] shadow-md text-white font-semibold py-2 px-6 rounded-full transition-transform transform hover:scale-105"
      >
        Save Palette
      </button>
    </div>
  );
};

export default ColorPicker;
