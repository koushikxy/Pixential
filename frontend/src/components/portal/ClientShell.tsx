'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAuth } from '../../context/AuthContext';

const links = [
  { href: '/client', label: 'Dashboard' },
  { href: '/client/files', label: 'My Files' },
  { href: '/client/settings', label: 'Settings' },
];

export default function ClientShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { logout } = useAuth();

  return (
    <div className="portal min-h-screen bg-gray-50 text-gray-900 flex flex-col">
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-between items-center gap-2 py-3 sm:h-16 sm:py-0">
          <Link href="/" className="text-xl font-bold text-blue-600 tracking-tight">Pixential Client Portal</Link>
          <div className="flex items-center gap-5">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium ${pathname === link.href ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'}`}
              >
                {link.label}
              </Link>
            ))}
            <button onClick={logout} className="text-sm text-red-600 hover:text-red-800 font-medium">Logout</button>
          </div>
        </div>
      </nav>
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10">{children}</main>
    </div>
  );
}
