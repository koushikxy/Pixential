import { ogImage, ogSize } from '../../utils/og';

export const runtime = 'edge';
export const alt = 'Pixential - Services';
export const size = ogSize;
export const contentType = 'image/png';

export default function Image() {
  return ogImage('Services', 'Web development, design and SEO.');
}
