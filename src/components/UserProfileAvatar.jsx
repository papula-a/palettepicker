import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardHeader } from "@/components/ui/card";
import { FaUser } from "react-icons/fa";

export function UserProfileAvatar({ user }) {
  return (
    <Card className="w-full max-w-6xl p-4 mb-8 bg-white shadow-lg bg-opacity-70">
      <CardHeader className="flex items-center justify-center">
        <Avatar className="w-40 h-40 mb-4">
          <AvatarImage src={user?.picture} alt={user?.given_name} />
          <AvatarFallback>
            <FaUser className="text-6xl" />
          </AvatarFallback>
        </Avatar>
        <h2 className="text-xl font-semibold">
          {user?.given_name} {user?.family_name}
        </h2>
        <p className="text-gray-600">Email: {user?.email}</p>
      </CardHeader>
    </Card>
  );
}
