import { ogImage, ogSize } from '../utils/og';

export const runtime = 'edge';
export const alt = 'Pixential - Home';
export const size = ogSize;
export const contentType = 'image/png';

export default function Image() {
  return ogImage('Home', 'Websites that feel like magic.');
}
