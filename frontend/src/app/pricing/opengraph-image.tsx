import { ogImage, ogSize } from '../../utils/og';

export const runtime = 'edge';
export const alt = 'Pixential - Pricing';
export const size = ogSize;
export const contentType = 'image/png';

export default function Image() {
  return ogImage('Pricing', 'Clear prices for every size of project.');
}
