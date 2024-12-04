"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const PaletteExportButtons = ({ palette }) => {
  // Export as CSS Variables
  const exportAsCss = () => {
    const cssContent = `:root {\n${palette.colors
      .map((color, index) => `  --palette-color-${index + 1}: ${color};`)
      .join("\n")}\n}`;

    const blob = new Blob([cssContent], { type: "text/css" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = `${palette.name
      .replace(/\s+/g, "-")
      .toLowerCase()}-palette.css`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  // Export as JSON
  const exportAsJson = () => {
    const jsonContent = JSON.stringify(
      {
        name: palette.name,
        colors: palette.colors,
      },
      null,
      2
    );

    const blob = new Blob([jsonContent], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = `${palette.name
      .replace(/\s+/g, "-")
      .toLowerCase()}-palette.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Export as</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-20">
        <DropdownMenuItem
          onClick={exportAsCss}
          className="text-center cursor-pointer"
        >
          CSS
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={exportAsJson}
          className="text-center cursor-pointer"
        >
          JSON
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
