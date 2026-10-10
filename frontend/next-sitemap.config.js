/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://example.com',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  // Add additional region-specific sitemaps if required
  // robotsTxtOptions: {
  //   additionalSitemaps: [
  //     'https://example.com/sitemap-locations.xml',
  //   ],
  // },
};
