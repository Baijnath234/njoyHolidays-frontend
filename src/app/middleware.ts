import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const isLoggedIn = true; // replace with auth logic

  if (!isLoggedIn && request.nextUrl.pathname.startsWith("/admin")) {
    return NextResponse.redirect(new URL("/signUp", request.url));
  }

  return NextResponse.next();
}