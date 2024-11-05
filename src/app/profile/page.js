"use client";

import { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";

// ProfilePage Component
const ProfilePage = () => {
  const [savedPalettes, setSavedPalettes] = useState([]);

  // Load saved palettes from local storage on mount
  useEffect(() => {
    const palettes = JSON.parse(localStorage.getItem("savedPalettes")) || [];
    setSavedPalettes(palettes);
  }, []);

  // Delete a specific palette
  const deletePalette = (index) => {
    const updatedPalettes = savedPalettes.filter((_, i) => i !== index);
    setSavedPalettes(updatedPalettes);
    localStorage.setItem("savedPalettes", JSON.stringify(updatedPalettes));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Profile</h1>

      {/* Display Saved Palettes */}
      <h2 className="text-xl font-semibold mt-6 mb-4">Saved Color Palettes</h2>
      <div className="space-y-4">
        {savedPalettes.length > 0 ? (
          savedPalettes.map((palette, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 bg-white shadow-md rounded-lg"
            >
              <div className="flex items-center space-x-4">
                {/* Display color circles */}
                {Array.isArray(palette)
                  ? palette.map((color, colorIndex) => (
                      <div
                        key={colorIndex}
                        className="w-8 h-8 rounded-full"
                        style={{ backgroundColor: color }}
                      ></div>
                    ))
                  : Object.values(palette).map((color, colorIndex) => (
                      <div
                        key={colorIndex}
                        className="w-8 h-8 rounded-full"
                        style={{ backgroundColor: color }}
                      ></div>
                    ))}
              </div>
              <div className="flex items-center space-x-4">
                {/* Display Color Codes */}
                {Array.isArray(palette)
                  ? palette.map((color, colorIndex) => (
                      <span
                        key={colorIndex}
                        className="text-sm font-semibold text-gray-700"
                      >
                        {color}
                      </span>
                    ))
                  : Object.values(palette).map((color, colorIndex) => (
                      <span
                        key={colorIndex}
                        className="text-sm font-semibold text-gray-700"
                      >
                        {color}
                      </span>
                    ))}
                {/* Delete Button */}
                <button
                  onClick={() => deletePalette(index)}
                  className="text-red-500 hover:text-red-700"
                  title="Delete Palette"
                >
                  <FaTrash className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No color palettes saved yet.</p>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
