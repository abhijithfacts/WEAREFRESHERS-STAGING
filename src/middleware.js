import { NextResponse } from "next/server";

export function middleware(req) {
  // Example: redirect if not logged in
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

// optional: which paths to run middleware on
export const config = {
  matcher: ["/dashboard/:path*"],
};
