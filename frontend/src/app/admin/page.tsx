'use client';

import React from 'react';
import Link from 'next/link';
import useApi from '../../utils/useApi';

interface Stats {
  clients: number;
  activeProjects: number;
  newLeads: number;
  activity: { type: 'lead' | 'file'; name: string; text: string; at: string }[];
}

const timeAgo = (date: string) => {
  const minutes = Math.round((Date.now() - new Date(date).getTime()) / 60000);
  if (minutes < 60) return `${Math.max(minutes, 1)} min ago`;
  if (minutes < 1440) return `${Math.round(minutes / 60)} hours ago`;
  return new Date(date).toLocaleDateString();
};

export default function AdminDashboard() {
  const { data, error, loading } = useApi<Stats>('/stats');

  const cards = [
    { label: 'Total Clients', value: data?.clients, href: '/admin/clients' },
    { label: 'Active Projects', value: data?.activeProjects, href: '/admin/clients' },
    { label: 'New Leads', value: data?.newLeads, href: '/admin/leads' },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-8 gap-4">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard Overview</h1>
        <Link href="/admin/clients?new=1" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap">
          + New Client
        </Link>
      </div>

      {error && <p className="mb-6 text-sm text-red-600">{error}</p>}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {cards.map((card) => (
          <Link key={card.label} href={card.href} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-blue-200">
            <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider">{card.label}</h3>
            <p className="text-3xl font-bold text-gray-900 mt-2">{loading ? '–' : card.value ?? 0}</p>
          </Link>
        ))}
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Recent Activity</h2>
        {!loading && !data?.activity.length && <p className="text-sm text-gray-500">Nothing yet. New leads and file uploads will show up here.</p>}
        <div className="space-y-6">
          {data?.activity.map((item, i) => (
            <div key={i} className="flex gap-4 border-b border-gray-50 pb-6 last:border-0 last:pb-0">
              <div className={`w-10 h-10 shrink-0 rounded-full flex items-center justify-center font-bold ${item.type === 'lead' ? 'bg-green-100 text-green-600' : 'bg-blue-100 text-blue-600'}`}>
                {item.name.charAt(0).toUpperCase()}
              </div>
              <div className="min-w-0">
                <p className="text-sm text-gray-700 break-words">
                  {item.type === 'lead' ? 'New lead ' : 'Client '}
                  <span className="font-semibold text-gray-900">{item.name}</span> {item.text}.
                </p>
                <span className="text-xs text-gray-400 mt-1 block">{timeAgo(item.at)}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
