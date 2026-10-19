import type { Metadata } from 'next';
import { pageMeta } from '../../utils/meta';

export const metadata: Metadata = { ...pageMeta('Client Login', 'Sign in to the Pixential client portal.', '/login'), robots: { index: false } };

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
