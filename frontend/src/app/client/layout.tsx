import type { Metadata } from 'next';
import ClientShell from '../../components/portal/ClientShell';

export const metadata: Metadata = { title: 'Client Portal', robots: { index: false } };

export default function Layout({ children }: { children: React.ReactNode }) {
  return <ClientShell>{children}</ClientShell>;
}
