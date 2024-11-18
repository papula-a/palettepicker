import prisma from "@/lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextResponse } from "next/server";

// This function runs automatically when the API route is called
export async function GET() {
  try {
    const { getUser } = getKindeServerSession();
    const user = await getUser();

    if (!user) {
      return NextResponse.json(
        { status: "error", message: "No user data found" },
        { status: 400 }
      );
    }

    const palettes = await prisma.palette.findMany({
      where: {
        userId: user.id,
      },
    });

    return NextResponse.json({
      user,
      palettes,
    });
  } catch (error) {
    console.error("Error synchronizing user data:", error);
    return NextResponse.json(
      { status: "error", message: "Internal server error" },
      { status: 500 }
    );
  }
}
