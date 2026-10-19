import type { Metadata } from 'next';

export const pageMeta = (title: string, description: string, path: string): Metadata => ({
  title,
  description,
  alternates: { canonical: path },
  openGraph: { type: 'website', siteName: 'Pixential', locale: 'en_IN', title: `${title} | Pixential`, description, url: path },
  twitter: { card: 'summary_large_image', title: `${title} | Pixential`, description },
});
