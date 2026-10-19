import { ogImage, ogSize } from '../../utils/og';

export const runtime = 'edge';
export const alt = 'Pixential - Privacy';
export const size = ogSize;
export const contentType = 'image/png';

export default function Image() {
  return ogImage('Privacy', 'How we handle your information.');
}
