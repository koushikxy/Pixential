import type { Metadata } from 'next';
import { pageMeta } from '../../utils/meta';

export const metadata: Metadata = pageMeta('Contact', 'Tell us about your project and get a reply within 24 hours.', '/contact');

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
