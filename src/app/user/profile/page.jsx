import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function Profile() {
  return (
    <div className="min-h-screen flex flex-col py-6 bg-gradient-to-tr from-purple-400 to-pink-400 p-6">
      <main className="flex-grow flex flex-col items-center">
        <Card className="w-full max-w-6xl p-4 mb-8 bg-white shadow-lg bg-opacity-70">
          <CardHeader className="flex items-center justify-center">
            <Avatar className="w-40 h-40 mb-4">
              <AvatarImage src="" alt="Profile picture" />
              <AvatarFallback>👤</AvatarFallback>
            </Avatar>
            <h2 className="text-xl font-semibold">User Name</h2>
            <p className="text-gray-600">Email: user@example.com</p>
          </CardHeader>
        </Card>

        <Card className="w-full max-w-6xl mb-8 bg-white shadow-lg bg-opacity-70">
          <CardHeader>
            <CardTitle>Edit Your Preferences</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col space-y-4">
              <Input placeholder="Preferred Color" />
              <Input placeholder="Favorite Palette Name" />
              <Button variant="primary" className="w-full bg-purple-600">
                Save Changes
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="w-full max-w-6xl bg-white shadow-lg bg-opacity-70">
          <CardHeader>
            <CardTitle>Saved Color Palettes</CardTitle>
          </CardHeader>
          <CardContent>
            {[...Array(5)].map((_, index) => (
              <div
                key={index}
                className="flex justify-between items-center p-2 border-b last:border-0"
              >
                <div className="flex space-x-2 items-center">
                  <div
                    className="w-10 h-10 rounded"
                    style={{ backgroundColor: "#FF5733" }}
                  ></div>
                  <span className="text-gray-700">#FF5733</span>
                </div>
                <span className="text-gray-700">Palette Name</span>
                <div className="flex space-x-2">
                  <Button variant="link" className="text-blue-600 px-1">
                    Edit
                  </Button>
                  <Button variant="link" className="text-red-600 px-1">
                    Delete
                  </Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
