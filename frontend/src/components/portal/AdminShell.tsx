'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAuth } from '../../context/AuthContext';

const links = [
  { href: '/admin', label: 'Dashboard' },
  { href: '/admin/clients', label: 'Clients' },
  { href: '/admin/leads', label: 'Leads' },
  { href: '/admin/settings', label: 'Settings' },
];

export default function AdminShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { user, logout } = useAuth();

  const isActive = (href: string) => (href === '/admin' ? pathname === href : pathname.startsWith(href));

  return (
    <div className="portal min-h-screen flex flex-col md:flex-row bg-gray-100 text-gray-900">
      <aside className="md:w-64 bg-white border-b md:border-b-0 md:border-r border-gray-200">
        <div className="md:h-full md:sticky md:top-0 md:max-h-screen px-3 py-4 flex md:flex-col gap-2 overflow-x-auto">
          <div className="hidden md:block mb-8 px-2">
            <Link href="/" className="text-2xl font-bold text-gray-800">Pixential</Link>
            <p className="text-xs text-gray-400 mt-1 truncate">{user?.email}</p>
          </div>
          <nav className="flex md:flex-col md:flex-1 gap-1 md:gap-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`whitespace-nowrap px-4 py-2.5 rounded-lg transition-colors ${isActive(link.href) ? 'bg-blue-50 text-blue-600 font-medium' : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <button onClick={logout} className="md:mt-auto whitespace-nowrap text-left px-4 py-2.5 rounded-lg text-red-600 hover:bg-red-50">
            Logout
          </button>
        </div>
      </aside>

      <main className="flex-1 p-4 sm:p-8 min-w-0">{children}</main>
    </div>
  );
}
