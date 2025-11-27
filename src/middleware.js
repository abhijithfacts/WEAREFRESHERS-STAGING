import { NextResponse } from "next/server";

export function middleware(req) {
  const url = req.nextUrl.clone();

  if (req.nextUrl.pathname.startsWith("/dashboard")) {
    const token = req.cookies.get("next-auth.session-token");
    if (!token) {
      url.pathname = "/login";
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
