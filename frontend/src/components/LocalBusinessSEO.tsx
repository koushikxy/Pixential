import React from 'react';

const LocalBusinessSEO = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Pixential",
    "image": "https://example.com/logo.png",
    "url": "https://example.com",
    "telephone": "+1-234-567-8900",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Agency St",
      "addressLocality": "Tech City",
      "addressRegion": "CA",
      "postalCode": "90210",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 34.0901,
      "longitude": -118.4065
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default LocalBusinessSEO;
