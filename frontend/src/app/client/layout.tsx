import React from 'react';
import Link from 'next/link';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold text-blue-600 tracking-tight">AgencyX Client Portal</span>
            </div>
            <div className="flex items-center space-x-6">
              <Link href="/client" className="text-sm text-gray-600 hover:text-blue-600 font-medium transition-colors">Dashboard</Link>
              <Link href="/client/files" className="text-sm text-gray-600 hover:text-blue-600 font-medium transition-colors">My Files</Link>
              <button className="text-sm text-red-600 hover:text-red-800 font-medium ml-4 transition-colors">Logout</button>
            </div>
          </div>
        </div>
      </nav>
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {children}
      </main>
    </div>
  );
}
