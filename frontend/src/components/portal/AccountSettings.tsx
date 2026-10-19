'use client';

import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { fetchAPI } from '../../utils/api';
import PasswordInput from '../PasswordInput';

const inputClass = 'mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500';

export default function AccountSettings() {
  const { user, token } = useAuth();
  const [form, setForm] = useState({ currentPassword: '', newPassword: '', confirmPassword: '' });
  const [message, setMessage] = useState<{ ok: boolean; text: string } | null>(null);

  const field = (key: keyof typeof form, label: string) => (
    <div>
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <PasswordInput required className={inputClass} value={form[key]} onChange={(e) => setForm({ ...form, [key]: e.target.value })} />
    </div>
  );

  const handlePasswordChange = async (e: React.FormEvent) => {
    e.preventDefault();
    if (form.newPassword !== form.confirmPassword) return setMessage({ ok: false, text: 'New passwords do not match' });
    try {
      await fetchAPI('/auth/password', { method: 'PUT', token, body: form });
      setForm({ currentPassword: '', newPassword: '', confirmPassword: '' });
      setMessage({ ok: true, text: 'Password updated' });
    } catch (err) {
      setMessage({ ok: false, text: (err as Error).message });
    }
  };

  return (
    <div className="max-w-4xl">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Account Settings</h1>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden mb-8">
        <div className="p-6 border-b border-gray-100">
          <h2 className="text-xl font-semibold text-gray-900">Profile Information</h2>
        </div>
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email Address</label>
            <input disabled className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-md text-gray-500" value={user?.email || ''} />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Account Role</label>
            <input disabled className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-md text-gray-500 uppercase" value={user?.role || ''} />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-6 border-b border-gray-100">
          <h2 className="text-xl font-semibold text-gray-900">Change Password</h2>
          <p className="text-sm text-gray-500 mt-1">Use at least 8 characters.</p>
        </div>
        <form onSubmit={handlePasswordChange} className="p-6 space-y-6 max-w-md">
          {field('currentPassword', 'Current Password')}
          {field('newPassword', 'New Password')}
          {field('confirmPassword', 'Confirm New Password')}
          {message && <p className={`text-sm ${message.ok ? 'text-green-600' : 'text-red-600'}`}>{message.text}</p>}
          <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium">
            Update Password
          </button>
        </form>
      </div>
    </div>
  );
}
