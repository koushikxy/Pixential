import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value;

  // Protect all /admin and /client routes
  if (request.nextUrl.pathname.startsWith('/admin') || request.nextUrl.pathname.startsWith('/client')) {
    if (!token) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  // Prevent authenticated users from seeing the login page
  if (request.nextUrl.pathname === '/login') {
    if (token) {
      // Ideal implementation would decode JWT here to check role and redirect to /admin or /client appropriately
      return NextResponse.redirect(new URL('/client', request.url));
    }
  }

  return NextResponse.next();
}

// Specify the paths where the middleware should run
export const config = {
  matcher: ['/admin/:path*', '/client/:path*', '/login'],
};
