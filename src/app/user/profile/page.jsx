import { UserPalettesList } from "@/components/UserPalettesList";
import { UserProfileAvatar } from "@/components/UserProfileAvatar";
import prisma from "@/lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

export default async function ProfilePage() {
  const { getUser, isAuthenticated } = getKindeServerSession();
  const isUserAuthenticated = await isAuthenticated();

  if (!isUserAuthenticated) {
    redirect("/api/auth/login");
  }

  const user = await getUser();
  if (!user) {
    redirect("/api/auth/login");
  }

  const palettes = await prisma.palette.findMany({
    where: { userId: user.id },
  });

  return (
    <div className="min-h-screen flex flex-col py-6 p-6">
      <main className="flex-grow flex flex-col items-center">
        <UserProfileAvatar user={user} />
        <UserPalettesList palettes={palettes} />
      </main>
    </div>
  );
}
