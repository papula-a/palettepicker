import { deletePalette } from "@/app/actions/palette";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PaletteExportButtons } from "./PaletteExportButtons";

export function UserPalettesList({ palettes }) {
  return (
    <Card className="w-full max-w-6xl bg-white shadow-lg bg-opacity-70">
      <CardHeader>
        <CardTitle>Saved Color Palettes</CardTitle>
      </CardHeader>
      <CardContent>
        {palettes.length > 0 ? (
          palettes.map((palette) => {
            // Ensure palette and its properties exist
            if (!palette || !palette.colors) return null;

            return (
              <div
                key={palette.id}
                className="flex justify-between items-center p-2 border-b last:border-0"
              >
                <div className="flex space-x-4">
                  {palette.colors.map((color, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div
                        className="w-12 h-12 rounded"
                        style={{ backgroundColor: color }}
                      ></div>
                      <span className="text-sm text-gray-700 w-[80px] text-center">
                        {color}
                      </span>
                    </div>
                  ))}
                </div>
                <span className="text-xl text-gray-700 font-medium min-w-[200px] text-center">
                  {palette.name ?? "Unnamed Palette"}
                </span>
                <div className="flex items-center space-x-2">
                  <PaletteExportButtons palette={palette} />
                  <form action={deletePalette}>
                    <input type="hidden" name="id" value={palette._id} />
                    <Button variant="destructive" type="submit">
                      Delete
                    </Button>
                  </form>
                </div>
              </div>
            );
          })
        ) : (
          <p className="text-gray-600 text-center">No palettes found.</p>
        )}
      </CardContent>
    </Card>
  );
}
