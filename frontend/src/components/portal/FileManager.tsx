'use client';

import React, { useRef, useState } from 'react';
import { FileText, Download, Trash2, Upload } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { uploadFile, downloadFile, fetchAPI } from '../../utils/api';
import type { ClientFile } from '../../types';

const formatSize = (bytes: number) =>
  bytes < 1024 ? `${bytes} B` : bytes < 1048576 ? `${(bytes / 1024).toFixed(1)} KB` : `${(bytes / 1048576).toFixed(1)} MB`;

interface Props {
  clientId: string;
  files: ClientFile[];
  onChange: () => void;
  limit?: number;
}

export default function FileManager({ clientId, files, onChange, limit }: Props) {
  const { token } = useAuth();
  const input = useRef<HTMLInputElement>(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');

  const run = async (action: () => Promise<unknown>) => {
    setError('');
    setBusy(true);
    try {
      await action();
      onChange();
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setBusy(false);
    }
  };

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    e.target.value = '';
    if (!file) return;
    if (file.size > 20 * 1024 * 1024) return setError('Files must be under 20 MB');
    run(() => uploadFile(clientId, file, token));
  };

  const remove = (file: ClientFile) => {
    if (window.confirm(`Delete ${file.name}?`)) run(() => fetchAPI(`/files/${file.id}`, { method: 'DELETE', token }));
  };

  const shown = limit ? files.slice(0, limit) : files;

  return (
    <div>
      {error && <p className="mb-3 text-sm text-red-600">{error}</p>}
      {shown.length === 0 ? (
        <p className="text-sm text-gray-500">No files yet.</p>
      ) : (
        <ul className="divide-y divide-gray-100">
          {shown.map((file) => (
            <li key={file.id} className="flex items-center gap-3 py-3 text-sm">
              <FileText className="w-4 h-4 text-gray-400 shrink-0" />
              <div className="min-w-0 flex-1">
                <p className="truncate text-gray-800">{file.name}</p>
                <p className="text-xs text-gray-400">
                  {formatSize(file.size)} · {new Date(file.createdAt).toLocaleDateString()} · from {file.uploadedBy === 'ADMIN' ? 'agency' : 'client'}
                </p>
              </div>
              <button onClick={() => run(() => downloadFile(file.id, file.name, token))} className="p-1.5 text-gray-500 hover:text-blue-600" title="Download">
                <Download className="w-4 h-4" />
              </button>
              <button onClick={() => remove(file)} className="p-1.5 text-gray-500 hover:text-red-600" title="Delete">
                <Trash2 className="w-4 h-4" />
              </button>
            </li>
          ))}
        </ul>
      )}
      <input ref={input} type="file" className="hidden" onChange={handleUpload} />
      <button
        onClick={() => input.current?.click()}
        disabled={busy}
        className="w-full mt-4 flex items-center justify-center gap-2 border border-gray-200 text-gray-600 font-medium py-2 rounded-lg text-sm hover:bg-gray-50 disabled:opacity-50"
      >
        <Upload className="w-4 h-4" />
        {busy ? 'Working...' : 'Upload File'}
      </button>
    </div>
  );
}
