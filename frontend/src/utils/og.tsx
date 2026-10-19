import { ImageResponse } from 'next/og';

export const ogSize = { width: 1200, height: 630 };

export const ogImage = async (label: string, heading: string, line = 'Web design and development · Bangalore') => {
  const font = await fetch(new URL('../assets/Syne-Bold.ttf', import.meta.url)).then((res) => res.arrayBuffer());
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 80,
          background: 'radial-gradient(circle at 85% 15%, #1e3a8a 0%, #000 60%)',
          color: '#fff',
          fontFamily: 'Syne',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', fontSize: 44, fontWeight: 700 }}>
          <span style={{ color: '#38bdf8' }}>Pix</span>
          <span>ential</span>
          <span style={{ color: '#22d3ee' }}>.</span>
          <span style={{ marginLeft: 28, fontSize: 26, fontWeight: 700, color: '#a1a1aa', textTransform: 'uppercase', letterSpacing: 4 }}>{label}</span>
        </div>
        <div style={{ fontSize: 80, fontWeight: 700, lineHeight: 1.05, letterSpacing: -2, maxWidth: 1000 }}>{heading}</div>
        <div style={{ fontSize: 30, color: '#a1a1aa' }}>{line}</div>
      </div>
    ),
    { ...ogSize, fonts: [{ name: 'Syne', data: font, weight: 700, style: 'normal' }] },
  );
};
