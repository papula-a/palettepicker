import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextResponse } from "next/server";

export async function middleware(request) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) {
    const pathname = request.nextUrl.pathname;

    const loginUrl = new URL("/", request.url);
    loginUrl.searchParams.set("redirect", pathname);

    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/user/:path*", // Protects all routes under /user
    "/api/user/:path*", // Protects all API routes under /api/user
  ],
};
