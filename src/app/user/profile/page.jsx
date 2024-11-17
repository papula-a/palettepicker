import { deletePalette } from "@/actions/palette";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import prisma from "@/lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { FaUser } from "react-icons/fa";

export default async function Profile() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  const palettes = await prisma.palette.findMany({
    where: {
      userId: user?.id,
    },
  });

  return (
    <div className="min-h-screen flex flex-col py-6 p-6">
      <main className="flex-grow flex flex-col items-center">
        <Card className="w-full max-w-6xl p-4 mb-8 bg-white shadow-lg bg-opacity-70">
          <CardHeader className="flex items-center justify-center">
            <Avatar className="w-40 h-40 mb-4">
              <AvatarImage src={user?.picture} alt={user?.given_name} />
              <AvatarFallback>
                <FaUser className="text-6xl" />
              </AvatarFallback>
            </Avatar>
            <h2 className="text-xl font-semibold">
              {user?.given_name + " " + user?.family_name}
            </h2>
            <p className="text-gray-600">Email: {user?.email}</p>
          </CardHeader>
        </Card>

        <Card className="w-full max-w-6xl bg-white shadow-lg bg-opacity-70">
          <CardHeader>
            <CardTitle>Saved Color Palettes</CardTitle>
          </CardHeader>
          <CardContent>
            {palettes.length > 0 ? (
              palettes.map((palette) => (
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
                    {palette.name}
                  </span>
                  <div className="flex space-x-2">
                    <form action={deletePalette}>
                      <input type="hidden" name="id" value={palette.id} />
                      <Button
                        type="submit"
                        variant="link"
                        className="text-red-600 px-1"
                      >
                        Delete
                      </Button>
                    </form>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-600">No palettes found.</p>
            )}
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
