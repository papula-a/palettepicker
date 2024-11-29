"use client";

import { savePalette } from "@/app/actions/palette";
import ColorPicker from "@/components/ColorPicker";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { useCallback, useState } from "react";

const FloatingColorPicker = ({ colors, setColors, defaultColors }) => {
  const { isAuthenticated } = useKindeBrowserClient();
  const [isPickerOpen, setIsPickerOpen] = useState(false);
  const [isSaveDialogOpen, setIsSaveDialogOpen] = useState(false);
  const { toast } = useToast();

  const handleSave = useCallback(
    async (event) => {
      event.preventDefault();

      try {
        const formData = new FormData(event.target);
        formData.append("colors", JSON.stringify(Object.values(colors)));

        const result = await savePalette(formData);

        if (result.success) {
          toast({
            title: "Success",
            description: "Palette saved successfully!",
            variant: "success",
          });
          setIsSaveDialogOpen(false);
          setIsPickerOpen(false);
          setColors(defaultColors);
        } else {
          throw new Error(result.error || "Failed to save palette");
        }
      } catch (error) {
        toast({
          title: "Error",
          description:
            error.message || "Failed to save palette. Please try again.",
          variant: "destructive",
        });
      }
    },
    [
      colors,
      setColors,
      defaultColors,
      setIsSaveDialogOpen,
      setIsPickerOpen,
      toast,
    ]
  );

  return (
    <>
      <div className="fixed bottom-5 right-5 z-50">
        <button
          className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-105 active:scale-95"
          onClick={() => setIsPickerOpen((prev) => !prev)}
          aria-label="Toggle color picker"
        >
          <span className="text-2xl">🎨</span>
        </button>
      </div>

      {isPickerOpen && (
        <div className="fixed bottom-20 right-5 z-50 animate-in fade-in slide-in-from-bottom-5">
          <ColorPicker colors={colors} setColors={setColors} />
          <div className="mt-4 flex justify-end">
            {isAuthenticated && (
              <Button
                onClick={() => setIsSaveDialogOpen(true)}
                className="bg-blue-500 text-white hover:bg-blue-600"
              >
                Save Palette
              </Button>
            )}
          </div>
        </div>
      )}

      <Dialog open={isSaveDialogOpen} onOpenChange={setIsSaveDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Save Color Palette</DialogTitle>
            <DialogDescription>
              Give your palette a name to save it to your collection.
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSave} className="space-y-4">
            <div>
              <label
                htmlFor="palette-name"
                className="block text-sm font-medium text-gray-700"
              >
                Palette Name
              </label>
              <Input
                id="palette-name"
                name="name"
                type="text"
                required
                placeholder="Enter palette name..."
                className="mt-1"
              />
            </div>

            <div className="flex gap-2">
              {Object.values(colors).map((color, index) => (
                <div
                  key={index}
                  className="w-8 h-8 rounded"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>

            <DialogFooter>
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsSaveDialogOpen(false)}
              >
                Cancel
              </Button>
              <Button type="submit">Save Palette</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default FloatingColorPicker;
