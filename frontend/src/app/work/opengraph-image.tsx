import { ogImage, ogSize } from '../../utils/og';

export const runtime = 'edge';
export const alt = 'Pixential - Work';
export const size = ogSize;
export const contentType = 'image/png';

export default function Image() {
  return ogImage('Work', 'Design concepts we have built.');
}
