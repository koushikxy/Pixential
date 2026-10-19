'use client';

import React, { useState } from 'react';
import type { Client } from '../../types';

export interface ClientFormValues {
  name: string;
  phone: string;
  website: string;
  locations: { address: string; city: string; state: string; zip: string }[];
  account?: { name: string; email: string; password: string };
}

interface Props {
  client?: Client;
  onSubmit: (values: ClientFormValues) => Promise<void>;
  onCancel: () => void;
}

const inputClass = 'mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500';

export default function ClientForm({ client, onSubmit, onCancel }: Props) {
  const location = client?.locations[0];
  const [values, setValues] = useState({
    name: client?.name || '',
    phone: client?.phone || '',
    website: client?.website || '',
    address: location?.address || '',
    city: location?.city || '',
    state: location?.state || '',
    zip: location?.zip || '',
    contactName: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [saving, setSaving] = useState(false);
  const needsAccount = !client?.user;

  const field = (key: keyof typeof values, label: string, props: React.InputHTMLAttributes<HTMLInputElement> = {}) => (
    <div>
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <input className={inputClass} value={values[key]} onChange={(e) => setValues({ ...values, [key]: e.target.value })} {...props} />
    </div>
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSaving(true);
    try {
      await onSubmit({
        name: values.name,
        phone: values.phone,
        website: values.website,
        locations: values.address && values.city ? [{ address: values.address, city: values.city, state: values.state, zip: values.zip }] : [],
        account: needsAccount && values.email ? { name: values.contactName, email: values.email, password: values.password } : undefined,
      });
    } catch (err) {
      setError((err as Error).message);
      setSaving(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {field('name', 'Business Name *', { required: true })}
        {field('phone', 'Phone')}
        {field('website', 'Website')}
      </div>

      <div>
        <h3 className="text-sm font-semibold text-gray-900 mb-2">Location</h3>
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
          <div className="sm:col-span-2">{field('address', 'Address')}</div>
          {field('city', 'City')}
          <div className="grid grid-cols-2 gap-2">
            {field('state', 'State')}
            {field('zip', 'PIN')}
          </div>
        </div>
      </div>

      {needsAccount && (
        <div>
          <h3 className="text-sm font-semibold text-gray-900">Client Portal Login</h3>
          <p className="text-xs text-gray-500 mb-2">Optional. Share these details with the client so they can track progress and upload files.</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {field('contactName', 'Contact Name')}
            {field('email', 'Login Email', { type: 'email' })}
            {field('password', 'Password', { type: 'text', minLength: 8, required: Boolean(values.email), placeholder: 'At least 8 characters' })}
          </div>
        </div>
      )}

      {error && <p className="text-sm text-red-600">{error}</p>}

      <div className="flex gap-3">
        <button type="submit" disabled={saving} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium disabled:opacity-50">
          {saving ? 'Saving...' : client ? 'Save Changes' : 'Create Client'}
        </button>
        <button type="button" onClick={onCancel} className="px-4 py-2 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-100">
          Cancel
        </button>
      </div>
    </form>
  );
}
