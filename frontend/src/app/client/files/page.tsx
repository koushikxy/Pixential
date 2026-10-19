'use client';

import React from 'react';
import useApi from '../../../utils/useApi';
import FileManager from '../../../components/portal/FileManager';
import type { Client } from '../../../types';

export default function ClientFilesPage() {
  const { data: client, error, loading, reload } = useApi<Client>('/clients/me');

  return (
    <div className="max-w-3xl">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">My Files</h1>
      <p className="text-gray-600 mb-8">Share logos, content and documents with us here. Files we send you show up here too.</p>
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        {loading && <p className="text-gray-500">Loading...</p>}
        {!loading && !client && <p className="text-gray-600">{error}</p>}
        {client && <FileManager clientId={client.id} files={client.files || []} onChange={reload} />}
      </div>
    </div>
  );
}
