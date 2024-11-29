"use client";

import { deletePalette } from "@/app/actions/palette";
import { useState } from "react";

const DeletePaletteButton = ({ paletteId }) => {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    setIsDeleting(true);
    try {
      await deletePalette(paletteId);
    } catch (error) {
      console.error("Failed to delete palette", error);
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <button
      onClick={handleDelete}
      disabled={isDeleting}
      className="text-red-600 px-1 disabled:opacity-50"
    >
      {isDeleting ? "Deleting..." : "Delete"}
    </button>
  );
};

export default DeletePaletteButton;
