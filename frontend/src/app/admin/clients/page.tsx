'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../../context/AuthContext';
import { fetchAPI } from '../../../utils/api';
import useApi from '../../../utils/useApi';
import ClientForm, { ClientFormValues } from '../../../components/portal/ClientForm';
import type { Client } from '../../../types';

const currentStage = (client: Client) =>
  client.milestones.find((m) => m.status === 'IN_PROGRESS')?.title ||
  (client.milestones.length && client.milestones.every((m) => m.status === 'DONE') ? 'Completed' : 'Not started');

export default function ClientsPage() {
  const { token } = useAuth();
  const router = useRouter();
  const { data: clients, error, loading, reload } = useApi<Client[]>('/clients');
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    if (new URLSearchParams(window.location.search).has('new')) setShowForm(true);
  }, []);

  const create = async (values: ClientFormValues) => {
    const client = await fetchAPI('/clients', { method: 'POST', token, body: values });
    router.push(`/admin/clients/${client.id}`);
  };

  const remove = async (client: Client) => {
    if (!window.confirm(`Delete ${client.name}? Their files, milestones and portal login will be removed too.`)) return;
    await fetchAPI(`/clients/${client.id}`, { method: 'DELETE', token });
    reload();
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-8 gap-4">
        <h1 className="text-3xl font-bold text-gray-900">Clients</h1>
        {!showForm && (
          <button onClick={() => setShowForm(true)} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap">
            + Add Client
          </button>
        )}
      </div>

      {showForm && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">New Client</h2>
          <ClientForm onSubmit={create} onCancel={() => setShowForm(false)} />
        </div>
      )}

      {error && <p className="mb-6 text-sm text-red-600">{error}</p>}

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-x-auto">
        {loading ? (
          <div className="p-8 text-center text-gray-500">Loading clients...</div>
        ) : (
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                {['Client Name', 'Location', 'Stage', 'Portal Login', 'Added On', ''].map((h) => (
                  <th key={h} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {clients?.map((client) => (
                <tr key={client.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    <Link href={`/admin/clients/${client.id}`} className="hover:text-blue-600">{client.name}</Link>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {client.locations[0] ? `${client.locations[0].city}${client.locations[0].state ? `, ${client.locations[0].state}` : ''}` : '–'}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{currentStage(client)}</td>
                  <td className="px-6 py-4 text-sm text-gray-500">{client.user?.email || '–'}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{new Date(client.createdAt).toLocaleDateString()}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <Link href={`/admin/clients/${client.id}`} className="text-blue-600 hover:text-blue-900 mx-2">Manage</Link>
                    <button onClick={() => remove(client)} className="text-red-600 hover:text-red-900">Delete</button>
                  </td>
                </tr>
              ))}
              {clients?.length === 0 && (
                <tr>
                  <td colSpan={6} className="px-6 py-8 text-center text-sm text-gray-500">No clients found. Add your first client above.</td>
                </tr>
              )}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
