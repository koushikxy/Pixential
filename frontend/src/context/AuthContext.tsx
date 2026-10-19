'use client';

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';

export interface User {
  id: string;
  email: string;
  name: string | null;
  role: 'ADMIN' | 'CLIENT';
  clientId: string | null;
}

interface AuthContextType {
  user: User | null;
  token: string | null;
  ready: boolean;
  login: (userData: User, tokenData: string, remember: boolean) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  token: null,
  ready: false,
  login: () => {},
  logout: () => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [ready, setReady] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const store = localStorage.getItem('token') ? localStorage : sessionStorage;
    const storedToken = store.getItem('token');
    const storedUser = store.getItem('user');
    if (storedToken && storedUser) {
      setToken(storedToken);
      setUser(JSON.parse(storedUser));
    } else {
      document.cookie = 'token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
      if (/^\/(admin|client)/.test(window.location.pathname)) router.replace('/login');
    }
    setReady(true);
  }, [router]);

  const login = (userData: User, tokenData: string, remember: boolean) => {
    setUser(userData);
    setToken(tokenData);
    const store = remember ? localStorage : sessionStorage;
    store.setItem('token', tokenData);
    store.setItem('user', JSON.stringify(userData));
    const maxAge = remember ? '; max-age=86400' : '';
    document.cookie = `token=${tokenData}; path=/${maxAge}; samesite=lax${location.protocol === 'https:' ? '; secure' : ''}`;
  };

  const logout = useCallback(() => {
    setUser(null);
    setToken(null);
    [localStorage, sessionStorage].forEach((store) => {
      store.removeItem('token');
      store.removeItem('user');
    });
    document.cookie = 'token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
    router.push('/login');
  }, [router]);

  useEffect(() => {
    window.addEventListener('auth:expired', logout);
    return () => window.removeEventListener('auth:expired', logout);
  }, [logout]);

  return (
    <AuthContext.Provider value={{ user, token, ready, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
