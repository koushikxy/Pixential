'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { fetchAPI } from '../../utils/api';
import AuthCard, { authInput, authButton } from '../../components/AuthCard';
import EmailInput from '../../components/EmailInput';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      setMessage((await fetchAPI('/auth/forgot-password', { method: 'POST', body: { email } })).message);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthCard title="Reset your password" subtitle="Enter your email and we will send you a reset link.">
      {message ? (
        <p className="text-gray-600 dark:text-gray-300">{message}. Check your inbox and spam folder.</p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          {error && <p className="text-sm text-red-600 dark:text-red-400">{error}</p>}
          <EmailInput required autoComplete="email" aria-label="Email" placeholder="you@company.com" className={authInput} value={email} onChange={(e) => setEmail(e.target.value)} />
          <button type="submit" disabled={loading} className={authButton}>{loading ? 'Sending...' : 'Send reset link'}</button>
        </form>
      )}
      <p className="mt-6 text-center text-sm">
        <Link href="/login" className="text-blue-600 dark:text-cyan-400 hover:underline">Back to sign in</Link>
      </p>
    </AuthCard>
  );
}
