/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://pixential.in',
  generateRobotsTxt: true,
  exclude: ['/admin', '/admin/*', '/client', '/client/*', '/login', '/forgot-password', '/reset-password', '*/opengraph-image*', '/opengraph-image*', '/apple-icon*'],
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/', disallow: ['/admin', '/client', '/login', '/forgot-password', '/reset-password'] }],
  },
};
