const ColorPicker = ({ colors, setColors }) => {
  const handleColorChange = (type, color) => {
    setColors((prevColors) => ({
      ...prevColors,
      [type]: color,
    }));
  };

  return (
    <div className="p-4 bg-white rounded shadow-lg w-48">
      <h4 className="text-lg font-medium mb-2">Select Your Colors</h4>
      <div className="flex flex-col space-y-2">
        {["primaryColor", "secondaryColor", "bgColor"].map((type) => (
          <div key={type} className="flex items-center">
            <div
              className="w-10 h-10 rounded-full cursor-pointer border-2 border-gray-300 mr-2"
              style={{ backgroundColor: colors[type] }}
              onClick={() => {
                const colorInput = document.getElementById(
                  `color-input-${type}`
                );
                colorInput.click();
              }}
            />
            <input
              type="color"
              id={`color-input-${type}`}
              value={colors[type]}
              onChange={(e) => handleColorChange(type, e.target.value)}
              className="hidden"
            />
            <span className="text-sm ml-2">{colors[type]}</span>{" "}
            {/* Display the selected color code */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColorPicker;
