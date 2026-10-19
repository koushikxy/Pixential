'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { fetchAPI } from '../../utils/api';
import { useAuth } from '../../context/AuthContext';
import AuthCard, { authInput, authButton } from '../../components/AuthCard';
import PasswordInput from '../../components/PasswordInput';
import EmailInput from '../../components/EmailInput';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [remember, setRemember] = useState(false);
  const { user, ready, login, logout } = useAuth();
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const res = await fetchAPI('/auth/login', { method: 'POST', body: { email, password } });
      login(res.user, res.token, remember);
      router.replace(res.user.role === 'ADMIN' ? '/admin' : '/client');
      router.refresh();
    } catch (err) {
      setError((err as Error).message === 'Failed to fetch' ? 'Cannot reach the server. Please try again in a moment.' : (err as Error).message);
      setLoading(false);
    }
  };

  if (!ready) return <AuthCard title="Welcome back">{null}</AuthCard>;

  if (user) {
    const dashboard = user.role === 'ADMIN' ? '/admin' : '/client';
    return (
      <AuthCard title="You're signed in" subtitle={`Signed in as ${user.email}`}>
        <div className="space-y-3">
          <Link href={dashboard} className={`${authButton} block text-center`}>Go to dashboard</Link>
          <button onClick={logout} className="w-full py-3.5 rounded-xl border border-gray-300 dark:border-white/15 font-bold text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
            Sign out
          </button>
        </div>
      </AuthCard>
    );
  }

  return (
    <AuthCard title="Welcome back" subtitle="Sign in to see your project, files and updates.">
      {error && <div className="mb-4 p-3 bg-red-50 dark:bg-red-500/10 text-red-600 dark:text-red-400 rounded-lg text-sm">{error}</div>}
      <form onSubmit={handleLogin} className="space-y-5">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
          <EmailInput id="email" required autoComplete="email" placeholder="you@company.com" className={authInput} value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <div className="flex justify-between items-baseline">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Password</label>
            <Link href="/forgot-password" className="text-sm text-blue-600 dark:text-cyan-400 hover:underline">Forgot password?</Link>
          </div>
          <PasswordInput withIcon id="password" required placeholder="Your password" autoComplete="current-password" className={authInput} value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <label className="flex items-center gap-2.5 text-sm text-gray-600 dark:text-gray-400 cursor-pointer select-none">
          <input type="checkbox" checked={remember} onChange={(e) => setRemember(e.target.checked)} className="w-4 h-4 rounded accent-blue-600" />
          Keep me signed in for 24 hours
        </label>
        <button type="submit" disabled={loading} className={authButton}>
          {loading ? 'Signing in...' : 'Sign In'}
        </button>
      </form>
      <p className="mt-6 text-center text-sm text-gray-500">
        Not a client yet? <Link href="/contact" className="text-blue-600 dark:text-cyan-400 hover:underline">Start a project</Link>
      </p>
    </AuthCard>
  );
}
