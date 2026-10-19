'use client';

import React, { useState } from 'react';
import { useAuth } from '../../../context/AuthContext';
import { fetchAPI } from '../../../utils/api';
import useApi from '../../../utils/useApi';
import type { Lead } from '../../../types';

const statusColors: Record<Lead['status'], string> = {
  NEW: 'bg-green-50 text-green-700',
  CONTACTED: 'bg-blue-50 text-blue-700',
  WON: 'bg-purple-50 text-purple-700',
  LOST: 'bg-gray-100 text-gray-500',
};

export default function LeadsPage() {
  const { token } = useAuth();
  const { data: leads, error, loading, reload } = useApi<Lead[]>('/leads');
  const [open, setOpen] = useState<string | null>(null);

  const setStatus = async (lead: Lead, status: string) => {
    await fetchAPI(`/leads/${lead.id}`, { method: 'PUT', token, body: { status } });
    reload();
  };

  const remove = async (lead: Lead) => {
    if (!window.confirm(`Delete the lead from ${lead.firstName}?`)) return;
    await fetchAPI(`/leads/${lead.id}`, { method: 'DELETE', token });
    reload();
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Leads</h1>
      <p className="text-gray-500 mb-8">Messages sent through the contact form on the website.</p>

      {error && <p className="mb-6 text-sm text-red-600">{error}</p>}

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 divide-y divide-gray-100">
        {loading && <p className="p-8 text-center text-gray-500">Loading leads...</p>}
        {leads?.length === 0 && <p className="p-8 text-center text-sm text-gray-500">No leads yet.</p>}
        {leads?.map((lead) => (
          <div key={lead.id} className="p-5">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              <button onClick={() => setOpen(open === lead.id ? null : lead.id)} className="text-left flex-1 min-w-[200px]">
                <p className="font-semibold text-gray-900">{lead.firstName} {lead.lastName}</p>
                <p className="text-sm text-gray-500">
                  {lead.email}{lead.budget && ` · ${lead.budget}`} · {new Date(lead.createdAt).toLocaleDateString()}
                </p>
              </button>
              <select
                value={lead.status}
                onChange={(e) => setStatus(lead, e.target.value)}
                className={`rounded-full px-3 py-1 text-xs font-semibold border-0 ${statusColors[lead.status]}`}
              >
                {Object.keys(statusColors).map((s) => <option key={s} value={s}>{s}</option>)}
              </select>
              <a href={`mailto:${lead.email}`} className="text-sm text-blue-600 hover:text-blue-800">Reply</a>
              <button onClick={() => remove(lead)} className="text-sm text-red-600 hover:text-red-800">Delete</button>
            </div>
            <p className={`mt-3 text-sm text-gray-700 whitespace-pre-wrap ${open === lead.id ? '' : 'line-clamp-2'}`}>{lead.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
