import type { Metadata } from 'next';
import AdminShell from '../../components/portal/AdminShell';

export const metadata: Metadata = { title: 'Admin', robots: { index: false } };

export default function Layout({ children }: { children: React.ReactNode }) {
  return <AdminShell>{children}</AdminShell>;
}
