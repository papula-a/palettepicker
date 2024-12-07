import { getPalettes } from "@/app/actions/palette";
import { UserPalettesList } from "@/components/UserPalettesList";
import { UserProfileAvatar } from "@/components/UserProfileAvatar";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

const Profile = async () => {
  const { getUser, isAuthenticated } = getKindeServerSession();

  // Check if user is authenticated
  const isUserAuthenticated = await isAuthenticated();
  if (!isUserAuthenticated) {
    redirect("/api/auth/login");
  }

  const user = await getUser();

  // Ensure user exists
  if (!user) {
    redirect("/api/auth/login");
  }

  // Fetch palettes for the authenticated user with error handling
  let palettes;
  try {
    palettes = await getPalettes(user.id);
  } catch (error) {
    console.error("Failed to fetch palettes:", error);
    palettes = [];
  }

  return (
    <div className="min-h-screen flex flex-col py-6 p-6">
      <main className="flex-grow flex flex-col items-center">
        <UserProfileAvatar user={user} />
        <UserPalettesList palettes={palettes} />
      </main>
    </div>
  );
};

export default Profile;
