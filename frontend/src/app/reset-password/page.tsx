'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { fetchAPI } from '../../utils/api';
import AuthCard, { authInput, authButton } from '../../components/AuthCard';
import PasswordInput from '../../components/PasswordInput';

export default function ResetPasswordPage() {
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [error, setError] = useState('');
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirm) return setError('Passwords do not match');
    setError('');
    setLoading(true);
    try {
      const token = new URLSearchParams(window.location.search).get('token') || '';
      await fetchAPI('/auth/reset-password', { method: 'POST', body: { token, password } });
      setDone(true);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthCard title="Choose a new password" subtitle="Use at least 8 characters.">
      {done ? (
        <div className="text-center space-y-6">
          <p className="text-gray-600 dark:text-gray-300">Your password has been updated.</p>
          <Link href="/login" className={`${authButton} block`}>Sign in</Link>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          {error && <p className="text-sm text-red-600 dark:text-red-400">{error}</p>}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">New password</label>
            <PasswordInput withIcon required minLength={8} autoComplete="new-password" className={authInput} value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Confirm password</label>
            <PasswordInput withIcon required minLength={8} autoComplete="new-password" className={authInput} value={confirm} onChange={(e) => setConfirm(e.target.value)} />
          </div>
          <button type="submit" disabled={loading} className={authButton}>{loading ? 'Saving...' : 'Save password'}</button>
        </form>
      )}
    </AuthCard>
  );
}
