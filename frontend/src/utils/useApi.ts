'use client';

import { useCallback, useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { fetchAPI } from './api';

export default function useApi<T>(endpoint: string) {
  const { token, ready } = useAuth();
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  const reload = useCallback(async () => {
    if (!token) return;
    try {
      setData(await fetchAPI(endpoint, { token }));
      setError('');
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  }, [endpoint, token]);

  useEffect(() => {
    if (ready && !token) setLoading(false);
    reload();
  }, [ready, token, reload]);

  return { data, error, loading, reload, setData };
}
