import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import * as jose from "jose";

const JWT_SECRET_KEY = process.env.JWT_SECRET;
const JWT_SECRET = JWT_SECRET_KEY
  ? new TextEncoder().encode(JWT_SECRET_KEY)
  : undefined;

// List of public paths that do not require authentication
const PUBLIC_PATHS = ["/login", "/register", "/"];

// List of paths that authenticated users should be redirected away from
const AUTH_ONLY_PATHS = ["/login", "/register"];

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const tokenCookie = request.cookies.get("token");
  const token = tokenCookie?.value;

  let isAuthenticated = false;
  let userId: string | undefined;

  if (token && JWT_SECRET) {
    try {
      const { payload } = await jose.jwtVerify(token, JWT_SECRET, {
        // Specify expected algorithms if necessary, e.g., ['HS256']
      });
      // Assuming your JWT payload has a 'userId' field
      if (payload.userId && typeof payload.userId === "string") {
        isAuthenticated = true;
        userId = payload.userId;
      }
    } catch (err) {
      console.error("JWT verification failed:", err);
      const response = NextResponse.redirect(new URL("/login", request.url));
      response.cookies.delete("token");
      return response;
    }
  }

  // If trying to access a protected route and not authenticated, redirect to login
  if (
    !isAuthenticated &&
    !PUBLIC_PATHS.some((path) => pathname.startsWith(path))
  ) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // If authenticated and trying to access login/register, redirect to dashboard
  if (
    isAuthenticated &&
    AUTH_ONLY_PATHS.some((path) => pathname.startsWith(path))
  ) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - assets (if you have a public/assets folder)
     * - images (if you have a public/images folder)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|assets|images|placeholder-logo.svg|placeholder-logo.png).*)",
  ],
};
