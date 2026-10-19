'use client';

import React from 'react';
import Link from 'next/link';
import { useAuth } from '../../context/AuthContext';
import useApi from '../../utils/useApi';
import Timeline from '../../components/portal/Timeline';
import FileManager from '../../components/portal/FileManager';
import type { Client } from '../../types';

export default function ClientDashboard() {
  const { user } = useAuth();
  const { data: client, error, loading, reload } = useApi<Client>('/clients/me');

  if (loading) return <p className="text-gray-500">Loading your project...</p>;
  if (!client) return <p className="text-gray-600">{error}</p>;

  const done = client.milestones.filter((m) => m.status === 'DONE').length;

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back{user?.name ? `, ${user.name}` : ''}!</h1>
      <p className="text-gray-600 mb-10">
        Here is the current status of the {client.name} project. {done} of {client.milestones.length} stages are complete.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-8">Project Timeline</h2>
          <Timeline milestones={client.milestones} />
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h3 className="font-bold text-gray-900 mb-2">Need something?</h3>
            <p className="text-sm text-gray-500 mb-4">Questions or changes to the project, just write to us.</p>
            <a href="mailto:hello@pixential.in" className="block text-center w-full bg-blue-50 text-blue-600 font-medium py-2 rounded-lg text-sm hover:bg-blue-100">
              Send a Message
            </a>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-gray-900">Recent Files</h3>
              <Link href="/client/files" className="text-xs text-blue-600 hover:underline">View all</Link>
            </div>
            <FileManager clientId={client.id} files={client.files || []} onChange={reload} limit={4} />
          </div>
        </div>
      </div>
    </div>
  );
}
