import { ogImage, ogSize } from '../../utils/og';

export const runtime = 'edge';
export const alt = 'Pixential - Contact';
export const size = ogSize;
export const contentType = 'image/png';

export default function Image() {
  return ogImage('Contact', 'Tell us about your project.');
}
