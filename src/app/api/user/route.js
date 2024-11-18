import prisma from "@/lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const { getUser, isAuthenticated } = getKindeServerSession();

    // First, check if user is authenticated
    const isUserAuthenticated = await isAuthenticated();
    if (!isUserAuthenticated) {
      return NextResponse.redirect(new URL("/api/auth/login", request.url));
    }

    const user = await getUser();
    if (!user) {
      return NextResponse.redirect(new URL("/api/auth/login", request.url));
    }

    const palettes = await prisma.palette.findMany({
      where: {
        userId: user.id,
      },
    });

    return NextResponse.json({
      user: {
        id: user.id,
        email: user.email,
        given_name: user.given_name,
        family_name: user.family_name,
        picture: user.picture,
      },
      palettes,
    });
  } catch (error) {
    console.error("Error in user API route:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
