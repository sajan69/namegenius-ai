/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://namegenius.sajanadhikari.com.np',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  changefreq: 'daily',
  priority: 0.7,
  exclude: ['/api/*'],
  robotsTxtOptions: {
    additionalSitemaps: ['https://namegenius.sajanadhikari.com.np/sitemap.xml'],
  },
};
