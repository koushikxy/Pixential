import React from 'react';
import Link from 'next/link';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200">
        <div className="h-full px-3 py-4 flex flex-col">
          <div className="mb-8 px-2">
            <h2 className="text-2xl font-bold text-gray-800">Admin Portal</h2>
          </div>
          <nav className="flex-1 space-y-2">
            <Link href="/admin" className="block px-4 py-2.5 rounded-lg text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors">
              Dashboard
            </Link>
            <Link href="/admin/clients" className="block px-4 py-2.5 rounded-lg text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors">
              Clients
            </Link>
            <Link href="/admin/settings" className="block px-4 py-2.5 rounded-lg text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors">
              Settings
            </Link>
          </nav>
          <div className="mt-auto">
            <button className="w-full text-left px-4 py-2.5 rounded-lg text-red-600 hover:bg-red-50 transition-colors">
              Logout
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        {children}
      </main>
    </div>
  );
}
