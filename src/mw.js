import prisma from "@/lib/db"; // Adjust path to your Prisma setup
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextResponse } from "next/server";

export async function middleware(request) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  // Check if the user is authenticated
  if (user) {
    // Perform the user data sync directly in the middleware
    const { email, given_name, family_name } = user;

    // Check if the user already exists in the database
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (!existingUser) {
      // Create a new user in the database
      await prisma.user.create({
        data: {
          email,
          name: `${given_name || ""} ${family_name || ""}`.trim(),
        },
      });
    }

    // Continue with the request after syncing
    return NextResponse.next();
  }

  // If not authenticated, proceed as normal or add custom handling
  return NextResponse.next();
}

export const config = {
  matcher: ["/"], // Run middleware only on protected routes
};
