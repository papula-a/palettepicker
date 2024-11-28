import { getPalettes } from "@/actions/palette";
import { UserPalettesList } from "@/components/UserPalettesList";
import { UserProfileAvatar } from "@/components/UserProfileAvatar";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

const Profile = async () => {
  const { getUser, isAuthenticated } = getKindeServerSession();

  // Check if user is authenticated
  const isUserAuthenticated = isAuthenticated();
  if (!isUserAuthenticated) {
    return <div>Not authenticated</div>;
  }

  const user = await getUser();

  // Fetch palettes for the authenticated user
  const palettes = await getPalettes(user?.id);

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
