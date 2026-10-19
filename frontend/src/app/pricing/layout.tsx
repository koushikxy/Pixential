import type { Metadata } from 'next';
import { pageMeta } from '../../utils/meta';

export const metadata: Metadata = pageMeta('Pricing', 'Website plans from ₹25,000. See what each Pixential plan includes.', '/pricing');

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
