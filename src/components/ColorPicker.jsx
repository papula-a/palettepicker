import { useState, useEffect } from "react";

const ColorPicker = ({ onColorChange }) => {
  const [primaryColor, setPrimaryColor] = useState("#050315");
  const [secondaryColor, setSecondaryColor] = useState("#2f27ce");
  const [bgColor, setBgColor] = useState("#fbfbfe");

  // Update colors in parent component whenever any color changes
  useEffect(() => {
    onColorChange({ primaryColor, secondaryColor, bgColor });
  }, [primaryColor, secondaryColor, bgColor]);

  return (
    <div className="p-4 border-t border-gray-300 mt-10">
      <h2 className="text-center font-semibold mb-4">Customize Colors</h2>
      <div className="flex justify-around mb-4">
        <div>
          <label>Primary Color:</label>
          <input
            type="color"
            value={primaryColor}
            onChange={(e) => setPrimaryColor(e.target.value)}
          />
        </div>
        <div>
          <label>Secondary Color:</label>
          <input
            type="color"
            value={secondaryColor}
            onChange={(e) => setSecondaryColor(e.target.value)}
          />
        </div>
        <div>
          <label>Background Color:</label>
          <input
            type="color"
            value={bgColor}
            onChange={(e) => setBgColor(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default ColorPicker;
