import { Button } from "@/components/ui/button";
import {
  LoginLink,
  LogoutLink,
  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import Icons from "@/components/Icons";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FaUser } from "react-icons/fa";

const UserProfileIcon = async () => {
  const { isAuthenticated, getUser, isLoading } = getKindeServerSession();

  const isUserAuthenticated = await isAuthenticated();
  const user = await getUser();

  return (
    <div className="flex items-center justify-end space-x-4 w-1/5">
      <div className="hidden md:flex space-x-4">
        {!isUserAuthenticated ? (
          <>
            <Button variant="outline" disabled={isLoading}>
              {isLoading ? (
                <span className="flex items-center">
                  <Icons.spinner className="animate-spin h-4 w-4 text-gray-500" />
                </span>
              ) : (
                <LoginLink>Sign in</LoginLink>
              )}
            </Button>

            <span className="h-6 w-px bg-gray-200" aria-hidden="true" />

            <Button variant="outline" disabled={isLoading}>
              {isLoading ? (
                <span className="flex items-center">
                  <Icons.spinner className="animate-spin h-4 w-4 text-gray-500" />
                </span>
              ) : (
                <RegisterLink>Sign up</RegisterLink>
              )}
            </Button>
          </>
        ) : (
          <div className="relative">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Avatar className="cursor-pointer">
                  <AvatarImage src={user.picture} alt={user.given_name} />
                  <AvatarFallback>PP</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="absolute right-0 mt-2 w-40">
                <DropdownMenuLabel className="text-yellow-500 text-lg flex items-center space-x-2">
                  <FaUser className="text-gray-600" />
                  <span>
                    {user.given_name} {user.family_name}
                  </span>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <Link href="/user/profile" className="cursor-pointer">
                      Profile
                    </Link>
                    <DropdownMenuShortcut className="text-yellow-500">
                      ⇧⌘P
                    </DropdownMenuShortcut>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <LogoutLink>Log out</LogoutLink>
                    <DropdownMenuShortcut className="text-yellow-500">
                      ⇧⌘Q
                    </DropdownMenuShortcut>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserProfileIcon;
