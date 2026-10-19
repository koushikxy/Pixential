import type { Metadata } from 'next';
import { pageMeta } from '../../utils/meta';

export const metadata: Metadata = pageMeta('Work', 'Website and web app design concepts by Pixential.', '/work');

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
