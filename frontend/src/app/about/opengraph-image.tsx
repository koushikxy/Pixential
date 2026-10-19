import { ogImage, ogSize } from '../../utils/og';

export const runtime = 'edge';
export const alt = 'Pixential - About';
export const size = ogSize;
export const contentType = 'image/png';

export default function Image() {
  return ogImage('About', 'A small team that builds websites that work.');
}
