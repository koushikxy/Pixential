import { ogImage, ogSize } from '../../utils/og';

export const runtime = 'edge';
export const alt = 'Pixential - Client Portal';
export const size = ogSize;
export const contentType = 'image/png';

export default function Image() {
  return ogImage('Client Portal', 'Your project, all in one place.');
}
