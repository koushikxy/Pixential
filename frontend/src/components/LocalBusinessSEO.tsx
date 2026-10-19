const siteUrl = process.env.SITE_URL || 'https://pixential.in';

const schema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Pixential',
  description: 'Web design and development agency building fast, modern websites for businesses.',
  url: siteUrl,
  image: `${siteUrl}/opengraph-image`,
  email: 'hello@pixential.in',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Koramangala, Bangalore',
    addressRegion: 'Karnataka',
    postalCode: '560034',
    addressCountry: 'IN',
  },
  areaServed: 'IN',
};

export default function LocalBusinessSEO() {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}
