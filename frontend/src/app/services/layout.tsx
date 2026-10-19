import type { Metadata } from 'next';
import { pageMeta } from '../../utils/meta';

export const metadata: Metadata = pageMeta('Services', 'Web development, UI/UX design and SEO from Pixential, a web agency in Bangalore.', '/services');

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
