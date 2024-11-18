import { deletePalette } from "@/actions/palette";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function UserPalettesList({ palettes }) {
  return (
    <Card className="w-full max-w-6xl bg-white shadow-lg bg-opacity-70">
      <CardHeader>
        <CardTitle>Saved Color Palettes</CardTitle>
      </CardHeader>
      <CardContent>
        {palettes.length > 0 ? (
          palettes.map((palette) => (
            <div
              key={palette?.id}
              className="flex justify-between items-center p-2 border-b last:border-0"
            >
              <div className="flex space-x-4">
                {palette?.colors.map((color, index) => (
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
                {palette?.name}
              </span>
              <form action={deletePalette}>
                <input type="hidden" name="id" value={palette?.id} />
                <button type="submit" className="text-red-600 px-1">
                  Delete
                </button>
              </form>
            </div>
          ))
        ) : (
          <p className="text-gray-600 text-center">No palettes found.</p>
        )}
      </CardContent>
    </Card>
  );
}
