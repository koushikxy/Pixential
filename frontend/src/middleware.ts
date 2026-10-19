import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const readRole = (token?: string) => {
  try {
    const payload = JSON.parse(atob(token!.split('.')[1].replace(/-/g, '+').replace(/_/g, '/')));
    return payload.exp * 1000 > Date.now() ? (payload.role as string) : null;
  } catch {
    return null;
  }
};

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const role = readRole(request.cookies.get('token')?.value);
  const home = role === 'ADMIN' ? '/admin' : '/client';

  if (!role) {
    const response = NextResponse.redirect(new URL('/login', request.url));
    response.cookies.delete('token');
    return response;
  }
  const needed = pathname.startsWith('/admin') ? 'ADMIN' : 'CLIENT';
  if (role !== needed) return NextResponse.redirect(new URL(home, request.url));

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*', '/client/:path*'],
};
