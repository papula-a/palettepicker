"use client"; // Required for Client Component

import { useState } from "react";
import ColorPicker from "@/components/ColorPicker"; // Adjust the path as necessary

const FloatingColorPicker = ({ colors, setColors }) => {
  const [isPickerOpen, setIsPickerOpen] = useState(false);

  return (
    <>
      {/* Floating Circle Button for Color Picker */}
      <div className="fixed bottom-5 right-5">
        <button
          className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center shadow-lg hover:shadow-xl transition"
          onClick={() => setIsPickerOpen(prev => !prev)}
        >
          <span className="text-2xl">🎨</span> {/* Icon for the color picker */}
        </button>
      </div>

      {/* Conditional Rendering of Color Picker */}
      {isPickerOpen && (
        <div className="fixed bottom-16 right-5">
          <ColorPicker colors={colors} setColors={setColors} />
        </div>
      )}
    </>
  );
};

export default FloatingColorPicker;
