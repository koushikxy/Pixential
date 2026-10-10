'use client';

import React, { useState } from 'react';
import { useAuth } from '../../../context/AuthContext';

export default function SettingsPage() {
  const { user } = useAuth();
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handlePasswordChange = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      alert("New passwords do not match!");
      return;
    }
    // API Call to update password would go here
    alert("Password updated successfully!");
    setCurrentPassword('');
    setNewPassword('');
    setConfirmPassword('');
  };

  return (
    <div className="max-w-4xl">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Account Settings</h1>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden mb-8">
        <div className="p-6 border-b border-gray-100">
          <h2 className="text-xl font-semibold text-gray-900">Profile Information</h2>
          <p className="text-sm text-gray-500 mt-1">Update your account details and role.</p>
        </div>
        <div className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Email Address</label>
              <input 
                type="email" 
                disabled 
                className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-md text-gray-500 cursor-not-allowed" 
                value={user?.email || 'admin@agency.com'} 
              />
              <p className="mt-1 text-xs text-gray-400">Email cannot be changed.</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Account Role</label>
              <input 
                type="text" 
                disabled 
                className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-md text-gray-500 cursor-not-allowed uppercase" 
                value={user?.role || 'ADMIN'} 
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-6 border-b border-gray-100">
          <h2 className="text-xl font-semibold text-gray-900">Change Password</h2>
          <p className="text-sm text-gray-500 mt-1">Ensure your account is using a long, random password to stay secure.</p>
        </div>
        <div className="p-6">
          <form onSubmit={handlePasswordChange} className="space-y-6 max-w-md">
            <div>
              <label className="block text-sm font-medium text-gray-700">Current Password</label>
              <input 
                type="password" 
                required 
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">New Password</label>
              <input 
                type="password" 
                required 
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Confirm New Password</label>
              <input 
                type="password" 
                required 
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <div>
              <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                Update Password
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

