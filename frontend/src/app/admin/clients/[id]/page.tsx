'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Trash2 } from 'lucide-react';
import { useAuth } from '../../../../context/AuthContext';
import { fetchAPI } from '../../../../utils/api';
import useApi from '../../../../utils/useApi';
import ClientForm, { ClientFormValues } from '../../../../components/portal/ClientForm';
import FileManager from '../../../../components/portal/FileManager';
import type { Client, Milestone } from '../../../../types';

const card = 'bg-white rounded-xl shadow-sm border border-gray-100 p-6';

export default function ClientDetailPage({ params }: { params: { id: string } }) {
  const { token } = useAuth();
  const { data: client, error, loading, reload } = useApi<Client>(`/clients/${params.id}`);
  const [editing, setEditing] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [actionError, setActionError] = useState('');

  const act = async (action: () => Promise<unknown>) => {
    setActionError('');
    try {
      await action();
      reload();
    } catch (err) {
      setActionError((err as Error).message);
    }
  };

  const save = async (values: ClientFormValues) => {
    await fetchAPI(`/clients/${params.id}`, { method: 'PUT', token, body: values });
    setEditing(false);
    reload();
  };

  const updateMilestone = (m: Milestone, changes: Partial<Milestone>) =>
    act(() => fetchAPI(`/milestones/${m.id}`, { method: 'PUT', token, body: changes }));

  const addMilestone = (e: React.FormEvent) => {
    e.preventDefault();
    act(() => fetchAPI(`/clients/${params.id}/milestones`, { method: 'POST', token, body: { title: newTitle } }));
    setNewTitle('');
  };

  if (loading) return <p className="text-gray-500">Loading...</p>;
  if (!client) return <p className="text-red-600">{error || 'Client not found'}</p>;

  return (
    <div className="space-y-8">
      <div>
        <Link href="/admin/clients" className="text-sm text-gray-500 hover:text-blue-600">← All clients</Link>
        <div className="flex justify-between items-center mt-2 gap-4">
          <h1 className="text-3xl font-bold text-gray-900">{client.name}</h1>
          {!editing && (
            <button onClick={() => setEditing(true)} className="border border-gray-200 bg-white px-4 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">
              Edit Details
            </button>
          )}
        </div>
      </div>

      {actionError && <p className="text-sm text-red-600">{actionError}</p>}

      <div className={card}>
        {editing ? (
          <ClientForm client={client} onSubmit={save} onCancel={() => setEditing(false)} />
        ) : (
          <dl className="grid grid-cols-1 sm:grid-cols-4 gap-6 text-sm">
            {[
              ['Phone', client.phone],
              ['Website', client.website],
              ['Location', client.locations.map((l) => [l.address, l.city, l.state, l.zip].filter(Boolean).join(', ')).join(' | ')],
              ['Portal Login', client.user?.email],
            ].map(([label, value]) => (
              <div key={label}>
                <dt className="text-gray-500">{label}</dt>
                <dd className="mt-1 text-gray-900 break-words">{value || '–'}</dd>
              </div>
            ))}
          </dl>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className={`${card} lg:col-span-2`}>
          <h2 className="text-xl font-bold text-gray-900 mb-6">Project Milestones</h2>
          <ul className="divide-y divide-gray-100">
            {client.milestones.map((m) => (
              <li key={m.id} className="py-4 grid grid-cols-1 sm:grid-cols-[1fr_auto_auto_auto] gap-3 items-center">
                <div>
                  <p className="font-medium text-gray-900">{m.title}</p>
                  {m.description && <p className="text-xs text-gray-500">{m.description}</p>}
                </div>
                <input
                  type="date"
                  value={m.dueDate?.slice(0, 10) || ''}
                  onChange={(e) => updateMilestone(m, { dueDate: e.target.value || null })}
                  className="border border-gray-200 rounded-md px-2 py-1 text-sm text-gray-700"
                />
                <select
                  value={m.status}
                  onChange={(e) => updateMilestone(m, { status: e.target.value as Milestone['status'] })}
                  className="border border-gray-200 rounded-md px-2 py-1 text-sm text-gray-700"
                >
                  <option value="PENDING">Pending</option>
                  <option value="IN_PROGRESS">In Progress</option>
                  <option value="DONE">Done</option>
                </select>
                <button
                  onClick={() => window.confirm(`Remove "${m.title}"?`) && act(() => fetchAPI(`/milestones/${m.id}`, { method: 'DELETE', token }))}
                  className="p-1.5 text-gray-400 hover:text-red-600 justify-self-start"
                  title="Remove"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </li>
            ))}
          </ul>
          <form onSubmit={addMilestone} className="flex gap-3 mt-4">
            <input
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              required
              placeholder="New milestone title"
              className="flex-1 border border-gray-300 rounded-md px-3 py-2 text-sm"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium">Add</button>
          </form>
        </div>

        <div className={card}>
          <h2 className="text-xl font-bold text-gray-900 mb-4">Files</h2>
          <FileManager clientId={client.id} files={client.files || []} onChange={reload} />
        </div>
      </div>
    </div>
  );
}
