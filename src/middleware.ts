import { cookies } from 'next/headers';
import { NextResponse, type NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const unauthenticatedRoutes = ['/account/login', '/account/register', '/account/forgot-password'];

  if (unauthenticatedRoutes.includes(pathname)) {
    const isAuthenticated = cookies().get("auth"); // Adjust the cookie name as per your auth cookie

    // If authenticated, redirect to the home page or any other page
    if (isAuthenticated) {
      return NextResponse.redirect(new URL('/', req.url));
    }
  }

  // Allow the request to proceed if not authenticated
  return NextResponse.next();
}