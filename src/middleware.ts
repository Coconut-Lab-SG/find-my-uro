import { cookies } from 'next/headers'
import { NextResponse, type NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl
  const protectedRoutes = ['/account/profile']

  const token = cookies().get('access_token') // Adjust the cookie name as per your auth cookie
  const isAuthenticated = !!token

  const unauthenticatedRoutes = ['/account/login', '/account/register', '/account/forgot-password']
  // Guard unauthenticated routes -> User has logged in
  if (unauthenticatedRoutes.includes(pathname)) {
    // If authenticated, redirect to the home page or any other page
    if (isAuthenticated) {
      return NextResponse.redirect(new URL('/account/profile', req.url))
    }
  }

  // Guard protected routes -> User has not logged in yet
  if (protectedRoutes.includes(pathname)) {
    // If not authenticated, return to home page
    if (!token) {
      return NextResponse.redirect(new URL('/account/login', req.url))
    }
  }

  // Allow the request to proceed to the route
  return NextResponse.next()
}

export const config = {
  matcher: '/account/:path*',
}
