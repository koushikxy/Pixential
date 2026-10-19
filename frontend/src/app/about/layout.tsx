import type { Metadata } from 'next';
import { pageMeta } from '../../utils/meta';

export const metadata: Metadata = pageMeta('About Us', 'Who we are and how we build websites for growing businesses.', '/about');

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
