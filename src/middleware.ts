import { cookies } from 'next/headers';
import { NextResponse, type NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const unauthenticatedRoutes = ['/account/login', '/account/register', '/account/forgot-password'];
  const protectedRoutes = ['/account/profile']

  const isAuthenticated = cookies().get("auth"); // Adjust the cookie name as per your auth cookie

  // Guard unauthenticated routes -> User has logged in
  if (unauthenticatedRoutes.includes(pathname)) {
    // If authenticated, redirect to the home page or any other page
    if (isAuthenticated) {
      return NextResponse.redirect(new URL('/', req.url));
    }
  }

  // Guard protected routes -> User has not logged in yet
  if (protectedRoutes.includes(pathname)) {
    // If not authenticated, return to home page
    if (!isAuthenticated) {
      return NextResponse.redirect(new URL('/', req.url));
    }
  }

  // Allow the request to proceed to the route
  return NextResponse.next();
}

export const config = {
  matcher: '/account/:path*',
}